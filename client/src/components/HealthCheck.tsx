import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, ArrowRight, ArrowLeft, CheckCircle, AlertTriangle, XCircle, Send } from 'lucide-react';
import toast from 'react-hot-toast';

interface Answer {
  question: string;
  answer: string;
  score: number;
}

const steps = [
  {
    id: 'org',
    title: 'About Your Organization',
    questions: [
      {
        key: 'orgSize',
        label: 'How many employees does your organization have?',
        options: [
          { label: '1–50', value: 'small', score: 2 },
          { label: '51–250', value: 'medium', score: 3 },
          { label: '251–1,000', value: 'large', score: 4 },
          { label: '1,000+', value: 'enterprise', score: 5 },
        ],
      },
      {
        key: 'industry',
        label: 'What industry are you in?',
        options: [
          { label: 'Finance / Banking', value: 'finance', score: 5 },
          { label: 'Healthcare', value: 'healthcare', score: 5 },
          { label: 'Government', value: 'government', score: 5 },
          { label: 'Technology / SaaS', value: 'tech', score: 4 },
          { label: 'Retail / E-commerce', value: 'retail', score: 3 },
          { label: 'Other', value: 'other', score: 3 },
        ],
      },
    ],
  },
  {
    id: 'posture',
    title: 'Current Security Posture',
    questions: [
      {
        key: 'monitoring',
        label: 'Do you have 24/7 security monitoring in place?',
        options: [
          { label: 'Yes, fully managed monitoring', value: 'full', score: 10 },
          { label: 'Partial / business hours only', value: 'partial', score: 5 },
          { label: 'No active monitoring', value: 'none', score: 0 },
        ],
      },
      {
        key: 'mfa',
        label: 'Is multi-factor authentication (MFA) enforced for all users?',
        options: [
          { label: 'Yes, everywhere', value: 'full', score: 10 },
          { label: 'Only for admins / some systems', value: 'partial', score: 5 },
          { label: 'Not implemented', value: 'none', score: 0 },
        ],
      },
      {
        key: 'patching',
        label: 'How frequently are systems patched?',
        options: [
          { label: 'Within 48 hours of critical CVEs', value: 'fast', score: 10 },
          { label: 'Monthly patch cycles', value: 'monthly', score: 6 },
          { label: 'Quarterly or less', value: 'quarterly', score: 2 },
          { label: 'No formal patching process', value: 'none', score: 0 },
        ],
      },
    ],
  },
  {
    id: 'readiness',
    title: 'Incident Readiness',
    questions: [
      {
        key: 'irPlan',
        label: 'Do you have a documented incident response plan?',
        options: [
          { label: 'Yes, tested regularly', value: 'tested', score: 10 },
          { label: 'Yes, but not tested', value: 'untested', score: 5 },
          { label: 'No formal plan', value: 'none', score: 0 },
        ],
      },
      {
        key: 'backups',
        label: 'Are critical data backups tested and stored offsite?',
        options: [
          { label: 'Yes, with regular restore tests', value: 'full', score: 10 },
          { label: 'Backups exist but rarely tested', value: 'partial', score: 4 },
          { label: 'No reliable backup strategy', value: 'none', score: 0 },
        ],
      },
      {
        key: 'training',
        label: 'Do employees receive security awareness training?',
        options: [
          { label: 'Regularly (quarterly+)', value: 'regular', score: 10 },
          { label: 'Annually', value: 'annual', score: 5 },
          { label: 'No formal training', value: 'none', score: 0 },
        ],
      },
    ],
  },
  {
    id: 'compliance',
    title: 'Compliance & Governance',
    questions: [
      {
        key: 'frameworks',
        label: 'Which compliance frameworks do you follow?',
        options: [
          { label: 'ISO 27001, NIST, PCI DSS, or equivalent', value: 'strong', score: 10 },
          { label: 'Working toward compliance', value: 'progress', score: 5 },
          { label: 'None currently', value: 'none', score: 0 },
        ],
      },
      {
        key: 'pentest',
        label: 'When was your last penetration test?',
        options: [
          { label: 'Within the last 6 months', value: 'recent', score: 10 },
          { label: 'Within the last year', value: 'year', score: 6 },
          { label: 'Over a year ago or never', value: 'never', score: 0 },
        ],
      },
    ],
  },
];

const allQuestions = steps.flatMap((s) => s.questions);
const maxScore = allQuestions.reduce((sum, q) => sum + Math.max(...q.options.map((o) => o.score)), 0);

function ScoreRing({ score, max }: { score: number; max: number }) {
  const pct = Math.round((score / max) * 100);
  const r = 70;
  const circ = 2 * Math.PI * r;
  const offset = circ - (pct / 100) * circ;
  const color = pct >= 70 ? '#1a6bff' : pct >= 40 ? '#ffb039' : '#ff3b5c';

  return (
    <div className="relative inline-flex items-center justify-center">
      <svg width="180" height="180" className="score-ring">
        <circle cx="90" cy="90" r={r} fill="none" strokeWidth="8" className="score-ring-bg" />
        <circle
          cx="90" cy="90" r={r} fill="none" strokeWidth="8"
          className="score-ring-fill"
          style={{ stroke: color, strokeDasharray: circ, strokeDashoffset: offset, strokeLinecap: 'round' }}
        />
      </svg>
      <div className="absolute text-center">
        <div className="text-4xl font-poppins font-bold" style={{ color }}>{pct}</div>
        <div className="text-xs text-ctn-text-dim">out of 100</div>
      </div>
    </div>
  );
}

function RiskLevel({ score, max }: { score: number; max: number }) {
  const pct = (score / max) * 100;
  if (pct >= 70) return (
    <div className="flex items-center gap-2 text-ctn-blue">
      <CheckCircle size={20} /> <span className="font-poppins font-semibold">Low Risk — Good Posture</span>
    </div>
  );
  if (pct >= 40) return (
    <div className="flex items-center gap-2 text-ctn-amber">
      <AlertTriangle size={20} /> <span className="font-poppins font-semibold">Moderate Risk — Improvements Needed</span>
    </div>
  );
  return (
    <div className="flex items-center gap-2 text-ctn-red">
      <XCircle size={20} /> <span className="font-poppins font-semibold">High Risk — Immediate Action Required</span>
    </div>
  );
}

export default function HealthCheck() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, Answer>>({});
  const [showResults, setShowResults] = useState(false);
  const [contactForm, setContactForm] = useState({ name: '', email: '', company: '' });
  const [submitted, setSubmitted] = useState(false);

  const step = steps[currentStep];
  const totalSteps = steps.length;
  const progress = showResults ? 100 : ((currentStep) / totalSteps) * 100;

  const canProceed = step?.questions.every((q) => answers[q.key]);

  const handleSelect = (key: string, label: string, value: string, score: number) => {
    setAnswers((prev) => ({ ...prev, [key]: { question: label, answer: value, score } }));
  };

  const handleNext = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep((p) => p + 1);
    } else {
      setShowResults(true);
    }
  };

  const totalScore = Object.values(answers).reduce((s, a) => s + a.score, 0);

  const handleSubmitReport = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await fetch('/api/health-check', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...contactForm,
          score: totalScore,
          maxScore,
          percentage: Math.round((totalScore / maxScore) * 100),
          answers,
        }),
      });
      setSubmitted(true);
      toast.success('Report sent! Our team will follow up within 24 hours.');
    } catch {
      toast.error('Failed to send. Please try again.');
    }
  };

  const pct = Math.round((totalScore / maxScore) * 100);
  const recommendations = [];
  if (!answers.monitoring || answers.monitoring.score < 10) recommendations.push('Implement continuous security monitoring across your infrastructure');
  if (!answers.mfa || answers.mfa.score < 10) recommendations.push('Enforce multi-factor authentication across all systems and users');
  if (!answers.irPlan || answers.irPlan.score < 10) recommendations.push('Develop and regularly test an incident response playbook');
  if (!answers.backups || answers.backups.score < 10) recommendations.push('Establish automated backups with regular restore testing');
  if (!answers.training || answers.training.score < 10) recommendations.push('Implement quarterly security awareness training for all employees');
  if (!answers.frameworks || answers.frameworks.score < 10) recommendations.push('Pursue ISO 27001 or NIST CSF certification for compliance assurance');
  if (!answers.pentest || answers.pentest.score < 10) recommendations.push('Schedule a penetration test to identify exploitable vulnerabilities');
  if (!answers.patching || answers.patching.score < 10) recommendations.push('Establish a rapid patching process for critical CVEs');

  return (
    <section id="health-check" className="relative px-6 lg:px-12 py-24 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <span className="inline-block font-mono text-[11px] tracking-[0.25em] text-ctn-blue uppercase mb-3 px-3 py-1 border border-ctn-blue/20 rounded-full">
          Free Assessment
        </span>
        <h2 className="font-poppins font-bold text-3xl md:text-4xl text-ctn-text-bright mt-4 mb-4">
          Security <span className="text-ctn-blue text-glow-blue">Health Check</span>
        </h2>
        <p className="text-ctn-text-dim max-w-xl mx-auto">
          Answer a few questions about your organization's security posture and get an instant risk assessment with actionable recommendations.
        </p>
      </motion.div>

      <div className="max-w-2xl mx-auto">
        {/* Progress bar */}
        <div className="health-check-progress mb-8">
          <div className="health-check-progress-bar" style={{ width: `${progress}%` }} />
        </div>

        <AnimatePresence mode="wait">
          {!showResults ? (
            <motion.div
              key={`step-${currentStep}`}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.3 }}
              className="cyber-card p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-ctn-blue/10 border border-ctn-blue/20 flex items-center justify-center font-poppins font-bold text-sm text-ctn-blue">
                  {currentStep + 1}
                </div>
                <div>
                  <div className="font-poppins font-semibold text-ctn-text-bright">{step.title}</div>
                  <div className="font-mono text-[10px] text-ctn-text-dim">Step {currentStep + 1} of {totalSteps}</div>
                </div>
              </div>

              <div className="space-y-6">
                {step.questions.map((q) => (
                  <div key={q.key}>
                    <label className="block font-poppins text-sm text-ctn-text-bright mb-3">{q.label}</label>
                    <div className="grid gap-2">
                      {q.options.map((opt) => (
                        <button
                          key={opt.value}
                          onClick={() => handleSelect(q.key, q.label, opt.value, opt.score)}
                          className={`w-full text-left px-4 py-3 rounded-lg border transition-all text-sm font-poppins ${
                            answers[q.key]?.answer === opt.value
                              ? 'border-ctn-blue/50 bg-ctn-blue/10 text-ctn-blue'
                              : 'border-ctn-border bg-ctn-bg-card/50 text-ctn-text-dim hover:border-ctn-blue/25'
                          }`}
                        >
                          {opt.label}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex justify-between mt-8">
                <button
                  onClick={() => setCurrentStep((p) => p - 1)}
                  disabled={currentStep === 0}
                  className="btn btn-secondary text-xs py-2.5 px-5 disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  <ArrowLeft size={14} /> Back
                </button>
                <button
                  onClick={handleNext}
                  disabled={!canProceed}
                  className="btn btn-primary text-xs py-2.5 px-5 disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  {currentStep === totalSteps - 1 ? 'See Results' : 'Next'} <ArrowRight size={14} />
                </button>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="results"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="cyber-card p-8"
            >
              <div className="text-center mb-8">
                <h3 className="font-poppins font-bold text-xl text-ctn-text-bright mb-6">Your Security Score</h3>
                <ScoreRing score={totalScore} max={maxScore} />
                <div className="mt-4">
                  <RiskLevel score={totalScore} max={maxScore} />
                </div>
              </div>

              {recommendations.length > 0 && (
                <div className="mb-8">
                  <h4 className="font-poppins font-semibold text-sm text-ctn-text-bright mb-4">
                    Key Recommendations
                  </h4>
                  <div className="space-y-2">
                    {recommendations.slice(0, 5).map((rec, i) => (
                      <div key={i} className="flex items-start gap-3 text-sm text-ctn-text-dim">
                        <span className="text-ctn-blue mt-0.5 flex-shrink-0">&#9654;</span>
                        <span>{rec}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {!submitted ? (
                <form onSubmit={handleSubmitReport} className="border-t border-ctn-border pt-6 space-y-4">
                  <p className="text-sm text-ctn-text-dim mb-4">
                    Get a detailed report with prioritized remediation steps sent to your email.
                  </p>
                  <input
                    type="text" placeholder="Your Name" required
                    value={contactForm.name}
                    onChange={(e) => setContactForm((p) => ({ ...p, name: e.target.value }))}
                    className="input-field"
                  />
                  <input
                    type="email" placeholder="Work Email" required
                    value={contactForm.email}
                    onChange={(e) => setContactForm((p) => ({ ...p, email: e.target.value }))}
                    className="input-field"
                  />
                  <input
                    type="text" placeholder="Company Name"
                    value={contactForm.company}
                    onChange={(e) => setContactForm((p) => ({ ...p, company: e.target.value }))}
                    className="input-field"
                  />
                  <button type="submit" className="btn btn-primary w-full text-sm py-3.5">
                    <Send size={14} /> Send Me the Full Report
                  </button>
                </form>
              ) : (
                <div className="border-t border-ctn-border pt-6 text-center">
                  <CheckCircle size={40} className="text-ctn-blue mx-auto mb-3" />
                  <p className="font-poppins font-semibold text-ctn-text-bright">Report Sent!</p>
                  <p className="text-sm text-ctn-text-dim mt-2">
                    Our security team will review your results and follow up within 24 hours with a personalized action plan.
                  </p>
                </div>
              )}

              <button
                onClick={() => { setCurrentStep(0); setShowResults(false); setAnswers({}); setSubmitted(false); setContactForm({ name: '', email: '', company: '' }); }}
                className="btn btn-secondary text-xs py-2 px-4 mt-4 w-full"
              >
                Retake Assessment
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
