'use client';

import React, { useState, useEffect } from 'react';
import { Modal } from '@/components/ui/Modal';
import { Button } from '@/components/ui/Button';
import { AVAILABLE_SYMPTOMS } from '@/data/mockData';
import { useCycle } from '@/context/CycleContext';
import { FlowIntensity } from '@/types/tracker';
import { Calendar, Heart, MessageSquare } from 'lucide-react';

export const LogPeriodModal: React.FC = () => {
  const { isLogModalOpen, closeLogModal, selectedDateForLog, addCycle } = useCycle();

  const todayStr = new Date().toISOString().split('T')[0];

  const [startDate, setStartDate] = useState(todayStr);
  const [endDate, setEndDate] = useState(todayStr);
  const [flowIntensity, setFlowIntensity] = useState<FlowIntensity>('Medium');
  const [symptoms, setSymptoms] = useState<string[]>(['Cramps']);
  const [mood, setMood] = useState<string>('Balanced');
  const [notes, setNotes] = useState<string>('');

  useEffect(() => {
    if (selectedDateForLog) {
      setStartDate(selectedDateForLog);
      // default 5 days duration
      const end = new Date(selectedDateForLog);
      end.setDate(end.getDate() + 4);
      setEndDate(end.toISOString().split('T')[0]);
    } else {
      setStartDate(todayStr);
      setEndDate(todayStr);
    }
  }, [selectedDateForLog, isLogModalOpen, todayStr]);

  const toggleSymptom = (label: string) => {
    setSymptoms((prev) =>
      prev.includes(label) ? prev.filter((s) => s !== label) : [...prev, label]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addCycle({
      startDate,
      endDate,
      flowIntensity,
      symptoms,
      mood,
      notes,
    });
    // Reset state
    setNotes('');
  };

  const moods = ['Calm', 'Balanced', 'Energetic', 'Sensitive', 'Tired', 'Anxious'];
  const flows: FlowIntensity[] = ['Spotting', 'Light', 'Medium', 'Heavy'];

  return (
    <Modal
      isOpen={isLogModalOpen}
      onClose={closeLogModal}
      title="Log Period Entry"
      subtitle="Record your cycle start date, bleeding duration, and symptoms"
      maxWidth="lg"
    >
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Date Selection */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1 flex items-center gap-1.5">
              <Calendar size={14} className="text-rose-500" />
              Period Start Date
            </label>
            <input
              type="date"
              value={startDate}
              onChange={(e) => {
                setStartDate(e.target.value);
                if (new Date(e.target.value) > new Date(endDate)) {
                  setEndDate(e.target.value);
                }
              }}
              required
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-rose-500"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1 flex items-center gap-1.5">
              <Calendar size={14} className="text-rose-500" />
              Period End Date
            </label>
            <input
              type="date"
              value={endDate}
              min={startDate}
              onChange={(e) => setEndDate(e.target.value)}
              required
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-rose-500"
            />
          </div>
        </div>

        {/* Flow Intensity */}
        <div>
          <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-2">
            Flow Intensity
          </label>
          <div className="grid grid-cols-4 gap-2">
            {flows.map((flow) => (
              <button
                key={flow}
                type="button"
                onClick={() => setFlowIntensity(flow)}
                className={`py-2 px-3 text-xs font-medium rounded-xl border transition-all ${
                  flowIntensity === flow
                    ? 'bg-rose-50 dark:bg-rose-950 border-rose-500 text-rose-700 dark:text-rose-300 font-semibold shadow-xs'
                    : 'bg-white dark:bg-slate-950 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:border-slate-300'
                }`}
              >
                {flow}
              </button>
            ))}
          </div>
        </div>

        {/* Symptoms Checklist */}
        <div>
          <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-2 flex items-center gap-1.5">
            <Heart size={14} className="text-rose-500" />
            Symptoms & Physical Signals
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 max-h-36 overflow-y-auto p-1 border border-slate-100 dark:border-slate-800 rounded-xl bg-slate-50/50 dark:bg-slate-950/40">
            {AVAILABLE_SYMPTOMS.map((sym) => {
              const isSelected = symptoms.includes(sym.label);
              return (
                <button
                  key={sym.id}
                  type="button"
                  onClick={() => toggleSymptom(sym.label)}
                  className={`flex items-center gap-1.5 p-2 rounded-lg text-xs text-left transition-all ${
                    isSelected
                      ? 'bg-rose-100 dark:bg-rose-900/60 text-rose-800 dark:text-rose-200 font-medium'
                      : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                >
                  <span>{sym.icon}</span>
                  <span className="truncate">{sym.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Mood Selection */}
        <div>
          <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-2">
            Primary Mood
          </label>
          <div className="flex flex-wrap gap-2">
            {moods.map((m) => (
              <button
                key={m}
                type="button"
                onClick={() => setMood(m)}
                className={`px-3 py-1.5 rounded-full text-xs transition-all ${
                  mood === m
                    ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 font-medium'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200'
                }`}
              >
                {m}
              </button>
            ))}
          </div>
        </div>

        {/* Notes */}
        <div>
          <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1 flex items-center gap-1.5">
            <MessageSquare size={14} className="text-slate-400" />
            Personal Notes (Optional)
          </label>
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Add details about pain level, energy, stress, or medications..."
            rows={2}
            className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white text-xs focus:outline-none focus:ring-2 focus:ring-rose-500"
          />
        </div>

        {/* Actions */}
        <div className="flex items-center justify-end gap-3 pt-3 border-t border-slate-100 dark:border-slate-800">
          <Button type="button" variant="outline" size="sm" onClick={closeLogModal}>
            Cancel
          </Button>
          <Button type="submit" variant="primary" size="sm">
            Save Entry
          </Button>
        </div>
      </form>
    </Modal>
  );
};
