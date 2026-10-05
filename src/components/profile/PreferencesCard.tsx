'use client';

import React from 'react';
import { Card } from '@/components/ui/Card';
import { useCycle } from '@/context/CycleContext';
import { Bell, ShieldCheck, Lock } from 'lucide-react';

export const PreferencesCard: React.FC = () => {
  const { userProfile, updateProfile } = useCycle();

  const toggleNotif = (key: keyof typeof userProfile.notifications) => {
    updateProfile({
      notifications: {
        ...userProfile.notifications,
        [key]: !userProfile.notifications[key],
      },
    });
  };

  return (
    <Card variant="default" className="space-y-4">
      <div className="flex items-center gap-2 border-b border-slate-100 dark:border-slate-800 pb-3">
        <Bell size={18} className="text-rose-500" />
        <h3 className="text-base font-semibold text-slate-900 dark:text-white">
          App Preferences & Privacy
        </h3>
      </div>

      <div className="space-y-3">
        {/* Period Reminder */}
        <div className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 dark:bg-slate-850 border border-slate-100 dark:border-slate-800">
          <div>
            <h4 className="text-xs font-semibold text-slate-800 dark:text-slate-100">
              Upcoming Period Reminders
            </h4>
            <p className="text-[11px] text-slate-500 dark:text-slate-400">
              Alert 2 days before predicted start
            </p>
          </div>
          <input
            type="checkbox"
            checked={userProfile.notifications.periodReminder}
            onChange={() => toggleNotif('periodReminder')}
            className="w-4 h-4 accent-rose-600 rounded cursor-pointer"
          />
        </div>

        {/* Ovulation Alert */}
        <div className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 dark:bg-slate-850 border border-slate-100 dark:border-slate-800">
          <div>
            <h4 className="text-xs font-semibold text-slate-800 dark:text-slate-100">
              Ovulation & Fertile Window Alerts
            </h4>
            <p className="text-[11px] text-slate-500 dark:text-slate-400">
              Notifications when entering peak fertile phase
            </p>
          </div>
          <input
            type="checkbox"
            checked={userProfile.notifications.ovulationAlert}
            onChange={() => toggleNotif('ovulationAlert')}
            className="w-4 h-4 accent-purple-600 rounded cursor-pointer"
          />
        </div>

        {/* Phase Tips */}
        <div className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 dark:bg-slate-850 border border-slate-100 dark:border-slate-800">
          <div>
            <h4 className="text-xs font-semibold text-slate-800 dark:text-slate-100">
              Phase Wellness & Energy Tips
            </h4>
            <p className="text-[11px] text-slate-500 dark:text-slate-400">
              Daily tailored lifestyle advice
            </p>
          </div>
          <input
            type="checkbox"
            checked={userProfile.notifications.phaseTips}
            onChange={() => toggleNotif('phaseTips')}
            className="w-4 h-4 accent-teal-600 rounded cursor-pointer"
          />
        </div>

        {/* Privacy Note */}
        <div className="p-3.5 rounded-2xl bg-emerald-50/70 dark:bg-emerald-950/30 border border-emerald-100 dark:border-emerald-900/40 flex items-start gap-2.5 text-xs text-emerald-900 dark:text-emerald-200">
          <Lock size={16} className="shrink-0 text-emerald-600 dark:text-emerald-400 mt-0.5" />
          <div>
            <span className="font-semibold block">100% Private Local Storage</span>
            <span className="text-[11px] text-emerald-800/80 dark:text-emerald-300">
              All data remains strictly on your device. We do not transmit or sell your intimate health data to any server.
            </span>
          </div>
        </div>
      </div>
    </Card>
  );
};
