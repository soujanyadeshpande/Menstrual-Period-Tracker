'use client';

import React from 'react';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { useCycle } from '@/context/CycleContext';
import { History, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const RecentHistoryCard: React.FC = () => {
  const { cycles } = useCycle();

  const recentCycles = cycles.slice(0, 4);

  return (
    <Card variant="default" className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <History size={18} className="text-rose-500" />
          <h3 className="text-sm font-semibold text-slate-900 dark:text-white">
            Recent Cycle History
          </h3>
        </div>
        <Link
          href="/tracker"
          className="text-xs text-rose-600 dark:text-rose-400 font-medium hover:underline flex items-center gap-1"
        >
          View All <ArrowRight size={12} />
        </Link>
      </div>

      <div className="space-y-2.5">
        {recentCycles.map((c) => {
          const startDateFormatted = new Date(c.startDate).toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
          });
          const endDateFormatted = new Date(c.endDate).toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
          });

          let badgeVariant: 'emerald' | 'rose' | 'amber' = 'emerald';
          let badgeLabel = 'On Time';
          if (c.status === 'delayed') {
            badgeVariant = 'rose';
            badgeLabel = `Delayed (+${c.delayDays}d)`;
          } else if (c.status === 'preponed') {
            badgeVariant = 'amber';
            badgeLabel = `Preponed (${c.delayDays}d)`;
          }

          return (
            <div
              key={c.id}
              className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 text-xs"
            >
              <div>
                <p className="font-semibold text-slate-800 dark:text-slate-100">
                  {startDateFormatted} - {endDateFormatted}
                </p>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                  Duration: {c.periodDuration} days bleeding • Flow: {c.flowIntensity}
                </p>
              </div>

              <div className="flex flex-col items-end gap-1">
                <Badge variant={badgeVariant} size="sm">
                  {badgeLabel}
                </Badge>
                <span className="text-[10px] text-slate-400">
                  {c.cycleLength}d total cycle
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
};
