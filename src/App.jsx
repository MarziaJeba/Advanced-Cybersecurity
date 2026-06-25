import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import ThreatMonitoring from './pages/ThreatMonitoring';
import IntrusionDetection from './pages/IntrusionDetection';
import AlertDashboard from './pages/AlertDashboard';
import LogAnalysis from './pages/LogAnalysis';
import AnomalyDetection from './pages/AnomalyDetection';
import UserBehavior from './pages/UserBehavior';
import IncidentResponse from './pages/IncidentResponse';
import ThreatIntelligence from './pages/ThreatIntelligence';
import AdminPanel from './pages/AdminPanel';
import Reports from './pages/Reports';
import MouseTrail from './components/MouseTrail';

function App() {
  return (
    <>
      <MouseTrail />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="threat-monitoring" element={<ThreatMonitoring />} />
          <Route path="intrusion-detection" element={<IntrusionDetection />} />
          <Route path="alert-dashboard" element={<AlertDashboard />} />
          <Route path="log-analysis" element={<LogAnalysis />} />
          <Route path="anomaly-detection" element={<AnomalyDetection />} />
          <Route path="user-behavior" element={<UserBehavior />} />
          <Route path="incident-response" element={<IncidentResponse />} />
          <Route path="threat-intelligence" element={<ThreatIntelligence />} />
          <Route path="admin-panel" element={<AdminPanel />} />
          <Route path="reports" element={<Reports />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
