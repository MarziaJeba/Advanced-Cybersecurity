import { Link } from 'react-router-dom';

const stats = [
  { label: 'Active Threats',     value: '—', change: null, color: 'bg-red-50 text-cyber-red',    icon: '🔴' },
  { label: 'Blocked Attacks',    value: '—', change: null, color: 'bg-emerald-50 text-cyber-green', icon: '🟢' },
  { label: 'Alerts Today',       value: '—', change: null, color: 'bg-amber-50 text-cyber-orange',  icon: '🟡' },
  { label: 'System Health',      value: '—', change: null, color: 'bg-blue-50 text-cyber-blue',   icon: '🔵' },
];

const quickLinks = [
  { path: '/threat-monitoring',   label: 'Threat Monitoring',   icon: '🔍', owner: 'Olivia' },
  { path: '/intrusion-detection', label: 'Intrusion Detection', icon: '🛡️', owner: 'Marzia' },
  { path: '/alert-dashboard',     label: 'Security Alerts',     icon: '🔔', owner: 'Ritu' },
  { path: '/log-analysis',        label: 'Log Analysis',        icon: '📋', owner: 'Khadiza' },
  { path: '/anomaly-detection',   label: 'Anomaly Detection',   icon: '🤖', owner: 'Nahar' },
  { path: '/user-behavior',       label: 'User Behavior',       icon: '👤', owner: 'Nahar' },
  { path: '/incident-response',   label: 'Incident Response',   icon: '🚨', owner: 'Olivia' },
  { path: '/threat-intelligence', label: 'Threat Intel',        icon: '🌐', owner: 'Ananya' },
  { path: '/admin-panel',         label: 'Admin Panel',         icon: '⚙️', owner: 'Akhi' },
  { path: '/reports',             label: 'Reports',             icon: '📄', owner: 'Akhi' },
];

export default function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Welcome banner */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-accent via-accent-dark to-indigo-900 p-8 text-white shadow-lg">
        <div className="relative z-10">
          <h1 className="text-2xl font-bold mb-1">Welcome to CyberGuard</h1>
          <p className="text-white/70 text-sm max-w-lg">
            Your centralized cybersecurity command center. Monitor threats, analyze logs, 
            detect anomalies, and manage incidents — all from one place.
          </p>
        </div>
        {/* Decorative circles */}
        <div className="absolute -right-10 -top-10 w-44 h-44 rounded-full bg-white/5" />
        <div className="absolute -right-4 top-8 w-28 h-28 rounded-full bg-white/5" />
        <div className="absolute right-20 -bottom-6 w-20 h-20 rounded-full bg-white/5" />
      </div>

      {/* Stat cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <div key={stat.label} className="card p-5 flex items-start gap-4">
            <div className={`w-11 h-11 rounded-xl ${stat.color} flex items-center justify-center text-lg`}>
              {stat.icon}
            </div>
            <div>
              <p className="text-xs text-surface-500 font-medium">{stat.label}</p>
              <p className="text-xl font-bold text-surface-900 mt-0.5">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Quick access grid */}
      <div>
        <h3 className="text-lg font-semibold text-surface-800 mb-3">Feature Modules</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3">
          {quickLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="card p-4 flex flex-col items-center text-center group hover:border-accent/30"
            >
              <span className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-200">
                {link.icon}
              </span>
              <span className="text-sm font-medium text-surface-800">{link.label}</span>
              <span className="text-[10px] text-surface-400 mt-1">{link.owner}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Chart / Activity placeholder */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="section-card lg:col-span-2">
          <h3 className="text-sm font-semibold text-surface-800 mb-4">Threat Activity Overview</h3>
          <div className="h-48 flex items-center justify-center border-2 border-dashed border-surface-200 rounded-xl">
            <p className="text-surface-400 text-xs font-mono">Chart.js integration goes here</p>
          </div>
        </div>
        <div className="section-card">
          <h3 className="text-sm font-semibold text-surface-800 mb-4">Recent Alerts</h3>
          <div className="space-y-3">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex items-center gap-3 p-2 rounded-lg bg-surface-50">
                <div className="w-2 h-2 rounded-full bg-surface-300 animate-pulse-soft" />
                <div className="flex-1">
                  <div className="h-3 w-3/4 bg-surface-200 rounded" />
                  <div className="h-2 w-1/2 bg-surface-100 rounded mt-1" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
