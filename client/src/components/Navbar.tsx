import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, AlertTriangle } from 'lucide-react';

const navLinks = [
  { label: 'Services', href: '/services' },
  { label: 'Training', href: '/training' },
  { label: 'About', href: '/about' },
  { label: 'Trust Center', href: '/trust-center' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      {/* Emergency Breach Bar */}
      <div className="bg-ctn-red/10 border-b border-ctn-red/20 py-2 px-4 text-center relative z-50">
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 text-xs font-poppins font-medium text-ctn-red hover:text-white transition-colors no-underline"
        >
          <AlertTriangle size={13} />
          Experienced a breach? Get immediate incident response support →
        </Link>
      </div>

      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
        className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-ctn-bg/95 backdrop-blur-lg border-b border-ctn-border shadow-lg shadow-black/20'
            : 'bg-ctn-bg/80 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-[72px]">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 no-underline">
            <img src="/ctn-logo.png" alt="CyberTech Nexus" className="w-10 h-10 rounded-lg object-cover" />
            <div className="flex flex-col">
              <span className="font-poppins font-bold text-base tracking-wide text-ctn-text-bright leading-tight">
                CyberTech Nexus
              </span>
              <span className="font-poppins text-[9px] text-ctn-blue tracking-[0.2em] uppercase leading-tight">
                Cybersecurity Solutions
              </span>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className={`font-poppins text-[13px] font-medium transition-colors no-underline ${
                  location.pathname.startsWith(link.href)
                    ? 'text-ctn-blue'
                    : 'text-ctn-text-dim hover:text-ctn-blue'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Link to="/#health-check" className="btn btn-secondary text-xs py-2.5 px-5 no-underline">
              Free Health Check
            </Link>
            <Link to="/portal/login" className="btn btn-primary text-xs py-2.5 px-5 no-underline">
              Client Portal
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden text-ctn-text bg-transparent border-none cursor-pointer"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:hidden bg-ctn-bg/98 backdrop-blur-lg border-b border-ctn-border px-6 pb-6"
          >
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                onClick={() => setMobileOpen(false)}
                className={`block py-3 font-poppins text-sm font-medium transition-colors no-underline ${
                  location.pathname.startsWith(link.href)
                    ? 'text-ctn-blue'
                    : 'text-ctn-text-dim hover:text-ctn-blue'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex flex-col gap-3 mt-4">
              <Link to="/#health-check" onClick={() => setMobileOpen(false)} className="btn btn-secondary text-xs py-2.5 no-underline text-center">
                Free Health Check
              </Link>
              <Link to="/contact" onClick={() => setMobileOpen(false)} className="btn btn-primary text-xs py-2.5 no-underline text-center">
                Get Protected
              </Link>
            </div>
          </motion.div>
        )}
      </motion.nav>
    </>
  );
}
