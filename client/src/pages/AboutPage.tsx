import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Target, Award, Zap, MapPin, Globe, Shield, Users, GraduationCap, CheckCircle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const values = [
  { icon: Target, title: 'Mission-Driven', text: 'We make enterprise-grade cybersecurity accessible to organizations of every size.' },
  { icon: Award, title: 'Certified Experts', text: 'CISSP, OSCP, CEH, GCIH, CISA, CISM certifications. 10+ years average experience.' },
  { icon: Zap, title: 'Speed Matters', text: 'Sub-8-minute mean response times. Every second counts during an incident.' },
  { icon: Shield, title: 'Full Spectrum', text: 'From GRC to pen testing to training — we cover every aspect of cybersecurity.' },
];

const timeline = [
  { year: 'Founded', text: 'CyberTech Nexus established with a mission to democratize enterprise security.' },
  { year: 'Growth', text: 'Expanded operations to serve clients across the US and Africa.' },
  { year: 'Academy', text: 'Launched the Cyber Protection Academy to address the cybersecurity skills gap.' },
  { year: 'Platform', text: 'Released Compliance Board OS to automate GRC for growing organizations.' },
  { year: 'Today', text: '200+ organizations protected. 6+ compliance frameworks supported. Growing fast.' },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <div className="relative overflow-hidden">
        {/* Hero */}
        <div className="relative py-20">
          <div className="absolute inset-0 bg-cover bg-center opacity-[0.04]" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1563986768609-322da13575f2?w=1920&q=80)' }} />
          <div className="absolute inset-0 bg-gradient-to-b from-ctn-bg via-ctn-bg/90 to-ctn-bg" />
          <div className="relative px-6 lg:px-12 max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <span className="inline-block font-mono text-[11px] tracking-[0.25em] text-ctn-blue uppercase mb-3 px-3 py-1 border border-ctn-blue/20 rounded-full">About Us</span>
              <h1 className="font-poppins font-bold text-4xl md:text-5xl text-ctn-text-bright mt-4 mb-6">
                Built by <span className="text-ctn-blue text-glow-blue">defenders</span>, for defenders.
              </h1>
              <p className="text-ctn-text-dim text-lg leading-relaxed max-w-2xl">
                CyberTech Nexus is committed to providing cutting-edge cybersecurity solutions, training, and consulting services to protect businesses and individuals from evolving cyber threats.
              </p>
            </motion.div>
          </div>
        </div>

        <div className="px-6 lg:px-12 max-w-5xl mx-auto pb-24">
          {/* Mission */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="cyber-card p-10 mb-12 text-center">
            <h2 className="font-poppins font-bold text-2xl text-ctn-text-bright mb-4">Our Mission</h2>
            <p className="text-ctn-text-dim text-lg leading-relaxed max-w-2xl mx-auto">
              To make enterprise-grade cybersecurity and GRC capabilities accessible to every organization — regardless of size, budget, or maturity — so they can focus on growing their business with confidence.
            </p>
          </motion.div>

          {/* Values */}
          <div className="grid md:grid-cols-2 gap-5 mb-16">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <motion.div key={v.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 + i * 0.08 }} className="cyber-card p-6 flex gap-5">
                  <div className="w-11 h-11 flex-shrink-0 rounded-lg bg-ctn-blue/10 border border-ctn-blue/20 flex items-center justify-center text-ctn-blue">
                    <Icon size={20} />
                  </div>
                  <div>
                    <h3 className="font-poppins font-semibold text-sm text-ctn-text-bright mb-1">{v.title}</h3>
                    <p className="text-ctn-text-dim text-sm leading-relaxed">{v.text}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Timeline */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
            <h2 className="font-poppins font-bold text-2xl text-ctn-text-bright mb-8 text-center">Our Journey</h2>
            <div className="space-y-4">
              {timeline.map((t, i) => (
                <motion.div key={t.year} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  className="flex gap-6 items-start">
                  <div className="w-20 flex-shrink-0 text-right">
                    <span className="font-poppins font-bold text-sm text-ctn-blue">{t.year}</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-3 h-3 rounded-full bg-ctn-blue border-2 border-ctn-bg" />
                    {i < timeline.length - 1 && <div className="w-px h-full bg-ctn-blue/20 min-h-[40px]" />}
                  </div>
                  <p className="font-poppins text-sm text-ctn-text-dim pb-4">{t.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Leadership Team */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
            <h2 className="font-poppins font-bold text-2xl text-ctn-text-bright mb-8 text-center">Leadership Team</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: 'Abraham Nwadiani', role: 'Founder & CEO', bio: 'CISSP, CISM. 12+ years in enterprise security. Former security consultant at Big 4. Passionate about democratizing cybersecurity for organizations of all sizes.', certs: ['CISSP', 'CISM', 'CRISC'] },
                { name: 'Chidera Okafor', role: 'Chief Technology Officer', bio: 'OSCP, GXPN. Leads our offensive security practice and platform engineering. Built security programs for Fortune 500 financial institutions.', certs: ['OSCP', 'GXPN', 'AWS-SAP'] },
                { name: 'Rachel Thompson', role: 'VP of Compliance & GRC', bio: 'CISA, ISO 27001 Lead Auditor. 10+ years in regulatory compliance. Designed audit programs across healthcare, fintech, and SaaS industries.', certs: ['CISA', 'ISO 27001 LA', 'GDPR-P'] },
                { name: 'David Adesanya', role: 'Head of Training Academy', bio: 'CEH, CompTIA Security+. Passionate educator who has trained 1,000+ cybersecurity professionals across Africa and the US.', certs: ['CEH', 'GCIH', 'CompTIA S+'] },
                { name: 'Sarah Mitchell', role: 'Director of Incident Response', bio: 'GCIH, GCFA. Former FBI Cyber Division analyst. Leads our 24/7 IR team with sub-8-minute response times.', certs: ['GCIH', 'GCFA', 'GREM'] },
                { name: 'Michael Chen', role: 'Head of Security Engineering', bio: 'CCSP, Azure Security Engineer. Architects secure cloud environments and zero-trust networks for enterprise clients.', certs: ['CCSP', 'AZ-500', 'CKS'] },
              ].map((person, i) => (
                <motion.div
                  key={person.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="p-6 rounded-xl border border-ctn-border bg-ctn-bg-elevated hover:border-ctn-blue/20 transition-all"
                >
                  <div className="w-12 h-12 rounded-full bg-ctn-blue/10 border border-ctn-blue/20 flex items-center justify-center text-ctn-blue font-poppins font-bold text-sm mb-4">
                    {person.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <h3 className="font-poppins font-semibold text-ctn-text-bright mb-0.5">{person.name}</h3>
                  <p className="text-xs text-ctn-blue mb-3">{person.role}</p>
                  <p className="text-ctn-text-dim text-sm leading-relaxed mb-3">{person.bio}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {person.certs.map(c => (
                      <span key={c} className="text-[9px] font-mono text-ctn-blue bg-ctn-blue/5 border border-ctn-blue/10 px-1.5 py-0.5 rounded">{c}</span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Locations */}
          <div className="grid md:grid-cols-2 gap-5 mb-16">
            {[{ icon: MapPin, place: 'Texas, USA', detail: 'North America Headquarters' }, { icon: Globe, place: 'Lagos, Nigeria', detail: 'Africa Operations Center' }].map((loc) => {
              const Icon = loc.icon;
              return (
                <div key={loc.place} className="cyber-card p-8 text-center">
                  <Icon size={28} className="text-ctn-blue mx-auto mb-3" />
                  <h3 className="font-poppins font-semibold text-lg text-ctn-text-bright mb-1">{loc.place}</h3>
                  <p className="font-poppins text-sm text-ctn-text-dim">{loc.detail}</p>
                </div>
              );
            })}
          </div>

          {/* CTA */}
          <div className="cyber-card p-10 text-center box-glow-blue">
            <h3 className="font-poppins font-bold text-xl text-ctn-text-bright mb-3">Want to join our mission?</h3>
            <p className="text-ctn-text-dim text-sm mb-6">We're always looking for talented security professionals.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link to="/careers" className="btn btn-primary text-sm py-3 px-8 no-underline inline-flex">View Open Positions</Link>
              <Link to="/contact" className="btn btn-secondary text-sm py-3 px-8 no-underline inline-flex">Contact Us</Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
