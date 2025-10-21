'use client';

import parse, { domToReact, HTMLReactParserOptions, Element } from 'html-react-parser';
import CodeBlock from './CodeBlock';

interface LessonContentProps {
  content: string;
  title: string;
  lessonId: string;
}

const options: HTMLReactParserOptions = {
  replace: (domNode) => {
    if (domNode instanceof Element && domNode.name === 'pre') {
      const codeElement = domNode.children.find(
        (child) => child instanceof Element && child.name === 'code'
      ) as Element | undefined;

      if (codeElement) {
        const codeString = domToReact(codeElement.children) as string;
        const language = codeElement.attribs.class?.replace('language-', '') || 'go';
        return <CodeBlock code={codeString} language={language} />;
      }
    }
  },
};

export default function LessonContent({ content, title, lessonId }: LessonContentProps) {
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
      <div className="prose prose-lg dark:prose-invert max-w-none prose-code:text-primary-600 dark:prose-code:text-primary-400 prose-headings:scroll-mt-20">
        {parse(content, options)}
      </div>
    </div>
  );
}