# Go 예제로 배우는 웹 학습 서비스 - Comprehensive Test Plan

## Application Overview

The "Go 예제로 배우는 웹 학습 서비스" (Go Learning by Example Web Service) is a Korean-language educational web application built with Next.js for learning Go programming through practical examples. The application features:

- **Architecture**: Next.js 15.5+ with React 19, TypeScript, Tailwind CSS
- **Layout**: Left sidebar navigation with table of contents, right main content area
- **Content Management**: Markdown-based lessons loaded from `/public/lessons/` directory
- **Syntax Highlighting**: highlight.js for Go code examples
- **Features**:
  - 15 progressive Go lessons (00-Overview to 14-Database)
  - Dark/Light theme toggle
  - Lesson progress tracking (localStorage)
  - Search functionality in sidebar
  - Code block copy functionality
  - Lesson download (.md files)
  - Responsive design (mobile hamburger menu)
  - Accessibility features (ARIA labels, keyboard navigation)

## Technology Stack

- **Frontend**: Next.js (App Router), React 19, TypeScript
- **Styling**: Tailwind CSS with dark mode support
- **Markdown**: `marked` library for parsing
- **Code Highlighting**: highlight.js
- **HTML Parsing**: html-react-parser
- **State Management**: React hooks + localStorage
- **Routing**: Next.js App Router with dynamic routes

---

## Test Scenarios

### 1. Initial Load and Home Page

**Seed:** Default (navigate to http://localhost:3000)

#### 1.1 Home Page Load
**Steps:**
1. Navigate to http://localhost:3000
2. Wait for page to fully load

**Expected Results:**
- Page loads without errors
- Header displays with "Go 예제로 배우기" branding
- Main content shows welcome section with "Go 예제로 배우기" heading
- "학습 시작하기" (Start Learning) button is visible and enabled
- Three feature cards are displayed (실습 중심, 체계적인 학습, 진행률 추적)
- Learning content section shows six checkmarks with topics
- Sidebar is visible on desktop (hidden on mobile)
- Theme toggle button is present in header

#### 1.2 Sidebar TOC Load
**Steps:**
1. Navigate to http://localhost:3000
2. Observe the sidebar (expand on mobile if needed)
3. Verify TOC items are loaded

**Expected Results:**
- Sidebar displays "목차" (Table of Contents) header
- Search input field is present with placeholder "레슨 검색..."
- All 15 lesson items are listed (00-Overview through 14-Database)
- Each lesson has an unchecked checkbox
- Progress indicator shows "진행률: 0 / 15"
- Progress bar shows 0% completion

#### 1.3 Start Learning Button
**Steps:**
1. Navigate to http://localhost:3000
2. Click the "학습 시작하기" button

**Expected Results:**
- Navigation occurs to `/lesson/00-Overview`
- URL changes to reflect the lesson
- First lesson content is loaded and displayed
- Sidebar highlights "00-Overview" as active lesson

---

### 2. Navigation and Routing

**Seed:** Default

#### 2.1 Sidebar Lesson Navigation
**Steps:**
1. Navigate to http://localhost:3000
2. Click on sidebar to expand if on mobile
3. Click on "01-Hello-World" lesson in sidebar
4. Wait for content to load
5. Click on "05-Slices-Maps" lesson
6. Wait for content to load

**Expected Results:**
- After step 3: URL changes to `/lesson/01-Hello-World`
- Lesson content for "Hello World" displays
- Sidebar highlights "01-Hello-World" as active
- After step 5: URL changes to `/lesson/05-Slices-Maps`
- Lesson content for "Slices and Maps" displays
- Sidebar highlights "05-Slices-Maps" as active
- On mobile, sidebar closes after selection

#### 2.2 Direct URL Navigation
**Steps:**
1. Navigate directly to http://localhost:3000/lesson/03-Control-Flow
2. Wait for page load
3. Navigate directly to http://localhost:3000/lesson/10-Context
4. Wait for page load

**Expected Results:**
- Step 2: Lesson "03-Control-Flow" loads correctly
- Sidebar shows "03-Control-Flow" as active
- TOC is properly loaded in sidebar
- Step 4: Lesson "10-Context" loads correctly
- Sidebar shows "10-Context" as active

#### 2.3 Logo Navigation to Home
**Steps:**
1. Navigate to http://localhost:3000/lesson/05-Slices-Maps
2. Wait for lesson to load
3. Click on the "Go 예제로 배우기" logo/text in header

**Expected Results:**
- Navigation occurs to home page (/)
- URL changes to http://localhost:3000
- Home page content is displayed
- No lesson is highlighted as active in sidebar

#### 2.4 Invalid Lesson ID
**Steps:**
1. Navigate directly to http://localhost:3000/lesson/99-Invalid-Lesson
2. Wait for page load

**Expected Results:**
- Page displays error message "레슨을 찾을 수 없습니다"
- Error message states "요청하신 레슨이 존재하지 않습니다"
- Header and sidebar still function correctly
- No console errors that break the application

---

### 3. Theme Toggle Functionality

**Seed:** Default

#### 3.1 Toggle to Dark Mode
**Steps:**
1. Navigate to http://localhost:3000
2. Verify page is in light mode (white background)
3. Click the theme toggle button (moon icon) in header
4. Observe page appearance

**Expected Results:**
- Theme changes to dark mode
- Background colors change to dark (gray-900)
- Text colors invert appropriately
- Theme toggle icon changes to sun icon
- Dark mode preference is saved to localStorage
- All content areas (header, sidebar, main) update to dark theme

#### 3.2 Toggle to Light Mode
**Steps:**
1. Start from dark mode (complete 3.1 first)
2. Click the theme toggle button (sun icon) in header
3. Observe page appearance

**Expected Results:**
- Theme changes back to light mode
- Background colors change to light (white)
- Text colors revert to dark
- Theme toggle icon changes back to moon icon
- Light mode preference is saved to localStorage

#### 3.3 Theme Persistence Across Navigation
**Steps:**
1. Navigate to http://localhost:3000
2. Toggle to dark mode
3. Navigate to /lesson/01-Hello-World
4. Navigate to /lesson/05-Slices-Maps
5. Navigate back to home page

**Expected Results:**
- Dark mode persists across all navigation
- No flashing or theme switching during navigation
- Theme remains consistent

#### 3.4 Theme Persistence After Page Reload
**Steps:**
1. Navigate to http://localhost:3000
2. Toggle to dark mode
3. Refresh the page (F5 or Cmd+R)

**Expected Results:**
- Page loads in dark mode
- No flash of light content before dark mode applies
- Theme preference is restored from localStorage

---

### 4. Sidebar Search Functionality

**Seed:** Default

#### 4.1 Search for Existing Lesson
**Steps:**
1. Navigate to http://localhost:3000
2. Open sidebar if on mobile
3. Click in the search input field
4. Type "hello"

**Expected Results:**
- Search input accepts text
- Lesson list filters to show only "01-Hello-World"
- Other lessons are hidden
- Checkbox and navigation still work for filtered result
- Progress counter remains accurate

#### 4.2 Search with Multiple Results
**Steps:**
1. Navigate to http://localhost:3000
2. Clear search field if needed
3. Type "s" in search field

**Expected Results:**
- Multiple lessons containing "s" are displayed (e.g., Slices-Maps, Structs-Methods, Interfaces, Goroutines-Channels, Web-Servers)
- All matching lessons remain clickable
- Non-matching lessons are hidden

#### 4.3 Search with No Results
**Steps:**
1. Navigate to http://localhost:3000
2. Type "xyz12345" in search field

**Expected Results:**
- No lessons are displayed
- Empty lesson list is shown
- No error message (graceful handling)
- Search field remains functional
- Progress counter still displays

#### 4.4 Clear Search
**Steps:**
1. Navigate to http://localhost:3000
2. Type "hello" in search field
3. Clear the search field (delete all text)

**Expected Results:**
- All 15 lessons reappear in the list
- List returns to normal state
- Progress counter accurate

#### 4.5 Case Insensitive Search
**Steps:**
1. Navigate to http://localhost:3000
2. Type "HELLO" in search field
3. Clear and type "HeLLo"
4. Clear and type "hello"

**Expected Results:**
- All three searches return the same result: "01-Hello-World"
- Search is case-insensitive
- Consistent behavior regardless of capitalization

---

### 5. Progress Tracking

**Seed:** Default

#### 5.1 Mark Lesson as Complete
**Steps:**
1. Navigate to http://localhost:3000
2. Click the checkbox next to "00-Overview" lesson
3. Observe the checkbox and progress indicator

**Expected Results:**
- Checkbox changes from empty to checked with checkmark
- Checkbox background becomes primary color (blue/teal)
- Progress counter updates to "진행률: 1 / 15"
- Progress bar updates to show ~6.67% completion
- Lesson title remains visible and clickable

#### 5.2 Mark Multiple Lessons Complete
**Steps:**
1. Navigate to http://localhost:3000
2. Click checkboxes for lessons 00, 01, 02, 03, 04
3. Observe progress updates

**Expected Results:**
- All 5 checkboxes show checked state
- Progress counter shows "진행률: 5 / 15"
- Progress bar shows ~33.33% completion
- Progress data saved to localStorage

#### 5.3 Unmark Completed Lesson
**Steps:**
1. Start with lesson 00 marked as complete (from 5.1)
2. Click the checkbox for "00-Overview" again

**Expected Results:**
- Checkbox returns to unchecked state
- Checkbox background becomes gray border
- Progress counter decrements by 1
- Progress bar decreases accordingly
- localStorage is updated

#### 5.4 Progress Persistence
**Steps:**
1. Navigate to http://localhost:3000
2. Mark lessons 00, 01, 02 as complete
3. Navigate to /lesson/05-Slices-Maps
4. Observe sidebar progress
5. Refresh the page
6. Observe sidebar progress

**Expected Results:**
- After step 3: Progress still shows 3/15
- Checked lessons remain checked
- After step 5: Progress persists after reload
- All 3 lessons still marked complete
- Progress bar shows correct percentage

#### 5.5 Toggle Complete While Viewing Lesson
**Steps:**
1. Navigate to /lesson/03-Control-Flow
2. Click the checkbox for "03-Control-Flow" in sidebar
3. Click it again to uncheck

**Expected Results:**
- Checkbox toggles correctly
- Active lesson highlight remains visible
- Progress updates correctly
- No navigation occurs

#### 5.6 Complete All Lessons
**Steps:**
1. Navigate to http://localhost:3000
2. Click all 15 lesson checkboxes to complete them

**Expected Results:**
- All checkboxes show checked state
- Progress counter shows "진행률: 15 / 15"
- Progress bar shows 100% completion (full width)
- Progress bar is fully filled with primary color

---

### 6. Lesson Content Rendering

**Seed:** Default

#### 6.1 Basic Content Display
**Steps:**
1. Navigate to http://localhost:3000/lesson/00-Overview
2. Wait for content to load
3. Scroll through the content

**Expected Results:**
- Lesson title displays at top of content area
- Download button appears next to title
- Markdown content is properly rendered as HTML
- Headings are styled appropriately (h1, h2, h3, etc.)
- Paragraphs have proper spacing
- Lists (ordered and unordered) render correctly
- Content is readable and properly formatted

#### 6.2 Code Block Rendering
**Steps:**
1. Navigate to http://localhost:3000/lesson/01-Hello-World
2. Locate the code block containing Go code
3. Observe the code block styling

**Expected Results:**
- Code block has dark background (gray-900)
- Code has syntax highlighting applied
- Go keywords are highlighted (func, package, import, etc.)
- Code is monospace font
- Horizontal scroll appears if code is too wide
- Copy button appears in top-right of code block on hover
- Code block has rounded corners

#### 6.3 Multiple Code Blocks
**Steps:**
1. Navigate to http://localhost:3000/lesson/02-Variables-Types
2. Scroll through and count code blocks
3. Hover over each code block

**Expected Results:**
- Multiple code blocks render independently
- Each has its own copy button
- Syntax highlighting applies to all blocks
- No overlap or styling issues between blocks

#### 6.4 Markdown Features
**Steps:**
1. Navigate to http://localhost:3000/lesson/00-Overview
2. Look for various markdown elements:
   - Bold text
   - Italic text
   - Links (if any)
   - Headings (h2, h3)
   - Lists

**Expected Results:**
- Bold text is rendered with font-bold
- Italic text is rendered with font-italic
- Links are styled and clickable
- Headings have appropriate sizes and weights
- Lists have proper indentation and markers
- All markdown elements display correctly

#### 6.5 Korean Text Rendering
**Steps:**
1. Navigate to http://localhost:3000/lesson/00-Overview
2. Verify Korean text displays correctly
3. Navigate to other lessons

**Expected Results:**
- Korean characters (Hangul) render properly
- No font issues or character encoding problems
- Text is readable and well-spaced
- Mix of Korean and English renders well
- Code comments in Korean display correctly

---

### 7. Code Block Copy Functionality

**Seed:** Default

#### 7.1 Copy Code to Clipboard
**Steps:**
1. Navigate to http://localhost:3000/lesson/01-Hello-World
2. Hover over the first code block
3. Click the copy button (copy icon)
4. Observe the button feedback

**Expected Results:**
- Copy button appears on hover (opacity 0 to 100)
- Button shows copy icon initially
- After click, icon changes to checkmark
- Visual feedback indicates copy success
- After 2 seconds, icon reverts to copy icon
- Code is copied to system clipboard

#### 7.2 Verify Copied Content
**Steps:**
1. Navigate to http://localhost:3000/lesson/01-Hello-World
2. Copy the first code block
3. Open a text editor
4. Paste (Cmd+V or Ctrl+V)

**Expected Results:**
- Pasted content matches the code in the block
- Formatting is preserved (indentation, line breaks)
- No extra HTML or markup is pasted
- Only plain text code is copied

#### 7.3 Copy Different Code Blocks
**Steps:**
1. Navigate to http://localhost:3000/lesson/02-Variables-Types
2. Copy first code block
3. Copy second code block
4. Paste to verify

**Expected Results:**
- Each code block copies independently
- Second copy replaces first in clipboard
- Correct code is copied each time
- No interference between blocks

#### 7.4 Copy Button Without Hover (Touch Devices)
**Steps:**
1. Navigate to http://localhost:3000/lesson/01-Hello-World on touch device
   OR
2. Simulate touch by clicking directly on code block area

**Expected Results:**
- Copy button should be accessible on touch devices
- Button should appear when code block is focused or tapped
- Copy functionality works on mobile/tablet

---

### 8. Lesson Download Functionality

**Seed:** Default

#### 8.1 Download Single Lesson
**Steps:**
1. Navigate to http://localhost:3000/lesson/01-Hello-World
2. Wait for content to load
3. Click the "다운로드" (Download) button at top of content
4. Check browser downloads

**Expected Results:**
- Download initiates immediately
- File is named "01-Hello-World.md"
- File downloads to default download location
- File is a valid markdown file
- No errors in console

#### 8.2 Verify Downloaded Content
**Steps:**
1. Complete step 8.1
2. Open the downloaded file in a text editor

**Expected Results:**
- File contains complete markdown content of the lesson
- All headings, text, code blocks are present
- Markdown syntax is preserved
- File encoding is UTF-8 (Korean text displays correctly)
- No HTML or React artifacts in the file

#### 8.3 Download Different Lessons
**Steps:**
1. Navigate to http://localhost:3000/lesson/00-Overview
2. Click download button
3. Navigate to http://localhost:3000/lesson/05-Slices-Maps
4. Click download button
5. Check downloads

**Expected Results:**
- Two files are downloaded: "00-Overview.md" and "05-Slices-Maps.md"
- Each file contains correct lesson content
- Files are named according to lesson ID
- No file overwrites the other

#### 8.4 Download Button Visibility
**Steps:**
1. Navigate to http://localhost:3000/lesson/01-Hello-World
2. Resize browser to mobile width (< 640px)
3. Observe download button

**Expected Results:**
- Download button remains visible on all screen sizes
- On mobile, button shows icon only (text hidden with "hidden sm:inline")
- Icon is clearly visible
- Button is still clickable on mobile

---

### 9. Responsive Design - Mobile

**Seed:** Default

#### 9.1 Mobile Sidebar Toggle
**Steps:**
1. Resize browser to mobile width (< 1024px)
2. Navigate to http://localhost:3000
3. Observe sidebar visibility
4. Click hamburger menu icon in header
5. Observe sidebar

**Expected Results:**
- Initially, sidebar is hidden (translated off-screen)
- Hamburger menu icon is visible in header
- After click, sidebar slides in from left
- Dark overlay appears behind sidebar
- Sidebar is fully functional (scrollable, clickable)

#### 9.2 Mobile Sidebar Close
**Steps:**
1. Start with sidebar open on mobile (from 9.1)
2. Click the X (close) button in sidebar
3. Alternatively, click the dark overlay

**Expected Results:**
- Method 1: Sidebar slides out to left
- Method 2: Clicking overlay also closes sidebar
- Dark overlay fades out
- Main content is accessible again

#### 9.3 Mobile Sidebar Navigation
**Steps:**
1. Resize to mobile width
2. Open sidebar
3. Click on a lesson (e.g., "01-Hello-World")

**Expected Results:**
- Navigation occurs to selected lesson
- Sidebar automatically closes after selection
- Lesson content displays in main area
- User can immediately read content

#### 9.4 Mobile Content Layout
**Steps:**
1. Resize to mobile width
2. Navigate to http://localhost:3000/lesson/01-Hello-World
3. Scroll through content

**Expected Results:**
- Content takes full width (minus padding)
- Text is readable without horizontal scroll
- Code blocks are scrollable horizontally if needed
- Download button is accessible
- No layout breaks or overlaps

#### 9.5 Mobile Home Page Layout
**Steps:**
1. Resize to mobile width
2. Navigate to http://localhost:3000
3. Scroll through home page

**Expected Results:**
- Welcome section is centered and readable
- "학습 시작하기" button is prominent
- Feature cards stack vertically (grid becomes single column)
- Learning content list stacks vertically
- All content is accessible and readable

---

### 10. Responsive Design - Tablet

**Seed:** Default

#### 10.1 Tablet Layout (768px - 1024px)
**Steps:**
1. Resize browser to tablet width (768px)
2. Navigate to http://localhost:3000
3. Navigate to http://localhost:3000/lesson/01-Hello-World

**Expected Results:**
- Home page feature cards display in 3 columns (md:grid-cols-3)
- Sidebar behavior similar to mobile (hidden by default)
- Content area uses appropriate width
- All interactive elements are touch-friendly

---

### 11. Responsive Design - Desktop

**Seed:** Default

#### 11.1 Desktop Layout (>1024px)
**Steps:**
1. Resize browser to desktop width (>1024px)
2. Navigate to http://localhost:3000
3. Navigate to http://localhost:3000/lesson/01-Hello-World

**Expected Results:**
- Sidebar is always visible (sticky position)
- No hamburger menu in header
- Sidebar takes fixed 320px width (w-80)
- Main content area takes remaining space
- Sidebar is scrollable independently of main content
- Content max-width constrains readability (max-w-4xl)

#### 11.2 Desktop Sidebar Scroll Behavior
**Steps:**
1. Set to desktop width
2. Navigate to http://localhost:3000/lesson/01-Hello-World
3. Scroll main content area
4. Scroll sidebar independently

**Expected Results:**
- Main content scrolls independently
- Sidebar has its own scroll when lesson list is long
- Header remains sticky at top
- Sidebar position is sticky (stays in place during main scroll)

---

### 12. Loading States

**Seed:** Default

#### 12.1 Lesson Content Loading
**Steps:**
1. Navigate to http://localhost:3000/lesson/01-Hello-World
2. Immediately after navigation (before content loads)
3. Observe the loading indicator

**Expected Results:**
- Loading spinner appears in center of content area
- Spinner is animated (spinning animation)
- Spinner is styled with primary color
- Header and sidebar remain visible during loading
- No flash of wrong content

#### 12.2 TOC Loading
**Steps:**
1. Navigate to http://localhost:3000
2. Open developer tools > Network tab
3. Throttle network to "Slow 3G"
4. Refresh page
5. Observe sidebar

**Expected Results:**
- Page loads without errors
- Sidebar eventually populates with lesson list
- During load, sidebar shows empty list or loading state
- No JavaScript errors in console

---

### 13. Accessibility

**Seed:** Default

#### 13.1 Keyboard Navigation - Header
**Steps:**
1. Navigate to http://localhost:3000
2. Press Tab key repeatedly
3. Observe focus indicators

**Expected Results:**
- Tab focuses on hamburger menu (if mobile)
- Tab focuses on logo/home link
- Tab focuses on theme toggle button
- Visual focus indicators are clear
- Focus order is logical (left to right)

#### 13.2 Keyboard Navigation - Sidebar
**Steps:**
1. Navigate to http://localhost:3000
2. Tab to sidebar
3. Tab through lesson items

**Expected Results:**
- Tab reaches search input
- Tab reaches lesson checkboxes
- Tab reaches lesson links
- All elements are reachable via keyboard
- Focus indicators are visible

#### 13.3 Keyboard Navigation - Lesson Content
**Steps:**
1. Navigate to http://localhost:3000/lesson/01-Hello-World
2. Tab through content area
3. Tab to download button
4. Tab to code block copy buttons

**Expected Results:**
- Download button is reachable
- Copy buttons are keyboard accessible
- Links in content are focusable
- Focus order is logical (top to bottom)

#### 13.4 ARIA Labels
**Steps:**
1. Navigate to http://localhost:3000
2. Inspect header elements (menu button, theme toggle)
3. Inspect sidebar elements (close button, checkboxes)
4. Inspect content elements (download, copy buttons)

**Expected Results:**
- Menu button has aria-label="Toggle menu"
- Theme toggle has aria-label="Toggle theme"
- Close button has aria-label="Close sidebar"
- Checkboxes have descriptive aria-labels
- Download button has aria-label="Download lesson"
- Copy buttons have aria-label="Copy code"

#### 13.5 Screen Reader Compatibility
**Steps:**
1. Navigate to http://localhost:3000 with screen reader enabled
2. Navigate through page structure

**Expected Results:**
- Page structure is announced correctly
- Headings are properly nested and announced
- Interactive elements are announced with their purpose
- ARIA labels are read by screen reader
- Navigation is logical and understandable

#### 13.6 Keyboard Shortcuts
**Steps:**
1. Navigate to http://localhost:3000/lesson/01-Hello-World
2. Press Enter on focused lesson link
3. Press Space on focused checkbox
4. Press Enter on focused download button

**Expected Results:**
- Enter activates links (navigates to lesson)
- Space toggles checkboxes
- Enter activates buttons (download, copy)
- Standard keyboard interactions work as expected

---

### 14. Error Handling

**Seed:** Default

#### 14.1 Network Error During TOC Load
**Steps:**
1. Open developer tools > Network tab
2. Set network to "Offline"
3. Navigate to http://localhost:3000
4. Observe console and UI

**Expected Results:**
- Error is logged to console
- Application doesn't crash
- UI remains functional (header, theme toggle work)
- Sidebar shows empty or error state gracefully
- No unhandled promise rejections

#### 14.2 Network Error During Lesson Load
**Steps:**
1. Navigate to http://localhost:3000/lesson/01-Hello-World
2. Set network to "Offline" before navigation completes
3. Observe error handling

**Expected Results:**
- Error is logged to console
- Loading spinner eventually stops
- Error message may appear or content stays empty
- No application crash
- User can navigate back or try other actions

#### 14.3 Invalid Markdown Content
**Steps:**
1. Check if any lessons have malformed markdown
2. Navigate to a lesson with complex markdown

**Expected Results:**
- Markdown parser handles errors gracefully
- Malformed content doesn't break the page
- Partial content may render
- No JavaScript errors that break the app

#### 14.4 Download Failure
**Steps:**
1. Navigate to http://localhost:3000/lesson/01-Hello-World
2. Simulate download failure (block network after click)
3. Click download button

**Expected Results:**
- Error is caught and logged to console
- User may see browser-level error
- Application continues to function
- No crash or frozen UI

---

### 15. Browser Compatibility

**Seed:** Default

#### 15.1 Chrome/Edge (Chromium)
**Steps:**
1. Open application in Chrome or Edge
2. Test core functionality (navigation, theme, search, download, copy)

**Expected Results:**
- All features work correctly
- UI renders as designed
- No console errors
- Smooth animations and transitions

#### 15.2 Firefox
**Steps:**
1. Open application in Firefox
2. Test core functionality

**Expected Results:**
- All features work correctly
- Clipboard API works (copy functionality)
- Download works
- Theme toggle works
- CSS renders correctly

#### 15.3 Safari
**Steps:**
1. Open application in Safari (if available)
2. Test core functionality

**Expected Results:**
- All features work correctly
- Dark mode applies correctly
- LocalStorage works
- No WebKit-specific issues

---

### 16. Performance

**Seed:** Default

#### 16.1 Initial Page Load Time
**Steps:**
1. Open developer tools > Network tab
2. Navigate to http://localhost:3000
3. Measure load time

**Expected Results:**
- Page loads within 2-3 seconds on good connection
- First Contentful Paint < 1.5s
- Time to Interactive < 3s
- No blocking resources
- Assets load efficiently

#### 16.2 Lesson Navigation Performance
**Steps:**
1. Navigate to http://localhost:3000/lesson/01-Hello-World
2. Click to navigate to lesson 02
3. Click to navigate to lesson 03
4. Measure navigation speed

**Expected Results:**
- Navigation is near-instant (client-side routing)
- Content loads within 500ms
- No full page reloads
- Smooth transitions
- Loading spinner shows briefly if needed

#### 16.3 Search Performance
**Steps:**
1. Navigate to http://localhost:3000
2. Type quickly in search field
3. Observe filtering performance

**Expected Results:**
- Search filters instantly as you type
- No lag or delay
- Results update in real-time
- Smooth user experience

#### 16.4 Memory Usage
**Steps:**
1. Open developer tools > Performance/Memory
2. Navigate through multiple lessons (10+)
3. Monitor memory usage

**Expected Results:**
- No significant memory leaks
- Memory usage stays reasonable
- Application remains responsive
- No degradation over time

---

### 17. Data Persistence

**Seed:** Default

#### 17.1 Theme Persistence
**Steps:**
1. Navigate to http://localhost:3000
2. Toggle to dark mode
3. Close browser
4. Reopen and navigate to application

**Expected Results:**
- Dark mode is still active
- Theme preference is loaded from localStorage
- No flash of light theme

#### 17.2 Progress Persistence
**Steps:**
1. Navigate to http://localhost:3000
2. Mark lessons 00, 01, 02, 03 as complete
3. Close browser tab
4. Open new tab and navigate to application

**Expected Results:**
- Lessons 00-03 are still marked complete
- Progress shows 4/15
- Progress bar shows correct percentage
- Data persists across sessions

#### 17.3 LocalStorage Inspection
**Steps:**
1. Navigate to http://localhost:3000
2. Open developer tools > Application > Local Storage
3. Mark a lesson complete and toggle theme
4. Observe localStorage entries

**Expected Results:**
- `theme` key exists with value "light" or "dark"
- `progress` key exists with JSON object
- Data structure matches expected format
- Data updates in real-time when changes occur

#### 17.4 Clear LocalStorage
**Steps:**
1. Complete steps 17.1 and 17.2
2. Open developer tools > Application > Local Storage
3. Clear all localStorage
4. Refresh page

**Expected Results:**
- Theme resets to default (light mode)
- All lesson progress resets to 0/15
- Application initializes with default values
- No errors occur

---

### 18. Edge Cases and Boundary Conditions

**Seed:** Default

#### 18.1 Very Long Search Query
**Steps:**
1. Navigate to http://localhost:3000
2. Paste a very long string (500+ characters) into search field

**Expected Results:**
- Input accepts the text
- Search filters work (likely no results)
- No UI breaks or overflow issues
- Performance remains acceptable

#### 18.2 Rapid Theme Toggling
**Steps:**
1. Navigate to http://localhost:3000
2. Click theme toggle button 10 times rapidly

**Expected Results:**
- Theme toggles correctly
- No visual glitches or flashing
- Final state is correct
- LocalStorage updates correctly
- No errors in console

#### 18.3 Rapid Navigation
**Steps:**
1. Navigate to http://localhost:3000
2. Quickly click through multiple lessons in succession

**Expected Results:**
- Each navigation completes or is cancelled appropriately
- No race conditions
- Final lesson displays correctly
- No stale content displayed
- fetching.current ref prevents duplicate fetches

#### 18.4 Rapid Checkbox Toggling
**Steps:**
1. Navigate to http://localhost:3000
2. Click a lesson checkbox 10 times rapidly

**Expected Results:**
- Checkbox toggles correctly
- Progress updates accurately
- LocalStorage updates correctly
- No state inconsistencies
- Final state is correct

#### 18.5 Open Sidebar While Loading
**Steps:**
1. Navigate to http://localhost:3000/lesson/01-Hello-World
2. Immediately click hamburger menu (on mobile) before load completes

**Expected Results:**
- Sidebar opens correctly
- TOC may be loading or loaded
- No conflicts with content loading
- Both load independently

#### 18.6 Browser Back/Forward
**Steps:**
1. Navigate to http://localhost:3000
2. Click "학습 시작하기" to go to lesson 00
3. Navigate to lesson 05
4. Click browser back button twice
5. Click browser forward button

**Expected Results:**
- Back button: lesson 05 → lesson 00 → home page
- Forward button: home → lesson 00
- Sidebar highlights correct active lesson
- Content loads correctly for each navigation
- URL stays in sync

---

### 19. Content Integrity

**Seed:** Default

#### 19.1 Verify All Lessons Load
**Steps:**
1. Navigate to each lesson URL manually:
   - http://localhost:3000/lesson/00-Overview
   - http://localhost:3000/lesson/01-Hello-World
   - http://localhost:3000/lesson/02-Variables-Types
   - http://localhost:3000/lesson/03-Control-Flow
   - http://localhost:3000/lesson/04-Functions
   - http://localhost:3000/lesson/05-Slices-Maps
   - http://localhost:3000/lesson/06-Structs-Methods
   - http://localhost:3000/lesson/07-Interfaces
   - http://localhost:3000/lesson/08-Error-Handling
   - http://localhost:3000/lesson/09-Goroutines-Channels
   - http://localhost:3000/lesson/10-Context
   - http://localhost:3000/lesson/11-Testing
   - http://localhost:3000/lesson/12-Web-Servers
   - http://localhost:3000/lesson/13-JSON-REST
   - http://localhost:3000/lesson/14-Database

**Expected Results:**
- All 15 lessons load without errors
- Each has appropriate title
- Each has content (not empty)
- Each has download button
- Code blocks render correctly in each

#### 19.2 Verify TOC Matches Lessons
**Steps:**
1. Navigate to http://localhost:3000
2. Count sidebar items
3. Verify each sidebar item links to existing lesson

**Expected Results:**
- Sidebar shows exactly 15 lessons
- Each lesson ID in sidebar corresponds to a valid lesson file
- Order matches expected sequence (00-14)
- All links work

#### 19.3 Code Examples Are Valid Go
**Steps:**
1. Navigate through lessons 01-14
2. Review code blocks
3. Check for syntax errors or obvious issues

**Expected Results:**
- Code blocks contain valid Go syntax
- No obvious typos or syntax errors
- Code is properly formatted
- Comments are appropriate
- Examples are educational and relevant

---

### 20. Security and XSS Prevention

**Seed:** Default

#### 20.1 Markdown XSS Prevention
**Steps:**
1. Check if markdown parser sanitizes HTML
2. Look for any script tags in rendered content
3. Verify markdown rendering is safe

**Expected Results:**
- html-react-parser should handle content safely
- No raw HTML execution
- Script tags (if any) are escaped or removed
- User-generated content would be sanitized

#### 20.2 LocalStorage Security
**Steps:**
1. Open developer tools > Application > Local Storage
2. Manually edit localStorage entries with malicious values
3. Refresh page

**Expected Results:**
- Application validates/sanitizes localStorage data
- Malformed data doesn't break the app
- Application falls back to defaults if data is invalid
- No code execution from localStorage

---

## Test Data Requirements

- **Lessons**: 15 markdown files (00-Overview.md through 14-Database.md)
- **TOC**: Valid TOC.md file with all lesson references
- **Content**: Each lesson should have:
  - Title (h1)
  - Description/explanation text
  - At least one code block
  - Korean language content

## Testing Environment

- **URL**: http://localhost:3000
- **Browsers**: Chrome, Firefox, Safari, Edge
- **Screen Sizes**:
  - Mobile: 375px, 414px
  - Tablet: 768px, 1024px
  - Desktop: 1280px, 1440px, 1920px
- **Network Conditions**: Fast 3G, Slow 3G, Offline
- **Devices**: Desktop, Mobile (iOS/Android), Tablet

## Success Criteria

A test scenario passes if:
1. All steps can be completed without errors
2. All expected results are achieved
3. No console errors appear (unless testing error handling)
4. UI remains responsive and functional
5. Data persists correctly where expected
6. Accessibility requirements are met

## Known Limitations

- Application requires JavaScript enabled
- LocalStorage required for theme and progress features
- Clipboard API required for copy functionality
- Markdown files must be properly formatted
- Network required for initial load and lesson fetching

## Severity Levels

- **Critical**: Application crash, data loss, core features broken
- **High**: Major feature not working, significant UX issues
- **Medium**: Minor feature issues, cosmetic bugs
- **Low**: Edge case issues, minor inconsistencies

---

## Test Execution Notes

- Tests should be run on a fresh browser session when testing persistence
- Clear localStorage between test runs when testing default states
- Use browser DevTools for network throttling and debugging
- Take screenshots of any visual issues
- Document console errors with full stack traces
- Test on multiple browsers for compatibility scenarios

## Future Test Considerations

- E2E automation with Playwright or Cypress
- Visual regression testing
- Performance benchmarking
- Internationalization testing (if English version added)
- PWA functionality testing (if added)
- API testing (if backend is added)
