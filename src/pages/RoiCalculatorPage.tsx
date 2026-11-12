import { CSSProperties, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calculator } from 'lucide-react';

export function RoiCalculatorPage() {
  const [headcount, setHeadcount] = useState(300);
  const [locations, setLocations] = useState(3);

  const monthlyHoursSaved = Math.round(headcount * 0.24 + locations * 12);
  const annualFormsSaved = Math.round(headcount * 42);
  const fasterCutoffPct = Math.min(88, Math.round(68 + Math.min(20, locations * 2 + headcount / 350)));

  const headcountProgress = `${Math.round(((headcount - 50) / (5000 - 50)) * 100)}%`;
  const locationsProgress = `${Math.round(((locations - 1) / (25 - 1)) * 100)}%`;

  return (
    <main id="page-main">
      <section className="phr-section" style={{ paddingBlockStart: 'clamp(2.75rem, 5vw, 4.5rem)' }}>
        <div className="phr-container">
          <div className="phr-section-header">
            <span className="phr-eyebrow">
              <Calculator size={14} aria-hidden="true" />
              gemX ROI &amp; Time-Savings Calculator
            </span>
            <h1 className="phr-h1">
              Run the Numbers. <span className="cosmic-accent">See the Time Your Team Reclaims.</span>
            </h1>
            <p className="phr-lead">
              Adjust your active employee headcount and number of sister companies or branches to estimate your monthly
              operational savings.
            </p>
          </div>

          <div className="space-card" style={{ padding: 'clamp(1.75rem, 4vw, 3rem)' }}>
            <div className="feat-split">
              {/* Sliders */}
              <div>
                <h2 style={{ fontSize: '1.35rem', marginBlockEnd: '1.5rem' }}>Your Organization Profile</h2>

                <div style={{ marginBlockEnd: '1.85rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBlockEnd: '0.5rem' }}>
                    <label htmlFor="roi-headcount" style={{ fontWeight: 600 }}>
                      Total Employees
                    </label>
                    <output
                      htmlFor="roi-headcount"
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '1.5rem',
                        fontWeight: 700,
                        color: 'var(--accent-stat)',
                      }}
                    >
                      {headcount.toLocaleString()}
                    </output>
                  </div>
                  <input
                    id="roi-headcount"
                    type="range"
                    min={50}
                    max={5000}
                    step={50}
                    value={headcount}
                    onChange={(e) => setHeadcount(Number(e.target.value))}
                    style={
                      {
                        inlineSize: '100%',
                        accentColor: 'var(--accent-control)',
                        cursor: 'pointer',
                        '--progress': headcountProgress,
                      } as CSSProperties
                    }
                  />
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                    <span>50</span>
                    <span>2,500</span>
                    <span>5,000</span>
                  </div>
                </div>

                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBlockEnd: '0.5rem' }}>
                    <label htmlFor="roi-locations" style={{ fontWeight: 600 }}>
                      Companies or Branch Locations
                    </label>
                    <output
                      htmlFor="roi-locations"
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '1.5rem',
                        fontWeight: 700,
                        color: 'var(--accent-stat-alt)',
                      }}
                    >
                      {locations}
                    </output>
                  </div>
                  <input
                    id="roi-locations"
                    type="range"
                    min={1}
                    max={25}
                    step={1}
                    value={locations}
                    onChange={(e) => setLocations(Number(e.target.value))}
                    style={
                      {
                        inlineSize: '100%',
                        accentColor: 'var(--accent-control)',
                        cursor: 'pointer',
                        '--progress': locationsProgress,
                      } as CSSProperties
                    }
                  />
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                    <span>1 location</span>
                    <span>12 locations</span>
                    <span>25+ locations</span>
                  </div>
                </div>
              </div>

              {/* Results + Semantic Table */}
              <div>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(9.5rem, 1fr))',
                    gap: '0.85rem',
                    marginBlockEnd: '1.25rem',
                  }}
                >
                  <div className="space-card-soft" style={{ padding: '1.1rem' }}>
                    <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', display: 'block' }}>
                      HR Hours Reclaimed
                    </span>
                    <strong
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '1.8rem',
                        color: 'var(--accent-stat)',
                      }}
                    >
                      ~{monthlyHoursSaved} hrs
                    </strong>
                    <span style={{ fontSize: '0.78rem', color: 'var(--text-body)', display: 'block' }}>Every month</span>
                  </div>

                  <div className="space-card-soft" style={{ padding: '1.1rem' }}>
                    <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', display: 'block' }}>
                      Paper Forms Saved
                    </span>
                    <strong
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '1.8rem',
                        color: 'var(--accent-stat-alt)',
                      }}
                    >
                      {annualFormsSaved.toLocaleString()}+
                    </strong>
                    <span style={{ fontSize: '0.78rem', color: 'var(--text-body)', display: 'block' }}>Every year</span>
                  </div>

                  <div className="space-card-soft" style={{ padding: '1.1rem' }}>
                    <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', display: 'block' }}>
                      Cutoff Turnaround
                    </span>
                    <strong
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '1.8rem',
                        color: 'var(--accent-stat)',
                      }}
                    >
                      {fasterCutoffPct}% Faster
                    </strong>
                    <span style={{ fontSize: '0.78rem', color: 'var(--text-body)', display: 'block' }}>DTR to Payslip</span>
                  </div>
                </div>

                <div
                  style={{
                    borderRadius: '0.9rem',
                    border: '1px solid var(--border-inset)',
                    background: 'var(--bg-inset)',
                    overflowX: 'auto',
                  }}
                >
                  <table style={{ inlineSize: '100%', borderCollapse: 'collapse', fontSize: '0.86rem' }}>
                    <caption className="visually-hidden">
                      Comparison between manual spreadsheets and gemX for {headcount} employees
                    </caption>
                    <thead>
                      <tr style={{ borderBlockEnd: '1px solid var(--border-hairline)', color: 'var(--text-muted)' }}>
                        <th scope="col" style={{ padding: '0.7rem 0.95rem', textAlign: 'start' }}>Process</th>
                        <th scope="col" style={{ padding: '0.7rem 0.95rem', textAlign: 'start' }}>Spreadsheets</th>
                        <th scope="col" style={{ padding: '0.7rem 0.95rem', textAlign: 'start', color: 'var(--accent-ink)' }}>gemX</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{ borderBlockEnd: '1px solid var(--border-inset)' }}>
                        <td style={{ padding: '0.65rem 0.95rem', fontWeight: 600 }}>DTR &amp; Leave Checking</td>
                        <td style={{ padding: '0.65rem 0.95rem', color: 'var(--text-muted)' }}>2–4 days / cutoff</td>
                        <td style={{ padding: '0.65rem 0.95rem', color: 'var(--table-positive)', fontWeight: 600 }}>Automatic Sync</td>
                      </tr>
                      <tr style={{ borderBlockEnd: '1px solid var(--border-inset)' }}>
                        <td style={{ padding: '0.65rem 0.95rem', fontWeight: 600 }}>Payroll &amp; Gov’t Shares</td>
                        <td style={{ padding: '0.65rem 0.95rem', color: 'var(--text-muted)' }}>Manual formulas</td>
                        <td style={{ padding: '0.65rem 0.95rem', color: 'var(--table-positive)', fontWeight: 600 }}>Minutes</td>
                      </tr>
                      <tr>
                        <td style={{ padding: '0.65rem 0.95rem', fontWeight: 600 }}>BIR 2316 &amp; Alphalist</td>
                        <td style={{ padding: '0.65rem 0.95rem', color: 'var(--text-muted)' }}>Weeks in January</td>
                        <td style={{ padding: '0.65rem 0.95rem', color: 'var(--table-positive)', fontWeight: 600 }}>Ready in Clicks</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div style={{ marginBlockStart: '1.35rem', textAlign: 'end' }}>
                  <Link to="/request-demo" className="btn-primary">
                    Validate With a Custom Demo <ArrowRight size={16} aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
