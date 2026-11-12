import { Link, Navigate, useParams } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import { CleanFaq } from '../components/CleanFaq';
import { UiMockupCard } from '../components/UiMockupCard';
import { PRODUCT_PAGES } from '../data/sitePagesData';

export function ProductDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const page = slug ? PRODUCT_PAGES[slug] : undefined;

  if (!page) {
    return <Navigate to="/" replace />;
  }

  return (
    <main id="page-main">
      {/* Clean Module Hero */}
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

          <UiMockupCard preview={page.heroPreview} />
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

