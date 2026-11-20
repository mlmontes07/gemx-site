export interface BreadcrumbItem {
  name: string;
  path: string;
}

const ROUTE_BREADCRUMBS: Record<string, BreadcrumbItem[]> = {
  '/': [{ name: 'Home', path: '/' }],
  '/products/core-hr': [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/#products' },
    { name: 'Core HR & 201 Files', path: '/products/core-hr' },
  ],
  '/products/payroll': [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/#products' },
    { name: 'Payroll & Compliance', path: '/products/payroll' },
  ],
  '/products/time-attendance': [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/#products' },
    { name: 'Time & Attendance', path: '/products/time-attendance' },
  ],
  '/products/recruitment': [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/#products' },
    { name: 'Recruitment & Onboarding', path: '/products/recruitment' },
  ],
  '/products/talent-learning': [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/#products' },
    { name: 'Performance & Learning', path: '/products/talent-learning' },
  ],
  '/products/benefits-assets': [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/#products' },
    { name: 'Benefits, Assets & Relations', path: '/products/benefits-assets' },
  ],
  '/features/multi-company': [
    { name: 'Home', path: '/' },
    { name: 'Special Features', path: '/features/multi-company' },
    { name: 'Multi-Company & Branches', path: '/features/multi-company' },
  ],
  '/features/web-self-service': [
    { name: 'Home', path: '/' },
    { name: 'Special Features', path: '/features/web-self-service' },
    { name: 'Web Self-Service', path: '/features/web-self-service' },
  ],
  '/features/mobile-self-service': [
    { name: 'Home', path: '/' },
    { name: 'Special Features', path: '/features/mobile-self-service' },
    { name: 'Mobile Self-Service', path: '/features/mobile-self-service' },
  ],
  '/features/workpulse': [
    { name: 'Home', path: '/' },
    { name: 'Special Features', path: '/features/workpulse' },
    { name: 'WorkPulse Hybrid Insights', path: '/features/workpulse' },
  ],
  '/features/salary-payouts': [
    { name: 'Home', path: '/' },
    { name: 'Special Features', path: '/features/salary-payouts' },
    { name: 'Instant Salary Payouts', path: '/features/salary-payouts' },
  ],
  '/roi-calculator': [
    { name: 'Home', path: '/' },
    { name: 'HR ROI & Time Calculator', path: '/roi-calculator' },
  ],
  '/request-demo': [
    { name: 'Home', path: '/' },
    { name: 'Request a Demo', path: '/request-demo' },
  ],
};

export function normalizePathname(pathname: string): string {
  if (!pathname || pathname === '/') return '/';
  const cleaned = pathname.replace(/\/+$/, '');
  return cleaned || '/';
}

export function getRouteBreadcrumbs(pathname: string): BreadcrumbItem[] {
  const norm = normalizePathname(pathname);
  return ROUTE_BREADCRUMBS[norm] ?? ROUTE_BREADCRUMBS['/'];
}
