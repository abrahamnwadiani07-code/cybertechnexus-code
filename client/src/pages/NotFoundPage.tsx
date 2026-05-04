import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShieldOff, Home, ArrowLeft } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function NotFoundPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-[70vh] flex items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-lg"
        >
          <div className="relative inline-block mb-8">
            <ShieldOff size={64} className="text-ctn-red/60" />
            <motion.div
              animate={{ opacity: [0.3, 0.8, 0.3] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 bg-ctn-red/10 rounded-full blur-2xl"
            />
          </div>
          <h1 className="font-mono text-6xl font-bold text-ctn-text-bright mb-3">404</h1>
          <h2 className="font-poppins text-xl font-semibold text-ctn-text-bright mb-4">Access Denied — Page Not Found</h2>
          <p className="text-ctn-text-dim mb-8 leading-relaxed">
            The resource you're looking for doesn't exist or has been moved.
            This incident has been logged.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/" className="btn btn-primary px-6 py-3 no-underline inline-flex items-center gap-2 justify-center">
              <Home size={16} /> Back to Home
            </Link>
            <Link to="/contact" className="btn btn-secondary px-6 py-3 no-underline inline-flex items-center gap-2 justify-center">
              <ArrowLeft size={16} /> Report Issue
            </Link>
          </div>
        </motion.div>
      </div>
      <Footer />
    </>
  );
}
