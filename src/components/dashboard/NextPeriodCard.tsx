'use client';

import React from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { useCycle } from '@/context/CycleContext';
import { Calendar, PlusCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const NextPeriodCard: React.FC = () => {
  const { nextPeriodDate, daysUntilNextPeriod, openLogModal } = useCycle();

  const formattedDate = new Date(nextPeriodDate).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <Card variant="default" className="flex flex-col justify-between h-full space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-xl bg-rose-100 dark:bg-rose-950/60 text-rose-600 dark:text-rose-400">
            <Calendar size={18} />
          </div>
          <h3 className="text-sm font-semibold text-slate-900 dark:text-white">
            Next Expected Period
          </h3>
        </div>
        <Link href="/tracker" className="text-xs text-rose-600 dark:text-rose-400 font-medium hover:underline flex items-center gap-1">
          Tracker <ArrowRight size={12} />
        </Link>
      </div>

      <div className="my-2">
        {daysUntilNextPeriod >= 0 ? (
          <div>
            <div className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              {daysUntilNextPeriod === 0 ? 'Today' : `${daysUntilNextPeriod} days`}
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Predicted start on <span className="font-semibold text-slate-700 dark:text-slate-200">{formattedDate}</span>
            </p>
          </div>
        ) : (
          <div>
            <div className="text-3xl font-extrabold text-rose-600 dark:text-rose-400 tracking-tight">
              {Math.abs(daysUntilNextPeriod)} Days Late
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Expected date was <span className="font-semibold text-slate-700 dark:text-slate-200">{formattedDate}</span>
            </p>
          </div>
        )}
      </div>

      <div className="pt-2 border-t border-slate-100 dark:border-slate-800">
        <Button
          onClick={() => openLogModal()}
          variant="primary"
          size="sm"
          className="w-full"
          icon={<PlusCircle size={15} />}
        >
          Log Period Arrival
        </Button>
      </div>
    </Card>
  );
};
