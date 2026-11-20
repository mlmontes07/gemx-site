import { Link, useLocation } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { getRouteBreadcrumbs } from '../seo/breadcrumbsData';

export function Breadcrumbs() {
  const { pathname } = useLocation();
  const breadcrumbs = getRouteBreadcrumbs(pathname);

  if (breadcrumbs.length <= 1) {
    return null;
  }

  return (
    <nav aria-label="Breadcrumb" className="seo-breadcrumbs">
      <ol role="list" className="seo-breadcrumbs-list">
        {breadcrumbs.map((crumb, idx) => {
          const isLast = idx === breadcrumbs.length - 1;
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

