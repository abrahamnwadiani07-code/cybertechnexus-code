import { motion } from 'framer-motion';
import { Check, X, ArrowRight } from 'lucide-react';

const comparisons = [
  { feature: 'End-to-end GRC & cybersecurity', us: true, others: false },
  { feature: 'Compliance Board OS platform', us: true, others: false },
  { feature: 'ISO 27001, NIST, GDPR, HIPAA, PCI DSS, DORA', us: true, others: 'Partial' },
  { feature: 'Penetration testing & vulnerability assessment', us: true, others: true },
  { feature: 'Cyber Protection Academy training', us: true, others: false },
  { feature: 'Staffing & talent solutions', us: true, others: false },
  { feature: 'Free security health check', us: true, others: false },
  { feature: 'Multi-framework control mapping', us: true, others: 'Partial' },
  { feature: 'Automated evidence collection', us: true, others: 'Partial' },
  { feature: 'Sub-8 minute incident response', us: true, others: false },
];

function StatusIcon({ val }: { val: boolean | string }) {
  if (val === true) return <Check size={16} className="text-ctn-blue" />;
  if (val === 'Partial') return <span className="font-mono text-[10px] text-ctn-amber">PARTIAL</span>;
  return <X size={16} className="text-ctn-red/60" />;
}

export default function WhyChooseUs() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-ctn-bg via-ctn-bg-1/30 to-ctn-bg" />
      <div className="relative px-6 lg:px-12 max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-14">
          <span className="inline-block font-mono text-[11px] tracking-[0.25em] text-ctn-blue uppercase mb-3 px-3 py-1 border border-ctn-blue/20 rounded-full">
            Why CyberTech Nexus
          </span>
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-ctn-text-bright mt-4 mb-4">
            How We <span className="text-ctn-blue text-glow-blue">Compare</span>
          </h2>
          <p className="text-ctn-text-dim max-w-xl mx-auto">
            We don't just check boxes — we deliver full-spectrum cybersecurity and GRC solutions that most providers can't match.
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="cyber-card overflow-hidden">
          {/* Header */}
          <div className="grid grid-cols-[1fr_100px_100px] sm:grid-cols-[1fr_120px_120px] bg-ctn-bg-1 border-b border-ctn-border px-6 py-4">
            <span className="font-poppins font-semibold text-xs text-ctn-text-dim uppercase tracking-wider">Feature</span>
            <span className="font-poppins font-semibold text-xs text-ctn-blue text-center uppercase tracking-wider">CTN</span>
            <span className="font-poppins font-semibold text-xs text-ctn-text-dim text-center uppercase tracking-wider">Others</span>
          </div>
          {/* Rows */}
          {comparisons.map((row, i) => (
            <div key={row.feature} className={`grid grid-cols-[1fr_100px_100px] sm:grid-cols-[1fr_120px_120px] px-6 py-3.5 items-center ${i % 2 === 0 ? 'bg-ctn-bg/40' : ''} ${i < comparisons.length - 1 ? 'border-b border-ctn-border/50' : ''}`}>
              <span className="font-poppins text-sm text-ctn-text">{row.feature}</span>
              <div className="flex justify-center"><StatusIcon val={row.us} /></div>
              <div className="flex justify-center"><StatusIcon val={row.others} /></div>
            </div>
          ))}
        </motion.div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="text-center mt-8">
          <a href="#contact" onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="btn btn-primary text-sm py-3 px-8 no-underline inline-flex">
            Get Started <ArrowRight size={14} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
