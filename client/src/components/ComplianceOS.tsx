import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Shield, CheckCircle, AlertTriangle, XCircle, Clock,
  TrendingUp, Eye, FileCheck, BarChart3, Lock, RefreshCw,
  ChevronRight, Zap, Globe
} from 'lucide-react';

const frameworks = [
  { id: 'dora', name: 'DORA', progress: 94, controls: 87, total: 93, status: 'on-track' },
  { id: 'iso27001', name: 'ISO 27001', progress: 88, controls: 102, total: 116, status: 'on-track' },
  { id: 'gdpr', name: 'GDPR', progress: 91, controls: 64, total: 70, status: 'on-track' },
  { id: 'hipaa', name: 'HIPAA', progress: 76, controls: 41, total: 54, status: 'attention' },
  { id: 'pci', name: 'PCI DSS', progress: 82, controls: 198, total: 242, status: 'on-track' },
  { id: 'nist', name: 'NIST CSF', progress: 69, controls: 72, total: 104, status: 'attention' },
];

const activities = [
  { icon: CheckCircle, text: 'Access review completed — Engineering team', time: '2 min ago', color: '#1a6bff' },
  { icon: AlertTriangle, text: 'HIPAA control gap detected — Encryption at rest', time: '18 min ago', color: '#ffb039' },
  { icon: Shield, text: 'Penetration test report uploaded — Q1 2026', time: '1 hr ago', color: '#3d9eff' },
  { icon: RefreshCw, text: 'Automated evidence collection — 142 artifacts synced', time: '2 hr ago', color: '#1a6bff' },
  { icon: XCircle, text: 'Vendor risk assessment overdue — CloudDB Provider', time: '4 hr ago', color: '#ff3b5c' },
];

const metrics = [
  { label: 'Controls Passing', value: '564', sub: '/ 679', icon: CheckCircle, color: '#1a6bff' },
  { label: 'Open Findings', value: '12', sub: 'critical: 2', icon: AlertTriangle, color: '#ffb039' },
  { label: 'Evidence Items', value: '1,847', sub: 'auto-collected', icon: FileCheck, color: '#3d9eff' },
  { label: 'Audit Readiness', value: '89%', sub: '+4% this month', icon: TrendingUp, color: '#1a6bff' },
];

const features = [
  {
    icon: RefreshCw,
    title: 'Automated Evidence Collection',
    description: 'Continuously sync evidence from AWS, Azure, GCP, GitHub, Jira, and 50+ integrations. No more screenshot-hunting before audits.',
  },
  {
    icon: Eye,
    title: 'Real-Time Control Monitoring',
    description: 'Know the moment a control fails. Automated checks run 24/7 across your infrastructure with instant alerts.',
  },
  {
    icon: BarChart3,
    title: 'Multi-Framework Mapping',
    description: 'Map controls once, satisfy multiple frameworks. One control can cover ISO 27001, GDPR, and HIPAA simultaneously.',
  },
  {
    icon: Lock,
    title: 'Audit-Ready Reporting',
    description: 'Generate auditor-ready reports in one click. Complete with evidence packages, control narratives, and gap analysis.',
  },
];

function ProgressRing({ progress, size = 52, strokeWidth = 4, color }: { progress: number; size?: number; strokeWidth?: number; color: string }) {
  const r = (size - strokeWidth) / 2;
  const circ = 2 * Math.PI * r;
  const offset = circ - (progress / 100) * circ;
  return (
    <svg width={size} height={size} style={{ transform: 'rotate(-90deg)' }}>
      <circle cx={size/2} cy={size/2} r={r} fill="none" strokeWidth={strokeWidth} stroke="rgba(0,255,135,0.08)" />
      <circle cx={size/2} cy={size/2} r={r} fill="none" strokeWidth={strokeWidth} stroke={color}
        strokeDasharray={circ} strokeDashoffset={offset} strokeLinecap="round" style={{ transition: 'stroke-dashoffset 1s ease' }} />
    </svg>
  );
}

export default function ComplianceOS() {
  const [activeFramework, setActiveFramework] = useState('dora');
  const active = frameworks.find((f) => f.id === activeFramework)!;

  return (
    <section id="compliance-board-os" className="relative py-24 overflow-hidden">
      {/* Background image - governance/compliance */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.04]"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80)' }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ctn-bg via-ctn-bg/60 to-ctn-bg" />

    <div className="relative px-6 lg:px-12 max-w-7xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <span className="inline-block font-mono text-[11px] tracking-[0.25em] text-ctn-blue uppercase mb-3 px-3 py-1 border border-ctn-blue/20 rounded-full">
          Flagship Product
        </span>
        <h2 className="font-poppins font-bold text-3xl md:text-4xl lg:text-5xl text-ctn-text-bright mt-4 mb-4">
          Compliance <span className="text-ctn-blue text-glow-blue">Board OS</span>
        </h2>
        <p className="text-ctn-text-dim max-w-2xl mx-auto text-lg">
          One unified dashboard to manage every compliance framework, automate evidence collection, and stay audit-ready — continuously.
        </p>
      </motion.div>

      {/* Live Dashboard Preview */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="cyber-card overflow-hidden mb-12 box-glow-blue"
      >
        {/* Dashboard Header Bar */}
        <div className="bg-ctn-bg-1 border-b border-ctn-border px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-ctn-red/70" />
              <div className="w-3 h-3 rounded-full bg-ctn-amber/70" />
              <div className="w-3 h-3 rounded-full bg-ctn-blue/70" />
            </div>
            <span className="font-mono text-[11px] text-ctn-text-dim tracking-wider">compliance-board-os.cybertechnexus.com</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-ctn-blue rounded-full animate-pulse-blue" />
            <span className="font-mono text-[10px] text-ctn-blue">LIVE</span>
          </div>
        </div>

        <div className="p-6">
          {/* Metrics Row */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {metrics.map((m) => {
              const Icon = m.icon;
              return (
                <div key={m.label} className="bg-ctn-bg/60 border border-ctn-border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-poppins text-[11px] text-ctn-text-dim">{m.label}</span>
                    <Icon size={14} style={{ color: m.color }} />
                  </div>
                  <div className="flex items-baseline gap-1.5">
                    <span className="font-poppins font-bold text-xl" style={{ color: m.color }}>{m.value}</span>
                    <span className="font-mono text-[10px] text-ctn-text-dim">{m.sub}</span>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Framework Cards */}
            <div className="lg:col-span-2">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-poppins font-semibold text-sm text-ctn-text-bright">Framework Status</h3>
                <span className="font-mono text-[10px] text-ctn-text-dim">{frameworks.length} active</span>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {frameworks.map((fw) => (
                  <button
                    key={fw.id}
                    onClick={() => setActiveFramework(fw.id)}
                    className={`text-left bg-ctn-bg/60 border rounded-lg p-4 transition-all cursor-pointer ${
                      activeFramework === fw.id
                        ? 'border-ctn-blue/40 bg-ctn-blue/5'
                        : 'border-ctn-border hover:border-ctn-blue/20'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-poppins font-semibold text-sm text-ctn-text-bright">{fw.name}</span>
                      <ProgressRing
                        progress={fw.progress}
                        size={36}
                        strokeWidth={3}
                        color={fw.status === 'attention' ? '#ffb039' : '#1a6bff'}
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[10px] text-ctn-text-dim">
                        {fw.controls}/{fw.total} controls
                      </span>
                      <span className={`font-mono text-[9px] tracking-wider px-1.5 py-0.5 rounded ${
                        fw.status === 'attention'
                          ? 'text-ctn-amber bg-ctn-amber/10'
                          : 'text-ctn-blue bg-ctn-blue/10'
                      }`}>
                        {fw.status === 'attention' ? 'ATTENTION' : 'ON TRACK'}
                      </span>
                    </div>
                  </button>
                ))}
              </div>

              {/* Active framework detail */}
              <div className="mt-4 bg-ctn-bg/60 border border-ctn-border rounded-lg p-5">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-poppins font-semibold text-ctn-text-bright">{active.name} Detail</h4>
                  <span className="font-poppins font-bold text-2xl text-ctn-blue">{active.progress}%</span>
                </div>
                <div className="w-full h-2 bg-ctn-blue/10 rounded-full overflow-hidden mb-3">
                  <motion.div
                    className="h-full rounded-full"
                    style={{ background: active.status === 'attention' ? '#ffb039' : '#1a6bff' }}
                    initial={{ width: 0 }}
                    animate={{ width: `${active.progress}%` }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                  />
                </div>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="font-poppins font-bold text-lg text-ctn-blue">{active.controls}</div>
                    <div className="font-mono text-[9px] text-ctn-text-dim">Passing</div>
                  </div>
                  <div>
                    <div className="font-poppins font-bold text-lg text-ctn-amber">{active.total - active.controls}</div>
                    <div className="font-mono text-[9px] text-ctn-text-dim">Gaps</div>
                  </div>
                  <div>
                    <div className="font-poppins font-bold text-lg text-ctn-text-bright">{active.total}</div>
                    <div className="font-mono text-[9px] text-ctn-text-dim">Total</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Activity Feed */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-poppins font-semibold text-sm text-ctn-text-bright">Activity Feed</h3>
                <Clock size={14} className="text-ctn-text-dim" />
              </div>
              <div className="space-y-3">
                {activities.map((a, i) => {
                  const Icon = a.icon;
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08 }}
                      className="bg-ctn-bg/60 border border-ctn-border rounded-lg p-3 flex gap-3"
                    >
                      <Icon size={14} style={{ color: a.color }} className="flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-poppins text-[11px] text-ctn-text leading-snug">{a.text}</p>
                        <span className="font-mono text-[9px] text-ctn-text-dim">{a.time}</span>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
        {features.map((f, i) => {
          const Icon = f.icon;
          return (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="cyber-card p-6"
            >
              <div className="w-10 h-10 rounded-lg bg-ctn-blue/10 border border-ctn-blue/20 flex items-center justify-center mb-4">
                <Icon size={18} className="text-ctn-blue" />
              </div>
              <h3 className="font-poppins font-semibold text-sm text-ctn-text-bright mb-2">{f.title}</h3>
              <p className="text-ctn-text-dim text-[13px] leading-relaxed">{f.description}</p>
            </motion.div>
          );
        })}
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="cyber-card p-10 text-center box-glow-blue"
      >
        <Zap size={28} className="text-ctn-blue mx-auto mb-4" />
        <h3 className="font-poppins font-bold text-xl text-ctn-text-bright mb-3">
          Ready to automate your compliance?
        </h3>
        <p className="text-ctn-text-dim text-sm mb-6 max-w-lg mx-auto">
          Join 200+ organizations using Compliance Board OS to stay audit-ready. Get a personalized demo from our team.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="btn btn-primary text-sm py-3.5 px-8 no-underline"
          >
            <Globe size={16} /> Request a Demo
          </a>
          <a
            href="#health-check"
            onClick={(e) => { e.preventDefault(); document.querySelector('#health-check')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="btn btn-secondary text-sm py-3.5 px-8 no-underline"
          >
            Free Health Check First <ChevronRight size={14} />
          </a>
        </div>
      </motion.div>
    </div>
    </section>
  );
}
