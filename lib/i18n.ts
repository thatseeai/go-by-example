export type Language = 'ko' | 'en';

export interface Translations {
  title: string;
  subtitle: string;
  startLearning: string;
  searchPlaceholder: string;
  toggleTheme: string;
  toggleLanguage: string;
  tableOfContents: string;
  completed: string;
  download: string;
  copyCode: string;
  copied: string;
  practiceProblems: string;
  solutions: string;
  showSolution: string;
  hideSolution: string;
  nextLesson: string;
  previousLesson: string;
  backToHome: string;
  loading: string;
  errorLoading: string;
  retry: string;
  // Homepage features
  handsOnTitle: string;
  handsOnDescription: string;
  systematicTitle: string;
  systematicDescription: string;
  progressTitle: string;
  progressDescription: string;
  // Learning content
  learningContentTitle: string;
  basicSyntax: string;
  functionsAndMethods: string;
  interfacesAndStructs: string;
  concurrency: string;
  webServerAndAPI: string;
  databaseIntegration: string;
}

const translations: Record<Language, Translations> = {
  ko: {
    title: 'Go 예제로 배우기',
    subtitle: '실습 중심의 Go 언어 학습 서비스',
    startLearning: '학습 시작하기',
    searchPlaceholder: '레슨 검색...',
    toggleTheme: '테마 전환',
    toggleLanguage: '언어 전환',
    tableOfContents: '목차',
    completed: '완료',
    download: '다운로드',
    copyCode: '코드 복사',
    copied: '복사됨!',
    practiceProblems: '연습 문제',
    solutions: '정답/해설',
    showSolution: '정답 보기',
    hideSolution: '정답 숨기기',
    nextLesson: '다음 레슨',
    previousLesson: '이전 레슨',
    backToHome: '홈으로',
    loading: '로딩 중...',
    errorLoading: '로딩 오류',
    retry: '다시 시도',
    // Homepage features
    handsOnTitle: '실습 중심',
    handsOnDescription: '모든 레슨에 실행 가능한 예제 코드와 연습 문제를 제공합니다.',
    systematicTitle: '체계적인 학습',
    systematicDescription: '기초부터 고급까지 단계별로 구성된 15개의 레슨을 제공합니다.',
    progressTitle: '진행률 추적',
    progressDescription: '학습 진행 상황을 추적하고 완료한 레슨을 체크할 수 있습니다.',
    // Learning content
    learningContentTitle: '학습 내용',
    basicSyntax: '기본 문법과 타입 시스템',
    functionsAndMethods: '함수와 메서드',
    interfacesAndStructs: '인터페이스와 구조체',
    concurrency: '동시성 프로그래밍 (고루틴, 채널)',
    webServerAndAPI: '웹 서버와 REST API',
    databaseIntegration: '데이터베이스 연동',
  },
  en: {
    title: 'Go by Example',
    subtitle: 'Hands-on Go language learning service',
    startLearning: 'Start Learning',
    searchPlaceholder: 'Search lessons...',
    toggleTheme: 'Toggle theme',
    toggleLanguage: 'Toggle language',
    tableOfContents: 'Table of Contents',
    completed: 'Completed',
    download: 'Download',
    copyCode: 'Copy code',
    copied: 'Copied!',
    practiceProblems: 'Practice Problems',
    solutions: 'Solutions',
    showSolution: 'Show Solution',
    hideSolution: 'Hide Solution',
    nextLesson: 'Next Lesson',
    previousLesson: 'Previous Lesson',
    backToHome: 'Back to Home',
    loading: 'Loading...',
    errorLoading: 'Loading Error',
    retry: 'Retry',
    // Homepage features
    handsOnTitle: 'Hands-on Learning',
    handsOnDescription: 'Every lesson includes executable example code and practice problems.',
    systematicTitle: 'Systematic Approach',
    systematicDescription: 'Provides 15 lessons structured step-by-step from basics to advanced.',
    progressTitle: 'Progress Tracking',
    progressDescription: 'Track your learning progress and check off completed lessons.',
    // Learning content
    learningContentTitle: 'What You\'ll Learn',
    basicSyntax: 'Basic syntax and type system',
    functionsAndMethods: 'Functions and methods',
    interfacesAndStructs: 'Interfaces and structs',
    concurrency: 'Concurrency programming (goroutines, channels)',
    webServerAndAPI: 'Web servers and REST APIs',
    databaseIntegration: 'Database integration',
  },
};

export function getTranslations(language: Language): Translations {
  return translations[language];
}

export const SUPPORTED_LANGUAGES: Language[] = ['ko', 'en'];
export const DEFAULT_LANGUAGE: Language = 'ko';