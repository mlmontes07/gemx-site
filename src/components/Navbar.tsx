import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import {
  ArrowRight,
  Award,
  Briefcase,
  Building2,
  ChevronDown,
  Clock,
  HeartHandshake,
  Laptop,
  LogIn,
  Menu,
  Monitor,
  Moon,
  PhilippinePeso,
  Smartphone,
  Sun,
  Users,
  Wallet,
  X,
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { HUB_SIGN_IN_URL } from '../config/site';
import { GemxLogo } from './GemxLogo';

const PRODUCT_NAV_ITEMS = [
  {
    to: '/products/core-hr',
    icon: Users,
    title: 'Core HR & 201 Files',
    desc: 'The organized home for your people',
  },
  {
    to: '/products/payroll',
    icon: PhilippinePeso,
    title: 'Payroll & Compliance',
    desc: 'Philippine rules, less complicated',
  },
  {
    to: '/products/time-attendance',
    icon: Clock,
    title: 'Time & Attendance',
    desc: 'Biometrics, shifts, holidays & leaves',
  },
  {
    to: '/products/recruitment',
    icon: Briefcase,
    title: 'Recruitment & Onboarding',
    desc: 'Hire smarter, welcome Day-One ready',
  },
  {
    to: '/products/talent-learning',
    icon: Award,
    title: 'Performance & Learning',
    desc: 'Goals, 360° reviews & online courses',
  },
  {
    to: '/products/benefits-assets',
    icon: HeartHandshake,
    title: 'Benefits, Assets & Relations',
    desc: 'HMO LOAs, equipment & due process',
  },
];

const SPECIAL_FEATURES_ITEMS = [
  {
    to: '/features/web-self-service',
    icon: Monitor,
    title: 'Web Self-Service',
    desc: 'Full browser employee & supervisor portal',
  },
  {
    to: '/features/mobile-self-service',
    icon: Smartphone,
    title: 'Mobile Self-Service',
    desc: 'Native iOS & Android HR in your pocket',
  },
  {
    to: '/features/multi-company',
    icon: Building2,
    title: 'Multi-Company & Branches',
    desc: 'Sister companies, branches & custom themes',
  },
  {
    to: '/features/workpulse',
    icon: Laptop,
    title: 'WorkPulse Hybrid Insights',
    desc: 'Fair focus & project logs for remote teams',
  },
  {
    to: '/features/salary-payouts',
    icon: Wallet,
    title: 'Instant Salary Payouts',
    desc: 'Direct Maya, PayMongo & bank payday files',
  },
];

export function Navbar() {
  const [openMenu, setOpenMenu] = useState<'products' | 'features' | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef<HTMLElement | null>(null);
  const location = useLocation();
  const { mode, resolvedTheme, cycleTheme } = useTheme();

  const themeBadgeLabel =
    mode === 'auto'
      ? `Auto · ${resolvedTheme === 'light' ? 'Day' : 'Night'}`
      : resolvedTheme === 'light'
        ? 'Day'
        : 'Night';

  useEffect(() => {
    setOpenMenu(null);
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpenMenu(null);
        setMobileOpen(false);
      }
    };
    const onPointerDown = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenMenu(null);
      }
    };
    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('mousedown', onPointerDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('mousedown', onPointerDown);
    };
  }, []);

  return (
    <header ref={navRef} className="nv-header">
      <a href="#page-main" className="skip-link visually-hidden">
        Skip to main content
      </a>

      <div className="phr-container nv-inner">
        <Link to="/" className="nv-brand" aria-label="gemX Home">
          <GemxLogo height={44} />
        </Link>

        {/* Clean Desktop Navigation */}
        <nav aria-label="Primary">
          <ul className="nv-menu" role="list">
            <li className="nv-dropdown-wrap">
              <button
                type="button"
                className={`nv-link${location.pathname.startsWith('/products/') ? ' active' : ''}`}
                aria-expanded={openMenu === 'products'}
                onClick={() => setOpenMenu((prev) => (prev === 'products' ? null : 'products'))}
              >
                Products
                <ChevronDown
                  size={15}
                  aria-hidden="true"
                  style={{
                    transform: openMenu === 'products' ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 150ms ease',
                  }}
                />
              </button>

              {openMenu === 'products' && (
                <div className="nv-mega-card">
                  <div className="nv-mega-grid">
                    {PRODUCT_NAV_ITEMS.map(({ to, icon: Icon, title, desc }) => (
                      <Link key={to} to={to} className="nv-tile">
                        <span className="nv-tile-icon" aria-hidden="true">
                          <Icon size={19} />
                        </span>
                        <span>
                          <strong style={{ display: 'block', fontSize: '0.94rem', color: 'var(--text-main)' }}>
                            {title}
                          </strong>
                          <span style={{ display: 'block', fontSize: '0.81rem', color: 'var(--text-muted)' }}>
                            {desc}
                          </span>
                        </span>
                      </Link>
                    ))}
                  </div>

                  <div className="nv-mega-foot">
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-body)' }}>
                      <strong style={{ color: 'var(--text-main)' }}>HR Anywhere — </strong>
                      Dedicated self-service on desktop browsers &amp; phones.
                    </p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.9rem', flexShrink: 0 }}>
                      <Link
                        to="/features/web-self-service"
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.3rem',
                          fontSize: '0.85rem',
                          fontWeight: 600,
                          color: 'var(--accent-sky)',
                          textDecoration: 'none',
                        }}
                      >
                        Web Portal <ArrowRight size={14} aria-hidden="true" />
                      </Link>
                      <Link
                        to="/features/mobile-self-service"
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.3rem',
                          fontSize: '0.85rem',
                          fontWeight: 600,
                          color: 'var(--accent-sky)',
                          textDecoration: 'none',
                        }}
                      >
                        Mobile App <ArrowRight size={14} aria-hidden="true" />
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </li>

            <li className="nv-dropdown-wrap">
              <button
                type="button"
                className={`nv-link${location.pathname.startsWith('/features/') ? ' active' : ''}`}
                aria-expanded={openMenu === 'features'}
                onClick={() => setOpenMenu((prev) => (prev === 'features' ? null : 'features'))}
              >
                Special Features
                <ChevronDown
                  size={15}
                  aria-hidden="true"
                  style={{
                    transform: openMenu === 'features' ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 150ms ease',
                  }}
                />
              </button>

              {openMenu === 'features' && (
                <div className="nv-mega-card" style={{ inlineSize: 'min(92vw, 42rem)' }}>
                  <div className="nv-mega-grid">
                    {SPECIAL_FEATURES_ITEMS.map(({ to, icon: Icon, title, desc }) => (
                      <Link key={to} to={to} className="nv-tile">
                        <span className="nv-tile-icon" aria-hidden="true">
                          <Icon size={19} />
                        </span>
                        <span>
                          <strong style={{ display: 'block', fontSize: '0.94rem', color: 'var(--text-main)' }}>
                            {title}
                          </strong>
                          <span style={{ display: 'block', fontSize: '0.81rem', color: 'var(--text-muted)' }}>
                            {desc}
                          </span>
                        </span>
                      </Link>
                    ))}
                  </div>

                  <div className="nv-mega-foot">
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-body)' }}>
                      <strong style={{ color: 'var(--text-main)' }}>Quantify Your Impact — </strong>
                      Estimate monthly HR &amp; payroll hours saved for your headcount.
                    </p>
                    <Link
                      to="/roi-calculator"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.35rem',
                        fontSize: '0.85rem',
                        fontWeight: 600,
                        color: 'var(--accent-sky)',
                        textDecoration: 'none',
                        flexShrink: 0,
                      }}
                    >
                      Calculate Time Saved <ArrowRight size={14} aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              )}
            </li>

            <li>
              <NavLink to="/" end className={({ isActive }) => `nv-link${isActive ? ' active' : ''}`}>
                Philippines HRIS
              </NavLink>
            </li>

            <li>
              <NavLink to="/roi-calculator" className={({ isActive }) => `nv-link${isActive ? ' active' : ''}`}>
                ROI Calculator
              </NavLink>
            </li>
          </ul>
        </nav>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem' }}>
          <button
            type="button"
            className="nv-theme-pill"
            onClick={cycleTheme}
            title="Automatically switches between Day (6 AM – 6 PM) and Night (6 PM – 6 AM). Click to preview Day, Night, or return to Auto."
            aria-label={`Display theme: ${themeBadgeLabel}. Click to switch between Automatic time-of-day, Day, and Night views.`}
          >
            {resolvedTheme === 'light' ? (
              <Sun size={15} style={{ color: 'var(--accent-icon)' }} aria-hidden="true" />
            ) : (
              <Moon size={15} style={{ color: 'var(--accent-icon)' }} aria-hidden="true" />
            )}
            <span className="nv-theme-pill-label">{themeBadgeLabel}</span>
          </button>

          <a href={HUB_SIGN_IN_URL} className="nv-signin-link">
            <LogIn size={15} aria-hidden="true" />
            <span>Sign In</span>
          </a>

          <Link to="/request-demo" className="btn-primary" style={{ minBlockSize: '2.55rem', padding: '0.5rem 1.2rem' }}>
            Request a Demo
          </Link>

          <button
            type="button"
            className="btn-secondary nv-mobile-btn"
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMobileOpen((v) => !v)}
            style={{ minBlockSize: '2.55rem', padding: '0.45rem 0.7rem' }}
          >
            {mobileOpen ? <X size={19} aria-hidden="true" /> : <Menu size={19} aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* Clean Mobile Menu */}
      {mobileOpen && (
        <nav
          aria-label="Mobile"
          style={{
            background: 'var(--bg-mobile-nav)',
            borderBlockStart: '1px solid var(--border-hairline)',
            padding: '1.25rem',
          }}
        >
          <div className="phr-container" style={{ display: 'grid', gap: '1.15rem' }}>
            <div>
              <p style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--accent-ink)', marginBlockEnd: '0.45rem' }}>
                PRODUCTS
              </p>
              <div style={{ display: 'grid', gap: '0.3rem' }}>
                {PRODUCT_NAV_ITEMS.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    className="nv-link"
                    style={{ justifyContent: 'flex-start', borderRadius: '0.6rem' }}
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <p style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--accent-ink)', marginBlockEnd: '0.45rem' }}>
                SPECIAL FEATURES &amp; TOOLS
              </p>
              <div style={{ display: 'grid', gap: '0.3rem' }}>
                {SPECIAL_FEATURES_ITEMS.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    className="nv-link"
                    style={{ justifyContent: 'flex-start', borderRadius: '0.6rem' }}
                  >
                    {item.title}
                  </Link>
                ))}
                <Link
                  to="/roi-calculator"
                  className="nv-link"
                  style={{ justifyContent: 'flex-start', borderRadius: '0.6rem' }}
                >
                  HR ROI &amp; Time-Savings Calculator
                </Link>
              </div>
            </div>

            <div
              style={{
                paddingBlockStart: '0.75rem',
                borderBlockStart: '1px solid var(--border-hairline)',
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.65rem',
              }}
            >
              <a
                href={HUB_SIGN_IN_URL}
                className="btn-secondary"
                style={{ flex: '1 1 11rem', justifyContent: 'center', minBlockSize: '2.65rem' }}
              >
                <LogIn size={16} aria-hidden="true" />
                <span>Sign In to gemX</span>
              </a>
              <Link
                to="/request-demo"
                className="btn-primary"
                style={{ flex: '1 1 11rem', justifyContent: 'center', minBlockSize: '2.65rem' }}
              >
                Request a Demo
              </Link>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}

