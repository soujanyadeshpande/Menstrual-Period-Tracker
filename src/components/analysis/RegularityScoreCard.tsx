'use client';

import React from 'react';
import { Card } from '@/components/ui/Card';
import { useCycle } from '@/context/CycleContext';
import { CheckCircle2, TrendingUp, Calendar, ShieldCheck } from 'lucide-react';

export const RegularityScoreCard: React.FC = () => {
  const { cycles, regularityScore, avgCycleLength, avgPeriodDuration } = useCycle();

  const cycleLengths = cycles.map((c) => c.cycleLength);
  const minLength = cycleLengths.length > 0 ? Math.min(...cycleLengths) : 28;
  const maxLength = cycleLengths.length > 0 ? Math.max(...cycleLengths) : 28;

  let scoreCategory = 'Highly Predictable';
  let scoreColor = 'text-emerald-600 dark:text-emerald-400';
  if (regularityScore < 80) {
    scoreCategory = 'Moderate Variation';
    scoreColor = 'text-amber-600 dark:text-amber-400';
  } else if (regularityScore < 70) {
    scoreCategory = 'High Variation';
    scoreColor = 'text-rose-600 dark:text-rose-400';
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {/* Regularity Score */}
      <Card variant="default" className="space-y-1">
        <div className="flex items-center justify-between text-xs text-slate-400">
          <span>Cycle Regularity</span>
          <CheckCircle2 size={16} className="text-emerald-500" />
        </div>
        <div className={`text-3xl font-extrabold tracking-tight ${scoreColor}`}>
          {regularityScore}%
        </div>
        <p className="text-xs font-semibold text-slate-700 dark:text-slate-200">
          {scoreCategory}
        </p>
      </Card>

      {/* Average Cycle Length */}
      <Card variant="default" className="space-y-1">
        <div className="flex items-center justify-between text-xs text-slate-400">
          <span>Avg Cycle Length</span>
          <Calendar size={16} className="text-rose-500" />
        </div>
        <div className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          {avgCycleLength} <span className="text-sm font-normal text-slate-400">Days</span>
        </div>
        <p className="text-xs text-slate-500 dark:text-slate-400">
          Standard range: 21 - 35 days
        </p>
      </Card>

      {/* Min & Max Range */}
      <Card variant="default" className="space-y-1">
        <div className="flex items-center justify-between text-xs text-slate-400">
          <span>Length Variation</span>
          <TrendingUp size={16} className="text-purple-500" />
        </div>
        <div className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          {minLength} - {maxLength} <span className="text-sm font-normal text-slate-400">Days</span>
        </div>
        <p className="text-xs text-slate-500 dark:text-slate-400">
          Variance spread across {cycles.length} cycles
        </p>
      </Card>

      {/* Bleeding Duration */}
      <Card variant="default" className="space-y-1">
        <div className="flex items-center justify-between text-xs text-slate-400">
          <span>Avg Bleeding Period</span>
          <ShieldCheck size={16} className="text-teal-500" />
        </div>
        <div className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          {avgPeriodDuration} <span className="text-sm font-normal text-slate-400">Days</span>
        </div>
        <p className="text-xs text-slate-500 dark:text-slate-400">
          Typical duration: 3 - 7 days
        </p>
      </Card>
    </div>
  );
};
