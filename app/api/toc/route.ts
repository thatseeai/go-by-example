import { NextResponse } from 'next/server';
import { getTOC } from '@/lib/markdown';

export async function GET() {
  try {
    const toc = getTOC();
    return NextResponse.json(toc);
  } catch (error) {
    console.error('Error in TOC API:', error);
    return NextResponse.json({ error: 'Failed to load TOC' }, { status: 500 });
  }
}
