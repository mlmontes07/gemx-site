import { CheckCircle2 } from 'lucide-react';

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
  /** Number of columns when rendered in a multi-card grid (controls responsive `sizes`) */
  gridColumns?: 2 | 3;
}

export function buildPeopleSrcSet(photo: string, variant: 'card' | 'compact'): string {
  if (variant === 'compact') {
    return [
      `/img/people/${photo}-240.webp 240w`,
      `/img/people/${photo}-384.webp 384w`,
      `/img/people/${photo}-520.webp 520w`,
      `/img/people/${photo}-640.webp 640w`,
      `/img/people/${photo}-800.webp 800w`,
    ].join(', ');
  }
  return [
    `/img/people/${photo}-240.webp 240w`,
    `/img/people/${photo}-384.webp 384w`,
    `/img/people/${photo}-520.webp 520w`,
    `/img/people/${photo}-640.webp 640w`,
    `/img/people/${photo}-800.webp 800w`,
    `/img/people/${photo}-1280.webp 1280w`,
  ].join(', ');
}

export function getPeopleSizes(variant: 'card' | 'compact', gridColumns: 2 | 3 = 2): string {
  if (variant === 'compact') {
    return '(max-width: 34rem) 68vw, 9.75rem';
  }
  if (gridColumns === 3) {
    return '(max-width: 44rem) 64vw, (max-width: 68rem) 42vw, 23rem';
  }
  return '(max-width: 58rem) 64vw, (max-width: 78rem) 38vw, 31.8rem';
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
  gridColumns = 2,
}: HumanStoryCardProps) {
  const srcSet = buildPeopleSrcSet(photo, variant);
  const sizes = getPeopleSizes(variant, gridColumns);
  const jpgFallback = `/img/people/${photo}.jpg`;

  if (variant === 'compact') {
    return (
      <figure className="human-compact-card">
        <div className="human-compact-thumb">
          <picture>
            <source type="image/webp" srcSet={srcSet} sizes={sizes} />
            <img
              src={jpgFallback}
              alt={alt}
              width={1280}
              height={800}
              decoding="async"
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
          <source type="image/webp" srcSet={srcSet} sizes={sizes} />
          <img
            src={jpgFallback}
            alt={alt}
            width={1280}
            height={800}
            decoding="async"
            {...(priority ? { fetchPriority: 'high' as const } : { loading: 'lazy' as const })}
          />
        </picture>

        <div className="human-media-badges">
          {problemLabel && <span className="human-problem-pill">{problemLabel}</span>}
          <span className="human-solution-pill human-solution-pill--overlay">
            <CheckCircle2 size={13} aria-hidden="true" />
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

