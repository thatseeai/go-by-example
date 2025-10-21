import { test, expect } from '@playwright/test';

/**
 * Test Suite: 1. Initial Load and Home Page
 *
 * Tests the initial loading behavior and home page functionality
 * of the Go Learning by Example Web Service.
 */

test.describe('1. Initial Load and Home Page', () => {

  /**
   * Test 1.1: Home Page Load
   * Verifies that the home page loads correctly with all expected elements
   */
  test('1.1 Home Page Load', async ({ page }) => {
    // Step 1: Navigate to http://localhost:3000
    await page.goto('http://localhost:3000');

    // Step 2: Wait for page to fully load
    await page.waitForLoadState('networkidle');

    // Expected: Page loads without errors (implicit - if page crashes, test fails)

    // Expected: Header displays with "Go 예제로 배우기" branding
    const headerTitle = page.locator('header').getByText('Go 예제로 배우기');
    await expect(headerTitle).toBeVisible();

    // Expected: Main content shows welcome section with "Go 예제로 배우기" heading
    const mainHeading = page.locator('main h1', { hasText: 'Go 예제로 배우기' });
    await expect(mainHeading).toBeVisible();

    // Expected: "학습 시작하기" (Start Learning) button is visible and enabled
    const startButton = page.getByRole('button', { name: '학습 시작하기' });
    await expect(startButton).toBeVisible();
    await expect(startButton).toBeEnabled();

    // Expected: Three feature cards are displayed
    const featureCards = page.getByRole('heading', { name: '실습 중심' });
    await expect(featureCards).toBeVisible();

    const systematicLearning = page.getByRole('heading', { name: '체계적인 학습' });
    await expect(systematicLearning).toBeVisible();

    const progressTracking = page.getByRole('heading', { name: '진행률 추적' });
    await expect(progressTracking).toBeVisible();

    // Expected: Learning content section shows six checkmarks with topics
    const basicGrammar = page.locator('main').getByText('기본 문법과 타입 시스템');
    await expect(basicGrammar).toBeVisible();

    const functionsAndMethods = page.locator('main').getByText('함수와 메서드');
    await expect(functionsAndMethods).toBeVisible();

    const interfacesAndStructs = page.locator('main').getByText('인터페이스와 구조체');
    await expect(interfacesAndStructs).toBeVisible();

    const concurrency = page.locator('main').getByText('동시성 프로그래밍 (고루틴, 채널)');
    await expect(concurrency).toBeVisible();

    const webServerAPI = page.locator('main').getByText('웹 서버와 REST API');
    await expect(webServerAPI).toBeVisible();

    const database = page.locator('main').getByText('데이터베이스 연동');
    await expect(database).toBeVisible();

    // Expected: Sidebar is visible on desktop (hidden on mobile)
    const viewport = page.viewportSize();
    const sidebar = page.locator('aside');

    if (viewport && viewport.width >= 1024) {
      // Desktop: sidebar should be visible
      await expect(sidebar).toBeVisible();
    } else {
      // Mobile: sidebar should be hidden (translated off-screen)
      await expect(sidebar).toHaveCSS('transform', /translateX\(-100%\)|matrix\(-1, 0, 0, 1, 0, 0\)/);
    }

    // Expected: Theme toggle button is present in header
    const themeToggle = page.locator('header button[aria-label="Toggle theme"]');
    await expect(themeToggle).toBeVisible();
  });

  /**
   * Test 1.2: Sidebar TOC Load
   * Verifies that the table of contents loads correctly in the sidebar
   */
  test('1.2 Sidebar TOC Load', async ({ page }) => {
    // Step 1: Navigate to http://localhost:3000
    await page.goto('http://localhost:3000');

    // Step 2: Observe the sidebar (expand on mobile if needed)
    await page.waitForLoadState('networkidle');

    const viewport = page.viewportSize();
    if (viewport && viewport.width < 1024) {
      // Mobile: open sidebar
      const menuButton = page.locator('header button[aria-label="Toggle menu"]');
      await menuButton.click();
    }

    // Step 3: Verify TOC items are loaded
    const sidebar = page.locator('aside');

    // Expected: Sidebar displays "목차" (Table of Contents) header
    const tocHeader = sidebar.getByRole('heading', { name: '목차' });
    await expect(tocHeader).toBeVisible();

    // Expected: Search input field is present with placeholder "레슨 검색..."
    const searchInput = sidebar.getByPlaceholder('레슨 검색...');
    await expect(searchInput).toBeVisible();

    // Expected: All 15 lesson items are listed (00-Overview through 14-Database)
    // Wait for lessons to load
    await page.waitForSelector('aside nav a', { timeout: 5000 });

    const lessonLinks = sidebar.locator('nav a');
    const lessonCount = await lessonLinks.count();
    expect(lessonCount).toBe(15);

    // Expected: Each lesson has an unchecked checkbox
    const checkboxes = sidebar.locator('nav button[aria-label*="Mark"]');
    const checkboxCount = await checkboxes.count();
    expect(checkboxCount).toBe(15);

    // Verify first checkbox is unchecked
    const firstCheckbox = checkboxes.first().locator('div').first();
    await expect(firstCheckbox).not.toHaveClass(/bg-primary-500/);

    // Expected: Progress indicator shows "진행률: 0 / 15"
    const progressText = sidebar.getByText(/진행률: \d+ \/ 15/);
    await expect(progressText).toContainText('0 / 15');

    // Expected: Progress bar shows 0% completion
    const progressBar = sidebar.locator('div.bg-primary-500.h-2');
    const progressBarWidth = await progressBar.evaluate((el) => {
      return window.getComputedStyle(el).width;
    });

    // 0% width should be "0px" or very small
    expect(parseInt(progressBarWidth)).toBeLessThanOrEqual(1);
  });

  /**
   * Test 1.3: Start Learning Button
   * Verifies that clicking the start learning button navigates to the first lesson
   */
  test('1.3 Start Learning Button', async ({ page }) => {
    // Step 1: Navigate to http://localhost:3000
    await page.goto('http://localhost:3000');
    await page.waitForLoadState('networkidle');

    // Step 2: Click the "학습 시작하기" button
    const startButton = page.getByRole('button', { name: '학습 시작하기' });
    await startButton.click();

    // Expected: Navigation occurs to `/lesson/00-Overview`
    await page.waitForURL('**/lesson/00-Overview', { timeout: 5000 });

    // Expected: URL changes to reflect the lesson
    expect(page.url()).toContain('/lesson/00-Overview');

    // Expected: First lesson content is loaded and displayed
    await page.waitForLoadState('networkidle');

    // Check for lesson title or content
    const lessonTitle = page.locator('main h1').first();
    await expect(lessonTitle).toBeVisible();

    // Expected: Sidebar highlights "00-Overview" as active lesson
    // Open sidebar on mobile if needed
    const viewport = page.viewportSize();
    if (viewport && viewport.width < 1024) {
      const menuButton = page.locator('header button[aria-label="Toggle menu"]');
      await menuButton.click();
    }

    // Find the active lesson link
    const activeLesson = page.locator('aside nav a.bg-primary-100, aside nav a.bg-primary-900');
    await expect(activeLesson).toBeVisible();

    // Verify it contains "오리엔테이션" (Overview) or "00"
    const activeLessonText = await activeLesson.textContent();
    expect(activeLessonText).toMatch(/오리엔테이션|Overview|00/i);
  });
});
