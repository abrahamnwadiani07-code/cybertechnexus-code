import { motion } from 'framer-motion';
import { TrendingDown, Clock, Shield, DollarSign, ArrowRight } from 'lucide-react';

const cases = [
  {
    industry: 'Financial Services',
    title: 'Regional bank achieves ISO 27001 in 4 months',
    challenge: 'Needed ISO 27001 certification to win enterprise contracts but had no formal GRC program.',
    results: [
      { icon: Clock, value: '4 months', label: 'Time to certification' },
      { icon: Shield, value: '116', label: 'Controls implemented' },
      { icon: DollarSign, value: '3.2M', label: 'New contracts won' },
    ],
  },
  {
    industry: 'Healthcare',
    title: 'HealthTech startup passes HIPAA audit on first attempt',
    challenge: 'Rapidly scaling SaaS product handling PHI with no compliance infrastructure in place.',
    results: [
      { icon: Shield, value: '100%', label: 'First-pass audit rate' },
      { icon: TrendingDown, value: '72%', label: 'Risk reduction' },
      { icon: Clock, value: '< 8 min', label: 'Incident response time' },
    ],
  },
  {
    industry: 'Technology / SaaS',
    title: 'SaaS company reduces attack surface by 85% after pen test',
    challenge: 'Experienced rapid growth but security lagged behind — no pen test in over 2 years.',
    results: [
      { icon: TrendingDown, value: '85%', label: 'Attack surface reduced' },
      { icon: Shield, value: '23', label: 'Critical vulns fixed' },
      { icon: DollarSign, value: '1.8M', label: 'Potential breach cost avoided' },
    ],
  },
];

export default function CaseStudies() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.03]"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1920&q=80)' }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ctn-bg via-transparent to-ctn-bg" />

      <div className="relative px-6 lg:px-12 max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-14">
          <span className="inline-block font-mono text-[11px] tracking-[0.25em] text-ctn-blue uppercase mb-3 px-3 py-1 border border-ctn-blue/20 rounded-full">
            Success Stories
          </span>
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-ctn-text-bright mt-4 mb-4">
            Real <span className="text-ctn-blue text-glow-blue">Results</span> for Real Organizations
          </h2>
          <p className="text-ctn-text-dim max-w-xl mx-auto">Measurable outcomes from organizations that trusted CyberTech Nexus.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {cases.map((c, i) => (
            <motion.div key={c.title} initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
              className="cyber-card p-7 flex flex-col">
              <span className="font-mono text-[10px] tracking-[0.2em] text-ctn-blue uppercase mb-3">{c.industry}</span>
              <h3 className="font-poppins font-semibold text-base text-ctn-text-bright mb-3 leading-snug">{c.title}</h3>
              <p className="text-ctn-text-dim text-sm leading-relaxed mb-6 flex-1">{c.challenge}</p>
              <div className="border-t border-ctn-border pt-4 space-y-3">
                {c.results.map((r) => {
                  const Icon = r.icon;
                  return (
                    <div key={r.label} className="flex items-center gap-3">
                      <Icon size={14} className="text-ctn-blue flex-shrink-0" />
                      <span className="font-poppins font-bold text-sm text-ctn-blue">{r.value}</span>
                      <span className="font-poppins text-xs text-ctn-text-dim">{r.label}</span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
