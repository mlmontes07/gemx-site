import { KeyboardEvent, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Award,
  Bell,
  BookOpen,
  Calendar,
  Camera,
  Check,
  Clock,
  Coins,
  FileText,
  FolderLock,
  GraduationCap,
  HeartHandshake,
  MapPin,
  Network,
  PhilippinePeso,
  QrCode,
  Receipt,
  ShieldCheck,
  Smartphone,
  Timer,
  UserCheck,
  Users,
  Wallet,
} from 'lucide-react';
import { CleanFaq } from '../components/CleanFaq';
import { HumanStoryCard } from '../components/HumanStoryCard';
import { UiMockupCard } from '../components/UiMockupCard';
import { MOBILE_SELF_SERVICE_FAQS, MockupPreview } from '../data/sitePagesData';

interface MobileSuiteTab {
  id: string;
  label: string;
  icon: typeof Clock;
  headline: string;
  description: string;
  outcomeGroups: { groupTitle: string; points: string[] }[];
  preview: MockupPreview;
}

const MOBILE_SUITE_TABS: MobileSuiteTab[] = [
  {
    id: 'attendance',
    label: 'Clock, Shift & WorkPulse',
    icon: Clock,
    headline: 'GPS Selfie Attendance, Live Shift Donut Timer & Mobile WorkPulse',
    description:
      'Give field crews, branch staff, and hybrid teams effortless clock-in accuracy from iOS and Android—complete with break tracking, branch geofencing, live selfie checks, and monthly calendar timesheets.',
    outcomeGroups: [
      {
        groupTitle: '8-Mode GPS & Selfie Punch Clock',
        points: [
          'Live ticking HH:MM:SS donut shift timer on the home dashboard that automatically pauses during breaks',
          'Full 8-mode punch sequence: Time In, 1st Break Out/In, Lunch Out/In, 2nd Break Out/In & Time Out',
          'Branch GPS geofence radius verification paired with live front-camera selfie capture to prevent buddy-punching',
        ],
      },
      {
        groupTitle: 'Monthly Calendar Timesheet & WorkPulse',
        points: [
          'Color-coded monthly calendar Timesheet displaying Payroll Class schedules, rest days, regular hours & OT',
          'Built-in mobile WorkPulse Tracker to start, switch, and sync project or client task timers anywhere',
        ],
      },
    ],
    preview: {
      eyebrow: 'Mobile Time & Attendance',
      title: 'Live Shift Timer & 8-Mode Selfie Clock',
      highlightLabel: 'Shift Timer',
      highlightValue: '04 : 18 : 22',
      metrics: [
        { label: 'Geofence Check', value: 'Verified · BGC' },
        { label: 'Rest Days', value: 'Sat, Sun' },
      ],
      items: [
        {
          title: 'Time In · Live Selfie & GPS Verified',
          subtitle: '08:51 AM · Within 500m approved branch geofence',
          status: 'Verified',
          tone: 'mint',
        },
        {
          title: 'Lunch & Break Punch Sequence',
          subtitle: 'Donut shift timer pauses automatically while on break',
          status: '8 Modes',
          tone: 'sky',
        },
        {
          title: 'Mobile WorkPulse · Project Timer',
          subtitle: 'Synced straight to team timesheets & daily hours',
          status: 'Syncing',
          tone: 'violet',
        },
      ],
    },
  },
  {
    id: 'pay',
    label: 'Payslips, Loans & Wallet',
    icon: Wallet,
    headline: 'Payday Countdown, PDF Payslips, Leave Filing & Digital Wallet Cash-Out',
    description:
      'Let every employee check their upcoming payday, open itemized PDF payslips, track deductions and loan balances, attach medical certificates directly from their camera, and cash out wallet funds.',
    outcomeGroups: [
      {
        groupTitle: 'Pay Transparency & Digital Wallet Cash-Out',
        points: [
          'Financial Breakdown dashboard tab with Next Payday countdown card and cutoff summary',
          'Pay History archive with confidential itemized PDF payslips, Compensation & Deductions screens',
          'Digital Wallet screen showing available PHP balance, transfer fees & cash-out to Maya, PayMongo, or banks',
        ],
      },
      {
        groupTitle: '2-Tap Leave & Cash Advance Filings',
        points: [
          'Real-time Vacation, Sick & special leave balances with instant leave filing and camera photo attachments',
          'Submit Loans & Cash Advances requests from mobile and track amortization progress per cutoff',
        ],
      },
    ],
    preview: {
      eyebrow: 'Mobile Pay & Wallet',
      title: 'Payslips, Credits & Wallet Cash-Out',
      highlightLabel: 'Next Payday',
      highlightValue: 'In 3 Days',
      metrics: [
        { label: 'Wallet Balance', value: '₱18,450.00' },
        { label: 'VL Credits', value: '11.5 Days' },
      ],
      items: [
        {
          title: 'Pay History · Semi-Monthly PDF Payslip',
          subtitle: 'Gross, net pay, BIR tax, SSS, PhilHealth & Pag-IBIG',
          status: 'Download PDF',
          tone: 'mint',
        },
        {
          title: 'Digital Wallet · Instant Cash-Out',
          subtitle: 'Transfer PHP funds to Maya, PayMongo or linked bank',
          status: 'Ready',
          tone: 'sky',
        },
        {
          title: 'Leave Request · Camera Receipt Upload',
          subtitle: 'Snap medical certificate & submit to supervisor in 2 taps',
          status: 'Instant',
          tone: 'violet',
        },
      ],
    },
  },
  {
    id: 'profile',
    label: '201 Profile, Vault & Directory',
    icon: FolderLock,
    headline: 'Pocket 201 Profile, Documents Vault, People Directory & Company Bulletin',
    description:
      'Keep essential employment credentials, signed contracts, company advisories, assigned laptops, and colleague contact directories right in every team member’s pocket.',
    outcomeGroups: [
      {
        groupTitle: 'Verified Personal & Document Access',
        points: [
          'Personal Data (201) screen displaying employment details, emergency contacts & government ID numbers',
          'Documents Vault for viewing signed contracts, HR clearances, memos & downloadable employment files',
          'My Assets screen listing company-issued laptops, phones & equipment assigned to the employee',
        ],
      },
      {
        groupTitle: 'Company-Wide Connection & Policies',
        points: [
          'Company Bulletin with pinned advisories, holiday announcements & HR circulars',
          'People Directory & Org Chart to look up teammates and reporting structure across branches',
          'Code of Conduct & Policies viewer keeping workplace guidelines always one tap away',
        ],
      },
    ],
    preview: {
      eyebrow: 'Profile & Workspace',
      title: '201 Records, Vault & Org Directory',
      highlightLabel: 'Pocket Access',
      highlightValue: 'Always Synced',
      metrics: [
        { label: '201 Profile', value: 'Verified' },
        { label: 'Documents', value: 'Vault Ready' },
      ],
      items: [
        {
          title: 'Personal Data (201) & Statutory IDs',
          subtitle: 'TIN, SSS, PhilHealth, Pag-IBIG & job details in your pocket',
          status: 'Up to Date',
          tone: 'mint',
        },
        {
          title: 'Documents Vault & Code of Conduct',
          subtitle: 'Signed HR documents & workplace handbook accessible offline',
          status: 'Secured',
          tone: 'sky',
        },
        {
          title: 'People Directory, Org Chart & My Assets',
          subtitle: 'Colleague lookup plus assigned company device registry',
          status: 'Synced',
          tone: 'violet',
        },
      ],
    },
  },
  {
    id: 'growth',
    label: 'OKRs, LMS & HMO Care',
    icon: Award,
    headline: 'Performance OKRs, Mobile LMS Training & Fast HMO Hospital LOA Requests',
    description:
      'Help employees stay engaged between shifts or during commutes—updating performance milestones, finishing bite-sized compliance lessons, and requesting urgent clinic LOAs straight from their phone.',
    outcomeGroups: [
      {
        groupTitle: 'Goals, Appraisals & Mobile Learning',
        points: [
          'Performance & OKRs mobile screen to track KPI targets, key results & appraisal cycle status',
          'Training & LMS screen for reviewing assigned compliance courses and training progress on mobile',
        ],
      },
      {
        groupTitle: 'Benefits, HMO & Urgent Clinic Care',
        points: [
          'Benefits & Claims hub displaying HMO coverage details, dependents & medical claim statuses',
          'Request urgent Hospital Letters of Authorization (LOAs) and snap claim receipts straight from mobile',
        ],
      },
    ],
    preview: {
      eyebrow: 'Growth & Care',
      title: 'OKRs, LMS Courses & HMO LOA Hub',
      highlightLabel: 'HMO Care',
      highlightValue: 'Mobile Ready',
      metrics: [
        { label: 'Active OKRs', value: 'On Track' },
        { label: 'Training LMS', value: 'Self-Paced' },
      ],
      items: [
        {
          title: 'Hospital LOA & Benefits Claim',
          subtitle: 'Check HMO eligibility & snap reimbursement receipts fast',
          status: 'Approved',
          tone: 'mint',
        },
        {
          title: 'Performance Goals & OKRs',
          subtitle: 'Review quarterly KPIs and appraisal milestones anywhere',
          status: '88% Complete',
          tone: 'sky',
        },
        {
          title: 'Training & LMS Modules',
          subtitle: 'Finish onboarding and mandatory compliance lessons on mobile',
          status: 'In Progress',
          tone: 'violet',
        },
      ],
    },
  },
  {
    id: 'supervisor',
    label: 'Floor Supervisor & Alerts',
    icon: Users,
    headline: 'My Team Floor Command, 1-Tap Approvals & Real-Time Push Alerts',
    description:
      'Authorized line managers and time keepers unlock the mobile My Team & Time Keeper console—monitoring live attendance statuses on the floor and signing off on requests in a single tap.',
    outcomeGroups: [
      {
        groupTitle: 'Supervisor & Time Keeper Mobile Console',
        points: [
          'Live team roster grouped by color-coded status pills (Present, On Break, On Leave, Absent)',
          'Review pending Leave, Overtime & Time Adjustment filings with 1-tap Approve/Decline and optional remarks',
          'Automatically hidden from regular staff and unlocked seamlessly via server capability flags',
        ],
      },
      {
        groupTitle: 'Notifications, Settings & Security',
        points: [
          'Real-time unread notification badge across the app bar and navigation drawer',
          'Manage account credentials, test company server connection, toggle Light/Dark mode & enable biometric login',
        ],
      },
    ],
    preview: {
      eyebrow: 'Supervisor Mobile View',
      title: 'My Team Today & Instant Sign-Offs',
      highlightLabel: 'Team Present',
      highlightValue: '22 / 24',
      metrics: [
        { label: 'Pending Filings', value: '3 Waiting' },
        { label: 'Unread Alerts', value: 'Live Badge' },
      ],
      items: [
        {
          title: 'Leave Request · 1-Tap Approve Dialog',
          subtitle: 'Record optional supervisor remarks without returning to desk',
          status: 'Approve',
          tone: 'mint',
        },
        {
          title: 'Live Team Attendance Roster',
          subtitle: 'Instant visibility into Working, On Break & On Leave staff',
          status: 'Live Sync',
          tone: 'sky',
        },
        {
          title: 'Overtime & DTR Adjustment Alerts',
          subtitle: 'Real-time unread counter in drawer & mobile app bar',
          status: 'Notified',
          tone: 'amber',
        },
      ],
    },
  },
];

const MOBILE_APP_MODULES = [
  {
    icon: Timer,
    category: 'Overview & Updates',
    title: 'Smart Shift & Financial Dashboard',
    description:
      'Dual-tab mobile home combining Shift Clock & Pay with Financial Breakdown—featuring a live ticking HH:MM:SS donut shift timer, Next Payday countdown card, and pull-to-refresh sync.',
  },
  {
    icon: Camera,
    category: 'Time & Pay',
    title: '8-Mode GPS & Live Selfie Punch Clock',
    description:
      'Supports Time In, 1st Break Out/In, Lunch Out/In, 2nd Break Out/In, and Time Out—verifying live GPS coordinates against branch geofence radii plus a live front-camera selfie.',
  },
  {
    icon: Calendar,
    category: 'Time & Pay',
    title: 'Visual Monthly Calendar Timesheet',
    description:
      'Interactive month calendar highlighting Payroll Class schedules, designated rest days, daily clock logs, regular hours worked, and computed overtime at a glance.',
  },
  {
    icon: Clock,
    category: 'Time & Pay',
    title: 'Mobile WorkPulse Project Tracker',
    description:
      'Start, pause, and sync WorkPulse project and client task timers straight from your smartphone for field visits, hybrid schedules, and off-site assignments.',
  },
  {
    icon: Receipt,
    category: 'Time & Pay',
    title: 'Pay History & Downloadable PDF Payslips',
    description:
      'Browse historical pay periods, inspect itemized earnings and statutory withholdings, and download confidential PDF payslips anytime.',
  },
  {
    icon: PhilippinePeso,
    category: 'Time & Pay',
    title: 'Compensation & Deductions Screens',
    description:
      'Dedicated mobile screens breaking down fixed pay, allowances, SSS, PhilHealth, Pag-IBIG, withholding tax, and recurring deduction items cleanly.',
  },
  {
    icon: FileText,
    category: 'Time & Pay',
    title: 'Leave | Time-Off & Camera Attachments',
    description:
      'Check live Vacation, Sick, and special leave balances, submit leave requests in two taps, and attach medical certificates directly from the phone camera or gallery.',
  },
  {
    icon: Coins,
    category: 'Time & Pay',
    title: 'Loans & Cash Advances Mobile Filing',
    description:
      'Apply for company loans or salary advances directly from mobile while viewing active loan terms, installment progress, and remaining balances.',
  },
  {
    icon: Wallet,
    category: 'Time & Pay',
    title: 'Digital Wallet & Instant Cash-Out',
    description:
      'Displays live available PHP balance and payout destination, with an interactive Cash-Out modal showing transparent fees before transferring to Maya, PayMongo, or banks.',
  },
  {
    icon: UserCheck,
    category: 'Profile & Workspace',
    title: 'Personal Data (201) & Statutory IDs',
    description:
      'Instant pocket reference for verified 201 profile fields, job assignment, emergency contacts, and TIN, SSS, PhilHealth, and Pag-IBIG numbers.',
  },
  {
    icon: FolderLock,
    category: 'Profile & Workspace',
    title: 'Mobile Documents Vault',
    description:
      'Access and preview signed contracts, HR letters, tax forms, and employee vault uploads safely from anywhere without waiting for HR email replies.',
  },
  {
    icon: Bell,
    category: 'Overview & Updates',
    title: 'Notifications Center & Company Bulletin',
    description:
      'Live unread notification counters across the drawer and app bar alongside Company Bulletin announcements for holidays, memos, and team news.',
  },
  {
    icon: Network,
    category: 'Profile & Workspace',
    title: 'People Directory & Mobile Org Chart',
    description:
      'Search company colleagues, view departments and roles, and trace team reporting hierarchies right from your phone.',
  },
  {
    icon: BookOpen,
    category: 'Profile & Workspace',
    title: 'Code of Conduct & My Assets',
    description:
      'Read up-to-date workplace policies and inspect every laptop, mobile unit, or tool registered under your employee accountability list.',
  },
  {
    icon: GraduationCap,
    category: 'Growth & Benefits',
    title: 'Performance, OKRs & Mobile LMS',
    description:
      'Track KPI and OKR progress, check appraisal cycles, and complete assigned online training modules on the move.',
  },
  {
    icon: HeartHandshake,
    category: 'Growth & Benefits',
    title: 'Benefits, Claims & Urgent Hospital LOAs',
    description:
      'Review HMO coverage details, submit medical reimbursement claims with receipt photos, and request urgent Hospital LOAs on the spot.',
  },
  {
    icon: Users,
    category: 'Supervisor & System',
    title: 'My Team & Time Keeper Floor Approvals',
    description:
      'Role-gated supervisor tab showing live Present, Break, Leave, and Absent status plus 1-tap Approve/Reject modals with optional supervisor remarks.',
  },
  {
    icon: QrCode,
    category: 'Supervisor & System',
    title: 'Biometric Passkeys, QR Setup & Theme Sync',
    description:
      'Face ID and Fingerprint Passkey login, 1-scan QR server pairing from the Web Portal, synced company logo and Light/Dark mode, and instant session wipe on logout.',
  },
] as const;

export function MobileSelfServicePage() {
  const [activeSuiteId, setActiveSuiteId] = useState<string>(MOBILE_SUITE_TABS[0].id);
  const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const activeSuite = MOBILE_SUITE_TABS.find((t) => t.id === activeSuiteId) ?? MOBILE_SUITE_TABS[0];

  const handleTabKeyDown = (e: KeyboardEvent<HTMLButtonElement>, currentIndex: number) => {
    let nextIndex: number | null = null;
    if (e.key === 'ArrowRight') nextIndex = (currentIndex + 1) % MOBILE_SUITE_TABS.length;
    else if (e.key === 'ArrowLeft') nextIndex = (currentIndex - 1 + MOBILE_SUITE_TABS.length) % MOBILE_SUITE_TABS.length;
    else if (e.key === 'Home') nextIndex = 0;
    else if (e.key === 'End') nextIndex = MOBILE_SUITE_TABS.length - 1;

    if (nextIndex === null) return;
    e.preventDefault();
    const nextTab = MOBILE_SUITE_TABS[nextIndex];
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
              <Smartphone size={14} aria-hidden="true" />
              Special Feature · Native iOS &amp; Android App
            </span>
            <h1 className="phr-h1">
              Your Entire Workplace in Your Pocket—{' '}
              <span className="cosmic-accent">Built for Teams on the Move.</span>
            </h1>
            <p className="phr-lead">
              Built for field staff, retail &amp; clinic shift workers, remote teammates, and managers on the floor. The
              native gemX Mobile App delivers 8-mode GPS selfie clock-ins, live shift timers, PDF payslips, Digital
              Wallet cash-outs, and 1-tap team approvals anywhere.
            </p>

            <ul className="check-list" role="list">
              {[
                '8-Mode Punch Clock with GPS branch geofencing & live front-camera selfie check',
                'Live HH:MM:SS donut shift timer & Next Payday countdown right on the dashboard',
                'Pay History PDF payslips, Compensation, Deductions & Loans | Advances ledgers',
                'Digital Wallet cash-out to Maya, PayMongo or banks + 2-tap Leave filing with camera upload',
                'Floor-ready My Team approvals, Face ID / Fingerprint Passkeys & 1-scan QR setup',
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
                Book a Live Mobile Demo <ArrowRight size={16} aria-hidden="true" />
              </Link>
              <Link to="/features/web-self-service" className="btn-secondary">
                Explore Web Employee Portal →
              </Link>
            </div>
          </div>

          <div style={{ display: 'grid', gap: '1.15rem' }}>
            <HumanStoryCard
              priority
              photo="employee-mobile-pocket"
              alt="Smiling Filipino employee checking leave balance and payslip on his smartphone"
              problemLabel="Before: Waiting days for payslips & paper leave slips"
              solutionBadge="With gemX Mobile: Clock-in, payslips & leaves in 2 taps"
              quote="I checked my leave credits and filed my vacation request in thirty seconds while commuting—approved before I reached my desk."
              personAttribution="Team Member · Everyday Native Mobile App"
            />
            <UiMockupCard
              preview={{
                eyebrow: 'gemX Mobile App · iOS & Android',
                title: 'Shift Timer, Selfie Clock & Payday Hub',
                highlightLabel: 'Mobile Sign-In',
                highlightValue: 'Face / Touch',
                metrics: [
                  { label: 'Mobile Screens', value: '18 Included' },
                  { label: 'Punch Modes', value: 'GPS + Selfie' },
                ],
                items: [
                  {
                    title: 'GPS & Selfie Punch Clock · 8 Modes',
                    subtitle: 'Time In, Breaks, Lunch & Time Out with geofence check',
                    status: 'Verified',
                    tone: 'mint',
                  },
                  {
                    title: 'PDF Payslips & Digital Wallet Cash-Out',
                    subtitle: 'View itemized pay & cash out via Maya, PayMongo or bank',
                    status: 'Available',
                    tone: 'sky',
                  },
                  {
                    title: 'My Team Floor Approvals & Live Alerts',
                    subtitle: 'Approve team leaves & overtime with remarks in 1 tap',
                    status: '1-Tap',
                    tone: 'violet',
                  },
                ],
              }}
            />
          </div>
        </div>
      </section>

      {/* 2. Interactive 5-Suite Mobile App Explorer */}
      <section className="phr-section phr-section--alt">
        <div className="phr-container">
          <div className="phr-section-header">
            <h2 className="phr-h2">
              Explore Every Experience Inside the <span className="cosmic-accent">gemX Mobile App</span>
            </h2>
            <p className="phr-lead">
              Tap through the five functional pillars inside the native iOS and Android app—from biometric clock-ins and
              instant wallet payouts to on-the-floor team approvals.
            </p>
          </div>

          <div role="tablist" aria-label="gemX Mobile App suites" className="ph-mod-tabs">
            {MOBILE_SUITE_TABS.map((tab, idx) => {
              const Icon = tab.icon;
              const selected = tab.id === activeSuite.id;
              return (
                <button
                  key={tab.id}
                  ref={(el) => {
                    tabRefs.current[tab.id] = el;
                  }}
                  id={`mobile-tab-${tab.id}`}
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
            aria-labelledby={`mobile-tab-${activeSuite.id}`}
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

      {/* 3. Complete 18-Screen Mobile App Functionality Directory */}
      <section className="phr-section">
        <div className="phr-container">
          <div className="phr-section-header">
            <span className="phr-eyebrow">
              <Smartphone size={14} aria-hidden="true" />
              Complete Mobile App Directory
            </span>
            <h2 className="phr-h2">
              Every Screen &amp; Native Capability in the gemX Mobile App—
              <span className="cosmic-accent">Expounded</span>
            </h2>
            <p className="phr-lead">
              Built natively with hardware GPS, camera, and biometric support—so every everyday HR task feels fast,
              dependable, and tailored to your company.
            </p>
          </div>

          <div className="ess-catalog-grid">
            {MOBILE_APP_MODULES.map((mod) => {
              const Icon = mod.icon;
              return (
                <article key={mod.title} className="ess-catalog-card">
                  <div className="ess-catalog-head">
                    <span className="ess-catalog-icon" aria-hidden="true">
                      <Icon size={19} />
                    </span>
                    <span className="ess-catalog-tag">{mod.category}</span>
                  </div>
                  <h3 className="ess-catalog-title">{mod.title}</h3>
                  <p className="ess-catalog-desc">{mod.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4A. Deep Dive: Field-Proven GPS Geofencing & Selfie Verification */}
      <section className="phr-section phr-section--alt">
        <div className="phr-container feat-split" style={{ alignItems: 'start' }}>
          <div>
            <span className="phr-eyebrow">
              <MapPin size={14} aria-hidden="true" />
              Accurate Mobile Attendance
            </span>
            <h2 className="phr-h2">Field-Proven GPS Geofencing &amp; 8-Step Selfie Verification</h2>
            <p className="phr-lead">
              Eliminate morning biometric queues and disputed DTR spreadsheets. Whether staff work at a clinic, retail
              branch, construction site, or regional office, mobile punches stay verified and synced to payroll.
            </p>

            <ul className="check-list" role="list">
              {[
                'Verifies device GPS coordinates against configurable branch geofence radii',
                'Captures live front-camera selfie photos stamped to each punch log',
                'Tracks Time In, 1st Break, Lunch, 2nd Break, and Time Out accurately',
                'Live dashboard donut timer reflects active work duration vs. break pauses',
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
              photo="home-mobile-field"
              alt="Cheerful Filipina field coordinator checking her smartphone outdoors on a sunlit BGC corporate plaza walkway"
              problemLabel="Before: Disputed field DTRs & morning queues"
              solutionBadge="Outcome: Verified GPS & selfie punches in seconds"
              quote="Our field and branch teams clock in right at their assigned sites, view monthly calendar hours, and never argue over missing logs."
              personAttribution="Field & Branch Operations · Mobile Attendance"
            />
            <UiMockupCard
              preview={{
                eyebrow: 'Geofenced Attendance',
                title: 'Mobile Punch Verification Log',
                highlightLabel: 'Radius Check',
                highlightValue: 'Within 500m',
                metrics: [
                  { label: 'Selfie Check', value: 'Live Camera' },
                  { label: 'Payroll Sync', value: 'Real Time' },
                ],
                items: [
                  {
                    title: 'GPS Branch Geofence Matched',
                    subtitle: 'BGC HQ / Assigned Site coordinates confirmed',
                    status: 'Passed',
                    tone: 'mint',
                  },
                  {
                    title: 'Break & Lunch Transitions Logged',
                    subtitle: 'Accurate worked hours without manual DTR edits',
                    status: 'Recorded',
                    tone: 'sky',
                  },
                  {
                    title: 'Monthly Calendar Timesheet Updated',
                    subtitle: 'Regular hours, overtime & rest days visible immediately',
                    status: 'Synced',
                    tone: 'violet',
                  },
                ],
              }}
            />
          </div>
        </div>
      </section>

      {/* 4B. Deep Dive: Floor Approvals, QR Pairing & Biometric Passkeys */}
      <section className="phr-section">
        <div className="phr-container feat-split feat-split--reverse" style={{ alignItems: 'start' }}>
          <div>
            <span className="phr-eyebrow">
              <ShieldCheck size={14} aria-hidden="true" />
              Floor Command &amp; Biometric Security
            </span>
            <h2 className="phr-h2">1-Tap Floor Approvals, QR Onboarding &amp; Biometric Passkey Sign-In</h2>
            <p className="phr-lead">
              Managers stay responsive right from the operations floor while IT teams roll out the app effortlessly—every
              device pairs with one QR scan, adopts your company logo and colors, and locks behind Face ID or
              Fingerprint Passkeys.
            </p>

            <ul className="check-list" role="list">
              {[
                '1-tap My Team approvals for leaves, overtime & DTR edits with supervisor remarks',
                '1-scan QR pairing inside the Web Portal automatically sets company URL & user handle',
                'Native Face ID / Fingerprint Passkeys + encrypted JWT tokens replace forgotten passwords',
                'Instant tenant branding (logo, colors, light/dark mode) & automatic revocation on exit',
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
              photo="feature-self-service-manager"
              alt="Approachable Filipino line manager in a navy polo approving team requests on his smartphone on an active operations floor"
              problemLabel="Before: Waiting to get back to a desktop"
              solutionBadge="Outcome: 1-tap team approvals right on the floor"
              quote="Seeing who is on leave today and signing off on overtime takes one tap on my phone—no need to walk back to a desk."
              personAttribution="Line Manager · Mobile Floor Approvals"
            />
            <UiMockupCard
              preview={{
                eyebrow: 'Security & Provisioning',
                title: 'QR Setup, Passkeys & Tenant Theme',
                highlightLabel: 'Onboarding',
                highlightValue: '1 QR Scan',
                metrics: [
                  { label: 'Biometric Login', value: 'Face / Touch' },
                  { label: 'Brand Sync', value: 'Light + Dark' },
                ],
                items: [
                  {
                    title: 'QR Code Server Auto-Configuration',
                    subtitle: 'Scan from Web Portal Apps Hub—zero manual typing',
                    status: 'Configured',
                    tone: 'mint',
                  },
                  {
                    title: 'Device Passkey & JWT Protection',
                    subtitle: 'Biometric unlock with instant offboarding deactivation',
                    status: 'Secured',
                    tone: 'sky',
                  },
                  {
                    title: 'Dynamic Company Logo & Theme Sync',
                    subtitle: 'Matches each sister company’s branding automatically',
                    status: 'Branded',
                    tone: 'violet',
                  },
                ],
              }}
            />
          </div>
        </div>
      </section>

      {/* 5. FAQs */}
      <section className="phr-section phr-section--alt">
        <div className="phr-container" style={{ maxInlineSize: '50rem' }}>
          <div className="phr-section-header">
            <h2 className="phr-h2">Mobile Self-Service Questions</h2>
          </div>
          <CleanFaq items={MOBILE_SELF_SERVICE_FAQS} defaultOpenIndex={0} />
        </div>
      </section>

      {/* 6. Bottom CTA */}
      <section className="phr-section" style={{ textAlign: 'center' }}>
        <div className="phr-container" style={{ maxInlineSize: '46rem' }}>
          <h2 className="phr-h2">
            Ready to put the <span className="cosmic-accent">gemX Mobile App</span> in every team member’s pocket?
          </h2>
          <p className="phr-lead" style={{ marginBlockEnd: '1.85rem' }}>
            Walk through geofenced selfie clock-ins, PDF payslips, Digital Wallet cash-outs, and 1-tap manager
            approvals live—or explore the full browser portal.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.85rem' }}>
            <Link to="/request-demo" className="btn-primary">
              Schedule a Mobile App Demo <ArrowRight size={16} aria-hidden="true" />
            </Link>
            <Link to="/features/web-self-service" className="btn-secondary">
              Explore Web Self-Service Portal →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
