# CyberGuard — Advanced Cybersecurity Dashboard

A centralized cybersecurity command center built with React 18, Vite 5, TailwindCSS 3, and Chart.js.

## Getting Started

To make things easy on Windows, there are three double-click scripts included:

1. **`install.bat`** — Double-click this first to install all dependencies.
2. **`run-dev.bat`** — Double-click this to start the development server. It will open the website locally.
3. **`build.bat`** — Double-click this to build the final production files.

Alternatively, if you prefer the terminal:
```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```

## Project Structure

```
src/
├── components/
│   ├── Layout.jsx          # App shell (sidebar + header + content area)
│   ├── Sidebar.jsx         # Left navigation with all feature links
│   ├── Header.jsx          # Top bar with search, notifications, page title
│   ├── MouseTrail.jsx      # Custom cursor trail effect
│   └── PagePlaceholder.jsx # Reusable placeholder for unbuilt features
├── pages/
│   ├── Dashboard.jsx           # Home — stats, quick links, chart area
│   ├── ThreatMonitoring.jsx    # Olivia
│   ├── IntrusionDetection.jsx  # Marzia
│   ├── AlertDashboard.jsx      # Ritu
│   ├── LogAnalysis.jsx         # Khadiza
│   ├── AnomalyDetection.jsx    # Nahar
│   ├── UserBehavior.jsx        # Nahar
│   ├── IncidentResponse.jsx    # Olivia
│   ├── ThreatIntelligence.jsx  # Ananya
│   ├── AdminPanel.jsx          # Akhi
│   └── Reports.jsx             # Akhi
├── App.jsx        # Routes
├── main.jsx       # Entry point
└── index.css      # Global styles + Tailwind
```

## How to Work on Your Feature

1. Open `src/pages/YourFeature.jsx`
2. Replace the `<PagePlaceholder>` with your actual component
3. Use the shared CSS classes from `index.css` (cards, buttons, badges, inputs)
4. Add any new shared components to `src/components/`

## Team Assignments

| Feature | Owner | Route | File |
|---------|-------|-------|------|
| Real-time Threat Monitoring | Olivia | `/threat-monitoring` | `ThreatMonitoring.jsx` |
| Intrusion Detection System | Marzia | `/intrusion-detection` | `IntrusionDetection.jsx` |
| Security Alert Dashboard | Ritu | `/alert-dashboard` | `AlertDashboard.jsx` |
| Log Aggregation & Analysis | Khadiza | `/log-analysis` | `LogAnalysis.jsx` |
| AI Anomaly Detection | Nahar | `/anomaly-detection` | `AnomalyDetection.jsx` |
| User Behavior Analytics | Nahar | `/user-behavior` | `UserBehavior.jsx` |
| Incident Response Workflow | Olivia | `/incident-response` | `IncidentResponse.jsx` |
| Threat Intelligence | Ananya | `/threat-intelligence` | `ThreatIntelligence.jsx` |
| Role-based Admin Panel | Akhi | `/admin-panel` | `AdminPanel.jsx` |
| Automated Report Generation | Akhi | `/reports` | `Reports.jsx` |

## Tech Stack

- **Frontend:** React 18, Vite 5, TailwindCSS 3, Chart.js
- **Backend:** Python 3.11, FastAPI, Uvicorn, SQLAlchemy (separate repo)
- **Database:** PostgreSQL 15
