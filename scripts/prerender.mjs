import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');
const distDir = path.join(rootDir, 'dist');
const ssrDir = path.join(rootDir, 'dist-ssr');
const publicDir = path.join(rootDir, 'public');

function readEnvDomain() {
  if (process.env.DOMAIN && process.env.DOMAIN.trim()) {
    return process.env.DOMAIN.trim().replace(/^https?:\/\//i, '').replace(/\/+$/, '');
  }
  const envFile = path.join(rootDir, '.env');
  if (fs.existsSync(envFile)) {
    const lines = fs.readFileSync(envFile, 'utf8').split(/\r?\n/);
    for (const line of lines) {
      const m = line.match(/^\s*DOMAIN\s*=\s*(.+)\s*$/);
      if (m) {
        return m[1].replace(/^['"]|['"]$/g, '').trim().replace(/^https?:\/\//i, '').replace(/\/+$/, '');
      }
    }
  }
  return 'gemx.ph';
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function escapeXml(str) {
  return escapeHtml(str).replace(/'/g, '&apos;');
}

function buildHeadBlock(entry, siteDomain, buildJsonLdGraph) {
  const baseUrl = `https://${siteDomain}`;
  const canonicalUrl = entry.path === '/' ? `${baseUrl}/` : `${baseUrl}${entry.path}`;
  const ogImageUrl = `${baseUrl}${entry.ogImage}`;
  const jsonLd = JSON.stringify(buildJsonLdGraph(entry, siteDomain)).replace(/</g, '\\u003c');

  return [
    '<!-- SEO_HEAD_START -->',
    `    <title>${escapeHtml(entry.title)}</title>`,
    `    <meta name="description" content="${escapeHtml(entry.description)}" />`,
    `    <meta name="keywords" content="${escapeHtml(entry.keywords)}" />`,
    `    <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />`,
    `    <meta name="geo.region" content="PH" />`,
    `    <meta name="geo.placename" content="Philippines" />`,
    `    <link rel="canonical" href="${escapeHtml(canonicalUrl)}" />`,
    `    <link rel="alternate" hreflang="en-PH" href="${escapeHtml(canonicalUrl)}" />`,
    `    <link rel="alternate" hreflang="en" href="${escapeHtml(canonicalUrl)}" />`,
    `    <link rel="alternate" hreflang="x-default" href="${escapeHtml(canonicalUrl)}" />`,
    `    <meta property="og:type" content="website" />`,
    `    <meta property="og:site_name" content="gemX" />`,
    `    <meta property="og:locale" content="en_PH" />`,
    `    <meta property="og:title" content="${escapeHtml(entry.title)}" />`,
    `    <meta property="og:description" content="${escapeHtml(entry.description)}" />`,
    `    <meta property="og:url" content="${escapeHtml(canonicalUrl)}" />`,
    `    <meta property="og:image" content="${escapeHtml(ogImageUrl)}" />`,
    `    <meta property="og:image:width" content="1280" />`,
    `    <meta property="og:image:height" content="800" />`,
    `    <meta property="og:image:alt" content="${escapeHtml(entry.ogImageAlt)}" />`,
    `    <meta name="twitter:card" content="summary_large_image" />`,
    `    <meta name="twitter:title" content="${escapeHtml(entry.title)}" />`,
    `    <meta name="twitter:description" content="${escapeHtml(entry.description)}" />`,
    `    <meta name="twitter:image" content="${escapeHtml(ogImageUrl)}" />`,
    `    <meta name="twitter:image:alt" content="${escapeHtml(entry.ogImageAlt)}" />`,
    `    <script id="gemx-schema-ld" type="application/ld+json">${jsonLd}</script>`,
    '    <!-- SEO_HEAD_END -->',
  ].join('\n');
}

async function run() {
  const siteDomain = readEnvDomain();
  const baseUrl = `https://${siteDomain}`;
  const todayIso = new Date().toISOString().slice(0, 10);

  console.log(`🔍 Pre-rendering static SEO routes & sitemaps for https://${siteDomain} ...`);

  // 1. Build SSR bundle via local Vite CLI
  const viteBin = path.join(rootDir, 'node_modules', 'vite', 'bin', 'vite.js');
  execFileSync(
    process.execPath,
    [viteBin, 'build', '--ssr', 'src/entry-server.tsx', '--outDir', 'dist-ssr', '--logLevel', 'warn'],
    { cwd: rootDir, stdio: 'inherit' },
  );

  try {
    const ssrModuleUrl = pathToFileURL(path.join(ssrDir, 'entry-server.js')).href;
    const { ALL_SEO_ROUTES, buildJsonLdGraph, renderRouteHtml } = await import(ssrModuleUrl);

    const templateHtml = fs.readFileSync(path.join(distDir, 'index.html'), 'utf8');
    const routes = Object.values(ALL_SEO_ROUTES);

    for (const entry of routes) {
      const appHtml = renderRouteHtml(entry.path);
      const headBlock = buildHeadBlock(entry, siteDomain, buildJsonLdGraph);

      const pageHtml = templateHtml
        .replace(/<!-- SEO_HEAD_START -->[\s\S]*?<!-- SEO_HEAD_END -->/, headBlock)
        .replace('<!-- SSR_OUTLET -->', appHtml);

      const outFile =
        entry.path === '/'
          ? path.join(distDir, 'index.html')
          : path.join(distDir, entry.path.replace(/^\/+/, ''), 'index.html');

      fs.mkdirSync(path.dirname(outFile), { recursive: true });
      fs.writeFileSync(outFile, pageHtml, 'utf8');
      console.log(`  ✓ Pre-rendered ${entry.path} -> ${path.relative(rootDir, outFile)}`);
    }

    // 2. Generate XML Sitemap with Google Image Sitemap extensions
    const sitemapEntries = routes
      .map((entry) => {
        const loc = entry.path === '/' ? `${baseUrl}/` : `${baseUrl}${entry.path}`;
        const imgLoc = `${baseUrl}${entry.ogImage}`;
        return [
          '  <url>',
          `    <loc>${escapeXml(loc)}</loc>`,
          `    <lastmod>${todayIso}</lastmod>`,
          `    <changefreq>${entry.changefreq}</changefreq>`,
          `    <priority>${entry.priority}</priority>`,
          '    <image:image>',
          `      <image:loc>${escapeXml(imgLoc)}</image:loc>`,
          `      <image:title>${escapeXml(entry.title)}</image:title>`,
          `      <image:caption>${escapeXml(entry.ogImageAlt)}</image:caption>`,
          '    </image:image>',
          '  </url>',
        ].join('\n');
      })
      .join('\n');

    const sitemapXml = [
      '<?xml version="1.0" encoding="UTF-8"?>',
      '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"',
      '        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">',
      sitemapEntries,
      '</urlset>',
      '',
    ].join('\n');

    // 3. Generate robots.txt
    const robotsTxt = [
      'User-agent: *',
      'Allow: /',
      '',
      `Sitemap: ${baseUrl}/sitemap.xml`,
      '',
    ].join('\n');

    // 4. Generate llms.txt for AI Search & Answer Engines
    const llmsTxt = [
      '# gemX — All-in-One HRIS & Payroll Software in the Philippines',
      '',
      '> gemX is a complete Human Resource Information System (HRIS) and Payroll platform built specifically for Philippine statutory compliance (BIR Form 2316 & Alphalist, SSS, PhilHealth, Pag-IBIG, TRAIN Law tax, 13th month pay, and DOLE labor rules), biometric attendance, employee self-service, and multi-company groups.',
      '',
      '## Key Product Modules & Canonical Pages',
      ...routes.map((r) => {
        const loc = r.path === '/' ? `${baseUrl}/` : `${baseUrl}${r.path}`;
        return `- [${r.title}](${loc}): ${r.description}`;
      }),
      '',
    ].join('\n');

    for (const dir of [distDir, publicDir]) {
      fs.writeFileSync(path.join(dir, 'sitemap.xml'), sitemapXml, 'utf8');
      fs.writeFileSync(path.join(dir, 'robots.txt'), robotsTxt, 'utf8');
      fs.writeFileSync(path.join(dir, 'llms.txt'), llmsTxt, 'utf8');
    }

    console.log(`✅ SEO build complete: ${routes.length} static routes + sitemap.xml + robots.txt + llms.txt generated.`);
  } finally {
    fs.rmSync(ssrDir, { recursive: true, force: true });
  }
}

run().catch((err) => {
  console.error('❌ Pre-render failed:', err);
  process.exit(1);
});

