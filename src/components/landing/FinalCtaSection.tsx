import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Heart, Sparkles, ArrowRight } from 'lucide-react';

export const FinalCtaSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-rose-600 via-rose-500 to-purple-600 text-white relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
        <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md text-white flex items-center justify-center mx-auto shadow-lg">
          <Heart size={24} fill="currentColor" />
        </div>

        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
          Take control of your menstrual health today.
        </h2>

        <p className="text-base sm:text-lg text-rose-100 max-w-2xl mx-auto leading-relaxed">
          No sign up required. Instant interactive period tracking, delay analysis, and hormonal phase wellness right in your browser.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/dashboard">
            <Button
              variant="outline"
              size="lg"
              className="bg-white text-rose-600 hover:bg-rose-50 border-none font-bold shadow-lg w-full sm:w-auto"
              icon={<ArrowRight size={18} />}
            >
              Open Menstrual Tracker App
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
