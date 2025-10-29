'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import type { TOCItem } from '@/types';
import { fetchTOC } from '@/lib/client-markdown';
import { getLanguage } from '@/utils/storage';
import { getTranslations, type Language } from '@/lib/i18n';

export default function HomePage() {
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [tocItems, setTocItems] = useState<TOCItem[]>([]);
  const [currentLanguage, setCurrentLanguage] = useState<Language>('ko');

  useEffect(() => {
    const language = getLanguage();
    setCurrentLanguage(language);
    loadTOC(language);
  }, []);

  const loadTOC = async (language: Language) => {
    try {
      const data = await fetchTOC(language);
      setTocItems(data);
    } catch (error) {
      console.error('Failed to load TOC:', error);
    }
  };

  const handleLanguageChange = (language: Language) => {
    setCurrentLanguage(language);
    loadTOC(language);
  };

  const startLearning = () => {
    if (tocItems.length > 0) {
      router.push(`/lesson/${tocItems[0].id}`);
    }
  };

  const t = getTranslations(currentLanguage);

  return (
    <div className="min-h-screen flex flex-col">
      <Header 
        onMenuClick={() => setSidebarOpen(true)} 
        onLanguageChange={handleLanguageChange}
      />

      <div className="flex flex-1">
        <Sidebar
          items={tocItems}
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />

        <main className="flex-1 p-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center py-12">
              <div className="inline-block p-6 bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl mb-6">
                <span className="text-white font-bold text-6xl">Go</span>
              </div>

              <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
                {t.title}
              </h1>

              <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
                {t.subtitle}
              </p>

              <button
                onClick={startLearning}
                className="px-8 py-4 bg-primary-500 hover:bg-primary-600 text-white text-lg font-semibold rounded-lg transition-colors shadow-lg hover:shadow-xl"
              >
                {t.startLearning}
              </button>
            </div>

            <div className="mt-16 grid md:grid-cols-3 gap-8">
              <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {t.handsOnTitle}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {t.handsOnDescription}
                </p>
              </div>

              <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {t.systematicTitle}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {t.systematicDescription}
                </p>
              </div>

              <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {t.progressTitle}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {t.progressDescription}
                </p>
              </div>
            </div>

            <div className="mt-16 p-8 bg-gradient-to-r from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 rounded-lg">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                {t.learningContentTitle}
              </h2>
              <ul className="grid md:grid-cols-2 gap-4 text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <svg className="w-6 h-6 text-primary-600 dark:text-primary-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{t.basicSyntax}</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-6 h-6 text-primary-600 dark:text-primary-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{t.functionsAndMethods}</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-6 h-6 text-primary-600 dark:text-primary-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{t.interfacesAndStructs}</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-6 h-6 text-primary-600 dark:text-primary-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{t.concurrency}</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-6 h-6 text-primary-600 dark:text-primary-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{t.webServerAndAPI}</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-6 h-6 text-primary-600 dark:text-primary-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{t.databaseIntegration}</span>
                </li>
              </ul>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
