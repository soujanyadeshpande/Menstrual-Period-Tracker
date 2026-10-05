import React from 'react';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Calendar, BarChart2, CheckCircle2, ArrowRight } from 'lucide-react';

export const TrackingPreviewSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Visual Showcase */}
          <div className="lg:col-span-6 space-y-4">
            <Card variant="default" className="shadow-lg p-6 space-y-4 border-slate-200 dark:border-slate-800">
              <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
                <div className="flex items-center gap-2">
                  <BarChart2 size={18} className="text-rose-500" />
                  <span className="font-bold text-sm text-slate-900 dark:text-white">Trend Analytics Preview</span>
                </div>
                <Badge variant="teal">94% Regularity</Badge>
              </div>

              {/* Mock visual bars */}
              <div className="space-y-3 pt-2">
                <div>
                  <div className="flex justify-between text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    <span>September Cycle</span>
                    <span>28 Days (On Time)</span>
                  </div>
                  <div className="w-full bg-slate-100 dark:bg-slate-800 h-3 rounded-full overflow-hidden">
                    <div className="bg-rose-500 h-full w-[80%] rounded-full" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    <span>August Cycle</span>
                    <span>28 Days (On Time)</span>
                  </div>
                  <div className="w-full bg-slate-100 dark:bg-slate-800 h-3 rounded-full overflow-hidden">
                    <div className="bg-rose-500 h-full w-[80%] rounded-full" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    <span>July Cycle</span>
                    <span>31 Days (Delayed +3d)</span>
                  </div>
                  <div className="w-full bg-slate-100 dark:bg-slate-800 h-3 rounded-full overflow-hidden">
                    <div className="bg-amber-500 h-full w-[92%] rounded-full" />
                  </div>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 text-xs text-slate-600 dark:text-slate-400 flex items-center justify-between">
                <span>Calculated Baseline Average: <strong>28 Days</strong></span>
                <span className="text-rose-600 font-semibold">6 Logged Cycles</span>
              </div>
            </Card>
          </div>

          {/* Text Description */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold text-rose-600 dark:text-rose-400 uppercase tracking-widest">
              Cycle Tracking & Analysis
            </span>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Visualize trends & discover your baseline.
            </h2>

            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Every body is unique. LunaFlow helps you uncover pattern regularity, spot subtle shifts, and know exactly what to expect month after month.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <CheckCircle2 size={18} className="text-emerald-500 shrink-0 mt-0.5" />
                <p className="text-xs text-slate-700 dark:text-slate-200">
                  <strong>Expected vs Actual Comparison:</strong> Immediately compare your expected period start against actual logged dates.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 size={18} className="text-emerald-500 shrink-0 mt-0.5" />
                <p className="text-xs text-slate-700 dark:text-slate-200">
                  <strong>Flow & Symptom Mapping:</strong> Log cramps, fatigue, mood swings, and flow intensity to track symptom correlations.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 size={18} className="text-emerald-500 shrink-0 mt-0.5" />
                <p className="text-xs text-slate-700 dark:text-slate-200">
                  <strong>Regularity Scoring:</strong> Statistical variance analysis ranks your predictability score percentage.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <Link href="/analysis">
                <Button variant="primary" size="md" icon={<ArrowRight size={16} />}>
                  View Full Analytics Demo
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
