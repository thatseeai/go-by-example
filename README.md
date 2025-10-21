# Go 예제로 배우기

실습 중심의 Go 언어 학습 웹 서비스입니다. 왼쪽 사이드바에서 레슨을 선택하고, 오른쪽에서 예제 코드와 설명을 확인할 수 있습니다.

## 주요 기능

- **15개의 체계적인 레슨**: 기초부터 고급까지 단계별 학습
- **실행 가능한 예제**: 모든 레슨에 실제 동작하는 Go 코드 포함
- **진행률 추적**: 완료한 레슨을 체크하고 학습 진도 확인
- **다크 모드**: 라이트/다크 테마 전환 지원
- **코드 복사**: 한 번의 클릭으로 예제 코드 복사
- **레슨 다운로드**: 각 레슨을 Markdown 파일로 다운로드
- **모바일 지원**: 반응형 디자인으로 모바일에서도 편리한 학습

## 기술 스택

- **프론트엔드**: Next.js 15, React 19, TypeScript
- **스타일링**: Tailwind CSS
- **Markdown 처리**: Remark, Rehype
- **구문 강조**: Highlight.js

## 데모

GitHub Pages에서 확인: [https://YOUR-USERNAME.github.io/go-by-example/](https://YOUR-USERNAME.github.io/go-by-example/)

## 시작하기

### 1. 의존성 설치

```bash
npm install
```

### 2. 개발 서버 실행

```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인하세요.

### 3. 프로덕션 빌드 (정적 export)

```bash
npm run build
```

빌드된 정적 파일은 `out/` 폴더에 생성됩니다.

### 4. GitHub Pages에 배포

1. GitHub 저장소 생성
2. 저장소 Settings > Pages로 이동
3. Source를 "GitHub Actions"로 선택
4. 코드를 push하면 자동으로 배포됩니다

```bash
git add .
git commit -m "Deploy to GitHub Pages"
git push origin main
```

## 프로젝트 구조

```
.
├── app/                    # Next.js 앱 라우터
│   ├── lesson/            # 레슨 페이지
│   │   └── [id]/         # 동적 라우트
│   ├── layout.tsx        # 루트 레이아웃
│   ├── page.tsx          # 홈 페이지
│   └── globals.css       # 전역 스타일
├── components/            # React 컴포넌트
│   ├── Header.tsx        # 헤더 컴포넌트
│   ├── Sidebar.tsx       # 사이드바 컴포넌트
│   ├── LessonContent.tsx # 레슨 콘텐츠 뷰어
│   └── CodeBlock.tsx     # 코드 블록 컴포넌트
├── lib/                   # 유틸리티 라이브러리
│   ├── markdown.ts       # 서버 사이드 Markdown 처리
│   └── client-markdown.ts # 클라이언트 사이드 Markdown 처리
├── utils/                 # 유틸리티 함수
│   └── storage.ts        # 로컬 스토리지 관리
├── types/                 # TypeScript 타입 정의
│   └── index.ts
├── public/                # 정적 파일
│   └── lessons/          # 레슨 Markdown 파일
│       ├── TOC.md        # 목차
│       ├── 00-Overview.md
│       ├── 01-Hello-World.md
│       └── ...
├── .github/workflows/     # GitHub Actions
│   └── deploy.yml        # 자동 배포 워크플로우
└── package.json
```

## 학습 커리큘럼

1. **00: 오리엔테이션** - Go 언어 소개 및 환경 설정
2. **01: Hello, World** - 첫 번째 Go 프로그램
3. **02: 변수와 타입** - 기본 데이터 타입과 변수 선언
4. **03: 제어문** - if, for, switch 문법
5. **04: 함수와 가변 인자** - 함수 정의 및 활용
6. **05: 슬라이스와 맵** - 컬렉션 타입
7. **06: 구조체와 메서드** - 사용자 정의 타입
8. **07: 인터페이스** - Go의 다형성
9. **08: 오류 처리** - error, panic, recover
10. **09: 고루틴과 채널** - 동시성 프로그래밍
11. **10: 컨텍스트** - context 패키지 활용
12. **11: 테스트와 벤치마크** - 테스트 작성법
13. **12: 웹 서버** - net/http 패키지
14. **13: JSON과 REST** - REST API 구현
15. **14: 데이터베이스** - database/sql 활용

## 레슨 추가하기

새로운 레슨을 추가하려면:

1. `public/lessons/` 디렉토리에 `XX-Lesson-Name.md` 형식으로 파일 생성
2. `public/lessons/TOC.md`에 새 레슨 항목 추가
3. Markdown 파일에 다음 형식으로 작성:

```markdown
# 레슨 제목

## 설명
레슨 설명...

## 예제 코드
\`\`\`go
package main

import "fmt"

func main() {
    fmt.Println("Hello, World!")
}
\`\`\`

## 실행 방법
터미널 명령어...

## 연습 문제
문제 설명...

<details>
<summary>정답 및 해설</summary>

정답 코드...
</details>
```

## 커스터마이징

### 테마 색상 변경

`tailwind.config.ts`에서 primary 색상을 변경할 수 있습니다:

```typescript
colors: {
  primary: {
    500: '#your-color',
    // ...
  },
}
```

### 진행률 초기화

브라우저 개발자 도구에서 localStorage를 확인하고 `go-by-example-progress` 키를 삭제하면 진행률이 초기화됩니다.

## 라이선스

MIT License

## 기여하기

버그 리포트나 기능 제안은 Issues에 등록해주세요.
Pull Request는 언제나 환영합니다!

## 문의

프로젝트에 대한 질문이나 제안사항이 있으시면 Issues를 통해 연락주세요.
