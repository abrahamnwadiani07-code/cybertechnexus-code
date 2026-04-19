import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { User, Bell, Shield, Globe, Key, Save, CheckCircle } from 'lucide-react';

export default function SettingsPage() {
  const { user } = useAuth();
  const [saved, setSaved] = useState(false);
  const [settings, setSettings] = useState({
    name: user?.name || '', email: user?.email || '', company: user?.company || '', timezone: 'America/Chicago',
    emailNotifications: true, slackNotifications: false, incidentAlerts: true, complianceAlerts: true, weeklyDigest: true,
    mfaEnabled: true, sessionTimeout: '30', ipWhitelist: '',
  });

  const handleSave = () => { setSaved(true); setTimeout(() => setSaved(false), 2000); };

  const Toggle = ({ checked, onChange }: { checked: boolean; onChange: () => void }) => (
    <button onClick={onChange} className={`w-10 h-5 rounded-full transition-colors cursor-pointer border-none ${checked ? 'bg-ctn-blue' : 'bg-white/[0.1]'}`}>
      <div className={`w-4 h-4 rounded-full bg-white shadow transition-transform ${checked ? 'translate-x-5' : 'translate-x-0.5'}`} />
    </button>
  );

  const Input = ({ label, value, onChange, type = 'text' }: { label: string; value: string; onChange: (v: string) => void; type?: string }) => (
    <div>
      <label className="block font-poppins text-xs font-medium text-[#5a7a8a] mb-2">{label}</label>
      <input type={type} value={value} onChange={(e) => onChange(e.target.value)}
        className="w-full bg-white/[0.04] border border-white/[0.08] rounded-lg px-4 py-2.5 text-sm text-white font-poppins focus:outline-none focus:border-ctn-blue/40 transition-all"
        style={{ boxSizing: 'border-box' }} />
    </div>
  );

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-poppins font-bold text-2xl text-white">Settings</h1>
          <p className="font-poppins text-sm text-[#5a7a8a] mt-1">Manage your account and portal preferences.</p>
        </div>
        <button onClick={handleSave}
          className="flex items-center gap-2 bg-gradient-to-r from-ctn-blue to-[#1050cc] text-white font-poppins font-semibold text-xs py-2.5 px-5 rounded-lg border-none cursor-pointer">
          {saved ? <><CheckCircle size={14} /> Saved!</> : <><Save size={14} /> Save Changes</>}
        </button>
      </div>

      {/* Profile */}
      <div className="bg-[#0a1525] border border-white/[0.06] rounded-xl p-6">
        <div className="flex items-center gap-2 mb-5">
          <User size={16} className="text-ctn-blue" />
          <h2 className="font-poppins font-semibold text-sm text-white">Profile</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <Input label="Full Name" value={settings.name} onChange={(v) => setSettings({ ...settings, name: v })} />
          <Input label="Email" value={settings.email} onChange={(v) => setSettings({ ...settings, email: v })} type="email" />
          <Input label="Company" value={settings.company} onChange={(v) => setSettings({ ...settings, company: v })} />
          <div>
            <label className="block font-poppins text-xs font-medium text-[#5a7a8a] mb-2">Timezone</label>
            <select value={settings.timezone} onChange={(e) => setSettings({ ...settings, timezone: e.target.value })}
              className="w-full bg-white/[0.04] border border-white/[0.08] rounded-lg px-4 py-2.5 text-sm text-white font-poppins focus:outline-none focus:border-ctn-blue/40"
              style={{ boxSizing: 'border-box' }}>
              <option value="America/Chicago">Central Time (CT)</option>
              <option value="America/New_York">Eastern Time (ET)</option>
              <option value="America/Los_Angeles">Pacific Time (PT)</option>
              <option value="Europe/London">GMT</option>
              <option value="Africa/Lagos">West Africa Time</option>
            </select>
          </div>
        </div>
      </div>

      {/* Notifications */}
      <div className="bg-[#0a1525] border border-white/[0.06] rounded-xl p-6">
        <div className="flex items-center gap-2 mb-5">
          <Bell size={16} className="text-ctn-blue" />
          <h2 className="font-poppins font-semibold text-sm text-white">Notifications</h2>
        </div>
        <div className="space-y-4">
          {[
            { label: 'Email notifications', key: 'emailNotifications' as const, desc: 'Receive notifications via email' },
            { label: 'Slack notifications', key: 'slackNotifications' as const, desc: 'Send alerts to your Slack channel' },
            { label: 'Incident alerts', key: 'incidentAlerts' as const, desc: 'Immediate alerts for new incidents' },
            { label: 'Compliance alerts', key: 'complianceAlerts' as const, desc: 'Alerts when controls fail or drift' },
            { label: 'Weekly digest', key: 'weeklyDigest' as const, desc: 'Summary of weekly security activity' },
          ].map((item) => (
            <div key={item.key} className="flex items-center justify-between py-2">
              <div>
                <span className="font-poppins text-sm text-white block">{item.label}</span>
                <span className="font-poppins text-xs text-[#5a7a8a]">{item.desc}</span>
              </div>
              <Toggle checked={settings[item.key] as boolean} onChange={() => setSettings({ ...settings, [item.key]: !settings[item.key] })} />
            </div>
          ))}
        </div>
      </div>

      {/* Security */}
      <div className="bg-[#0a1525] border border-white/[0.06] rounded-xl p-6">
        <div className="flex items-center gap-2 mb-5">
          <Shield size={16} className="text-ctn-blue" />
          <h2 className="font-poppins font-semibold text-sm text-white">Security</h2>
        </div>
        <div className="space-y-4">
          <div className="flex items-center justify-between py-2">
            <div>
              <span className="font-poppins text-sm text-white block">Multi-factor authentication</span>
              <span className="font-poppins text-xs text-[#5a7a8a]">Require MFA for portal access</span>
            </div>
            <Toggle checked={settings.mfaEnabled} onChange={() => setSettings({ ...settings, mfaEnabled: !settings.mfaEnabled })} />
          </div>
          <Input label="Session Timeout (minutes)" value={settings.sessionTimeout} onChange={(v) => setSettings({ ...settings, sessionTimeout: v })} />
          <Input label="IP Whitelist (comma-separated)" value={settings.ipWhitelist} onChange={(v) => setSettings({ ...settings, ipWhitelist: v })} />
        </div>
      </div>
    </div>
  );
}
