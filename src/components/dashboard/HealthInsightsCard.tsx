'use client';

import React from 'react';
import { Card } from '@/components/ui/Card';
import { useCycle } from '@/context/CycleContext';
import { Utensils, Dumbbell, HeartHandshake, ShieldCheck } from 'lucide-react';

export const HealthInsightsCard: React.FC = () => {
  const { currentPhase } = useCycle();
  const recs = currentPhase.recommendations;

  return (
    <Card variant="default" className="space-y-4">
      <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
        <div>
          <h3 className="text-base font-semibold text-slate-900 dark:text-white">
            Phase Recommendations
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Tailored suggestions for your active <span className="font-semibold text-rose-600">{currentPhase.name}</span> phase
          </p>
        </div>
        <span className="text-[10px] bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 px-2 py-1 rounded-md font-medium">
          Personalized
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Nutrition */}
        <div className="p-4 rounded-2xl bg-rose-50/50 dark:bg-slate-800/40 border border-rose-100/60 dark:border-slate-800 space-y-2">
          <div className="flex items-center gap-2 text-xs font-semibold text-rose-700 dark:text-rose-300">
            <div className="p-1.5 rounded-lg bg-rose-100 dark:bg-rose-950 text-rose-600">
              <Utensils size={14} />
            </div>
            <span>Nutrition & Diet</span>
          </div>
          <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
            {recs.nutrition}
          </p>
        </div>

        {/* Exercise */}
        <div className="p-4 rounded-2xl bg-teal-50/50 dark:bg-slate-800/40 border border-teal-100/60 dark:border-slate-800 space-y-2">
          <div className="flex items-center gap-2 text-xs font-semibold text-teal-700 dark:text-teal-300">
            <div className="p-1.5 rounded-lg bg-teal-100 dark:bg-teal-950 text-teal-600">
              <Dumbbell size={14} />
            </div>
            <span>Fitness & Movement</span>
          </div>
          <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
            {recs.exercise}
          </p>
        </div>

        {/* Self Care */}
        <div className="p-4 rounded-2xl bg-purple-50/50 dark:bg-slate-800/40 border border-purple-100/60 dark:border-slate-800 space-y-2">
          <div className="flex items-center gap-2 text-xs font-semibold text-purple-700 dark:text-purple-300">
            <div className="p-1.5 rounded-lg bg-purple-100 dark:bg-purple-950 text-purple-600">
              <HeartHandshake size={14} />
            </div>
            <span>Self-Care & Sleep</span>
          </div>
          <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
            {recs.selfCare}
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between text-[11px] text-slate-400 dark:text-slate-500 pt-2">
        <span className="flex items-center gap-1">
          <ShieldCheck size={13} className="text-slate-400" />
          Educational guidance only. Not intended as medical diagnosis.
        </span>
      </div>
    </Card>
  );
};
