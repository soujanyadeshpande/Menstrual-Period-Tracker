import React from 'react';
import { HeroSection } from '@/components/landing/HeroSection';
import { HowItWorksSection } from '@/components/landing/HowItWorksSection';
import { FeaturesSection } from '@/components/landing/FeaturesSection';
import { TrackingPreviewSection } from '@/components/landing/TrackingPreviewSection';
import { InsightsSection } from '@/components/landing/InsightsSection';
import { WhyUsSection } from '@/components/landing/WhyUsSection';
import { FaqSection } from '@/components/landing/FaqSection';
import { FinalCtaSection } from '@/components/landing/FinalCtaSection';

export default function LandingPage() {
  return (
    <div className="-mx-4 sm:-mx-6 lg:-mx-8 -my-6 sm:-my-8 space-y-0">
      <HeroSection />
      <HowItWorksSection />
      <FeaturesSection />
      <TrackingPreviewSection />
      <InsightsSection />
      <WhyUsSection />
      <FaqSection />
      <FinalCtaSection />
    </div>
  );
}
