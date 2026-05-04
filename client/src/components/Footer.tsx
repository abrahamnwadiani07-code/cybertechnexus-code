import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

const footerLinks = {
  Services: [
    { label: 'Security Advisory', href: '/services/cybersecurity-advisory' },
    { label: 'Penetration Testing', href: '/services/penetration-testing' },
    { label: 'Incident Response', href: '/services/incident-response' },
    { label: 'Compliance & GRC', href: '/services/compliance-grc' },
    { label: 'Network Security', href: '/services/network-security' },
    { label: 'Security Staffing', href: '/services/cybersecurity-staffing' },
  ],
  Company: [
    { label: 'About Us', href: '/about' },
    { label: 'Careers', href: '/careers' },
    { label: 'Partners & Clients', href: '/partners' },
    { label: 'Blog', href: '/blog' },
    { label: 'Trust Center', href: '/trust-center' },
    { label: 'Contact', href: '/contact' },
  ],
  Resources: [
    { label: 'Free Health Check', href: '/#health-check' },
    { label: 'Risk Calculator', href: '/#risk-calculator' },
    { label: 'Training Academy', href: '/training' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Client Portal', href: '/portal/login' },
  ],
};

const socials = [
  { label: 'LinkedIn', href: 'https://linkedin.com/company/cybertechnexus', abbr: 'Li' },
  { label: 'Twitter', href: 'https://twitter.com/cybertechnexus', abbr: 'X' },
  { label: 'GitHub', href: 'https://github.com/cybertechnexus', abbr: 'Gh' },
  { label: 'YouTube', href: 'https://youtube.com/@cybertechnexus', abbr: 'Yt' },
];

export default function Footer() {
  return (
    <footer className="border-t border-ctn-border bg-ctn-bg">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img src="/ctn-logo.png" alt="CyberTech Nexus" className="w-10 h-10 rounded-lg object-cover" />
              <div>
                <div className="font-poppins font-bold text-sm text-ctn-text-bright">CyberTech Nexus</div>
                <div className="font-mono text-[9px] text-ctn-blue tracking-[0.15em]">CYBERSECURITY SOLUTIONS</div>
              </div>
            </div>
            <p className="text-ctn-text-dim text-sm leading-relaxed mb-5 max-w-sm">
              Enterprise-grade cybersecurity solutions, training, and compliance automation protecting 200+ organizations worldwide.
            </p>

            {/* Contact Info */}
            <div className="space-y-2 mb-5">
              <a href="mailto:info@cybertechnexus.com" className="flex items-center gap-2 text-ctn-text-dim text-xs hover:text-ctn-blue transition-colors no-underline">
                <Mail size={12} /> info@cybertechnexus.com
              </a>
              <a href="tel:+14695551234" className="flex items-center gap-2 text-ctn-text-dim text-xs hover:text-ctn-blue transition-colors no-underline">
                <Phone size={12} /> +1 (469) 555-1234
              </a>
              <span className="flex items-center gap-2 text-ctn-text-dim text-xs">
                <MapPin size={12} /> Dallas, TX | Lagos, Nigeria
              </span>
            </div>

            {/* Certifications */}
            <div className="flex flex-wrap gap-2 mb-5">
              {['ISO 27001', 'SOC 2', 'NIST CSF', 'GDPR', 'HIPAA', 'PCI DSS'].map((cert) => (
                <span key={cert} className="font-mono text-[9px] text-ctn-blue tracking-wider bg-ctn-blue/5 border border-ctn-blue/10 px-2 py-0.5 rounded">
                  {cert}
                </span>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-8 h-8 rounded-lg border border-ctn-border flex items-center justify-center text-ctn-text-dim hover:text-ctn-blue hover:border-ctn-blue/30 transition-all no-underline text-[10px] font-mono font-bold"
                >
                  {s.abbr}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-poppins font-semibold text-xs text-ctn-text-bright tracking-wider uppercase mb-4">{title}</h4>
              <ul className="space-y-2.5 list-none p-0 m-0">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="font-poppins text-[13px] text-ctn-text-dim hover:text-ctn-blue transition-colors no-underline inline-flex items-center gap-1"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="border-t border-ctn-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h4 className="font-poppins font-semibold text-sm text-ctn-text-bright mb-1">Stay Protected</h4>
              <p className="text-ctn-text-dim text-xs">Get weekly threat intelligence and security insights delivered to your inbox.</p>
            </div>
            <form className="flex gap-2 w-full md:w-auto" onSubmit={(e) => { e.preventDefault(); }}>
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 md:w-64 px-4 py-2.5 rounded-lg bg-ctn-bg-elevated border border-ctn-border text-ctn-text text-xs font-poppins placeholder:text-ctn-text-dim/50 focus:outline-none focus:border-ctn-blue/50 transition-colors"
              />
              <button
                type="submit"
                className="px-5 py-2.5 bg-ctn-blue text-white text-xs font-medium rounded-lg hover:bg-ctn-blue/90 transition-colors cursor-pointer border-none whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-ctn-border mt-8 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-poppins text-xs text-ctn-text-dim">
            &copy; {new Date().getFullYear()} CyberTech Nexus. All rights reserved.
          </div>
          <div className="flex items-center gap-6 font-poppins text-xs text-ctn-text-dim">
            <Link to="/privacy" className="hover:text-ctn-blue transition-colors no-underline text-ctn-text-dim">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-ctn-blue transition-colors no-underline text-ctn-text-dim">Terms of Service</Link>
            <Link to="/trust-center" className="hover:text-ctn-blue transition-colors no-underline text-ctn-text-dim">Security</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
