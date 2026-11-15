import { KeyboardEvent, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Award,
  BookOpen,
  Calendar,
  CalendarCheck,
  Check,
  ClipboardCheck,
  Clock,
  Coins,
  FileSpreadsheet,
  FileText,
  Fingerprint,
  FolderLock,
  GraduationCap,
  HeartHandshake,
  Laptop,
  LayoutDashboard,
  ListTodo,
  Megaphone,
  Monitor,
  Network,
  PhilippinePeso,
  Receipt,
  UserCheck,
  Users,
} from 'lucide-react';
import { CleanFaq } from '../components/CleanFaq';
import { HumanStoryCard } from '../components/HumanStoryCard';
import { UiMockupCard } from '../components/UiMockupCard';
import { MockupPreview, WEB_SELF_SERVICE_FAQS } from '../data/sitePagesData';

interface WebSuiteTab {
  id: string;
  label: string;
  icon: typeof FileText;
  headline: string;
  description: string;
  outcomeGroups: { groupTitle: string; points: string[] }[];
  preview: MockupPreview;
}

const WEB_SUITE_TABS: WebSuiteTab[] = [
  {
    id: 'portal',
    label: 'Pay, Time & 201',
    icon: FileText,
    headline: 'Complete Personal HR, Payroll & DTR Transparency in Any Browser',
    description:
      'Give every employee an intuitive desktop workspace to inspect itemized earnings and deductions, download signed statutory PDFs, check real-time leave balances, and audit their monthly attendance.',
    outcomeGroups: [
      {
        groupTitle: 'Pay, Taxes & Statutory Transparency',
        points: [
          'Itemized Pay History with instant printable PDF payslips, 13th month breakdowns & signed BIR Form 2316',
          'Full Compensation & Deductions pages showing allowances, SSS, PhilHealth, Pag-IBIG & withholding tax',
          'Self-service Loans & Cash Advances ledger with remaining balances and amortization schedules',
        ],
      },
      {
        groupTitle: 'Attendance, Leaves & Digital 201 Records',
        points: [
          'Portal Home Dashboard summarizing last login, job assignment, payroll class & active leave allotments',
          'Monthly Timesheet table with daily time-in/out logs, regular/OT hours & online DTR adjustment requests',
          'Personal Data (201) & My Documents Vault for updating emergency contacts and downloading HR letters',
        ],
      },
    ],
    preview: {
      eyebrow: 'Employee Portal Suite',
      title: 'Personal Payroll, Time & 201 Hub',
      highlightLabel: 'Self-Service Access',
      highlightValue: '24/7 Web',
      metrics: [
        { label: 'Leave Credits', value: 'Live Balance' },
        { label: 'BIR 2316 & Payslips', value: '1-Click PDF' },
      ],
      items: [
        {
          title: 'Pay History · Semi-Monthly Cutoff & 2316',
          subtitle: 'Download confidential itemized PDF payslips anytime',
          status: 'PDF Ready',
          tone: 'mint',
        },
        {
          title: 'Monthly Timesheet & DTR Adjustments',
          subtitle: 'Inspect daily biometric logs or submit missing punch notes',
          status: 'Synced',
          tone: 'sky',
        },
        {
          title: 'Loans, Advances & Leave Requests',
          subtitle: 'Real-time remaining credits and amortization tracking',
          status: 'Live Ledger',
          tone: 'violet',
        },
      ],
    },
  },
  {
    id: 'supervisors',
    label: 'Supervisor & Time Keeper',
    icon: Users,
    headline: 'Dedicated Browser Hubs for Line Managers & Designated Time Keepers',
    description:
      'Equip supervisors and branch time keepers with side-by-side browser tables to verify attendance across shifts, reconcile rest days and local holidays, and sign off on team requests in batches.',
    outcomeGroups: [
      {
        groupTitle: 'My Team Supervisor Workspace',
        points: [
          'Real-time attendance status across direct reports (Present, On Break, On Leave, Absent)',
          'Structured approval queues for team Leave requests, Overtime filings, Cash Advances & DTR edits',
          'Record clear supervisor remarks and date-stamped approval history in a single browser view',
        ],
      },
      {
        groupTitle: 'Time Keeper Verification Grid',
        points: [
          'Dedicated Time Keeper portal view for reviewing multi-employee biometric logs prior to payroll cutoff',
          'Spot late arrivals, undertime, unfiled overtime, rest-day duty & local city holiday rules at a glance',
          'Resolve attendance exceptions cleanly so payroll processing closes accurately on the first pass',
        ],
      },
    ],
    preview: {
      eyebrow: 'Supervisor & Time Keeper',
      title: 'Team Attendance & Approval Queues',
      highlightLabel: 'Pending Reviews',
      highlightValue: 'Batch Ready',
      metrics: [
        { label: 'Team Status', value: 'Live Roster' },
        { label: 'DTR Verification', value: 'Pre-Cutoff' },
      ],
      items: [
        {
          title: 'My Team · Leave & Overtime Approvals',
          subtitle: 'Approve or decline with structured supervisor remarks',
          status: '4 Pending',
          tone: 'mint',
        },
        {
          title: 'Time Keeper · Branch Shift & Holiday Grid',
          subtitle: 'Reconcile biometric punches, night differential & rest days',
          status: 'Verified',
          tone: 'sky',
        },
        {
          title: 'Cash Advance & Time Adjustment Queue',
          subtitle: 'Full audit trail linked directly to payroll deductions',
          status: 'Audited',
          tone: 'amber',
        },
      ],
    },
  },
  {
    id: 'workspace',
    label: 'My Workspace & Hybrid',
    icon: Laptop,
    headline: 'Company Connection, Assets, WorkPulse Tasks & Native Apps Hub',
    description:
      'Keep hybrid, branch, and headquarters staff aligned from one shared browser hub—combining announcements, company directories, assigned laptops, and native app installers.',
    outcomeGroups: [
      {
        groupTitle: 'Organization, Policies & Accountability',
        points: [
          'Company Bulletin with pinned advisories, holiday schedules & management announcements',
          'Searchable People Directory & interactive Org Chart showing departments and reporting lines',
          'My Assets accountability list and Code of Conduct policy library with digital acknowledgement',
        ],
      },
      {
        groupTitle: 'Hybrid Work & Apps Distribution',
        points: [
          'WorkPulse Task Board & Focus Logs for tracking assigned project deliverables and hybrid work hours',
          'Desktop & Mobile Apps Hub providing pre-configured macOS, Windows & Linux WorkPulse installers',
          'Personalized QR pairing card to link the gemX Mobile App to your company server in one scan',
        ],
      },
    ],
    preview: {
      eyebrow: 'My Workspace & Apps Hub',
      title: 'Directory, Assets & WorkPulse Portal',
      highlightLabel: 'App Rollout',
      highlightValue: 'Zero IT Setup',
      metrics: [
        { label: 'Desktop OS', value: 'Mac · Win · Linux' },
        { label: 'Mobile Pairing', value: 'QR Instant' },
      ],
      items: [
        {
          title: 'People Directory & Interactive Org Chart',
          subtitle: 'Find teammates across departments and sister branches',
          status: 'Live Tree',
          tone: 'sky',
        },
        {
          title: 'Task Board & WorkPulse Timesheet Logs',
          subtitle: 'Review active projects, logged hours & focus balance',
          status: 'Synced',
          tone: 'mint',
        },
        {
          title: 'Desktop & Mobile Apps Hub',
          subtitle: 'Pre-bound desktop packages + mobile QR provisioning',
          status: 'Ready',
          tone: 'violet',
        },
      ],
    },
  },
  {
    id: 'growth',
    label: 'Growth, HMO & Wallet',
    icon: HeartHandshake,
    headline: 'Performance Reviews, Online Courses, HMO Care & Digital Wallet',
    description:
      'Give employees a spacious browser screen for writing thoughtful self-evaluations, completing compliance courses, filing HMO requests, and checking digital wallet payout balances.',
    outcomeGroups: [
      {
        groupTitle: 'Career Growth & Continuous Learning',
        points: [
          'Goals & Reviews portal for tracking quarterly OKRs, KPIs & completing 360-degree performance appraisals',
          'Training & Courses (LMS) workspace with interactive lessons, quizzes & downloadable completion certificates',
        ],
      },
      {
        groupTitle: 'Health Care & Financial Flexibility',
        points: [
          'Benefits & HMO portal to view active plan coverage, request Hospital LOAs & upload reimbursement receipts',
          'Digital Wallet ledger displaying available PHP payouts, transaction history & Maya/PayMongo/bank transfers',
        ],
      },
    ],
    preview: {
      eyebrow: 'Growth & Benefits Suite',
      title: 'Reviews, LMS, HMO & Wallet Center',
      highlightLabel: 'Adoption',
      highlightValue: 'All-in-One',
      metrics: [
        { label: '360° Appraisals', value: 'Browser Native' },
        { label: 'HMO & LOAs', value: 'Online Tracking' },
      ],
      items: [
        {
          title: 'Goals & 360° Performance Review Form',
          subtitle: 'Track KPI milestones and submit self & peer evaluations',
          status: 'In Cycle',
          tone: 'mint',
        },
        {
          title: 'Training & LMS Compliance Courses',
          subtitle: 'Complete required modules and download PDF certificates',
          status: 'Certified',
          tone: 'sky',
        },
        {
          title: 'Benefits, HMO LOAs & Digital Wallet',
          subtitle: 'Submit clinic requests and verify salary payout credits',
          status: 'Active',
          tone: 'violet',
        },
      ],
    },
  },
];

const WEB_PORTAL_MODULES = [
  {
    icon: LayoutDashboard,
    suite: 'Employee Portal',
    title: 'Portal Home Dashboard',
    description:
      'Welcomes every employee with active company announcements, last login timestamp, job title, employment status, payroll class, and a live summary of remaining leave allotments.',
  },
  {
    icon: UserCheck,
    suite: 'Employee Portal',
    title: 'My Profile (Digital 201 Masterfile)',
    description:
      'Displays personal records, residential address, emergency contacts, government IDs (TIN, SSS, PhilHealth, Pag-IBIG), work history, and educational credentials in one organized browser profile.',
  },
  {
    icon: FolderLock,
    suite: 'Employee Portal',
    title: 'My Documents Vault',
    description:
      'Secure online repository where employees preview and download signed employment contracts, company memos, HR certificates, and onboarding documents without emailing HR.',
  },
  {
    icon: Receipt,
    suite: 'Employee Portal',
    title: 'Pay History & Printable PDFs',
    description:
      'Archive of every historical cutoff showing net pay, gross earnings, tax withheld, and one-click printable PDF payslips, 13th month statements, and BIR Form 2316 certificates.',
  },
  {
    icon: PhilippinePeso,
    suite: 'Employee Portal',
    title: 'Compensation & Allowances Breakdown',
    description:
      'Clear tabular breakdown of base salary rate, recurring de minimis allowances, taxable vs. non-taxable benefits, and approved compensation adjustments over time.',
  },
  {
    icon: FileSpreadsheet,
    suite: 'Employee Portal',
    title: 'Statutory & Scheduled Deductions',
    description:
      'Line-by-line transparency into SSS, PhilHealth, Pag-IBIG, withholding tax, and authorized company deductions so payday queries drop dramatically.',
  },
  {
    icon: Coins,
    suite: 'Employee Portal',
    title: 'Loans & Cash Advances Ledger',
    description:
      'Submit company loan or cash advance requests online and track principal amount, scheduled per-cutoff amortization, paid installments, and remaining balance.',
  },
  {
    icon: Calendar,
    suite: 'Employee Portal',
    title: 'Leave | Time-Off Filing & Credits',
    description:
      'Check live Vacation, Sick, Emergency, and special statutory leave credits, review carry-over or cash-conversion rules, and file leave requests with supporting attachments.',
  },
  {
    icon: Clock,
    suite: 'Employee Portal',
    title: 'Interactive Monthly Timesheet & DTR',
    description:
      'Full-width daily time record grid showing scheduled shifts, biometric/mobile clock-ins, regular hours, night differentials, overtime, and self-service time adjustment filings.',
  },
  {
    icon: Users,
    suite: 'Supervisor & Time Keeper',
    title: 'My Team Hub (Line Manager Approvals)',
    description:
      'Dedicated supervisor workspace showing live daily team attendance alongside structured approval queues for leaves, overtime, cash advances, and DTR adjustments with remarks.',
  },
  {
    icon: CalendarCheck,
    suite: 'Supervisor & Time Keeper',
    title: 'Time Keeper Attendance Workspace',
    description:
      'Gives assigned branch or department time keepers a consolidated browser grid to verify DTR logs, shift schedules, rest days, and local holidays before payroll cutoff.',
  },
  {
    icon: Megaphone,
    suite: 'My Workspace',
    title: 'Company Bulletin & Advisories',
    description:
      'Central announcement board for HR memos, holiday advisories, policy reminders, and company milestones—searchable and archived chronologically.',
  },
  {
    icon: Network,
    suite: 'My Workspace',
    title: 'People Directory & Visual Org Chart',
    description:
      'Look up teammates by department, branch, or role and navigate an interactive reporting hierarchy chart across the organization.',
  },
  {
    icon: Laptop,
    suite: 'My Workspace',
    title: 'My Assets & Equipment Accountability',
    description:
      'Lists company-issued laptops, monitors, mobile devices, and QR-tagged tools assigned to the employee with serial numbers, issue dates, and clearance readiness.',
  },
  {
    icon: BookOpen,
    suite: 'My Workspace',
    title: 'Code of Conduct & Workplace Policies',
    description:
      'Always-current digital handbook housing company rules, attendance guidelines, data privacy notices, and DOLE-compliant workplace policies.',
  },
  {
    icon: ListTodo,
    suite: 'My Workspace',
    title: 'Task Board, WorkPulse & Apps Hub',
    description:
      'Track project tasks and hybrid WorkPulse hours in the browser, download pre-configured macOS/Windows/Linux desktop trackers, and pair the Mobile App via QR.',
  },
  {
    icon: Award,
    suite: 'Growth & Benefits',
    title: 'Goals, OKRs & 360° Appraisals',
    description:
      'Large-screen browser workspace for setting OKRs/KPIs, logging progress updates, completing self-appraisals, and reviewing manager merit feedback.',
  },
  {
    icon: GraduationCap,
    suite: 'Growth & Benefits',
    title: 'Training LMS, HMO LOAs & Digital Wallet',
    description:
      'Complete online courses and earn certificates, inspect HMO plans and Hospital LOA/reimbursement requests, and review Digital Wallet salary disbursements.',
  },
] as const;

export function WebSelfServicePage() {
  const [activeSuiteId, setActiveSuiteId] = useState<string>(WEB_SUITE_TABS[0].id);
  const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const activeSuite = WEB_SUITE_TABS.find((t) => t.id === activeSuiteId) ?? WEB_SUITE_TABS[0];

  const handleTabKeyDown = (e: KeyboardEvent<HTMLButtonElement>, currentIndex: number) => {
    let nextIndex: number | null = null;
    if (e.key === 'ArrowRight') nextIndex = (currentIndex + 1) % WEB_SUITE_TABS.length;
    else if (e.key === 'ArrowLeft') nextIndex = (currentIndex - 1 + WEB_SUITE_TABS.length) % WEB_SUITE_TABS.length;
    else if (e.key === 'Home') nextIndex = 0;
    else if (e.key === 'End') nextIndex = WEB_SUITE_TABS.length - 1;

    if (nextIndex === null) return;
    e.preventDefault();
    const nextTab = WEB_SUITE_TABS[nextIndex];
    setActiveSuiteId(nextTab.id);
    tabRefs.current[nextTab.id]?.focus();
  };

  return (
    <main id="page-main">
      {/* 1. Hero Split */}
      <section className="phr-section" style={{ paddingBlockStart: 'clamp(2.75rem, 5vw, 4.5rem)' }}>
        <div className="phr-container hero-split">
          <div>
            <span className="phr-eyebrow">
              <Monitor size={14} aria-hidden="true" />
              Special Feature · Web Employee &amp; Supervisor Portal
            </span>
            <h1 className="phr-h1">
              A Complete Browser Workspace for{' '}
              <span className="cosmic-accent">Every Employee, Time Keeper &amp; Line Manager.</span>
            </h1>
            <p className="phr-lead">
              Zero installs, full-screen clarity. The gemX Web Self-Service Portal puts printable PDF payslips, BIR Form
              2316, monthly DTR tables, digital 201 records, LMS courses, 360° appraisals, and batch team approvals in
              one unified browser sidebar.
            </p>

            <ul className="check-list" role="list">
              {[
                'Personal Home Dashboard with announcements, payroll class & live leave credits',
                '24/7 Pay History, itemized Compensation/Deductions, Loans & BIR Form 2316 PDFs',
                'Interactive monthly Timesheet DTR grids, Leave filing & online time adjustments',
                'Dedicated My Team & Time Keeper workspaces for line managers and timekeepers',
                'Org Chart, People Directory, WorkPulse Task Board, LMS, HMO LOAs & Apps Hub',
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
                Book a Live Portal Demo <ArrowRight size={16} aria-hidden="true" />
              </Link>
              <Link to="/features/mobile-self-service" className="btn-secondary">
                Explore Mobile App →
              </Link>
            </div>
          </div>

          <div style={{ display: 'grid', gap: '1.15rem' }}>
            <HumanStoryCard
              priority
              photo="feature-self-service-leader"
              alt="Inspiring Filipina Head of People leading a collaborative self-service rollout in a sunlit Manila office lounge"
              problemLabel="Before: Endless HR emails for payslips, forms & approvals"
              solutionBadge="With gemX Web Portal: 100% browser self-service"
              quote="When employees, time keepers, and managers share one clean browser portal, routine payslip and DTR inquiries vanish overnight."
              personAttribution="HR Leadership · Web Employee & Supervisor Portal"
            />
            <UiMockupCard
              preview={{
                eyebrow: 'Web Employee Portal',
                title: 'Browser Workspace & Self-Service Hub',
                highlightLabel: 'HR Tickets',
                highlightValue: '-80%',
                metrics: [
                  { label: 'Browser Modules', value: '18 Included' },
                  { label: 'Statutory PDFs', value: '24/7 Ready' },
                ],
                items: [
                  {
                    title: 'Pay History · Semi-Monthly Payslip & BIR 2316',
                    subtitle: 'View itemized deductions or download signed PDF',
                    status: 'PDF Ready',
                    tone: 'mint',
                  },
                  {
                    title: 'My Team & Time Keeper Approvals',
                    subtitle: 'Leaves, overtime, loans & DTR logs reviewed in batch',
                    status: 'Live Sync',
                    tone: 'sky',
                  },
                  {
                    title: 'Desktop & Mobile Apps Hub',
                    subtitle: 'Download WorkPulse Desktop or scan QR for Mobile App',
                    status: '1-Scan Setup',
                    tone: 'violet',
                  },
                ],
              }}
            />
          </div>
        </div>
      </section>

      {/* 2. Interactive 4-Suite Web Portal Explorer */}
      <section className="phr-section phr-section--alt">
        <div className="phr-container">
          <div className="phr-section-header">
            <h2 className="phr-h2">
              Explore Every Suite Inside the <span className="cosmic-accent">Web Employee Portal</span>
            </h2>
            <p className="phr-lead">
              Switch through the four workspace groups inside the gemX browser sidebar to see what employees, line
              managers, and time keepers accomplish without leaving their desk.
            </p>
          </div>

          <div role="tablist" aria-label="Web Employee Portal suites" className="ph-mod-tabs">
            {WEB_SUITE_TABS.map((tab, idx) => {
              const Icon = tab.icon;
              const selected = tab.id === activeSuite.id;
              return (
                <button
                  key={tab.id}
                  ref={(el) => {
                    tabRefs.current[tab.id] = el;
                  }}
                  id={`web-tab-${tab.id}`}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  tabIndex={selected ? 0 : -1}
                  className="ph-mod-tab"
                  onClick={() => setActiveSuiteId(tab.id)}
                  onKeyDown={(e) => handleTabKeyDown(e, idx)}
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
            role="tabpanel"
            aria-labelledby={`web-tab-${activeSuite.id}`}
            className="space-card ph-mod-panel"
          >
            <div>
              <h3 style={{ fontSize: 'clamp(1.35rem, 1.1rem + 1vw, 1.8rem)', marginBlockEnd: '0.65rem' }}>
                {activeSuite.headline}
              </h3>
              <p style={{ fontSize: '0.96rem', marginBlockEnd: '1.35rem' }}>{activeSuite.description}</p>

              <div style={{ display: 'grid', gap: '1.25rem' }}>
                {activeSuite.outcomeGroups.map((grp) => (
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
            </div>

            <UiMockupCard preview={activeSuite.preview} />
          </div>
        </div>
      </section>

      {/* 3. Complete 18-Module Web Portal Functionality Directory */}
      <section className="phr-section">
        <div className="phr-container">
          <div className="phr-section-header">
            <span className="phr-eyebrow">
              <LayoutDashboard size={14} aria-hidden="true" />
              Complete Web Portal Directory
            </span>
            <h2 className="phr-h2">
              Every Functionality Inside the Web Employee Portal—
              <span className="cosmic-accent">Listed &amp; Expounded</span>
            </h2>
            <p className="phr-lead">
              From daily payslip downloads and monthly DTR reconciliation to supervisor approvals, company directories,
              and LMS training—every module lives in one cohesive browser sidebar.
            </p>
          </div>

          <div className="ess-catalog-grid">
            {WEB_PORTAL_MODULES.map((mod) => {
              const Icon = mod.icon;
              return (
                <article key={mod.title} className="ess-catalog-card">
                  <div className="ess-catalog-head">
                    <span className="ess-catalog-icon" aria-hidden="true">
                      <Icon size={19} />
                    </span>
                    <span className="ess-catalog-tag">{mod.suite}</span>
                  </div>
                  <h3 className="ess-catalog-title">{mod.title}</h3>
                  <p className="ess-catalog-desc">{mod.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4A. Deep Dive: Browser Depth & Batch Workflows */}
      <section className="phr-section phr-section--alt">
        <div className="phr-container feat-split" style={{ alignItems: 'start' }}>
          <div>
            <span className="phr-eyebrow">
              <ClipboardCheck size={14} aria-hidden="true" />
              Built for Browser Depth &amp; Batch Workflows
            </span>
            <h2 className="phr-h2">Built for Multi-Column Reviews, Batch Approvals &amp; Timekeeping Precision</h2>
            <p className="phr-lead">
              Some HR tasks demand screen space. The gemX Web Portal is purpose-built for side-by-side timesheet tables,
              loan schedules, formal 360-degree appraisal forms, and pre-cutoff Time Keeper verification.
            </p>

            <ul className="check-list" role="list">
              {[
                'Full-month DTR rows displaying scheduled shift, biometric logs, overtime & rest days',
                'Designated Time Keeper grids to verify attendance across entire departments or branches',
                'Print-ready PDF payslips, 13th month schedules & BIR Form 2316 straight from browser',
                'Long-form OKR planning, 360° feedback writing & interactive LMS course player',
              ].map((pt) => (
                <li key={pt}>
                  <span className="check-bullet" aria-hidden="true">
                    <Check size={13} strokeWidth={3} />
                  </span>
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </div>

          <div style={{ display: 'grid', gap: '1.15rem' }}>
            <HumanStoryCard
              photo="product-core-hr"
              alt="Filipina HR specialist reviewing paperless digital 201 records and browser approvals with a smiling colleague"
              problemLabel="Before: Printing binders & chasing spreadsheets"
              solutionBadge="Outcome: Clean browser workflows before cutoff"
              quote="Time keepers, department heads, and employees all look at the same verified figures in their browser—no reconciliation surprises on payday."
              personAttribution="Operations & Timekeeping · Browser Workspace"
            />
            <UiMockupCard
              preview={{
                eyebrow: 'Time Keeper & Supervisor Flow',
                title: 'Pre-Cutoff Verification Summary',
                highlightLabel: 'Reconciliation',
                highlightValue: '100% Clear',
                metrics: [
                  { label: 'DTR Exceptions', value: '0 Unresolved' },
                  { label: 'Pending Approvals', value: 'All Cleared' },
                ],
                items: [
                  {
                    title: 'Biometric & Shift Log Verification',
                    subtitle: 'Night differential, local holidays & overtime verified',
                    status: 'Locked In',
                    tone: 'mint',
                  },
                  {
                    title: 'Leave & Adjustment Filings',
                    subtitle: 'Supervisor sign-off with timestamped audit remarks',
                    status: 'Approved',
                    tone: 'sky',
                  },
                  {
                    title: 'Payroll Handoff Readiness',
                    subtitle: 'Verified hours synced seamlessly into Pay Run',
                    status: 'Ready',
                    tone: 'violet',
                  },
                ],
              }}
            />
          </div>
        </div>
      </section>

      {/* 4B. Deep Dive: Passkeys, ACL & QR Companion Pairing */}
      <section className="phr-section">
        <div className="phr-container feat-split feat-split--reverse" style={{ alignItems: 'start' }}>
          <div>
            <span className="phr-eyebrow">
              <Fingerprint size={14} aria-hidden="true" />
              Security, Access &amp; Companion Pairing
            </span>
            <h2 className="phr-h2">Passwordless Browser Passkeys, Role-Based ACL &amp; Tenant Branding</h2>
            <p className="phr-lead">
              Employees sign in effortlessly with Touch ID, Face ID, or Windows Hello Passkeys inside a browser portal
              that strictly enforces role permissions, isolates sister-company data, and provisions native desktop and
              mobile apps automatically.
            </p>

            <ul className="check-list" role="list">
              {[
                'One-tap WebAuthn Passkeys plus optional Two-Step Verification for approvers',
                'Granular ACL controls—each menu module only appears when authorized for the user role',
                'Per-company logo, color theme, payslip footer & strict multi-tenant data isolation',
                'Desktop & Mobile Apps Hub with 1-click WorkPulse installers and QR Mobile App pairing',
              ].map((pt) => (
                <li key={pt}>
                  <span className="check-bullet" aria-hidden="true">
                    <Check size={13} strokeWidth={3} />
                  </span>
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </div>

          <UiMockupCard
            preview={{
              eyebrow: 'Portal Security & Apps Hub',
              title: 'Passkeys, ACL & Device Provisioning',
              highlightLabel: 'Tenant Isolation',
              highlightValue: 'Strict',
              metrics: [
                { label: 'Browser Sign-In', value: 'Passkey Ready' },
                { label: 'Sidebar Modules', value: 'ACL Scoped' },
              ],
              items: [
                {
                  title: 'WebAuthn Passkey & 2FA Protection',
                  subtitle: 'Touch ID, Face ID & Windows Hello browser login',
                  status: 'Active',
                  tone: 'mint',
                },
                {
                  title: 'WorkPulse Desktop Packages',
                  subtitle: 'Pre-configured macOS, Windows & Linux builds',
                  status: 'Tenant-Bound',
                  tone: 'sky',
                },
                {
                  title: 'QR Code Mobile App Onboarding',
                  subtitle: 'Pre-fills company server URL, username & theme',
                  status: '1-Scan Pair',
                  tone: 'violet',
                },
              ],
            }}
          />
        </div>
      </section>

      {/* 5. FAQs */}
      <section className="phr-section phr-section--alt">
        <div className="phr-container" style={{ maxInlineSize: '50rem' }}>
          <div className="phr-section-header">
            <h2 className="phr-h2">Web Self-Service Questions</h2>
          </div>
          <CleanFaq items={WEB_SELF_SERVICE_FAQS} defaultOpenIndex={0} />
        </div>
      </section>

      {/* 6. Bottom CTA */}
      <section className="phr-section" style={{ textAlign: 'center' }}>
        <div className="phr-container" style={{ maxInlineSize: '46rem' }}>
          <h2 className="phr-h2">
            Ready to put the <span className="cosmic-accent">gemX Web Portal</span> in every browser?
          </h2>
          <p className="phr-lead" style={{ marginBlockEnd: '1.85rem' }}>
            See how employee payslips, monthly DTRs, Time Keeper grids, and supervisor approvals work live—or compare
            with the native iOS and Android companion app.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.85rem' }}>
            <Link to="/request-demo" className="btn-primary">
              Schedule a Web Portal Demo <ArrowRight size={16} aria-hidden="true" />
            </Link>
            <Link to="/features/mobile-self-service" className="btn-secondary">
              Explore Mobile Self-Service App →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
