import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, ChevronDown, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const stats = [
  { value: '200+', label: 'Organizations Protected' },
  { value: '99.98%', label: 'Uptime SLA' },
  { value: '<8min', label: 'Mean Response Time' },
  { value: '6+', label: 'Compliance Frameworks' },
];

const typingWords = [
  'Penetration Testing',
  'Compliance Automation',
  'Incident Response',
  'Threat Detection',
  'Security Training',
  'Risk Management',
];

export default function Hero() {
  const [currentWord, setCurrentWord] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const word = typingWords[currentWord];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(word.slice(0, displayText.length + 1));
        if (displayText.length === word.length) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setDisplayText(word.slice(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setCurrentWord((prev) => (prev + 1) % typingWords.length);
        }
      }
    }, isDeleting ? 40 : 80);
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentWord]);

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[92vh] flex flex-col justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1920&q=80)' }}
      />
      {/* Dark overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-ctn-bg via-ctn-bg/95 to-ctn-bg/70" />
      <div className="absolute inset-0 bg-gradient-to-t from-ctn-bg via-transparent to-ctn-bg/80" />

      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-ctn-blue/30 rounded-full"
            style={{ left: `${15 + i * 15}%`, top: `${20 + (i % 3) * 25}%` }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{ duration: 3 + i * 0.5, repeat: Infinity, delay: i * 0.3 }}
          />
        ))}
      </div>

      <div className="relative px-6 lg:px-12 pt-20 pb-16 max-w-7xl mx-auto w-full">
        {/* Live status */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex items-center gap-3 mb-8"
        >
          <div className="w-2 h-2 bg-ctn-blue rounded-full animate-pulse-blue" />
          <span className="font-mono text-[11px] text-ctn-blue tracking-wider">
            THREAT LEVEL: MONITORED — ALL SYSTEMS OPERATIONAL
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="font-poppins font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight text-ctn-text-bright mb-4"
        >
          Enterprise-Grade{' '}
          <span className="text-ctn-blue text-glow-blue">Cybersecurity</span>
          <br />
          Solutions You Can Trust
        </motion.h1>

        {/* Typing animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex items-center gap-2 mb-6"
        >
          <Shield size={16} className="text-ctn-blue" />
          <span className="font-mono text-sm text-ctn-text-dim">
            Specializing in:{' '}
            <span className="text-ctn-blue">
              {displayText}
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.5, repeat: Infinity }}
                className="inline-block w-0.5 h-4 bg-ctn-blue ml-0.5 align-middle"
              />
            </span>
          </span>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-lg md:text-xl text-ctn-text-dim max-w-2xl mb-10 leading-relaxed"
        >
          CyberTech Nexus provides proactive cybersecurity solutions, compliance automation, and
          world-class training to protect organizations from evolving threats.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="flex flex-col sm:flex-row gap-4 mb-20"
        >
          <button onClick={() => scrollTo('#compliance-board-os')} className="btn btn-primary group text-sm py-4 px-8">
            <Play size={16} className="transition-transform group-hover:scale-110" />
            See Compliance Board OS
          </button>
          <button onClick={() => scrollTo('#health-check')} className="btn btn-secondary group text-sm py-4 px-8">
            Free Security Health Check
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </button>
          <Link to="/pricing" className="btn btn-secondary group text-sm py-4 px-8 no-underline">
            View Pricing
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 border-t border-white/10 pt-8"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 + i * 0.1 }}
              className="text-center lg:text-left"
            >
              <div className="text-2xl md:text-3xl font-poppins font-bold text-ctn-blue mb-1">
                {stat.value}
              </div>
              <div className="text-xs text-ctn-text-dim font-poppins">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:block"
      >
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }}>
          <ChevronDown size={24} className="text-ctn-blue" />
        </motion.div>
      </motion.div>
    </section>
  );
}
