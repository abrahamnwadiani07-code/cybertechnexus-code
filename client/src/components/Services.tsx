import { motion } from 'framer-motion';
import { Shield, Search, AlertTriangle, Lock, Server, FileCheck, Users, GraduationCap } from 'lucide-react';

const services = [
  {
    icon: Shield,
    title: 'Cybersecurity Strategy & Advisory',
    tag: 'ADVISORY',
    description: 'Comprehensive security assessments, roadmaps, and advisory services to align your cybersecurity strategy with business objectives.',
    color: '#1a6bff',
  },
  {
    icon: Search,
    title: 'Penetration Testing & Vulnerability Assessment',
    tag: 'OFFENSIVE',
    description: 'Comprehensive red-team assessments simulating real-world attack scenarios to identify vulnerabilities before adversaries do.',
    color: '#ff3b5c',
  },
  {
    icon: AlertTriangle,
    title: 'Incident Response',
    tag: 'RAPID',
    description: 'Rapid containment, eradication, and recovery with mean response time under 8 minutes for critical security incidents.',
    color: '#ffb039',
  },
  {
    icon: Lock,
    title: 'IT & Cybersecurity Consultancy',
    tag: 'STRATEGY',
    description: 'Expert guidance to assess, design, and implement security strategies tailored to your organization\'s threat landscape.',
    color: '#3d9eff',
  },
  {
    icon: FileCheck,
    title: 'Compliance & Regulatory Services',
    tag: 'GRC',
    description: 'Governance, risk, and compliance expertise across ISO 27001, PCI DSS, DORA, NIST CSF, NIST RMF, CIS, GDPR, EU-NIS2, and HIPAA.',
    color: '#a855f7',
  },
  {
    icon: Server,
    title: 'Network Security',
    tag: 'INFRA',
    description: 'Firewalls, intrusion prevention systems, secure access controls, and network architecture designed to withstand modern threats.',
    color: '#1a6bff',
  },
  {
    icon: Users,
    title: 'Staffing Solutions',
    tag: 'TALENT',
    description: 'Connecting your business with vetted, skilled IT and cybersecurity professionals for contract, permanent, or project-based roles.',
    color: '#3d9eff',
  },
  {
    icon: GraduationCap,
    title: 'Security Awareness Training',
    tag: 'EDUCATION',
    description: 'Expert-led cybersecurity webinars, workshops, and certification programs to build a security-first culture.',
    color: '#ffb039',
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-24 overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.07]"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920&q=80)' }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ctn-bg via-transparent to-ctn-bg" />

    <div className="relative px-6 lg:px-12 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <span className="inline-block font-mono text-[11px] tracking-[0.25em] text-ctn-blue uppercase mb-3 px-3 py-1 border border-ctn-blue/20 rounded-full">
          Our Capabilities
        </span>
        <h2 className="font-poppins font-bold text-3xl md:text-4xl text-ctn-text-bright mt-4 mb-4">
          End-to-End Security <span className="text-ctn-blue text-glow-blue">Services</span>
        </h2>
        <p className="text-ctn-text-dim max-w-2xl mx-auto">
          Comprehensive cybersecurity solutions tailored to your threat landscape, compliance requirements, and business objectives.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
        {services.map((service, i) => {
          const Icon = service.icon;
          return (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="cyber-card p-6 group cursor-default flex flex-col"
            >
              <div className="flex items-center justify-between mb-5">
                <div
                  className="w-11 h-11 flex items-center justify-center rounded-lg border"
                  style={{ borderColor: service.color + '30', color: service.color, background: service.color + '08' }}
                >
                  <Icon size={20} />
                </div>
                <span
                  className="font-mono text-[9px] tracking-[0.15em] px-2 py-0.5 rounded border"
                  style={{ borderColor: service.color + '30', color: service.color }}
                >
                  {service.tag}
                </span>
              </div>
              <h3 className="font-poppins font-semibold text-sm mb-2.5 text-ctn-text-bright group-hover:text-ctn-blue transition-colors leading-snug">
                {service.title}
              </h3>
              <p className="text-ctn-text-dim text-[13px] leading-relaxed flex-1">
                {service.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </div>
    </section>
  );
}
