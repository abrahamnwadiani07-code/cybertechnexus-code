import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Shield, Lock, Eye, FileCheck, Server, Globe, CheckCircle, AlertTriangle,
  Download, ExternalLink, Clock, RefreshCw, Users, Key, Database, Wifi,
  Monitor, HardDrive, Mail, ChevronDown, Activity
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

/* ── Live Status ── */
const systems = [
  { name: 'Compliance Board OS', status: 'operational', uptime: '99.99%' },
  { name: 'Client Portal', status: 'operational', uptime: '99.98%' },
  { name: 'API Services', status: 'operational', uptime: '99.97%' },
  { name: 'Evidence Collection Engine', status: 'operational', uptime: '99.99%' },
  { name: 'Monitoring & Alerting', status: 'operational', uptime: '100%' },
  { name: 'Backup & Recovery', status: 'operational', uptime: '99.99%' },
];

/* ── Certifications ── */
const certifications = [
  {
    icon: Shield, name: 'ISO 27001', status: 'Certified',
    description: 'Information security management system certified by an accredited body. Covers all CTN operations, infrastructure, and client data handling.',
    lastAudit: 'January 2026', nextAudit: 'January 2027',
  },
  {
    icon: FileCheck, name: 'GDPR Compliant', status: 'Compliant',
    description: 'Full compliance with the EU General Data Protection Regulation including data processing agreements, privacy impact assessments, and data subject rights.',
    lastAudit: 'March 2026', nextAudit: 'March 2027',
  },
  {
    icon: Lock, name: 'HIPAA Compliant', status: 'Compliant',
    description: 'Technical, administrative, and physical safeguards for protected health information. BAAs available for healthcare clients.',
    lastAudit: 'February 2026', nextAudit: 'February 2027',
  },
{
    icon: Globe, name: 'Cyber Essentials Plus', status: 'Certified',
    description: 'UK government-backed certification demonstrating protection against the most common cyber threats.',
    lastAudit: 'November 2025', nextAudit: 'November 2026',
  },
  {
    icon: FileCheck, name: 'NIST CSF Aligned', status: 'Aligned',
    description: 'Security program fully aligned with NIST Cybersecurity Framework covering Identify, Protect, Detect, Respond, and Recover functions.',
    lastAudit: 'Ongoing', nextAudit: 'Continuous',
  },
];

/* ── Security Practices ── */
const practices = [
  {
    category: 'Data Protection',
    icon: Database,
    items: [
      { title: 'Encryption at Rest', detail: 'AES-256 encryption for all stored data across databases, backups, and file storage.' },
      { title: 'Encryption in Transit', detail: 'TLS 1.3 enforced for all data transmission. HSTS enabled with minimum 1-year max-age.' },
      { title: 'Data Classification', detail: 'Four-tier classification system (Public, Internal, Confidential, Restricted) with handling procedures for each.' },
      { title: 'Data Retention & Deletion', detail: 'Defined retention policies per data type. Secure deletion with cryptographic erasure.' },
    ],
  },
  {
    category: 'Access Control',
    icon: Key,
    items: [
      { title: 'Multi-Factor Authentication', detail: 'MFA enforced for all users, all systems, no exceptions. Hardware keys supported.' },
      { title: 'Role-Based Access Control', detail: 'Least-privilege RBAC with quarterly access reviews and automated deprovisioning.' },
      { title: 'Single Sign-On', detail: 'SSO via SAML 2.0 / OIDC for all internal and client-facing applications.' },
      { title: 'Privileged Access Management', detail: 'Just-in-time elevation, session recording, and automatic revocation for admin access.' },
    ],
  },
  {
    category: 'Infrastructure Security',
    icon: Server,
    items: [
      { title: 'Cloud Hosting', detail: 'Hosted on AWS with multi-region redundancy. SOC 2 Type II certified infrastructure.' },
      { title: 'Network Segmentation', detail: 'Micro-segmented VPCs with zero-trust network policies. No flat network access.' },
      { title: 'Vulnerability Management', detail: 'Continuous scanning with remediation SLAs: Critical < 24hrs, High < 72hrs, Medium < 30 days.' },
      { title: 'Penetration Testing', detail: 'Annual third-party pen tests plus continuous internal red team exercises.' },
    ],
  },
  {
    category: 'Incident Response',
    icon: AlertTriangle,
    items: [
      { title: 'IR Team & SLAs', detail: 'Dedicated incident response team with < 15 minute acknowledgment and < 1 hour initial response SLAs.' },
      { title: 'Breach Notification', detail: 'Client notification within 72 hours of confirmed breach per GDPR and contractual obligations.' },
      { title: 'Post-Incident Reviews', detail: 'Blameless retrospectives with root cause analysis and published remediation timelines.' },
      { title: 'Business Continuity', detail: 'Tested BCP/DR plans with RPO < 1 hour and RTO < 4 hours for critical systems.' },
    ],
  },
  {
    category: 'Employee Security',
    icon: Users,
    items: [
      { title: 'Background Checks', detail: 'Criminal, education, and employment verification for all employees before onboarding.' },
      { title: 'Security Training', detail: 'Mandatory quarterly security awareness training with phishing simulations.' },
      { title: 'Acceptable Use Policies', detail: 'Comprehensive policies covering device usage, data handling, and remote work security.' },
      { title: 'Offboarding', detail: 'Automated access revocation within 1 hour of termination across all systems.' },
    ],
  },
  {
    category: 'Monitoring & Logging',
    icon: Monitor,
    items: [
      { title: 'Centralized Logging', detail: 'All system, application, and access logs centralized with 12-month retention.' },
      { title: 'Real-Time Monitoring', detail: '24/7 infrastructure monitoring with automated alerting and anomaly detection.' },
      { title: 'Audit Trails', detail: 'Immutable audit trails for all user actions, configuration changes, and data access.' },
      { title: 'Threat Detection', detail: 'SIEM with behavioral analytics, threat intelligence feeds, and automated response playbooks.' },
    ],
  },
];

/* ── Documents ── */
const documents = [
  { name: 'Security Whitepaper', type: 'PDF', description: 'Comprehensive overview of CTN security architecture and practices.' },
  { name: 'Data Processing Agreement', type: 'PDF', description: 'Standard DPA template for GDPR compliance.' },
  { name: 'Penetration Test Summary', type: 'PDF', description: 'Executive summary of latest third-party penetration test (redacted).' },
  { name: 'Business Continuity Plan Summary', type: 'PDF', description: 'Overview of BCP/DR capabilities and recovery objectives.' },
  { name: 'Subprocessor List', type: 'PDF', description: 'Current list of third-party subprocessors and their purposes.' },
  { name: 'Vulnerability Disclosure Policy', type: 'PDF', description: 'How to responsibly report security vulnerabilities to CTN.' },
];

/* ── FAQ Accordion ── */
function AccordionItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-ctn-border">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between py-4 text-left bg-transparent border-none cursor-pointer group">
        <span className="font-poppins font-medium text-sm text-ctn-text-bright group-hover:text-ctn-blue transition-colors pr-4">{q}</span>
        <ChevronDown size={16} className={`text-ctn-text-dim flex-shrink-0 transition-transform duration-300 ${open ? 'rotate-180 text-ctn-blue' : ''}`} />
      </button>
      {open && <p className="font-poppins text-sm text-ctn-text-dim leading-relaxed pb-4">{a}</p>}
    </div>
  );
}

const trustFaqs = [
  { q: 'Can I get a copy of your ISO 27001 certificate?', a: 'Yes. Contact your account manager or email trust@cybertechnexus.com and we will share our current certificate.' },
  { q: 'Do you sign BAAs for HIPAA?', a: 'Yes, we execute Business Associate Agreements for all clients handling protected health information.' },
  { q: 'How do you handle data residency requirements?', a: 'We support data residency in US, EU, and UK regions. Data location is configurable per client and documented in your DPA.' },
  { q: 'What happens if you experience a security incident?', a: 'Our IR team responds within 15 minutes. Affected clients are notified within 72 hours with full details, impact assessment, and remediation steps.' },
  { q: 'Do you allow customer security assessments?', a: 'Yes. We support customer-initiated questionnaires (SIG, CAIQ, custom), virtual assessments, and can arrange facility tours upon request.' },
  { q: 'How often are penetration tests conducted?', a: 'Annually by an independent third party, plus continuous internal red team exercises. Executive summaries are available upon request under NDA.' },
];

export default function TrustCenterPage() {
  return (
    <>
      <Navbar />
      <div className="relative overflow-hidden">
        {/* Hero */}
        <div className="relative py-20">
          <div className="absolute inset-0 bg-cover bg-center opacity-[0.04]" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1563986768609-322da13575f2?w=1920&q=80)' }} />
          <div className="absolute inset-0 bg-gradient-to-b from-ctn-bg via-ctn-bg/90 to-ctn-bg" />
          <div className="relative px-6 lg:px-12 max-w-5xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <Shield size={40} className="text-ctn-blue mx-auto mb-4" />
              <span className="inline-block font-mono text-[11px] tracking-[0.25em] text-ctn-blue uppercase mb-3 px-3 py-1 border border-ctn-blue/20 rounded-full">
                Security Trust Center
              </span>
              <h1 className="font-poppins font-bold text-4xl md:text-5xl text-ctn-text-bright mt-4 mb-4">
                Transparency Builds <span className="text-ctn-blue text-glow-blue">Trust</span>
              </h1>
              <p className="text-ctn-text-dim max-w-2xl mx-auto text-lg">
                Security is at the core of everything we do. This page provides full transparency into our certifications, security practices, and compliance posture.
              </p>
            </motion.div>
          </div>
        </div>

        <div className="px-6 lg:px-12 max-w-6xl mx-auto pb-24">

          {/* ── Live System Status ── */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="mb-16">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-poppins font-bold text-2xl text-ctn-text-bright flex items-center gap-3">
                <Activity size={22} className="text-ctn-blue" /> System Status
              </h2>
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse" />
                <span className="font-mono text-xs text-green-400">All Systems Operational</span>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {systems.map((sys) => (
                <div key={sys.name} className="cyber-card p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    <span className="font-poppins text-sm text-ctn-text">{sys.name}</span>
                  </div>
                  <span className="font-mono text-[10px] text-green-400">{sys.uptime}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── Certifications & Compliance ── */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
            <h2 className="font-poppins font-bold text-2xl text-ctn-text-bright mb-6 flex items-center gap-3">
              <FileCheck size={22} className="text-ctn-blue" /> Certifications & Compliance
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {certifications.map((cert) => {
                const Icon = cert.icon;
                return (
                  <div key={cert.name} className="cyber-card p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-ctn-blue/10 border border-ctn-blue/20 flex items-center justify-center">
                          <Icon size={18} className="text-ctn-blue" />
                        </div>
                        <div>
                          <div className="font-poppins font-semibold text-sm text-ctn-text-bright">{cert.name}</div>
                          <div className="font-mono text-[9px] text-green-400 tracking-wider">{cert.status.toUpperCase()}</div>
                        </div>
                      </div>
                      <CheckCircle size={18} className="text-green-500" />
                    </div>
                    <p className="text-ctn-text-dim text-xs leading-relaxed mb-3">{cert.description}</p>
                    <div className="flex justify-between font-mono text-[9px] text-ctn-text-dim">
                      <span>Last: {cert.lastAudit}</span>
                      <span>Next: {cert.nextAudit}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* ── Security Practices ── */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
            <h2 className="font-poppins font-bold text-2xl text-ctn-text-bright mb-6 flex items-center gap-3">
              <Lock size={22} className="text-ctn-blue" /> Security Practices
            </h2>
            <div className="space-y-6">
              {practices.map((section) => {
                const Icon = section.icon;
                return (
                  <div key={section.category} className="cyber-card p-6">
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-9 h-9 rounded-lg bg-ctn-blue/10 border border-ctn-blue/20 flex items-center justify-center">
                        <Icon size={16} className="text-ctn-blue" />
                      </div>
                      <h3 className="font-poppins font-semibold text-base text-ctn-text-bright">{section.category}</h3>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {section.items.map((item) => (
                        <div key={item.title} className="p-4 bg-ctn-bg/50 rounded-lg border border-ctn-border">
                          <div className="flex items-start gap-2 mb-1.5">
                            <CheckCircle size={14} className="text-ctn-blue flex-shrink-0 mt-0.5" />
                            <span className="font-poppins font-semibold text-sm text-ctn-text-bright">{item.title}</span>
                          </div>
                          <p className="font-poppins text-xs text-ctn-text-dim leading-relaxed pl-6">{item.detail}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* ── Documents ── */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
            <h2 className="font-poppins font-bold text-2xl text-ctn-text-bright mb-6 flex items-center gap-3">
              <Download size={22} className="text-ctn-blue" /> Security Documents
            </h2>
            <p className="text-ctn-text-dim text-sm mb-6">Request access to these documents by contacting <span className="text-ctn-blue">trust@cybertechnexus.com</span> or through your account manager.</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {documents.map((doc) => (
                <div key={doc.name} className="cyber-card p-5 group cursor-pointer">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <FileCheck size={16} className="text-ctn-blue" />
                      <span className="font-poppins font-semibold text-sm text-ctn-text-bright group-hover:text-ctn-blue transition-colors">{doc.name}</span>
                    </div>
                    <span className="font-mono text-[9px] text-ctn-text-dim border border-ctn-border px-1.5 py-0.5 rounded">{doc.type}</span>
                  </div>
                  <p className="font-poppins text-xs text-ctn-text-dim leading-relaxed">{doc.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── Trust FAQ ── */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
            <h2 className="font-poppins font-bold text-2xl text-ctn-text-bright mb-6 flex items-center gap-3">
              <Eye size={22} className="text-ctn-blue" /> Security FAQ
            </h2>
            <div className="cyber-card px-8">
              {trustFaqs.map((faq) => <AccordionItem key={faq.q} {...faq} />)}
            </div>
          </motion.div>

          {/* ── CTA ── */}
          <div className="cyber-card p-10 text-center box-glow-blue">
            <Shield size={32} className="text-ctn-blue mx-auto mb-4" />
            <h3 className="font-poppins font-bold text-xl text-ctn-text-bright mb-3">Need more information?</h3>
            <p className="text-ctn-text-dim text-sm mb-6 max-w-lg mx-auto">
              Our security team is happy to answer questions, share documentation, or walk through our security program in detail.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="mailto:trust@cybertechnexus.com" className="btn btn-primary text-sm py-3 px-8 no-underline">
                <Mail size={14} /> Contact Security Team
              </a>
              <Link to="/contact" className="btn btn-secondary text-sm py-3 px-8 no-underline">
                Request Assessment
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
