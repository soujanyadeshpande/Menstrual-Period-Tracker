import React from 'react';
import { Calendar, BarChart3, Clock, Lock, Sparkles, AlertCircle, Heart, RefreshCw } from 'lucide-react';

export const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: Clock,
      title: 'Current Phase & Cycle Day',
      description: 'Instant status of Menstrual, Follicular, Ovulation, or Luteal phase with active day countdown.',
      color: 'text-rose-500',
    },
    {
      icon: AlertCircle,
      title: 'Delay & Preponement Alerts',
      description: 'Automatic detection of early or delayed periods with evidence-based non-medical cause analysis.',
      color: 'text-amber-500',
    },
    {
      icon: Calendar,
      title: 'Interactive Calendar Logging',
      description: 'Visually highlight actual bleeding days, predicted period windows, and fertile ovulation days.',
      color: 'text-teal-500',
    },
    {
      icon: BarChart3,
      title: 'Responsive Recharts Analytics',
      description: 'Interactive charts tracking cycle length trends, duration variance, and regularity scores over time.',
      color: 'text-purple-500',
    },
    {
      icon: Sparkles,
      title: 'Hormonal Phase Guidance',
      description: 'Personalized nutrition, workout intensity, and self-care recommendations synchronized with your hormones.',
      color: 'text-indigo-500',
    },
    {
      icon: Lock,
      title: '100% Privacy & Local Storage',
      description: 'Your intimate health data is stored exclusively on your device. Zero servers, cloud, or data selling.',
      color: 'text-emerald-500',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-slate-50/70 dark:bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold text-rose-600 dark:text-rose-400 uppercase tracking-widest">
            Comprehensive Suite
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Designed for Complete Cycle Intelligence
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Everything you need to understand your body, prepare for upcoming phases, and optimize well-being.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feat) => {
            const Icon = feat.icon;
            return (
              <div
                key={feat.title}
                className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-xs hover:shadow-md transition-all duration-300 space-y-3"
              >
                <div className={`p-3 rounded-2xl bg-slate-50 dark:bg-slate-800 w-fit ${feat.color}`}>
                  <Icon size={24} />
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  {feat.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {feat.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
