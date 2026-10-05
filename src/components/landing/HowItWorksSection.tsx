import React from 'react';
import { Calendar, Activity, Sparkles, ArrowRight } from 'lucide-react';

export const HowItWorksSection: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Log Period & Symptoms',
      description: 'Record period start/end dates, flow intensity, cramps, mood, and daily symptoms in our interactive calendar.',
      icon: Calendar,
      color: 'bg-rose-100 text-rose-600 dark:bg-rose-950 dark:text-rose-400',
    },
    {
      number: '02',
      title: 'Track Phase & Delays',
      description: 'LunaFlow automatically calculates your exact cycle phase (Menstrual, Follicular, Ovulatory, Luteal) and detects delay/preponement status.',
      icon: Activity,
      color: 'bg-purple-100 text-purple-600 dark:bg-purple-950 dark:text-purple-400',
    },
    {
      number: '03',
      title: 'Get Smart Recommendations',
      description: 'Receive tailored guidance on nutrition, fitness intensity, self-care, and sleep matched to your active hormonal phase.',
      icon: Sparkles,
      color: 'bg-teal-100 text-teal-600 dark:bg-teal-950 dark:text-teal-400',
    },
  ];

  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-white dark:bg-slate-900 border-y border-slate-100 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold text-rose-600 dark:text-rose-400 uppercase tracking-widest">
            Simple 3-Step Process
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            How LunaFlow Works
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Effortless menstrual cycle tracking designed around your body’s natural rhythm.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="relative p-8 rounded-3xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 flex flex-col justify-between hover:shadow-lg transition-all duration-300 group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-12 h-12 rounded-2xl ${step.color} flex items-center justify-center font-bold shadow-xs group-hover:scale-110 transition-transform`}>
                      <Icon size={22} />
                    </div>
                    <span className="text-3xl font-extrabold text-slate-200 dark:text-slate-700">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {idx < steps.length - 1 && (
                  <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 z-10 text-slate-300 dark:text-slate-700">
                    <ArrowRight size={20} />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
