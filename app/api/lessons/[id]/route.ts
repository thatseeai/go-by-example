import { NextResponse } from 'next/server';
import { getLessonContent } from '@/lib/markdown';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const content = await getLessonContent(id);

    if (!content) {
      return NextResponse.json({ error: 'Lesson not found' }, { status: 404 });
    }

    return NextResponse.json(content);
  } catch (error) {
    console.error('Error in lesson API:', error);
    return NextResponse.json({ error: 'Failed to load lesson' }, { status: 500 });
  }
}
