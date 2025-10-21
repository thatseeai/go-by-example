'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import LessonContent from '@/components/LessonContent';
import type { TOCItem, LessonContent as LessonContentType } from '@/types';
import { fetchTOC, fetchLessonContent } from '@/lib/client-markdown';


export default function LessonPage() {
  const params = useParams();
  const lessonId = params.id as string;

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [tocItems, setTocItems] = useState<TOCItem[]>([]);
  const [lessonContent, setLessonContent] = useState<LessonContentType | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        setLoading(true);

        // Load TOC
        const tocData = await fetchTOC();
        setTocItems(tocData);

        // Load lesson content
        const lessonData = await fetchLessonContent(lessonId);
        setLessonContent(lessonData);
      } catch (error) {
        console.error('Error loading data:', error);
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, [lessonId]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header onMenuClick={() => setSidebarOpen(true)} />

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
                레슨을 찾을 수 없습니다
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                요청하신 레슨이 존재하지 않습니다.
              </p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
