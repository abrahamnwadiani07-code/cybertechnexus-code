import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Shield, Award, Handshake, Globe, CheckCircle, ArrowRight, Star } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const partners = [
  { name: 'Microsoft', type: 'Technology Partner', logo: 'M', description: 'Microsoft Security Solutions Partner. Azure and M365 security specialization.' },
  { name: 'CrowdStrike', type: 'MSSP Partner', logo: 'CS', description: 'Certified Falcon deployment and managed detection & response partner.' },
  { name: 'Palo Alto Networks', type: 'Technology Partner', logo: 'PA', description: 'Authorized integrator for next-gen firewalls and Cortex XDR solutions.' },
  { name: 'Splunk', type: 'Implementation Partner', logo: 'SP', description: 'Certified Splunk partner for SIEM deployment and security analytics.' },
  { name: 'AWS', type: 'Technology Partner', logo: 'AWS', description: 'AWS Security Competency Partner. Cloud security architecture and compliance.' },
  { name: 'Tenable', type: 'Technology Partner', logo: 'T', description: 'Certified partner for vulnerability management and exposure analytics.' },
];

const clientLogos = [
  { name: 'Sterling Bank', industry: 'Financial Services' },
  { name: 'MedSecure Health', industry: 'Healthcare' },
  { name: 'TechScale SaaS', industry: 'Technology' },
  { name: 'Atlas Legal Group', industry: 'Legal' },
  { name: 'GreenEnergy Corp', industry: 'Energy' },
  { name: 'DataFlow Systems', industry: 'Technology' },
  { name: 'Pacific Logistics', industry: 'Supply Chain' },
  { name: 'Nexgen Financial', industry: 'Financial Services' },
];

const stats = [
  { value: '200+', label: 'Organizations Protected' },
  { value: '99.7%', label: 'Client Retention Rate' },
  { value: '15+', label: 'Technology Partners' },
  { value: '4.9/5', label: 'Client Satisfaction Score' },
];

const testimonials = [
  {
    quote: 'CyberTech Nexus helped us achieve SOC 2 Type II in record time. Their team understood our tech stack and made compliance feel manageable.',
    name: 'David Chen',
    role: 'CTO',
    company: 'TechScale SaaS',
  },
  {
    quote: 'After a ransomware scare, we engaged CTN for IR and ongoing monitoring. They responded in under 30 minutes and have been our security backbone ever since.',
    name: 'Sarah Williams',
    role: 'VP of Operations',
    company: 'MedSecure Health',
  },
  {
    quote: 'The Compliance Board OS platform transformed how we manage our regulatory obligations. What used to take weeks now takes hours.',
    name: 'James Okonkwo',
    role: 'Head of Risk',
    company: 'Sterling Bank',
  },
];

export default function PartnersPage() {
  return (
    <>
      <Navbar />
      <div className="relative overflow-hidden">
        {/* Hero */}
        <div className="relative py-20">
          <div className="absolute inset-0 bg-gradient-to-b from-ctn-bg via-ctn-bg/90 to-ctn-bg" />
          <div className="relative max-w-7xl mx-auto px-6 lg:px-12 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <span className="inline-block text-xs font-mono uppercase tracking-[0.25em] text-ctn-blue border border-ctn-blue/20 rounded-full px-4 py-1.5 mb-6">
                Partners & Clients
              </span>
              <h1 className="font-poppins text-4xl md:text-5xl font-bold text-ctn-text-bright mb-5 leading-tight">
                Trusted by Industry<br />
                <span className="text-ctn-blue">Leaders Worldwide</span>
              </h1>
              <p className="text-ctn-text-dim text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
                We partner with the world's leading security vendors and protect organizations across every industry.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Stats */}
        <section className="py-12 border-t border-ctn-border">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center p-6 rounded-xl border border-ctn-border bg-ctn-bg-elevated"
                >
                  <div className="font-poppins text-3xl font-bold text-ctn-blue mb-1">{stat.value}</div>
                  <div className="text-ctn-text-dim text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology Partners */}
        <section className="py-16 border-t border-ctn-border">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
              <h2 className="font-poppins text-2xl md:text-3xl font-bold text-ctn-text-bright mb-4">Technology Partners</h2>
              <p className="text-ctn-text-dim max-w-xl mx-auto">We integrate with best-in-class security platforms to deliver comprehensive protection.</p>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {partners.map((p, i) => (
                <motion.div
                  key={p.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="p-6 rounded-xl border border-ctn-border bg-ctn-bg-elevated hover:border-ctn-blue/30 transition-all"
                >
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-12 h-12 rounded-lg bg-ctn-blue/10 border border-ctn-blue/20 flex items-center justify-center text-ctn-blue font-mono font-bold text-sm">
                      {p.logo}
                    </div>
                    <div>
                      <h3 className="font-poppins font-semibold text-ctn-text-bright">{p.name}</h3>
                      <span className="text-xs text-ctn-blue">{p.type}</span>
                    </div>
                  </div>
                  <p className="text-ctn-text-dim text-sm leading-relaxed">{p.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Clients */}
        <section className="py-16 border-t border-ctn-border">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
              <h2 className="font-poppins text-2xl md:text-3xl font-bold text-ctn-text-bright mb-4">Our Clients</h2>
              <p className="text-ctn-text-dim max-w-xl mx-auto">Protecting organizations from startups to Fortune 500 across every sector.</p>
            </motion.div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {clientLogos.map((c, i) => (
                <motion.div
                  key={c.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="p-5 rounded-xl border border-ctn-border bg-ctn-bg-elevated text-center hover:border-ctn-blue/20 transition-all"
                >
                  <div className="font-poppins font-semibold text-ctn-text-bright text-sm mb-1">{c.name}</div>
                  <div className="text-xs text-ctn-text-dim">{c.industry}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 border-t border-ctn-border">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
              <h2 className="font-poppins text-2xl md:text-3xl font-bold text-ctn-text-bright mb-4">What Our Clients Say</h2>
            </motion.div>
            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((t, i) => (
                <motion.div
                  key={t.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-6 rounded-xl border border-ctn-border bg-ctn-bg-elevated"
                >
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, j) => <Star key={j} size={14} className="text-yellow-400 fill-yellow-400" />)}
                  </div>
                  <p className="text-ctn-text text-sm leading-relaxed mb-5 italic">"{t.quote}"</p>
                  <div>
                    <div className="font-poppins font-semibold text-ctn-text-bright text-sm">{t.name}</div>
                    <div className="text-xs text-ctn-text-dim">{t.role}, {t.company}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Become a Partner CTA */}
        <section className="py-16 border-t border-ctn-border">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <Handshake size={32} className="text-ctn-blue mx-auto mb-4" />
            <h2 className="font-poppins text-2xl font-bold text-ctn-text-bright mb-4">Become a Partner</h2>
            <p className="text-ctn-text-dim mb-6">Join our partner ecosystem. We work with MSSPs, technology vendors, and consulting firms worldwide.</p>
            <Link to="/contact" className="btn btn-primary px-8 py-3 no-underline">
              Partner With Us <ArrowRight size={14} className="inline ml-1" />
            </Link>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
