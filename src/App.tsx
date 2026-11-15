import { useEffect } from 'react';
import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { Breadcrumbs } from './components/Breadcrumbs';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { SeoHead } from './components/SeoHead';
import { StarfieldCanvas } from './components/StarfieldCanvas';
import { ThemeProvider } from './context/ThemeContext';
import { HomePage } from './pages/HomePage';
import { MobileSelfServicePage } from './pages/MobileSelfServicePage';
import { MultiCompanyPage } from './pages/MultiCompanyPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { RequestDemoPage } from './pages/RequestDemoPage';
import { RoiCalculatorPage } from './pages/RoiCalculatorPage';
import { SpecialFeaturePage } from './pages/SpecialFeaturePage';
import { WebSelfServicePage } from './pages/WebSelfServicePage';

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    }
  }, [pathname, hash]);
  return null;
}

export function AppShell() {
  return (
    <>
      <ScrollToTop />
      <SeoHead />
      <div className="space-canvas-shell">
        <div className="space-aurora" aria-hidden="true" />
        <StarfieldCanvas />
        <Navbar />
        <div className="phr-container">
          <Breadcrumbs />
        </div>

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

        <Footer />
      </div>
    </>
  );
}

export function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <AppShell />
      </BrowserRouter>
    </ThemeProvider>
  );
}
