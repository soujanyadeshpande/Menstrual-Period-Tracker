import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'rose' | 'teal' | 'amber' | 'purple' | 'slate' | 'emerald' | 'danger';
  size?: 'sm' | 'md';
  icon?: React.ReactNode;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'slate',
  size = 'md',
  icon,
  className = '',
}) => {
  const variantStyles = {
    rose: 'bg-rose-100 text-rose-700 dark:bg-rose-950/60 dark:text-rose-300 border border-rose-200/60 dark:border-rose-900/50',
    teal: 'bg-teal-100 text-teal-800 dark:bg-teal-950/60 dark:text-teal-300 border border-teal-200/60 dark:border-teal-900/50',
    amber: 'bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300 border border-amber-200/60 dark:border-amber-900/50',
    purple: 'bg-purple-100 text-purple-800 dark:bg-purple-950/60 dark:text-purple-300 border border-purple-200/60 dark:border-purple-900/50',
    slate: 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700',
    emerald: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300 border border-emerald-200/60 dark:border-emerald-900/50',
    danger: 'bg-red-100 text-red-800 dark:bg-red-950/60 dark:text-red-300 border border-red-200/60 dark:border-red-900/50',
  };

  const sizeStyles = {
    sm: 'text-xs px-2 py-0.5 rounded-md gap-1',
    md: 'text-xs sm:text-sm px-2.5 py-1 rounded-full gap-1.5 font-medium',
  };

  return (
    <span
      className={`inline-flex items-center shrink-0 ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
    </span>
  );
};
