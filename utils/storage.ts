'use client';

import type { Progress } from '@/types';

const PROGRESS_KEY = 'go-by-example-progress';
const THEME_KEY = 'go-by-example-theme';

export function getProgress(): Progress {
  if (typeof window === 'undefined') {
    return { completed: {} };
  }

  try {
    const stored = localStorage.getItem(PROGRESS_KEY);
    if (stored) {
      return JSON.parse(stored);
    }
  } catch (error) {
    console.error('Error loading progress:', error);
  }

  return { completed: {} };
}

export function saveProgress(progress: Progress): void {
  if (typeof window === 'undefined') return;

  try {
    localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress));
  } catch (error) {
    console.error('Error saving progress:', error);
  }
}

export function toggleLessonComplete(lessonId: string): Progress {
  const progress = getProgress();
  progress.completed[lessonId] = !progress.completed[lessonId];
  saveProgress(progress);
  return progress;
}

export function isLessonComplete(lessonId: string): boolean {
  const progress = getProgress();
  return progress.completed[lessonId] || false;
}

export function getTheme(): 'light' | 'dark' {
  if (typeof window === 'undefined') {
    return 'light';
  }

  try {
    const stored = localStorage.getItem(THEME_KEY);
    if (stored === 'dark' || stored === 'light') {
      return stored;
    }
  } catch (error) {
    console.error('Error loading theme:', error);
  }

  return 'light';
}

export function setTheme(theme: 'light' | 'dark'): void {
  if (typeof window === 'undefined') return;

  try {
    localStorage.setItem(THEME_KEY, theme);
    document.documentElement.classList.toggle('dark', theme === 'dark');
  } catch (error) {
    console.error('Error saving theme:', error);
  }
}
