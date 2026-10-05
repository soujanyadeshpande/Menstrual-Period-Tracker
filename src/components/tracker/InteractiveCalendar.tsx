'use client';

import React, { useState } from 'react';
import { Card } from '@/components/ui/Card';
import { useCycle } from '@/context/CycleContext';
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon, Plus } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export const InteractiveCalendar: React.FC = () => {
  const { cycles, nextPeriodDate, avgPeriodDuration, avgCycleLength, openLogModal } = useCycle();

  const [currentDate, setCurrentDate] = useState(new Date());

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const firstDayOfMonth = new Date(year, month, 1);
  const startingDayOfWeek = firstDayOfMonth.getDay(); // 0 = Sun
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const monthName = currentDate.toLocaleString('default', { month: 'long', year: 'numeric' });

  const prevMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };

  const goToToday = () => {
    setCurrentDate(new Date());
  };

  // Build helper set for actual logged period dates
  const loggedPeriodDates = new Set<string>();
  cycles.forEach((c) => {
    const start = new Date(c.startDate);
    const end = new Date(c.endDate);
    for (let d = new Date(start); d <= end; d.setDate(d.getDate() + 1)) {
      loggedPeriodDates.add(d.toISOString().split('T')[0]);
    }
  });

  // Predicted period dates
  const predictedPeriodDates = new Set<string>();
  const predictedOvulationDates = new Set<string>();
  const predictedFertileDates = new Set<string>();

  if (nextPeriodDate) {
    const nextStart = new Date(nextPeriodDate);
    for (let i = 0; i < avgPeriodDuration; i++) {
      const p = new Date(nextStart);
      p.setDate(p.getDate() + i);
      predictedPeriodDates.add(p.toISOString().split('T')[0]);
    }

    // Ovulation is ~14 days before next period
    const ovu = new Date(nextStart);
    ovu.setDate(ovu.getDate() - 14);
    predictedOvulationDates.add(ovu.toISOString().split('T')[0]);

    // Fertile window is 5 days before ovulation + ovulation day
    for (let f = -5; f <= 1; f++) {
      const fer = new Date(ovu);
      fer.setDate(fer.getDate() + f);
      predictedFertileDates.add(fer.toISOString().split('T')[0]);
    }
  }

  const dayHeaders = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const todayStr = new Date().toISOString().split('T')[0];

  return (
    <Card variant="default" className="space-y-4">
      {/* Calendar Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 dark:border-slate-800 pb-3">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-xl bg-rose-100 dark:bg-rose-950/60 text-rose-600 dark:text-rose-400">
            <CalendarIcon size={18} />
          </div>
          <div>
            <h3 className="text-base font-semibold text-slate-900 dark:text-white">
              {monthName}
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Click any date to log symptoms or period entry
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" onClick={goToToday}>
            Today
          </Button>
          <div className="flex items-center gap-1 border border-slate-200 dark:border-slate-800 rounded-xl p-0.5 bg-slate-50 dark:bg-slate-900">
            <button
              onClick={prevMonth}
              className="p-1.5 text-slate-600 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-800 rounded-lg transition-colors"
              aria-label="Previous Month"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={nextMonth}
              className="p-1.5 text-slate-600 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-800 rounded-lg transition-colors"
              aria-label="Next Month"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap items-center gap-4 text-xs text-slate-600 dark:text-slate-400 bg-slate-50/70 dark:bg-slate-850 p-2.5 rounded-2xl border border-slate-100 dark:border-slate-800">
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-full bg-rose-600" />
          <span>Period Logged</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-full border-2 border-dashed border-rose-500 bg-rose-50" />
          <span>Predicted Period</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-full bg-purple-500" />
          <span>Predicted Ovulation</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-full bg-teal-100 border border-teal-300 dark:bg-teal-950 dark:border-teal-700" />
          <span>Fertile Window</span>
        </div>
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-1 sm:gap-2">
        {dayHeaders.map((dh) => (
          <div
            key={dh}
            className="text-center text-xs font-semibold text-slate-400 dark:text-slate-500 py-2"
          >
            {dh}
          </div>
        ))}

        {/* Empty cells before month start */}
        {Array.from({ length: startingDayOfWeek }).map((_, idx) => (
          <div key={`empty-${idx}`} className="h-10 sm:h-12 rounded-xl bg-slate-50/30 dark:bg-slate-900/30 opacity-40" />
        ))}

        {/* Days of month */}
        {Array.from({ length: daysInMonth }).map((_, idx) => {
          const dayNum = idx + 1;
          const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(dayNum).padStart(2, '0')}`;
          
          const isToday = dateStr === todayStr;
          const isLoggedPeriod = loggedPeriodDates.has(dateStr);
          const isPredictedPeriod = !isLoggedPeriod && predictedPeriodDates.has(dateStr);
          const isOvulation = predictedOvulationDates.has(dateStr);
          const isFertile = !isOvulation && predictedFertileDates.has(dateStr);

          let bgClasses = 'bg-white dark:bg-slate-900 border-slate-200/60 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-rose-300';
          if (isLoggedPeriod) {
            bgClasses = 'bg-rose-600 text-white font-bold border-rose-600 shadow-xs shadow-rose-200 dark:shadow-none';
          } else if (isPredictedPeriod) {
            bgClasses = 'bg-rose-50 dark:bg-rose-950/60 border-2 border-dashed border-rose-400 text-rose-700 dark:text-rose-300 font-semibold';
          } else if (isOvulation) {
            bgClasses = 'bg-purple-600 text-white font-bold border-purple-600 shadow-xs';
          } else if (isFertile) {
            bgClasses = 'bg-teal-50 dark:bg-teal-950/50 border border-teal-300 dark:border-teal-800 text-teal-800 dark:text-teal-300';
          }

          return (
            <button
              key={dateStr}
              onClick={() => openLogModal(dateStr)}
              className={`relative h-10 sm:h-12 rounded-2xl flex flex-col items-center justify-center text-xs transition-all duration-150 group cursor-pointer border ${bgClasses} ${
                isToday ? 'ring-2 ring-rose-500 ring-offset-1 dark:ring-offset-slate-900' : ''
              }`}
            >
              <span>{dayNum}</span>
              {isToday && (
                <span className={`text-[9px] uppercase tracking-tighter ${isLoggedPeriod || isOvulation ? 'text-white/90' : 'text-rose-600 font-bold'}`}>
                  Today
                </span>
              )}
              <span className="opacity-0 group-hover:opacity-100 absolute top-0.5 right-0.5 p-0.5 rounded-full bg-white/80 dark:bg-slate-800 text-slate-700 text-[10px] shadow-xs">
                <Plus size={10} />
              </span>
            </button>
          );
        })}
      </div>
    </Card>
  );
};
