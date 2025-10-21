# 프롬프트: "Go 예제로 배우는 웹 학습 서비스" 생성 지시서

## 목적
Go 언어를 **예제 중심**으로 학습하는 웹 서비스(클라이언트 + 간단한 백엔드)를 생성한다.
왼쪽 **사이드 메뉴(목차)**와 오른쪽 **콘텐츠 뷰** 구조를 갖추고, 각 목차 항목에 대해 **설명 + 예제 코드 + 실행/출력 안내 + 연습 문제**를 표시한다.
모든 레슨은 **Markdown(.md)** 파일에서 로드되며, 사용자는 각 레슨을 **다운로드**할 수 있어야 한다.

---

## 기능 요구사항
1. **레이아웃**
   - 좌측: **사이드 메뉴(목차)** 고정 패널
   - 우측: **메인 콘텐츠** 영역 (Markdown 렌더링)
   - 상단: 로고/프로젝트명, 글로벌 검색창, 테마 토글(라이트/다크)

2. **목차**
   - `lessons/TOC.md`를 파싱하여 사이드바 트리로 렌더링
   - 현재 활성 레슨 하이라이트, 완료 체크 가능(로컬 저장소에 진행률 저장)
   - 검색 입력 시: 제목/키워드 기반 필터링

3. **콘텐츠 렌더링**
   - `lessons/*.md`를 Fetch하여 Markdown 렌더링
   - 코드 블록에 **Go 구문 하이라이트**
   - 각 레슨 상단에 **다운로드(.md) 버튼**
   - 앵커 링크(헤딩 링크) 자동 생성

4. **상호작용**
   - "복사" 버튼: 코드 블록 우측 상단에 복사 아이콘
   - "실행 안내" 섹션: 터미널 명령 복사 버튼
   - "정답/해설" 섹션은 기본 접힘(collapsible)

5. **오프라인/버전**
   - 모든 `.md`는 버전 헤더 포함
   - PWA(Optional): 오프라인 캐시(선택)

6. **접근성/국제화**
   - 키보드 내비게이션 및 스크린리더 친화적
   - i18n 구조 고려(한/영 전환 여지)

---

## 기술 스펙 권장(선택 사항)
- 프론트엔드: **Next.js** 또는 **SvelteKit** (정적/서버 지원), Tailwind CSS
- Markdown 렌더러: `remark/rehype` 또는 동등 라이브러리
- 구문 강조: `shiki` 또는 `highlight.js`
- 상태/저장: localStorage(진행률), URL 해시(앵커)
- 백엔드(선택): Node/Go 간단 API (레슨 목록/세부/다운로드 프록시)

> **요구사항 핵심**: 프론트엔드 단독으로도 `public/lessons/*.md`를 로드하여 작동 가능해야 함.

---

## 데이터 모델
- Lesson
  ```ts
  type Lesson = { id: string; title: string; summary: string; path: string; tags: string[] }
  ```
- 진행률
  ```ts
  type Progress = { completed: Record<string, boolean> }
  ```

---

## 파일 구조 (예시)
```
/public (또는 /static)
  /lessons
    TOC.md
    00-Overview.md
    01-Hello-World.md
    02-Variables-Types.md
    03-Control-Flow.md
    04-Functions.md
    05-Slices-Maps.md
    06-Structs-Methods.md
    07-Interfaces.md
    08-Error-Handling.md
    09-Goroutines-Channels.md
    10-Context.md
    11-Testing.md
    12-Web-Servers.md
    13-JSON-REST.md
    14-Database.md
```

---

## 라우팅 규칙
- `/` → 소개(Overview)
- `/lesson/:id` → 해당 MD 로드 및 렌더링
- 404 처리: 유효하지 않은 id는 TOC로 리다이렉트

---

## UI 요구 상세
- 사이드바: 스크롤 고정, 현재 항목 Bold, 완료 체크박스 포함
- 콘텐츠 헤더: 제목, 태그, 다운로드 버튼
- 코드블록: 줄번호, 복사버튼
- 모바일: 햄버거 토글로 목차 열기/닫기

---

## 성능/품질
- 이미지/폰트 지연 로딩
- a11y lint, 링크 헤더 앵커 자동 검증
- MD 렌더링 보안(sanitize)

---

## 전달물
- 동작하는 웹 앱 스캐폴드
- `/lessons` 내 모든 `.md` 포함
- README에 빌드/실행 방법

---

## 테스트(권장)
- 렌더링 스냅샷 테스트
- TOC-레슨 라우팅 테스트
- 로컬 진행률 저장/복원 테스트

---

## 통합할 레슨 세트
`lessons/TOC.md`와 각 레슨 `.md`를 아래 예시 콘텐츠로 포함하라.
**모든 레슨은 한국어이며, 실행 가능한 Go 예제**와 **연습 문제**를 제공해야 한다.
