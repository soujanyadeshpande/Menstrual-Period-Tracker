'use client';

import React from 'react';
import { Card } from '@/components/ui/Card';
import { useCycle } from '@/context/CycleContext';
import { AlertCircle, CheckCircle2, Info, Moon, Compass, Coffee } from 'lucide-react';

export const DelayStatusCard: React.FC = () => {
  const { currentStatus, delayDaysCount, regularityScore } = useCycle();

  return (
    <Card variant="default" className="space-y-3">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold text-slate-900 dark:text-white flex items-center gap-2">
          {currentStatus === 'delayed' ? (
            <AlertCircle size={18} className="text-rose-500" />
          ) : (
            <CheckCircle2 size={18} className="text-emerald-500" />
          )}
          Cycle Status & Analysis
        </h3>
        <span className="text-xs text-slate-500 font-medium">
          Regularity: <strong className="text-slate-800 dark:text-slate-200">{regularityScore}%</strong>
        </span>
      </div>

      {currentStatus === 'delayed' ? (
        <div className="p-3.5 rounded-2xl bg-rose-50/80 dark:bg-rose-950/40 border border-rose-100 dark:border-rose-900/40 space-y-2">
          <p className="text-xs font-semibold text-rose-900 dark:text-rose-200 flex items-center gap-1.5">
            <Info size={14} className="shrink-0 text-rose-600" />
            Your period is currently delayed by {delayDaysCount} day{delayDaysCount > 1 ? 's' : ''}.
          </p>
          <p className="text-[11px] text-rose-800/80 dark:text-rose-300 leading-relaxed">
            Occasional delays of 2-5 days are very common and often triggered by stress, travel, illness, or changes in diet and exercise routine.
          </p>
          <div className="grid grid-cols-3 gap-2 pt-1 text-[10px] text-rose-700 dark:text-rose-300">
            <div className="flex items-center gap-1 bg-white/60 dark:bg-slate-900/60 p-1.5 rounded-lg">
              <Moon size={12} />
              <span>Prioritize sleep</span>
            </div>
            <div className="flex items-center gap-1 bg-white/60 dark:bg-slate-900/60 p-1.5 rounded-lg">
              <Coffee size={12} />
              <span>Reduce caffeine</span>
            </div>
            <div className="flex items-center gap-1 bg-white/60 dark:bg-slate-900/60 p-1.5 rounded-lg">
              <Compass size={12} />
              <span>Hydrate well</span>
            </div>
          </div>
        </div>
      ) : currentStatus === 'preponed' ? (
        <div className="p-3.5 rounded-2xl bg-amber-50/80 dark:bg-amber-950/40 border border-amber-100 dark:border-amber-900/40 space-y-2">
          <p className="text-xs font-semibold text-amber-900 dark:text-amber-200 flex items-center gap-1.5">
            <Info size={14} className="shrink-0 text-amber-600" />
            Your last cycle arrived {delayDaysCount} day{delayDaysCount > 1 ? 's' : ''} early (Preponed).
          </p>
          <p className="text-[11px] text-amber-800/80 dark:text-amber-300 leading-relaxed">
            Early periods can occur due to heightened stress levels, intense exercise, or hormonal fluctuations during ovulation.
          </p>
        </div>
      ) : (
        <div className="p-3.5 rounded-2xl bg-emerald-50/80 dark:bg-emerald-950/40 border border-emerald-100 dark:border-emerald-900/40 space-y-1.5">
          <p className="text-xs font-semibold text-emerald-900 dark:text-emerald-200 flex items-center gap-1.5">
            <CheckCircle2 size={14} className="shrink-0 text-emerald-600" />
            Your cycle is currently on track.
          </p>
          <p className="text-[11px] text-emerald-800/80 dark:text-emerald-300 leading-relaxed">
            Your recorded cycles demonstrate stable regularity within normal medical parameters.
          </p>
        </div>
      )}
    </Card>
  );
};
