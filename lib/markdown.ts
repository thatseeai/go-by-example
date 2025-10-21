import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import remarkGfm from 'remark-gfm';
import remarkHtml from 'remark-html';
import type { LessonContent, TOCItem } from '@/types';

const lessonsDirectory = path.join(process.cwd(), 'public/lessons');

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

export async function getLessonContent(id: string): Promise<LessonContent | null> {
  try {
    const fullPath = path.join(lessonsDirectory, `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    const processedContent = await remark()
      .use(remarkGfm)
      .use(remarkHtml, { sanitize: false })
      .process(content);

    const contentHtml = processedContent.toString();

    return {
      id,
      title: data.title || id,
      content: contentHtml,
      frontmatter: {
        title: data.title,
        description: data.description,
        tags: data.tags,
        version: data.version,
      },
    };
  } catch (error) {
    console.error(`Error loading lesson ${id}:`, error);
    return null;
  }
}

export function getTOC(): TOCItem[] {
  try {
    const tocPath = path.join(lessonsDirectory, 'TOC.md');
    const fileContents = fs.readFileSync(tocPath, 'utf8');
    const lines = fileContents.split('\n');

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

function getSlug(title: string): string {
  // Convert Korean and special characters to URL-friendly format
  return title
    .toLowerCase()
    .replace(/[^\w\s가-힣-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/--+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export async function getAllLessonIds(): Promise<string[]> {
  const toc = getTOC();
  return toc.map(item => item.id);
}

export function getRawMarkdown(id: string): string {
  try {
    const fullPath = path.join(lessonsDirectory, `${id}.md`);
    return fs.readFileSync(fullPath, 'utf8');
  } catch (error) {
    console.error(`Error loading raw markdown for ${id}:`, error);
    return '';
  }
}
