import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { AppShell } from './App';
import { ThemeProvider } from './context/ThemeContext';
import { ALL_SEO_ROUTES, buildJsonLdGraph, getRouteSeo } from './seo/seoData';

export { ALL_SEO_ROUTES, buildJsonLdGraph, getRouteSeo };

export function renderRouteHtml(urlPath: string): string {
  return renderToString(
    <ThemeProvider>
      <StaticRouter location={urlPath}>
        <AppShell />
      </StaticRouter>
    </ThemeProvider>,
  );
}

