import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { SITE_DOMAIN } from '../config/site';
import { buildJsonLdGraph, getRouteSeo } from '../seo/seoData';

function upsertMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function upsertLink(rel: string, href: string, hreflang?: string) {
  const selector = hreflang
    ? `link[rel="${rel}"][hreflang="${hreflang}"]`
    : `link[rel="${rel}"]:not([hreflang])`;
  let el = document.head.querySelector<HTMLLinkElement>(selector);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    if (hreflang) el.setAttribute('hreflang', hreflang);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

export function SeoHead() {
  const { pathname } = useLocation();

  useEffect(() => {
    const entry = getRouteSeo(pathname);
    const baseUrl = `https://${SITE_DOMAIN}`;
    const canonicalUrl = entry.path === '/' ? `${baseUrl}/` : `${baseUrl}${entry.path}`;
    const ogImageUrl = `${baseUrl}${entry.ogImage}`;

    document.title = entry.title;

    upsertMeta('name', 'description', entry.description);
    upsertMeta('name', 'keywords', entry.keywords);
    upsertMeta('name', 'robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
    upsertMeta('name', 'geo.region', 'PH');
    upsertMeta('name', 'geo.placename', 'Philippines');

    upsertLink('canonical', canonicalUrl);
    upsertLink('alternate', canonicalUrl, 'en-PH');
    upsertLink('alternate', canonicalUrl, 'en');
    upsertLink('alternate', canonicalUrl, 'x-default');

    // Open Graph
    upsertMeta('property', 'og:type', 'website');
    upsertMeta('property', 'og:site_name', 'gemX');
    upsertMeta('property', 'og:locale', 'en_PH');
    upsertMeta('property', 'og:title', entry.title);
    upsertMeta('property', 'og:description', entry.description);
    upsertMeta('property', 'og:url', canonicalUrl);
    upsertMeta('property', 'og:image', ogImageUrl);
    upsertMeta('property', 'og:image:width', '1280');
    upsertMeta('property', 'og:image:height', '800');
    upsertMeta('property', 'og:image:alt', entry.ogImageAlt);

    // Twitter / X Card
    upsertMeta('name', 'twitter:card', 'summary_large_image');
    upsertMeta('name', 'twitter:title', entry.title);
    upsertMeta('name', 'twitter:description', entry.description);
    upsertMeta('name', 'twitter:image', ogImageUrl);
    upsertMeta('name', 'twitter:image:alt', entry.ogImageAlt);

    // Schema.org JSON-LD Graph
    const ldJson = JSON.stringify(buildJsonLdGraph(entry, SITE_DOMAIN));
    let scriptEl = document.getElementById('gemx-schema-ld') as HTMLScriptElement | null;
    if (!scriptEl) {
      scriptEl = document.createElement('script');
      scriptEl.id = 'gemx-schema-ld';
      scriptEl.type = 'application/ld+json';
      document.head.appendChild(scriptEl);
    }
    scriptEl.textContent = ldJson;
  }, [pathname]);

  return null;
}

