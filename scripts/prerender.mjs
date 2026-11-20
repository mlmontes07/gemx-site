import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import zlib from 'node:zlib';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');
const distDir = path.join(rootDir, 'dist');
const ssrDir = path.join(rootDir, 'dist-ssr');
const publicDir = path.join(rootDir, 'public');
const COMPACT_LCP_ROUTES = new Set(['/', '/roi-calculator', '/request-demo']);
const GZIP_EXTENSIONS = new Set(['.html', '.js', '.css', '.svg', '.xml', '.txt', '.webmanifest']);

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

function buildLcpPreloadTag(entry) {
  const match = entry.ogImage.match(/\/img\/people\/([^/]+)\.jpg$/i);
  if (!match) return '';
  const slug = match[1];
  const isCompact = COMPACT_LCP_ROUTES.has(entry.path);
  const srcSet = isCompact
    ? `/img/people/${slug}-240.webp 240w, /img/people/${slug}-384.webp 384w, /img/people/${slug}-520.webp 520w, /img/people/${slug}-640.webp 640w, /img/people/${slug}-800.webp 800w`
    : `/img/people/${slug}-240.webp 240w, /img/people/${slug}-384.webp 384w, /img/people/${slug}-520.webp 520w, /img/people/${slug}-640.webp 640w, /img/people/${slug}-800.webp 800w, /img/people/${slug}-1280.webp 1280w`;
  const sizes = isCompact
    ? '(max-width: 34rem) 68vw, 9.75rem'
    : '(max-width: 58rem) 64vw, (max-width: 78rem) 38vw, 31.8rem';

  return `<link rel="preload" as="image" type="image/webp" imagesrcset="${escapeHtml(srcSet)}" imagesizes="${escapeHtml(sizes)}" fetchpriority="high" />`;
}

function inlineEntryCssAndStripExtraPreloads(html) {
  let out = html.replace(/<link\s+rel="modulepreload"[^>]*>\s*/gi, '');

  const cssLinkMatch = out.match(/<link rel="stylesheet"[^>]*href="(\/assets\/index-[^"]+\.css)"[^>]*>/);
  if (cssLinkMatch) {
    const cssRelPath = cssLinkMatch[1].replace(/^\/+/, '');
    const cssFilePath = path.join(distDir, cssRelPath);
    if (fs.existsSync(cssFilePath)) {
      const cssContent = fs.readFileSync(cssFilePath, 'utf8').replace(/<\/style/gi, '<\\/style');
      out = out.replace(cssLinkMatch[0], () => `<style id="gemx-inline-css">${cssContent}</style>`);
    }
  }

  const bodyScripts = [];
  const envScriptRe = /\s*<script[^>]*src="\/env-config\.js"[^>]*><\/script>\s*\n?/g;
  out = out.replace(envScriptRe, (m) => {
    bodyScripts.push(m.trim());
    return '\n';
  });

  let entrySrc = '';
  const entryScriptRe = /\s*<script\b[^>]*type="module"[^>]*src="(\/assets\/index-[^"]+\.js)"[^>]*><\/script>\s*\n?/i;
  out = out.replace(entryScriptRe, (_, src) => {
    entrySrc = src;
    return '\n';
  });

  if (entrySrc) {
    bodyScripts.push(
      [
        '<script>',
        '      (function () {',
        '        var booted = false;',
        '        function boot() {',
        '          if (booted) return;',
        '          booted = true;',
        `          import(${JSON.stringify(entrySrc)});`,
        '        }',
        "        ['pointerdown', 'keydown', 'touchstart', 'focusin'].forEach(function (ev) {",
        '          window.addEventListener(ev, boot, { once: true, passive: true });',
        '        });',
        '        function schedule() {',
        '          requestAnimationFrame(function () {',
        '            setTimeout(boot, 120);',
        '          });',
        '        }',
        "        if (document.readyState === 'complete') {",
        '          schedule();',
        '        } else {',
        "          window.addEventListener('load', schedule, { once: true });",
        '        }',
        '      })();',
        '    </script>',
      ].join('\n'),
    );
  }

  if (bodyScripts.length > 0) {
    const footerScripts = bodyScripts.map((tag) => `    ${tag}`).join('\n');
    out = out.replace('</body>', () => `${footerScripts}\n  </body>`);
  }

  return out;
}

function precompressDistFiles(dir) {
  let count = 0;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      count += precompressDistFiles(fullPath);
    } else if (entry.isFile() && GZIP_EXTENSIONS.has(path.extname(entry.name).toLowerCase())) {
      const raw = fs.readFileSync(fullPath);
      const gz = zlib.gzipSync(raw, { level: 9 });
      fs.writeFileSync(`${fullPath}.gz`, gz);
      count += 1;
    }
  }
  return count;
}

function buildHeadBlock(entry, siteDomain) {
  const baseUrl = `https://${siteDomain}`;
  const canonicalUrl = entry.path === '/' ? `${baseUrl}/` : `${baseUrl}${entry.path}`;
  const ogImageUrl = `${baseUrl}${entry.ogImage}`;

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

    const rawTemplateHtml = fs.readFileSync(path.join(distDir, 'index.html'), 'utf8');
    const templateHtml = inlineEntryCssAndStripExtraPreloads(rawTemplateHtml);
    const routes = Object.values(ALL_SEO_ROUTES);

    for (const entry of routes) {
      const appHtml = renderRouteHtml(entry.path);
      const headBlock = buildHeadBlock(entry, siteDomain);
      const lcpPreloadTag = buildLcpPreloadTag(entry);
      const jsonLd = JSON.stringify(buildJsonLdGraph(entry, siteDomain)).replace(/</g, '\\u003c');
      const ldScript = `    <script id="gemx-schema-ld" type="application/ld+json">${jsonLd}</script>`;

      const pageHtml = templateHtml
        .replace('<!-- LCP_PRELOAD -->', () => lcpPreloadTag)
        .replace(/<!-- SEO_HEAD_START -->[\s\S]*?<!-- SEO_HEAD_END -->/, () => headBlock)
        .replace('<!-- SSR_OUTLET -->', () => appHtml)
        .replace('</body>', () => `${ldScript}\n  </body>`);

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

    const gzCount = precompressDistFiles(distDir);
    console.log(
      `✅ SEO build complete: ${routes.length} static routes + sitemap.xml + robots.txt + llms.txt + ${gzCount} .gz sidecars generated.`,
    );
  } finally {
    fs.rmSync(ssrDir, { recursive: true, force: true });
  }
}

run().catch((err) => {
  console.error('❌ Pre-render failed:', err);
  process.exit(1);
});

