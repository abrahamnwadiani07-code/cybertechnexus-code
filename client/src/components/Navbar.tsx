import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, AlertTriangle, ChevronDown, Shield, Search, Lock, Server, FileCheck, Users, GraduationCap, AlertCircle } from 'lucide-react';

const services = [
  { slug: 'cybersecurity-advisory', icon: Shield, title: 'Strategy & Advisory', desc: 'Security assessments & roadmaps' },
  { slug: 'penetration-testing', icon: Search, title: 'Penetration Testing', desc: 'Red-team attack simulations' },
  { slug: 'incident-response', icon: AlertCircle, title: 'Incident Response', desc: '24/7 breach containment' },
  { slug: 'compliance-grc', icon: FileCheck, title: 'Compliance & GRC', desc: 'ISO 27001, SOC 2, GDPR' },
  { slug: 'network-security', icon: Server, title: 'Network Security', desc: 'Infrastructure protection' },
  { slug: 'cybersecurity-staffing', icon: Users, title: 'Security Staffing', desc: 'Expert team augmentation' },
  { slug: 'cybersecurity-training', icon: GraduationCap, title: 'Training Academy', desc: 'Certifications & skills' },
  { slug: 'managed-security', icon: Lock, title: 'Managed Security', desc: '24/7 SOC monitoring' },
];

const navLinks = [
  { label: 'Services', href: '/services', hasMega: true },
  { label: 'Pricing', href: '/pricing', hasMega: false },
  { label: 'Training', href: '/training', hasMega: false },
  { label: 'About', href: '/about', hasMega: false },
  { label: 'Trust Center', href: '/trust-center', hasMega: false },
  { label: 'Blog', href: '/blog', hasMega: false },
  { label: 'Contact', href: '/contact', hasMega: false },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const location = useLocation();
  const megaRef = useRef<HTMLDivElement>(null);
  const megaTimeout = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    setMobileOpen(false);
    setMegaOpen(false);
  }, [location.pathname]);

  const handleMegaEnter = () => {
    clearTimeout(megaTimeout.current);
    setMegaOpen(true);
  };

  const handleMegaLeave = () => {
    megaTimeout.current = setTimeout(() => setMegaOpen(false), 200);
  };

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
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={link.hasMega ? handleMegaEnter : undefined}
                onMouseLeave={link.hasMega ? handleMegaLeave : undefined}
              >
                <Link
                  to={link.href}
                  className={`font-poppins text-[13px] font-medium transition-colors no-underline inline-flex items-center gap-1 ${
                    location.pathname.startsWith(link.href)
                      ? 'text-ctn-blue'
                      : 'text-ctn-text-dim hover:text-ctn-blue'
                  }`}
                >
                  {link.label}
                  {link.hasMega && <ChevronDown size={12} className={`transition-transform ${megaOpen ? 'rotate-180' : ''}`} />}
                </Link>
              </div>
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

        {/* Mega Menu */}
        <AnimatePresence>
          {megaOpen && (
            <motion.div
              ref={megaRef}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              onMouseEnter={handleMegaEnter}
              onMouseLeave={handleMegaLeave}
              className="hidden lg:block absolute top-full left-0 right-0 bg-ctn-bg/98 backdrop-blur-xl border-b border-ctn-border shadow-2xl shadow-black/30"
            >
              <div className="max-w-7xl mx-auto px-6 lg:px-12 py-8">
                <div className="grid grid-cols-4 gap-4">
                  {services.map((s) => (
                    <Link
                      key={s.slug}
                      to={`/services/${s.slug}`}
                      className="flex items-start gap-3 p-4 rounded-xl hover:bg-ctn-blue/5 border border-transparent hover:border-ctn-blue/10 transition-all no-underline group"
                    >
                      <s.icon size={20} className="text-ctn-blue mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-poppins font-semibold text-sm text-ctn-text-bright group-hover:text-ctn-blue transition-colors">{s.title}</div>
                        <div className="text-xs text-ctn-text-dim mt-0.5">{s.desc}</div>
                      </div>
                    </Link>
                  ))}
                </div>
                <div className="mt-6 pt-4 border-t border-ctn-border flex items-center justify-between">
                  <span className="text-xs text-ctn-text-dim">Need help choosing? Our team will recommend the right services for your organization.</span>
                  <Link to="/contact" className="text-xs font-medium text-ctn-blue hover:text-white transition-colors no-underline">
                    Talk to an Expert →
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
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
                <Link to="/portal/login" onClick={() => setMobileOpen(false)} className="btn btn-primary text-xs py-2.5 no-underline text-center">
                  Client Portal
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
