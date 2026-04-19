import { BookOpen } from 'lucide-react';
import { activityLog } from '../data/mockData';

const typeColor: Record<string, string> = {
  compliance: '#1a6bff', incident: '#ff3b5c', risk: '#ffb039', asset: '#22c55e',
  access: '#a855f7', report: '#1a6bff', training: '#ffb039', assessment: '#ff6b35',
};

export default function AuditLogPage() {
  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <div>
        <h1 className="font-poppins font-bold text-2xl text-white">Audit Log</h1>
        <p className="font-poppins text-sm text-[#5a7a8a] mt-1">Complete activity history for compliance and audit purposes.</p>
      </div>

      <div className="bg-[#0a1525] border border-white/[0.06] rounded-xl p-6">
        <div className="space-y-0">
          {activityLog.map((a, i) => (
            <div key={a.id} className="flex gap-4 pb-6 relative">
              {/* Timeline */}
              <div className="flex flex-col items-center">
                <div className="w-2.5 h-2.5 rounded-full flex-shrink-0 z-10" style={{ background: typeColor[a.type] || '#5a7a8a' }} />
                {i < activityLog.length - 1 && <div className="w-px flex-1 bg-white/[0.06] mt-1" />}
              </div>
              {/* Content */}
              <div className="flex-1 -mt-0.5">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-poppins font-medium text-sm text-white">{a.action}</span>
                  <span className="font-mono text-[8px] px-1.5 py-0.5 rounded tracking-wider capitalize" style={{ color: typeColor[a.type], background: (typeColor[a.type] || '#5a7a8a') + '15' }}>
                    {a.type}
                  </span>
                </div>
                <p className="font-poppins text-xs text-[#5a7a8a] mb-1">{a.detail}</p>
                <div className="flex items-center gap-2 font-mono text-[9px] text-[#3a5a6a]">
                  <span>{a.user}</span>
                  <span>·</span>
                  <span>{a.time}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
