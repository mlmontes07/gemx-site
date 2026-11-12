import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, Fingerprint, Smartphone } from 'lucide-react';
import { HumanStoryCard, PeoplePhotoSlug } from '../components/HumanStoryCard';
import { UiMockupCard } from '../components/UiMockupCard';

const AUDIENCES = {
  employees: {
    label: 'For Employees',
    photo: 'employee-mobile-pocket' as PeoplePhotoSlug,
    photoAlt: 'Smiling Filipino employee checking leave balance and payslip on his phone',
    problemLabel: 'Before: Waiting days for payslips & leave replies',
    solutionBadge: 'With gemX: 24/7 answers right in your pocket',
    quote: 'I checked my leave credits and filed my vacation request in thirty seconds while commuting—approved before I reached my desk.',
    attribution: 'Team Member · Everyday Mobile Self-Service',
    headline: 'Everything Employees Need—Without Waiting on HR.',
    description:
      'Give every team member instant 24/7 access to their own records, balances, payslips, and requests from their phone or laptop.',
    checks: [
      'Clock in and out at approved work locations with live photo verification',
      'View and download itemized PDF payslips, 13th month statements & BIR Form 2316',
      'Check Vacation and Sick Leave balances in real time and submit requests in seconds',
      'Apply for overtime, time adjustments, company loans, and Hospital LOAs online',
      'View personal digital wallet payouts and assigned company equipment',
    ],
    preview: {
      eyebrow: 'Employee Self-Service',
      title: 'My Daily Shortcuts',
      highlightLabel: 'Access',
      highlightValue: '24/7 Mobile',
      metrics: [
        { label: 'VL Balance', value: '11.5 Days' },
        { label: 'Latest Payslip', value: 'Ready PDF' },
      ],
      items: [
        { title: 'Location Clock-In · Makati Office', subtitle: 'Checked in at 8:51 AM · On Time', status: 'Verified', tone: 'mint' as const },
        { title: 'Download Semi-Monthly Payslip', subtitle: 'Confidential PDF with YTD summary', status: 'Available', tone: 'sky' as const },
        { title: 'Hospital LOA Request', subtitle: 'Approved & ready for clinic presentation', status: 'Approved', tone: 'violet' as const },
      ],
    },
  },
  managers: {
    label: 'For Managers',
    photo: 'feature-self-service-manager' as PeoplePhotoSlug,
    photoAlt: 'Approachable Filipino line manager in a navy polo approving team requests on his smartphone on an active operations floor',
    problemLabel: 'Before: Buried in paper forms & email threads',
    solutionBadge: 'Outcome: 1-tap team approvals right on the floor',
    quote: 'Seeing who is on leave today and signing off on overtime takes one tap on my phone—no need to walk back to a desk.',
    attribution: 'Manager Self-Service Outcome · 24-Person Operations Team',
    headline: 'Lead Your Team Without Getting Buried in Forms.',
    description:
      'Line managers and branch heads see what their team needs and complete approvals in seconds—without waiting for HR to prepare another spreadsheet.',
    checks: [
      'Approve or decline team leaves, overtime, and schedule adjustments in one tap',
      'See live daily attendance across office, field, and remote team members',
      'Complete 360-degree appraisals, goal check-ins, and 1-on-1 coaching notes',
      'Sign off on new-hire onboarding readiness and exit clearances effortlessly',
    ],
    preview: {
      eyebrow: 'Manager Hub',
      title: 'My Team Today & Approvals',
      highlightLabel: 'Team Present',
      highlightValue: '22 / 24',
      metrics: [
        { label: 'Pending Sign-Offs', value: '3 Requests' },
        { label: 'On Leave Today', value: '2 Planned' },
      ],
      items: [
        { title: 'Vacation Leave · Marco Villanueva', subtitle: 'Dec 18–19 · Team coverage clear', status: 'Approve', tone: 'mint' as const },
        { title: 'Overtime Request · 2.5 Hours', subtitle: 'Month-end closing support', status: 'Approve', tone: 'sky' as const },
        { title: 'Probationary Appraisal Due', subtitle: 'Clarisse Tan · 5th Month Check-In', status: 'Open', tone: 'amber' as const },
      ],
    },
  },
  leaders: {
    label: 'For HR Leaders',
    photo: 'feature-self-service-leader' as PeoplePhotoSlug,
    photoAlt: 'Inspiring Filipina Head of People leading a warm small-group culture conversation in a sunlit Manila office lounge',
    problemLabel: 'Before: Answering repetitive balance inquiries all day',
    solutionBadge: 'Outcome: 80% fewer tickets → More time for culture',
    quote: 'When employees and managers have clear self-service tools, HR finally focuses on retention, culture, and people strategy.',
    attribution: 'HR Leadership Outcome · Strategic People & Culture',
    headline: 'Reclaim 80% of Time Spent Answering Routine Questions.',
    description:
      'When employees and managers self-serve smoothly, HR shifts from chasing signatures to building culture, retention, and people strategy.',
    checks: [
      'Publish company-wide announcements, memos, and updated handbooks instantly',
      'Tailor role, department, and branch access permissions with total confidence',
      'Monitor headcount, attendance trends, compliance training, and turnover live',
      'Keep an automatic, date-stamped trail of every request and approval',
    ],
    preview: {
      eyebrow: 'HR Executive View',
      title: 'Workforce Health at a Glance',
      highlightLabel: 'HR Inquiries',
      highlightValue: '-80%',
      metrics: [
        { label: 'Policy Read Rate', value: '98.4%' },
        { label: 'Cutoff Readiness', value: 'On Schedule' },
      ],
      items: [
        { title: 'Routine Payslip & Balance Tickets', subtitle: 'Handled automatically via self-service', status: 'Automated', tone: 'mint' as const },
        { title: 'Role & Branch Access Controls', subtitle: 'Confidential salary access strictly scoped', status: 'Protected', tone: 'sky' as const },
        { title: 'Updated Employee Handbook', subtitle: 'Published across all active branches', status: 'Live', tone: 'violet' as const },
      ],
    },
  },
} as const;

export function SelfServicePage() {
  const [roleKey, setRoleKey] = useState<keyof typeof AUDIENCES>('employees');
  const active = AUDIENCES[roleKey];

  return (
    <main id="page-main">
      {/* Hero */}
      <section className="phr-section" style={{ paddingBlockStart: 'clamp(2.75rem, 5vw, 4.5rem)' }}>
        <div className="phr-container" style={{ textAlign: 'center', maxInlineSize: '50rem' }}>
          <span className="phr-eyebrow">
            <Smartphone size={14} aria-hidden="true" />
            Web Portal &amp; Mobile Companion
          </span>
          <h1 className="phr-h1">
            Self-Service That <span className="cosmic-accent">Actually Works for Everyone</span>.
          </h1>
          <p className="phr-lead">
            Designed around how Filipino employees, line managers, and HR leaders actually work—simple, fast, and
            accessible anywhere.
          </p>
        </div>

        <div className="phr-container" style={{ marginBlockStart: '2.5rem' }}>
          <div role="tablist" aria-label="Self-service audiences" className="ph-mod-tabs">
            {(Object.keys(AUDIENCES) as Array<keyof typeof AUDIENCES>).map((k) => (
              <button
                key={k}
                type="button"
                role="tab"
                aria-selected={roleKey === k}
                className="ph-mod-tab"
                onClick={() => setRoleKey(k)}
              >
                {AUDIENCES[k].label}
              </button>
            ))}
          </div>

          <div role="tabpanel" className="space-card ph-mod-panel">
            <div>
              <h2 style={{ fontSize: 'clamp(1.45rem, 1.15rem + 1.2vw, 2rem)', marginBlockEnd: '0.75rem' }}>
                {active.headline}
              </h2>
              <p style={{ fontSize: '0.96rem', marginBlockEnd: '1.25rem' }}>{active.description}</p>

              <ul className="check-list" role="list">
                {active.checks.map((c) => (
                  <li key={c}>
                    <span className="check-bullet" aria-hidden="true">
                      <Check size={13} strokeWidth={3} />
                    </span>
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div style={{ display: 'grid', gap: '1.15rem' }}>
              <HumanStoryCard
                priority
                photo={active.photo}
                alt={active.photoAlt}
                problemLabel={active.problemLabel}
                solutionBadge={active.solutionBadge}
                quote={active.quote}
                personAttribution={active.attribution}
              />
              <UiMockupCard preview={active.preview} />
            </div>
          </div>
        </div>
      </section>

      {/* Passwordless Sign-In Highlight */}
      <section className="phr-section phr-section--alt">
        <div className="phr-container feat-split">
          <div>
            <span className="phr-eyebrow">
              <Fingerprint size={14} aria-hidden="true" />
              Effortless &amp; Safe Sign-In
            </span>
            <h2 className="phr-h2">No More Forgotten Passwords on Payday</h2>
            <p className="phr-lead">
              Employees can sign in with a single tap using their phone or laptop’s built-in face or fingerprint
              recognition—paired with optional two-step verification for added peace of mind.
            </p>
            <div style={{ marginBlockStart: '1.75rem' }}>
              <Link to="/request-demo" className="btn-primary">
                Experience Self-Service Live <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </div>

          <UiMockupCard
            preview={{
              eyebrow: 'Quick Access',
              title: 'Passwordless & Two-Step Protection',
              highlightLabel: 'Password Resets',
              highlightValue: 'Eliminated',
              metrics: [
                { label: 'Face / Touch Sign-In', value: '1 Tap' },
                { label: 'Account Safety', value: '2-Step Ready' },
              ],
              items: [
                { title: 'Sign in with Face or Fingerprint', subtitle: 'Works seamlessly across mobile & desktop', status: 'Active', tone: 'mint' },
                { title: 'Two-Step Verification', subtitle: 'Protects HR & payroll approver accounts', status: 'Enabled', tone: 'sky' },
                { title: 'Instant Access Closure on Exit', subtitle: 'Automatically deactivated upon separation', status: 'Protected', tone: 'violet' },
              ],
            }}
          />
        </div>
      </section>
    </main>
  );
}

