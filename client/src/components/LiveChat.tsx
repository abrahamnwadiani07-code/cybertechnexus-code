import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';

const quickReplies = [
  'I need a security assessment',
  'Tell me about pricing',
  'I think we\'ve been breached',
  'How do I get started?',
];

const botResponses: Record<string, string> = {
  'I need a security assessment': 'We offer comprehensive security assessments including vulnerability scanning, penetration testing, and compliance gap analysis. Would you like to schedule a free consultation with one of our security architects?',
  'Tell me about pricing': 'Our plans start at $2,500/month for Essentials, $7,500/month for Professional, and custom pricing for Enterprise. Visit our pricing page for details, or I can connect you with our sales team.',
  'I think we\'ve been breached': 'If you suspect a breach, contact our Incident Response team immediately at +1 (469) 555-1234 (24/7 hotline). We have a sub-8-minute response time for active incidents. Do not power off affected systems.',
  'How do I get started?': 'Getting started is simple: 1) Schedule a free discovery call, 2) We assess your current security posture, 3) You receive a tailored security roadmap. Want me to help you book a call?',
};

interface Message {
  id: number;
  text: string;
  from: 'bot' | 'user';
  time: string;
}

export default function LiveChat() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: 'Hi! I\'m the CTN Security Assistant. How can I help you today?',
      from: 'bot',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ]);
  const [input, setInput] = useState('');

  const sendMessage = (text: string) => {
    const userMsg: Message = {
      id: Date.now(),
      text,
      from: 'user',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };
    setMessages(prev => [...prev, userMsg]);
    setInput('');

    // Bot response
    setTimeout(() => {
      const response = botResponses[text] || 'Thanks for your message! A security consultant will follow up within 15 minutes during business hours. For urgent matters, call our hotline at +1 (469) 555-1234.';
      const botMsg: Message = {
        id: Date.now() + 1,
        text: response,
        from: 'bot',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages(prev => [...prev, botMsg]);
    }, 1000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) sendMessage(input.trim());
  };

  return (
    <>
      {/* Chat Button */}
      <AnimatePresence>
        {!open && (
          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            whileHover={{ scale: 1.05 }}
            onClick={() => setOpen(true)}
            className="fixed bottom-6 right-6 z-[9998] w-14 h-14 rounded-full bg-ctn-blue text-white shadow-lg shadow-ctn-blue/30 flex items-center justify-center cursor-pointer border-none hover:bg-ctn-blue/90 transition-colors"
          >
            <MessageCircle size={22} />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-ctn-bg" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-6 right-6 z-[9998] w-[380px] max-w-[calc(100vw-48px)] h-[520px] max-h-[calc(100vh-100px)] rounded-2xl border border-ctn-border bg-ctn-bg-elevated shadow-2xl shadow-black/40 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-ctn-border bg-ctn-bg">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-ctn-blue/10 border border-ctn-blue/20 flex items-center justify-center">
                  <Bot size={18} className="text-ctn-blue" />
                </div>
                <div>
                  <div className="font-poppins font-semibold text-sm text-ctn-text-bright">CTN Assistant</div>
                  <div className="flex items-center gap-1.5 text-[10px] text-green-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                    Online now
                  </div>
                </div>
              </div>
              <button onClick={() => setOpen(false)} className="text-ctn-text-dim hover:text-ctn-text transition-colors bg-transparent border-none cursor-pointer">
                <X size={18} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] ${msg.from === 'user' ? 'order-1' : ''}`}>
                    <div className={`px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                      msg.from === 'user'
                        ? 'bg-ctn-blue text-white rounded-br-md'
                        : 'bg-ctn-bg border border-ctn-border text-ctn-text rounded-bl-md'
                    }`}>
                      {msg.text}
                    </div>
                    <div className={`text-[10px] text-ctn-text-dim mt-1 ${msg.from === 'user' ? 'text-right' : ''}`}>{msg.time}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Replies */}
            {messages.length <= 2 && (
              <div className="px-4 pb-2 flex flex-wrap gap-2">
                {quickReplies.map((q) => (
                  <button
                    key={q}
                    onClick={() => sendMessage(q)}
                    className="px-3 py-1.5 text-[11px] rounded-full border border-ctn-blue/20 text-ctn-blue hover:bg-ctn-blue/10 transition-colors cursor-pointer bg-transparent"
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}

            {/* Input */}
            <form onSubmit={handleSubmit} className="p-3 border-t border-ctn-border flex gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type a message..."
                className="flex-1 px-4 py-2.5 rounded-lg bg-ctn-bg border border-ctn-border text-ctn-text text-sm font-poppins placeholder:text-ctn-text-dim/50 focus:outline-none focus:border-ctn-blue/50 transition-colors"
              />
              <button
                type="submit"
                disabled={!input.trim()}
                className="w-10 h-10 rounded-lg bg-ctn-blue text-white flex items-center justify-center cursor-pointer border-none hover:bg-ctn-blue/90 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
              >
                <Send size={16} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
