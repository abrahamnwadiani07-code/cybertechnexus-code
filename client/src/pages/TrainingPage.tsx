import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { GraduationCap, ShieldCheck, Globe, Award, CheckCircle, Users, BarChart3, ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const programs = [
  {
    icon: ShieldCheck, title: 'Cybersecurity Certification Program',
    description: 'Intensive, hands-on training covering ethical hacking, threat intelligence, security operations, and incident response. Prepare for industry certifications.',
    duration: '12 weeks', format: 'Hybrid (online + labs)', level: 'Intermediate–Advanced',
    topics: ['Ethical Hacking & Penetration Testing', 'Threat Intelligence & Analysis', 'Security Operations & Monitoring', 'Incident Response Procedures', 'Malware Analysis Fundamentals', 'CEH / OSCP Exam Prep'],
  },
  {
    icon: Globe, title: 'Practical IT Skills Training',
    description: 'Build the foundational IT skills needed for a cybersecurity career. Networking, cloud infrastructure, system administration, and technical support.',
    duration: '8 weeks', format: 'Online + hands-on labs', level: 'Beginner–Intermediate',
    topics: ['Networking Fundamentals (TCP/IP, DNS, DHCP)', 'Cloud Infrastructure (AWS, Azure basics)', 'System Administration (Windows & Linux)', 'Technical Support & Troubleshooting', 'Virtualization & Containerization', 'IT Security Basics'],
  },
  {
    icon: Award, title: 'GRC Training Program',
    description: 'Master governance, risk, and compliance frameworks. ISO 27001, NIST, GDPR, and business risk management for security and compliance professionals.',
    duration: '6 weeks', format: 'Online + case studies', level: 'Intermediate',
    topics: ['ISO 27001 Lead Implementer/Auditor', 'NIST CSF & RMF Frameworks', 'GDPR & Data Privacy', 'Risk Assessment Methodologies', 'Policy & Procedure Development', 'Audit Preparation & Evidence Management'],
  },
];

const stats = [
  { value: '72%', label: 'Avg phishing click reduction' },
  { value: '500+', label: 'Professionals trained' },
  { value: '95%', label: 'Certification pass rate' },
  { value: '4.9/5', label: 'Student satisfaction' },
];

export default function TrainingPage() {
  return (
    <>
      <Navbar />
      <div className="relative overflow-hidden">
        {/* Hero */}
        <div className="relative py-20">
          <div className="absolute inset-0 bg-cover bg-center opacity-[0.05]" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1920&q=80)' }} />
          <div className="absolute inset-0 bg-gradient-to-b from-ctn-bg via-ctn-bg/90 to-ctn-bg" />
          <div className="relative px-6 lg:px-12 max-w-7xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <GraduationCap size={40} className="text-ctn-blue mx-auto mb-4" />
              <span className="inline-block font-mono text-[11px] tracking-[0.25em] text-ctn-blue uppercase mb-3 px-3 py-1 border border-ctn-blue/20 rounded-full">Cyber Protection Academy</span>
              <h1 className="font-poppins font-bold text-4xl md:text-5xl text-ctn-text-bright mt-4 mb-4">
                Train Your Team, <span className="text-ctn-blue text-glow-blue">Strengthen</span> Your Defense
              </h1>
              <p className="text-ctn-text-dim max-w-2xl mx-auto text-lg">Hands-on cybersecurity, IT, and GRC training programs that build real skills and security-first culture.</p>
            </motion.div>
          </div>
        </div>

        {/* Stats */}
        <div className="px-6 lg:px-12 max-w-4xl mx-auto mb-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((s, i) => (
              <motion.div key={s.label} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="cyber-card p-5 text-center">
                <div className="font-poppins font-bold text-2xl text-ctn-blue mb-1">{s.value}</div>
                <div className="font-poppins text-xs text-ctn-text-dim">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Programs */}
        <div className="px-6 lg:px-12 max-w-7xl mx-auto pb-24">
          <div className="space-y-8">
            {programs.map((prog, i) => {
              const Icon = prog.icon;
              return (
                <motion.div key={prog.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 + i * 0.1 }} className="cyber-card p-8">
                  <div className="grid lg:grid-cols-[2fr_1fr] gap-8">
                    <div>
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-xl bg-ctn-blue/10 border border-ctn-blue/20 flex items-center justify-center">
                          <Icon size={24} className="text-ctn-blue" />
                        </div>
                        <div>
                          <h2 className="font-poppins font-semibold text-xl text-ctn-text-bright">{prog.title}</h2>
                          <div className="flex gap-3 mt-1">
                            <span className="font-mono text-[9px] text-ctn-blue tracking-wider">{prog.duration}</span>
                            <span className="font-mono text-[9px] text-ctn-text-dim tracking-wider">{prog.format}</span>
                            <span className="font-mono text-[9px] text-ctn-text-dim tracking-wider">{prog.level}</span>
                          </div>
                        </div>
                      </div>
                      <p className="text-ctn-text-dim text-sm leading-relaxed mb-6">{prog.description}</p>
                      <Link to="/#contact" className="btn btn-primary text-xs py-2.5 px-6 no-underline inline-flex">
                        Enroll Now <ArrowRight size={12} />
                      </Link>
                    </div>
                    <div>
                      <h3 className="font-poppins font-semibold text-sm text-ctn-text-bright mb-3">Curriculum</h3>
                      <div className="space-y-2">
                        {prog.topics.map((t) => (
                          <div key={t} className="flex items-start gap-2">
                            <CheckCircle size={14} className="text-ctn-blue flex-shrink-0 mt-0.5" />
                            <span className="font-poppins text-sm text-ctn-text-dim">{t}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
