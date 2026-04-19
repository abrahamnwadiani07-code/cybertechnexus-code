import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import HomePage from '@/pages/HomePage';
import ServicesPage from '@/pages/ServicesPage';
import ServiceDetailPage from '@/pages/ServiceDetailPage';
import TrainingPage from '@/pages/TrainingPage';
import AboutPage from '@/pages/AboutPage';
import ContactPage from '@/pages/ContactPage';
import BlogPage from '@/pages/BlogPage';
import BlogPostPage from '@/pages/BlogPostPage';
import TrustCenterPage from '@/pages/TrustCenterPage';
import PremiumBackground from '@/components/PremiumBackground';
import { AuthProvider } from '@/portal/context/AuthContext';
import PortalLayout from '@/portal/components/PortalLayout';
import LoginPage from '@/portal/pages/LoginPage';
import DashboardPage from '@/portal/pages/DashboardPage';
import CompliancePage from '@/portal/pages/CompliancePage';
import RisksPage from '@/portal/pages/RisksPage';
import IncidentsPage from '@/portal/pages/IncidentsPage';
import AssetsPage from '@/portal/pages/AssetsPage';
import ReportsPage from '@/portal/pages/ReportsPage';
import TeamPage from '@/portal/pages/TeamPage';
import AuditLogPage from '@/portal/pages/AuditLogPage';
import SettingsPage from '@/portal/pages/SettingsPage';
import VendorRiskPage from '@/portal/pages/VendorRiskPage';
import EvidencePage from '@/portal/pages/EvidencePage';
import './index.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Portal routes — no premium background */}
          <Route path="/portal/login" element={<LoginPage />} />
          <Route path="/portal" element={<PortalLayout />}>
            <Route index element={<Navigate to="/portal/dashboard" replace />} />
            <Route path="dashboard" element={<DashboardPage />} />
            <Route path="compliance" element={<CompliancePage />} />
            <Route path="risks" element={<RisksPage />} />
            <Route path="incidents" element={<IncidentsPage />} />
            <Route path="assets" element={<AssetsPage />} />
            <Route path="vendors" element={<VendorRiskPage />} />
            <Route path="evidence" element={<EvidencePage />} />
            <Route path="reports" element={<ReportsPage />} />
            <Route path="team" element={<TeamPage />} />
            <Route path="audit-log" element={<AuditLogPage />} />
            <Route path="settings" element={<SettingsPage />} />
          </Route>

          {/* Public site routes */}
          <Route path="*" element={
            <div className="min-h-screen text-ctn-text">
              <PremiumBackground />
              <div className="relative z-10">
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/services" element={<ServicesPage />} />
                  <Route path="/services/:slug" element={<ServiceDetailPage />} />
                  <Route path="/training" element={<TrainingPage />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/contact" element={<ContactPage />} />
                  <Route path="/trust-center" element={<TrustCenterPage />} />
                  <Route path="/blog" element={<BlogPage />} />
                  <Route path="/blog/:slug" element={<BlogPostPage />} />
                </Routes>
              </div>
            </div>
          } />
        </Routes>
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: { background: '#081e2e', color: '#c8d6e0', border: '1px solid rgba(26, 107, 255, 0.15)', fontFamily: 'Poppins, sans-serif', fontSize: '13px', borderRadius: '8px' },
            success: { iconTheme: { primary: '#1a6bff', secondary: '#030b14' } },
            error: { iconTheme: { primary: '#ff3b5c', secondary: '#030b14' } },
          }}
        />
      </Router>
    </AuthProvider>
  );
}

export default App;
