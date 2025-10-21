#!/usr/bin/env node

/**
 * public/lessons 폴더를 스캔하여 레슨 설정을 자동 생성하는 스크립트
 *
 * 사용법:
 *   node scripts/generate-lesson-config.js
 *
 * 이 스크립트는 다음 파일들을 자동으로 업데이트합니다:
 *   - lib/client-markdown.ts (lessonFileMapping)
 *   - app/lesson/[id]/layout.tsx (generateStaticParams)
 */

const fs = require('fs');
const path = require('path');

const LESSONS_DIR = path.join(__dirname, '../public/lessons');
const CLIENT_MARKDOWN_PATH = path.join(__dirname, '../lib/client-markdown.ts');
const LAYOUT_PATH = path.join(__dirname, '../app/lesson/[id]/layout.tsx');

// public/lessons 폴더에서 레슨 파일 스캔
function scanLessons() {
  const files = fs.readdirSync(LESSONS_DIR);
  const lessons = files
    .filter(file => file.endsWith('.md') && file !== 'TOC.md')
    .map(file => {
      const match = file.match(/^(\d+)-(.+)\.md$/);
      if (match) {
        const [, number, name] = match;
        return {
          number: number.padStart(2, '0'),
          id: file.replace('.md', ''),
        };
      }
      return null;
    })
    .filter(Boolean)
    .sort((a, b) => parseInt(a.number) - parseInt(b.number));

  return lessons;
}

// lib/client-markdown.ts 업데이트
function updateClientMarkdown(lessons) {
  let content = fs.readFileSync(CLIENT_MARKDOWN_PATH, 'utf8');

  // lessonFileMapping 객체 생성
  const mappingLines = lessons.map(
    lesson => `  '${lesson.number}': '${lesson.id}',`
  ).join('\n');

  const newMapping = `// Mapping from lesson number to actual file name
const lessonFileMapping: Record<string, string> = {
${mappingLines}
};`;

  // 기존 매핑 교체
  const regex = /\/\/ Mapping from lesson number to actual file name\nconst lessonFileMapping[\s\S]*?\};/;
  content = content.replace(regex, newMapping);

  fs.writeFileSync(CLIENT_MARKDOWN_PATH, content, 'utf8');
  console.log('✅ Updated lib/client-markdown.ts');
}

// app/lesson/[id]/layout.tsx 업데이트
function updateLayout(lessons) {
  let content = fs.readFileSync(LAYOUT_PATH, 'utf8');

  // generateStaticParams 배열 생성
  const paramsLines = lessons.map(
    lesson => `    { id: '${lesson.id}' },`
  ).join('\n');

  const newParams = `// Generate static params for all lessons
export async function generateStaticParams() {
  return [
${paramsLines}
  ];
}`;

  // 기존 params 교체
  const regex = /\/\/ Generate static params for all lessons\nexport async function generateStaticParams\(\)[\s\S]*?\]\s*;?\s*\}/;
  content = content.replace(regex, newParams);

  fs.writeFileSync(LAYOUT_PATH, content, 'utf8');
  console.log('✅ Updated app/lesson/[id]/layout.tsx');
}

// 메인 실행
function main() {
  console.log('🔍 Scanning lessons in public/lessons/...\n');

  const lessons = scanLessons();

  console.log(`Found ${lessons.length} lessons:`);
  lessons.forEach(lesson => {
    console.log(`  - ${lesson.number}: ${lesson.id}`);
  });
  console.log();

  updateClientMarkdown(lessons);
  updateLayout(lessons);

  console.log('\n✨ Configuration updated successfully!');
  console.log('💡 Run "npm run build" to regenerate static pages.');
}

main();
