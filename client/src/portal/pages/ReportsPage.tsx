import { FileText, Download, Calendar, BarChart3 } from 'lucide-react';

const reports = [
  { name: 'Monthly Compliance Report — April 2026', type: 'Compliance', date: '2026-04-15', status: 'ready' },
  { name: 'Risk Assessment Summary — Q1 2026', type: 'Risk', date: '2026-04-01', status: 'ready' },
  { name: 'Penetration Test Report — External', type: 'Assessment', date: '2026-03-28', status: 'ready' },
  { name: 'Incident Response Summary — March 2026', type: 'Incident', date: '2026-03-31', status: 'ready' },
  { name: 'Vulnerability Scan Report — All Assets', type: 'Vulnerability', date: '2026-04-18', status: 'ready' },
  { name: 'Access Review Report — Engineering', type: 'Access', date: '2026-04-10', status: 'ready' },
  { name: 'Board Security Briefing — Q1 2026', type: 'Executive', date: '2026-04-05', status: 'ready' },
  { name: 'Training Completion Report — Q1 2026', type: 'Training', date: '2026-04-02', status: 'ready' },
];

const scheduled = [
  { name: 'Monthly Compliance Report — May 2026', due: '2026-05-15', frequency: 'Monthly' },
  { name: 'Quarterly Risk Review — Q2 2026', due: '2026-07-01', frequency: 'Quarterly' },
  { name: 'Annual Pen Test Report', due: '2026-06-01', frequency: 'Annual' },
];

export default function ReportsPage() {
  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-poppins font-bold text-2xl text-white">Reports</h1>
          <p className="font-poppins text-sm text-[#5a7a8a] mt-1">Generate, download, and schedule compliance and security reports.</p>
        </div>
        <button className="flex items-center gap-2 bg-gradient-to-r from-ctn-blue to-[#1050cc] text-white font-poppins font-semibold text-xs py-2.5 px-5 rounded-lg border-none cursor-pointer">
          <BarChart3 size={14} /> Generate Report
        </button>
      </div>

      {/* Available Reports */}
      <div className="bg-[#0a1525] border border-white/[0.06] rounded-xl p-6">
        <h2 className="font-poppins font-semibold text-sm text-white mb-4">Available Reports</h2>
        <div className="space-y-2">
          {reports.map((r) => (
            <div key={r.name} className="flex items-center gap-4 p-3 rounded-lg bg-white/[0.02] border border-white/[0.04] hover:border-white/[0.08] cursor-pointer transition-colors">
              <FileText size={16} className="text-ctn-blue flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <p className="font-poppins text-sm text-white truncate">{r.name}</p>
                <span className="font-mono text-[9px] text-[#5a7a8a]">{r.type} · {r.date}</span>
              </div>
              <button className="flex items-center gap-1 text-ctn-blue hover:text-white bg-transparent border border-ctn-blue/20 rounded-lg px-3 py-1.5 cursor-pointer font-poppins text-xs transition-colors">
                <Download size={12} /> Download
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Scheduled */}
      <div className="bg-[#0a1525] border border-white/[0.06] rounded-xl p-6">
        <h2 className="font-poppins font-semibold text-sm text-white mb-4">Scheduled Reports</h2>
        <div className="space-y-2">
          {scheduled.map((s) => (
            <div key={s.name} className="flex items-center gap-4 p-3 rounded-lg bg-white/[0.02] border border-white/[0.04]">
              <Calendar size={16} className="text-[#5a7a8a] flex-shrink-0" />
              <div className="flex-1">
                <p className="font-poppins text-sm text-white">{s.name}</p>
                <span className="font-mono text-[9px] text-[#5a7a8a]">Due: {s.due} · {s.frequency}</span>
              </div>
              <span className="font-mono text-[9px] text-[#ffb039] bg-[#ffb039]/10 px-2 py-0.5 rounded">SCHEDULED</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
