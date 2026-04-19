import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Phone, Clock, MessageSquare, Calendar, Shield } from 'lucide-react';
import toast from 'react-hot-toast';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const serviceOptions = ['Cybersecurity Strategy & Advisory', 'Penetration Testing', 'Incident Response', 'IT & Cybersecurity Consultancy', 'Compliance & Regulatory Services', 'Network Security', 'Staffing Solutions', 'Security Awareness Training', 'Compliance Board OS Demo', 'Other'];

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'contact@cybertechnexus.com' },
  { icon: Phone, label: 'Phone', value: '+1 (555) CTN-SEC1' },
  { icon: MapPin, label: 'Offices', value: 'Texas, USA · Lagos, Nigeria' },
  { icon: Clock, label: 'Response', value: 'Within 24 hours (IR: < 8 min)' },
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', company: '', service: '', message: '' });
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    try {
      const res = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) });
      if (res.ok) { toast.success('Message sent! We\'ll be in touch within 24 hours.'); setForm({ name: '', email: '', company: '', service: '', message: '' }); }
      else { toast.error('Something went wrong.'); }
    } catch { toast.error('Network error.'); }
    finally { setSending(false); }
  };

  return (
    <>
      <Navbar />
      <div className="relative overflow-hidden">
        <div className="relative py-20">
          <div className="absolute inset-0 bg-cover bg-center opacity-[0.04]" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1920&q=80)' }} />
          <div className="absolute inset-0 bg-gradient-to-b from-ctn-bg via-ctn-bg/90 to-ctn-bg" />
          <div className="relative px-6 lg:px-12 max-w-7xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
              <span className="inline-block font-mono text-[11px] tracking-[0.25em] text-ctn-blue uppercase mb-3 px-3 py-1 border border-ctn-blue/20 rounded-full">Contact Us</span>
              <h1 className="font-poppins font-bold text-4xl md:text-5xl text-ctn-text-bright mt-4 mb-4">
                Let's Secure Your <span className="text-ctn-blue text-glow-blue">Future</span>
              </h1>
              <p className="text-ctn-text-dim max-w-xl mx-auto text-lg">Tell us about your challenges. Our team responds within 24 hours.</p>
            </motion.div>
          </div>
        </div>

        <div className="px-6 lg:px-12 max-w-6xl mx-auto pb-24">
          {/* Quick action cards */}
          <div className="grid sm:grid-cols-3 gap-4 mb-12">
            {[
              { icon: MessageSquare, title: 'General Inquiry', text: 'Questions about our services or pricing' },
              { icon: Calendar, title: 'Book a Demo', text: 'See Compliance Board OS in action' },
              { icon: Shield, title: 'Incident Response', text: 'Need immediate breach support' },
            ].map((card, i) => {
              const Icon = card.icon;
              return (
                <motion.div key={card.title} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
                  className="cyber-card p-6 text-center cursor-pointer hover:border-ctn-blue/30 transition-colors">
                  <Icon size={24} className="text-ctn-blue mx-auto mb-3" />
                  <h3 className="font-poppins font-semibold text-sm text-ctn-text-bright mb-1">{card.title}</h3>
                  <p className="font-poppins text-xs text-ctn-text-dim">{card.text}</p>
                </motion.div>
              );
            })}
          </div>

          <div className="grid lg:grid-cols-[1fr_1.5fr] gap-12">
            {/* Contact info */}
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
              <h2 className="font-poppins font-semibold text-xl text-ctn-text-bright mb-6">Get in Touch</h2>
              <div className="space-y-5 mb-10">
                {contactInfo.map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-ctn-blue/10 border border-ctn-blue/20 flex items-center justify-center flex-shrink-0">
                      <Icon size={18} className="text-ctn-blue" />
                    </div>
                    <div>
                      <div className="font-poppins text-xs text-ctn-text-dim">{label}</div>
                      <div className="font-poppins text-sm text-ctn-text-bright">{value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Form */}
            <motion.form onSubmit={handleSubmit} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }} className="cyber-card p-8 space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <input type="text" placeholder="Name *" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="input-field" />
                <input type="email" placeholder="Work Email *" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="input-field" />
              </div>
              <input type="text" placeholder="Company" value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} className="input-field" />
              <select value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })} required className="input-field">
                <option value="">What do you need help with? *</option>
                {serviceOptions.map((s) => <option key={s} value={s}>{s}</option>)}
              </select>
              <textarea placeholder="Tell us more about your needs *" required rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="input-field resize-none" />
              <button type="submit" disabled={sending} className="btn btn-primary w-full text-sm py-3.5">
                <Send size={14} /> {sending ? 'Sending...' : 'Send Message'}
              </button>
            </motion.form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
