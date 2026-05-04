import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MapPin, Clock, Briefcase, ArrowRight, Heart, Zap, Globe, Shield, GraduationCap, TrendingUp } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const benefits = [
  { icon: Heart, title: 'Health & Wellness', text: 'Comprehensive medical, dental, and vision coverage. Mental health support included.' },
  { icon: TrendingUp, title: 'Growth Budget', text: '$5,000 annual learning budget for certifications, conferences, and courses.' },
  { icon: Globe, title: 'Remote-First', text: 'Work from anywhere. Flexible hours. Async communication by default.' },
  { icon: Shield, title: 'Cyber Range Access', text: 'Unlimited access to our internal lab environment for research and skill development.' },
  { icon: GraduationCap, title: 'Cert Support', text: 'We cover exam fees and study materials for CISSP, OSCP, CEH, CISM, and more.' },
  { icon: Zap, title: 'Equity & Bonus', text: 'Performance bonuses and equity options for all full-time team members.' },
];

const openings = [
  {
    title: 'Senior Penetration Tester',
    department: 'Offensive Security',
    location: 'Remote (US/UK)',
    type: 'Full-time',
    description: 'Lead complex red-team engagements across web, network, cloud, and social engineering vectors. OSCP or equivalent required.',
  },
  {
    title: 'GRC Consultant',
    department: 'Compliance & Risk',
    location: 'Remote (Global)',
    type: 'Full-time',
    description: 'Help organizations achieve ISO 27001, SOC 2, GDPR, and HIPAA compliance. 3+ years GRC experience required.',
  },
  {
    title: 'Security Operations Analyst (SOC)',
    department: 'Managed Security',
    location: 'Dallas, TX / Remote',
    type: 'Full-time',
    description: 'Monitor, detect, and respond to security incidents across client environments. SIEM experience required.',
  },
  {
    title: 'Cloud Security Engineer',
    department: 'Engineering',
    location: 'Remote (US)',
    type: 'Full-time',
    description: 'Secure multi-cloud environments (AWS, Azure, GCP). Design IAM policies, network segmentation, and compliance automation.',
  },
  {
    title: 'Cybersecurity Trainer',
    department: 'Academy',
    location: 'Lagos, Nigeria / Remote',
    type: 'Full-time',
    description: 'Develop and deliver hands-on cybersecurity training programs. Build lab environments and curriculum content.',
  },
  {
    title: 'Full-Stack Developer',
    department: 'Product',
    location: 'Remote (Global)',
    type: 'Full-time',
    description: 'Build and maintain our Compliance Board OS platform. React, TypeScript, Node.js, PostgreSQL experience preferred.',
  },
];

export default function CareersPage() {
  return (
    <>
      <Navbar />
      <div className="relative overflow-hidden">
        {/* Hero */}
        <div className="relative py-20">
          <div className="absolute inset-0 bg-cover bg-center opacity-[0.04]" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80)' }} />
          <div className="absolute inset-0 bg-gradient-to-b from-ctn-bg via-ctn-bg/90 to-ctn-bg" />
          <div className="relative max-w-7xl mx-auto px-6 lg:px-12 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <span className="inline-block text-xs font-mono uppercase tracking-[0.25em] text-ctn-blue border border-ctn-blue/20 rounded-full px-4 py-1.5 mb-6">
                We're Hiring
              </span>
              <h1 className="font-poppins text-4xl md:text-5xl font-bold text-ctn-text-bright mb-5 leading-tight">
                Defend the Digital World<br />
                <span className="text-ctn-blue">With Us</span>
              </h1>
              <p className="text-ctn-text-dim text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
                Join a team of elite cybersecurity professionals protecting organizations worldwide.
                Remote-first, mission-driven, and committed to your growth.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Culture Section */}
        <section className="py-16 border-t border-ctn-border">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
              <h2 className="font-poppins text-2xl md:text-3xl font-bold text-ctn-text-bright mb-4">Why CyberTech Nexus?</h2>
              <p className="text-ctn-text-dim max-w-xl mx-auto">We invest in our people because your growth is our strength.</p>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((b, i) => (
                <motion.div
                  key={b.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="p-6 rounded-xl border border-ctn-border bg-ctn-bg-elevated hover:border-ctn-blue/30 transition-all"
                >
                  <b.icon size={22} className="text-ctn-blue mb-3" />
                  <h3 className="font-poppins font-semibold text-ctn-text-bright mb-1.5">{b.title}</h3>
                  <p className="text-ctn-text-dim text-sm leading-relaxed">{b.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="py-16 border-t border-ctn-border">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
              <h2 className="font-poppins text-2xl md:text-3xl font-bold text-ctn-text-bright mb-4">Open Positions</h2>
              <p className="text-ctn-text-dim max-w-xl mx-auto">Find your next role. All positions include our full benefits package.</p>
            </motion.div>
            <div className="space-y-4">
              {openings.map((job, i) => (
                <motion.div
                  key={job.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="group p-6 rounded-xl border border-ctn-border bg-ctn-bg-elevated hover:border-ctn-blue/30 transition-all cursor-pointer"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-poppins font-semibold text-ctn-text-bright group-hover:text-ctn-blue transition-colors">{job.title}</h3>
                        <span className="text-[10px] font-mono uppercase tracking-wider text-ctn-blue bg-ctn-blue/10 px-2 py-0.5 rounded">{job.department}</span>
                      </div>
                      <p className="text-ctn-text-dim text-sm mb-3">{job.description}</p>
                      <div className="flex flex-wrap gap-4 text-xs text-ctn-text-dim">
                        <span className="flex items-center gap-1"><MapPin size={12} /> {job.location}</span>
                        <span className="flex items-center gap-1"><Clock size={12} /> {job.type}</span>
                        <span className="flex items-center gap-1"><Briefcase size={12} /> {job.department}</span>
                      </div>
                    </div>
                    <Link
                      to="/contact"
                      className="flex items-center gap-2 text-sm font-medium text-ctn-blue hover:text-white transition-colors no-underline whitespace-nowrap"
                    >
                      Apply Now <ArrowRight size={14} />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 border-t border-ctn-border">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="font-poppins text-2xl font-bold text-ctn-text-bright mb-4">Don't See Your Role?</h2>
            <p className="text-ctn-text-dim mb-6">We're always looking for exceptional talent. Send us your resume and tell us how you'd contribute.</p>
            <Link to="/contact" className="btn btn-primary px-8 py-3 no-underline">
              Get in Touch
            </Link>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
