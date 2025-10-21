'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import type { TOCItem } from '@/types';

export default function HomePage() {
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [tocItems, setTocItems] = useState<TOCItem[]>([]);

  useEffect(() => {
    async function loadTOC() {
      try {
        const response = await fetch('/api/toc');
        const data = await response.json();
        setTocItems(data);
      } catch (error) {
        console.error('Failed to load TOC:', error);
      }
    }
    loadTOC();
  }, []);

  const startLearning = () => {
    if (tocItems.length > 0) {
      router.push(`/lesson/${tocItems[0].id}`);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header onMenuClick={() => setSidebarOpen(true)} />

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
                Go 예제로 배우기
              </h1>

              <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
                실습 중심의 Go 언어 학습 서비스
              </p>

              <button
                onClick={startLearning}
                className="px-8 py-4 bg-primary-500 hover:bg-primary-600 text-white text-lg font-semibold rounded-lg transition-colors shadow-lg hover:shadow-xl"
              >
                학습 시작하기
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
                  실습 중심
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  모든 레슨에 실행 가능한 예제 코드와 연습 문제를 제공합니다.
                </p>
              </div>

              <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  체계적인 학습
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  기초부터 고급까지 단계별로 구성된 15개의 레슨을 제공합니다.
                </p>
              </div>

              <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  진행률 추적
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  학습 진행 상황을 추적하고 완료한 레슨을 체크할 수 있습니다.
                </p>
              </div>
            </div>

            <div className="mt-16 p-8 bg-gradient-to-r from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 rounded-lg">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                학습 내용
              </h2>
              <ul className="grid md:grid-cols-2 gap-4 text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <svg className="w-6 h-6 text-primary-600 dark:text-primary-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>기본 문법과 타입 시스템</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-6 h-6 text-primary-600 dark:text-primary-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>함수와 메서드</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-6 h-6 text-primary-600 dark:text-primary-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>인터페이스와 구조체</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-6 h-6 text-primary-600 dark:text-primary-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>동시성 프로그래밍 (고루틴, 채널)</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-6 h-6 text-primary-600 dark:text-primary-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>웹 서버와 REST API</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-6 h-6 text-primary-600 dark:text-primary-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>데이터베이스 연동</span>
                </li>
              </ul>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
