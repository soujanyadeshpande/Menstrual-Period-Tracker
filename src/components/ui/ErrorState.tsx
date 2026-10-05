import React from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';
import { Button } from './Button';

interface ErrorStateProps {
  message?: string;
  onRetry?: () => void;
}

export const ErrorState: React.FC<ErrorStateProps> = ({
  message = 'An unexpected error occurred while loading your cycle data.',
  onRetry,
}) => {
  return (
    <div className="flex flex-col items-center justify-center text-center p-8 border border-red-200 dark:border-red-900/50 rounded-3xl bg-red-50/50 dark:bg-red-950/20 my-4">
      <div className="w-12 h-12 rounded-2xl bg-red-100 dark:bg-red-950 text-red-600 dark:text-red-400 flex items-center justify-center mb-3">
        <AlertTriangle size={24} />
      </div>
      <h4 className="text-base font-semibold text-red-900 dark:text-red-200 mb-1">
        Unable to Load Data
      </h4>
      <p className="text-xs sm:text-sm text-red-700 dark:text-red-300 max-w-sm mb-4">
        {message}
      </p>
      {onRetry && (
        <Button onClick={onRetry} variant="outline" size="sm" icon={<RefreshCw size={14} />}>
          Try Again
        </Button>
      )}
    </div>
  );
};
