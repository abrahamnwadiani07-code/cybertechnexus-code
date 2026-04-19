// ── Compliance Frameworks ──
export const frameworks = [
  { id: 'iso27001', name: 'ISO 27001', totalControls: 114, passing: 107, failing: 4, notApplicable: 3, progress: 94, status: 'on-track' as const, nextAudit: '2027-01-15' },
  { id: 'gdpr', name: 'GDPR', totalControls: 70, passing: 64, failing: 3, notApplicable: 3, progress: 91, status: 'on-track' as const, nextAudit: '2027-03-20' },
  { id: 'hipaa', name: 'HIPAA', totalControls: 54, passing: 41, failing: 8, notApplicable: 5, progress: 76, status: 'attention' as const, nextAudit: '2027-02-10' },
  { id: 'nist', name: 'NIST CSF', totalControls: 104, passing: 72, failing: 18, notApplicable: 14, progress: 69, status: 'attention' as const, nextAudit: '2027-04-01' },
  { id: 'pci', name: 'PCI DSS', totalControls: 242, passing: 198, failing: 28, notApplicable: 16, progress: 82, status: 'on-track' as const, nextAudit: '2026-12-15' },
  { id: 'dora', name: 'DORA', totalControls: 93, passing: 87, failing: 4, notApplicable: 2, progress: 94, status: 'on-track' as const, nextAudit: '2027-06-01' },
];

// ── Risks ──
export type RiskSeverity = 'critical' | 'high' | 'medium' | 'low';
export type RiskStatus = 'open' | 'mitigating' | 'accepted' | 'closed';

export const risks = [
  { id: 'R-001', title: 'Unpatched critical CVEs on production servers', severity: 'critical' as RiskSeverity, status: 'mitigating' as RiskStatus, owner: 'DevOps Team', category: 'Vulnerability Management', likelihood: 4, impact: 5, score: 20, dueDate: '2026-04-25', created: '2026-04-10' },
  { id: 'R-002', title: 'Third-party vendor without security assessment', severity: 'high' as RiskSeverity, status: 'open' as RiskStatus, owner: 'GRC Team', category: 'Vendor Risk', likelihood: 3, impact: 4, score: 12, dueDate: '2026-05-01', created: '2026-03-28' },
  { id: 'R-003', title: 'MFA not enforced on legacy applications', severity: 'high' as RiskSeverity, status: 'mitigating' as RiskStatus, owner: 'IT Security', category: 'Access Control', likelihood: 3, impact: 4, score: 12, dueDate: '2026-05-15', created: '2026-03-15' },
  { id: 'R-004', title: 'Incomplete data classification for cloud storage', severity: 'medium' as RiskSeverity, status: 'open' as RiskStatus, owner: 'Data Team', category: 'Data Protection', likelihood: 2, impact: 3, score: 6, dueDate: '2026-06-01', created: '2026-04-01' },
  { id: 'R-005', title: 'Phishing click rate above 15% threshold', severity: 'medium' as RiskSeverity, status: 'mitigating' as RiskStatus, owner: 'Security Awareness', category: 'Human Risk', likelihood: 3, impact: 2, score: 6, dueDate: '2026-05-30', created: '2026-04-05' },
  { id: 'R-006', title: 'DR failover not tested in 6+ months', severity: 'high' as RiskSeverity, status: 'open' as RiskStatus, owner: 'Infrastructure', category: 'Business Continuity', likelihood: 2, impact: 5, score: 10, dueDate: '2026-05-10', created: '2026-03-20' },
  { id: 'R-007', title: 'API rate limiting not configured on public endpoints', severity: 'medium' as RiskSeverity, status: 'closed' as RiskStatus, owner: 'Engineering', category: 'Application Security', likelihood: 2, impact: 3, score: 6, dueDate: '2026-04-15', created: '2026-03-10' },
  { id: 'R-008', title: 'Employee offboarding process exceeds 24hr SLA', severity: 'low' as RiskSeverity, status: 'accepted' as RiskStatus, owner: 'HR / IT', category: 'Access Control', likelihood: 2, impact: 2, score: 4, dueDate: '2026-07-01', created: '2026-02-15' },
];

// ── Incidents ──
export type IncidentSeverity = 'P1' | 'P2' | 'P3' | 'P4';
export type IncidentStatus = 'open' | 'investigating' | 'contained' | 'resolved' | 'closed';

export const incidents = [
  { id: 'INC-2024-042', title: 'Suspicious login attempts from unknown IP range', severity: 'P2' as IncidentSeverity, status: 'investigating' as IncidentStatus, assignee: 'Marcus Chen', created: '2026-04-18T14:30:00Z', updated: '2026-04-18T15:45:00Z', category: 'Unauthorized Access', ttd: '3 min', ttr: null },
  { id: 'INC-2024-041', title: 'Phishing email campaign targeting finance team', severity: 'P2' as IncidentSeverity, status: 'contained' as IncidentStatus, assignee: 'Sarah Kim', created: '2026-04-17T09:15:00Z', updated: '2026-04-17T10:02:00Z', category: 'Social Engineering', ttd: '5 min', ttr: '47 min' },
  { id: 'INC-2024-040', title: 'SSL certificate expiry warning — staging environment', severity: 'P3' as IncidentSeverity, status: 'resolved' as IncidentStatus, assignee: 'DevOps Team', created: '2026-04-16T11:00:00Z', updated: '2026-04-16T13:30:00Z', category: 'Configuration', ttd: '12 min', ttr: '2.5 hrs' },
  { id: 'INC-2024-039', title: 'DDoS attempt on public API gateway', severity: 'P1' as IncidentSeverity, status: 'closed' as IncidentStatus, assignee: 'Marcus Chen', created: '2026-04-14T03:22:00Z', updated: '2026-04-14T04:10:00Z', category: 'Availability', ttd: '1 min', ttr: '48 min' },
  { id: 'INC-2024-038', title: 'Malware detected on contractor laptop', severity: 'P2' as IncidentSeverity, status: 'closed' as IncidentStatus, assignee: 'IT Security', created: '2026-04-12T16:45:00Z', updated: '2026-04-13T09:00:00Z', category: 'Malware', ttd: '8 min', ttr: '16 hrs' },
  { id: 'INC-2024-037', title: 'Unauthorized S3 bucket access attempt', severity: 'P3' as IncidentSeverity, status: 'closed' as IncidentStatus, assignee: 'Cloud Team', created: '2026-04-10T08:30:00Z', updated: '2026-04-10T09:15:00Z', category: 'Cloud Security', ttd: '4 min', ttr: '45 min' },
];

// ── Assets ──
export type AssetType = 'server' | 'endpoint' | 'application' | 'database' | 'network' | 'cloud';
export type AssetCriticality = 'critical' | 'high' | 'medium' | 'low';

export const assets = [
  { id: 'A-001', name: 'prod-api-gateway', type: 'cloud' as AssetType, criticality: 'critical' as AssetCriticality, owner: 'Engineering', location: 'AWS us-east-1', lastScan: '2026-04-18', vulns: 0, status: 'compliant' },
  { id: 'A-002', name: 'prod-database-primary', type: 'database' as AssetType, criticality: 'critical' as AssetCriticality, owner: 'DBA Team', location: 'AWS us-east-1', lastScan: '2026-04-18', vulns: 1, status: 'attention' },
  { id: 'A-003', name: 'compliance-board-os', type: 'application' as AssetType, criticality: 'critical' as AssetCriticality, owner: 'Product Team', location: 'AWS us-east-1', lastScan: '2026-04-17', vulns: 0, status: 'compliant' },
  { id: 'A-004', name: 'corp-firewall-01', type: 'network' as AssetType, criticality: 'high' as AssetCriticality, owner: 'Network Team', location: 'Texas DC', lastScan: '2026-04-16', vulns: 0, status: 'compliant' },
  { id: 'A-005', name: 'mail-server', type: 'server' as AssetType, criticality: 'high' as AssetCriticality, owner: 'IT Ops', location: 'Azure West US', lastScan: '2026-04-15', vulns: 2, status: 'attention' },
  { id: 'A-006', name: 'dev-workstation-pool', type: 'endpoint' as AssetType, criticality: 'medium' as AssetCriticality, owner: 'Engineering', location: 'Remote', lastScan: '2026-04-14', vulns: 3, status: 'non-compliant' },
  { id: 'A-007', name: 'staging-environment', type: 'cloud' as AssetType, criticality: 'medium' as AssetCriticality, owner: 'DevOps', location: 'AWS us-west-2', lastScan: '2026-04-18', vulns: 5, status: 'non-compliant' },
  { id: 'A-008', name: 'backup-storage', type: 'cloud' as AssetType, criticality: 'high' as AssetCriticality, owner: 'Infrastructure', location: 'AWS us-east-1', lastScan: '2026-04-17', vulns: 0, status: 'compliant' },
];

// ── Team ──
export const teamMembers = [
  { id: '1', name: 'Abraham N.', email: 'abraham@cybertechnexus.com', role: 'Admin', department: 'Leadership', status: 'active', lastActive: '2026-04-18T16:00:00Z', mfa: true },
  { id: '2', name: 'Marcus Chen', email: 'marcus@cybertechnexus.com', role: 'Lead Analyst', department: 'Security Operations', status: 'active', lastActive: '2026-04-18T15:45:00Z', mfa: true },
  { id: '3', name: 'Sarah Kim', email: 'sarah@cybertechnexus.com', role: 'Incident Responder', department: 'Security Operations', status: 'active', lastActive: '2026-04-18T14:30:00Z', mfa: true },
  { id: '4', name: 'James Adewale', email: 'james@cybertechnexus.com', role: 'GRC Specialist', department: 'Compliance', status: 'active', lastActive: '2026-04-18T12:00:00Z', mfa: true },
  { id: '5', name: 'Dr. Amara Osei', email: 'amara@cybertechnexus.com', role: 'Penetration Tester', department: 'Offensive Security', status: 'active', lastActive: '2026-04-17T18:00:00Z', mfa: true },
  { id: '6', name: 'David Park', email: 'david@cybertechnexus.com', role: 'Cloud Security Engineer', department: 'Engineering', status: 'away', lastActive: '2026-04-16T09:00:00Z', mfa: true },
  { id: '7', name: 'Elena Volkov', email: 'elena@cybertechnexus.com', role: 'Training Lead', department: 'Academy', status: 'active', lastActive: '2026-04-18T11:30:00Z', mfa: true },
  { id: '8', name: 'Contract Analyst', email: 'contractor@external.com', role: 'Viewer', department: 'External', status: 'inactive', lastActive: '2026-04-01T10:00:00Z', mfa: false },
];

// ── Activity Log ──
export const activityLog = [
  { id: 1, action: 'Control status updated', detail: 'ISO 27001 A.8.1 — marked as passing', user: 'James Adewale', time: '2 min ago', type: 'compliance' },
  { id: 2, action: 'Incident created', detail: 'INC-2024-042 — Suspicious login attempts', user: 'System', time: '18 min ago', type: 'incident' },
  { id: 3, action: 'Risk score updated', detail: 'R-001 — Score changed from 25 to 20', user: 'Marcus Chen', time: '1 hr ago', type: 'risk' },
  { id: 4, action: 'Evidence uploaded', detail: '142 artifacts auto-collected from AWS', user: 'System', time: '2 hrs ago', type: 'compliance' },
  { id: 5, action: 'Vulnerability scan completed', detail: 'prod-api-gateway — 0 findings', user: 'System', time: '3 hrs ago', type: 'asset' },
  { id: 6, action: 'User access reviewed', detail: 'Quarterly access review — Engineering team', user: 'Abraham N.', time: '4 hrs ago', type: 'access' },
  { id: 7, action: 'Report generated', detail: 'Monthly compliance report — April 2026', user: 'James Adewale', time: '5 hrs ago', type: 'report' },
  { id: 8, action: 'Incident resolved', detail: 'INC-2024-040 — SSL certificate renewed', user: 'DevOps Team', time: '6 hrs ago', type: 'incident' },
  { id: 9, action: 'Training completed', detail: 'Q1 Security Awareness — 94% completion', user: 'Elena Volkov', time: '1 day ago', type: 'training' },
  { id: 10, action: 'Pen test scheduled', detail: 'Annual external pen test — May 5, 2026', user: 'Dr. Amara Osei', time: '1 day ago', type: 'assessment' },
];
