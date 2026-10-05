import React, { HTMLAttributes } from 'react';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: 'default' | 'flat' | 'bordered' | 'glass';
  className?: string;
}

export const Card: React.FC<CardProps> = ({
  children,
  variant = 'default',
  className = '',
  ...props
}) => {
  const variantStyles = {
    default: 'bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-xs hover:shadow-md transition-shadow duration-300',
    flat: 'bg-slate-50 dark:bg-slate-800/50',
    bordered: 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800',
    glass: 'glass-card dark:bg-slate-900/80 shadow-xs',
  };

  return (
    <div
      className={`rounded-2xl sm:rounded-3xl p-4 sm:p-6 ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};
