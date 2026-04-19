import { motion } from 'framer-motion';
import { Target, Award, Zap, MapPin, Globe } from 'lucide-react';

const values = [
  {
    icon: Target,
    title: 'Mission-Driven',
    description: 'We make enterprise-grade cybersecurity accessible to organizations of every size — from startups to Fortune 500.',
  },
  {
    icon: Award,
    title: 'Certified Experts',
    description: 'Our team holds CISSP, OSCP, CEH, and GCIH certifications with 10+ years average experience in offensive and defensive security.',
  },
  {
    icon: Zap,
    title: 'Speed Matters',
    description: 'Every second counts during an incident. Our processes deliver sub-8-minute mean response times for critical threats.',
  },
];

const locations = [
  { icon: MapPin, place: 'Texas, USA', detail: 'North America HQ' },
  { icon: Globe, place: 'Lagos, Nigeria', detail: 'Africa Operations' },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.05]"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1563986768609-322da13575f2?w=1920&q=80)' }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ctn-bg via-transparent to-ctn-bg" />

    <div className="relative px-6 lg:px-12 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block font-mono text-[11px] tracking-[0.25em] text-ctn-blue uppercase mb-3 px-3 py-1 border border-ctn-blue/20 rounded-full">
            About CyberTech Nexus
          </span>
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-ctn-text-bright mt-4 mb-6">
            Built by <span className="text-ctn-blue text-glow-blue">defenders</span>,
            <br />for defenders.
          </h2>
          <p className="text-ctn-text-dim leading-relaxed mb-6">
            CyberTech Nexus is committed to providing cutting-edge cybersecurity solutions,
            training, and consulting services to protect businesses and individuals from
            evolving cyber threats.
          </p>
          <p className="text-ctn-text-dim leading-relaxed mb-8">
            From Fortune 500 enterprises to fast-moving startups, we've protected over 200
            organizations across finance, healthcare, government, retail, and critical infrastructure — with
            operations spanning the US and Africa.
          </p>

          {/* Locations */}
          <div className="flex flex-wrap gap-4">
            {locations.map((loc) => {
              const Icon = loc.icon;
              return (
                <div key={loc.place} className="cyber-card px-5 py-3 flex items-center gap-3">
                  <Icon size={16} className="text-ctn-blue" />
                  <div>
                    <div className="font-poppins font-semibold text-xs text-ctn-text-bright">{loc.place}</div>
                    <div className="font-mono text-[10px] text-ctn-text-dim">{loc.detail}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="space-y-5"
        >
          {values.map((v) => {
            const Icon = v.icon;
            return (
              <div key={v.title} className="cyber-card p-6 flex gap-5">
                <div className="w-11 h-11 flex-shrink-0 flex items-center justify-center border border-ctn-blue/20 rounded-lg bg-ctn-blue/5 text-ctn-blue">
                  <Icon size={20} />
                </div>
                <div>
                  <h3 className="font-poppins font-semibold text-sm text-ctn-text-bright mb-1.5">{v.title}</h3>
                  <p className="text-ctn-text-dim text-sm leading-relaxed">{v.description}</p>
                </div>
              </div>
            );
          })}

          {/* Industries */}
          <div className="cyber-card p-6">
            <div className="font-poppins font-semibold text-sm text-ctn-text-bright mb-3">Industries We Serve</div>
            <div className="flex flex-wrap gap-2">
              {['Finance & Banking', 'Healthcare', 'Government', 'Technology / SaaS', 'Retail', 'Critical Infrastructure'].map((ind) => (
                <span key={ind} className="font-mono text-[10px] text-ctn-blue tracking-wider bg-ctn-blue/5 border border-ctn-blue/15 px-2.5 py-1 rounded">
                  {ind}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
    </section>
  );
}
