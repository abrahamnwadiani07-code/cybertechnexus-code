import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, CheckCircle, Shield, Search, AlertTriangle, Lock, Server, FileCheck, Users, GraduationCap } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const iconMap: Record<string, any> = { Shield, Search, AlertTriangle, Lock, Server, FileCheck, Users, GraduationCap };

const services: Record<string, {
  icon: string; title: string; tag: string; color: string; description: string; deliverables: string[];
  approach: string[]; whyUs: string[];
}> = {
  'cybersecurity-advisory': {
    icon: 'Shield', title: 'Cybersecurity Strategy & Advisory', tag: 'ADVISORY', color: '#1a6bff',
    description: 'Our advisory team partners with your leadership to evaluate your current security posture, identify gaps, and build a strategic roadmap. We assess threats specific to your industry, evaluate your technology stack, and deliver a prioritized plan that balances risk reduction with business enablement.',
    deliverables: ['Security maturity assessment', 'Risk register & heat map', 'Strategic security roadmap', 'Board-ready reporting', 'Quarterly advisory reviews', 'Threat landscape analysis'],
    approach: ['Discovery & stakeholder interviews', 'Current-state assessment against industry frameworks', 'Gap analysis & risk prioritization', 'Roadmap development with quick wins and long-term goals', 'Executive presentation & alignment', 'Ongoing quarterly reviews'],
    whyUs: ['10+ years average team experience', 'Industry-specific threat expertise', 'Actionable roadmaps, not just reports', 'Ongoing advisory relationship'],
  },
  'penetration-testing': {
    icon: 'Search', title: 'Penetration Testing & Vulnerability Assessment', tag: 'OFFENSIVE', color: '#ff3b5c',
    description: 'Our certified ethical hackers simulate real-world attack scenarios across your web applications, APIs, network infrastructure, cloud environments, and even your people. Every engagement produces a detailed report with severity-rated findings and clear remediation steps.',
    deliverables: ['Web application pen testing', 'Network & infrastructure testing', 'API security assessment', 'Cloud configuration review', 'Social engineering campaigns', 'Remediation validation re-test'],
    approach: ['Scope definition & rules of engagement', 'Reconnaissance & threat modeling', 'Active exploitation & privilege escalation', 'Lateral movement & data access testing', 'Detailed finding documentation with PoCs', 'Remediation guidance & re-test'],
    whyUs: ['OSCP, CEH certified testers', 'Real-world attack simulation, not just automated scans', 'Clear remediation guidance included', 'Free re-test after remediation'],
  },
  'incident-response': {
    icon: 'AlertTriangle', title: 'Incident Response & Recovery', tag: 'RAPID', color: '#ffb039',
    description: 'When a breach occurs, every second matters. Our IR team provides rapid containment, forensic investigation, eradication, and recovery. We develop and test incident response playbooks tailored to your infrastructure so your team is prepared.',
    deliverables: ['IR retainer & rapid response', 'Incident playbook development', 'Tabletop exercises & drills', 'Digital forensics & investigation', 'Post-incident review & reporting', 'Business continuity planning'],
    approach: ['Retainer setup & communication protocols', 'Custom playbook development for top threat scenarios', 'Quarterly tabletop exercises', 'On-call rapid response (sub-8 min for critical)', 'Forensic analysis & evidence preservation', 'Post-incident review with action items'],
    whyUs: ['Sub-8 minute mean response time', 'GCIH certified incident handlers', 'Blameless post-incident culture', 'Tested playbooks, not shelf-ware'],
  },
  'it-consultancy': {
    icon: 'Lock', title: 'IT & Cybersecurity Consultancy', tag: 'STRATEGY', color: '#1a6bff',
    description: 'Our consultants embed with your team to solve complex security challenges. Whether you\'re architecting zero-trust, migrating to the cloud securely, or building your security team, we bring deep expertise and hands-on execution.',
    deliverables: ['Zero-trust architecture design', 'Cloud security strategy', 'Security tooling selection', 'Security program buildout', 'vCISO services', 'Technology stack evaluation'],
    approach: ['Requirements gathering & constraint mapping', 'Architecture design & review', 'Technology evaluation & selection', 'Implementation support & knowledge transfer', 'Ongoing vCISO engagement (optional)', 'Quarterly program reviews'],
    whyUs: ['Hands-on implementation, not just slides', 'Vendor-agnostic recommendations', 'vCISO services for growing teams', 'Knowledge transfer built into every engagement'],
  },
  'compliance-regulatory': {
    icon: 'FileCheck', title: 'Compliance & Regulatory Services', tag: 'GRC', color: '#a855f7',
    description: 'Our GRC team guides you through gap analysis, control implementation, policy development, evidence collection, and audit preparation. With Compliance Board OS, we automate ongoing compliance monitoring so you stay audit-ready continuously.',
    deliverables: ['ISO 27001 certification', 'NIST CSF / RMF implementation', 'GDPR & EU-NIS2 readiness', 'HIPAA compliance', 'PCI DSS assessment', 'DORA compliance', 'Policy development', 'Audit preparation'],
    approach: ['Framework selection & scoping', 'Gap analysis against target framework', 'Control design & implementation', 'Policy & procedure documentation', 'Evidence collection automation via Compliance Board OS', 'Audit preparation & auditor liaison'],
    whyUs: ['Multi-framework expertise (ISO, NIST, GDPR, HIPAA, PCI, DORA)', 'Compliance Board OS automates ongoing monitoring', 'First-pass audit success track record', 'Policies that people actually follow'],
  },
  'network-security': {
    icon: 'Server', title: 'Network Security', tag: 'INFRA', color: '#1a6bff',
    description: 'We design, implement, and manage network security infrastructure that withstands modern threats. From next-gen firewalls and intrusion prevention to network segmentation and secure remote access.',
    deliverables: ['Network architecture review', 'Firewall configuration', 'Intrusion detection & prevention', 'Network segmentation', 'VPN & secure remote access', 'Wireless security'],
    approach: ['Network topology mapping', 'Threat modeling for your environment', 'Architecture design & hardening', 'Implementation & configuration', 'Monitoring & alerting setup', 'Ongoing management (optional)'],
    whyUs: ['Vendor-agnostic design', 'Defense-in-depth approach', 'Micro-segmentation expertise', 'Managed service option available'],
  },
  'staffing-solutions': {
    icon: 'Users', title: 'Staffing Solutions', tag: 'TALENT', color: '#1a6bff',
    description: 'Finding qualified cybersecurity talent is one of the biggest challenges. We source, vet, and place skilled professionals for contract, permanent, or project-based roles.',
    deliverables: ['Contract & permanent placement', 'Security analyst staffing', 'GRC specialist recruitment', 'vCISO & leadership placement', 'Project-based teams', 'Skill assessment'],
    approach: ['Role definition & requirements', 'Candidate sourcing from our network', 'Technical skill assessment & vetting', 'Culture fit evaluation', 'Placement & onboarding support', 'Performance check-ins'],
    whyUs: ['Deep cybersecurity talent network', 'Technical vetting by practitioners', 'Fast placement (avg 2-3 weeks)', 'Replacement guarantee'],
  },
  'security-training': {
    icon: 'GraduationCap', title: 'Security Awareness Training', tag: 'EDUCATION', color: '#ffb039',
    description: 'Our Cyber Protection Academy delivers hands-on training programs that build security-first culture. From phishing simulations to advanced certification prep.',
    deliverables: ['Phishing simulation campaigns', 'Security awareness workshops', 'Role-based training', 'Certification prep', 'Executive briefings', 'Compliance training'],
    approach: ['Baseline assessment & phishing test', 'Custom curriculum development', 'Interactive workshop delivery', 'Phishing simulation campaigns (ongoing)', 'Progress tracking & reporting', 'Annual program refresh'],
    whyUs: ['72% avg reduction in phishing click rates', 'Hands-on labs, not just slides', 'Role-specific content', 'Measurable ROI tracking'],
  },
};

const serviceOrder = ['cybersecurity-advisory', 'penetration-testing', 'incident-response', 'it-consultancy', 'compliance-regulatory', 'network-security', 'staffing-solutions', 'security-training'];

export default function ServiceDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? services[slug] : null;

  if (!service) {
    return (<><Navbar /><div className="max-w-4xl mx-auto px-6 pt-20 pb-20 text-center"><h1 className="font-poppins text-2xl text-ctn-text-bright mb-4">Service not found</h1><Link to="/services" className="text-ctn-blue font-poppins text-sm no-underline">&larr; All Services</Link></div><Footer /></>);
  }

  const Icon = iconMap[service.icon];
  const currentIdx = serviceOrder.indexOf(slug!);
  const prevSlug = currentIdx > 0 ? serviceOrder[currentIdx - 1] : null;
  const nextSlug = currentIdx < serviceOrder.length - 1 ? serviceOrder[currentIdx + 1] : null;

  return (
    <>
      <Navbar />
      <div className="relative overflow-hidden">
        {/* Hero */}
        <div className="relative py-20">
          <div className="absolute inset-0 bg-cover bg-center opacity-[0.04]" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920&q=80)' }} />
          <div className="absolute inset-0 bg-gradient-to-b from-ctn-bg via-ctn-bg/90 to-ctn-bg" />
          <div className="relative px-6 lg:px-12 max-w-4xl mx-auto">
            <Link to="/services" className="inline-flex items-center gap-2 font-poppins text-xs text-ctn-text-dim hover:text-ctn-blue transition-colors mb-8 no-underline">
              <ArrowLeft size={14} /> All Services
            </Link>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl border flex items-center justify-center" style={{ borderColor: service.color + '30', color: service.color, background: service.color + '08' }}>
                  <Icon size={28} />
                </div>
                <span className="font-mono text-[10px] tracking-[0.15em] px-2.5 py-1 rounded border" style={{ borderColor: service.color + '30', color: service.color }}>{service.tag}</span>
              </div>
              <h1 className="font-poppins font-bold text-3xl md:text-4xl text-ctn-text-bright mb-6 leading-tight">{service.title}</h1>
              <p className="text-ctn-text-dim text-lg leading-relaxed">{service.description}</p>
            </motion.div>
          </div>
        </div>

        {/* Content */}
        <div className="px-6 lg:px-12 max-w-4xl mx-auto pb-24">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Deliverables */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="cyber-card p-8">
              <h2 className="font-poppins font-semibold text-lg text-ctn-text-bright mb-5">What You Get</h2>
              <div className="space-y-3">
                {service.deliverables.map((d) => (
                  <div key={d} className="flex items-start gap-3">
                    <CheckCircle size={16} className="text-ctn-blue flex-shrink-0 mt-0.5" />
                    <span className="font-poppins text-sm text-ctn-text">{d}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Why Us */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="cyber-card p-8">
              <h2 className="font-poppins font-semibold text-lg text-ctn-text-bright mb-5">Why CTN</h2>
              <div className="space-y-3">
                {service.whyUs.map((w) => (
                  <div key={w} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-ctn-blue flex-shrink-0 mt-2" />
                    <span className="font-poppins text-sm text-ctn-text">{w}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Approach */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="cyber-card p-8 mb-12">
            <h2 className="font-poppins font-semibold text-lg text-ctn-text-bright mb-6">Our Approach</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {service.approach.map((step, i) => (
                <div key={step} className="flex items-start gap-3 p-4 bg-ctn-bg/50 rounded-lg border border-ctn-border">
                  <span className="font-poppins font-bold text-sm text-ctn-blue">{i + 1}.</span>
                  <span className="font-poppins text-sm text-ctn-text-dim">{step}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <div className="cyber-card p-10 text-center box-glow-blue">
            <h3 className="font-poppins font-bold text-xl text-ctn-text-bright mb-3">Ready to get started?</h3>
            <p className="text-ctn-text-dim text-sm mb-6">Get a tailored proposal for your organization.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link to="/#contact" className="btn btn-primary text-sm py-3 px-8 no-underline">Contact Us</Link>
              <Link to="/#health-check" className="btn btn-secondary text-sm py-3 px-8 no-underline">Free Health Check</Link>
            </div>
          </div>

          {/* Prev/Next */}
          <div className="flex justify-between mt-10">
            {prevSlug ? (
              <Link to={`/services/${prevSlug}`} className="font-poppins text-sm text-ctn-text-dim hover:text-ctn-blue transition-colors no-underline flex items-center gap-2">
                <ArrowLeft size={14} /> {services[prevSlug].title}
              </Link>
            ) : <div />}
            {nextSlug ? (
              <Link to={`/services/${nextSlug}`} className="font-poppins text-sm text-ctn-text-dim hover:text-ctn-blue transition-colors no-underline flex items-center gap-2">
                {services[nextSlug].title} <ArrowRight size={14} />
              </Link>
            ) : <div />}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
