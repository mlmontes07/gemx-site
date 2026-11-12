import { Check, Sparkles } from 'lucide-react';
import { DemoFormCard } from '../components/DemoFormCard';

export function RequestDemoPage() {
  return (
    <main id="page-main">
      <section className="phr-section" style={{ paddingBlockStart: 'clamp(2.75rem, 5vw, 4.5rem)' }}>
        <div className="phr-container hero-split">
          <div>
            <span className="phr-eyebrow">
              <Sparkles size={14} aria-hidden="true" />
              Personalized Walkthrough
            </span>
            <h1 className="phr-h1">
              Let’s Build a Demo Around <span className="cosmic-accent">Your HR &amp; Payroll Goals</span>.
            </h1>
            <p className="phr-lead">
              Skip generic sales slides. Our Philippine HR specialists tailor every session to your company’s pay
              schedules, shift rules, compliance needs, and headcount.
            </p>

            <h2 style={{ fontSize: '1.1rem', marginBlockStart: '2rem', marginBlockEnd: '0.5rem' }}>
              What we’ll cover together in 30 minutes:
            </h2>
            <ul className="check-list" role="list" style={{ marginBlockStart: '0.75rem' }}>
              {[
                'A live walkthrough of the exact modules your team cares about most',
                'How your shifts, local holidays, allowances & loans map cleanly in gemX',
                'A look at BIR Form 2316, Alphalist, SSS, PhilHealth & Pag-IBIG outputs',
                'Multi-company or branch setup, migration timeline & transparent pricing',
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

          <DemoFormCard
            heading="Schedule Your Live Demo"
            subheading="Share a few details and we’ll coordinate a convenient time for your team."
            idPrefix="page-demo"
          />
        </div>
      </section>
    </main>
  );
}

