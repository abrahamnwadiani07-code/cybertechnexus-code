import { Shield, Award, BookOpen, Clock, CheckCircle, ArrowRight, Play, Calendar, TrendingUp } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';

const myCertifications = [
  { badge: 'CCSA', title: 'CTN Certified Security Analyst', status: 'completed', completedDate: 'Jan 2026', score: '92%', validUntil: 'Jan 2029' },
  { badge: 'CCSE', title: 'CTN Certified Cybersecurity Engineer', status: 'in-progress', progress: 68, currentModule: 'Module 5: SIEM/SOAR Automation', nextDeadline: 'May 18, 2026' },
  { badge: 'CTHR', title: 'CTN Certified Threat Hunter', status: 'enrolled', progress: 0, startDate: 'Jun 15, 2026' },
];

const upcomingClasses = [
  { title: 'SIEM/SOAR Automation Lab', date: 'May 7, 2026', time: '10:00 AM CST', instructor: 'Sarah Mitchell', type: 'Live Lab' },
  { title: 'Detection Engineering Workshop', date: 'May 9, 2026', time: '2:00 PM CST', instructor: 'Michael Chen', type: 'Workshop' },
  { title: 'Capstone Prep Session', date: 'May 14, 2026', time: '11:00 AM CST', instructor: 'Chidera Okafor', type: 'Mentoring' },
];

const achievements = [
  { title: 'Fast Learner', desc: 'Completed Module 1-3 in under 2 weeks', icon: '⚡' },
  { title: 'Lab Champion', desc: '100% lab completion rate', icon: '🏆' },
  { title: 'Consistent', desc: '30-day learning streak', icon: '🔥' },
  { title: 'Peer Helper', desc: 'Helped 5 students in forums', icon: '🤝' },
];

export default function IndividualDashboard() {
  const { user } = useAuth();

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <div>
        <h1 className="font-poppins font-bold text-2xl text-white">Welcome back, {user?.name?.split(' ')[0]}</h1>
        <p className="font-poppins text-sm text-[#5a7a8a] mt-1">Your learning journey — keep going!</p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-[#0a1525] border border-white/[0.06] rounded-xl p-5 text-center">
          <Award size={20} className="text-[#1a6bff] mx-auto mb-2" />
          <div className="font-poppins font-bold text-xl text-white">1</div>
          <div className="font-poppins text-[10px] text-[#5a7a8a]">Certifications Earned</div>
        </div>
        <div className="bg-[#0a1525] border border-white/[0.06] rounded-xl p-5 text-center">
          <BookOpen size={20} className="text-[#8b5cf6] mx-auto mb-2" />
          <div className="font-poppins font-bold text-xl text-white">68%</div>
          <div className="font-poppins text-[10px] text-[#5a7a8a]">CCSE Progress</div>
        </div>
        <div className="bg-[#0a1525] border border-white/[0.06] rounded-xl p-5 text-center">
          <Clock size={20} className="text-[#10b981] mx-auto mb-2" />
          <div className="font-poppins font-bold text-xl text-white">127h</div>
          <div className="font-poppins text-[10px] text-[#5a7a8a]">Learning Hours</div>
        </div>
        <div className="bg-[#0a1525] border border-white/[0.06] rounded-xl p-5 text-center">
          <TrendingUp size={20} className="text-[#ffb039] mx-auto mb-2" />
          <div className="font-poppins font-bold text-xl text-white">30</div>
          <div className="font-poppins text-[10px] text-[#5a7a8a]">Day Streak</div>
        </div>
      </div>

      {/* My Certifications */}
      <div className="bg-[#0a1525] border border-white/[0.06] rounded-xl p-6">
        <h2 className="font-poppins font-semibold text-sm text-white mb-4">My Certifications</h2>
        <div className="space-y-4">
          {myCertifications.map(cert => (
            <div key={cert.badge} className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.04]">
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#1a6bff]/10 border border-[#1a6bff]/20 flex items-center justify-center font-mono font-bold text-sm text-[#1a6bff] flex-shrink-0">
                  {cert.badge}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="font-poppins font-semibold text-sm text-white">{cert.title}</h3>
                    <span className={`font-mono text-[8px] tracking-wider px-1.5 py-0.5 rounded ${
                      cert.status === 'completed' ? 'text-green-400 bg-green-400/10' :
                      cert.status === 'in-progress' ? 'text-[#ffb039] bg-[#ffb039]/10' :
                      'text-[#1a6bff] bg-[#1a6bff]/10'
                    }`}>
                      {cert.status === 'completed' ? 'CERTIFIED' : cert.status === 'in-progress' ? 'IN PROGRESS' : 'ENROLLED'}
                    </span>
                  </div>
                  {cert.status === 'completed' && (
                    <p className="font-mono text-[9px] text-[#5a7a8a] mt-1">Score: {cert.score} · Completed: {cert.completedDate} · Valid until: {cert.validUntil}</p>
                  )}
                  {cert.status === 'in-progress' && (
                    <>
                      <p className="font-mono text-[9px] text-[#5a7a8a] mt-1">Current: {cert.currentModule} · Next deadline: {cert.nextDeadline}</p>
                      <div className="mt-2 h-2 bg-white/[0.04] rounded-full overflow-hidden">
                        <div className="h-full bg-[#1a6bff] rounded-full" style={{ width: `${cert.progress}%` }} />
                      </div>
                    </>
                  )}
                  {cert.status === 'enrolled' && (
                    <p className="font-mono text-[9px] text-[#5a7a8a] mt-1">Starts: {cert.startDate}</p>
                  )}
                </div>
                {cert.status === 'in-progress' && (
                  <button className="px-4 py-2 bg-[#1a6bff] text-white text-xs rounded-lg border-none cursor-pointer flex items-center gap-2 whitespace-nowrap">
                    <Play size={12} /> Continue
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Upcoming Classes */}
        <div className="bg-[#0a1525] border border-white/[0.06] rounded-xl p-6">
          <h2 className="font-poppins font-semibold text-sm text-white mb-4">Upcoming Classes</h2>
          <div className="space-y-3">
            {upcomingClasses.map(cls => (
              <div key={cls.title} className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.04]">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-poppins text-xs text-white font-medium">{cls.title}</span>
                  <span className="font-mono text-[8px] text-[#1a6bff] bg-[#1a6bff]/10 px-1.5 py-0.5 rounded">{cls.type}</span>
                </div>
                <div className="flex items-center gap-3 text-[9px] text-[#5a7a8a] font-mono">
                  <span className="flex items-center gap-1"><Calendar size={9} /> {cls.date}</span>
                  <span className="flex items-center gap-1"><Clock size={9} /> {cls.time}</span>
                  <span>Instructor: {cls.instructor}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="bg-[#0a1525] border border-white/[0.06] rounded-xl p-6">
          <h2 className="font-poppins font-semibold text-sm text-white mb-4">Achievements</h2>
          <div className="grid grid-cols-2 gap-3">
            {achievements.map(a => (
              <div key={a.title} className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.04] text-center">
                <div className="text-2xl mb-2">{a.icon}</div>
                <div className="font-poppins font-semibold text-xs text-white mb-0.5">{a.title}</div>
                <div className="font-poppins text-[9px] text-[#5a7a8a]">{a.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
