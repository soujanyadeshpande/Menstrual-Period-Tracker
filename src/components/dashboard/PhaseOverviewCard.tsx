'use client';

import React from 'react';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { useCycle } from '@/context/CycleContext';
import { Activity, Sparkles, Clock, AlertCircle } from 'lucide-react';

export const PhaseOverviewCard: React.FC = () => {
  const { currentPhase, cycleDay, avgCycleLength, currentStatus, delayDaysCount } = useCycle();

  const progressPercent = Math.min(100, Math.round((cycleDay / avgCycleLength) * 100));

  const statusBadgeMap = {
    on_time: { text: 'On Time', variant: 'emerald' as const, icon: Clock },
    delayed: { text: `Delayed by ${delayDaysCount} day${delayDaysCount > 1 ? 's' : ''}`, variant: 'rose' as const, icon: AlertCircle },
    preponed: { text: `Preponed by ${delayDaysCount} day${delayDaysCount > 1 ? 's' : ''}`, variant: 'amber' as const, icon: Clock },
  };

  const currentBadge = statusBadgeMap[currentStatus];
  const StatusIcon = currentBadge.icon;

  return (
    <Card variant="default" className="relative overflow-hidden border-rose-100/80 dark:border-rose-950/40">
      {/* Background soft glow */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-rose-200/20 dark:bg-rose-900/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none" />

      <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-3 max-w-xl">
          <div className="flex flex-wrap items-center gap-2">
            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${currentPhase.badgeBg} ${currentPhase.badgeText}`}>
              {currentPhase.name} Phase
            </span>
            <Badge variant={currentBadge.variant} icon={<StatusIcon size={13} />}>
              {currentBadge.text}
            </Badge>
          </div>

          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
              Day {cycleDay} <span className="text-sm font-normal text-slate-400">of {avgCycleLength}-day cycle</span>
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300 mt-1 font-medium">
              {currentPhase.title}
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
              {currentPhase.description}
            </p>
          </div>

          <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400 pt-1">
            <div className="flex items-center gap-1.5">
              <Activity size={14} className="text-rose-500" />
              <span>Energy: <strong>{currentPhase.energyLevel}</strong></span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1.5">
              <Sparkles size={14} className="text-purple-500" />
              <span>Hormones: <strong className="font-normal">{currentPhase.recommendations.hormoneInsight}</strong></span>
            </div>
          </div>
        </div>

        {/* Circular / Progress Ring representation */}
        <div className="shrink-0 flex flex-col items-center justify-center self-center bg-rose-50/60 dark:bg-slate-850 p-6 rounded-3xl border border-rose-100 dark:border-slate-800 w-full md:w-auto min-w-[200px]">
          <div className="relative w-28 h-28 flex items-center justify-center">
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
              <path
                className="text-slate-200 dark:text-slate-800"
                strokeWidth="3.5"
                stroke="currentColor"
                fill="none"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <path
                className="text-rose-500 transition-all duration-1000 ease-out"
                strokeDasharray={`${progressPercent}, 100`}
                strokeWidth="3.5"
                strokeLinecap="round"
                stroke="currentColor"
                fill="none"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
              <span className="text-2xl font-bold text-slate-900 dark:text-white">
                {progressPercent}%
              </span>
              <span className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">
                Progress
              </span>
            </div>
          </div>
          <span className="text-xs text-slate-500 dark:text-slate-400 mt-2 font-medium">
            Current Phase Cycle
          </span>
        </div>
      </div>
    </Card>
  );
};
