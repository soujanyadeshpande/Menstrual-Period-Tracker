import React from 'react';
import { Lock, Zap, Heart, Sparkles, Check, X } from 'lucide-react';

export const WhyUsSection: React.FC = () => {
  const comparison = [
    { feature: 'Data Privacy & Local Storage', lunaflow: true, genericApps: false },
    { feature: 'Automatic Delay / Preponement Detection', lunaflow: true, genericApps: false },
    { feature: 'Hormonal Phase Lifestyle Tips', lunaflow: true, genericApps: false },
    { feature: 'No Account Creation Required', lunaflow: true, genericApps: false },
    { feature: 'Clean, Ads-Free Minimal Healthcare UI', lunaflow: true, genericApps: false },
    { feature: 'Interactive Recharts Analytics', lunaflow: true, genericApps: true },
  ];

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold text-rose-600 dark:text-rose-400 uppercase tracking-widest">
            Why Choose LunaFlow
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Built differently for your peace of mind.
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Compare LunaFlow against cluttered commercial period trackers.
          </p>
        </div>

        <div className="max-w-3xl mx-auto overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-800">
                <th className="py-4 px-6 text-slate-700 dark:text-slate-200 font-bold">Feature / Standard</th>
                <th className="py-4 px-6 text-center text-rose-600 dark:text-rose-400 font-bold bg-rose-50/50 dark:bg-rose-950/40">
                  LunaFlow
                </th>
                <th className="py-4 px-6 text-center text-slate-400 font-semibold">Other Apps</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {comparison.map((item) => (
                <tr key={item.feature} className="hover:bg-slate-50/50 dark:hover:bg-slate-850">
                  <td className="py-3.5 px-6 font-medium text-slate-800 dark:text-slate-200">
                    {item.feature}
                  </td>
                  <td className="py-3.5 px-6 text-center bg-rose-50/20 dark:bg-rose-950/20">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400">
                      <Check size={14} />
                    </span>
                  </td>
                  <td className="py-3.5 px-6 text-center">
                    {item.genericApps ? (
                      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500">
                        <Check size={14} />
                      </span>
                    ) : (
                      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-red-100 dark:bg-red-950 text-red-500">
                        <X size={14} />
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
