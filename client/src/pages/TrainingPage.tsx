import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { GraduationCap, ShieldCheck, Globe, Award, CheckCircle, Users, BarChart3, ArrowRight, Star, Shield, Lock, FileCheck, Server, Zap, Target, BookOpen } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import SEO from '@/components/SEO';

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

const ctnCertifications = [
  {
    id: 'ccse',
    icon: Shield,
    badge: 'CCSE',
    title: 'CTN Certified Cybersecurity Engineer',
    tagline: 'Master offensive and defensive security operations',
    level: 'Advanced',
    duration: '16 weeks',
    format: 'Hybrid (online + live labs + capstone project)',
    price: '$4,500',
    description: 'The flagship CTN certification for security engineers. Covers red team and blue team operations, advanced threat detection, zero-trust architecture, cloud security, and incident handling. Graduates gain hands-on experience through real-world lab scenarios and a live capstone engagement.',
    modules: [
      'Advanced Penetration Testing & Red Teaming',
      'Threat Hunting & Detection Engineering',
      'Zero Trust Architecture Design',
      'Cloud Security (AWS, Azure, GCP)',
      'SIEM/SOAR Automation & Orchestration',
      'Malware Reverse Engineering',
      'Secure Code Review & AppSec',
      'Capstone: Live Security Engagement',
    ],
    outcomes: ['Design and implement enterprise security architectures', 'Lead penetration testing and red team operations', 'Build automated detection and response pipelines', 'Respond to and contain advanced persistent threats'],
    prerequisites: ['2+ years cybersecurity experience', 'Networking & Linux fundamentals', 'Basic scripting (Python or Bash)'],
  },
  {
    id: 'cgrc',
    icon: FileCheck,
    badge: 'CGRCS',
    title: 'CTN Certified GRC Specialist',
    tagline: 'Lead compliance programs and manage organizational risk',
    level: 'Intermediate–Advanced',
    duration: '12 weeks',
    format: 'Online + case studies + mock audits',
    price: '$3,200',
    description: 'Become the go-to expert for governance, risk, and compliance in your organization. This certification covers all major frameworks, risk assessment methodologies, policy development, audit management, and vendor risk. Includes hands-on practice with CTN Compliance Board OS.',
    modules: [
      'GRC Foundations & Enterprise Risk Management',
      'ISO 27001 Implementation & Audit',
      'SOC 2 Type I & II Readiness',
      'GDPR, HIPAA & Data Privacy Laws',
      'NIST CSF & RMF Deep Dive',
      'PCI DSS & Financial Compliance',
      'Third-Party/Vendor Risk Management',
      'Capstone: Mock Audit & Compliance Roadmap',
    ],
    outcomes: ['Implement ISO 27001 from scratch', 'Prepare organizations for SOC 2 and HIPAA audits', 'Build enterprise risk registers and treatment plans', 'Manage compliance programs across multiple frameworks'],
    prerequisites: ['1+ years IT/security experience', 'Basic understanding of security controls', 'No prior GRC experience required'],
  },
  {
    id: 'cthr',
    icon: Target,
    badge: 'CTHR',
    title: 'CTN Certified Threat Hunter',
    tagline: 'Proactively find adversaries hiding in your network',
    level: 'Advanced',
    duration: '10 weeks',
    format: 'Online + threat hunting labs',
    price: '$3,800',
    description: 'Go beyond detection rules and alerts. Learn hypothesis-driven threat hunting, behavioral analysis, MITRE ATT&CK mapping, and advanced forensics. Graduates can proactively identify threats that evade automated defenses.',
    modules: [
      'Threat Hunting Methodologies & Frameworks',
      'MITRE ATT&CK Tactics & Techniques',
      'Log Analysis & Anomaly Detection',
      'Endpoint Detection & Memory Forensics',
      'Network Traffic Analysis & Packet Inspection',
      'Threat Intelligence Integration',
      'Building Hunting Playbooks',
      'Capstone: Multi-Stage APT Hunt',
    ],
    outcomes: ['Conduct hypothesis-driven threat hunts', 'Map adversary behavior to MITRE ATT&CK', 'Analyze endpoints and network traffic for IOCs', 'Build repeatable hunting playbooks for SOC teams'],
    prerequisites: ['2+ years in SOC/security operations', 'Experience with SIEM platforms', 'Understanding of common attack techniques'],
  },
  {
    id: 'ccir',
    icon: Zap,
    badge: 'CCIR',
    title: 'CTN Certified Incident Responder',
    tagline: 'Contain, investigate, and recover from security breaches',
    level: 'Advanced',
    duration: '10 weeks',
    format: 'Online + live incident simulations',
    price: '$3,500',
    description: 'Train to respond to real-world security incidents under pressure. Covers the full IR lifecycle: preparation, detection, containment, eradication, recovery, and post-incident review. Includes live tabletop exercises and breach simulations.',
    modules: [
      'Incident Response Lifecycle & Planning',
      'Digital Forensics Fundamentals',
      'Windows & Linux Forensic Analysis',
      'Ransomware Response & Recovery',
      'Business Email Compromise Investigation',
      'Evidence Collection & Chain of Custody',
      'Crisis Communication & Stakeholder Management',
      'Capstone: Live Breach Simulation',
    ],
    outcomes: ['Lead incident response from detection to recovery', 'Perform forensic analysis on compromised systems', 'Handle ransomware, BEC, and data breach scenarios', 'Write executive incident reports and lead post-mortems'],
    prerequisites: ['2+ years security/IT experience', 'Familiarity with Windows & Linux administration', 'Basic networking knowledge'],
  },
  {
    id: 'ccsa',
    icon: Lock,
    badge: 'CCSA',
    title: 'CTN Certified Security Analyst',
    tagline: 'Your entry point into professional cybersecurity',
    level: 'Beginner–Intermediate',
    duration: '10 weeks',
    format: 'Online + virtual labs',
    price: '$2,800',
    description: 'The ideal starting certification for aspiring security professionals. Covers security fundamentals, SOC operations, vulnerability management, basic incident handling, and security tool proficiency. No prior security experience required.',
    modules: [
      'Cybersecurity Fundamentals & Threat Landscape',
      'Network Security & Defense Architecture',
      'Security Operations Center (SOC) Workflows',
      'Vulnerability Scanning & Management',
      'Security Information & Event Management (SIEM)',
      'Basic Incident Handling & Triage',
      'Security Tools Proficiency (Nmap, Wireshark, Burp)',
      'Capstone: SOC Analyst Simulation',
    ],
    outcomes: ['Monitor and triage security alerts effectively', 'Perform vulnerability assessments and reporting', 'Operate SIEM and basic security tools confidently', 'Understand the threat landscape and common attack vectors'],
    prerequisites: ['Basic IT knowledge (networking, OS concepts)', 'No prior security experience required', 'Curiosity and willingness to learn'],
  },
  {
    id: 'cccs',
    icon: Server,
    badge: 'CCCS',
    title: 'CTN Certified Cloud Security Specialist',
    tagline: 'Secure multi-cloud environments at scale',
    level: 'Intermediate–Advanced',
    duration: '12 weeks',
    format: 'Online + cloud lab environments',
    price: '$3,800',
    description: 'Specialize in securing AWS, Azure, and GCP environments. Covers IAM, network segmentation, container security, serverless security, compliance automation, and cloud-native incident response.',
    modules: [
      'Cloud Security Architecture Principles',
      'AWS Security (IAM, VPC, GuardDuty, Config)',
      'Azure Security (Defender, Sentinel, AD)',
      'GCP Security (Chronicle, BeyondCorp)',
      'Container & Kubernetes Security',
      'Serverless Security & API Protection',
      'Cloud Compliance Automation (Terraform, CloudFormation)',
      'Capstone: Multi-Cloud Security Assessment',
    ],
    outcomes: ['Architect secure multi-cloud environments', 'Implement least-privilege IAM and network controls', 'Automate compliance checks with IaC tools', 'Detect and respond to cloud-specific threats'],
    prerequisites: ['1+ years cloud experience (any provider)', 'Basic security knowledge', 'Familiarity with CLI tools'],
  },
];

const stats = [
  { value: '72%', label: 'Avg phishing click reduction' },
  { value: '1,200+', label: 'Professionals certified' },
  { value: '97%', label: 'Certification pass rate' },
  { value: '4.9/5', label: 'Student satisfaction' },
];

const certBenefits = [
  { icon: Award, title: 'Industry-Recognized', text: 'CTN certifications are recognized by employers across financial services, healthcare, tech, and government sectors.' },
  { icon: BookOpen, title: 'Hands-On Labs', text: 'Every certification includes 40+ hours of hands-on lab work in real-world environments — not just theory.' },
  { icon: Users, title: 'Expert Instructors', text: 'Learn from CISSP, OSCP, and CISM-certified practitioners with 10+ years of field experience.' },
  { icon: Star, title: 'Lifetime Access', text: 'Graduates get lifetime access to course materials, lab refreshers, and the CTN alumni network.' },
];

export default function TrainingPage() {
  return (
    <>
      <SEO title="Training & Certifications" description="CTN Cyber Protection Academy: professional cybersecurity certifications, hands-on training, and career development programs." path="/training" />
      <Navbar />
      <Breadcrumbs />
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
              <p className="text-ctn-text-dim max-w-2xl mx-auto text-lg">Hands-on cybersecurity training and industry-recognized CTN certifications that build real skills and security-first culture.</p>
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

        {/* ═══ CTN CERTIFICATIONS ═══ */}
        <section className="px-6 lg:px-12 max-w-7xl mx-auto pb-20">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <span className="inline-block font-mono text-[11px] tracking-[0.25em] text-ctn-blue uppercase mb-3 px-3 py-1 border border-ctn-blue/20 rounded-full">CTN Certification Program</span>
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-ctn-text-bright mt-4 mb-4">
              Official CTN <span className="text-ctn-blue">Certifications</span>
            </h2>
            <p className="text-ctn-text-dim max-w-2xl mx-auto">Validate your expertise with certifications designed by practitioners, for practitioners. Each includes hands-on labs, a capstone project, and a proctored exam.</p>
          </motion.div>

          {/* Cert Benefits */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {certBenefits.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="p-5 rounded-xl border border-ctn-border bg-ctn-bg-elevated text-center"
              >
                <b.icon size={22} className="text-ctn-blue mx-auto mb-3" />
                <h4 className="font-poppins font-semibold text-sm text-ctn-text-bright mb-1">{b.title}</h4>
                <p className="text-ctn-text-dim text-xs leading-relaxed">{b.text}</p>
              </motion.div>
            ))}
          </div>

          {/* Certification Cards */}
          <div className="space-y-6">
            {ctnCertifications.map((cert, i) => {
              const Icon = cert.icon;
              return (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="cyber-card p-8 overflow-hidden"
                >
                  {/* Header */}
                  <div className="flex flex-col lg:flex-row lg:items-start gap-6 mb-6">
                    <div className="flex items-center gap-4 flex-1">
                      <div className="w-14 h-14 rounded-xl bg-ctn-blue/10 border border-ctn-blue/20 flex items-center justify-center flex-shrink-0">
                        <Icon size={28} className="text-ctn-blue" />
                      </div>
                      <div>
                        <div className="flex items-center gap-3 flex-wrap">
                          <h3 className="font-poppins font-bold text-lg text-ctn-text-bright">{cert.title}</h3>
                          <span className="font-mono text-[10px] font-bold tracking-wider text-ctn-blue bg-ctn-blue/10 border border-ctn-blue/20 px-2.5 py-1 rounded-full">{cert.badge}</span>
                        </div>
                        <p className="text-ctn-text-dim text-sm mt-1">{cert.tagline}</p>
                        <div className="flex flex-wrap gap-3 mt-2">
                          <span className="font-mono text-[9px] text-ctn-blue tracking-wider">{cert.duration}</span>
                          <span className="font-mono text-[9px] text-ctn-text-dim tracking-wider">{cert.format}</span>
                          <span className="font-mono text-[9px] text-ctn-text-dim tracking-wider">{cert.level}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 flex-shrink-0">
                      <div className="text-right">
                        <div className="font-poppins font-bold text-xl text-ctn-text-bright">{cert.price}</div>
                        <div className="font-mono text-[9px] text-ctn-text-dim">full program</div>
                      </div>
                      <Link to="/contact" className="btn btn-primary text-xs py-2.5 px-5 no-underline whitespace-nowrap">
                        Enroll Now
                      </Link>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-ctn-text-dim text-sm leading-relaxed mb-6">{cert.description}</p>

                  {/* Content Grid */}
                  <div className="grid lg:grid-cols-3 gap-6">
                    {/* Modules */}
                    <div>
                      <h4 className="font-poppins font-semibold text-sm text-ctn-text-bright mb-3">Modules</h4>
                      <div className="space-y-2">
                        {cert.modules.map((m, j) => (
                          <div key={m} className="flex items-start gap-2">
                            <span className="font-mono text-[9px] text-ctn-blue w-4 flex-shrink-0 mt-1">{String(j + 1).padStart(2, '0')}</span>
                            <span className="font-poppins text-xs text-ctn-text-dim">{m}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Outcomes */}
                    <div>
                      <h4 className="font-poppins font-semibold text-sm text-ctn-text-bright mb-3">What You'll Achieve</h4>
                      <div className="space-y-2">
                        {cert.outcomes.map((o) => (
                          <div key={o} className="flex items-start gap-2">
                            <CheckCircle size={13} className="text-green-400 flex-shrink-0 mt-0.5" />
                            <span className="font-poppins text-xs text-ctn-text-dim">{o}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Prerequisites */}
                    <div>
                      <h4 className="font-poppins font-semibold text-sm text-ctn-text-bright mb-3">Prerequisites</h4>
                      <div className="space-y-2">
                        {cert.prerequisites.map((p) => (
                          <div key={p} className="flex items-start gap-2">
                            <ArrowRight size={11} className="text-ctn-text-dim flex-shrink-0 mt-1" />
                            <span className="font-poppins text-xs text-ctn-text-dim">{p}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* ═══ TRAINING PROGRAMS (existing) ═══ */}
        <section className="px-6 lg:px-12 max-w-7xl mx-auto pb-20 border-t border-ctn-border pt-20">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="font-poppins font-bold text-3xl text-ctn-text-bright mb-4">Skills Training Programs</h2>
            <p className="text-ctn-text-dim max-w-xl mx-auto">Foundational programs for teams and individuals looking to build core competencies.</p>
          </motion.div>

          <div className="space-y-8">
            {programs.map((prog, i) => {
              const Icon = prog.icon;
              return (
                <motion.div key={prog.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="cyber-card p-8">
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
                      <Link to="/contact" className="btn btn-primary text-xs py-2.5 px-6 no-underline inline-flex">
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
        </section>

        {/* CTA */}
        <section className="px-6 lg:px-12 max-w-3xl mx-auto pb-24 text-center">
          <div className="cyber-card p-10 box-glow-blue">
            <GraduationCap size={32} className="text-ctn-blue mx-auto mb-4" />
            <h2 className="font-poppins font-bold text-2xl text-ctn-text-bright mb-3">Ready to Get Certified?</h2>
            <p className="text-ctn-text-dim text-sm mb-6 max-w-lg mx-auto">Join 1,200+ professionals who have advanced their careers with CTN certifications. Group discounts available for teams of 5+.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link to="/contact" className="btn btn-primary text-sm py-3 px-8 no-underline">Talk to Admissions</Link>
              <Link to="/pricing" className="btn btn-secondary text-sm py-3 px-8 no-underline">View Pricing</Link>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
