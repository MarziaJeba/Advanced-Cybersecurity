import { NavLink } from 'react-router-dom';

const navItems = [
  { path: '/',                    label: 'Dashboard',             icon: '📊' },
  { path: '/threat-monitoring',   label: 'Threat Monitoring',     icon: '🔍' },
  { path: '/intrusion-detection', label: 'Intrusion Detection',   icon: '🛡️' },
  { path: '/alert-dashboard',     label: 'Security Alerts',       icon: '🔔' },
  { path: '/log-analysis',        label: 'Log Analysis',          icon: '📋' },
  { path: '/anomaly-detection',   label: 'Anomaly Detection',     icon: '🤖' },
  { path: '/user-behavior',       label: 'User Behavior',         icon: '👤' },
  { path: '/incident-response',   label: 'Incident Response',     icon: '🚨' },
  { path: '/threat-intelligence', label: 'Threat Intel',          icon: '🌐' },
  { path: '/admin-panel',         label: 'Admin Panel',           icon: '⚙️' },
  { path: '/reports',             label: 'Reports',               icon: '📄' },
];

export default function Sidebar() {
  return (
    <aside className="hidden lg:flex w-64 flex-col bg-white border-r border-surface-200 shadow-sm">
      {/* Brand */}
      <div className="flex items-center gap-3 px-6 py-5 border-b border-surface-200">
        <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-accent to-accent-dark flex items-center justify-center shadow-md shadow-accent/20">
          <span className="text-white text-lg font-bold">C</span>
        </div>
        <div>
          <h1 className="text-base font-bold text-surface-900 tracking-tight">CyberGuard</h1>
          <p className="text-[10px] uppercase tracking-widest text-surface-500 font-medium">Security Suite</p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-0.5">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.path === '/'}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 group
              ${
                isActive
                  ? 'bg-accent/10 text-accent-dark'
                  : 'text-surface-600 hover:bg-surface-50 hover:text-surface-900'
              }`
            }
          >
            <span className="text-base group-hover:scale-110 transition-transform duration-200">
              {item.icon}
            </span>
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>

      {/* Footer */}
      <div className="px-4 py-4 border-t border-surface-200">
        <div className="flex items-center gap-3 px-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyber-teal to-cyber-green flex items-center justify-center">
            <span className="text-white text-xs font-bold">M</span>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs font-semibold text-surface-800 truncate">Marzia Akhter</p>
            <p className="text-[10px] text-surface-500">Administrator</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
