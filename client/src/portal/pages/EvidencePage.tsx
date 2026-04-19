import { useState } from 'react';
import { FileText, Upload, Search, Filter, CheckCircle, Clock, AlertTriangle, FolderOpen, Image, FileCode, File } from 'lucide-react';

type EvidenceStatus = 'current' | 'expiring' | 'expired' | 'pending';
const statusStyle: Record<EvidenceStatus, { color: string; label: string }> = {
  current: { color: '#22c55e', label: 'CURRENT' },
  expiring: { color: '#ffb039', label: 'EXPIRING' },
  expired: { color: '#ff3b5c', label: 'EXPIRED' },
  pending: { color: '#5a7a8a', label: 'PENDING' },
};

const typeIcon: Record<string, any> = { pdf: FileText, screenshot: Image, config: FileCode, log: File, policy: FileText, report: FileText };

const evidence = [
  { id: 'EV-001', name: 'AWS IAM Policy Configuration', framework: 'ISO 27001', control: 'A.9.2', type: 'config', source: 'AWS (Auto)', status: 'current' as EvidenceStatus, collected: '2026-04-18', expires: '2026-07-18', size: '12 KB' },
  { id: 'EV-002', name: 'Employee Background Check Records', framework: 'ISO 27001', control: 'A.7.1', type: 'pdf', source: 'Manual Upload', status: 'current' as EvidenceStatus, collected: '2026-04-01', expires: '2027-04-01', size: '2.4 MB' },
  { id: 'EV-003', name: 'Penetration Test Report — Q1 2026', framework: 'Multi', control: 'Various', type: 'report', source: 'Manual Upload', status: 'current' as EvidenceStatus, collected: '2026-03-28', expires: '2027-03-28', size: '8.7 MB' },
  { id: 'EV-004', name: 'Encryption at Rest Configuration', framework: 'HIPAA', control: '§164.312(a)', type: 'config', source: 'AWS (Auto)', status: 'current' as EvidenceStatus, collected: '2026-04-18', expires: '2026-07-18', size: '4 KB' },
  { id: 'EV-005', name: 'Access Review Log — Engineering', framework: 'ISO 27001', control: 'A.9.2', type: 'log', source: 'Okta (Auto)', status: 'current' as EvidenceStatus, collected: '2026-04-18', expires: '2026-07-18', size: '156 KB' },
  { id: 'EV-006', name: 'Information Security Policy v4.2', framework: 'Multi', control: 'Various', type: 'policy', source: 'Manual Upload', status: 'current' as EvidenceStatus, collected: '2026-02-15', expires: '2027-02-15', size: '1.2 MB' },
  { id: 'EV-007', name: 'Vulnerability Scan Results — Prod', framework: 'PCI DSS', control: '11.2', type: 'report', source: 'Qualys (Auto)', status: 'current' as EvidenceStatus, collected: '2026-04-17', expires: '2026-05-17', size: '340 KB' },
  { id: 'EV-008', name: 'Data Processing Agreement — Slack', framework: 'GDPR', control: 'Art. 28', type: 'pdf', source: 'Manual Upload', status: 'expiring' as EvidenceStatus, collected: '2025-06-01', expires: '2026-06-01', size: '890 KB' },
  { id: 'EV-009', name: 'Business Continuity Plan', framework: 'Multi', control: 'Various', type: 'policy', source: 'Manual Upload', status: 'expiring' as EvidenceStatus, collected: '2025-05-15', expires: '2026-05-15', size: '3.1 MB' },
  { id: 'EV-010', name: 'Security Awareness Training Completion', framework: 'Multi', control: 'Various', type: 'screenshot', source: 'Manual Upload', status: 'expired' as EvidenceStatus, collected: '2025-01-20', expires: '2026-01-20', size: '780 KB' },
];

export default function EvidencePage() {
  const [search, setSearch] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const filtered = evidence.filter((e) =>
    (filterStatus === 'all' || e.status === filterStatus) &&
    (e.name.toLowerCase().includes(search.toLowerCase()) || e.framework.toLowerCase().includes(search.toLowerCase()))
  );

  const stats = {
    total: evidence.length,
    auto: evidence.filter((e) => e.source.includes('Auto')).length,
    expiring: evidence.filter((e) => e.status === 'expiring').length,
    expired: evidence.filter((e) => e.status === 'expired').length,
  };

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-poppins font-bold text-2xl text-white">Evidence Library</h1>
          <p className="font-poppins text-sm text-[#5a7a8a] mt-1">{stats.total} items · {stats.auto} auto-collected · {stats.expiring} expiring soon</p>
        </div>
        <button className="flex items-center gap-2 bg-gradient-to-r from-ctn-blue to-[#1050cc] text-white font-poppins font-semibold text-xs py-2.5 px-5 rounded-lg border-none cursor-pointer">
          <Upload size={14} /> Upload Evidence
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-4">
        {[
          { label: 'Total Evidence', value: stats.total, icon: FolderOpen, color: '#1a6bff' },
          { label: 'Auto-Collected', value: stats.auto, icon: CheckCircle, color: '#22c55e' },
          { label: 'Expiring Soon', value: stats.expiring, icon: Clock, color: '#ffb039' },
          { label: 'Expired', value: stats.expired, icon: AlertTriangle, color: '#ff3b5c' },
        ].map((s) => {
          const Icon = s.icon;
          return (
            <div key={s.label} className="bg-[#0a1525] border border-white/[0.06] rounded-xl p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="font-poppins text-[10px] text-[#5a7a8a]">{s.label}</span>
                <Icon size={14} style={{ color: s.color }} />
              </div>
              <span className="font-poppins font-bold text-xl text-white">{s.value}</span>
            </div>
          );
        })}
      </div>

      {/* Filters */}
      <div className="flex gap-3">
        <div className="flex items-center gap-2 bg-white/[0.04] border border-white/[0.06] rounded-lg px-3 py-2 w-80">
          <Search size={14} className="text-[#5a7a8a]" />
          <input type="text" placeholder="Search evidence..." value={search} onChange={(e) => setSearch(e.target.value)}
            className="bg-transparent border-none outline-none text-sm text-white placeholder:text-[#3a5a6a] font-poppins w-full" />
        </div>
        <select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)}
          className="bg-[#0a1525] border border-white/[0.08] rounded-lg px-3 py-2 text-xs text-white font-poppins focus:outline-none focus:border-ctn-blue/40">
          <option value="all">All Statuses</option>
          <option value="current">Current</option><option value="expiring">Expiring</option><option value="expired">Expired</option><option value="pending">Pending</option>
        </select>
      </div>

      {/* Table */}
      <div className="bg-[#0a1525] border border-white/[0.06] rounded-xl overflow-hidden">
        <div className="grid grid-cols-[50px_1fr_80px_70px_90px_90px_80px_70px] gap-3 px-5 py-3 border-b border-white/[0.06] font-poppins text-[10px] text-[#5a7a8a] uppercase tracking-wider">
          <span>ID</span><span>Evidence</span><span>Framework</span><span>Control</span><span>Source</span><span>Collected</span><span>Status</span><span>Size</span>
        </div>
        {filtered.map((e) => {
          const st = statusStyle[e.status];
          const TypeIcon = typeIcon[e.type] || File;
          return (
            <div key={e.id} className="grid grid-cols-[50px_1fr_80px_70px_90px_90px_80px_70px] gap-3 px-5 py-3.5 border-b border-white/[0.03] hover:bg-white/[0.02] cursor-pointer items-center">
              <span className="font-mono text-[10px] text-[#5a7a8a]">{e.id}</span>
              <div className="flex items-center gap-2">
                <TypeIcon size={14} className="text-ctn-blue flex-shrink-0" />
                <span className="font-poppins text-sm text-white truncate">{e.name}</span>
              </div>
              <span className="font-mono text-[9px] text-ctn-blue">{e.framework}</span>
              <span className="font-mono text-[9px] text-[#5a7a8a]">{e.control}</span>
              <span className={`font-mono text-[9px] ${e.source.includes('Auto') ? 'text-green-400' : 'text-[#5a7a8a]'}`}>{e.source}</span>
              <span className="font-mono text-[10px] text-[#5a7a8a]">{e.collected}</span>
              <span className="font-mono text-[8px] px-2 py-0.5 rounded text-center" style={{ color: st.color, background: st.color + '15' }}>{st.label}</span>
              <span className="font-mono text-[10px] text-[#5a7a8a]">{e.size}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
