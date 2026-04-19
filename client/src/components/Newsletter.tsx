import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowRight } from 'lucide-react';
import toast from 'react-hot-toast';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    try {
      const res = await fetch('/api/subscribers', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email }) });
      if (res.ok) { toast.success('Subscribed! Welcome to CTN Intel.'); setEmail(''); }
      else if (res.status === 409) { toast.error('You\'re already subscribed!'); }
      else { toast.error('Something went wrong.'); }
    } catch { toast.error('Network error.'); }
    finally { setSending(false); }
  };

  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-ctn-blue/5 via-transparent to-ctn-blue/5" />
      <div className="relative px-6 lg:px-12 max-w-3xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="cyber-card p-10 text-center box-glow-blue">
          <Mail size={32} className="text-ctn-blue mx-auto mb-4" />
          <h3 className="font-poppins font-bold text-xl text-ctn-text-bright mb-2">CTN Threat Intel & GRC Updates</h3>
          <p className="text-ctn-text-dim text-sm mb-6">Weekly cybersecurity insights, compliance updates, and threat intelligence — straight to your inbox.</p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input type="email" required placeholder="your@email.com" value={email} onChange={(e) => setEmail(e.target.value)} className="input-field flex-1" />
            <button type="submit" disabled={sending} className="btn btn-primary text-xs py-3 px-6 whitespace-nowrap">
              {sending ? 'Subscribing...' : 'Subscribe'} <ArrowRight size={12} />
            </button>
          </form>
          <p className="font-mono text-[9px] text-ctn-text-dim mt-4 tracking-wider">No spam. Unsubscribe anytime. Read by 2,000+ security professionals.</p>
        </motion.div>
      </div>
    </section>
  );
}
