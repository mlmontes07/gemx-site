import { FormEvent, useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface DemoFormCardProps {
  heading?: string;
  subheading?: string;
  idPrefix?: string;
}

export function DemoFormCard({
  heading = 'See gemX in action!',
  subheading = 'Fill in your details to explore a demo built around your HR needs.',
  idPrefix = 'hero-demo',
}: DemoFormCardProps) {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div
      className="space-card space-card--elevated"
      style={{
        padding: 'clamp(1.5rem, 3.5vw, 2.25rem)',
      }}
    >
      {submitted ? (
        <div style={{ textAlign: 'center', paddingBlock: '1.5rem' }}>
          <CheckCircle2
            size={44}
            style={{ color: 'var(--accent-icon)', marginInline: 'auto', marginBlockEnd: '0.85rem' }}
            aria-hidden="true"
          />
          <h2 style={{ fontSize: '1.45rem', marginBlockEnd: '0.5rem' }}>
            You’re on our calendar{name ? `, ${name}` : ''}!
          </h2>
          <p style={{ fontSize: '0.95rem', marginBlockEnd: '1.35rem' }}>
            Our Philippine HR specialists received your request{company ? ` for ${company}` : ''} and will reach out
            shortly with your personalized walkthrough.
          </p>
          <button type="button" className="btn-secondary" onClick={() => setSubmitted(false)}>
            Submit Another Inquiry
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div style={{ marginBlockEnd: '1.35rem' }}>
            <h2 style={{ fontSize: '1.45rem', marginBlockEnd: '0.35rem' }}>{heading}</h2>
            <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)' }}>{subheading}</p>
          </div>

          <div className="field-group">
            <label htmlFor={`${idPrefix}-name`} className="field-label">
              Full Name *
            </label>
            <input
              id={`${idPrefix}-name`}
              name="name"
              type="text"
              required
              autoComplete="name"
              placeholder="Maria Santos"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="field-input"
            />
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(11.5rem, 1fr))',
              gap: '0.8rem',
            }}
          >
            <div className="field-group">
              <label htmlFor={`${idPrefix}-email`} className="field-label">
                Work Email *
              </label>
              <input
                id={`${idPrefix}-email`}
                name="email"
                type="email"
                required
                autoComplete="email"
                placeholder="maria@company.com.ph"
                className="field-input"
              />
            </div>

            <div className="field-group">
              <label htmlFor={`${idPrefix}-phone`} className="field-label">
                Phone Number *
              </label>
              <input
                id={`${idPrefix}-phone`}
                name="tel"
                type="tel"
                required
                autoComplete="tel"
                placeholder="+63 917 000 0000"
                className="field-input"
              />
            </div>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(11.5rem, 1fr))',
              gap: '0.8rem',
            }}
          >
            <div className="field-group">
              <label htmlFor={`${idPrefix}-company`} className="field-label">
                Company Name *
              </label>
              <input
                id={`${idPrefix}-company`}
                name="organization"
                type="text"
                required
                autoComplete="organization"
                placeholder="Apex Group Inc."
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className="field-input"
              />
            </div>

            <div className="field-group">
              <label htmlFor={`${idPrefix}-size`} className="field-label">
                Employee Headcount
              </label>
              <select id={`${idPrefix}-size`} name="headcount" defaultValue="100-500" className="field-input">
                <option value="1-99">1 – 99 employees</option>
                <option value="100-500">100 – 500 employees</option>
                <option value="501-1500">501 – 1,500 employees</option>
                <option value="1500+">1,500+ / Multi-Company</option>
              </select>
            </div>
          </div>

          <button type="submit" className="btn-primary" style={{ inlineSize: '100%', marginBlockStart: '0.4rem' }}>
            Request My Personalized Demo
            <ArrowRight size={17} aria-hidden="true" />
          </button>

          <p
            style={{
              textAlign: 'center',
              fontSize: '0.78rem',
              color: 'var(--text-muted)',
              marginBlockStart: '0.75rem',
            }}
          >
            100% tailored to Philippine HR &amp; Payroll · No obligation
          </p>
        </form>
      )}
    </div>
  );
}

