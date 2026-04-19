import { motion } from 'framer-motion';
import { Quote, Star, Shield, Award, CheckCircle } from 'lucide-react';

const testimonials = [
  {
    quote: "CyberTech Nexus transformed our security posture. Their GRC team identified critical compliance gaps and built a remediation roadmap that got us audit-ready in record time.",
    name: 'Michael Torres',
    role: 'CISO, Regional Financial Services',
    rating: 5,
  },
  {
    quote: "Their penetration testing uncovered critical vulnerabilities that two previous vendors missed. The remediation guidance was clear, actionable, and our team implemented fixes within days.",
    name: 'Dr. Sarah Chen',
    role: 'CTO, HealthTech Solutions',
    rating: 5,
  },
  {
    quote: "Going from zero to fully compliant in under 4 months seemed impossible. CTN's GRC team made it happen without disrupting our engineering velocity.",
    name: 'James Adewale',
    role: 'VP Engineering, CloudScale SaaS',
    rating: 5,
  },
];

const badges = [
  { icon: Shield, label: 'Cyber Essentials', sublabel: 'Certified' },
  { icon: Award, label: 'ISO 27001', sublabel: 'Compliant' },
  { icon: CheckCircle, label: 'GDPR', sublabel: 'Compliant' },
  { icon: CheckCircle, label: 'HIPAA', sublabel: 'Compliant' },
];

export default function Testimonials() {
  return (
    <section className="relative px-6 lg:px-12 py-24 max-w-7xl mx-auto">
      {/* Trust Badges */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20"
      >
        {badges.map((badge, i) => {
          const Icon = badge.icon;
          return (
            <motion.div
              key={badge.label}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="cyber-card p-5 text-center"
            >
              <Icon size={28} className="text-ctn-blue mx-auto mb-3" />
              <div className="font-poppins font-semibold text-sm text-ctn-text-bright">{badge.label}</div>
              <div className="font-mono text-[10px] text-ctn-blue tracking-wider">{badge.sublabel}</div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-14"
      >
        <span className="inline-block font-mono text-[11px] tracking-[0.25em] text-ctn-blue uppercase mb-3 px-3 py-1 border border-ctn-blue/20 rounded-full">
          Client Testimonials
        </span>
        <h2 className="font-poppins font-bold text-3xl md:text-4xl text-ctn-text-bright mt-4 mb-4">
          What Our Clients <span className="text-ctn-blue text-glow-blue">Say</span>
        </h2>
      </motion.div>

      {/* Testimonial Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="cyber-card p-8 flex flex-col"
          >
            <Quote size={24} className="text-ctn-blue/30 mb-4" />
            <p className="text-ctn-text text-sm leading-relaxed mb-6 flex-1 italic">
              "{t.quote}"
            </p>
            <div className="flex gap-1 mb-4">
              {Array.from({ length: t.rating }).map((_, j) => (
                <Star key={j} size={14} className="text-ctn-blue fill-ctn-blue" />
              ))}
            </div>
            <div>
              <div className="font-poppins font-semibold text-sm text-ctn-text-bright">{t.name}</div>
              <div className="font-poppins text-xs text-ctn-text-dim">{t.role}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
