'use client';

import React from 'react';
import { useCycle } from '@/context/CycleContext';
import { PhaseOverviewCard } from '@/components/dashboard/PhaseOverviewCard';
import { NextPeriodCard } from '@/components/dashboard/NextPeriodCard';
import { DelayStatusCard } from '@/components/dashboard/DelayStatusCard';
import { RecentHistoryCard } from '@/components/dashboard/RecentHistoryCard';
import { HealthInsightsCard } from '@/components/dashboard/HealthInsightsCard';
import { LoadingSkeleton } from '@/components/ui/LoadingSkeleton';
import { Sparkles, Calendar } from 'lucide-react';

export default function DashboardPage() {
  const { userProfile, isLoaded } = useCycle();

  if (!isLoaded) {
    return <LoadingSkeleton />;
  }

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200/80 dark:border-slate-800 pb-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight flex items-center gap-2">
            Welcome back, {userProfile.name} <span className="text-xl">🌸</span>
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
            Here is your active phase summary, next period prediction, and health insights.
          </p>
        </div>
        <div className="flex items-center gap-2 text-xs text-rose-600 dark:text-rose-400 font-semibold bg-rose-50 dark:bg-rose-950/60 px-3 py-1.5 rounded-full w-fit">
          <Sparkles size={14} />
          <span>Active Tracking Mode</span>
        </div>
      </div>

      {/* 1. Primary Phase Overview */}
      <PhaseOverviewCard />

      {/* 2. Secondary Metrics & Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Next Expected Period */}
        <div className="lg:col-span-4">
          <NextPeriodCard />
        </div>

        {/* Delay Status & Regularity Analysis */}
        <div className="lg:col-span-8">
          <DelayStatusCard />
        </div>
      </div>

      {/* 3. Recent History & Phase Insights Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-5">
          <RecentHistoryCard />
        </div>
        <div className="lg:col-span-7">
          <HealthInsightsCard />
        </div>
      </div>
    </div>
  );
}
