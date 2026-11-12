import { Link, Navigate, useParams } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import { CleanFaq } from '../components/CleanFaq';
import { HumanStoryCard, PeoplePhotoSlug } from '../components/HumanStoryCard';
import { UiMockupCard } from '../components/UiMockupCard';
import { PRODUCT_PAGES } from '../data/sitePagesData';

const MODULE_HUMAN_STORIES: Record<
  string,
  {
    photo: PeoplePhotoSlug;
    alt: string;
    problemLabel: string;
    solutionBadge: string;
    quote: string;
    attribution: string;
  }
> = {
  'core-hr': {
    photo: 'product-core-hr',
    alt: 'Filipina HR specialist reviewing paperless digital 201 records on a tablet with a smiling colleague beside plant-lined shelves',
    problemLabel: 'Before: Filing cabinets & missing 201 documents',
    solutionBadge: 'Outcome: Instant paperless 201 & clearances',
    quote: 'Contracts, movements, org charts, and exit clearances open in seconds—not buried inside brown envelopes.',
    attribution: 'Core HR Outcome · Paperless Employee Masterfile',
  },
  payroll: {
    photo: 'payroll-relief-story',
    alt: 'Two Filipino HR and Finance teammates smiling with relief at their laptop with old paper binders pushed aside',
    problemLabel: 'Before: Late nights reconciling BIR, SSS & loans',
    solutionBadge: 'Outcome: Stress-free cutoffs closed before lunch',
    quote: 'We went from three stressful days of manual checking to reviewing an accurate, compliant payroll register in minutes.',
    attribution: 'Payroll Outcome · 100% Statutory Precision',
  },
  'time-attendance': {
    photo: 'product-time-attendance',
    alt: 'Cheerful Filipino employee completing an effortless contactless biometric wall terminal clock-in at a sunlit Makati lobby',
    problemLabel: 'Before: Morning queues & disputed DTR sheets',
    solutionBadge: 'Outcome: Queue-free biometrics synced to payroll',
    quote: 'Every biometric tap, rest-day rule, overtime approval, and local holiday flows straight into payroll with zero disputes.',
    attribution: 'Time & Attendance Outcome · Live Shift Accuracy',
  },
  recruitment: {
    photo: 'product-recruitment',
    alt: 'Welcoming Filipina Talent Partner shaking hands with a beaming new hire while handing over a Day-One badge and closed laptop',
    problemLabel: 'Before: Inbox resumes & Day-One form stacks',
    solutionBadge: 'Outcome: Warm, Day-One ready new-hire welcome',
    quote: 'Pre-boarding happens online before Monday morning, so Day One starts with a warm handshake—not stacks of forms.',
    attribution: 'Recruitment Outcome · Seamless Hiring to Day One',
  },
  'talent-learning': {
    photo: 'manager-team-coaching',
    alt: 'Supportive Filipina team manager coaching a smiling team member over a tablet in a sunlit collaboration room',
    problemLabel: 'Before: Rushed once-a-year review spreadsheets',
    solutionBadge: 'Outcome: Meaningful coaching, 360° growth & courses',
    quote: 'Managers actually look forward to check-ins because clear goals, 360 feedback, and learning paths live in one place.',
    attribution: 'Talent Outcome · Continuous Growth & Merit Clarity',
  },
  'benefits-assets': {
    photo: 'product-benefits-assets',
    alt: 'Friendly workplace officer handing a sleek laptop and wireless headset across a modern counter to a smiling Filipina employee',
    problemLabel: 'Before: Slow HMO LOAs & untracked laptops',
    solutionBadge: 'Outcome: Fast health care & tracked equipment',
    quote: 'Whether an employee needs an urgent clinic LOA or Day-One laptop handover, every request is tracked and cared for fast.',
    attribution: 'Benefits & Assets Outcome · Prompt Care & Accountability',
  },
};

export function ProductDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const page = slug ? PRODUCT_PAGES[slug] : undefined;

  if (!page) {
    return <Navigate to="/" replace />;
  }

  const humanStory = MODULE_HUMAN_STORIES[slug ?? ''] ?? MODULE_HUMAN_STORIES['core-hr'];

  return (
    <main id="page-main">
      {/* Clean Module Hero + Bespoke Tangible Outcome Photo */}
      <section className="phr-section" style={{ paddingBlockStart: 'clamp(2.75rem, 5vw, 4.5rem)' }}>
        <div className="phr-container hero-split">
          <div>
            <span className="phr-eyebrow">{page.badge}</span>
            <h1 className="phr-h1">
              {page.heroTitle} <span className="cosmic-accent">{page.heroHighlight}</span>
            </h1>
            <p className="phr-lead">{page.heroDescription}</p>

            <ul className="check-list" role="list">
              {page.heroBullets.map((b) => (
                <li key={b}>
                  <span className="check-bullet" aria-hidden="true">
                    <Check size={13} strokeWidth={3} />
                  </span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <div style={{ marginBlockStart: '2rem', display: 'flex', flexWrap: 'wrap', gap: '0.85rem' }}>
              <Link to="/request-demo" className="btn-primary">
                Request a Demo <ArrowRight size={16} aria-hidden="true" />
              </Link>
              <Link to={`/products/${page.nextSlug}`} className="btn-secondary">
                Next: {page.nextLabel} →
              </Link>
            </div>
          </div>

          <div style={{ display: 'grid', gap: '1.15rem' }}>
            <HumanStoryCard
              priority
              photo={humanStory.photo}
              alt={humanStory.alt}
              problemLabel={humanStory.problemLabel}
              solutionBadge={humanStory.solutionBadge}
              quote={humanStory.quote}
              personAttribution={humanStory.attribution}
            />
            <UiMockupCard preview={page.heroPreview} />
          </div>
        </div>
      </section>

      {/* Alternating Left/Right Feature Sections (PeoplesHR Product Page Rhythm) */}
      {page.sections.map((sec, idx) => {
        const isAlt = idx % 2 === 0;
        const isReverse = idx % 2 === 1;
        return (
          <section key={sec.title} className={`phr-section${isAlt ? ' phr-section--alt' : ''}`}>
            <div className={`phr-container feat-split${isReverse ? ' feat-split--reverse' : ''}`}>
              <div>
                <span className="phr-eyebrow">{sec.eyebrow}</span>
                <h2 className="phr-h2">{sec.title}</h2>
                <p className="phr-lead">{sec.description}</p>

                <ul className="check-list" role="list">
                  {sec.bullets.map((pt) => (
                    <li key={pt}>
                      <span className="check-bullet" aria-hidden="true">
                        <Check size={13} strokeWidth={3} />
                      </span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <UiMockupCard preview={sec.preview} />
            </div>
          </section>
        );
      })}

      {/* Module FAQs */}
      <section className="phr-section">
        <div className="phr-container" style={{ maxInlineSize: '50rem' }}>
          <div className="phr-section-header">
            <h2 className="phr-h2">Got Questions? We’ve Got You Covered.</h2>
          </div>
          <CleanFaq items={page.faqs} defaultOpenIndex={0} />
        </div>
      </section>

      {/* Clean Bottom CTA + Next Module */}
      <section className="phr-section phr-section--alt" style={{ textAlign: 'center' }}>
        <div className="phr-container" style={{ maxInlineSize: '46rem' }}>
          <h2 className="phr-h2">
            Ready to see <span className="cosmic-accent">{page.navName}</span> in action?
          </h2>
          <p className="phr-lead" style={{ marginBlockEnd: '1.85rem' }}>
            Schedule a friendly walkthrough tailored around your organization’s workflows and policies.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.85rem' }}>
            <Link to="/request-demo" className="btn-primary">
              Book a Personalized Demo <ArrowRight size={16} aria-hidden="true" />
            </Link>
            <Link to={`/products/${page.nextSlug}`} className="btn-secondary">
              Explore {page.nextLabel} →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
