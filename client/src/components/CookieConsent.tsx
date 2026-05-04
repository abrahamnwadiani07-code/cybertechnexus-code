import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('ctn-cookie-consent');
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem('ctn-cookie-consent', 'accepted');
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem('ctn-cookie-consent', 'declined');
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', damping: 25 }}
          className="fixed bottom-0 left-0 right-0 z-[9999] p-4 md:p-6"
        >
          <div className="max-w-4xl mx-auto bg-ctn-bg-elevated border border-ctn-border rounded-2xl p-5 md:p-6 shadow-2xl shadow-black/40 backdrop-blur-lg">
            <div className="flex items-start gap-4">
              <Shield size={20} className="text-ctn-blue flex-shrink-0 mt-0.5" />
              <div className="flex-1">
                <h3 className="font-poppins font-semibold text-ctn-text-bright text-sm mb-1.5">Cookie Preferences</h3>
                <p className="text-ctn-text-dim text-xs leading-relaxed mb-4">
                  We use essential cookies for site functionality and optional analytics cookies to improve our services.
                  We never sell your data. Read our{' '}
                  <Link to="/privacy" className="text-ctn-blue hover:underline">Privacy Policy</Link> for details.
                </p>
                <div className="flex flex-wrap gap-3">
                  <button
                    onClick={accept}
                    className="px-5 py-2 bg-ctn-blue text-white text-xs font-medium rounded-lg hover:bg-ctn-blue/90 transition-colors cursor-pointer border-none"
                  >
                    Accept All
                  </button>
                  <button
                    onClick={decline}
                    className="px-5 py-2 border border-ctn-border text-ctn-text text-xs font-medium rounded-lg hover:border-ctn-blue hover:text-ctn-blue transition-colors cursor-pointer bg-transparent"
                  >
                    Essential Only
                  </button>
                </div>
              </div>
              <button onClick={decline} className="text-ctn-text-dim hover:text-ctn-text transition-colors bg-transparent border-none cursor-pointer">
                <X size={16} />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
