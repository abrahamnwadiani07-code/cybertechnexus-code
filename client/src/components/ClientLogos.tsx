import { motion } from 'framer-motion';

const clients = [
  'Fortune 500 Bank',
  'Global Healthcare',
  'TechCorp Inc.',
  'Federal Agency',
  'Cloud SaaS Co.',
  'Retail Giant',
  'FinServ Group',
  'MedTech Labs',
  'Critical Infra.',
  'InsureTech',
];

export default function ClientLogos() {
  return (
    <section className="border-y border-ctn-border py-10 overflow-hidden bg-ctn-bg/50">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-center text-xs text-ctn-text-dim font-poppins tracking-wider uppercase mb-8">
          Trusted by organizations across finance, healthcare, government & technology
        </p>
        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-ctn-bg to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-ctn-bg to-transparent z-10" />
          <div className="marquee-track animate-marquee">
            {[...clients, ...clients].map((name, i) => (
              <div
                key={i}
                className="flex-shrink-0 mx-8 px-6 py-3 border border-ctn-border rounded-lg bg-ctn-bg-card/50 font-poppins text-sm text-ctn-text-dim font-medium tracking-wide whitespace-nowrap"
              >
                {name}
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
