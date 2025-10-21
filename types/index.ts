export interface Lesson {
  id: string;
  title: string;
  summary: string;
  path: string;
  tags: string[];
  order: number;
}

export interface TOCItem {
  id: string;
  title: string;
  order: number;
}

export interface Progress {
  completed: Record<string, boolean>;
}

export interface LessonContent {
  id: string;
  title: string;
  content: string;
  frontmatter: {
    title?: string;
    description?: string;
    tags?: string[];
    version?: string;
  };
}
