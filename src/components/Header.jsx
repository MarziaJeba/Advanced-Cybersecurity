import { useLocation } from 'react-router-dom';

const pageTitles = {
  '/':                    'Dashboard',
  '/threat-monitoring':   'Real-Time Threat Monitoring',
  '/intrusion-detection': 'Intrusion Detection System',
  '/alert-dashboard':     'Security Alert Dashboard',
  '/log-analysis':        'Log Aggregation & Analysis',
  '/anomaly-detection':   'AI Anomaly Detection',
  '/user-behavior':       'User Behavior Analytics',
  '/incident-response':   'Incident Response Workflow',
  '/threat-intelligence': 'Threat Intelligence',
  '/admin-panel':         'Admin Panel',
  '/reports':             'Automated Reports',
};

export default function Header() {
  const { pathname } = useLocation();
  const title = pageTitles[pathname] || 'CyberGuard';

  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white border-b border-surface-200 shadow-sm">
      <div>
        <h2 className="page-title">{title}</h2>
        <p className="page-subtitle">Advanced Cybersecurity Platform</p>
      </div>

      <div className="flex items-center gap-3">
        {/* Search */}
        <div className="relative hidden md:block">
          <input
            type="text"
            placeholder="Search..."
            className="input-field w-56 pl-9 text-xs"
            id="global-search"
          />
          <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-surface-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>

        {/* Notification bell */}
        <button className="relative p-2 rounded-xl hover:bg-surface-50 transition-colors" id="notifications-btn">
          <svg className="w-5 h-5 text-surface-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
          </svg>
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-cyber-red rounded-full animate-pulse-soft" />
        </button>

        {/* Mobile avatar */}
        <div className="lg:hidden w-8 h-8 rounded-full bg-gradient-to-br from-accent to-accent-dark flex items-center justify-center">
          <span className="text-white text-xs font-bold">M</span>
        </div>
      </div>
    </header>
  );
}
