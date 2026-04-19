import { Shield, AlertTriangle, Activity, Server, TrendingUp, TrendingDown, CheckCircle, Clock, FileText, Users } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { frameworks, risks, incidents, assets, activityLog } from '../data/mockData';

const severityColor: Record<string, string> = { critical: '#ff3b5c', high: '#ff6b35', medium: '#ffb039', low: '#1a6bff' };
const incSevColor: Record<string, string> = { P1: '#ff3b5c', P2: '#ff6b35', P3: '#ffb039', P4: '#1a6bff' };

export default function DashboardPage() {
  const { user } = useAuth();
  const openRisks = risks.filter((r) => r.status !== 'closed');
  const activeIncidents = incidents.filter((i) => i.status !== 'closed');
  const complianceAvg = Math.round(frameworks.reduce((s, f) => s + f.progress, 0) / frameworks.length);
  const totalVulns = assets.reduce((s, a) => s + a.vulns, 0);

  const cards = [
    { label: 'Compliance Score', value: `${complianceAvg}%`, icon: Shield, color: complianceAvg >= 80 ? '#1a6bff' : '#ffb039', trend: '+4%', trendUp: true },
    { label: 'Open Risks', value: openRisks.length.toString(), icon: AlertTriangle, color: openRisks.length > 5 ? '#ffb039' : '#1a6bff', trend: '-2', trendUp: false },
    { label: 'Active Incidents', value: activeIncidents.length.toString(), icon: Activity, color: activeIncidents.length > 3 ? '#ff3b5c' : '#1a6bff', trend: null, trendUp: false },
    { label: 'Vulnerabilities', value: totalVulns.toString(), icon: Server, color: totalVulns > 10 ? '#ff6b35' : '#1a6bff', trend: '-5', trendUp: false },
  ];

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* Header */}
      <div>
        <h1 className="font-poppins font-bold text-2xl text-white">Welcome back, {user?.name?.split(' ')[0]}</h1>
        <p className="font-poppins text-sm text-[#5a7a8a] mt-1">Here's your security posture overview for today.</p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {cards.map((c) => {
          const Icon = c.icon;
          return (
            <div key={c.label} className="bg-[#0a1525] border border-white/[0.06] rounded-xl p-5">
              <div className="flex items-center justify-between mb-3">
                <span className="font-poppins text-xs text-[#5a7a8a]">{c.label}</span>
                <Icon size={16} style={{ color: c.color }} />
              </div>
              <div className="flex items-end gap-2">
                <span className="font-poppins font-bold text-2xl text-white">{c.value}</span>
                {c.trend && (
                  <span className={`flex items-center gap-0.5 font-mono text-[10px] ${c.trendUp ? 'text-green-400' : 'text-green-400'}`}>
                    {c.trendUp ? <TrendingUp size={10} /> : <TrendingDown size={10} />} {c.trend}
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Compliance Overview */}
        <div className="lg:col-span-2 bg-[#0a1525] border border-white/[0.06] rounded-xl p-6">
          <h2 className="font-poppins font-semibold text-sm text-white mb-4">Framework Compliance</h2>
          <div className="space-y-3">
            {frameworks.map((fw) => (
              <div key={fw.id} className="flex items-center gap-4">
                <span className="font-poppins text-xs text-[#5a7a8a] w-20 flex-shrink-0">{fw.name}</span>
                <div className="flex-1 h-2 bg-white/[0.04] rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all"
                    style={{ width: `${fw.progress}%`, background: fw.status === 'attention' ? '#ffb039' : '#1a6bff' }}
                  />
                </div>
                <span className="font-mono text-xs text-white w-10 text-right">{fw.progress}%</span>
                <span className={`font-mono text-[8px] tracking-wider px-1.5 py-0.5 rounded ${fw.status === 'attention' ? 'text-[#ffb039] bg-[#ffb039]/10' : 'text-green-400 bg-green-400/10'}`}>
                  {fw.status === 'attention' ? 'ATTENTION' : 'ON TRACK'}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-[#0a1525] border border-white/[0.06] rounded-xl p-6">
          <h2 className="font-poppins font-semibold text-sm text-white mb-4">Recent Activity</h2>
          <div className="space-y-3">
            {activityLog.slice(0, 6).map((a) => (
              <div key={a.id} className="flex gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-ctn-blue mt-1.5 flex-shrink-0" />
                <div>
                  <p className="font-poppins text-xs text-white">{a.action}</p>
                  <p className="font-poppins text-[10px] text-[#5a7a8a]">{a.detail}</p>
                  <span className="font-mono text-[9px] text-[#3a5a6a]">{a.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Open Risks */}
        <div className="bg-[#0a1525] border border-white/[0.06] rounded-xl p-6">
          <h2 className="font-poppins font-semibold text-sm text-white mb-4">Top Risks</h2>
          <div className="space-y-2">
            {risks.filter((r) => r.status !== 'closed').slice(0, 5).map((r) => (
              <div key={r.id} className="flex items-center gap-3 p-3 rounded-lg bg-white/[0.02] border border-white/[0.04]">
                <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: severityColor[r.severity] }} />
                <div className="flex-1 min-w-0">
                  <p className="font-poppins text-xs text-white truncate">{r.title}</p>
                  <span className="font-mono text-[9px] text-[#5a7a8a]">{r.id} · {r.owner}</span>
                </div>
                <span className="font-mono text-[9px] px-1.5 py-0.5 rounded" style={{ color: severityColor[r.severity], background: severityColor[r.severity] + '15' }}>
                  {r.severity.toUpperCase()}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Incidents */}
        <div className="bg-[#0a1525] border border-white/[0.06] rounded-xl p-6">
          <h2 className="font-poppins font-semibold text-sm text-white mb-4">Recent Incidents</h2>
          <div className="space-y-2">
            {incidents.slice(0, 5).map((inc) => (
              <div key={inc.id} className="flex items-center gap-3 p-3 rounded-lg bg-white/[0.02] border border-white/[0.04]">
                <span className="font-mono text-[9px] font-bold px-1.5 py-0.5 rounded" style={{ color: incSevColor[inc.severity], background: incSevColor[inc.severity] + '15' }}>
                  {inc.severity}
                </span>
                <div className="flex-1 min-w-0">
                  <p className="font-poppins text-xs text-white truncate">{inc.title}</p>
                  <span className="font-mono text-[9px] text-[#5a7a8a]">{inc.id} · {inc.assignee}</span>
                </div>
                <span className={`font-mono text-[8px] tracking-wider px-1.5 py-0.5 rounded ${
                  inc.status === 'closed' ? 'text-[#5a7a8a] bg-white/[0.04]' :
                  inc.status === 'resolved' ? 'text-green-400 bg-green-400/10' :
                  'text-[#ffb039] bg-[#ffb039]/10'
                }`}>
                  {inc.status.toUpperCase()}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
