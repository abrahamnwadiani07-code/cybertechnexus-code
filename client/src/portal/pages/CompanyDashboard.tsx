import { Shield, Users, FileCheck, AlertTriangle, TrendingUp, Calendar, CheckCircle, Clock } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import MiniChart from '../components/MiniChart';

const employees = [
  { name: 'Sarah Williams', role: 'IT Manager', certStatus: 'CCSE Certified', lastActive: '2 hours ago' },
  { name: 'James Park', role: 'DevOps Engineer', certStatus: 'CCCS In Progress', lastActive: '1 day ago' },
  { name: 'Maria Santos', role: 'Compliance Officer', certStatus: 'CGRCS Certified', lastActive: '3 hours ago' },
  { name: 'Alex Johnson', role: 'Security Analyst', certStatus: 'CCSA Certified', lastActive: '30 min ago' },
  { name: 'Tom Richards', role: 'Cloud Architect', certStatus: 'Not Enrolled', lastActive: '5 days ago' },
];

const complianceFrameworks = [
  { name: 'SOC 2 Type II', progress: 87, status: 'on-track' },
  { name: 'ISO 27001', progress: 72, status: 'attention' },
  { name: 'GDPR', progress: 94, status: 'on-track' },
];

const upcomingTasks = [
  { task: 'Annual risk assessment review', due: 'May 12, 2026', priority: 'high' },
  { task: 'SOC 2 evidence collection deadline', due: 'May 20, 2026', priority: 'critical' },
  { task: 'Security awareness training renewal', due: 'Jun 1, 2026', priority: 'medium' },
  { task: 'Vendor risk questionnaire (AWS)', due: 'Jun 8, 2026', priority: 'low' },
];

export default function CompanyDashboard() {
  const { user } = useAuth();

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <div>
        <h1 className="font-poppins font-bold text-2xl text-white">Company Dashboard</h1>
        <p className="font-poppins text-sm text-[#5a7a8a] mt-1">{user?.company} — Security & Compliance Overview</p>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: 'Compliance Score', value: '84%', icon: Shield, color: '#1a6bff', chart: [70, 74, 76, 79, 81, 83, 84] },
          { label: 'Team Members', value: '12', icon: Users, color: '#10b981', chart: [8, 9, 9, 10, 11, 11, 12] },
          { label: 'Certifications', value: '8', icon: FileCheck, color: '#8b5cf6', chart: [3, 4, 5, 5, 6, 7, 8] },
          { label: 'Open Risks', value: '3', icon: AlertTriangle, color: '#ffb039', chart: [7, 6, 5, 5, 4, 4, 3] },
        ].map(card => (
          <div key={card.label} className="bg-[#0a1525] border border-white/[0.06] rounded-xl p-5">
            <div className="flex items-center justify-between mb-3">
              <span className="font-poppins text-xs text-[#5a7a8a]">{card.label}</span>
              <card.icon size={16} style={{ color: card.color }} />
            </div>
            <div className="font-poppins font-bold text-2xl text-white mb-2">{card.value}</div>
            <MiniChart data={card.chart} color={card.color} height={28} />
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Compliance */}
        <div className="lg:col-span-2 bg-[#0a1525] border border-white/[0.06] rounded-xl p-6">
          <h2 className="font-poppins font-semibold text-sm text-white mb-4">Compliance Progress</h2>
          <div className="space-y-4">
            {complianceFrameworks.map(fw => (
              <div key={fw.name} className="flex items-center gap-4">
                <span className="font-poppins text-xs text-[#5a7a8a] w-28 flex-shrink-0">{fw.name}</span>
                <div className="flex-1 h-2.5 bg-white/[0.04] rounded-full overflow-hidden">
                  <div className="h-full rounded-full" style={{ width: `${fw.progress}%`, background: fw.status === 'attention' ? '#ffb039' : '#1a6bff' }} />
                </div>
                <span className="font-mono text-xs text-white w-10 text-right">{fw.progress}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Tasks */}
        <div className="bg-[#0a1525] border border-white/[0.06] rounded-xl p-6">
          <h2 className="font-poppins font-semibold text-sm text-white mb-4">Upcoming Deadlines</h2>
          <div className="space-y-3">
            {upcomingTasks.map(t => (
              <div key={t.task} className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.04]">
                <p className="font-poppins text-xs text-white mb-1">{t.task}</p>
                <div className="flex items-center gap-2">
                  <Calendar size={10} className="text-[#5a7a8a]" />
                  <span className="font-mono text-[9px] text-[#5a7a8a]">{t.due}</span>
                  <span className={`font-mono text-[8px] px-1.5 py-0.5 rounded ${
                    t.priority === 'critical' ? 'text-[#ff3b5c] bg-[#ff3b5c]/10' :
                    t.priority === 'high' ? 'text-[#ff6b35] bg-[#ff6b35]/10' :
                    t.priority === 'medium' ? 'text-[#ffb039] bg-[#ffb039]/10' :
                    'text-[#1a6bff] bg-[#1a6bff]/10'
                  }`}>{t.priority.toUpperCase()}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team */}
      <div className="bg-[#0a1525] border border-white/[0.06] rounded-xl p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-poppins font-semibold text-sm text-white">Team Members & Certifications</h2>
          <span className="font-mono text-[9px] text-[#5a7a8a]">{employees.length} MEMBERS</span>
        </div>
        <div className="space-y-2">
          {employees.map(emp => (
            <div key={emp.name} className="flex items-center gap-4 p-3 rounded-lg bg-white/[0.02] border border-white/[0.04]">
              <div className="w-8 h-8 rounded-full bg-[#1a6bff]/20 border border-[#1a6bff]/30 flex items-center justify-center font-mono text-[10px] text-[#1a6bff] font-bold flex-shrink-0">
                {emp.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-poppins text-sm text-white">{emp.name}</p>
                <span className="font-mono text-[9px] text-[#5a7a8a]">{emp.role}</span>
              </div>
              <span className={`font-mono text-[9px] px-2 py-0.5 rounded ${
                emp.certStatus.includes('Certified') ? 'text-green-400 bg-green-400/10' :
                emp.certStatus.includes('Progress') ? 'text-[#ffb039] bg-[#ffb039]/10' :
                'text-[#5a7a8a] bg-white/[0.04]'
              }`}>{emp.certStatus}</span>
              <span className="font-mono text-[9px] text-[#3a5a6a] hidden md:block">{emp.lastActive}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
