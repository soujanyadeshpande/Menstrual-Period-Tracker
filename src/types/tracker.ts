export type CycleStatus = 'on_time' | 'delayed' | 'preponed';

export type FlowIntensity = 'Light' | 'Medium' | 'Heavy' | 'Spotting';

export type PhaseType = 'Menstrual' | 'Follicular' | 'Ovulation' | 'Luteal';

export interface CycleEntry {
  id: string;
  startDate: string; // YYYY-MM-DD
  endDate: string;   // YYYY-MM-DD
  cycleLength: number; // Days between this start and next start
  periodDuration: number; // Bleeding days
  status: CycleStatus;
  delayDays: number; // Positive if delayed, negative if preponed, 0 if on time
  flowIntensity: FlowIntensity;
  symptoms: string[];
  mood: string;
  notes?: string;
}

export interface UserProfile {
  name: string;
  email: string;
  avatar: string;
  averageCycleLength: number; // e.g. 28
  averagePeriodDuration: number; // e.g. 5
  lutealPhaseLength: number; // e.g. 14
  notifications: {
    periodReminder: boolean;
    ovulationAlert: boolean;
    phaseTips: boolean;
    reminderDaysBefore: number;
  };
  privacy: {
    saveDataLocally: boolean;
    anonymousUsage: boolean;
  };
}

export interface PhaseRecommendation {
  nutrition: string;
  exercise: string;
  selfCare: string;
  hormoneInsight: string;
}

export interface PhaseDetails {
  name: PhaseType;
  dayStart: number;
  dayEnd: number;
  title: string;
  subtitle: string;
  description: string;
  energyLevel: 'Low' | 'Moderate' | 'Peak' | 'Waning';
  recommendations: PhaseRecommendation;
  color: string;
  badgeBg: string;
  badgeText: string;
}

export interface SymptomOption {
  id: string;
  label: string;
  icon: string;
  category: 'physical' | 'emotional' | 'energy';
}
