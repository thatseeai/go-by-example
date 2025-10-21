'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import type { TOCItem } from '@/types';
import { getProgress, toggleLessonComplete } from '@/utils/storage';

interface SidebarProps {
  items: TOCItem[];
  currentLessonId?: string;
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ items, currentLessonId, isOpen, onClose }: SidebarProps) {
  const [completedLessons, setCompletedLessons] = useState<Record<string, boolean>>({});
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const progress = getProgress();
    setCompletedLessons(progress.completed);
  }, []);

  const handleToggleComplete = (lessonId: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const newProgress = toggleLessonComplete(lessonId);
    setCompletedLessons(newProgress.completed);
  };

  const filteredItems = items.filter(item =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed lg:sticky top-0 left-0 h-screen w-80 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="p-4 border-b border-gray-200 dark:border-gray-800">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">목차</h2>
              <button
                onClick={onClose}
                className="lg:hidden p-2 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                aria-label="Close sidebar"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Search */}
            <input
              type="text"
              placeholder="레슨 검색..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
            />
          </div>

          {/* Lessons list */}
          <nav className="flex-1 overflow-y-auto p-4">
            <ul className="space-y-1">
              {filteredItems.map((item) => {
                const isActive = currentLessonId === item.id;
                const isCompleted = completedLessons[item.id];

                return (
                  <li key={item.id}>
                    <Link
                      href={`/lesson/${item.id}`}
                      onClick={onClose}
                      className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                        isActive
                          ? 'bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 font-semibold'
                          : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                      }`}
                    >
                      <button
                        onClick={(e) => handleToggleComplete(item.id, e)}
                        className="flex-shrink-0"
                        aria-label={`Mark ${item.title} as ${isCompleted ? 'incomplete' : 'complete'}`}
                      >
                        <div className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${
                          isCompleted
                            ? 'bg-primary-500 border-primary-500'
                            : 'border-gray-400 dark:border-gray-600'
                        }`}>
                          {isCompleted && (
                            <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          )}
                        </div>
                      </button>
                      <span className="flex-1 text-sm">{item.title}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Progress */}
          <div className="p-4 border-t border-gray-200 dark:border-gray-800">
            <div className="text-sm text-gray-600 dark:text-gray-400">
              진행률: {Object.values(completedLessons).filter(Boolean).length} / {items.length}
            </div>
            <div className="mt-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div
                className="bg-primary-500 h-2 rounded-full transition-all duration-300"
                style={{
                  width: `${(Object.values(completedLessons).filter(Boolean).length / items.length) * 100}%`,
                }}
              />
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
