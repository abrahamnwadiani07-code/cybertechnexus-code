import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: 'What industries does CyberTech Nexus serve?',
    a: 'We work across finance, healthcare, government, technology/SaaS, retail, and critical infrastructure. Our GRC and cybersecurity solutions are tailored to each industry\'s unique regulatory and threat landscape.',
  },
  {
    q: 'How does the free Security Health Check work?',
    a: 'Our health check is a quick, guided questionnaire that assesses your organization across security posture, incident readiness, and compliance maturity. You receive an instant risk score with prioritized recommendations. Our team follows up within 24 hours with a detailed action plan.',
  },
  {
    q: 'What is Compliance Board OS?',
    a: 'Compliance Board OS is our flagship GRC platform that unifies compliance management across ISO 27001, NIST, GDPR, HIPAA, PCI DSS, DORA, and more. It automates evidence collection from 50+ integrations, provides real-time control monitoring, and generates audit-ready reports.',
  },
  {
    q: 'How quickly can we become compliant with a new framework?',
    a: 'Timelines vary by framework complexity and your current maturity. Typical engagements: ISO 27001 in 3-6 months, GDPR readiness in 2-4 months, HIPAA compliance in 3-5 months. Our Compliance Board OS accelerates this by automating evidence collection and control mapping.',
  },
  {
    q: 'Do you offer penetration testing as a standalone service?',
    a: 'Yes. We offer one-time and recurring penetration testing engagements covering web applications, network infrastructure, API security, cloud environments, and social engineering. Each engagement includes a detailed report with prioritized remediation guidance.',
  },
  {
    q: 'What certifications does your team hold?',
    a: 'Our team holds CISSP, OSCP, CEH, GCIH, CISA, CISM, and ISO 27001 Lead Auditor certifications, with an average of 10+ years of experience in offensive and defensive security.',
  },
  {
    q: 'How does pricing work?',
    a: 'We offer flexible pricing based on your organization\'s size, scope, and needs. Compliance Board OS is subscription-based. Consulting, pen testing, and training services are scoped per engagement. Contact us for a tailored quote.',
  },
  {
    q: 'What is the Cyber Protection Academy?',
    a: 'Our training arm offers cybersecurity certification programs, practical IT skills training, and GRC training. Programs are available for individuals and teams, covering ethical hacking, threat intelligence, NIST/ISO frameworks, and more.',
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-ctn-border">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between py-5 text-left bg-transparent border-none cursor-pointer group">
        <span className="font-poppins font-medium text-sm text-ctn-text-bright group-hover:text-ctn-blue transition-colors pr-4">{q}</span>
        <ChevronDown size={18} className={`text-ctn-text-dim flex-shrink-0 transition-transform duration-300 ${open ? 'rotate-180 text-ctn-blue' : ''}`} />
      </button>
      <motion.div
        initial={false}
        animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <p className="font-poppins text-sm text-ctn-text-dim leading-relaxed pb-5">{a}</p>
      </motion.div>
    </div>
  );
}

export default function FAQ() {
  return (
    <section className="relative py-24">
      <div className="px-6 lg:px-12 max-w-3xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-14">
          <span className="inline-block font-mono text-[11px] tracking-[0.25em] text-ctn-blue uppercase mb-3 px-3 py-1 border border-ctn-blue/20 rounded-full">
            FAQ
          </span>
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-ctn-text-bright mt-4">
            Frequently Asked <span className="text-ctn-blue text-glow-blue">Questions</span>
          </h2>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="cyber-card px-8">
          {faqs.map((faq) => <FAQItem key={faq.q} {...faq} />)}
        </motion.div>
      </div>
    </section>
  );
}
