import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Video, CheckCircle, ArrowRight } from 'lucide-react';

const timeSlots = [
  '9:00 AM', '10:00 AM', '11:00 AM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM',
];

const meetingTypes = [
  { id: 'discovery', title: 'Discovery Call', duration: '30 min', desc: 'Learn about our services and how we can help protect your organization.', icon: Video },
  { id: 'assessment', title: 'Security Assessment Review', duration: '45 min', desc: 'Walk through your current posture and discuss improvement opportunities.', icon: CheckCircle },
  { id: 'demo', title: 'Compliance Board OS Demo', duration: '30 min', desc: 'See our GRC platform in action with a live walkthrough.', icon: Calendar },
];

export default function BookingWidget() {
  const [step, setStep] = useState<'type' | 'time' | 'confirm'>('type');
  const [selectedType, setSelectedType] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [booked, setBooked] = useState(false);

  // Generate next 5 business days
  const getDates = () => {
    const dates: string[] = [];
    const d = new Date();
    while (dates.length < 5) {
      d.setDate(d.getDate() + 1);
      if (d.getDay() !== 0 && d.getDay() !== 6) {
        dates.push(d.toISOString().split('T')[0]);
      }
    }
    return dates;
  };

  const dates = getDates();

  const formatDate = (iso: string) => {
    const d = new Date(iso + 'T12:00:00');
    return d.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
  };

  const handleBook = () => {
    setBooked(true);
  };

  if (booked) {
    return (
      <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="p-8 rounded-2xl border border-green-500/20 bg-green-500/5 text-center">
        <CheckCircle size={40} className="text-green-400 mx-auto mb-4" />
        <h3 className="font-poppins font-bold text-lg text-ctn-text-bright mb-2">Meeting Scheduled!</h3>
        <p className="text-ctn-text-dim text-sm mb-1">
          {meetingTypes.find(m => m.id === selectedType)?.title} on {formatDate(selectedDate)} at {selectedTime}
        </p>
        <p className="text-ctn-text-dim text-xs">You'll receive a calendar invite and video link at your email address shortly.</p>
      </motion.div>
    );
  }

  return (
    <div className="p-6 rounded-2xl border border-ctn-border bg-ctn-bg-elevated">
      <h3 className="font-poppins font-bold text-lg text-ctn-text-bright mb-1">Book a Meeting</h3>
      <p className="text-ctn-text-dim text-sm mb-6">Schedule a call with our security team. No commitment required.</p>

      {step === 'type' && (
        <div className="space-y-3">
          {meetingTypes.map((mt) => (
            <button
              key={mt.id}
              onClick={() => { setSelectedType(mt.id); setStep('time'); }}
              className={`w-full text-left p-4 rounded-xl border transition-all cursor-pointer bg-transparent ${
                selectedType === mt.id ? 'border-ctn-blue/50 bg-ctn-blue/5' : 'border-ctn-border hover:border-ctn-blue/20'
              }`}
            >
              <div className="flex items-start gap-3">
                <mt.icon size={18} className="text-ctn-blue mt-0.5" />
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="font-poppins font-medium text-sm text-ctn-text-bright">{mt.title}</span>
                    <span className="flex items-center gap-1 text-[10px] text-ctn-text-dim font-mono">
                      <Clock size={10} /> {mt.duration}
                    </span>
                  </div>
                  <p className="text-xs text-ctn-text-dim mt-1">{mt.desc}</p>
                </div>
              </div>
            </button>
          ))}
        </div>
      )}

      {step === 'time' && (
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
          <button onClick={() => setStep('type')} className="text-xs text-ctn-blue mb-4 bg-transparent border-none cursor-pointer font-poppins">
            ← Change meeting type
          </button>

          {/* Date Selection */}
          <p className="text-xs text-ctn-text-dim font-medium mb-2">Select a date:</p>
          <div className="flex gap-2 mb-5 flex-wrap">
            {dates.map((d) => (
              <button
                key={d}
                onClick={() => setSelectedDate(d)}
                className={`px-3 py-2 rounded-lg text-xs font-poppins transition-all cursor-pointer border ${
                  selectedDate === d
                    ? 'bg-ctn-blue text-white border-ctn-blue'
                    : 'bg-transparent border-ctn-border text-ctn-text-dim hover:border-ctn-blue/30'
                }`}
              >
                {formatDate(d)}
              </button>
            ))}
          </div>

          {/* Time Selection */}
          {selectedDate && (
            <>
              <p className="text-xs text-ctn-text-dim font-medium mb-2">Select a time (CST):</p>
              <div className="grid grid-cols-4 gap-2 mb-5">
                {timeSlots.map((t) => (
                  <button
                    key={t}
                    onClick={() => setSelectedTime(t)}
                    className={`px-3 py-2 rounded-lg text-xs font-mono transition-all cursor-pointer border ${
                      selectedTime === t
                        ? 'bg-ctn-blue text-white border-ctn-blue'
                        : 'bg-transparent border-ctn-border text-ctn-text-dim hover:border-ctn-blue/30'
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </>
          )}

          {selectedDate && selectedTime && (
            <button
              onClick={handleBook}
              className="w-full py-3 bg-ctn-blue text-white rounded-lg text-sm font-medium cursor-pointer border-none hover:bg-ctn-blue/90 transition-colors flex items-center justify-center gap-2"
            >
              Confirm Booking <ArrowRight size={14} />
            </button>
          )}
        </motion.div>
      )}
    </div>
  );
}
