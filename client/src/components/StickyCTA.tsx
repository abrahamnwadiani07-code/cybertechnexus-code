import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Shield, ArrowRight } from 'lucide-react';

export default function StickyCTA() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (dismissed) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 right-0 z-40 bg-ctn-bg-1/95 backdrop-blur-lg border-t border-ctn-border py-3 px-4"
        >
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Shield size={18} className="text-ctn-blue hidden sm:block" />
              <span className="font-poppins text-sm text-ctn-text">
                <span className="text-ctn-text-bright font-semibold">Protect your business today.</span>
                <span className="hidden md:inline text-ctn-text-dim"> Get a free security health check from our experts.</span>
              </span>
            </div>
            <div className="flex items-center gap-2">
              <a href="#health-check" onClick={(e) => { e.preventDefault(); document.querySelector('#health-check')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="btn btn-primary text-xs py-2 px-5 no-underline whitespace-nowrap">
                Free Health Check <ArrowRight size={12} />
              </a>
              <button onClick={() => setDismissed(true)} className="text-ctn-text-dim hover:text-ctn-text bg-transparent border-none cursor-pointer p-1">
                <X size={16} />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
