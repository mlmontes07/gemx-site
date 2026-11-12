import { CheckCircle2, Sparkles } from 'lucide-react';

export type PeoplePhotoSlug =
  | 'hr-director-hero'
  | 'payroll-relief-story'
  | 'employee-mobile-pocket'
  | 'manager-team-coaching'
  | 'executive-multicompany'
  | 'product-core-hr'
  | 'product-time-attendance'
  | 'product-recruitment'
  | 'product-benefits-assets'
  | 'feature-self-service-manager'
  | 'feature-self-service-leader'
  | 'feature-workpulse'
  | 'feature-salary-payouts'
  | 'home-cutoff-calm'
  | 'home-mobile-field'
  | 'home-story-retail'
  | 'home-story-healthcare'
  | 'home-story-enterprise'
  | 'roi-time-reclaimed'
  | 'demo-advisory-specialist';

export interface HumanStoryCardProps {
  photo: PeoplePhotoSlug;
  alt: string;
  problemLabel?: string;
  solutionBadge: string;
  quote: string;
  personAttribution: string;
  /** Set true ONLY for an above-the-fold LCP candidate image */
  priority?: boolean;
  /** 'card' = full story card, 'compact' = horizontal inline strip for hero/forms */
  variant?: 'card' | 'compact';
}

export function HumanStoryCard({
  photo,
  alt,
  problemLabel,
  solutionBadge,
  quote,
  personAttribution,
  priority = false,
  variant = 'card',
}: HumanStoryCardProps) {
  const webp800 = `/img/people/${photo}-800.webp`;
  const webp1280 = `/img/people/${photo}-1280.webp`;
  const jpgFallback = `/img/people/${photo}.jpg`;

  if (variant === 'compact') {
    return (
      <figure className="human-compact-card">
        <div className="human-compact-thumb">
          <picture>
            <source
              type="image/webp"
              srcSet={`${webp800} 800w, ${webp1280} 1280w`}
              sizes="(max-width: 48rem) 90vw, 18rem"
            />
            <img
              src={jpgFallback}
              alt={alt}
              width={1280}
              height={800}
              {...(priority ? { fetchPriority: 'high' as const } : { loading: 'lazy' as const })}
            />
          </picture>
        </div>

        <figcaption className="human-compact-body">
          <span className="human-solution-pill">
            <CheckCircle2 size={13} aria-hidden="true" />
            {solutionBadge}
          </span>
          <p className="human-compact-quote">“{quote}”</p>
          <span className="human-attribution">{personAttribution}</span>
        </figcaption>
      </figure>
    );
  }

  return (
    <figure className="human-story-card">
      <div className="human-story-media">
        <picture>
          <source
            type="image/webp"
            srcSet={`${webp800} 800w, ${webp1280} 1280w`}
            sizes="(max-width: 60rem) 92vw, 36rem"
          />
          <img
            src={jpgFallback}
            alt={alt}
            width={1280}
            height={800}
            {...(priority ? { fetchPriority: 'high' as const } : { loading: 'lazy' as const })}
          />
        </picture>

        <div className="human-media-badges">
          {problemLabel && <span className="human-problem-pill">{problemLabel}</span>}
          <span className="human-solution-pill human-solution-pill--overlay">
            <Sparkles size={13} aria-hidden="true" />
            {solutionBadge}
          </span>
        </div>
      </div>

      <figcaption className="human-story-caption">
        <p className="human-story-quote">“{quote}”</p>
        <span className="human-attribution">{personAttribution}</span>
      </figcaption>
    </figure>
  );
}

