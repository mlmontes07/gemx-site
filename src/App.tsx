import { ComponentType, lazy, LazyExoticComponent, ReactNode, Suspense, useEffect } from 'react';
import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { Breadcrumbs } from './components/Breadcrumbs';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { SeoHead } from './components/SeoHead';
import { StarfieldCanvas } from './components/StarfieldCanvas';
import { ThemeProvider } from './context/ThemeContext';

type RouteKey =
  | 'home'
  | 'product'
  | 'web-ess'
  | 'mobile-ess'
  | 'multi-company'
  | 'special-feature'
  | 'roi'
  | 'demo';

const RESOLVED_PAGES: Partial<Record<RouteKey, ComponentType>> = {};

const loadHomePage = () =>
  import('./pages/HomePage').then((m) => {
    RESOLVED_PAGES.home = m.HomePage;
    return { default: m.HomePage };
  });
const loadProductDetailPage = () =>
  import('./pages/ProductDetailPage').then((m) => {
    RESOLVED_PAGES.product = m.ProductDetailPage;
    return { default: m.ProductDetailPage };
  });
const loadWebSelfServicePage = () =>
  import('./pages/WebSelfServicePage').then((m) => {
    RESOLVED_PAGES['web-ess'] = m.WebSelfServicePage;
    return { default: m.WebSelfServicePage };
  });
const loadMobileSelfServicePage = () =>
  import('./pages/MobileSelfServicePage').then((m) => {
    RESOLVED_PAGES['mobile-ess'] = m.MobileSelfServicePage;
    return { default: m.MobileSelfServicePage };
  });
const loadMultiCompanyPage = () =>
  import('./pages/MultiCompanyPage').then((m) => {
    RESOLVED_PAGES['multi-company'] = m.MultiCompanyPage;
    return { default: m.MultiCompanyPage };
  });
const loadSpecialFeaturePage = () =>
  import('./pages/SpecialFeaturePage').then((m) => {
    RESOLVED_PAGES['special-feature'] = m.SpecialFeaturePage;
    return { default: m.SpecialFeaturePage };
  });
const loadRoiCalculatorPage = () =>
  import('./pages/RoiCalculatorPage').then((m) => {
    RESOLVED_PAGES.roi = m.RoiCalculatorPage;
    return { default: m.RoiCalculatorPage };
  });
const loadRequestDemoPage = () =>
  import('./pages/RequestDemoPage').then((m) => {
    RESOLVED_PAGES.demo = m.RequestDemoPage;
    return { default: m.RequestDemoPage };
  });

const HomePage = lazy(loadHomePage);
const ProductDetailPage = lazy(loadProductDetailPage);
const WebSelfServicePage = lazy(loadWebSelfServicePage);
const MobileSelfServicePage = lazy(loadMobileSelfServicePage);
const MultiCompanyPage = lazy(loadMultiCompanyPage);
const SpecialFeaturePage = lazy(loadSpecialFeaturePage);
const RoiCalculatorPage = lazy(loadRoiCalculatorPage);
const RequestDemoPage = lazy(loadRequestDemoPage);

function RouteSlot({
  routeKey,
  LazyComp,
}: {
  routeKey: RouteKey;
  LazyComp: LazyExoticComponent<ComponentType>;
}) {
  const SyncComp = RESOLVED_PAGES[routeKey];
  if (SyncComp) {
    return <SyncComp />;
  }
  return (
    <Suspense fallback={null}>
      <LazyComp />
    </Suspense>
  );
}

export function preloadRouteChunk(pathname: string): Promise<unknown> {
  const norm = pathname && pathname !== '/' ? pathname.replace(/\/+$/, '') || '/' : '/';
  if (norm === '/') return loadHomePage();
  if (norm.startsWith('/products/')) return loadProductDetailPage();
  if (norm === '/features/web-self-service' || norm === '/features/self-service') return loadWebSelfServicePage();
  if (norm === '/features/mobile-self-service') return loadMobileSelfServicePage();
  if (norm === '/features/multi-company') return loadMultiCompanyPage();
  if (norm.startsWith('/features/')) return loadSpecialFeaturePage();
  if (norm === '/roi-calculator') return loadRoiCalculatorPage();
  if (norm === '/request-demo') return loadRequestDemoPage();
  return loadHomePage();
}

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    }
  }, [pathname, hash]);
  return null;
}

export function AppFrame({ children }: { children: ReactNode }) {
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

        {children}

        <Footer />
      </div>
    </>
  );
}

export function AppShell() {
  return (
    <AppFrame>
      <Routes>
        <Route path="/" element={<RouteSlot routeKey="home" LazyComp={HomePage} />} />
        <Route path="/products/:slug" element={<RouteSlot routeKey="product" LazyComp={ProductDetailPage} />} />
        <Route path="/features/web-self-service" element={<RouteSlot routeKey="web-ess" LazyComp={WebSelfServicePage} />} />
        <Route path="/features/mobile-self-service" element={<RouteSlot routeKey="mobile-ess" LazyComp={MobileSelfServicePage} />} />
        <Route path="/features/multi-company" element={<RouteSlot routeKey="multi-company" LazyComp={MultiCompanyPage} />} />
        <Route path="/features/self-service" element={<Navigate to="/features/web-self-service" replace />} />
        <Route path="/features/:featureSlug" element={<RouteSlot routeKey="special-feature" LazyComp={SpecialFeaturePage} />} />
        <Route path="/roi-calculator" element={<RouteSlot routeKey="roi" LazyComp={RoiCalculatorPage} />} />
        <Route path="/request-demo" element={<RouteSlot routeKey="demo" LazyComp={RequestDemoPage} />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AppFrame>
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
