'use client';

import React from 'react';
import { useCycle } from '@/context/CycleContext';
import { RegularityScoreCard } from '@/components/analysis/RegularityScoreCard';
import { CycleLengthChart } from '@/components/analysis/CycleLengthChart';
import { DelayAnalysisChart } from '@/components/analysis/DelayAnalysisChart';
import { PeriodDurationChart } from '@/components/analysis/PeriodDurationChart';
import { FactorsAndSuggestions } from '@/components/analysis/FactorsAndSuggestions';
import { LoadingSkeleton } from '@/components/ui/LoadingSkeleton';
import { BarChart3 } from 'lucide-react';

export default function AnalysisPage() {
  const { isLoaded } = useCycle();

  if (!isLoaded) {
    return <LoadingSkeleton />;
  }

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="border-b border-slate-200/80 dark:border-slate-800 pb-4">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight flex items-center gap-2">
          Cycle Analysis & Insights <BarChart3 size={24} className="text-purple-500" />
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
          Detailed trends, regularity score, delay variance charts, and hormonal factor analysis.
        </p>
      </div>

      {/* 1. Metric Score Cards */}
      <RegularityScoreCard />

      {/* 2. Main Cycle Length Trend Chart */}
      <CycleLengthChart />

      {/* 3. Delay & Duration Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <DelayAnalysisChart />
        <PeriodDurationChart />
      </div>

      {/* 4. Contributing Factors & Medical Disclaimer */}
      <FactorsAndSuggestions />
    </div>
  );
}
