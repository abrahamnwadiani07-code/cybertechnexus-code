import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Phone, Clock } from 'lucide-react';
import toast from 'react-hot-toast';

const serviceOptions = [
  'Proactive Security Monitoring',
  'Penetration Testing',
  'Incident Response',
  'IT & Cybersecurity Consultancy',
  'Compliance & Regulatory Services',
  'Network Security',
  'Staffing Solutions',
  'Security Awareness Training',
  'Other',
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', company: '', service: '', message: '' });
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        toast.success('Message sent! We\'ll be in touch within 24 hours.');
        setForm({ name: '', email: '', company: '', service: '', message: '' });
      } else {
        toast.error('Something went wrong. Please try again.');
      }
    } catch {
      toast.error('Network error. Please try again.');
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.04]"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1920&q=80)' }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ctn-bg via-ctn-bg/80 to-ctn-bg" />

    <div className="relative px-6 lg:px-12 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-16">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block font-mono text-[11px] tracking-[0.25em] text-ctn-blue uppercase mb-3 px-3 py-1 border border-ctn-blue/20 rounded-full">
            Get in Touch
          </span>
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-ctn-text-bright mt-4 mb-4">
            Start Your Security <span className="text-ctn-blue text-glow-blue">Journey</span>
          </h2>
          <p className="text-ctn-text-dim leading-relaxed mb-10">
            Tell us about your organization and security needs. Our team responds within 24 hours with a tailored approach.
          </p>

          <div className="space-y-5">
            {[
              { icon: Mail, text: 'contact@cybertechnexus.com' },
              { icon: Phone, text: '+1 (555) CTN-SEC1' },
              { icon: MapPin, text: 'Texas, USA · Lagos, Nigeria' },
              { icon: Clock, text: '24/7 Incident Response Available' },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-4 text-sm">
                <div className="w-9 h-9 rounded-lg bg-ctn-blue/10 border border-ctn-blue/20 flex items-center justify-center flex-shrink-0">
                  <Icon size={16} className="text-ctn-blue" />
                </div>
                <span className="text-ctn-text-dim font-poppins">{text}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right - Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="cyber-card p-8 space-y-4"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <input type="text" placeholder="Name *" required value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })} className="input-field" />
            <input type="email" placeholder="Email *" required value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })} className="input-field" />
          </div>
          <input type="text" placeholder="Company" value={form.company}
            onChange={(e) => setForm({ ...form, company: e.target.value })} className="input-field" />
          <select value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })}
            required className="input-field">
            <option value="">Select a service *</option>
            {serviceOptions.map((s) => <option key={s} value={s}>{s}</option>)}
          </select>
          <textarea placeholder="Tell us about your security needs *" required rows={4}
            value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="input-field resize-none" />
          <button type="submit" disabled={sending} className="btn btn-primary w-full text-sm py-3.5">
            <Send size={14} />
            {sending ? 'Sending...' : 'Send Message'}
          </button>
        </motion.form>
      </div>
    </div>
    </section>
  );
}
