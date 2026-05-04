import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Check, X, Shield, Zap, Crown, ArrowRight, HelpCircle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const plans = [
  {
    name: 'Essentials',
    icon: Shield,
    price: '2,500',
    period: '/month',
    description: 'Core protection for startups and small businesses getting serious about security.',
    features: [
      { text: 'Quarterly vulnerability scans', included: true },
      { text: 'Annual penetration test (1 app)', included: true },
      { text: 'Security awareness training', included: true },
      { text: 'Email & phone support', included: true },
      { text: 'Monthly security report', included: true },
      { text: 'Policy template library', included: true },
      { text: '24/7 SOC monitoring', included: false },
      { text: 'Incident response retainer', included: false },
      { text: 'Compliance Board OS access', included: false },
      { text: 'Dedicated security advisor', included: false },
    ],
    cta: 'Get Started',
    popular: false,
  },
  {
    name: 'Professional',
    icon: Zap,
    price: '7,500',
    period: '/month',
    description: 'Comprehensive security for growing companies with compliance requirements.',
    features: [
      { text: 'Monthly vulnerability scans', included: true },
      { text: 'Bi-annual penetration tests (3 apps)', included: true },
      { text: 'Security awareness training + phishing sims', included: true },
      { text: 'Priority support (4hr SLA)', included: true },
      { text: 'Weekly security reports', included: true },
      { text: 'Full policy & procedure library', included: true },
      { text: '24/7 SOC monitoring', included: true },
      { text: 'Incident response retainer (8hr)', included: true },
      { text: 'Compliance Board OS access', included: true },
      { text: 'Dedicated security advisor', included: false },
    ],
    cta: 'Get Started',
    popular: true,
  },
  {
    name: 'Enterprise',
    icon: Crown,
    price: 'Custom',
    period: '',
    description: 'Full-spectrum security operations for organizations with complex requirements.',
    features: [
      { text: 'Continuous vulnerability scanning', included: true },
      { text: 'Unlimited penetration testing', included: true },
      { text: 'Custom training & tabletop exercises', included: true },
      { text: 'Dedicated hotline (1hr SLA)', included: true },
      { text: 'Real-time dashboards & reporting', included: true },
      { text: 'Custom policy development', included: true },
      { text: '24/7 SOC with threat hunting', included: true },
      { text: 'Unlimited incident response', included: true },
      { text: 'Compliance Board OS (unlimited users)', included: true },
      { text: 'Dedicated CISO-as-a-Service', included: true },
    ],
    cta: 'Contact Sales',
    popular: false,
  },
];

const faqs = [
  { q: 'What compliance frameworks do you support?', a: 'We support ISO 27001, SOC 2 Type I & II, GDPR, HIPAA, PCI DSS, NIST CSF, Cyber Essentials, and DORA. Custom frameworks available on Enterprise plans.' },
  { q: 'Can I switch plans at any time?', a: 'Yes. You can upgrade or downgrade at any time. Changes take effect at the next billing cycle. No long-term contracts required.' },
  { q: 'Do you offer discounts for annual billing?', a: 'Yes. Annual billing saves 15% across all plans. Non-profits and educational institutions receive an additional 20% discount.' },
  { q: 'What happens if we experience a breach?', a: 'Professional and Enterprise plans include incident response retainers. We respond within the SLA specified in your plan. Essentials clients can purchase IR services on-demand.' },
  { q: 'How quickly can we get started?', a: 'Essentials and Professional plans can be activated within 48 hours. Enterprise engagements typically begin within 1-2 weeks after scoping.' },
  { q: 'Do you work with specific industries?', a: 'We serve all industries but have deep expertise in financial services, healthcare, SaaS/technology, legal, and government sectors.' },
];

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <div className="relative overflow-hidden">
        {/* Hero */}
        <div className="relative py-20">
          <div className="absolute inset-0 bg-gradient-to-b from-ctn-bg via-ctn-bg/90 to-ctn-bg" />
          <div className="relative max-w-7xl mx-auto px-6 lg:px-12 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <span className="inline-block text-xs font-mono uppercase tracking-[0.25em] text-ctn-blue border border-ctn-blue/20 rounded-full px-4 py-1.5 mb-6">
                Transparent Pricing
              </span>
              <h1 className="font-poppins text-4xl md:text-5xl font-bold text-ctn-text-bright mb-5 leading-tight">
                Security That Scales<br />
                <span className="text-ctn-blue">With You</span>
              </h1>
              <p className="text-ctn-text-dim text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
                No hidden fees. No surprise charges. Choose the plan that fits your risk profile and compliance needs.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Pricing Cards */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
              {plans.map((plan, i) => (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`relative p-8 rounded-2xl border transition-all ${
                    plan.popular
                      ? 'border-ctn-blue/50 bg-ctn-blue/[0.03] shadow-lg shadow-ctn-blue/10 scale-[1.02]'
                      : 'border-ctn-border bg-ctn-bg-elevated hover:border-ctn-blue/20'
                  }`}
                >
                  {plan.popular && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-[10px] font-mono uppercase tracking-wider text-ctn-bg bg-ctn-blue px-3 py-1 rounded-full font-bold">
                      Most Popular
                    </span>
                  )}
                  <plan.icon size={24} className="text-ctn-blue mb-4" />
                  <h3 className="font-poppins text-xl font-bold text-ctn-text-bright mb-1">{plan.name}</h3>
                  <p className="text-ctn-text-dim text-sm mb-5">{plan.description}</p>
                  <div className="flex items-baseline gap-1 mb-6">
                    {plan.price !== 'Custom' && <span className="text-ctn-text-dim text-sm">$</span>}
                    <span className="font-poppins text-3xl font-bold text-ctn-text-bright">{plan.price}</span>
                    <span className="text-ctn-text-dim text-sm">{plan.period}</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((f) => (
                      <li key={f.text} className="flex items-start gap-2.5 text-sm">
                        {f.included ? (
                          <Check size={15} className="text-green-400 mt-0.5 flex-shrink-0" />
                        ) : (
                          <X size={15} className="text-ctn-text-dim/40 mt-0.5 flex-shrink-0" />
                        )}
                        <span className={f.included ? 'text-ctn-text' : 'text-ctn-text-dim/50'}>{f.text}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className={`block text-center py-3 px-6 rounded-lg font-medium text-sm no-underline transition-all ${
                      plan.popular
                        ? 'bg-ctn-blue text-white hover:bg-ctn-blue/90'
                        : 'border border-ctn-border text-ctn-text hover:border-ctn-blue hover:text-ctn-blue'
                    }`}
                  >
                    {plan.cta} <ArrowRight size={14} className="inline ml-1" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 border-t border-ctn-border">
          <div className="max-w-3xl mx-auto px-6 lg:px-12">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
              <h2 className="font-poppins text-2xl md:text-3xl font-bold text-ctn-text-bright mb-4">Frequently Asked Questions</h2>
            </motion.div>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <motion.details
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="group p-5 rounded-xl border border-ctn-border bg-ctn-bg-elevated"
                >
                  <summary className="flex items-center gap-3 cursor-pointer list-none font-poppins font-medium text-ctn-text-bright text-sm">
                    <HelpCircle size={16} className="text-ctn-blue flex-shrink-0" />
                    {faq.q}
                  </summary>
                  <p className="mt-3 pl-7 text-ctn-text-dim text-sm leading-relaxed">{faq.a}</p>
                </motion.details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 border-t border-ctn-border">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="font-poppins text-2xl font-bold text-ctn-text-bright mb-4">Need a Custom Solution?</h2>
            <p className="text-ctn-text-dim mb-6">Our team will design a security program tailored to your industry, size, and risk profile.</p>
            <Link to="/contact" className="btn btn-primary px-8 py-3 no-underline">
              Talk to an Expert
            </Link>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
