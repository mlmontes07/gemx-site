import { Link } from 'react-router-dom';
import { HUB_SIGN_IN_URL } from '../config/site';
import { GemxLogo } from './GemxLogo';

export function Footer() {
  return (
    <footer
      style={{
        marginBlockStart: 'auto',
        background: 'var(--bg-footer)',
        borderBlockStart: '1px solid var(--border-hairline)',
        paddingBlock: '3.75rem 2.25rem',
      }}
    >
      <div className="phr-container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(13.5rem, 1fr))',
            gap: '2.25rem',
            paddingBlockEnd: '2.5rem',
            borderBlockEnd: '1px solid var(--border-hairline)',
          }}
        >
          {/* Brand */}
          <div>
            <Link to="/" className="nv-brand" style={{ marginBlockEnd: '0.85rem' }} aria-label="gemX Home">
              <GemxLogo height={52} />
            </Link>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', maxInlineSize: '30ch' }}>
              Your all-in-one HRIS and payroll platform, thoughtfully built for Philippine compliance and growing
              organizations.
            </p>
          </div>

          {/* Products */}
          <div>
            <h2 style={{ fontSize: '0.88rem', fontWeight: 700, marginBlockEnd: '0.85rem', color: 'var(--text-main)' }}>
              Products
            </h2>
            <ul role="list" style={{ listStyle: 'none', margin: 0, padding: 0, display: 'grid', gap: '0.5rem', fontSize: '0.88rem' }}>
              <li><Link to="/products/core-hr" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Core HR &amp; 201 Files</Link></li>
              <li><Link to="/products/payroll" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Payroll &amp; Compliance</Link></li>
              <li><Link to="/products/time-attendance" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Time &amp; Attendance</Link></li>
              <li><Link to="/products/recruitment" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Recruitment &amp; Onboarding</Link></li>
              <li><Link to="/products/talent-learning" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Performance &amp; Learning</Link></li>
              <li><Link to="/products/benefits-assets" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Benefits, Assets &amp; Relations</Link></li>
            </ul>
          </div>

          {/* Special Features */}
          <div>
            <h2 style={{ fontSize: '0.88rem', fontWeight: 700, marginBlockEnd: '0.85rem', color: 'var(--text-main)' }}>
              Special Features
            </h2>
            <ul role="list" style={{ listStyle: 'none', margin: 0, padding: 0, display: 'grid', gap: '0.5rem', fontSize: '0.88rem' }}>
              <li><Link to="/features/web-self-service" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Web Self-Service</Link></li>
              <li><Link to="/features/mobile-self-service" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Mobile Self-Service</Link></li>
              <li><Link to="/features/multi-company" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Multi-Company &amp; Branches</Link></li>
              <li><Link to="/features/workpulse" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>WorkPulse Hybrid Insights</Link></li>
              <li><Link to="/features/salary-payouts" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Instant Salary Payouts</Link></li>
            </ul>
          </div>

          {/* Tools & Get Started */}
          <div>
            <h2 style={{ fontSize: '0.88rem', fontWeight: 700, marginBlockEnd: '0.85rem', color: 'var(--text-main)' }}>
              Plan &amp; Explore
            </h2>
            <ul role="list" style={{ listStyle: 'none', margin: 0, padding: 0, display: 'grid', gap: '0.5rem', fontSize: '0.88rem' }}>
              <li><Link to="/" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Philippines HRIS Overview</Link></li>
              <li><Link to="/roi-calculator" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>HR ROI &amp; Time Calculator</Link></li>
              <li><a href={HUB_SIGN_IN_URL} style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Sign In to gemX Hub</a></li>
              <li><Link to="/request-demo" style={{ color: 'var(--accent-ink)', textDecoration: 'none', fontWeight: 600 }}>Request a Personalized Demo →</Link></li>
            </ul>
          </div>
        </div>

        <div
          style={{
            paddingBlockStart: '1.5rem',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            gap: '0.75rem',
            fontSize: '0.8125rem',
            color: 'var(--text-muted)',
          }}
        >
          <p>© {new Date().getFullYear()} gemX. All rights reserved.</p>
          <p>100% Built for Philippine Labor &amp; Statutory Compliance</p>
        </div>
      </div>
    </footer>
  );
}
