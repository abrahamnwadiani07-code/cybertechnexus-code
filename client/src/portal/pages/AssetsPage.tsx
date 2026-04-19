import { Server, Shield, AlertTriangle, XCircle } from 'lucide-react';
import { assets } from '../data/mockData';

const typeIcon: Record<string, string> = { server: '🖥️', endpoint: '💻', application: '📱', database: '🗄️', network: '🌐', cloud: '☁️' };
const critColor: Record<string, string> = { critical: '#ff3b5c', high: '#ff6b35', medium: '#ffb039', low: '#1a6bff' };
const statusStyle: Record<string, { color: string; bg: string; icon: any }> = {
  compliant: { color: '#22c55e', bg: 'bg-green-400/10', icon: Shield },
  attention: { color: '#ffb039', bg: 'bg-[#ffb039]/10', icon: AlertTriangle },
  'non-compliant': { color: '#ff3b5c', bg: 'bg-[#ff3b5c]/10', icon: XCircle },
};

export default function AssetsPage() {
  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-poppins font-bold text-2xl text-white">Asset Inventory</h1>
          <p className="font-poppins text-sm text-[#5a7a8a] mt-1">{assets.length} assets · {assets.filter((a) => a.vulns > 0).length} with vulnerabilities</p>
        </div>
        <button className="flex items-center gap-2 bg-gradient-to-r from-ctn-blue to-[#1050cc] text-white font-poppins font-semibold text-xs py-2.5 px-5 rounded-lg border-none cursor-pointer">
          + Add Asset
        </button>
      </div>

      <div className="bg-[#0a1525] border border-white/[0.06] rounded-xl overflow-hidden">
        <div className="grid grid-cols-[40px_1fr_80px_80px_100px_80px_60px_90px] gap-4 px-5 py-3 border-b border-white/[0.06] font-poppins text-[10px] text-[#5a7a8a] uppercase tracking-wider">
          <span></span><span>Asset</span><span>Type</span><span>Criticality</span><span>Owner</span><span>Last Scan</span><span>Vulns</span><span>Status</span>
        </div>
        {assets.map((a) => {
          const st = statusStyle[a.status];
          const StIcon = st.icon;
          return (
            <div key={a.id} className="grid grid-cols-[40px_1fr_80px_80px_100px_80px_60px_90px] gap-4 px-5 py-3.5 border-b border-white/[0.03] hover:bg-white/[0.02] cursor-pointer items-center">
              <span className="text-lg">{typeIcon[a.type]}</span>
              <div>
                <p className="font-mono text-sm text-white">{a.name}</p>
                <span className="font-mono text-[9px] text-[#3a5a6a]">{a.location}</span>
              </div>
              <span className="font-mono text-[9px] text-[#5a7a8a] capitalize">{a.type}</span>
              <span className="font-mono text-[9px] px-2 py-0.5 rounded text-center capitalize" style={{ color: critColor[a.criticality], background: critColor[a.criticality] + '15' }}>
                {a.criticality}
              </span>
              <span className="font-poppins text-[10px] text-[#5a7a8a]">{a.owner}</span>
              <span className="font-mono text-[10px] text-[#5a7a8a]">{a.lastScan}</span>
              <span className={`font-mono text-xs text-center ${a.vulns > 0 ? 'text-[#ff3b5c]' : 'text-green-400'}`}>{a.vulns}</span>
              <div className={`flex items-center gap-1 font-mono text-[9px] px-2 py-0.5 rounded justify-center ${st.bg}`} style={{ color: st.color }}>
                <StIcon size={10} /> {a.status.toUpperCase()}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
