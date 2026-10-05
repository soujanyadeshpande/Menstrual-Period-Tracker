'use client';

import React from 'react';
import { Card } from '@/components/ui/Card';
import { useCycle } from '@/context/CycleContext';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ReferenceLine,
} from 'recharts';
import { BarChart2 } from 'lucide-react';

export const CycleLengthChart: React.FC = () => {
  const { cycles, avgCycleLength } = useCycle();

  // Reverse cycles to show chronological order left-to-right
  const chartData = [...cycles]
    .reverse()
    .map((c) => {
      const dateLabel = new Date(c.startDate).toLocaleDateString('en-US', {
        month: 'short',
        year: '2-digit',
      });
      return {
        name: dateLabel,
        cycleLength: c.cycleLength,
        baseline: avgCycleLength,
        status: c.status,
      };
    });

  return (
    <Card variant="default" className="space-y-4">
      <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
        <div className="flex items-center gap-2">
          <BarChart2 size={18} className="text-rose-500" />
          <div>
            <h3 className="text-base font-semibold text-slate-900 dark:text-white">
              Cycle Length Trends
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Historical cycle duration (days) vs your {avgCycleLength}-day baseline
            </p>
          </div>
        </div>
      </div>

      <div className="h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
            <XAxis dataKey="name" tick={{ fontSize: 12, fill: '#64748b' }} />
            <YAxis domain={[20, 38]} tick={{ fontSize: 12, fill: '#64748b' }} />
            <Tooltip
              contentStyle={{
                backgroundColor: '#0f172a',
                color: '#fff',
                borderRadius: '12px',
                border: 'none',
                fontSize: '12px',
              }}
              formatter={(value: any) => [`${value} Days`, 'Cycle Length']}
            />
            <ReferenceLine y={avgCycleLength} stroke="#e11d48" strokeDasharray="4 4" label={{ value: 'Average Baseline', fill: '#e11d48', fontSize: 10 }} />
            <Bar dataKey="cycleLength" fill="#f43f5e" radius={[8, 8, 0, 0]} barSize={28} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};
