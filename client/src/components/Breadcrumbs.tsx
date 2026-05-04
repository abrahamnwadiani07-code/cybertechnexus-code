import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

const routeNames: Record<string, string> = {
  services: 'Services',
  training: 'Training',
  about: 'About',
  contact: 'Contact',
  blog: 'Blog',
  careers: 'Careers',
  pricing: 'Pricing',
  partners: 'Partners & Clients',
  privacy: 'Privacy Policy',
  terms: 'Terms of Service',
  'trust-center': 'Trust Center',
};

export default function Breadcrumbs() {
  const location = useLocation();
  const paths = location.pathname.split('/').filter(Boolean);

  if (paths.length === 0) return null;

  return (
    <nav aria-label="Breadcrumb" className="max-w-7xl mx-auto px-6 lg:px-12 py-4">
      <ol className="flex items-center gap-2 list-none m-0 p-0">
        <li>
          <Link to="/" className="text-ctn-text-dim hover:text-ctn-blue transition-colors no-underline" aria-label="Home">
            <Home size={14} />
          </Link>
        </li>
        {paths.map((segment, i) => {
          const path = '/' + paths.slice(0, i + 1).join('/');
          const isLast = i === paths.length - 1;
          const name = routeNames[segment] || segment.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());

          return (
            <li key={path} className="flex items-center gap-2">
              <ChevronRight size={12} className="text-ctn-text-dim/40" />
              {isLast ? (
                <span className="font-poppins text-xs text-ctn-text font-medium">{name}</span>
              ) : (
                <Link to={path} className="font-poppins text-xs text-ctn-text-dim hover:text-ctn-blue transition-colors no-underline">
                  {name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
