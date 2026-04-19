import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Shield, Search, AlertTriangle, Lock, Server, FileCheck, Users, GraduationCap, ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const services = [
  {
    slug: 'cybersecurity-advisory',
    icon: Shield,
    title: 'Cybersecurity Strategy & Advisory',
    tag: 'ADVISORY',
    short: 'Comprehensive security assessments, roadmaps, and advisory services aligned with your business objectives.',
    description: 'Our advisory team partners with your leadership to evaluate your current security posture, identify gaps, and build a strategic roadmap. We assess threats specific to your industry, evaluate your technology stack, and deliver a prioritized plan that balances risk reduction with business enablement.',
    deliverables: ['Security maturity assessment', 'Risk register & heat map', 'Strategic security roadmap', 'Board-ready reporting', 'Quarterly advisory reviews'],
    color: '#1a6bff',
  },
  {
    slug: 'penetration-testing',
    icon: Search,
    title: 'Penetration Testing & Vulnerability Assessment',
    tag: 'OFFENSIVE',
    short: 'Red-team assessments simulating real-world attacks to find vulnerabilities before adversaries do.',
    description: 'Our certified ethical hackers simulate real-world attack scenarios across your web applications, APIs, network infrastructure, cloud environments, and even your people (social engineering). Every engagement produces a detailed report with severity-rated findings and clear remediation steps.',
    deliverables: ['Web application pen testing', 'Network & infrastructure testing', 'API security assessment', 'Cloud configuration review', 'Social engineering campaigns', 'Remediation validation re-test'],
    color: '#ff3b5c',
  },
  {
    slug: 'incident-response',
    icon: AlertTriangle,
    title: 'Incident Response & Recovery',
    tag: 'RAPID',
    short: 'Rapid containment, eradication, and recovery with sub-8-minute response for critical incidents.',
    description: 'When a breach occurs, every second matters. Our IR team provides rapid containment, forensic investigation, eradication, and recovery services. We develop and test incident response playbooks tailored to your infrastructure so your team is prepared before an incident happens.',
    deliverables: ['IR retainer & rapid response', 'Incident playbook development', 'Tabletop exercises & drills', 'Digital forensics & investigation', 'Post-incident review & reporting', 'Business continuity planning'],
    color: '#ffb039',
  },
  {
    slug: 'it-consultancy',
    icon: Lock,
    title: 'IT & Cybersecurity Consultancy',
    tag: 'STRATEGY',
    short: 'Expert guidance to assess, design, and implement security strategies for your organization.',
    description: 'Our consultants embed with your team to solve complex security challenges. Whether you\'re architecting a zero-trust framework, migrating to the cloud securely, or building out your security team, we bring deep expertise and hands-on execution.',
    deliverables: ['Zero-trust architecture design', 'Cloud security strategy', 'Security tooling selection', 'Security program buildout', 'vCISO services', 'Technology stack evaluation'],
    color: '#1a6bff',
  },
  {
    slug: 'compliance-regulatory',
    icon: FileCheck,
    title: 'Compliance & Regulatory Services',
    tag: 'GRC',
    short: 'Governance, risk, and compliance expertise across ISO 27001, NIST, GDPR, HIPAA, PCI DSS, DORA, and more.',
    description: 'Navigating the compliance landscape is complex. Our GRC team guides you through gap analysis, control implementation, policy development, evidence collection, and audit preparation. With Compliance Board OS, we automate ongoing compliance monitoring so you stay audit-ready continuously.',
    deliverables: ['ISO 27001 certification', 'NIST CSF / RMF implementation', 'GDPR & EU-NIS2 readiness', 'HIPAA compliance program', 'PCI DSS assessment', 'DORA compliance', 'Policy & procedure development', 'Audit preparation & support'],
    color: '#a855f7',
  },
  {
    slug: 'network-security',
    icon: Server,
    title: 'Network Security',
    tag: 'INFRA',
    short: 'Firewalls, intrusion prevention, secure access controls, and resilient network architecture.',
    description: 'We design, implement, and manage network security infrastructure that withstands modern threats. From next-gen firewalls and intrusion prevention to network segmentation and secure remote access, we ensure your network is hardened at every layer.',
    deliverables: ['Network architecture review', 'Firewall configuration & management', 'Intrusion detection & prevention', 'Network segmentation', 'VPN & secure remote access', 'Wireless security assessment'],
    color: '#1a6bff',
  },
  {
    slug: 'staffing-solutions',
    icon: Users,
    title: 'Staffing Solutions',
    tag: 'TALENT',
    short: 'Connecting your business with vetted, skilled IT and cybersecurity professionals.',
    description: 'Finding qualified cybersecurity talent is one of the biggest challenges organizations face. We source, vet, and place skilled professionals for contract, permanent, or project-based roles — from security analysts and GRC specialists to CISOs and security architects.',
    deliverables: ['Contract & permanent placement', 'Security analyst staffing', 'GRC specialist recruitment', 'vCISO & leadership placement', 'Project-based security teams', 'Skill assessment & vetting'],
    color: '#1a6bff',
  },
  {
    slug: 'security-training',
    icon: GraduationCap,
    title: 'Security Awareness Training',
    tag: 'EDUCATION',
    short: 'Expert-led cybersecurity training, workshops, and certification programs.',
    description: 'Our Cyber Protection Academy delivers hands-on training programs that build security-first culture. From phishing simulations and awareness campaigns to advanced certification prep, we equip your team with the knowledge to be your strongest line of defense.',
    deliverables: ['Phishing simulation campaigns', 'Security awareness workshops', 'Role-based training programs', 'Certification prep (CEH, CISSP, etc.)', 'Executive security briefings', 'Compliance-specific training'],
    color: '#ffb039',
  },
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <div className="relative overflow-hidden">
        {/* Hero */}
        <div className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center opacity-[0.06]" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920&q=80)' }} />
          <div className="absolute inset-0 bg-gradient-to-b from-ctn-bg via-ctn-bg/90 to-ctn-bg" />
          <div className="relative px-6 lg:px-12 max-w-7xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <span className="inline-block font-mono text-[11px] tracking-[0.25em] text-ctn-blue uppercase mb-3 px-3 py-1 border border-ctn-blue/20 rounded-full">Our Services</span>
              <h1 className="font-poppins font-bold text-4xl md:text-5xl text-ctn-text-bright mt-4 mb-4">
                End-to-End <span className="text-ctn-blue text-glow-blue">Cybersecurity</span> & GRC
              </h1>
              <p className="text-ctn-text-dim max-w-2xl mx-auto text-lg">From strategy to implementation, we cover every aspect of your security and compliance needs.</p>
            </motion.div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="px-6 lg:px-12 max-w-7xl mx-auto pb-24">
          <div className="space-y-6">
            {services.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div key={s.slug} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: i * 0.05 }}>
                  <Link to={`/services/${s.slug}`} className="block cyber-card p-8 no-underline group">
                    <div className="grid lg:grid-cols-[1fr_2fr_1fr] gap-6 items-start">
                      {/* Left */}
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg border flex items-center justify-center flex-shrink-0" style={{ borderColor: s.color + '30', color: s.color, background: s.color + '08' }}>
                          <Icon size={22} />
                        </div>
                        <div>
                          <span className="font-mono text-[9px] tracking-[0.15em] px-2 py-0.5 rounded border" style={{ borderColor: s.color + '30', color: s.color }}>{s.tag}</span>
                          <h3 className="font-poppins font-semibold text-lg text-ctn-text-bright mt-2 group-hover:text-ctn-blue transition-colors leading-snug">{s.title}</h3>
                        </div>
                      </div>
                      {/* Middle */}
                      <p className="text-ctn-text-dim text-sm leading-relaxed">{s.short}</p>
                      {/* Right */}
                      <div className="flex items-center justify-end">
                        <span className="font-poppins text-sm text-ctn-blue flex items-center gap-2 group-hover:gap-3 transition-all">
                          Learn more <ArrowRight size={16} />
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export { services };
