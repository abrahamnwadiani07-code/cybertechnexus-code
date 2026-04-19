import { useState } from 'react';
import { Shield, CheckCircle, XCircle, MinusCircle, ChevronRight } from 'lucide-react';
import { frameworks } from '../data/mockData';

export default function CompliancePage() {
  const [selected, setSelected] = useState(frameworks[0].id);
  const fw = frameworks.find((f) => f.id === selected)!;

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <div>
        <h1 className="font-poppins font-bold text-2xl text-white">Compliance Management</h1>
        <p className="font-poppins text-sm text-[#5a7a8a] mt-1">Track and manage compliance across all frameworks.</p>
      </div>

      {/* Framework selector */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
        {frameworks.map((f) => (
          <button key={f.id} onClick={() => setSelected(f.id)}
            className={`p-4 rounded-xl border text-left transition-all cursor-pointer bg-[#0a1525] ${selected === f.id ? 'border-ctn-blue/40 shadow-[0_0_15px_rgba(26,107,255,0.1)]' : 'border-white/[0.06] hover:border-white/[0.12]'}`}>
            <div className="font-poppins font-semibold text-sm text-white mb-1">{f.name}</div>
            <div className="font-poppins font-bold text-xl" style={{ color: f.status === 'attention' ? '#ffb039' : '#1a6bff' }}>{f.progress}%</div>
            <div className="font-mono text-[9px] text-[#5a7a8a] mt-1">{f.passing}/{f.totalControls} controls</div>
          </button>
        ))}
      </div>

      {/* Detail */}
      <div className="bg-[#0a1525] border border-white/[0.06] rounded-xl p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="font-poppins font-bold text-lg text-white">{fw.name} Controls</h2>
            <p className="font-poppins text-xs text-[#5a7a8a] mt-1">Next audit: {fw.nextAudit}</p>
          </div>
          <div className="flex gap-6 font-mono text-xs">
            <div className="text-center"><span className="text-green-400 font-bold text-lg block">{fw.passing}</span>Passing</div>
            <div className="text-center"><span className="text-[#ff3b5c] font-bold text-lg block">{fw.failing}</span>Failing</div>
            <div className="text-center"><span className="text-[#5a7a8a] font-bold text-lg block">{fw.notApplicable}</span>N/A</div>
          </div>
        </div>

        {/* Progress bar */}
        <div className="h-3 bg-white/[0.04] rounded-full overflow-hidden flex mb-6">
          <div className="bg-green-500 rounded-l-full" style={{ width: `${(fw.passing / fw.totalControls) * 100}%` }} />
          <div className="bg-[#ff3b5c]" style={{ width: `${(fw.failing / fw.totalControls) * 100}%` }} />
          <div className="bg-[#3a5a6a]" style={{ width: `${(fw.notApplicable / fw.totalControls) * 100}%` }} />
        </div>

        {/* Sample controls */}
        <div className="space-y-2">
          {[
            { id: 'A.5.1', name: 'Information Security Policies', status: 'pass' },
            { id: 'A.6.1', name: 'Organization of Information Security', status: 'pass' },
            { id: 'A.7.1', name: 'Human Resource Security', status: 'pass' },
            { id: 'A.8.1', name: 'Asset Management', status: 'pass' },
            { id: 'A.9.1', name: 'Access Control', status: 'pass' },
            { id: 'A.10.1', name: 'Cryptography', status: 'fail' },
            { id: 'A.11.1', name: 'Physical Security', status: 'pass' },
            { id: 'A.12.1', name: 'Operations Security', status: 'fail' },
            { id: 'A.13.1', name: 'Communications Security', status: 'pass' },
            { id: 'A.14.1', name: 'System Acquisition & Development', status: 'na' },
          ].map((ctrl) => (
            <div key={ctrl.id} className="flex items-center gap-4 p-3 rounded-lg bg-white/[0.02] border border-white/[0.04] hover:border-white/[0.08] cursor-pointer transition-colors">
              {ctrl.status === 'pass' ? <CheckCircle size={16} className="text-green-400" /> :
               ctrl.status === 'fail' ? <XCircle size={16} className="text-[#ff3b5c]" /> :
               <MinusCircle size={16} className="text-[#5a7a8a]" />}
              <span className="font-mono text-xs text-[#5a7a8a] w-14">{ctrl.id}</span>
              <span className="font-poppins text-sm text-white flex-1">{ctrl.name}</span>
              <ChevronRight size={14} className="text-[#3a5a6a]" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
