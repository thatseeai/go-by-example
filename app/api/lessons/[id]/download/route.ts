import { NextResponse } from 'next/server';
import { getRawMarkdown } from '@/lib/markdown';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const markdown = getRawMarkdown(id);

    if (!markdown) {
      return NextResponse.json({ error: 'Lesson not found' }, { status: 404 });
    }

    return new NextResponse(markdown, {
      headers: {
        'Content-Type': 'text/markdown',
        'Content-Disposition': `attachment; filename="${id}.md"`,
      },
    });
  } catch (error) {
    console.error('Error in download API:', error);
    return NextResponse.json({ error: 'Failed to download lesson' }, { status: 500 });
  }
}
