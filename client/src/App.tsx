import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import ErrorBoundary from '@/components/ErrorBoundary';
import HomePage from '@/pages/HomePage';
import ServicesPage from '@/pages/ServicesPage';
import ServiceDetailPage from '@/pages/ServiceDetailPage';
import TrainingPage from '@/pages/TrainingPage';
import AboutPage from '@/pages/AboutPage';
import ContactPage from '@/pages/ContactPage';
import BlogPage from '@/pages/BlogPage';
import BlogPostPage from '@/pages/BlogPostPage';
import TrustCenterPage from '@/pages/TrustCenterPage';
import CareersPage from '@/pages/CareersPage';
import PricingPage from '@/pages/PricingPage';
import PartnersPage from '@/pages/PartnersPage';
import PrivacyPage from '@/pages/PrivacyPage';
import TermsPage from '@/pages/TermsPage';
import NotFoundPage from '@/pages/NotFoundPage';
import PremiumBackground from '@/components/PremiumBackground';
import CookieConsent from '@/components/CookieConsent';
import BackToTop from '@/components/BackToTop';
import SearchModal from '@/components/SearchModal';
import { ThemeProvider } from '@/components/ThemeToggle';
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
    <ErrorBoundary>
    <ThemeProvider>
    <AuthProvider>
      <Router>
        {/* Skip to content - accessibility */}
        <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[99999] focus:px-4 focus:py-2 focus:bg-ctn-blue focus:text-white focus:rounded-lg focus:text-sm">
          Skip to content
        </a>
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
              <div id="main-content" className="relative z-10">
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
                  <Route path="/careers" element={<CareersPage />} />
                  <Route path="/pricing" element={<PricingPage />} />
                  <Route path="/partners" element={<PartnersPage />} />
                  <Route path="/privacy" element={<PrivacyPage />} />
                  <Route path="/terms" element={<TermsPage />} />
                  <Route path="*" element={<NotFoundPage />} />
                </Routes>
              </div>
            </div>
          } />
        </Routes>
        <CookieConsent />
        <BackToTop />
        <SearchModal />
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
    </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
