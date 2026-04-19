import { NavLink, Outlet, Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import {
  LayoutDashboard, Shield, AlertTriangle, FileText, Server,
  Users, Settings, LogOut, Bell, Search, ChevronDown,
  Activity, BookOpen, Globe, FolderOpen
} from 'lucide-react';
import { useState } from 'react';

const navItems = [
  { to: '/portal/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
  { to: '/portal/compliance', icon: Shield, label: 'Compliance' },
  { to: '/portal/risks', icon: AlertTriangle, label: 'Risk Register' },
  { to: '/portal/incidents', icon: Activity, label: 'Incidents' },
  { to: '/portal/assets', icon: Server, label: 'Assets' },
  { to: '/portal/vendors', icon: Globe, label: 'Vendor Risk' },
  { to: '/portal/evidence', icon: FolderOpen, label: 'Evidence' },
  { to: '/portal/reports', icon: FileText, label: 'Reports' },
  { to: '/portal/team', icon: Users, label: 'Team' },
  { to: '/portal/audit-log', icon: BookOpen, label: 'Audit Log' },
  { to: '/portal/settings', icon: Settings, label: 'Settings' },
];

export default function PortalLayout() {
  const { user, isAuthenticated, logout } = useAuth();
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const location = useLocation();

  if (!isAuthenticated) return <Navigate to="/portal/login" state={{ from: location }} replace />;

  return (
    <div className="flex h-screen bg-[#030b14] overflow-hidden">
      {/* Sidebar */}
      <aside className={`flex flex-col border-r border-white/[0.06] bg-[#050d18] transition-all duration-300 ${sidebarCollapsed ? 'w-[68px]' : 'w-[240px]'}`}>
        {/* Logo */}
        <div className="h-16 flex items-center px-4 border-b border-white/[0.06] gap-3">
          <img src="/ctn-logo.png" alt="CTN" className="w-8 h-8 rounded-lg flex-shrink-0" />
          {!sidebarCollapsed && (
            <div className="overflow-hidden">
              <div className="font-poppins font-bold text-sm text-white leading-tight truncate">CTN Portal</div>
              <div className="font-mono text-[8px] text-ctn-blue tracking-wider">COMPLIANCE OS</div>
            </div>
          )}
        </div>

        {/* Nav */}
        <nav className="flex-1 py-4 px-2 space-y-0.5 overflow-y-auto">
          {navItems.map(({ to, icon: Icon, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-poppins font-medium transition-all no-underline ${
                  isActive
                    ? 'bg-ctn-blue/10 text-ctn-blue'
                    : 'text-[#5a7a8a] hover:text-white hover:bg-white/[0.04]'
                }`
              }
            >
              <Icon size={18} className="flex-shrink-0" />
              {!sidebarCollapsed && <span className="truncate">{label}</span>}
            </NavLink>
          ))}
        </nav>

        {/* Bottom */}
        <div className="p-3 border-t border-white/[0.06]">
          <button
            onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
            className="w-full flex items-center justify-center py-2 text-[#5a7a8a] hover:text-white bg-transparent border-none cursor-pointer rounded-lg hover:bg-white/[0.04] transition-colors"
          >
            <ChevronDown size={16} className={`transition-transform ${sidebarCollapsed ? 'rotate-90' : '-rotate-90'}`} />
          </button>
        </div>
      </aside>

      {/* Main */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Topbar */}
        <header className="h-16 flex items-center justify-between px-6 border-b border-white/[0.06] bg-[#050d18]/80 backdrop-blur-sm">
          {/* Search */}
          <div className="flex items-center gap-2 bg-white/[0.04] border border-white/[0.06] rounded-lg px-3 py-2 w-80">
            <Search size={14} className="text-[#5a7a8a]" />
            <input
              type="text" placeholder="Search controls, risks, incidents..."
              className="bg-transparent border-none outline-none text-sm text-white placeholder:text-[#3a5a6a] font-poppins w-full"
            />
            <kbd className="text-[9px] text-[#3a5a6a] bg-white/[0.06] px-1.5 py-0.5 rounded font-mono">⌘K</kbd>
          </div>

          {/* Right */}
          <div className="flex items-center gap-3">
            {/* Live indicator */}
            <div className="flex items-center gap-2 px-3 py-1.5 bg-green-500/10 border border-green-500/20 rounded-full">
              <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
              <span className="font-mono text-[9px] text-green-400 tracking-wider">LIVE</span>
            </div>

            {/* Notifications */}
            <div className="relative">
              <button
                onClick={() => { setShowNotifications(!showNotifications); setShowUserMenu(false); }}
                className="relative p-2 text-[#5a7a8a] hover:text-white bg-transparent border-none cursor-pointer rounded-lg hover:bg-white/[0.04] transition-colors"
              >
                <Bell size={18} />
                <span className="absolute top-1 right-1 w-2 h-2 bg-ctn-red rounded-full" />
              </button>
              {showNotifications && (
                <div className="absolute right-0 top-12 w-80 bg-[#0a1525] border border-white/[0.08] rounded-xl shadow-2xl z-50 p-2">
                  {[
                    { text: 'Suspicious login attempts detected', time: '18 min ago', type: 'alert' },
                    { text: 'ISO 27001 control A.8.1 updated', time: '1 hr ago', type: 'info' },
                    { text: 'Monthly report ready for review', time: '5 hrs ago', type: 'info' },
                  ].map((n, i) => (
                    <div key={i} className="px-3 py-2.5 rounded-lg hover:bg-white/[0.04] cursor-pointer">
                      <div className="flex items-start gap-2">
                        <div className={`w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 ${n.type === 'alert' ? 'bg-ctn-red' : 'bg-ctn-blue'}`} />
                        <div>
                          <p className="font-poppins text-xs text-white">{n.text}</p>
                          <span className="font-mono text-[9px] text-[#5a7a8a]">{n.time}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* User menu */}
            <div className="relative">
              <button
                onClick={() => { setShowUserMenu(!showUserMenu); setShowNotifications(false); }}
                className="flex items-center gap-2 px-2 py-1.5 bg-transparent border-none cursor-pointer rounded-lg hover:bg-white/[0.04] transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-ctn-blue/20 border border-ctn-blue/30 flex items-center justify-center font-poppins font-bold text-xs text-ctn-blue">
                  {user?.avatar}
                </div>
                <div className="text-left hidden md:block">
                  <div className="font-poppins text-xs text-white font-medium">{user?.name}</div>
                  <div className="font-mono text-[9px] text-[#5a7a8a]">{user?.role}</div>
                </div>
                <ChevronDown size={12} className="text-[#5a7a8a]" />
              </button>
              {showUserMenu && (
                <div className="absolute right-0 top-12 w-48 bg-[#0a1525] border border-white/[0.08] rounded-xl shadow-2xl z-50 p-1">
                  <NavLink to="/portal/settings" className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-[#5a7a8a] hover:text-white hover:bg-white/[0.04] no-underline font-poppins" onClick={() => setShowUserMenu(false)}>
                    <Settings size={14} /> Settings
                  </NavLink>
                  <button onClick={logout} className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-ctn-red hover:bg-ctn-red/10 bg-transparent border-none cursor-pointer font-poppins">
                    <LogOut size={14} /> Sign Out
                  </button>
                </div>
              )}
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-y-auto p-6 bg-[#030b14]" onClick={() => { setShowNotifications(false); setShowUserMenu(false); }}>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
