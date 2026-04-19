import { Link } from 'react-router-dom';

const footerLinks = {
  Services: ['Security Monitoring', 'Penetration Testing', 'Incident Response', 'Compliance', 'Network Security'],
  Company: ['About Us', 'Blog', 'Training', 'Careers', 'Contact'],
  Resources: ['Health Check', 'Case Studies', 'Whitepapers', 'Webinars'],
};

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
            <p className="text-ctn-text-dim text-sm leading-relaxed mb-6 max-w-sm">
              Cutting-edge cybersecurity solutions, training, and consulting services to protect
              businesses and individuals from evolving cyber threats.
            </p>
            <div className="flex flex-wrap gap-2">
              {['ISO 27001', 'NIST CSF', 'GDPR', 'HIPAA', 'PCI DSS', 'DORA'].map((cert) => (
                <span key={cert} className="font-mono text-[9px] text-ctn-blue tracking-wider bg-ctn-blue/5 border border-ctn-blue/10 px-2 py-0.5 rounded">
                  {cert}
                </span>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-poppins font-semibold text-xs text-ctn-text-bright tracking-wider uppercase mb-4">{title}</h4>
              <ul className="space-y-2.5 list-none p-0 m-0">
                {links.map((link) => (
                  <li key={link}>
                    <span className="font-poppins text-[13px] text-ctn-text-dim hover:text-ctn-blue transition-colors cursor-pointer">
                      {link}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-ctn-border mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-poppins text-xs text-ctn-text-dim">
            &copy; {new Date().getFullYear()} CyberTech Nexus. All rights reserved.
          </div>
          <div className="flex items-center gap-6 font-poppins text-xs text-ctn-text-dim">
            <span className="hover:text-ctn-blue transition-colors cursor-pointer">Privacy Policy</span>
            <span className="hover:text-ctn-blue transition-colors cursor-pointer">Terms of Service</span>
            <span className="hover:text-ctn-blue transition-colors cursor-pointer">Cookie Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
