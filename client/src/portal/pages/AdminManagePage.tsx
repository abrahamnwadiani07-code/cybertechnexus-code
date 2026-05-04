import { useState } from 'react';
import { Users, Building2, GraduationCap, UserPlus, Search, Shield, MoreVertical, CheckCircle, XCircle, Mail } from 'lucide-react';

type Tab = 'companies' | 'individuals' | 'trainers';

const companies = [
  { id: 1, name: 'TechScale SaaS', contact: 'David Chen', email: 'david@techscale.io', plan: 'Professional', employees: 12, status: 'active', compliance: 84 },
  { id: 2, name: 'MedSecure Health', contact: 'Sarah Williams', email: 'sarah@medsecure.com', plan: 'Enterprise', employees: 45, status: 'active', compliance: 91 },
  { id: 3, name: 'Sterling Bank', contact: 'James Okonkwo', email: 'james@sterling.com', plan: 'Enterprise', employees: 120, status: 'active', compliance: 78 },
  { id: 4, name: 'Atlas Legal Group', contact: 'Emma Roberts', email: 'emma@atlaslegal.co', plan: 'Professional', employees: 8, status: 'active', compliance: 65 },
  { id: 5, name: 'GreenEnergy Corp', contact: 'Mark Johnson', email: 'mark@greenenergy.com', plan: 'Essentials', employees: 5, status: 'suspended', compliance: 42 },
];

const individuals = [
  { id: 1, name: 'Jessica Obi', email: 'jessica@mail.com', certs: ['CCSA'], inProgress: 'CCSE', enrolled: 'Jan 2026', status: 'active' },
  { id: 2, name: 'Tom Richards', email: 'tom@techscale.io', certs: [], inProgress: 'CCSE', enrolled: 'Feb 2026', status: 'active' },
  { id: 3, name: 'Maria Santos', email: 'maria@mail.com', certs: ['CGRCS'], inProgress: 'CCIR', enrolled: 'Dec 2025', status: 'active' },
  { id: 4, name: 'Alex Johnson', email: 'alex@mail.com', certs: ['CCSA'], inProgress: null, enrolled: 'Nov 2025', status: 'active' },
  { id: 5, name: 'Priya Patel', email: 'priya@mail.com', certs: [], inProgress: 'CCCS', enrolled: 'Mar 2026', status: 'active' },
  { id: 6, name: 'Emmanuel Nwosu', email: 'emma@mail.com', certs: ['CCSA', 'CCSE'], inProgress: 'CTHR', enrolled: 'Sep 2025', status: 'active' },
  { id: 7, name: 'Liu Wei', email: 'liu@mail.com', certs: [], inProgress: 'CCSA', enrolled: 'Apr 2026', status: 'inactive' },
];

const trainers = [
  { id: 1, name: 'David Adesanya', email: 'david.a@cybertechnexus.com', courses: ['CCSE', 'CCSA', 'CCIR'], students: 74, rating: 4.87, status: 'active' },
  { id: 2, name: 'Sarah Mitchell', email: 'sarah.m@cybertechnexus.com', courses: ['CCIR', 'CTHR'], students: 42, rating: 4.92, status: 'active' },
  { id: 3, name: 'Michael Chen', email: 'michael.c@cybertechnexus.com', courses: ['CCCS', 'CCSE'], students: 38, rating: 4.85, status: 'active' },
  { id: 4, name: 'Rachel Thompson', email: 'rachel.t@cybertechnexus.com', courses: ['CGRCS'], students: 56, rating: 4.90, status: 'active' },
];

export default function AdminManagePage() {
  const [tab, setTab] = useState<Tab>('companies');
  const [search, setSearch] = useState('');

  const tabs: { id: Tab; label: string; icon: typeof Users; count: number }[] = [
    { id: 'companies', label: 'Companies', icon: Building2, count: companies.length },
    { id: 'individuals', label: 'Individuals', icon: Users, count: individuals.length },
    { id: 'trainers', label: 'Trainers', icon: GraduationCap, count: trainers.length },
  ];

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-poppins font-bold text-2xl text-white">User Management</h1>
          <p className="font-poppins text-sm text-[#5a7a8a] mt-1">Manage all portal users, companies, and trainers.</p>
        </div>
        <button className="px-4 py-2.5 bg-[#1a6bff] text-white text-xs font-medium rounded-lg border-none cursor-pointer flex items-center gap-2 hover:bg-[#1a6bff]/90 transition-colors">
          <UserPlus size={14} /> Add User
        </button>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 bg-[#0a1525] border border-white/[0.06] rounded-xl p-1">
        {tabs.map(t => (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-xs font-poppins font-medium transition-all cursor-pointer border-none ${
              tab === t.id ? 'bg-[#1a6bff]/10 text-[#1a6bff]' : 'bg-transparent text-[#5a7a8a] hover:text-white'
            }`}
          >
            <t.icon size={14} />
            {t.label}
            <span className="font-mono text-[9px] bg-white/[0.06] px-1.5 py-0.5 rounded">{t.count}</span>
          </button>
        ))}
      </div>

      {/* Search */}
      <div className="flex items-center gap-2 bg-white/[0.04] border border-white/[0.06] rounded-lg px-3 py-2.5">
        <Search size={14} className="text-[#5a7a8a]" />
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder={`Search ${tab}...`}
          className="bg-transparent border-none outline-none text-sm text-white placeholder:text-[#3a5a6a] font-poppins w-full"
        />
      </div>

      {/* Companies Tab */}
      {tab === 'companies' && (
        <div className="bg-[#0a1525] border border-white/[0.06] rounded-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/[0.06]">
                  <th className="text-left font-poppins font-medium text-[10px] text-[#5a7a8a] uppercase tracking-wider px-5 py-3">Company</th>
                  <th className="text-left font-poppins font-medium text-[10px] text-[#5a7a8a] uppercase tracking-wider px-5 py-3">Contact</th>
                  <th className="text-left font-poppins font-medium text-[10px] text-[#5a7a8a] uppercase tracking-wider px-5 py-3">Plan</th>
                  <th className="text-left font-poppins font-medium text-[10px] text-[#5a7a8a] uppercase tracking-wider px-5 py-3">Employees</th>
                  <th className="text-left font-poppins font-medium text-[10px] text-[#5a7a8a] uppercase tracking-wider px-5 py-3">Compliance</th>
                  <th className="text-left font-poppins font-medium text-[10px] text-[#5a7a8a] uppercase tracking-wider px-5 py-3">Status</th>
                  <th className="px-5 py-3"></th>
                </tr>
              </thead>
              <tbody>
                {companies.filter(c => c.name.toLowerCase().includes(search.toLowerCase())).map(c => (
                  <tr key={c.id} className="border-b border-white/[0.03] hover:bg-white/[0.02]">
                    <td className="px-5 py-3">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-[#1a6bff]/10 border border-[#1a6bff]/20 flex items-center justify-center font-mono text-[9px] text-[#1a6bff] font-bold">
                          {c.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                        </div>
                        <span className="font-poppins text-sm text-white">{c.name}</span>
                      </div>
                    </td>
                    <td className="px-5 py-3">
                      <div className="font-poppins text-xs text-white">{c.contact}</div>
                      <div className="font-mono text-[9px] text-[#5a7a8a]">{c.email}</div>
                    </td>
                    <td className="px-5 py-3">
                      <span className={`font-mono text-[9px] px-2 py-0.5 rounded ${
                        c.plan === 'Enterprise' ? 'text-[#8b5cf6] bg-[#8b5cf6]/10' :
                        c.plan === 'Professional' ? 'text-[#1a6bff] bg-[#1a6bff]/10' :
                        'text-[#5a7a8a] bg-white/[0.04]'
                      }`}>{c.plan}</span>
                    </td>
                    <td className="px-5 py-3 font-mono text-xs text-white">{c.employees}</td>
                    <td className="px-5 py-3">
                      <div className="flex items-center gap-2">
                        <div className="w-16 h-1.5 bg-white/[0.04] rounded-full overflow-hidden">
                          <div className="h-full rounded-full" style={{ width: `${c.compliance}%`, background: c.compliance >= 80 ? '#1a6bff' : c.compliance >= 60 ? '#ffb039' : '#ff3b5c' }} />
                        </div>
                        <span className="font-mono text-[9px] text-white">{c.compliance}%</span>
                      </div>
                    </td>
                    <td className="px-5 py-3">
                      <span className={`inline-flex items-center gap-1 font-mono text-[8px] ${c.status === 'active' ? 'text-green-400' : 'text-[#ff3b5c]'}`}>
                        {c.status === 'active' ? <CheckCircle size={9} /> : <XCircle size={9} />}
                        {c.status.toUpperCase()}
                      </span>
                    </td>
                    <td className="px-5 py-3">
                      <button className="text-[#5a7a8a] hover:text-white bg-transparent border-none cursor-pointer"><MoreVertical size={14} /></button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Individuals Tab */}
      {tab === 'individuals' && (
        <div className="bg-[#0a1525] border border-white/[0.06] rounded-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/[0.06]">
                  <th className="text-left font-poppins font-medium text-[10px] text-[#5a7a8a] uppercase tracking-wider px-5 py-3">Student</th>
                  <th className="text-left font-poppins font-medium text-[10px] text-[#5a7a8a] uppercase tracking-wider px-5 py-3">Certifications</th>
                  <th className="text-left font-poppins font-medium text-[10px] text-[#5a7a8a] uppercase tracking-wider px-5 py-3">In Progress</th>
                  <th className="text-left font-poppins font-medium text-[10px] text-[#5a7a8a] uppercase tracking-wider px-5 py-3">Enrolled</th>
                  <th className="text-left font-poppins font-medium text-[10px] text-[#5a7a8a] uppercase tracking-wider px-5 py-3">Status</th>
                  <th className="px-5 py-3"></th>
                </tr>
              </thead>
              <tbody>
                {individuals.filter(i => i.name.toLowerCase().includes(search.toLowerCase())).map(ind => (
                  <tr key={ind.id} className="border-b border-white/[0.03] hover:bg-white/[0.02]">
                    <td className="px-5 py-3">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-[#1a6bff]/20 border border-[#1a6bff]/30 flex items-center justify-center font-mono text-[9px] text-[#1a6bff] font-bold">
                          {ind.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div>
                          <div className="font-poppins text-sm text-white">{ind.name}</div>
                          <div className="font-mono text-[9px] text-[#5a7a8a]">{ind.email}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-5 py-3">
                      <div className="flex gap-1">
                        {ind.certs.length > 0 ? ind.certs.map(c => (
                          <span key={c} className="font-mono text-[8px] text-green-400 bg-green-400/10 px-1.5 py-0.5 rounded">{c}</span>
                        )) : <span className="font-mono text-[8px] text-[#3a5a6a]">None yet</span>}
                      </div>
                    </td>
                    <td className="px-5 py-3">
                      {ind.inProgress ? (
                        <span className="font-mono text-[9px] text-[#ffb039] bg-[#ffb039]/10 px-1.5 py-0.5 rounded">{ind.inProgress}</span>
                      ) : <span className="font-mono text-[8px] text-[#3a5a6a]">—</span>}
                    </td>
                    <td className="px-5 py-3 font-mono text-[9px] text-[#5a7a8a]">{ind.enrolled}</td>
                    <td className="px-5 py-3">
                      <span className={`inline-flex items-center gap-1 font-mono text-[8px] ${ind.status === 'active' ? 'text-green-400' : 'text-[#5a7a8a]'}`}>
                        {ind.status === 'active' ? <CheckCircle size={9} /> : <XCircle size={9} />}
                        {ind.status.toUpperCase()}
                      </span>
                    </td>
                    <td className="px-5 py-3">
                      <button className="text-[#5a7a8a] hover:text-white bg-transparent border-none cursor-pointer"><Mail size={12} /></button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Trainers Tab */}
      {tab === 'trainers' && (
        <div className="bg-[#0a1525] border border-white/[0.06] rounded-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/[0.06]">
                  <th className="text-left font-poppins font-medium text-[10px] text-[#5a7a8a] uppercase tracking-wider px-5 py-3">Trainer</th>
                  <th className="text-left font-poppins font-medium text-[10px] text-[#5a7a8a] uppercase tracking-wider px-5 py-3">Courses</th>
                  <th className="text-left font-poppins font-medium text-[10px] text-[#5a7a8a] uppercase tracking-wider px-5 py-3">Students</th>
                  <th className="text-left font-poppins font-medium text-[10px] text-[#5a7a8a] uppercase tracking-wider px-5 py-3">Rating</th>
                  <th className="text-left font-poppins font-medium text-[10px] text-[#5a7a8a] uppercase tracking-wider px-5 py-3">Status</th>
                  <th className="px-5 py-3"></th>
                </tr>
              </thead>
              <tbody>
                {trainers.filter(t => t.name.toLowerCase().includes(search.toLowerCase())).map(t => (
                  <tr key={t.id} className="border-b border-white/[0.03] hover:bg-white/[0.02]">
                    <td className="px-5 py-3">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-[#8b5cf6]/20 border border-[#8b5cf6]/30 flex items-center justify-center font-mono text-[9px] text-[#8b5cf6] font-bold">
                          {t.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div>
                          <div className="font-poppins text-sm text-white">{t.name}</div>
                          <div className="font-mono text-[9px] text-[#5a7a8a]">{t.email}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-5 py-3">
                      <div className="flex gap-1 flex-wrap">
                        {t.courses.map(c => (
                          <span key={c} className="font-mono text-[8px] text-[#1a6bff] bg-[#1a6bff]/10 px-1.5 py-0.5 rounded">{c}</span>
                        ))}
                      </div>
                    </td>
                    <td className="px-5 py-3 font-mono text-xs text-white">{t.students}</td>
                    <td className="px-5 py-3">
                      <span className="font-mono text-xs text-yellow-400 flex items-center gap-1">
                        <Star size={10} className="fill-yellow-400" /> {t.rating}
                      </span>
                    </td>
                    <td className="px-5 py-3">
                      <span className="inline-flex items-center gap-1 font-mono text-[8px] text-green-400">
                        <CheckCircle size={9} /> ACTIVE
                      </span>
                    </td>
                    <td className="px-5 py-3">
                      <button className="text-[#5a7a8a] hover:text-white bg-transparent border-none cursor-pointer"><MoreVertical size={14} /></button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
