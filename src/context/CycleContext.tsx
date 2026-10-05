'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { CycleEntry, UserProfile, PhaseDetails, CycleStatus } from '@/types/tracker';
import { INITIAL_CYCLES, INITIAL_USER_PROFILE, PHASE_DETAILS_MAP } from '@/data/mockData';

interface CycleContextType {
  cycles: CycleEntry[];
  userProfile: UserProfile;
  isLoaded: boolean;
  isLogModalOpen: boolean;
  selectedDateForLog: string | null;
  
  // Computed Properties
  currentPhase: PhaseDetails;
  cycleDay: number;
  nextPeriodDate: string;
  daysUntilNextPeriod: number;
  currentStatus: CycleStatus;
  delayDaysCount: number;
  regularityScore: number;
  avgCycleLength: number;
  avgPeriodDuration: number;
  
  // Actions
  addCycle: (newEntry: {
    startDate: string;
    endDate: string;
    flowIntensity: CycleEntry['flowIntensity'];
    symptoms: string[];
    mood: string;
    notes?: string;
  }) => void;
  updateCycle: (updatedEntry: CycleEntry) => void;
  deleteCycle: (id: string) => void;
  updateProfile: (updatedFields: Partial<UserProfile>) => void;
  resetToDefaultData: () => void;
  openLogModal: (dateStr?: string) => void;
  closeLogModal: () => void;
}

const CycleContext = createContext<CycleContextType | undefined>(undefined);

const LOCAL_STORAGE_CYCLES_KEY = 'mpt_cycles_v1';
const LOCAL_STORAGE_PROFILE_KEY = 'mpt_profile_v1';

export const CycleProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cycles, setCycles] = useState<CycleEntry[]>(INITIAL_CYCLES);
  const [userProfile, setUserProfile] = useState<UserProfile>(INITIAL_USER_PROFILE);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isLogModalOpen, setIsLogModalOpen] = useState(false);
  const [selectedDateForLog, setSelectedDateForLog] = useState<string | null>(null);

  // Load from LocalStorage on mount
  useEffect(() => {
    try {
      const savedCycles = localStorage.getItem(LOCAL_STORAGE_CYCLES_KEY);
      const savedProfile = localStorage.getItem(LOCAL_STORAGE_PROFILE_KEY);
      
      if (savedCycles) {
        const parsed = JSON.parse(savedCycles);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setCycles(parsed);
        }
      }
      if (savedProfile) {
        const parsedProf = JSON.parse(savedProfile);
        if (parsedProf && typeof parsedProf === 'object') {
          setUserProfile((prev) => ({ ...prev, ...parsedProf }));
        }
      }
    } catch (e) {
      console.error('Error restoring localStorage data', e);
    } finally {
      setIsLoaded(true);
    }
  }, []);

  // Save to LocalStorage when changed
  useEffect(() => {
    if (isLoaded) {
      try {
        localStorage.setItem(LOCAL_STORAGE_CYCLES_KEY, JSON.stringify(cycles));
        localStorage.setItem(LOCAL_STORAGE_PROFILE_KEY, JSON.stringify(userProfile));
      } catch (e) {
        console.error('Error saving to localStorage', e);
      }
    }
  }, [cycles, userProfile, isLoaded]);

  // Sorted cycles by start date descending (newest first)
  const sortedCycles = [...cycles].sort((a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime());
  const lastCycle = sortedCycles[0];

  // Helper date calculations
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const lastStart = lastCycle ? new Date(lastCycle.startDate) : new Date();
  lastStart.setHours(0, 0, 0, 0);

  const diffDaysFromLastStart = Math.floor((today.getTime() - lastStart.getTime()) / (1000 * 60 * 60 * 24));
  const cycleDay = Math.max(1, diffDaysFromLastStart + 1);

  // Average Cycle Length computation
  const avgCycleLength = userProfile.averageCycleLength || 28;
  const avgPeriodDuration = userProfile.averagePeriodDuration || 5;

  // Next expected period date
  const nextPeriodTime = lastStart.getTime() + avgCycleLength * 24 * 60 * 60 * 1000;
  const nextPeriodDateObj = new Date(nextPeriodTime);
  const nextPeriodDate = nextPeriodDateObj.toISOString().split('T')[0];

  const daysUntilNextPeriod = Math.round((nextPeriodTime - today.getTime()) / (1000 * 60 * 60 * 24));

  // Determine current status & delay
  let currentStatus: CycleStatus = 'on_time';
  let delayDaysCount = 0;

  if (daysUntilNextPeriod < -1) {
    currentStatus = 'delayed';
    delayDaysCount = Math.abs(daysUntilNextPeriod);
  } else if (lastCycle && lastCycle.status === 'preponed') {
    currentStatus = 'preponed';
    delayDaysCount = Math.abs(lastCycle.delayDays);
  }

  // Phase Determination
  let phaseName: 'Menstrual' | 'Follicular' | 'Ovulation' | 'Luteal' = 'Luteal';
  if (cycleDay <= avgPeriodDuration) {
    phaseName = 'Menstrual';
  } else if (cycleDay <= avgCycleLength - userProfile.lutealPhaseLength - 2) {
    phaseName = 'Follicular';
  } else if (cycleDay <= avgCycleLength - userProfile.lutealPhaseLength + 2) {
    phaseName = 'Ovulation';
  } else {
    phaseName = 'Luteal';
  }

  const currentPhase = PHASE_DETAILS_MAP[phaseName] || PHASE_DETAILS_MAP.Luteal;

  // Regularity score calculation based on variance across logged cycles
  const regularityScore = React.useMemo(() => {
    if (sortedCycles.length < 2) return 90;
    const lengths = sortedCycles.map((c) => c.cycleLength);
    const mean = lengths.reduce((acc, l) => acc + l, 0) / lengths.length;
    const variance = lengths.reduce((acc, l) => acc + Math.pow(l - mean, 2), 0) / lengths.length;
    const stdDev = Math.sqrt(variance);
    // 0 stdDev -> 100% score; stdDev of 5 -> 75% score
    const score = Math.max(65, Math.min(99, Math.round(100 - stdDev * 5)));
    return score;
  }, [sortedCycles]);

  // Actions
  const addCycle = (newEntry: {
    startDate: string;
    endDate: string;
    flowIntensity: CycleEntry['flowIntensity'];
    symptoms: string[];
    mood: string;
    notes?: string;
  }) => {
    const startObj = new Date(newEntry.startDate);
    const endObj = new Date(newEntry.endDate);
    const periodDuration = Math.max(1, Math.round((endObj.getTime() - startObj.getTime()) / (1000 * 60 * 60 * 24)) + 1);

    // Calculate delay relative to expected date
    let status: CycleStatus = 'on_time';
    let delayDays = 0;
    
    if (lastCycle) {
      const expectedStart = new Date(lastCycle.startDate);
      expectedStart.setDate(expectedStart.getDate() + avgCycleLength);
      const diffMs = startObj.getTime() - expectedStart.getTime();
      const diffDays = Math.round(diffMs / (1000 * 60 * 60 * 24));
      
      if (diffDays >= 2) {
        status = 'delayed';
        delayDays = diffDays;
      } else if (diffDays <= -2) {
        status = 'preponed';
        delayDays = diffDays;
      }
    }

    const createdEntry: CycleEntry = {
      id: `cycle-${Date.now()}`,
      startDate: newEntry.startDate,
      endDate: newEntry.endDate,
      cycleLength: avgCycleLength, // will adjust on future logs
      periodDuration,
      status,
      delayDays,
      flowIntensity: newEntry.flowIntensity,
      symptoms: newEntry.symptoms,
      mood: newEntry.mood,
      notes: newEntry.notes,
    };

    setCycles((prev) => [createdEntry, ...prev]);
    setIsLogModalOpen(false);
  };

  const updateCycle = (updatedEntry: CycleEntry) => {
    setCycles((prev) => prev.map((c) => (c.id === updatedEntry.id ? updatedEntry : c)));
  };

  const deleteCycle = (id: string) => {
    setCycles((prev) => prev.filter((c) => c.id !== id));
  };

  const updateProfile = (updatedFields: Partial<UserProfile>) => {
    setUserProfile((prev) => ({ ...prev, ...updatedFields }));
  };

  const resetToDefaultData = () => {
    setCycles(INITIAL_CYCLES);
    setUserProfile(INITIAL_USER_PROFILE);
    localStorage.removeItem(LOCAL_STORAGE_CYCLES_KEY);
    localStorage.removeItem(LOCAL_STORAGE_PROFILE_KEY);
  };

  const openLogModal = (dateStr?: string) => {
    if (dateStr) setSelectedDateForLog(dateStr);
    setIsLogModalOpen(true);
  };

  const closeLogModal = () => {
    setIsLogModalOpen(false);
    setSelectedDateForLog(null);
  };

  return (
    <CycleContext.Provider
      value={{
        cycles: sortedCycles,
        userProfile,
        isLoaded,
        isLogModalOpen,
        selectedDateForLog,
        currentPhase,
        cycleDay,
        nextPeriodDate,
        daysUntilNextPeriod,
        currentStatus,
        delayDaysCount,
        regularityScore,
        avgCycleLength,
        avgPeriodDuration,
        addCycle,
        updateCycle,
        deleteCycle,
        updateProfile,
        resetToDefaultData,
        openLogModal,
        closeLogModal,
      }}
    >
      {children}
    </CycleContext.Provider>
  );
};

export const useCycle = () => {
  const context = useContext(CycleContext);
  if (!context) {
    throw new Error('useCycle must be used within a CycleProvider');
  }
  return context;
};
