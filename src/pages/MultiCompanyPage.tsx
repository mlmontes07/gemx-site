import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Building2, Check, MapPin, Palette, ShieldCheck } from 'lucide-react';
import { HumanStoryCard } from '../components/HumanStoryCard';
import { UiMockupCard } from '../components/UiMockupCard';

const COMPANY_THEMES = [
  {
    id: 'navy-gold',
    themeLabel: 'gemX Navy & Gold',
    company: 'Apex Holdings Corp.',
    subtitle: 'Parent Holding Company · 4 Head Office Branches',
    primary: '#0f2963',
    secondary: '#1e3a8a',
    dot: '#fbbf24',
  },
  {
    id: 'pine',
    themeLabel: 'Editorial Pine',
    company: 'Verdant Retail & Distribution Inc.',
    subtitle: 'Sister Company · 8 Nationwide Store Branches',
    primary: '#15803d',
    secondary: '#10b981',
    dot: '#10b981',
  },
  {
    id: 'sapphire',
    themeLabel: 'Executive Sapphire',
    company: 'Lumina Medical & Diagnostic Centers',
    subtitle: 'Sister Company · 5 Regional Clinics',
    primary: '#1d4ed8',
    secondary: '#2563eb',
    dot: '#60a5fa',
  },
  {
    id: 'amber',
    themeLabel: 'Warm Sovereign Gold',
    company: 'Solstice Hotels & Hospitality',
    subtitle: 'Sister Company · 6 Island Properties',
    primary: '#b45309',
    secondary: '#d97706',
    dot: '#f59e0b',
  },
] as const;

export function MultiCompanyPage() {
  const [selectedId, setSelectedId] = useState<(typeof COMPANY_THEMES)[number]['id']>('navy-gold');
  const activeTheme = COMPANY_THEMES.find((t) => t.id === selectedId) ?? COMPANY_THEMES[0];

  return (
    <main id="page-main">
      {/* Hero */}
      <section className="phr-section" style={{ paddingBlockStart: 'clamp(2.75rem, 5vw, 4.5rem)' }}>
        <div className="phr-container hero-split">
          <div>
            <span className="phr-eyebrow">
              <Building2 size={14} aria-hidden="true" />
              Special Feature · Holding Groups &amp; Multi-Branch
            </span>
            <h1 className="phr-h1">
              One Executive Hub for <span className="cosmic-accent">Every Sister Company &amp; Branch</span>.
            </h1>
            <p className="phr-lead">
              Manage multiple businesses under one group without logging in and out of separate accounts—while keeping
              each company’s logo, brand colors, payroll, and employee records 100% separate.
            </p>

            <ul className="check-list" role="list">
              {[
                'Switch between authorized sister companies in a single click',
                'Independent company logo, color theme & report header per entity',
                'Branch-specific managers, locations & local city/provincial holidays',
                'Strict confidentiality—no cross-company mixing of salaries or 201 files',
              ].map((pt) => (
                <li key={pt}>
                  <span className="check-bullet" aria-hidden="true">
                    <Check size={13} strokeWidth={3} />
                  </span>
                  <span>{pt}</span>
                </li>
              ))}
            </ul>

            <div style={{ marginBlockStart: '2rem', display: 'flex', flexWrap: 'wrap', gap: '0.85rem' }}>
              <Link to="/request-demo" className="btn-primary">
                Request a Group Demo <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </div>

          <div style={{ display: 'grid', gap: '1.15rem' }}>
            <HumanStoryCard
              priority
              photo="executive-multicompany"
              alt="Three Filipino business and HR executives collaborating calmly in a modern Manila boardroom"
              problemLabel="Before: Logging in and out of 4 separate systems"
              solutionBadge="With gemX: One executive view, 100% private entities"
              quote="Our shared-services HR team switches across four sister companies in one click while keeping every company’s payroll and records strictly separate."
              personAttribution="VP of Shared Services · Philippine Holding Group"
            />

            <UiMockupCard
              preview={{
                eyebrow: 'Conglomerate Hub',
                title: 'Apex Group · 4 Sister Companies',
                highlightLabel: 'Data Separation',
                highlightValue: '100% Private',
                metrics: [
                  { label: 'Companies in Group', value: '4 Entities' },
                  { label: 'Total Branches', value: '23 Locations' },
                ],
                items: [
                  { title: 'Apex Holdings Corp. (Parent)', subtitle: 'Active Workspace · Signature Navy & Gold Theme', status: 'Active', tone: 'mint' },
                  { title: 'Verdant Retail Inc. (Subsidiary)', subtitle: 'Separate TIN, SSS, Payroll & Careers Page', status: 'Switch →', tone: 'sky' },
                  { title: 'Lumina Medical Centers (Subsidiary)', subtitle: 'Separate HMO, Shifts & 201 Masterfile', status: 'Switch →', tone: 'violet' },
                ],
              }}
            />
          </div>
        </div>
      </section>

      {/* Interactive Brand Theme Switcher */}
      <section className="phr-section phr-section--alt">
        <div className="phr-container feat-split">
          <div>
            <span className="phr-eyebrow">
              <Palette size={14} aria-hidden="true" />
              Per-Company Branding
            </span>
            <h2 className="phr-h2">Every Company Feels Like Home to Its Own Employees</h2>
            <p className="phr-lead">
              Give each sister company its own distinct visual theme, corporate logo, payslip heading, and public
              careers page. Click any theme below to preview how workspaces adapt instantly:
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.55rem', marginBlockStart: '1.5rem' }}>
              {COMPANY_THEMES.map((item) => {
                const active = item.id === activeTheme.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    aria-pressed={active}
                    onClick={() => setSelectedId(item.id)}
                    className="ph-mod-tab"
                  >
                    <span
                      aria-hidden="true"
                      style={{
                        inlineSize: '0.75rem',
                        blockSize: '0.75rem',
                        borderRadius: '50%',
                        background: item.dot,
                      }}
                    />
                    {item.themeLabel}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="space-card" style={{ overflow: 'clip' }}>
            <div
              style={{
                padding: '1.5rem 1.75rem',
                background: `linear-gradient(135deg, ${activeTheme.primary}, ${activeTheme.secondary})`,
                borderBlockEnd: '2px solid rgba(251, 191, 36, 0.45)',
                color: '#ffffff',
              }}
            >
              <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#fde047', letterSpacing: '0.05em' }}>
                ACTIVE COMPANY WORKSPACE
              </span>
              <h3 style={{ fontSize: '1.4rem', marginBlockStart: '0.25rem', color: '#ffffff' }}>
                {activeTheme.company}
              </h3>
              <p style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.9)', marginBlockStart: '0.2rem' }}>
                {activeTheme.subtitle}
              </p>
            </div>

            <div style={{ padding: '1.5rem 1.75rem', display: 'grid', gap: '0.85rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.9rem' }}>
                <MapPin size={17} style={{ color: 'var(--accent-icon)', flexShrink: 0 }} aria-hidden="true" />
                <span>Independent branch locations, geofences &amp; local city holidays</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.9rem' }}>
                <ShieldCheck size={17} style={{ color: 'var(--accent-icon)', flexShrink: 0 }} aria-hidden="true" />
                <span>Payslips, BIR Form 2316 &amp; Careers Page branded for {activeTheme.company}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="phr-section" style={{ textAlign: 'center' }}>
        <div className="phr-container" style={{ maxInlineSize: '44rem' }}>
          <h2 className="phr-h2">Running multiple sister companies or nationwide branches?</h2>
          <p className="phr-lead" style={{ marginBlockEnd: '1.85rem' }}>
            See how gemX simplifies shared-services HR while keeping every entity independent and compliant.
          </p>
          <Link to="/request-demo" className="btn-primary">
            Book a Multi-Company Demo <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </main>
  );
}

