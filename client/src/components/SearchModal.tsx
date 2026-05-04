import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, ArrowRight, FileText, Shield, BookOpen, Users, GraduationCap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const searchIndex = [
  { title: 'Cybersecurity Strategy & Advisory', path: '/services/cybersecurity-advisory', category: 'Services', icon: Shield },
  { title: 'Penetration Testing', path: '/services/penetration-testing', category: 'Services', icon: Shield },
  { title: 'Incident Response', path: '/services/incident-response', category: 'Services', icon: Shield },
  { title: 'Compliance & GRC', path: '/services/compliance-grc', category: 'Services', icon: Shield },
  { title: 'Network Security', path: '/services/network-security', category: 'Services', icon: Shield },
  { title: 'Security Staffing', path: '/services/cybersecurity-staffing', category: 'Services', icon: Users },
  { title: 'Managed Security (SOC)', path: '/services/managed-security', category: 'Services', icon: Shield },
  { title: 'Training Academy', path: '/training', category: 'Training', icon: GraduationCap },
  { title: 'Cybersecurity Certification Prep', path: '/training', category: 'Training', icon: GraduationCap },
  { title: 'GRC Training Program', path: '/training', category: 'Training', icon: GraduationCap },
  { title: 'Zero Trust Architecture', path: '/blog/zero-trust-architecture-2025', category: 'Blog', icon: BookOpen },
  { title: 'Incident Response Playbooks', path: '/blog/incident-response-playbook', category: 'Blog', icon: BookOpen },
  { title: 'Cloud Security Best Practices', path: '/blog/cloud-security-best-practices', category: 'Blog', icon: BookOpen },
  { title: 'GRC Automation', path: '/blog/grc-automation-guide', category: 'Blog', icon: BookOpen },
  { title: 'Pricing Plans', path: '/pricing', category: 'Pages', icon: FileText },
  { title: 'About Us', path: '/about', category: 'Pages', icon: FileText },
  { title: 'Careers', path: '/careers', category: 'Pages', icon: FileText },
  { title: 'Contact Us', path: '/contact', category: 'Pages', icon: FileText },
  { title: 'Trust Center', path: '/trust-center', category: 'Pages', icon: FileText },
  { title: 'Partners & Clients', path: '/partners', category: 'Pages', icon: FileText },
  { title: 'Privacy Policy', path: '/privacy', category: 'Pages', icon: FileText },
  { title: 'Client Portal', path: '/portal/login', category: 'Portal', icon: Shield },
  { title: 'Compliance Board OS', path: '/portal/compliance', category: 'Portal', icon: Shield },
  { title: 'Risk Register', path: '/portal/risks', category: 'Portal', icon: Shield },
  { title: 'Cyber Health Check', path: '/#health-check', category: 'Tools', icon: Shield },
  { title: 'Risk Score Calculator', path: '/#risk-calculator', category: 'Tools', icon: Shield },
];

export default function SearchModal() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const results = query.length > 1
    ? searchIndex.filter(item =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.category.toLowerCase().includes(query.toLowerCase())
      ).slice(0, 8)
    : [];

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setOpen(true);
      }
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      setQuery('');
    }
  }, [open]);

  const go = (path: string) => {
    setOpen(false);
    navigate(path);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[99999] flex items-start justify-center pt-[15vh] px-4"
          onClick={() => setOpen(false)}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-xl bg-ctn-bg-elevated border border-ctn-border rounded-2xl shadow-2xl shadow-black/40 overflow-hidden"
          >
            {/* Search Input */}
            <div className="flex items-center gap-3 px-5 py-4 border-b border-ctn-border">
              <Search size={18} className="text-ctn-text-dim flex-shrink-0" />
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search pages, services, blog posts..."
                className="flex-1 bg-transparent border-none outline-none text-ctn-text font-poppins text-sm placeholder:text-ctn-text-dim/50"
              />
              <button onClick={() => setOpen(false)} className="text-ctn-text-dim hover:text-ctn-text bg-transparent border-none cursor-pointer">
                <X size={16} />
              </button>
            </div>

            {/* Results */}
            <div className="max-h-[360px] overflow-y-auto">
              {query.length > 1 && results.length === 0 && (
                <div className="px-5 py-8 text-center">
                  <p className="text-ctn-text-dim text-sm">No results found for "{query}"</p>
                </div>
              )}
              {results.length > 0 && (
                <div className="py-2">
                  {results.map((item) => (
                    <button
                      key={item.path + item.title}
                      onClick={() => go(item.path)}
                      className="w-full flex items-center gap-3 px-5 py-3 hover:bg-ctn-blue/5 transition-colors text-left bg-transparent border-none cursor-pointer"
                    >
                      <item.icon size={16} className="text-ctn-blue flex-shrink-0" />
                      <div className="flex-1 min-w-0">
                        <div className="font-poppins text-sm text-ctn-text-bright truncate">{item.title}</div>
                        <div className="text-[10px] text-ctn-text-dim font-mono">{item.category}</div>
                      </div>
                      <ArrowRight size={12} className="text-ctn-text-dim" />
                    </button>
                  ))}
                </div>
              )}
              {query.length <= 1 && (
                <div className="px-5 py-6 text-center">
                  <p className="text-ctn-text-dim text-xs">Start typing to search across all pages, services, and blog posts</p>
                  <p className="text-ctn-text-dim/50 text-[10px] mt-2 font-mono">Press ESC to close</p>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
