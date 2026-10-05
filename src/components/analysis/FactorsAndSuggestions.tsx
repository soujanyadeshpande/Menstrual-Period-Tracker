'use client';

import React from 'react';
import { Card } from '@/components/ui/Card';
import { Flame, Brain, Activity, Moon, Utensils, ShieldAlert } from 'lucide-react';

export const FactorsAndSuggestions: React.FC = () => {
  const factors = [
    {
      title: 'Psychological & Physical Stress',
      description: 'High cortisol triggers delayed ovulation by suppressing gonadotropin-releasing hormone (GnRH).',
      icon: Brain,
      color: 'bg-rose-100 text-rose-700 dark:bg-rose-950/60 dark:text-rose-300',
    },
    {
      title: 'Sleep Disruptions & Shift Work',
      description: 'Irregular sleep-wake cycles disrupt melatonin production, altering luteinizing hormone (LH) timing.',
      icon: Moon,
      color: 'bg-purple-100 text-purple-700 dark:bg-purple-950/60 dark:text-purple-300',
    },
    {
      title: 'Intense Unaccustomed Exercise',
      description: 'Rapid increases in physical exertion put stress on the hypothalamic-pituitary-ovarian axis.',
      icon: Activity,
      color: 'bg-teal-100 text-teal-700 dark:bg-teal-950/60 dark:text-teal-300',
    },
    {
      title: 'Nutritional Shifts & Rapid Weight Change',
      description: 'Drastic calisthenics or caloric deficits signal fat stores to alter estrogen synthesis.',
      icon: Utensils,
      color: 'bg-amber-100 text-amber-700 dark:bg-amber-950/60 dark:text-amber-300',
    },
  ];

  return (
    <div className="space-y-6">
      {/* Contributing Factors */}
      <Card variant="default" className="space-y-4">
        <div className="flex items-center gap-2 border-b border-slate-100 dark:border-slate-800 pb-3">
          <Flame size={18} className="text-rose-500" />
          <div>
            <h3 className="text-base font-semibold text-slate-900 dark:text-white">
              Primary Causes of Cycle Variation
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Biomarkers and environmental factors affecting cycle regularity
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {factors.map((f) => {
            const Icon = f.icon;
            return (
              <div
                key={f.title}
                className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-850 border border-slate-100 dark:border-slate-800 space-y-2"
              >
                <div className="flex items-center gap-2">
                  <div className={`p-2 rounded-xl ${f.color}`}>
                    <Icon size={16} />
                  </div>
                  <h4 className="text-xs font-semibold text-slate-900 dark:text-white">
                    {f.title}
                  </h4>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {f.description}
                </p>
              </div>
            );
          })}
        </div>
      </Card>

      {/* Recommendations & Guidance Notice */}
      <Card variant="default" className="bg-rose-50/40 dark:bg-slate-900/60 border-rose-100 dark:border-slate-800 space-y-3">
        <div className="flex items-center gap-2 text-rose-700 dark:text-rose-300">
          <ShieldAlert size={18} />
          <h4 className="text-sm font-semibold">When to Consult a Healthcare Professional</h4>
        </div>
        <ul className="list-disc list-inside space-y-1.5 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
          <li>Cycles consistently shorter than 21 days or longer than 35 days.</li>
          <li>Complete absence of period (amenorrhea) for over 90 days.</li>
          <li>Unusually severe pelvic pain not relieved by standard over-the-counter care.</li>
          <li>Heaviness requiring pad change every 1-2 hours continuously.</li>
        </ul>
        <div className="pt-2 border-t border-rose-100 dark:border-slate-800 text-[11px] text-slate-500 italic">
          Disclaimer: This application does not diagnose medical conditions. Always seek professional advice for health concerns.
        </div>
      </Card>
    </div>
  );
};
