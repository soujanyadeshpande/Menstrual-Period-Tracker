'use client';

import React, { useState } from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { useCycle } from '@/context/CycleContext';
import { Database, Download, RefreshCw, Trash2 } from 'lucide-react';

export const DataManagementCard: React.FC = () => {
  const { cycles, userProfile, resetToDefaultData } = useCycle();

  const [confirmClear, setConfirmClear] = useState(false);

  const exportJSON = () => {
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify({ cycles, userProfile }, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', dataStr);
    downloadAnchor.setAttribute('download', `lunaflow_cycle_data_${new Date().toISOString().split('T')[0]}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  const handleClear = () => {
    resetToDefaultData();
    setConfirmClear(false);
  };

  return (
    <Card variant="default" className="space-y-4">
      <div className="flex items-center gap-2 border-b border-slate-100 dark:border-slate-800 pb-3">
        <Database size={18} className="text-rose-500" />
        <h3 className="text-base font-semibold text-slate-900 dark:text-white">
          Data Backup & Management
        </h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Export Data */}
        <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-850 border border-slate-100 dark:border-slate-800 space-y-2">
          <h4 className="text-xs font-semibold text-slate-800 dark:text-slate-100">
            Export Cycle Records
          </h4>
          <p className="text-[11px] text-slate-500 dark:text-slate-400">
            Download your full tracking logs and symptom history as JSON.
          </p>
          <Button
            onClick={exportJSON}
            variant="outline"
            size="sm"
            icon={<Download size={14} />}
            className="w-full"
          >
            Export JSON Data
          </Button>
        </div>

        {/* Reset / Load Demo Data */}
        <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-850 border border-slate-100 dark:border-slate-800 space-y-2">
          <h4 className="text-xs font-semibold text-slate-800 dark:text-slate-100">
            Restore Demo Data
          </h4>
          <p className="text-[11px] text-slate-500 dark:text-slate-400">
            Reset logs to realistic initial 6-month demo cycle history.
          </p>
          <Button
            onClick={resetToDefaultData}
            variant="outline"
            size="sm"
            icon={<RefreshCw size={14} />}
            className="w-full"
          >
            Reset to Demo Data
          </Button>
        </div>
      </div>
    </Card>
  );
};
