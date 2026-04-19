import { Users, Shield, CheckCircle, XCircle, Clock } from 'lucide-react';
import { teamMembers } from '../data/mockData';

const statusStyle: Record<string, { color: string; label: string }> = {
  active: { color: '#22c55e', label: 'Active' },
  away: { color: '#ffb039', label: 'Away' },
  inactive: { color: '#5a7a8a', label: 'Inactive' },
};

export default function TeamPage() {
  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-poppins font-bold text-2xl text-white">Team Management</h1>
          <p className="font-poppins text-sm text-[#5a7a8a] mt-1">{teamMembers.length} members · {teamMembers.filter((m) => m.mfa).length} with MFA enabled</p>
        </div>
        <button className="flex items-center gap-2 bg-gradient-to-r from-ctn-blue to-[#1050cc] text-white font-poppins font-semibold text-xs py-2.5 px-5 rounded-lg border-none cursor-pointer">
          + Invite Member
        </button>
      </div>

      <div className="bg-[#0a1525] border border-white/[0.06] rounded-xl overflow-hidden">
        <div className="grid grid-cols-[1fr_120px_120px_70px_70px_100px] gap-4 px-5 py-3 border-b border-white/[0.06] font-poppins text-[10px] text-[#5a7a8a] uppercase tracking-wider">
          <span>Member</span><span>Role</span><span>Department</span><span>Status</span><span>MFA</span><span>Last Active</span>
        </div>
        {teamMembers.map((m) => {
          const st = statusStyle[m.status];
          return (
            <div key={m.id} className="grid grid-cols-[1fr_120px_120px_70px_70px_100px] gap-4 px-5 py-3.5 border-b border-white/[0.03] hover:bg-white/[0.02] cursor-pointer items-center">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-ctn-blue/20 border border-ctn-blue/30 flex items-center justify-center font-poppins font-bold text-[10px] text-ctn-blue flex-shrink-0">
                  {m.name.split(' ').map((n) => n[0]).join('').slice(0, 2)}
                </div>
                <div>
                  <p className="font-poppins text-sm text-white">{m.name}</p>
                  <span className="font-mono text-[9px] text-[#3a5a6a]">{m.email}</span>
                </div>
              </div>
              <span className="font-poppins text-xs text-[#5a7a8a]">{m.role}</span>
              <span className="font-poppins text-xs text-[#5a7a8a]">{m.department}</span>
              <div className="flex items-center gap-1">
                <div className="w-1.5 h-1.5 rounded-full" style={{ background: st.color }} />
                <span className="font-mono text-[9px]" style={{ color: st.color }}>{st.label}</span>
              </div>
              <div>
                {m.mfa ? <CheckCircle size={14} className="text-green-400" /> : <XCircle size={14} className="text-[#ff3b5c]" />}
              </div>
              <span className="font-mono text-[10px] text-[#5a7a8a]">
                {new Date(m.lastActive).toLocaleDateString()}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
