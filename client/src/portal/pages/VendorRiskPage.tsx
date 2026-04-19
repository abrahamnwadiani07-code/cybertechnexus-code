import { useState } from 'react';
import { Globe, Shield, AlertTriangle, CheckCircle, Clock, ExternalLink, FileText, Search } from 'lucide-react';

type VendorRisk = 'critical' | 'high' | 'medium' | 'low';
type VendorStatus = 'approved' | 'under-review' | 'pending' | 'rejected';

const riskColor: Record<VendorRisk, string> = { critical: '#ff3b5c', high: '#ff6b35', medium: '#ffb039', low: '#22c55e' };
const statusStyle: Record<VendorStatus, { color: string; label: string }> = {
  approved: { color: '#22c55e', label: 'APPROVED' },
  'under-review': { color: '#ffb039', label: 'UNDER REVIEW' },
  pending: { color: '#5a7a8a', label: 'PENDING' },
  rejected: { color: '#ff3b5c', label: 'REJECTED' },
};

const vendors = [
  { id: 'V-001', name: 'AWS (Amazon Web Services)', category: 'Cloud Infrastructure', risk: 'low' as VendorRisk, status: 'approved' as VendorStatus, lastAssessment: '2026-03-15', nextReview: '2026-09-15', dataAccess: 'Critical', soc2: true, iso27001: true, gdpr: true, contacts: 'aws-security@amazon.com' },
  { id: 'V-002', name: 'Slack Technologies', category: 'Communications', risk: 'low' as VendorRisk, status: 'approved' as VendorStatus, lastAssessment: '2026-02-20', nextReview: '2026-08-20', dataAccess: 'Internal', soc2: true, iso27001: true, gdpr: true, contacts: 'security@slack.com' },
  { id: 'V-003', name: 'CloudDB Solutions', category: 'Database Provider', risk: 'high' as VendorRisk, status: 'under-review' as VendorStatus, lastAssessment: '2025-11-10', nextReview: '2026-05-10', dataAccess: 'Critical', soc2: false, iso27001: false, gdpr: true, contacts: 'info@clouddb.io' },
  { id: 'V-004', name: 'Okta Identity', category: 'Identity & Access', risk: 'low' as VendorRisk, status: 'approved' as VendorStatus, lastAssessment: '2026-01-30', nextReview: '2026-07-30', dataAccess: 'Critical', soc2: true, iso27001: true, gdpr: true, contacts: 'security@okta.com' },
  { id: 'V-005', name: 'PaymentPro Inc.', category: 'Payment Processing', risk: 'medium' as VendorRisk, status: 'approved' as VendorStatus, lastAssessment: '2026-03-01', nextReview: '2026-09-01', dataAccess: 'Restricted', soc2: true, iso27001: false, gdpr: true, contacts: 'compliance@paymentpro.com' },
  { id: 'V-006', name: 'NewStartup Analytics', category: 'Data Analytics', risk: 'high' as VendorRisk, status: 'pending' as VendorStatus, lastAssessment: 'Never', nextReview: '2026-04-30', dataAccess: 'Confidential', soc2: false, iso27001: false, gdpr: false, contacts: 'hello@newstartup.io' },
  { id: 'V-007', name: 'Datadog', category: 'Monitoring', risk: 'low' as VendorRisk, status: 'approved' as VendorStatus, lastAssessment: '2026-02-15', nextReview: '2026-08-15', dataAccess: 'Internal', soc2: true, iso27001: true, gdpr: true, contacts: 'security@datadoghq.com' },
  { id: 'V-008', name: 'ShadowNet Hosting', category: 'Web Hosting', risk: 'critical' as VendorRisk, status: 'rejected' as VendorStatus, lastAssessment: '2026-01-05', nextReview: 'N/A', dataAccess: 'None', soc2: false, iso27001: false, gdpr: false, contacts: 'support@shadownet.xyz' },
];

export default function VendorRiskPage() {
  const [search, setSearch] = useState('');
  const filtered = vendors.filter((v) => v.name.toLowerCase().includes(search.toLowerCase()) || v.category.toLowerCase().includes(search.toLowerCase()));

  const stats = {
    total: vendors.length,
    approved: vendors.filter((v) => v.status === 'approved').length,
    highRisk: vendors.filter((v) => v.risk === 'high' || v.risk === 'critical').length,
    overdue: vendors.filter((v) => v.lastAssessment === 'Never' || new Date(v.nextReview) < new Date()).length,
  };

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-poppins font-bold text-2xl text-white">Vendor Risk Management</h1>
          <p className="font-poppins text-sm text-[#5a7a8a] mt-1">Assess, monitor, and manage third-party vendor risk.</p>
        </div>
        <button className="flex items-center gap-2 bg-gradient-to-r from-ctn-blue to-[#1050cc] text-white font-poppins font-semibold text-xs py-2.5 px-5 rounded-lg border-none cursor-pointer">
          + Add Vendor
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-4">
        {[
          { label: 'Total Vendors', value: stats.total, icon: Globe, color: '#1a6bff' },
          { label: 'Approved', value: stats.approved, icon: CheckCircle, color: '#22c55e' },
          { label: 'High/Critical Risk', value: stats.highRisk, icon: AlertTriangle, color: '#ff3b5c' },
          { label: 'Reviews Overdue', value: stats.overdue, icon: Clock, color: '#ffb039' },
        ].map((s) => {
          const Icon = s.icon;
          return (
            <div key={s.label} className="bg-[#0a1525] border border-white/[0.06] rounded-xl p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="font-poppins text-[10px] text-[#5a7a8a]">{s.label}</span>
                <Icon size={14} style={{ color: s.color }} />
              </div>
              <span className="font-poppins font-bold text-xl text-white">{s.value}</span>
            </div>
          );
        })}
      </div>

      {/* Search */}
      <div className="flex items-center gap-2 bg-white/[0.04] border border-white/[0.06] rounded-lg px-3 py-2 w-80">
        <Search size={14} className="text-[#5a7a8a]" />
        <input type="text" placeholder="Search vendors..." value={search} onChange={(e) => setSearch(e.target.value)}
          className="bg-transparent border-none outline-none text-sm text-white placeholder:text-[#3a5a6a] font-poppins w-full" />
      </div>

      {/* Table */}
      <div className="bg-[#0a1525] border border-white/[0.06] rounded-xl overflow-hidden">
        <div className="grid grid-cols-[60px_1fr_120px_70px_90px_80px_100px_100px] gap-3 px-5 py-3 border-b border-white/[0.06] font-poppins text-[10px] text-[#5a7a8a] uppercase tracking-wider">
          <span>ID</span><span>Vendor</span><span>Category</span><span>Risk</span><span>Status</span><span>Data</span><span>Certifications</span><span>Next Review</span>
        </div>
        {filtered.map((v) => {
          const st = statusStyle[v.status];
          return (
            <div key={v.id} className="grid grid-cols-[60px_1fr_120px_70px_90px_80px_100px_100px] gap-3 px-5 py-3.5 border-b border-white/[0.03] hover:bg-white/[0.02] cursor-pointer items-center">
              <span className="font-mono text-xs text-[#5a7a8a]">{v.id}</span>
              <span className="font-poppins text-sm text-white truncate">{v.name}</span>
              <span className="font-poppins text-[10px] text-[#5a7a8a]">{v.category}</span>
              <span className="font-mono text-[9px] px-2 py-0.5 rounded text-center" style={{ color: riskColor[v.risk], background: riskColor[v.risk] + '15' }}>
                {v.risk.toUpperCase()}
              </span>
              <span className="font-mono text-[9px] px-2 py-0.5 rounded text-center" style={{ color: st.color, background: st.color + '15' }}>
                {st.label}
              </span>
              <span className="font-mono text-[9px] text-[#5a7a8a]">{v.dataAccess}</span>
              <div className="flex gap-1">
                {v.soc2 && <span className="font-mono text-[7px] text-green-400 bg-green-400/10 px-1 py-0.5 rounded">SOC2</span>}
                {v.iso27001 && <span className="font-mono text-[7px] text-ctn-blue bg-ctn-blue/10 px-1 py-0.5 rounded">ISO</span>}
                {v.gdpr && <span className="font-mono text-[7px] text-purple-400 bg-purple-400/10 px-1 py-0.5 rounded">GDPR</span>}
                {!v.soc2 && !v.iso27001 && !v.gdpr && <span className="font-mono text-[7px] text-[#ff3b5c]">NONE</span>}
              </div>
              <span className="font-mono text-[10px] text-[#5a7a8a]">{v.nextReview}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
