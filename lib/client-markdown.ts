'use client';

import type { TOCItem, LessonContent } from '@/types';

const basePath = process.env.NODE_ENV === 'production' ? '/go-by-example' : '';

// Mapping from lesson number to actual file name
const lessonFileMapping: Record<string, string> = {
  '00': '00-Overview',
  '01': '01-Hello-World',
  '02': '02-Variables-Types',
  '03': '03-Control-Flow',
  '04': '04-Functions',
  '05': '05-Slices-Maps',
  '06': '06-Structs-Methods',
  '07': '07-Interfaces',
  '08': '08-Error-Handling',
  '09': '09-Goroutines-Channels',
  '10': '10-Context',
  '11': '11-Testing',
  '12': '12-Web-Servers',
  '13': '13-JSON-REST',
  '14': '14-Database',
};

export async function fetchTOC(): Promise<TOCItem[]> {
  try {
    const response = await fetch(`${basePath}/lessons/TOC.md`);
    const content = await response.text();
    const lines = content.split('\n');

    const items: TOCItem[] = [];

    for (const line of lines) {
      const match = line.match(/^- (\d+): (.+)$/);
      if (match) {
        const [, orderStr, title] = match;
        const order = parseInt(orderStr, 10);
        const paddedOrder = orderStr.padStart(2, '0');

        // Use the actual file name from mapping
        const lessonId = lessonFileMapping[paddedOrder] || `${paddedOrder}-${getSlug(title)}`;

        items.push({
          id: lessonId,
          title,
          order,
        });
      }
    }

    return items.sort((a, b) => a.order - b.order);
  } catch (error) {
    console.error('Error loading TOC:', error);
    return [];
  }
}

export async function fetchLessonContent(id: string): Promise<LessonContent | null> {
  try {
    const response = await fetch(`${basePath}/lessons/${id}.md`);
    if (!response.ok) {
      return null;
    }

    const markdown = await response.text();

    // Simple frontmatter parsing
    let content = markdown;
    let title = id;
    const frontmatterMatch = markdown.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);

    if (frontmatterMatch) {
      const [, frontmatter, body] = frontmatterMatch;
      content = body;
      const titleMatch = frontmatter.match(/^title:\s*(.+)$/m);
      if (titleMatch) {
        title = titleMatch[1].trim();
      }
    }

    // Convert markdown to HTML (simple version)
    const htmlContent = await convertMarkdownToHTML(content);

    return {
      id,
      title,
      content: htmlContent,
      frontmatter: {
        title,
      },
    };
  } catch (error) {
    console.error(`Error loading lesson ${id}:`, error);
    return null;
  }
}

export async function fetchRawMarkdown(id: string): Promise<string> {
  try {
    const response = await fetch(`${basePath}/lessons/${id}.md`);
    return await response.text();
  } catch (error) {
    console.error(`Error loading raw markdown for ${id}:`, error);
    return '';
  }
}

function getSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^\w\s가-힣-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/--+/g, '-')
    .replace(/^-+|-+$/g, '');
}

async function convertMarkdownToHTML(markdown: string): Promise<string> {
  // Use dynamic import for marked to avoid SSR issues
  const { marked } = await import('marked');

  // Configure marked
  marked.setOptions({
    gfm: true,
    breaks: true,
  });

  return marked(markdown) as string;
}