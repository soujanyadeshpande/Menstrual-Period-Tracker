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
  Cell,
} from 'recharts';
import { AlertCircle } from 'lucide-react';

export const DelayAnalysisChart: React.FC = () => {
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
        delayDays: c.delayDays, // positive = late, negative = early
        status: c.status,
      };
    });

  return (
    <Card variant="default" className="space-y-4">
      <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
        <div className="flex items-center gap-2">
          <AlertCircle size={18} className="text-amber-500" />
          <div>
            <h3 className="text-base font-semibold text-slate-900 dark:text-white">
              Delay & Preponement Variance
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Positive values indicate delay (late), negative values indicate preponement (early)
            </p>
          </div>
        </div>
      </div>

      <div className="h-60 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
            <XAxis dataKey="name" tick={{ fontSize: 12, fill: '#64748b' }} />
            <YAxis domain={[-4, 6]} tick={{ fontSize: 12, fill: '#64748b' }} />
            <Tooltip
              contentStyle={{
                backgroundColor: '#0f172a',
                color: '#fff',
                borderRadius: '12px',
                border: 'none',
                fontSize: '12px',
              }}
              formatter={(val: any) => {
                const num = Number(val);
                if (num > 0) return [`+${num} Days Delayed`, 'Variance'];
                if (num < 0) return [`${num} Days Preponed`, 'Variance'];
                return ['0 Days (On Time)', 'Variance'];
              }}
            />
            <ReferenceLine y={0} stroke="#94a3b8" />
            <Bar dataKey="delayDays" radius={[4, 4, 4, 4]} barSize={26}>
              {chartData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={entry.delayDays > 0 ? '#e11d48' : entry.delayDays < 0 ? '#f59e0b' : '#10b981'}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};
