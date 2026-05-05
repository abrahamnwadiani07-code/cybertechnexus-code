import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Eye, EyeOff, ArrowRight, AlertCircle } from 'lucide-react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  if (isAuthenticated) { navigate('/portal/dashboard', { replace: true }); return null; }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    setTimeout(() => {
      if (login(email, password)) {
        navigate('/portal/dashboard');
      } else {
        setError('Invalid email or password.');
      }
      setLoading(false);
    }, 600);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#030b14] relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-cover bg-center opacity-[0.03]" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1920&q=80)' }} />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(26,107,255,0.08)_0%,transparent_70%)]" />

      <div className="relative w-full max-w-md px-6">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-block no-underline">
            <img src="/ctn-logo.png" alt="CTN" className="w-16 h-16 rounded-2xl mx-auto mb-4" />
          </Link>
          <h1 className="font-poppins font-bold text-2xl text-white mb-1">Welcome back</h1>
          <p className="font-poppins text-sm text-[#5a7a8a]">Sign in to your CyberTech Nexus portal</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-[#0a1525] border border-white/[0.06] rounded-2xl p-8 shadow-2xl">
          {error && (
            <div className="flex items-center gap-2 px-4 py-3 rounded-lg bg-ctn-red/10 border border-ctn-red/20 mb-6">
              <AlertCircle size={16} className="text-ctn-red flex-shrink-0" />
              <span className="font-poppins text-xs text-ctn-red">{error}</span>
            </div>
          )}

          <div className="space-y-4">
            <div>
              <label className="block font-poppins text-xs font-medium text-[#5a7a8a] mb-2">Email</label>
              <input
                type="email" required value={email} onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                className="w-full bg-white/[0.04] border border-white/[0.08] rounded-lg px-4 py-3 text-sm text-white font-poppins placeholder:text-[#3a5a6a] focus:outline-none focus:border-ctn-blue/40 focus:ring-1 focus:ring-ctn-blue/20 transition-all box-sizing-border-box"
                style={{ boxSizing: 'border-box' }}
              />
            </div>

            <div>
              <label className="block font-poppins text-xs font-medium text-[#5a7a8a] mb-2">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'} required value={password} onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full bg-white/[0.04] border border-white/[0.08] rounded-lg px-4 py-3 text-sm text-white font-poppins placeholder:text-[#3a5a6a] focus:outline-none focus:border-ctn-blue/40 focus:ring-1 focus:ring-ctn-blue/20 transition-all pr-10"
                  style={{ boxSizing: 'border-box' }}
                />
                <button
                  type="button" onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#5a7a8a] hover:text-white bg-transparent border-none cursor-pointer"
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="w-3.5 h-3.5 rounded border-white/20 accent-ctn-blue" />
                <span className="font-poppins text-xs text-[#5a7a8a]">Remember me</span>
              </label>
              <span className="font-poppins text-xs text-ctn-blue cursor-pointer hover:underline">Forgot password?</span>
            </div>

            <button
              type="submit" disabled={loading}
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-ctn-blue to-[#1050cc] text-white font-poppins font-semibold text-sm py-3 rounded-lg border-none cursor-pointer hover:shadow-[0_0_20px_rgba(26,107,255,0.3)] transition-all disabled:opacity-60"
            >
              {loading ? (
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>Sign In <ArrowRight size={14} /></>
              )}
            </button>
          </div>
        </form>


        {/* Demo Accounts */}
        <div className="mt-6 bg-[#0a1525] border border-white/[0.06] rounded-xl p-4">
          <p className="font-poppins text-[10px] text-[#5a7a8a] uppercase tracking-wider mb-3 text-center">Demo Accounts</p>
          <div className="grid grid-cols-2 gap-2">
            <button type="button" onClick={() => { setEmail('admin@cybertechnexus.com'); setPassword('CyB3rN3xu$2026!'); }} className="px-3 py-2 rounded-lg border border-white/[0.06] bg-white/[0.02] text-left hover:border-ctn-blue/30 transition-all cursor-pointer">
              <div className="font-poppins text-[10px] font-semibold text-white">Admin</div>
              <div className="font-mono text-[8px] text-[#5a7a8a] truncate">admin@cybertechnexus.com</div>
            </button>
            <button type="button" onClick={() => { setEmail('company@demo.com'); setPassword('demo123'); }} className="px-3 py-2 rounded-lg border border-white/[0.06] bg-white/[0.02] text-left hover:border-ctn-blue/30 transition-all cursor-pointer">
              <div className="font-poppins text-[10px] font-semibold text-white">Company</div>
              <div className="font-mono text-[8px] text-[#5a7a8a] truncate">company@demo.com</div>
            </button>
            <button type="button" onClick={() => { setEmail('student@demo.com'); setPassword('demo123'); }} className="px-3 py-2 rounded-lg border border-white/[0.06] bg-white/[0.02] text-left hover:border-ctn-blue/30 transition-all cursor-pointer">
              <div className="font-poppins text-[10px] font-semibold text-white">Student</div>
              <div className="font-mono text-[8px] text-[#5a7a8a] truncate">student@demo.com</div>
            </button>
            <button type="button" onClick={() => { setEmail('trainer@demo.com'); setPassword('demo123'); }} className="px-3 py-2 rounded-lg border border-white/[0.06] bg-white/[0.02] text-left hover:border-ctn-blue/30 transition-all cursor-pointer">
              <div className="font-poppins text-[10px] font-semibold text-white">Trainer</div>
              <div className="font-mono text-[8px] text-[#5a7a8a] truncate">trainer@demo.com</div>
            </button>
          </div>
        </div>

        <p className="text-center mt-4 font-poppins text-xs text-[#5a7a8a]">
          <Link to="/" className="text-ctn-blue hover:underline no-underline">← Back to website</Link>
        </p>
      </div>
    </div>
  );
}
