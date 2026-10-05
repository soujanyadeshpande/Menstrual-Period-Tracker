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
} from 'recharts';
import { Droplet } from 'lucide-react';

export const PeriodDurationChart: React.FC = () => {
  const { cycles } = useCycle();

  const chartData = [...cycles]
    .reverse()
    .map((c) => {
      const dateLabel = new Date(c.startDate).toLocaleDateString('en-US', {
        month: 'short',
        year: '2-digit',
      });
      return {
        name: dateLabel,
        duration: c.periodDuration,
        flow: c.flowIntensity,
      };
    });

  return (
    <Card variant="default" className="space-y-4">
      <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
        <div className="flex items-center gap-2">
          <Droplet size={18} className="text-teal-500" />
          <div>
            <h3 className="text-base font-semibold text-slate-900 dark:text-white">
              Bleeding Duration per Cycle
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Number of active period days logged per cycle
            </p>
          </div>
        </div>
      </div>

      <div className="h-60 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
            <XAxis dataKey="name" tick={{ fontSize: 12, fill: '#64748b' }} />
            <YAxis domain={[0, 10]} tick={{ fontSize: 12, fill: '#64748b' }} />
            <Tooltip
              contentStyle={{
                backgroundColor: '#0f172a',
                color: '#fff',
                borderRadius: '12px',
                border: 'none',
                fontSize: '12px',
              }}
              formatter={(val: any, name: any, item: any) => [
                `${val} Days Bleeding (${item.payload.flow} flow)`,
                'Duration',
              ]}
            />
            <Bar dataKey="duration" fill="#0d9488" radius={[8, 8, 0, 0]} barSize={26} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};
