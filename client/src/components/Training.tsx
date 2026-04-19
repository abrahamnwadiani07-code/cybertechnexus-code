import { motion } from 'framer-motion';
import { GraduationCap, ShieldCheck, Globe, Award } from 'lucide-react';

const programs = [
  {
    icon: ShieldCheck,
    title: 'Cybersecurity Certification',
    description: 'Ethical hacking, threat intelligence, security operations, and incident response — hands-on training with industry certifications.',
    topics: ['Ethical Hacking', 'Threat Intelligence', 'Security Operations', 'Incident Response'],
  },
  {
    icon: Globe,
    title: 'Practical IT Skills',
    description: 'Networking fundamentals, hardware & software, cloud infrastructure, and technical support — build the foundation for a cyber career.',
    topics: ['Networking', 'Cloud Infrastructure', 'System Administration', 'Technical Support'],
  },
  {
    icon: Award,
    title: 'GRC Training',
    description: 'ISO 27001, NIST frameworks, GDPR compliance, and business risk management — master governance, risk, and compliance.',
    topics: ['ISO 27001', 'NIST CSF / RMF', 'GDPR', 'Risk Management'],
  },
];

export default function Training() {
  return (
    <section id="training" className="relative py-24 overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.06]"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1920&q=80)' }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ctn-bg via-ctn-bg/80 to-ctn-bg" />

    <div className="relative px-6 lg:px-12 max-w-7xl mx-auto">

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative text-center mb-16"
      >
        <span className="inline-block font-mono text-[11px] tracking-[0.25em] text-ctn-blue uppercase mb-3 px-3 py-1 border border-ctn-blue/20 rounded-full">
          Cyber Protection Academy
        </span>
        <h2 className="font-poppins font-bold text-3xl md:text-4xl text-ctn-text-bright mt-4 mb-4">
          <span className="text-ctn-blue text-glow-blue">Train</span> Your Team,{' '}
          Strengthen Your Defense
        </h2>
        <p className="text-ctn-text-dim max-w-2xl mx-auto">
          The CyberTech Nexus Cyber Protection Academy empowers teams with essential cybersecurity
          knowledge and certifications to defend from within.
        </p>
      </motion.div>

      <div className="relative grid md:grid-cols-3 gap-6">
        {programs.map((prog, i) => {
          const Icon = prog.icon;
          return (
            <motion.div
              key={prog.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="cyber-card p-8 flex flex-col"
            >
              <div className="w-14 h-14 rounded-xl bg-ctn-blue/10 border border-ctn-blue/20 flex items-center justify-center mb-6">
                <Icon size={26} className="text-ctn-blue" />
              </div>
              <h3 className="font-poppins font-semibold text-lg text-ctn-text-bright mb-3">
                {prog.title}
              </h3>
              <p className="text-ctn-text-dim text-sm leading-relaxed mb-6 flex-1">
                {prog.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {prog.topics.map((topic) => (
                  <span
                    key={topic}
                    className="text-[10px] font-mono tracking-wider text-ctn-blue bg-ctn-blue/5 border border-ctn-blue/15 px-2 py-1 rounded"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="relative text-center mt-10"
      >
        <a
          href="#contact"
          onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
          className="btn btn-secondary text-sm py-3 px-8 no-underline"
        >
          <GraduationCap size={16} />
          Enroll Your Team
        </a>
      </motion.div>
    </div>
    </section>
  );
}
