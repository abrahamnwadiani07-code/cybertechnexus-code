import { useState } from 'react';
import { AlertTriangle, Filter } from 'lucide-react';
import { risks, type RiskSeverity, type RiskStatus } from '../data/mockData';

const sevColor: Record<RiskSeverity, string> = { critical: '#ff3b5c', high: '#ff6b35', medium: '#ffb039', low: '#1a6bff' };
const statusColor: Record<RiskStatus, string> = { open: '#ff3b5c', mitigating: '#ffb039', accepted: '#5a7a8a', closed: '#22c55e' };

export default function RisksPage() {
  const [filterSev, setFilterSev] = useState<string>('all');
  const [filterStatus, setFilterStatus] = useState<string>('all');

  const filtered = risks.filter((r) =>
    (filterSev === 'all' || r.severity === filterSev) &&
    (filterStatus === 'all' || r.status === filterStatus)
  );

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-poppins font-bold text-2xl text-white">Risk Register</h1>
          <p className="font-poppins text-sm text-[#5a7a8a] mt-1">{risks.length} risks tracked · {risks.filter((r) => r.status === 'open').length} open</p>
        </div>
        <button className="flex items-center gap-2 bg-gradient-to-r from-ctn-blue to-[#1050cc] text-white font-poppins font-semibold text-xs py-2.5 px-5 rounded-lg border-none cursor-pointer">
          + Add Risk
        </button>
      </div>

      {/* Filters */}
      <div className="flex gap-3">
        <select value={filterSev} onChange={(e) => setFilterSev(e.target.value)}
          className="bg-[#0a1525] border border-white/[0.08] rounded-lg px-3 py-2 text-xs text-white font-poppins focus:outline-none focus:border-ctn-blue/40">
          <option value="all">All Severities</option>
          <option value="critical">Critical</option><option value="high">High</option>
          <option value="medium">Medium</option><option value="low">Low</option>
        </select>
        <select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)}
          className="bg-[#0a1525] border border-white/[0.08] rounded-lg px-3 py-2 text-xs text-white font-poppins focus:outline-none focus:border-ctn-blue/40">
          <option value="all">All Statuses</option>
          <option value="open">Open</option><option value="mitigating">Mitigating</option>
          <option value="accepted">Accepted</option><option value="closed">Closed</option>
        </select>
      </div>

      {/* Table */}
      <div className="bg-[#0a1525] border border-white/[0.06] rounded-xl overflow-hidden">
        <div className="grid grid-cols-[60px_1fr_80px_90px_80px_70px_90px] gap-4 px-5 py-3 border-b border-white/[0.06] font-poppins text-[10px] text-[#5a7a8a] uppercase tracking-wider">
          <span>ID</span><span>Risk</span><span>Severity</span><span>Status</span><span>Score</span><span>Owner</span><span>Due</span>
        </div>
        {filtered.map((r) => (
          <div key={r.id} className="grid grid-cols-[60px_1fr_80px_90px_80px_70px_90px] gap-4 px-5 py-3.5 border-b border-white/[0.03] hover:bg-white/[0.02] cursor-pointer items-center">
            <span className="font-mono text-xs text-[#5a7a8a]">{r.id}</span>
            <div>
              <p className="font-poppins text-sm text-white truncate">{r.title}</p>
              <span className="font-mono text-[9px] text-[#3a5a6a]">{r.category}</span>
            </div>
            <span className="font-mono text-[9px] px-2 py-0.5 rounded text-center" style={{ color: sevColor[r.severity], background: sevColor[r.severity] + '15' }}>
              {r.severity.toUpperCase()}
            </span>
            <span className="font-mono text-[9px] px-2 py-0.5 rounded text-center" style={{ color: statusColor[r.status], background: statusColor[r.status] + '15' }}>
              {r.status.toUpperCase()}
            </span>
            <div className="flex items-center gap-1">
              <div className="w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold" style={{ background: sevColor[r.severity] + '20', color: sevColor[r.severity] }}>
                {r.score}
              </div>
            </div>
            <span className="font-poppins text-[10px] text-[#5a7a8a] truncate">{r.owner}</span>
            <span className="font-mono text-[10px] text-[#5a7a8a]">{r.dueDate}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
