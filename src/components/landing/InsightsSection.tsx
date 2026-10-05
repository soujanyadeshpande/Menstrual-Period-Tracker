import React from 'react';
import { Card } from '@/components/ui/Card';
import { Utensils, Dumbbell, HeartHandshake, Sparkles } from 'lucide-react';

export const InsightsSection: React.FC = () => {
  const phases = [
    {
      name: 'Menstrual Phase',
      days: 'Days 1-5',
      icon: '🩸',
      bg: 'bg-rose-50 dark:bg-rose-950/40 border-rose-100 dark:border-rose-900/40',
      nutrition: 'Iron-rich spinach, lentils, dark chocolate & warming ginger teas.',
      fitness: 'Restorative yoga, light stretching, slow walk.',
    },
    {
      name: 'Follicular Phase',
      days: 'Days 6-13',
      icon: '🌱',
      bg: 'bg-teal-50 dark:bg-teal-950/40 border-teal-100 dark:border-teal-900/40',
      nutrition: 'Fermented foods, vibrant fresh vegetables, lean protein.',
      fitness: 'Cardio, dance, dynamic group workouts, strength training.',
    },
    {
      name: 'Ovulation Phase',
      days: 'Days 14-16',
      icon: '✨',
      bg: 'bg-purple-50 dark:bg-purple-950/40 border-purple-100 dark:border-purple-900/40',
      nutrition: 'Antioxidant berries, cruciferous veggies, high hydration.',
      fitness: 'High-Intensity Interval Training (HIIT), peak lifting.',
    },
    {
      name: 'Luteal Phase',
      days: 'Days 17-28',
      icon: '🍂',
      bg: 'bg-amber-50 dark:bg-amber-950/40 border-amber-100 dark:border-amber-900/40',
      nutrition: 'Complex carbs (sweet potatoes, oats), B6 & magnesium foods.',
      fitness: 'Pilates, steady swimming, moderate resistance training.',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-slate-50/70 dark:bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold text-rose-600 dark:text-rose-400 uppercase tracking-widest">
            Insights & Recommendations
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Sync your lifestyle with your cycle phase.
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Work with your body’s natural hormonal fluctuations rather than against them.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {phases.map((p) => (
            <Card key={p.name} variant="default" className={`space-y-4 border ${p.bg}`}>
              <div className="flex items-center justify-between">
                <span className="text-2xl">{p.icon}</span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-white/80 dark:bg-slate-900 text-slate-700 dark:text-slate-300">
                  {p.days}
                </span>
              </div>

              <div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  {p.name}
                </h3>
              </div>

              <div className="space-y-2 text-xs">
                <div className="space-y-1">
                  <span className="font-semibold text-slate-700 dark:text-slate-200 flex items-center gap-1">
                    <Utensils size={12} className="text-rose-500" /> Nutrition
                  </span>
                  <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed">
                    {p.nutrition}
                  </p>
                </div>

                <div className="space-y-1 pt-1">
                  <span className="font-semibold text-slate-700 dark:text-slate-200 flex items-center gap-1">
                    <Dumbbell size={12} className="text-teal-500" /> Movement
                  </span>
                  <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed">
                    {p.fitness}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
