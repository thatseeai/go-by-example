'use client';

import { useEffect, useRef } from 'react';

interface LessonContentProps {
  content: string;
  title: string;
  lessonId: string;
}

export default function LessonContent({ content, title, lessonId }: LessonContentProps) {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!contentRef.current) return;

    // Add copy buttons to all code blocks
    const codeBlocks = contentRef.current.querySelectorAll('pre code');
    codeBlocks.forEach((block) => {
      const pre = block.parentElement;
      if (!pre) return;

      // Create wrapper if not exists
      if (!pre.parentElement?.classList.contains('code-block-wrapper')) {
        const wrapper = document.createElement('div');
        wrapper.className = 'code-block-wrapper relative group my-4';
        pre.parentNode?.insertBefore(wrapper, pre);
        wrapper.appendChild(pre);

        // Create copy button
        const button = document.createElement('button');
        button.className = 'absolute top-2 right-2 p-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg opacity-0 group-hover:opacity-100 transition-opacity';
        button.innerHTML = `
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"/>
          </svg>
        `;
        button.onclick = async () => {
          const code = block.textContent || '';
          try {
            await navigator.clipboard.writeText(code);
            button.innerHTML = `
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
              </svg>
            `;
            setTimeout(() => {
              button.innerHTML = `
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"/>
                </svg>
              `;
            }, 2000);
          } catch (error) {
            console.error('Failed to copy:', error);
          }
        };
        wrapper.appendChild(button);
      }
    });

    // Add anchors to headings
    const headings = contentRef.current.querySelectorAll('h1, h2, h3, h4, h5, h6');
    headings.forEach((heading) => {
      if (!heading.id) {
        const id = heading.textContent?.toLowerCase().replace(/\s+/g, '-') || '';
        heading.id = id;
      }
    });
  }, [content]);

  const handleDownload = async () => {
    try {
      const { fetchRawMarkdown } = await import('@/lib/client-markdown');
      const markdown = await fetchRawMarkdown(lessonId);
      const blob = new Blob([markdown], { type: 'text/markdown' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${lessonId}.md`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Failed to download:', error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-8 pb-6 border-b border-gray-200 dark:border-gray-800">
        <div className="flex items-start justify-between gap-4">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">{title}</h1>
          <button
            onClick={handleDownload}
            className="flex items-center gap-2 px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white rounded-lg transition-colors whitespace-nowrap"
            aria-label="Download lesson"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            <span className="hidden sm:inline">다운로드</span>
          </button>
        </div>
      </div>

      {/* Content */}
      <div
        ref={contentRef}
        className="prose prose-lg dark:prose-invert max-w-none prose-pre:bg-gray-900 prose-pre:text-gray-100 prose-code:text-primary-600 dark:prose-code:text-primary-400 prose-headings:scroll-mt-20"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
}
