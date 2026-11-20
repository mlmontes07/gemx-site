import { renderToString } from 'react-dom/server';
import { Navigate, Route, Routes, StaticRouter } from 'react-router-dom';
import { AppFrame } from './App';
import { ThemeProvider } from './context/ThemeContext';
import { HomePage } from './pages/HomePage';
import { MobileSelfServicePage } from './pages/MobileSelfServicePage';
import { MultiCompanyPage } from './pages/MultiCompanyPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { RequestDemoPage } from './pages/RequestDemoPage';
import { RoiCalculatorPage } from './pages/RoiCalculatorPage';
import { SpecialFeaturePage } from './pages/SpecialFeaturePage';
import { WebSelfServicePage } from './pages/WebSelfServicePage';
import { ALL_SEO_ROUTES, buildJsonLdGraph, getRouteSeo } from './seo/seoData';

export { ALL_SEO_ROUTES, buildJsonLdGraph, getRouteSeo };

export function renderRouteHtml(urlPath: string): string {
  return renderToString(
    <ThemeProvider>
      <StaticRouter location={urlPath}>
        <AppFrame>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products/:slug" element={<ProductDetailPage />} />
            <Route path="/features/web-self-service" element={<WebSelfServicePage />} />
            <Route path="/features/mobile-self-service" element={<MobileSelfServicePage />} />
            <Route path="/features/multi-company" element={<MultiCompanyPage />} />
            <Route path="/features/self-service" element={<Navigate to="/features/web-self-service" replace />} />
            <Route path="/features/:featureSlug" element={<SpecialFeaturePage />} />
            <Route path="/roi-calculator" element={<RoiCalculatorPage />} />
            <Route path="/request-demo" element={<RequestDemoPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </AppFrame>
      </StaticRouter>
    </ThemeProvider>,
  );
}

