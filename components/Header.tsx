'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { getTheme, setTheme, getLanguage, setLanguage } from '@/utils/storage';
import { getTranslations, type Language } from '@/lib/i18n';

interface HeaderProps {
  onMenuClick: () => void;
  onLanguageChange?: (language: Language) => void;
}

export default function Header({ onMenuClick, onLanguageChange }: HeaderProps) {
  const [currentTheme, setCurrentTheme] = useState<'light' | 'dark'>('light');
  const [currentLanguage, setCurrentLanguage] = useState<Language>('ko');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const theme = getTheme();
    const language = getLanguage();
    setCurrentTheme(theme);
    setCurrentLanguage(language);
    document.documentElement.classList.toggle('dark', theme === 'dark');
    document.documentElement.lang = language;
  }, []);

  const toggleTheme = () => {
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    setCurrentTheme(newTheme);
    setTheme(newTheme);
  };

  const toggleLanguage = () => {
    const newLanguage = currentLanguage === 'ko' ? 'en' : 'ko';
    setCurrentLanguage(newLanguage);
    setLanguage(newLanguage);
    onLanguageChange?.(newLanguage);
  };

  const t = getTranslations(currentLanguage);

  if (!mounted) {
    return null;
  }

  return (
    <header className="sticky top-0 z-30 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
      <div className="px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Left: Menu button + Logo */}
          <div className="flex items-center gap-4">
            <button
              onClick={onMenuClick}
              className="lg:hidden p-2 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">Go</span>
              </div>
              <div>
                <h1 className="text-lg font-bold text-gray-900 dark:text-white">
                  {t.title}
                </h1>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  {t.subtitle}
                </p>
              </div>
            </Link>
          </div>

          {/* Right: Language and Theme toggles */}
          <div className="flex items-center gap-2">
            <button
              onClick={toggleLanguage}
              className="p-2 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-sm font-medium"
              aria-label={t.toggleLanguage}
            >
              {currentLanguage === 'ko' ? 'EN' : '한국어'}
            </button>
            
            <button
              onClick={toggleTheme}
              className="p-2 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label={t.toggleTheme}
            >
            {currentTheme === 'light' ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
