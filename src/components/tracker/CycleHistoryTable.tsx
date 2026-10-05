'use client';

import React from 'react';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { useCycle } from '@/context/CycleContext';
import { Trash2, History } from 'lucide-react';
import { EmptyState } from '@/components/ui/EmptyState';

export const CycleHistoryTable: React.FC = () => {
  const { cycles, deleteCycle, openLogModal } = useCycle();

  if (cycles.length === 0) {
    return <EmptyState onAction={() => openLogModal()} />;
  }

  return (
    <Card variant="default" className="space-y-4">
      <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
        <div className="flex items-center gap-2">
          <History size={18} className="text-rose-500" />
          <h3 className="text-base font-semibold text-slate-900 dark:text-white">
            Complete Cycle History Log
          </h3>
        </div>
        <span className="text-xs text-slate-500 dark:text-slate-400">
          {cycles.length} Total Cycles Tracked
        </span>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs">
          <thead>
            <tr className="border-b border-slate-200 dark:border-slate-800 text-slate-400 uppercase tracking-wider text-[10px]">
              <th className="py-2.5 px-3">Period Dates</th>
              <th className="py-2.5 px-3">Cycle Length</th>
              <th className="py-2.5 px-3">Duration & Flow</th>
              <th className="py-2.5 px-3">Status</th>
              <th className="py-2.5 px-3">Symptoms</th>
              <th className="py-2.5 px-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
            {cycles.map((c) => {
              const startDateFormatted = new Date(c.startDate).toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
                year: 'numeric',
              });
              const endDateFormatted = new Date(c.endDate).toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
                year: 'numeric',
              });

              let badgeVariant: 'emerald' | 'rose' | 'amber' = 'emerald';
              let statusText = 'On Time';
              if (c.status === 'delayed') {
                badgeVariant = 'rose';
                statusText = `Delayed (+${c.delayDays}d)`;
              } else if (c.status === 'preponed') {
                badgeVariant = 'amber';
                statusText = `Preponed (${c.delayDays}d)`;
              }

              return (
                <tr key={c.id} className="hover:bg-slate-50/60 dark:hover:bg-slate-800/40 transition-colors">
                  <td className="py-3 px-3 font-semibold text-slate-900 dark:text-slate-100">
                    {startDateFormatted} — {endDateFormatted}
                  </td>
                  <td className="py-3 px-3 text-slate-700 dark:text-slate-300 font-medium">
                    {c.cycleLength} Days
                  </td>
                  <td className="py-3 px-3 text-slate-600 dark:text-slate-400">
                    {c.periodDuration} Days ({c.flowIntensity})
                  </td>
                  <td className="py-3 px-3">
                    <Badge variant={badgeVariant} size="sm">
                      {statusText}
                    </Badge>
                  </td>
                  <td className="py-3 px-3">
                    <div className="flex flex-wrap gap-1 max-w-xs">
                      {c.symptoms.map((s) => (
                        <span
                          key={s}
                          className="px-1.5 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-[10px] text-slate-600 dark:text-slate-300"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="py-3 px-3 text-right">
                    <Button
                      onClick={() => deleteCycle(c.id)}
                      variant="ghost"
                      size="sm"
                      className="text-slate-400 hover:text-red-600 dark:hover:text-red-400"
                      title="Delete Entry"
                    >
                      <Trash2 size={14} />
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </Card>
  );
};
