import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, AlertTriangle, CheckCircle, TrendingDown, ArrowRight, RotateCcw } from 'lucide-react';
import { Link } from 'react-router-dom';

const questions = [
  {
    id: 'firewall',
    question: 'Do you have a next-generation firewall with active threat intelligence?',
    weight: 12,
    category: 'Network Security',
  },
  {
    id: 'mfa',
    question: 'Is multi-factor authentication enforced for all users and admin accounts?',
    weight: 15,
    category: 'Identity & Access',
  },
  {
    id: 'patching',
    question: 'Are critical patches applied within 14 days of release?',
    weight: 14,
    category: 'Vulnerability Management',
  },
  {
    id: 'backup',
    question: 'Do you have tested, immutable backups with offline copies?',
    weight: 13,
    category: 'Data Protection',
  },
  {
    id: 'training',
    question: 'Do employees complete security awareness training at least quarterly?',
    weight: 10,
    category: 'Human Risk',
  },
  {
    id: 'ir',
    question: 'Do you have a documented and tested incident response plan?',
    weight: 12,
    category: 'Incident Response',
  },
  {
    id: 'monitoring',
    question: 'Do you have 24/7 security monitoring (SIEM/SOC)?',
    weight: 14,
    category: 'Detection',
  },
  {
    id: 'compliance',
    question: 'Are you certified against a recognized framework (ISO 27001, SOC 2, etc.)?',
    weight: 10,
    category: 'Governance',
  },
];

export default function CyberRiskCalculator() {
  const [answers, setAnswers] = useState<Record<string, 'yes' | 'no' | 'partial'>>({});
  const [showResult, setShowResult] = useState(false);

  const totalWeight = questions.reduce((sum, q) => sum + q.weight, 0);

  const score = questions.reduce((sum, q) => {
    const answer = answers[q.id];
    if (answer === 'yes') return sum + q.weight;
    if (answer === 'partial') return sum + q.weight * 0.5;
    return sum;
  }, 0);

  const percentage = Math.round((score / totalWeight) * 100);
  const allAnswered = questions.every(q => answers[q.id]);

  const getGrade = () => {
    if (percentage >= 85) return { grade: 'A', color: '#10b981', label: 'Excellent', description: 'Your security posture is strong. Focus on continuous improvement and advanced threat detection.' };
    if (percentage >= 70) return { grade: 'B', color: '#1a6bff', label: 'Good', description: 'Solid foundation in place. Address the gaps identified below to strengthen your defenses.' };
    if (percentage >= 50) return { grade: 'C', color: '#f59e0b', label: 'Fair', description: 'Significant gaps exist that leave you vulnerable. Prioritize the missing controls immediately.' };
    if (percentage >= 30) return { grade: 'D', color: '#f97316', label: 'Poor', description: 'Critical security controls are missing. You are at high risk of a breach. Immediate action required.' };
    return { grade: 'F', color: '#ef4444', label: 'Critical', description: 'Your organization lacks fundamental security controls. You are highly vulnerable to attack.' };
  };

  const handleAnswer = (id: string, value: 'yes' | 'no' | 'partial') => {
    setAnswers(prev => ({ ...prev, [id]: value }));
  };

  const reset = () => {
    setAnswers({});
    setShowResult(false);
  };

  const grade = getGrade();

  return (
    <section id="risk-calculator" className="py-20 border-t border-ctn-border">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <span className="inline-block text-xs font-mono uppercase tracking-[0.25em] text-ctn-blue border border-ctn-blue/20 rounded-full px-4 py-1.5 mb-4">
            Free Assessment
          </span>
          <h2 className="font-poppins text-2xl md:text-3xl font-bold text-ctn-text-bright mb-3">Cyber Risk Score Calculator</h2>
          <p className="text-ctn-text-dim max-w-xl mx-auto">Answer 8 questions to get an instant assessment of your security posture and personalized recommendations.</p>
        </motion.div>

        <AnimatePresence mode="wait">
          {!showResult ? (
            <motion.div key="questions" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <div className="space-y-4">
                {questions.map((q, i) => (
                  <motion.div
                    key={q.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="p-5 rounded-xl border border-ctn-border bg-ctn-bg-elevated"
                  >
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
                      <div className="flex-1">
                        <span className="text-[10px] font-mono uppercase tracking-wider text-ctn-blue bg-ctn-blue/10 px-2 py-0.5 rounded mb-2 inline-block">{q.category}</span>
                        <p className="text-ctn-text text-sm">{q.question}</p>
                      </div>
                      <div className="flex gap-2 flex-shrink-0">
                        {(['yes', 'partial', 'no'] as const).map(val => (
                          <button
                            key={val}
                            onClick={() => handleAnswer(q.id, val)}
                            className={`px-4 py-1.5 text-xs font-medium rounded-lg border transition-all cursor-pointer ${
                              answers[q.id] === val
                                ? val === 'yes' ? 'bg-green-500/20 border-green-500/50 text-green-400'
                                  : val === 'partial' ? 'bg-yellow-500/20 border-yellow-500/50 text-yellow-400'
                                  : 'bg-red-500/20 border-red-500/50 text-red-400'
                                : 'bg-transparent border-ctn-border text-ctn-text-dim hover:border-ctn-blue/30'
                            }`}
                          >
                            {val === 'yes' ? 'Yes' : val === 'partial' ? 'Partial' : 'No'}
                          </button>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 text-center">
                <button
                  onClick={() => setShowResult(true)}
                  disabled={!allAnswered}
                  className={`px-8 py-3 rounded-lg font-medium text-sm transition-all cursor-pointer border-none ${
                    allAnswered
                      ? 'bg-ctn-blue text-white hover:bg-ctn-blue/90'
                      : 'bg-ctn-border text-ctn-text-dim cursor-not-allowed'
                  }`}
                >
                  Calculate My Risk Score <ArrowRight size={14} className="inline ml-1" />
                </button>
                {!allAnswered && (
                  <p className="text-ctn-text-dim text-xs mt-3">Answer all questions to see your score ({Object.keys(answers).length}/{questions.length} answered)</p>
                )}
              </div>
            </motion.div>
          ) : (
            <motion.div key="result" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}>
              <div className="p-8 rounded-2xl border border-ctn-border bg-ctn-bg-elevated text-center">
                <div className="relative inline-block mb-6">
                  <svg width="160" height="160" viewBox="0 0 160 160">
                    <circle cx="80" cy="80" r="70" fill="none" stroke="currentColor" className="text-ctn-border" strokeWidth="8" />
                    <circle
                      cx="80" cy="80" r="70" fill="none"
                      stroke={grade.color}
                      strokeWidth="8"
                      strokeLinecap="round"
                      strokeDasharray={`${percentage * 4.4} 440`}
                      transform="rotate(-90 80 80)"
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="font-poppins text-4xl font-bold" style={{ color: grade.color }}>{grade.grade}</span>
                    <span className="text-ctn-text-dim text-xs">{percentage}%</span>
                  </div>
                </div>

                <h3 className="font-poppins text-xl font-bold text-ctn-text-bright mb-2">
                  Security Posture: <span style={{ color: grade.color }}>{grade.label}</span>
                </h3>
                <p className="text-ctn-text-dim text-sm max-w-lg mx-auto mb-6">{grade.description}</p>

                {/* Breakdown */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
                  {questions.map(q => {
                    const a = answers[q.id];
                    return (
                      <div key={q.id} className="p-3 rounded-lg border border-ctn-border text-center">
                        {a === 'yes' ? <CheckCircle size={16} className="text-green-400 mx-auto mb-1" /> :
                         a === 'partial' ? <AlertTriangle size={16} className="text-yellow-400 mx-auto mb-1" /> :
                         <TrendingDown size={16} className="text-red-400 mx-auto mb-1" />}
                        <div className="text-[10px] text-ctn-text-dim">{q.category}</div>
                      </div>
                    );
                  })}
                </div>

                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Link to="/contact" className="btn btn-primary px-6 py-3 no-underline inline-flex items-center gap-2 justify-center text-sm">
                    Get Expert Assessment <ArrowRight size={14} />
                  </Link>
                  <button onClick={reset} className="px-6 py-3 border border-ctn-border text-ctn-text text-sm rounded-lg hover:border-ctn-blue transition-colors cursor-pointer bg-transparent inline-flex items-center gap-2 justify-center">
                    <RotateCcw size={14} /> Retake Assessment
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
