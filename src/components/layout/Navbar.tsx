'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Heart, Calendar, BarChart3, User, Sparkles, PlusCircle } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { useCycle } from '@/context/CycleContext';

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const { openLogModal } = useCycle();

  const navItems = [
    { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboardIcon },
    { name: 'Tracker', href: '/tracker', icon: Calendar },
    { name: 'Analysis', href: '/analysis', icon: BarChart3 },
    { name: 'Profile', href: '/profile', icon: User },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-100 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-rose-500 to-rose-400 text-white flex items-center justify-center shadow-md shadow-rose-200 dark:shadow-none group-hover:scale-105 transition-transform">
            <Heart className="w-5 h-5 fill-current" />
          </div>
          <div>
            <span className="font-bold text-lg text-slate-900 dark:text-white tracking-tight flex items-center gap-1">
              LunaFlow
              <Sparkles className="w-3.5 h-3.5 text-rose-500" />
            </span>
            <span className="block text-[10px] text-slate-400 font-medium leading-none -mt-0.5">
              Menstrual Health
            </span>
          </div>
        </Link>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-100/70 dark:bg-slate-800/50 p-1.5 rounded-full border border-slate-200/50 dark:border-slate-800">
          <Link
            href="/"
            className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
              pathname === '/'
                ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-xs'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            Landing
          </Link>
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                  isActive
                    ? 'bg-white dark:bg-slate-900 text-rose-600 dark:text-rose-400 shadow-xs font-semibold'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Header Right Actions */}
        <div className="flex items-center gap-2">
          {pathname !== '/' && (
            <Button
              onClick={() => openLogModal()}
              variant="primary"
              size="sm"
              icon={<PlusCircle size={15} />}
              className="shadow-sm"
            >
              <span className="hidden sm:inline">Log Period</span>
              <span className="sm:hidden">Log</span>
            </Button>
          )}

          {pathname === '/' && (
            <Link href="/dashboard">
              <Button variant="primary" size="sm">
                Open App
              </Button>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

function LayoutDashboardIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="7" height="9" x="3" y="3" rx="1" />
      <rect width="7" height="5" x="14" y="3" rx="1" />
      <rect width="7" height="9" x="14" y="12" rx="1" />
      <rect width="7" height="5" x="3" y="16" rx="1" />
    </svg>
  );
}
