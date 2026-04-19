import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
import './index.css';

function App() {
  return (
    <Router>
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
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: { background: '#081e2e', color: '#c8d6e0', border: '1px solid rgba(26, 107, 255, 0.15)', fontFamily: 'Poppins, sans-serif', fontSize: '13px', borderRadius: '8px' },
            success: { iconTheme: { primary: '#1a6bff', secondary: '#030b14' } },
            error: { iconTheme: { primary: '#ff3b5c', secondary: '#030b14' } },
          }}
        />
      </div>
    </Router>
  );
}

export default App;
