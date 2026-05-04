import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, CheckCircle, ArrowRight, X, Rocket, FileText, Users, Bell } from 'lucide-react';

const steps = [
  {
    icon: Rocket,
    title: 'Welcome to CyberTech Nexus',
    description: 'Your compliance and security operations platform is ready. Let\'s get you set up in under 2 minutes.',
  },
  {
    icon: Shield,
    title: 'Select Your Frameworks',
    description: 'Choose which compliance frameworks apply to your organization. You can always add more later.',
    options: ['ISO 27001', 'SOC 2 Type II', 'GDPR', 'HIPAA', 'PCI DSS', 'NIST CSF', 'Cyber Essentials', 'DORA'],
  },
  {
    icon: Users,
    title: 'Invite Your Team',
    description: 'Add team members who will use the platform. Assign roles: Admin, Analyst, or Viewer.',
  },
  {
    icon: Bell,
    title: 'Configure Alerts',
    description: 'Set up notifications for risk changes, compliance deadlines, and security events.',
  },
  {
    icon: CheckCircle,
    title: 'You\'re All Set!',
    description: 'Your platform is configured. Explore your dashboard, import existing controls, or start a gap analysis.',
  },
];

export default function OnboardingWizard() {
  const [visible, setVisible] = useState(false);
  const [step, setStep] = useState(0);
  const [selectedFrameworks, setSelectedFrameworks] = useState<string[]>([]);

  useEffect(() => {
    const dismissed = localStorage.getItem('ctn-onboarding-dismissed');
    if (!dismissed) {
      const timer = setTimeout(() => setVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const dismiss = () => {
    setVisible(false);
    localStorage.setItem('ctn-onboarding-dismissed', 'true');
  };

  const next = () => {
    if (step < steps.length - 1) {
      setStep(step + 1);
    } else {
      dismiss();
    }
  };

  const toggleFramework = (fw: string) => {
    setSelectedFrameworks(prev =>
      prev.includes(fw) ? prev.filter(f => f !== fw) : [...prev, fw]
    );
  };

  if (!visible) return null;

  const current = steps[step];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[99999] flex items-center justify-center p-4"
      >
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={dismiss} />
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="relative w-full max-w-md bg-[#0a1525] border border-white/[0.08] rounded-2xl shadow-2xl overflow-hidden"
        >
          {/* Progress */}
          <div className="h-1 bg-white/[0.04]">
            <div className="h-full bg-[#1a6bff] transition-all duration-300" style={{ width: `${((step + 1) / steps.length) * 100}%` }} />
          </div>

          {/* Close button */}
          <button
            onClick={dismiss}
            className="absolute top-4 right-4 text-[#5a7a8a] hover:text-white bg-transparent border-none cursor-pointer"
          >
            <X size={16} />
          </button>

          {/* Content */}
          <div className="p-8">
            <motion.div key={step} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3 }}>
              <current.icon size={36} className="text-[#1a6bff] mb-4" />
              <h2 className="font-poppins font-bold text-lg text-white mb-2">{current.title}</h2>
              <p className="text-[#5a7a8a] text-sm leading-relaxed mb-6">{current.description}</p>

              {/* Framework selection step */}
              {current.options && (
                <div className="grid grid-cols-2 gap-2 mb-6">
                  {current.options.map(fw => (
                    <button
                      key={fw}
                      onClick={() => toggleFramework(fw)}
                      className={`px-3 py-2 rounded-lg text-xs font-mono transition-all cursor-pointer border ${
                        selectedFrameworks.includes(fw)
                          ? 'bg-[#1a6bff]/20 border-[#1a6bff]/50 text-[#1a6bff]'
                          : 'bg-transparent border-white/[0.08] text-[#5a7a8a] hover:border-[#1a6bff]/30'
                      }`}
                    >
                      {selectedFrameworks.includes(fw) && <CheckCircle size={10} className="inline mr-1" />}
                      {fw}
                    </button>
                  ))}
                </div>
              )}

              {/* Invite team step */}
              {step === 2 && (
                <div className="space-y-2 mb-6">
                  <input
                    type="email"
                    placeholder="colleague@company.com"
                    className="w-full px-4 py-2.5 rounded-lg bg-white/[0.04] border border-white/[0.08] text-white text-sm font-poppins placeholder:text-[#3a5a6a] focus:outline-none focus:border-[#1a6bff]/50"
                  />
                  <p className="text-[10px] text-[#3a5a6a]">You can skip this and invite team members later from Settings.</p>
                </div>
              )}
            </motion.div>

            {/* Actions */}
            <div className="flex items-center justify-between">
              <span className="text-[10px] text-[#3a5a6a] font-mono">Step {step + 1} of {steps.length}</span>
              <div className="flex gap-2">
                {step > 0 && (
                  <button
                    onClick={() => setStep(step - 1)}
                    className="px-4 py-2 text-sm text-[#5a7a8a] hover:text-white bg-transparent border border-white/[0.08] rounded-lg cursor-pointer transition-colors"
                  >
                    Back
                  </button>
                )}
                <button
                  onClick={next}
                  className="px-5 py-2 text-sm text-white bg-[#1a6bff] rounded-lg cursor-pointer border-none hover:bg-[#1a6bff]/90 transition-colors flex items-center gap-2"
                >
                  {step === steps.length - 1 ? 'Get Started' : 'Next'} <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
