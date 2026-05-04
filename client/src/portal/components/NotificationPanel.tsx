import { useState } from 'react';
import { Bell, X, AlertTriangle, CheckCircle, Info, Shield } from 'lucide-react';

const notifications = [
  { id: 1, type: 'alert', icon: AlertTriangle, title: 'Critical vulnerability detected', message: 'CVE-2025-1234 affects 3 assets in your environment. Patch available.', time: '5 min ago', read: false },
  { id: 2, type: 'success', icon: CheckCircle, title: 'ISO 27001 audit prep complete', message: 'All 114 controls documented. Ready for external audit.', time: '1 hour ago', read: false },
  { id: 3, type: 'info', icon: Info, title: 'Weekly security report ready', message: 'Your compliance score improved by 3% this week.', time: '3 hours ago', read: true },
  { id: 4, type: 'alert', icon: Shield, title: 'Unusual login attempt blocked', message: 'Login from unrecognized IP (185.x.x.x) was blocked by MFA.', time: '6 hours ago', read: true },
  { id: 5, type: 'success', icon: CheckCircle, title: 'Phishing simulation complete', message: '94% of employees passed. 3 users need additional training.', time: '1 day ago', read: true },
];

export default function NotificationPanel() {
  const [open, setOpen] = useState(false);
  const unread = notifications.filter(n => !n.read).length;

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="relative w-9 h-9 rounded-lg border border-[#1a2a3a] flex items-center justify-center text-[#6b8aaa] hover:text-white hover:border-[#1a6bff]/30 transition-all cursor-pointer bg-transparent"
      >
        <Bell size={16} />
        {unread > 0 && (
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#ff3b5c] rounded-full text-[9px] text-white flex items-center justify-center font-bold">
            {unread}
          </span>
        )}
      </button>

      {open && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />
          <div className="absolute right-0 top-12 z-50 w-[380px] max-h-[480px] overflow-hidden rounded-xl border border-[#1a2a3a] bg-[#081e2e] shadow-2xl shadow-black/40">
            <div className="flex items-center justify-between p-4 border-b border-[#1a2a3a]">
              <h3 className="font-semibold text-sm text-white">Notifications</h3>
              <button onClick={() => setOpen(false)} className="text-[#6b8aaa] hover:text-white bg-transparent border-none cursor-pointer">
                <X size={14} />
              </button>
            </div>
            <div className="overflow-y-auto max-h-[380px]">
              {notifications.map(n => (
                <div key={n.id} className={`p-4 border-b border-[#1a2a3a] hover:bg-[#0a2540] transition-colors ${!n.read ? 'bg-[#1a6bff]/5' : ''}`}>
                  <div className="flex gap-3">
                    <n.icon size={16} className={`mt-0.5 flex-shrink-0 ${
                      n.type === 'alert' ? 'text-[#ff3b5c]' : n.type === 'success' ? 'text-green-400' : 'text-[#1a6bff]'
                    }`} />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <p className="text-sm font-medium text-white truncate">{n.title}</p>
                        {!n.read && <span className="w-2 h-2 rounded-full bg-[#1a6bff] flex-shrink-0" />}
                      </div>
                      <p className="text-xs text-[#6b8aaa] mt-0.5">{n.message}</p>
                      <p className="text-[10px] text-[#4a6a8a] mt-1">{n.time}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="p-3 border-t border-[#1a2a3a] text-center">
              <button className="text-xs text-[#1a6bff] hover:text-white transition-colors bg-transparent border-none cursor-pointer">
                View all notifications
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
