import { Users, BookOpen, Award, Calendar, CheckCircle, Clock, BarChart3, Star, FileText } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import MiniChart from '../components/MiniChart';

const myCourses = [
  { id: 'ccse', title: 'CTN Certified Cybersecurity Engineer', students: 24, completion: 65, nextClass: 'May 7, 2026', rating: 4.9 },
  { id: 'ccir', title: 'CTN Certified Incident Responder', students: 18, completion: 42, nextClass: 'May 8, 2026', rating: 4.8 },
  { id: 'ccsa', title: 'CTN Certified Security Analyst', students: 32, completion: 88, nextClass: 'May 6, 2026', rating: 4.9 },
];

const recentSubmissions = [
  { student: 'Jessica Obi', assignment: 'Module 5 Lab: SIEM Configuration', course: 'CCSE', submitted: '2 hours ago', status: 'pending' },
  { student: 'Tom Richards', assignment: 'Risk Assessment Report', course: 'CCSE', submitted: '5 hours ago', status: 'pending' },
  { student: 'Maria Santos', assignment: 'Capstone Proposal', course: 'CCIR', submitted: '1 day ago', status: 'graded' },
  { student: 'Alex Johnson', assignment: 'Module 7 Quiz', course: 'CCSA', submitted: '1 day ago', status: 'graded' },
  { student: 'Sarah Williams', assignment: 'Threat Hunt Report', course: 'CCSE', submitted: '2 days ago', status: 'graded' },
];

const upcomingSessions = [
  { title: 'SIEM/SOAR Automation Lab', course: 'CCSE', date: 'May 7, 2026', time: '10:00 AM', students: 24, type: 'Live Lab' },
  { title: 'Ransomware IR Walkthrough', course: 'CCIR', date: 'May 8, 2026', time: '2:00 PM', students: 18, type: 'Lecture' },
  { title: 'SOC Analyst Capstone Review', course: 'CCSA', date: 'May 9, 2026', time: '9:00 AM', students: 8, type: 'Review' },
];

export default function TrainerDashboard() {
  const { user } = useAuth();

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <div>
        <h1 className="font-poppins font-bold text-2xl text-white">Trainer Dashboard</h1>
        <p className="font-poppins text-sm text-[#5a7a8a] mt-1">Welcome back, {user?.name} — manage your courses and students.</p>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: 'Total Students', value: '74', icon: Users, color: '#1a6bff', chart: [50, 55, 60, 63, 67, 70, 74] },
          { label: 'Active Courses', value: '3', icon: BookOpen, color: '#8b5cf6', chart: [1, 1, 2, 2, 2, 3, 3] },
          { label: 'Avg Rating', value: '4.87', icon: Star, color: '#ffb039', chart: [4.7, 4.75, 4.8, 4.82, 4.84, 4.85, 4.87] },
          { label: 'Pending Reviews', value: '2', icon: FileText, color: '#ff6b35', chart: [5, 4, 6, 3, 4, 3, 2] },
        ].map(card => (
          <div key={card.label} className="bg-[#0a1525] border border-white/[0.06] rounded-xl p-5">
            <div className="flex items-center justify-between mb-3">
              <span className="font-poppins text-xs text-[#5a7a8a]">{card.label}</span>
              <card.icon size={16} style={{ color: card.color }} />
            </div>
            <div className="font-poppins font-bold text-2xl text-white mb-2">{card.value}</div>
            <MiniChart data={card.chart} color={card.color} height={28} />
          </div>
        ))}
      </div>

      {/* My Courses */}
      <div className="bg-[#0a1525] border border-white/[0.06] rounded-xl p-6">
        <h2 className="font-poppins font-semibold text-sm text-white mb-4">My Courses</h2>
        <div className="space-y-3">
          {myCourses.map(course => (
            <div key={course.id} className="flex flex-col md:flex-row md:items-center gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/[0.04]">
              <div className="w-12 h-12 rounded-xl bg-[#1a6bff]/10 border border-[#1a6bff]/20 flex items-center justify-center font-mono font-bold text-xs text-[#1a6bff] flex-shrink-0">
                {course.id.toUpperCase()}
              </div>
              <div className="flex-1">
                <h3 className="font-poppins font-semibold text-sm text-white">{course.title}</h3>
                <div className="flex flex-wrap gap-4 mt-1 font-mono text-[9px] text-[#5a7a8a]">
                  <span className="flex items-center gap-1"><Users size={9} /> {course.students} students</span>
                  <span className="flex items-center gap-1"><BarChart3 size={9} /> {course.completion}% avg completion</span>
                  <span className="flex items-center gap-1"><Star size={9} className="text-yellow-400" /> {course.rating}</span>
                  <span className="flex items-center gap-1"><Calendar size={9} /> Next: {course.nextClass}</span>
                </div>
              </div>
              <button className="px-4 py-2 border border-white/[0.08] text-white text-xs rounded-lg cursor-pointer bg-transparent hover:border-[#1a6bff]/30 transition-colors whitespace-nowrap">
                Manage
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Submissions to Review */}
        <div className="bg-[#0a1525] border border-white/[0.06] rounded-xl p-6">
          <h2 className="font-poppins font-semibold text-sm text-white mb-4">Recent Submissions</h2>
          <div className="space-y-2">
            {recentSubmissions.map((sub, i) => (
              <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-white/[0.02] border border-white/[0.04]">
                <div className="w-7 h-7 rounded-full bg-[#1a6bff]/20 flex items-center justify-center font-mono text-[8px] text-[#1a6bff] font-bold flex-shrink-0">
                  {sub.student.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-poppins text-xs text-white truncate">{sub.assignment}</p>
                  <span className="font-mono text-[9px] text-[#5a7a8a]">{sub.student} · {sub.course} · {sub.submitted}</span>
                </div>
                <span className={`font-mono text-[8px] px-1.5 py-0.5 rounded ${
                  sub.status === 'pending' ? 'text-[#ffb039] bg-[#ffb039]/10' : 'text-green-400 bg-green-400/10'
                }`}>
                  {sub.status.toUpperCase()}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Sessions */}
        <div className="bg-[#0a1525] border border-white/[0.06] rounded-xl p-6">
          <h2 className="font-poppins font-semibold text-sm text-white mb-4">Upcoming Sessions</h2>
          <div className="space-y-3">
            {upcomingSessions.map(session => (
              <div key={session.title} className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-poppins font-medium text-sm text-white">{session.title}</span>
                  <span className="font-mono text-[8px] text-[#1a6bff] bg-[#1a6bff]/10 px-1.5 py-0.5 rounded">{session.type}</span>
                </div>
                <div className="flex flex-wrap gap-3 font-mono text-[9px] text-[#5a7a8a]">
                  <span>{session.course}</span>
                  <span className="flex items-center gap-1"><Calendar size={9} /> {session.date}</span>
                  <span className="flex items-center gap-1"><Clock size={9} /> {session.time}</span>
                  <span className="flex items-center gap-1"><Users size={9} /> {session.students} students</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
