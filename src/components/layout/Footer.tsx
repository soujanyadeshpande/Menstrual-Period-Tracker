import React from 'react';
import Link from 'next/link';
import { Heart, ShieldCheck, Lock, Sparkles } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800 pt-12 pb-24 md:pb-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="md:col-span-1 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-rose-600 text-white flex items-center justify-center">
                <Heart size={18} fill="currentColor" />
              </div>
              <span className="font-bold text-lg text-white tracking-tight flex items-center gap-1">
                LunaFlow
                <Sparkles size={14} className="text-rose-400" />
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Empowering individuals with accurate menstrual tracking, hormonal phase analysis, and privacy-first wellness insights.
            </p>
            <div className="flex items-center gap-2 text-xs text-emerald-400 font-medium pt-1">
              <Lock size={13} />
              <span>100% On-Device Browser Storage</span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-3">
              Application Pages
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/" className="hover:text-rose-400 transition-colors">
                  Home / Landing Page
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="hover:text-rose-400 transition-colors">
                  Dashboard Overview
                </Link>
              </li>
              <li>
                <Link href="/tracker" className="hover:text-rose-400 transition-colors">
                  Interactive Cycle Tracker
                </Link>
              </li>
              <li>
                <Link href="/analysis" className="hover:text-rose-400 transition-colors">
                  Analytics & Trend Insights
                </Link>
              </li>
              <li>
                <Link href="/profile" className="hover:text-rose-400 transition-colors">
                  Settings & Preferences
                </Link>
              </li>
            </ul>
          </div>

          {/* Key Features */}
          <div>
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-3">
              Core Capabilities
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>Phase Prediction (Menstrual, Follicular, Ovulation, Luteal)</li>
              <li>Delay & Preponement Detection</li>
              <li>Interactive Calendar Logging</li>
              <li>Regularity Trend Analysis</li>
              <li>Phase Nutrition & Exercise Tips</li>
            </ul>
          </div>

          {/* Health Disclaimer */}
          <div className="bg-slate-800/60 p-4 rounded-2xl border border-slate-700/60">
            <div className="flex items-center gap-1.5 text-xs font-semibold text-amber-400 mb-1.5">
              <ShieldCheck size={16} />
              <span>Medical Disclaimer</span>
            </div>
            <p className="text-[11px] text-slate-400 leading-relaxed">
              LunaFlow predictions and cycle insights are for educational and tracking purposes only. Content is not medical advice or formal clinical diagnosis.
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} LunaFlow Menstrual Period Tracker. All rights reserved.</p>
          <div className="flex items-center gap-4 text-xs">
            <span>Mobile First UI</span>
            <span>•</span>
            <span>Minimal Healthcare Aesthetic</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
