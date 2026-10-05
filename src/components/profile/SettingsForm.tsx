'use client';

import React, { useState } from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { useCycle } from '@/context/CycleContext';
import { User, Sliders, CheckCircle2 } from 'lucide-react';

export const SettingsForm: React.FC = () => {
  const { userProfile, updateProfile } = useCycle();

  const [name, setName] = useState(userProfile.name);
  const [cycleLength, setCycleLength] = useState(userProfile.averageCycleLength);
  const [periodDuration, setPeriodDuration] = useState(userProfile.averagePeriodDuration);
  const [lutealLength, setLutealLength] = useState(userProfile.lutealPhaseLength);
  const [savedSuccess, setSavedSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateProfile({
      name,
      averageCycleLength: Number(cycleLength),
      averagePeriodDuration: Number(periodDuration),
      lutealPhaseLength: Number(lutealLength),
    });
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 3000);
  };

  return (
    <Card variant="default" className="space-y-4">
      <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
        <div className="flex items-center gap-2">
          <User size={18} className="text-rose-500" />
          <h3 className="text-base font-semibold text-slate-900 dark:text-white">
            Cycle Tracking Parameters
          </h3>
        </div>
        {savedSuccess && (
          <span className="text-xs text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1 animate-fade-in">
            <CheckCircle2 size={14} /> Saved Successfully
          </span>
        )}
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name */}
        <div>
          <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
            Display Name
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-rose-500"
          />
        </div>

        {/* Cycle Parameters Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1 flex items-center gap-1">
              <Sliders size={13} className="text-rose-500" />
              Avg Cycle (Days)
            </label>
            <input
              type="number"
              min={20}
              max={45}
              value={cycleLength}
              onChange={(e) => setCycleLength(Number(e.target.value))}
              required
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-rose-500"
            />
            <span className="text-[10px] text-slate-400 mt-1 block">Default: 28 days</span>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1 flex items-center gap-1">
              <Sliders size={13} className="text-teal-500" />
              Period Duration (Days)
            </label>
            <input
              type="number"
              min={2}
              max={10}
              value={periodDuration}
              onChange={(e) => setPeriodDuration(Number(e.target.value))}
              required
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-rose-500"
            />
            <span className="text-[10px] text-slate-400 mt-1 block">Default: 5 days</span>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1 flex items-center gap-1">
              <Sliders size={13} className="text-purple-500" />
              Luteal Phase (Days)
            </label>
            <input
              type="number"
              min={10}
              max={16}
              value={lutealLength}
              onChange={(e) => setLutealLength(Number(e.target.value))}
              required
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-rose-500"
            />
            <span className="text-[10px] text-slate-400 mt-1 block">Standard: 14 days</span>
          </div>
        </div>

        <div className="flex justify-end pt-2">
          <Button type="submit" variant="primary" size="sm">
            Save Preferences
          </Button>
        </div>
      </form>
    </Card>
  );
};
