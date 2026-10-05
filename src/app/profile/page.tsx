'use client';

import React from 'react';
import { useCycle } from '@/context/CycleContext';
import { SettingsForm } from '@/components/profile/SettingsForm';
import { PreferencesCard } from '@/components/profile/PreferencesCard';
import { DataManagementCard } from '@/components/profile/DataManagementCard';
import { LoadingSkeleton } from '@/components/ui/LoadingSkeleton';
import { User } from 'lucide-react';

export default function ProfilePage() {
  const { isLoaded, userProfile } = useCycle();

  if (!isLoaded) {
    return <LoadingSkeleton />;
  }

  return (
    <div className="space-y-6 animate-fade-in max-w-4xl mx-auto">
      {/* Header */}
      <div className="border-b border-slate-200/80 dark:border-slate-800 pb-4">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight flex items-center gap-2">
          Profile & Preferences <User size={24} className="text-rose-500" />
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
          Customize baseline cycle parameters, notification alerts, and data management.
        </p>
      </div>

      {/* 1. User Profile & Cycle Parameters */}
      <SettingsForm />

      {/* 2. Notifications & Privacy Preferences */}
      <PreferencesCard />

      {/* 3. Data Export & Demo Reset */}
      <DataManagementCard />
    </div>
  );
}
