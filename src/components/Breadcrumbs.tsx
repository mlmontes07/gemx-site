import { Link, useLocation } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { getRouteSeo } from '../seo/seoData';

export function Breadcrumbs() {
  const { pathname } = useLocation();
  const entry = getRouteSeo(pathname);

  if (entry.breadcrumbs.length <= 1) {
    return null;
  }

  return (
    <nav aria-label="Breadcrumb" className="seo-breadcrumbs">
      <ol role="list" className="seo-breadcrumbs-list">
        {entry.breadcrumbs.map((crumb, idx) => {
          const isLast = idx === entry.breadcrumbs.length - 1;
          return (
            <li key={`${crumb.name}-${idx}`} className="seo-breadcrumbs-item">
              {idx > 0 && (
                <ChevronRight
                  size={13}
                  aria-hidden="true"
                  className="seo-breadcrumbs-sep"
                />
              )}
              {isLast ? (
                <span aria-current="page" className="seo-breadcrumbs-current">
                  {crumb.name}
                </span>
              ) : (
                <Link to={crumb.path} className="seo-breadcrumbs-link">
                  {crumb.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

