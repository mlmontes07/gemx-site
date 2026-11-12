import { Link, Navigate, useParams } from 'react-router-dom';
import { ArrowRight, Check, Laptop, Wallet } from 'lucide-react';
import { HumanStoryCard, PeoplePhotoSlug } from '../components/HumanStoryCard';
import { UiMockupCard } from '../components/UiMockupCard';

const FEATURE_SPOTLIGHTS = {
  workpulse: {
    icon: Laptop,
    eyebrow: 'Special Feature · Hybrid & Remote Teams',
    title: 'Clear, Fair Visibility for',
    highlight: 'Hybrid & Work-From-Home Teams.',
    description:
      'Support flexible work with trust and clarity. WorkPulse helps managers and remote staff track active work hours, focus habits, and project timesheets without micromanagement.',
    bullets: [
      'Clear daily summaries of active work time vs. idle breaks',
      'Customizable productive focus categories tailored by team or role',
      'Project and client task time logging rolled into clean team reports',
      'Optional periodic work-screen check-ins with transparent employee privacy controls',
    ],
    preview: {
      eyebrow: 'WorkPulse Insights',
      title: 'Hybrid Team Focus & Task Summary',
      highlightLabel: 'Productive Focus',
      highlightValue: '88.6%',
      metrics: [
        { label: 'Remote Staff Today', value: '64 Active' },
        { label: 'Project Logs', value: 'Synced' },
      ],
      items: [
        { title: 'Design & Creative Team', subtitle: '6h 45m active focus · Brand Campaign tasks', status: 'On Target', tone: 'mint' as const },
        { title: 'Accounting & Shared Services', subtitle: 'Month-end reconciliation hours logged', status: 'Logged', tone: 'sky' as const },
        { title: 'Weekly Hybrid Balance Report', subtitle: 'Ready for department manager review', status: 'Ready', tone: 'violet' as const },
      ],
    },
    secondTitle: 'Turn Remote Hours Into Effortless Project Timesheets',
    secondDesc:
      'Know how much time goes into each project, client account, or internal initiative while syncing remote attendance straight into gemX Time & Payroll.',
    secondBullets: [
      'Assign projects and tasks so teams log hours with a single click',
      'Spot burnout or overloaded workloads early before deadlines slip',
      'Connected directly to gemX Attendance—no separate tracker subscription needed',
    ],
    story: {
      photo: 'feature-workpulse' as PeoplePhotoSlug,
      alt: 'Relaxed Filipina professional smiling while working productively from a sunlit, plant-filled home study in Manila',
      problemLabel: 'Before: Guessing remote workloads & burnout',
      solutionBadge: 'Outcome: Trusted hybrid focus & balanced hours',
      quote: 'Remote staff enjoy calm work-from-home flexibility while managers see clear project progress without constant status pings.',
      attribution: 'WorkPulse Outcome · Healthy Hybrid Productivity',
    },
  },
  'salary-payouts': {
    icon: Wallet,
    eyebrow: 'Special Feature · Payday Disbursements',
    title: 'Delight Your People with',
    highlight: 'Instant, Stress-Free Paydays.',
    description:
      'Bridge the final mile between payroll approval and employee happiness. Release net salaries through major Philippine bank files or instant digital wallets.',
    bullets: [
      'One-click salary disbursements straight from locked payroll periods',
      'Direct integration with Maya Business and PayMongo digital wallets',
      'Ready-to-upload corporate payroll advice files for Philippine banks',
      'Personal digital wallet ledger & payout history inside employee self-service',
    ],
    preview: {
      eyebrow: 'Salary Disbursement',
      title: 'Payday Release & Wallet Credits',
      highlightLabel: 'Payout Speed',
      highlightValue: 'Minutes',
      metrics: [
        { label: 'Total Net Pay', value: '₱18.42M' },
        { label: 'Channels', value: 'Bank + Wallets' },
      ],
      items: [
        { title: 'Corporate Bank Payroll File', subtitle: 'Formatted & ready for treasury upload', status: 'Downloaded', tone: 'mint' as const },
        { title: 'Maya & PayMongo Wallet Payouts', subtitle: 'Credited directly to employee wallets', status: 'Disbursed', tone: 'sky' as const },
        { title: 'Confidential PDF Payslips', subtitle: 'Sent automatically upon payout release', status: 'Delivered', tone: 'violet' as const },
      ],
    },
    secondTitle: 'Give Every Employee Flexible Ways to Receive Their Pay',
    secondDesc:
      'Whether you employ corporate headquarters staff with traditional payroll bank accounts or nationwide field teams who prefer instant digital wallets, gemX handles both seamlessly.',
    secondBullets: [
      'Eliminate manual encoding of account numbers and payout amounts',
      'Real-time confirmation status for every disbursed employee payout',
      'Clear audit trail connecting approved payroll registers to finance treasury',
    ],
    story: {
      photo: 'feature-salary-payouts' as PeoplePhotoSlug,
      alt: 'Two happy young Filipino coworkers smiling over iced coffees at a sunny BGC cafe while checking an instant payday notification',
      problemLabel: 'Before: Manual bank encoding & delayed paydays',
      solutionBadge: 'Outcome: Instant wallet & bank disbursements',
      quote: 'The moment payroll is approved, salaries land reliably and every team member gets to enjoy payday right on schedule.',
      attribution: 'Salary Payouts Outcome · Zero-Delay Payday Joy',
    },
  },
} as const;

export function SpecialFeaturePage() {
  const { featureSlug } = useParams<{ featureSlug: string }>();
  const data =
    featureSlug && featureSlug in FEATURE_SPOTLIGHTS
      ? FEATURE_SPOTLIGHTS[featureSlug as keyof typeof FEATURE_SPOTLIGHTS]
      : null;

  if (!data) {
    return <Navigate to="/" replace />;
  }

  const Icon = data.icon;

  return (
    <main id="page-main">
      <section className="phr-section" style={{ paddingBlockStart: 'clamp(2.75rem, 5vw, 4.5rem)' }}>
        <div className="phr-container hero-split">
          <div>
            <span className="phr-eyebrow">
              <Icon size={14} aria-hidden="true" />
              {data.eyebrow}
            </span>
            <h1 className="phr-h1">
              {data.title} <span className="cosmic-accent">{data.highlight}</span>
            </h1>
            <p className="phr-lead">{data.description}</p>

            <ul className="check-list" role="list">
              {data.bullets.map((b) => (
                <li key={b}>
                  <span className="check-bullet" aria-hidden="true">
                    <Check size={13} strokeWidth={3} />
                  </span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <div style={{ marginBlockStart: '2rem' }}>
              <Link to="/request-demo" className="btn-primary">
                See It in a Live Demo <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </div>

          <div style={{ display: 'grid', gap: '1.15rem' }}>
            <HumanStoryCard
              priority
              photo={data.story.photo}
              alt={data.story.alt}
              problemLabel={data.story.problemLabel}
              solutionBadge={data.story.solutionBadge}
              quote={data.story.quote}
              personAttribution={data.story.attribution}
            />
            <UiMockupCard preview={data.preview} />
          </div>
        </div>
      </section>

      <section className="phr-section phr-section--alt">
        <div className="phr-container" style={{ maxInlineSize: '52rem' }}>
          <div className="space-card" style={{ padding: 'clamp(1.75rem, 4vw, 2.75rem)' }}>
            <h2 className="phr-h2" style={{ marginBlockEnd: '0.85rem' }}>
              {data.secondTitle}
            </h2>
            <p className="phr-lead" style={{ marginBlockStart: 0, marginBlockEnd: '1.25rem' }}>
              {data.secondDesc}
            </p>
            <ul className="check-list" role="list">
              {data.secondBullets.map((b) => (
                <li key={b}>
                  <span className="check-bullet" aria-hidden="true">
                    <Check size={13} strokeWidth={3} />
                  </span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
