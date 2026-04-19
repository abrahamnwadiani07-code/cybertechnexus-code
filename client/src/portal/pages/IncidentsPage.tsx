import { Activity, Clock } from 'lucide-react';
import { incidents } from '../data/mockData';

const sevColor: Record<string, string> = { P1: '#ff3b5c', P2: '#ff6b35', P3: '#ffb039', P4: '#1a6bff' };
const statusStyle: Record<string, string> = {
  open: 'text-[#ff3b5c] bg-[#ff3b5c]/10', investigating: 'text-[#ff6b35] bg-[#ff6b35]/10',
  contained: 'text-[#ffb039] bg-[#ffb039]/10', resolved: 'text-green-400 bg-green-400/10', closed: 'text-[#5a7a8a] bg-white/[0.04]',
};

export default function IncidentsPage() {
  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-poppins font-bold text-2xl text-white">Incident Management</h1>
          <p className="font-poppins text-sm text-[#5a7a8a] mt-1">{incidents.filter((i) => i.status !== 'closed').length} active · {incidents.length} total</p>
        </div>
        <button className="flex items-center gap-2 bg-[#ff3b5c] text-white font-poppins font-semibold text-xs py-2.5 px-5 rounded-lg border-none cursor-pointer hover:bg-[#e02050] transition-colors">
          + Report Incident
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-4">
        {[
          { label: 'Mean Time to Detect', value: '4.5 min', icon: Clock },
          { label: 'Mean Time to Respond', value: '7.2 min', icon: Activity },
          { label: 'Open Incidents', value: incidents.filter((i) => i.status !== 'closed' && i.status !== 'resolved').length.toString(), icon: Activity },
          { label: 'Resolved This Month', value: incidents.filter((i) => i.status === 'resolved' || i.status === 'closed').length.toString(), icon: Activity },
        ].map((s) => {
          const Icon = s.icon;
          return (
            <div key={s.label} className="bg-[#0a1525] border border-white/[0.06] rounded-xl p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="font-poppins text-[10px] text-[#5a7a8a]">{s.label}</span>
                <Icon size={14} className="text-ctn-blue" />
              </div>
              <span className="font-poppins font-bold text-xl text-white">{s.value}</span>
            </div>
          );
        })}
      </div>

      {/* Table */}
      <div className="bg-[#0a1525] border border-white/[0.06] rounded-xl overflow-hidden">
        <div className="grid grid-cols-[100px_1fr_50px_100px_120px_80px_80px] gap-4 px-5 py-3 border-b border-white/[0.06] font-poppins text-[10px] text-[#5a7a8a] uppercase tracking-wider">
          <span>ID</span><span>Incident</span><span>Sev</span><span>Status</span><span>Assignee</span><span>TTD</span><span>TTR</span>
        </div>
        {incidents.map((inc) => (
          <div key={inc.id} className="grid grid-cols-[100px_1fr_50px_100px_120px_80px_80px] gap-4 px-5 py-3.5 border-b border-white/[0.03] hover:bg-white/[0.02] cursor-pointer items-center">
            <span className="font-mono text-xs text-ctn-blue">{inc.id}</span>
            <div>
              <p className="font-poppins text-sm text-white truncate">{inc.title}</p>
              <span className="font-mono text-[9px] text-[#3a5a6a]">{inc.category}</span>
            </div>
            <span className="font-mono text-[9px] font-bold px-1.5 py-0.5 rounded text-center" style={{ color: sevColor[inc.severity], background: sevColor[inc.severity] + '15' }}>
              {inc.severity}
            </span>
            <span className={`font-mono text-[9px] px-2 py-0.5 rounded text-center ${statusStyle[inc.status]}`}>
              {inc.status.toUpperCase()}
            </span>
            <span className="font-poppins text-xs text-[#5a7a8a]">{inc.assignee}</span>
            <span className="font-mono text-xs text-green-400">{inc.ttd || '—'}</span>
            <span className="font-mono text-xs text-[#5a7a8a]">{inc.ttr || 'Ongoing'}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
