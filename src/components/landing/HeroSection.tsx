'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Sparkles, Calendar, Heart, ShieldCheck, ArrowRight, Activity, Clock } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-32 gradient-hero">
      {/* Decorative ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-rose-300/30 to-teal-200/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Hero Text Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-100/80 dark:bg-rose-950/60 border border-rose-200/60 dark:border-rose-900/50 text-rose-700 dark:text-rose-300 text-xs font-semibold shadow-xs">
              <Sparkles size={14} className="text-rose-500 animate-pulse-subtle" />
              <span>Smart Menstrual Health & Phase Intelligence</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.15]">
              Track your cycle with{' '}
              <span className="bg-gradient-to-r from-rose-600 via-rose-500 to-purple-600 bg-clip-text text-transparent">
                clarity, privacy,
              </span>{' '}
              and peace of mind.
            </h1>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              LunaFlow delivers accurate period predictions, phase-based wellness insights, and delay detection—100% stored on your device with no login required.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <Link href="/dashboard" className="w-full sm:w-auto">
                <Button variant="primary" size="lg" icon={<ArrowRight size={18} />} className="w-full">
                  Start Tracking Now
                </Button>
              </Link>
              <a href="#how-it-works" className="w-full sm:w-auto">
                <Button variant="outline" size="lg" className="w-full">
                  Explore Features
                </Button>
              </a>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-slate-500 dark:text-slate-400 pt-4">
              <div className="flex items-center gap-1.5">
                <ShieldCheck size={16} className="text-emerald-500" />
                <span>100% On-Device Storage</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Heart size={16} className="text-rose-500" />
                <span>Informational Guidance</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Activity size={16} className="text-purple-500" />
                <span>Delay & Preponement Alerts</span>
              </div>
            </div>
          </div>

          {/* Hero Visual Mockup Preview */}
          <div className="lg:col-span-5 relative">
            <Card variant="default" className="shadow-2xl border-slate-200/80 dark:border-slate-800 p-6 space-y-5 backdrop-blur-xl relative z-10">
              <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-xl bg-rose-500 text-white flex items-center justify-center font-bold">
                    <Heart size={16} fill="currentColor" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white">Active Cycle Phase</h4>
                    <span className="text-[10px] text-slate-400">Predicted for Today</span>
                  </div>
                </div>
                <Badge variant="emerald" icon={<Clock size={12} />}>
                  On Time
                </Badge>
              </div>

              <div className="p-4 rounded-2xl bg-rose-50/70 dark:bg-rose-950/40 border border-rose-100 dark:border-rose-900/40 space-y-2">
                <div className="flex items-center justify-between text-xs font-semibold text-rose-800 dark:text-rose-200">
                  <span>Luteal Phase (Day 22)</span>
                  <span>7 Days to Period</span>
                </div>
                <div className="w-full bg-rose-200/80 dark:bg-rose-900/60 h-2 rounded-full overflow-hidden">
                  <div className="bg-rose-600 h-full w-[78%] rounded-full" />
                </div>
                <p className="text-[11px] text-rose-700 dark:text-rose-300 pt-1 leading-relaxed">
                  Progesterone peaks naturally. Energy is tapering—focus on warm meals, light strength, and restful sleep.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800">
                  <span className="text-[10px] text-slate-400 block uppercase">Next Period</span>
                  <strong className="text-slate-900 dark:text-white font-bold text-sm">Oct 13, 2026</strong>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800">
                  <span className="text-[10px] text-slate-400 block uppercase">Regularity</span>
                  <strong className="text-emerald-600 dark:text-emerald-400 font-bold text-sm">94% Regular</strong>
                </div>
              </div>

              <div className="pt-2 text-center">
                <Link href="/dashboard">
                  <Button variant="secondary" size="sm" className="w-full">
                    Explore Interactive Dashboard
                  </Button>
                </Link>
              </div>
            </Card>

            {/* Decorative Floating Element */}
            <div className="absolute -bottom-6 -left-6 bg-white dark:bg-slate-900 p-4 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-800 flex items-center gap-3 z-20">
              <div className="p-2.5 rounded-xl bg-teal-100 dark:bg-teal-950 text-teal-600">
                <Calendar size={20} />
              </div>
              <div className="text-xs">
                <span className="font-semibold text-slate-800 dark:text-slate-100 block">6 Months Data</span>
                <span className="text-[10px] text-slate-400">Pre-loaded demo history</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
