'use client';

import { useState, useEffect, useRef } from 'react';
import { useParams } from 'next/navigation';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import LessonContent from '@/components/LessonContent';
import type { TOCItem, LessonContent as LessonContentType } from '@/types';
import { fetchTOC, fetchLessonContent } from '@/lib/client-markdown';
import { getLanguage } from '@/utils/storage';
import { getTranslations, type Language } from '@/lib/i18n';

export default function LessonPage() {
  const params = useParams();
  const lessonId = params.id as string;

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [tocItems, setTocItems] = useState<TOCItem[]>([]);
  const [lessonContent, setLessonContent] = useState<LessonContentType | null>(null);
  const [loading, setLoading] = useState(true);
  const [currentLanguage, setCurrentLanguage] = useState<Language>('ko');
  const fetching = useRef(false);

  useEffect(() => {
    const language = getLanguage();
    setCurrentLanguage(language);
    loadData(language);
  }, [lessonId]);

  const loadData = async (language: Language) => {
    if (fetching.current) return;
    fetching.current = true;

    try {
      setLoading(true);

      // Load TOC
      const tocData = await fetchTOC(language);
      setTocItems(tocData);

      // Load lesson content
      const lessonData = await fetchLessonContent(lessonId, language);
      setLessonContent(lessonData);
    } catch (error) {
      console.error('Error loading data:', error);
    } finally {
      setLoading(false);
      fetching.current = false;
    }
  };

  const handleLanguageChange = (language: Language) => {
    setCurrentLanguage(language);
    loadData(language);
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
          currentLessonId={lessonId}
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />

        <main className="flex-1 p-8 lg:pl-8">
          {loading ? (
            <div className="flex items-center justify-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500"></div>
            </div>
          ) : lessonContent ? (
            <LessonContent
              content={lessonContent.content}
              title={lessonContent.title}
              lessonId={lessonId}
            />
          ) : (
            <div className="text-center py-16">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {t.errorLoading}
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                {currentLanguage === 'ko' 
                  ? '요청하신 레슨을 찾을 수 없습니다.' 
                  : 'The requested lesson could not be found.'}
              </p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
