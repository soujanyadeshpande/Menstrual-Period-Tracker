'use client';

import React from 'react';
import { useCycle } from '@/context/CycleContext';
import { InteractiveCalendar } from '@/components/tracker/InteractiveCalendar';
import { ExpectedVsActualCard } from '@/components/tracker/ExpectedVsActualCard';
import { CycleHistoryTable } from '@/components/tracker/CycleHistoryTable';
import { LoadingSkeleton } from '@/components/ui/LoadingSkeleton';
import { Button } from '@/components/ui/Button';
import { Calendar, PlusCircle } from 'lucide-react';

export default function TrackerPage() {
  const { isLoaded, openLogModal } = useCycle();

  if (!isLoaded) {
    return <LoadingSkeleton />;
  }

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200/80 dark:border-slate-800 pb-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight flex items-center gap-2">
            Cycle Tracker & Calendar <Calendar size={24} className="text-rose-500" />
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
            Log period dates, view ovulation predictions, and manage historical cycle entries.
          </p>
        </div>

        <Button
          onClick={() => openLogModal()}
          variant="primary"
          size="md"
          icon={<PlusCircle size={16} />}
        >
          Log Period Entry
        </Button>
      </div>

      {/* 1. Interactive Calendar View */}
      <InteractiveCalendar />

      {/* 2. Expected vs Actual Comparison Card */}
      <ExpectedVsActualCard />

      {/* 3. Complete Cycle History Log */}
      <CycleHistoryTable />
    </div>
  );
}
