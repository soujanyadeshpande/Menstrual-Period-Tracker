'use client';

import React from 'react';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { useCycle } from '@/context/CycleContext';
import { Clock, CheckCircle2, AlertCircle } from 'lucide-react';

export const ExpectedVsActualCard: React.FC = () => {
  const { cycles, avgCycleLength } = useCycle();

  const latestCycle = cycles[0];
  const previousCycle = cycles[1];

  if (!latestCycle) return null;

  let expectedDateStr = 'N/A';
  let actualDateStr = new Date(latestCycle.startDate).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

  if (previousCycle) {
    const prevStart = new Date(previousCycle.startDate);
    prevStart.setDate(prevStart.getDate() + avgCycleLength);
    expectedDateStr = prevStart.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  }

  return (
    <Card variant="default" className="space-y-4">
      <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
        <div className="flex items-center gap-2">
          <Clock size={18} className="text-rose-500" />
          <h3 className="text-sm font-semibold text-slate-900 dark:text-white">
            Most Recent Cycle: Expected vs Actual
          </h3>
        </div>
        <Badge
          variant={
            latestCycle.status === 'delayed'
              ? 'rose'
              : latestCycle.status === 'preponed'
              ? 'amber'
              : 'emerald'
          }
        >
          {latestCycle.status === 'delayed'
            ? `Delayed (+${latestCycle.delayDays}d)`
            : latestCycle.status === 'preponed'
            ? `Preponed (${latestCycle.delayDays}d)`
            : 'On Time'}
        </Badge>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-850 border border-slate-100 dark:border-slate-800 space-y-1">
          <span className="text-[11px] text-slate-400 font-medium uppercase tracking-wider">
            Expected Start Date
          </span>
          <p className="text-base font-bold text-slate-800 dark:text-slate-100">
            {expectedDateStr}
          </p>
          <p className="text-xs text-slate-500">Based on {avgCycleLength}-day baseline</p>
        </div>

        <div className="p-4 rounded-2xl bg-rose-50/50 dark:bg-rose-950/30 border border-rose-100 dark:border-rose-900/40 space-y-1">
          <span className="text-[11px] text-rose-500 font-medium uppercase tracking-wider flex items-center gap-1">
            <CheckCircle2 size={13} />
            Actual Logged Start Date
          </span>
          <p className="text-base font-bold text-slate-900 dark:text-white">
            {actualDateStr}
          </p>
          <p className="text-xs text-rose-700 dark:text-rose-300">
            Bleeding duration: {latestCycle.periodDuration} days ({latestCycle.flowIntensity} flow)
          </p>
        </div>
      </div>

      {latestCycle.notes && (
        <div className="text-xs bg-slate-50 dark:bg-slate-800 p-3 rounded-xl border border-slate-100 dark:border-slate-800 text-slate-600 dark:text-slate-300">
          <strong className="text-slate-700 dark:text-slate-200">Logged Notes:</strong> {latestCycle.notes}
        </div>
      )}
    </Card>
  );
};
