import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  AlertCircle,
  ArrowRight,
  Award,
  Briefcase,
  Check,
  Clock,
  HeartHandshake,
  PhilippinePeso,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Users,
} from 'lucide-react';
import { CleanFaq } from '../components/CleanFaq';
import { DemoFormCard } from '../components/DemoFormCard';
import { UiMockupCard } from '../components/UiMockupCard';
import {
  HOME_GENERAL_FAQS,
  HOME_MODULE_TABS,
  HOME_PAYROLL_ACCORDION,
  HOME_PROBLEMS_WE_FIX,
} from '../data/sitePagesData';

const TAB_ICONS: Record<string, typeof Users> = {
  hr: Users,
  time: Clock,
  pay: PhilippinePeso,
  talent: Award,
  benefits: HeartHandshake,
  recruitment: Briefcase,
};

export function HomePage() {
  const [activeTabId, setActiveTabId] = useState<string>(HOME_MODULE_TABS[0].id);
  const activeTab = HOME_MODULE_TABS.find((t) => t.id === activeTabId) ?? HOME_MODULE_TABS[0];

  return (
    <main id="page-main">
      {/* 1. CLEAN SPLIT HERO (PeoplesHR Philippines Layout) */}
      <section className="phr-section" style={{ paddingBlockStart: 'clamp(2.75rem, 5vw, 4.5rem)' }}>
        <div className="phr-container hero-split">
          <div>
            <span className="phr-eyebrow">
              <Sparkles size={14} aria-hidden="true" />
              All-in-One Philippines HRIS &amp; Payroll
            </span>

            <h1 className="phr-h1">
              Your <span className="cosmic-accent">All-in-One HRIS</span>. Built for{' '}
              <span className="cosmic-accent">Philippine Compliance</span>.
            </h1>

            <ul className="check-list" role="list" style={{ marginBlockStart: '1.75rem' }}>
              {[
                'Accurate payroll, built for BIR, SSS, PhilHealth, Pag-IBIG & DOLE compliance',
                'Connected biometric attendance, shifts, local holidays, and payroll',
                'Self-service mobile & web HR for employees and line managers',
                'Ready for single enterprises, regional branches & multi-company groups',
              ].map((line) => (
                <li key={line}>
                  <span className="check-bullet" aria-hidden="true">
                    <Check size={13} strokeWidth={3} />
                  </span>
                  <span>{line}</span>
                </li>
              ))}
            </ul>

            {/* Subtle Highlights Strip */}
            <div
              style={{
                marginBlockStart: '2.25rem',
                paddingBlockStart: '1.5rem',
                borderBlockStart: '1px solid var(--border-hairline)',
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1.75rem',
              }}
            >
              {[
                { num: 'Hire to Retire', label: 'Complete HR Suite' },
                { num: '100%', label: 'Philippine Compliant' },
                { num: 'Multi-Entity', label: 'Sister Company Ready' },
              ].map((stat) => (
                <div key={stat.label}>
                  <strong
                    style={{
                      display: 'block',
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.25rem',
                      color: 'var(--accent-stat)',
                    }}
                  >
                    {stat.num}
                  </strong>
                  <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div id="hero-demo-box">
            <DemoFormCard />
          </div>
        </div>
      </section>

      {/* 2. SOUND FAMILIAR? THESE ARE THE PROBLEMS WE FIX */}
      <section className="phr-section phr-section--alt">
        <div className="phr-container">
          <div className="space-card" style={{ padding: 'clamp(1.75rem, 4vw, 3rem)' }}>
            <h2 className="phr-h2">Sound familiar? These are the problems we fix.</h2>
            <div
              style={{
                blockSize: '1px',
                background: 'var(--border-hairline)',
                marginBlock: '1.35rem 1.85rem',
              }}
            />

            <div className="feat-split">
              <div>
                <p style={{ fontSize: '0.94rem', fontWeight: 600, color: 'var(--accent-ink)', marginBlockEnd: '1.1rem' }}>
                  What HR, Finance &amp; Business Leaders across the Philippines deal with every cutoff:
                </p>
                <ul role="list" style={{ listStyle: 'none', margin: 0, padding: 0, display: 'grid', gap: '0.9rem' }}>
                  {HOME_PROBLEMS_WE_FIX.map((problem) => (
                    <li
                      key={problem}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '0.75rem',
                        fontSize: '0.96rem',
                        color: 'var(--text-main)',
                      }}
                    >
                      <AlertCircle
                        size={19}
                        aria-hidden="true"
                        style={{ color: 'var(--accent-icon)', flexShrink: 0, marginBlockStart: '0.2rem' }}
                      />
                      <span>{problem}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="callout-panel">
                <span className="phr-eyebrow">From Spreadsheets to One System</span>
                <h3 style={{ fontSize: '1.4rem', marginBlockEnd: '0.75rem' }}>
                  Replace scattered spreadsheets and email chains with one calm, connected platform.
                </h3>
                <p style={{ fontSize: '0.94rem', marginBlockEnd: '1.35rem' }}>
                  When Recruitment, 201 Files, Attendance, Leaves, Loans, Benefits, and Payroll share the same home,
                  your team stops babysitting manual files and focuses on your people.
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                  <Link to="/roi-calculator" className="btn-secondary">
                    Calculate Time Saved <ArrowRight size={15} aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. THRIVE WITH OUR ALL-IN-ONE HRIS (Clean 6-Module Tabs) */}
      <section className="phr-section">
        <div className="phr-container">
          <div className="phr-section-header">
            <h2 className="phr-h2">
              Thrive with our <span className="cosmic-accent">All-in-One HRIS</span>
            </h2>
            <p className="phr-lead">
              Click any pillar below for a quick look—or jump into its dedicated page to explore every detail.
            </p>
          </div>

          <div role="tablist" aria-label="gemX modules" className="ph-mod-tabs">
            {HOME_MODULE_TABS.map((tab) => {
              const Icon = TAB_ICONS[tab.id] ?? Users;
              const selected = tab.id === activeTab.id;
              return (
                <button
                  key={tab.id}
                  id={`home-tab-${tab.id}`}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  aria-controls={`home-panel-${tab.id}`}
                  className="ph-mod-tab"
                  onClick={() => setActiveTabId(tab.id)}
                >
                  <Icon
                    size={17}
                    aria-hidden="true"
                    style={{ color: selected ? 'var(--accent-icon)' : 'currentColor' }}
                  />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          <div
            id={`home-panel-${activeTab.id}`}
            role="tabpanel"
            aria-labelledby={`home-tab-${activeTab.id}`}
            className="space-card ph-mod-panel"
          >
            <div>
              <h3 style={{ fontSize: 'clamp(1.35rem, 1.1rem + 1vw, 1.8rem)', marginBlockEnd: '1.25rem' }}>
                {activeTab.headline}
              </h3>

              <div style={{ display: 'grid', gap: '1.25rem', marginBlockEnd: '1.65rem' }}>
                {activeTab.outcomeGroups.map((grp) => (
                  <div key={grp.groupTitle}>
                    <p
                      style={{
                        fontSize: '0.82rem',
                        fontWeight: 700,
                        letterSpacing: '0.04em',
                        color: 'var(--accent-ink)',
                        marginBlockEnd: '0.5rem',
                      }}
                    >
                      {grp.groupTitle.toUpperCase()}
                    </p>
                    <ul className="check-list" role="list" style={{ marginBlockStart: 0, gap: '0.5rem' }}>
                      {grp.points.map((pt) => (
                        <li key={pt} style={{ fontSize: '0.92rem' }}>
                          <span className="check-bullet" aria-hidden="true">
                            <Check size={12} strokeWidth={3} />
                          </span>
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <Link to={activeTab.route} className="btn-secondary">
                {activeTab.routeLabel}
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>

            <UiMockupCard preview={activeTab.preview} />
          </div>
        </div>
      </section>

      {/* 4. PHILIPPINE STATUTORY COMPLIANCE STRIP */}
      <section className="phr-section phr-section--alt" style={{ paddingBlock: '3.25rem' }}>
        <div className="phr-container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(1.35rem, 1.1rem + 1vw, 1.85rem)', marginBlockEnd: '1.5rem' }}>
            Built on Philippine Statutory and Data Privacy Compliance.
          </h2>

          <div className="compliance-badges-row">
            {[
              'BIR Form 2316 & Alphalist',
              'SSS (R-3, R-5 & Loans)',
              'PhilHealth Schedules',
              'Pag-IBIG Savings & Loans',
              'DOLE Holiday & OT Rules',
              'Strict Data Confidentiality',
            ].map((item) => (
              <span key={item} className="compliance-pill">
                <ShieldCheck size={18} style={{ color: 'var(--accent-icon)' }} aria-hidden="true" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 5. STRONGEST PAYROLL SOFTWARE THAT PLAYS BY PHILIPPINE RULES */}
      <section className="phr-section">
        <div className="phr-container">
          <div className="phr-section-header">
            <h2 className="phr-h2">
              Strongest Payroll Software that <span className="cosmic-accent">plays by the Philippine rules</span>
            </h2>
            <p className="phr-lead">
              Between BIR, SSS, PhilHealth, Pag-IBIG, loan deductions, and holiday pay rules, Philippine payroll takes
              precision. We built gemX so every cutoff feels effortless.
            </p>
          </div>

          <div className="feat-split">
            <div>
              <UiMockupCard
                preview={{
                  eyebrow: 'Philippine Payroll Engine',
                  title: 'Cutoff Summary & Statutory Readiness',
                  highlightLabel: 'Payday Status',
                  highlightValue: 'On Time',
                  metrics: [
                    { label: '13th Month & Tax', value: 'Built In' },
                    { label: 'Payouts', value: 'Banks + Wallets' },
                  ],
                  items: [
                    {
                      title: 'TRAIN Law Tax & ₱90K Ceiling',
                      subtitle: 'Computed automatically every period',
                      status: 'Verified',
                      tone: 'mint',
                    },
                    {
                      title: 'BIR Form 2316 & Alphalist Pack',
                      subtitle: 'Signed PDFs & submission files ready',
                      status: '1 Click',
                      tone: 'sky',
                    },
                    {
                      title: 'Maya, PayMongo & Bank Advice Files',
                      subtitle: 'Instant salary release upon period lock',
                      status: 'Ready',
                      tone: 'violet',
                    },
                  ],
                }}
              />
              <div style={{ marginBlockStart: '1.25rem', textAlign: 'center' }}>
                <Link to="/products/payroll" className="btn-secondary">
                  See Full Payroll &amp; Compliance Page <ArrowRight size={15} aria-hidden="true" />
                </Link>
              </div>
            </div>

            <CleanFaq items={HOME_PAYROLL_ACCORDION} defaultOpenIndex={0} />
          </div>
        </div>
      </section>

      {/* 6. HR IN YOUR POCKET */}
      <section className="phr-section phr-section--alt">
        <div className="phr-container feat-split">
          <div>
            <span className="phr-eyebrow">
              <Smartphone size={14} aria-hidden="true" />
              Mobile &amp; Web Self-Service
            </span>
            <h2 className="phr-h2">HR in Your Pocket: Everything You Need, Anywhere You Are</h2>
            <p className="phr-lead">
              No more waiting days for HR to reply. No more digging through emails to find a payslip. Employees and
              managers handle everyday tasks in seconds.
            </p>

            <ul className="check-list" role="list">
              {[
                'Location-verified clock in/out with live selfie photo',
                'Apply for leave or overtime and check balances instantly',
                'View and download itemized PDF payslips & BIR Form 2316',
                'Request Hospital LOAs, check loan balances & view wallet payouts',
                'One-tap manager approvals for team attendance, leaves & clearances',
              ].map((pt) => (
                <li key={pt}>
                  <span className="check-bullet" aria-hidden="true">
                    <Check size={13} strokeWidth={3} />
                  </span>
                  <span>{pt}</span>
                </li>
              ))}
            </ul>

            <div style={{ marginBlockStart: '1.75rem', display: 'flex', flexWrap: 'wrap', gap: '0.85rem' }}>
              <Link to="/features/self-service" className="btn-primary">
                Explore Self-Service Experience <ArrowRight size={16} aria-hidden="true" />
              </Link>
              <Link to="/features/multi-company" className="btn-secondary">
                Multi-Company Groups →
              </Link>
            </div>
          </div>

          <UiMockupCard
            preview={{
              eyebrow: 'Employee & Manager App',
              title: 'Everyday Self-Service Shortcuts',
              highlightLabel: 'Routine HR Tickets',
              highlightValue: '-80%',
              metrics: [
                { label: 'Sign-In', value: 'Face / Fingerprint' },
                { label: 'Availability', value: '24/7 Access' },
              ],
              items: [
                {
                  title: 'My Latest Payslip · Nov 15',
                  subtitle: 'View breakdown or download PDF copy',
                  status: 'Available',
                  tone: 'mint',
                },
                {
                  title: 'Vacation Leave Balance · 11.5 Days',
                  subtitle: 'Submit request to supervisor in 2 taps',
                  status: 'Instant',
                  tone: 'sky',
                },
                {
                  title: 'Manager Approval Inbox (3 Pending)',
                  subtitle: 'Approve team leave & overtime on the go',
                  status: '1-Tap Sign-Off',
                  tone: 'violet',
                },
              ],
            }}
          />
        </div>
      </section>

      {/* 7. GENERAL QUESTIONS & CLEAN CTA */}
      <section className="phr-section">
        <div className="phr-container" style={{ maxInlineSize: '52rem' }}>
          <div className="phr-section-header">
            <h2 className="phr-h2">General Questions</h2>
          </div>
          <CleanFaq items={HOME_GENERAL_FAQS} defaultOpenIndex={0} />
        </div>
      </section>

      <section className="phr-section phr-section--alt" style={{ textAlign: 'center' }}>
        <div className="phr-container" style={{ maxInlineSize: '44rem' }}>
          <h2 className="phr-h2">Scrolled this far? Let’s show you gemX tailored to your team.</h2>
          <p className="phr-lead" style={{ marginBlockEnd: '1.85rem' }}>
            Walk through the exact modules you care about with our Philippine HR specialists.
          </p>
          <a href="#hero-demo-box" className="btn-primary">
            Talk to Us <ArrowRight size={16} aria-hidden="true" />
          </a>
        </div>
      </section>
    </main>
  );
}

