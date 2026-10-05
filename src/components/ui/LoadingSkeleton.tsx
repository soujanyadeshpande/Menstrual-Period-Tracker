import React from 'react';

export const LoadingSkeleton: React.FC = () => {
  return (
    <div className="w-full space-y-6 animate-pulse p-4">
      <div className="h-8 bg-slate-200 dark:bg-slate-800 rounded-xl w-1/3"></div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="h-44 bg-slate-200 dark:bg-slate-800 rounded-3xl col-span-2"></div>
        <div className="h-44 bg-slate-200 dark:bg-slate-800 rounded-3xl"></div>
      </div>
      <div className="h-64 bg-slate-200 dark:bg-slate-800 rounded-3xl w-full"></div>
    </div>
  );
};
