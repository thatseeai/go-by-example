# Go Learning Service - Test Scenarios by User Role

This document organizes test scenarios by user perspective and goals.

---

## User Role 1: First-Time Learner

**Persona**: Kim, a developer new to Go, wants to learn through examples
**Device**: Desktop computer (1920x1080)
**Browser**: Chrome

### Scenario 1.1: Initial Discovery
**Goal**: Understand what the application offers

**Steps:**
1. Navigate to http://localhost:3000
2. Read the welcome page
3. Review the three feature cards
4. Read the learning content list
5. Click "학습 시작하기"

**Expected Outcome:**
- Clear value proposition is visible
- Features are understandable (실습 중심, 체계적인 학습, 진행률 추적)
- Learning topics are listed (기본 문법, 함수, 동시성, etc.)
- Button navigates to first lesson (00-Overview)

**Success Criteria:**
- User understands the application purpose
- User knows how to start learning
- UI is welcoming and clear

---

### Scenario 1.2: First Lesson Experience
**Goal**: Read and understand the first lesson

**Steps:**
1. Starting from lesson 00-Overview
2. Read the lesson title and content
3. Scroll through the entire lesson
4. Locate code examples
5. Find the download button

**Expected Outcome:**
- Content is well-formatted and readable
- Korean text is clear and grammatically correct
- Code examples have syntax highlighting
- Download button is visible at top
- Can understand what the lesson covers

**Success Criteria:**
- User can read content comfortably
- Code examples are helpful
- User knows how to progress

---

### Scenario 1.3: Interactive Code Learning
**Goal**: Try out code examples

**Steps:**
1. Navigate to lesson 01-Hello-World
2. Locate the first code block
3. Hover over code block
4. Click the copy button
5. Open a local text editor or terminal
6. Paste the code

**Expected Outcome:**
- Code block has clear copy button on hover
- Copy provides visual feedback (checkmark icon)
- Pasted code is properly formatted
- Code is exactly what appeared in the lesson
- User can easily try the code

**Success Criteria:**
- Copy functionality works smoothly
- User can quickly experiment with code
- No frustration with copying code

---

### Scenario 1.4: Progressive Learning
**Goal**: Move through lessons systematically

**Steps:**
1. Complete reading lesson 01-Hello-World
2. Mark the lesson as complete (checkbox)
3. Navigate to lesson 02-Variables-Types using sidebar
4. Mark lesson 02 as complete
5. Observe progress indicator

**Expected Outcome:**
- Checkboxes are easy to find and click
- Visual feedback when marking complete (checkmark appears)
- Progress counter updates: 2/15
- Progress bar shows ~13% completion
- User feels sense of accomplishment

**Success Criteria:**
- Progress tracking motivates continued learning
- Easy to mark lessons complete
- Visual progress is encouraging

---

### Scenario 1.5: Finding Specific Topics
**Goal**: Quickly locate a lesson about functions

**Steps:**
1. Navigate to home or any lesson page
2. Look at sidebar
3. Use search box
4. Type "함수" or "function"
5. Click on found lesson

**Expected Outcome:**
- Search filters immediately
- Finds "04-Functions" lesson
- Can click to navigate
- Search is intuitive

**Success Criteria:**
- User can quickly find topics
- Search works in Korean
- Navigation is seamless

---

## User Role 2: Returning Student

**Persona**: Lee, continues learning Go, has completed some lessons
**Device**: Laptop (1440x900)
**Browser**: Firefox

### Scenario 2.1: Resume Learning
**Goal**: Return to application and see previous progress

**Steps:**
1. Had previously marked lessons 00-03 as complete
2. Close browser completely
3. Wait 1 hour (simulate later session)
4. Reopen browser
5. Navigate to http://localhost:3000
6. Check sidebar

**Expected Outcome:**
- Progress is preserved: 4/15
- Lessons 00-03 show checkmarks
- Progress bar shows ~27%
- Can immediately continue where left off

**Success Criteria:**
- No need to re-mark progress
- Application remembers user's state
- Seamless continuation

---

### Scenario 2.2: Download for Offline Study
**Goal**: Save lessons to study without internet

**Steps:**
1. Navigate to lesson 05-Slices-Maps
2. Click download button
3. Navigate to lesson 09-Goroutines-Channels
4. Click download button
5. Check Downloads folder
6. Open downloaded files in text editor

**Expected Outcome:**
- Two .md files downloaded: 05-Slices-Maps.md, 09-Goroutines-Channels.md
- Files contain complete lesson content
- Markdown is readable in any text editor
- Korean characters display correctly
- Can study offline

**Success Criteria:**
- Easy to download any lesson
- Files are useful for offline study
- Content is complete and accurate

---

### Scenario 2.3: Switching Themes for Comfort
**Goal**: Use dark mode for evening study session

**Steps:**
1. Open application in evening (light mode)
2. Eyes feel strained by bright white background
3. Click theme toggle in header
4. Continue studying
5. Navigate through several lessons
6. Close and reopen browser

**Expected Outcome:**
- Theme switches to dark mode immediately
- All UI elements update (header, sidebar, content)
- Dark mode is easier on eyes
- Theme persists across navigation
- Theme persists after closing/reopening

**Success Criteria:**
- User comfort is improved
- Theme preference is remembered
- Consistent experience

---

### Scenario 2.4: Review Completed Lessons
**Goal**: Go back to review concepts from earlier lessons

**Steps:**
1. User has completed lessons 00-07
2. Wants to review lesson 03-Control-Flow
3. Clicks on lesson 03 in sidebar
4. Reads through content again
5. Unmarks lesson as complete to re-study

**Expected Outcome:**
- Can navigate to any previous lesson
- Content is still available
- Can uncheck to indicate need for review
- Progress decrements appropriately
- Flexible learning path

**Success Criteria:**
- User can revisit any lesson
- No restrictions on navigation
- Progress tracking is flexible

---

## User Role 3: Mobile Learner

**Persona**: Park, studies Go during commute on phone
**Device**: iPhone 13 (390x844)
**Browser**: Safari

### Scenario 3.1: Mobile First Visit
**Goal**: Access and navigate the learning platform on mobile

**Steps:**
1. Navigate to http://localhost:3000 on mobile
2. Observe layout
3. Try to access table of contents
4. Click hamburger menu icon
5. Browse lesson list

**Expected Outcome:**
- Page loads and is mobile-optimized
- Hamburger menu is visible in header
- Clicking menu opens sidebar from left
- Dark overlay appears behind sidebar
- Lesson list is scrollable
- Can navigate to any lesson

**Success Criteria:**
- Mobile UI is usable
- Sidebar is accessible
- Touch targets are appropriately sized

---

### Scenario 3.2: Reading on Small Screen
**Goal**: Read lesson content comfortably on phone

**Steps:**
1. Navigate to lesson 02-Variables-Types on mobile
2. Read through content
3. Scroll down to code examples
4. Try to read code blocks
5. Scroll horizontally if needed

**Expected Outcome:**
- Text is readable without zooming
- No horizontal scroll for text
- Code blocks may scroll horizontally (acceptable)
- Font size is appropriate
- Line length is comfortable
- Spacing is adequate

**Success Criteria:**
- Content is mobile-friendly
- Reading experience is pleasant
- No layout issues

---

### Scenario 3.3: Copying Code on Mobile
**Goal**: Copy code example to study or try

**Steps:**
1. On mobile, navigate to lesson 01-Hello-World
2. Find code block
3. Tap on code block area
4. Locate copy button
5. Tap copy button
6. Switch to notes app
7. Paste code

**Expected Outcome:**
- Copy button is accessible on mobile (doesn't require hover)
- Tapping copy button works
- Visual feedback appears
- Code is copied to clipboard
- Can paste in other apps

**Success Criteria:**
- Copy functionality works on touch devices
- Button is touch-friendly
- Gesture is intuitive

---

### Scenario 3.4: Managing Progress on Mobile
**Goal**: Mark lessons complete while studying on phone

**Steps:**
1. On mobile, open sidebar
2. Locate lesson checkboxes
3. Tap checkbox for current lesson
4. Close sidebar
5. Verify progress counter updated

**Expected Outcome:**
- Checkboxes are large enough to tap accurately
- Single tap toggles checkbox
- Visual feedback immediate
- Progress updates
- No accidental clicks

**Success Criteria:**
- Touch targets are appropriately sized (at least 44x44px)
- Checkbox interaction is smooth
- Progress tracking works on mobile

---

### Scenario 3.5: Sidebar Workflow on Mobile
**Goal**: Efficiently navigate lessons on small screen

**Steps:**
1. Reading lesson 05 on mobile
2. Want to skip to lesson 08
3. Tap hamburger menu
4. Sidebar slides in
5. Tap lesson 08
6. Sidebar closes automatically
7. Lesson 08 loads

**Expected Outcome:**
- Sidebar opens quickly
- Can select lesson
- Sidebar auto-closes after selection
- Content loads immediately
- Workflow is efficient

**Success Criteria:**
- Minimal taps required
- Auto-close improves UX
- Navigation is fast

---

## User Role 4: Accessibility User

**Persona**: Choi, uses screen reader and keyboard navigation
**Device**: Desktop with NVDA screen reader
**Browser**: Firefox

### Scenario 4.1: Keyboard Navigation
**Goal**: Navigate entire application using only keyboard

**Steps:**
1. Navigate to http://localhost:3000
2. Use only Tab, Shift+Tab, Enter, Space keys
3. Navigate through header elements
4. Navigate to sidebar
5. Navigate to lessons
6. Navigate to content area
7. Interact with all buttons

**Expected Outcome:**
- All interactive elements are reachable via Tab
- Focus indicators are clearly visible
- Tab order is logical (left-to-right, top-to-bottom)
- Enter activates links and buttons
- Space toggles checkboxes
- Can complete all major tasks without mouse

**Success Criteria:**
- Full keyboard accessibility
- Clear focus indicators
- Logical tab order
- Standard keyboard interactions work

---

### Scenario 4.2: Screen Reader Usage
**Goal**: Use screen reader to understand and navigate content

**Steps:**
1. Launch screen reader (NVDA/JAWS/VoiceOver)
2. Navigate to application
3. Listen to page structure
4. Navigate through headings
5. Navigate through sidebar items
6. Interact with buttons
7. Read lesson content

**Expected Outcome:**
- Page title is announced
- Headings are properly nested and announced
- Links announce their destination
- Buttons announce their purpose
- ARIA labels provide context
- Lesson content is readable
- Code blocks are announced

**Success Criteria:**
- Screen reader can navigate entire app
- All interactive elements are properly labeled
- Content structure is clear
- User can accomplish all tasks

---

### Scenario 4.3: High Contrast and Visual Customization
**Goal**: Use application with high contrast or custom styles

**Steps:**
1. Enable browser high contrast mode
2. Navigate to application
3. Toggle dark mode
4. Check all UI elements
5. Verify readability

**Expected Outcome:**
- Content is visible in high contrast mode
- Color contrast meets WCAG AA standards
- Dark mode has sufficient contrast
- No content disappears
- Interactive elements are distinguishable

**Success Criteria:**
- WCAG 2.1 AA compliance
- Readable in various visual modes
- User can customize experience

---

## User Role 5: Power User / Developer

**Persona**: Jung, experienced developer learning Go, wants efficient workflow
**Device**: Desktop with multiple monitors (2560x1440)
**Browser**: Chrome with DevTools

### Scenario 5.1: Rapid Content Consumption
**Goal**: Quickly review all lessons to assess content

**Steps:**
1. Navigate to application
2. Open sidebar
3. Quickly click through all 15 lessons
4. Skim each lesson
5. Download selected lessons for later

**Expected Outcome:**
- Navigation between lessons is instant
- No loading delays
- Content loads smoothly
- Can quickly assess all content
- Download multiple lessons efficiently

**Success Criteria:**
- High performance navigation
- Minimal loading states
- Efficient workflow

---

### Scenario 5.2: Content Verification
**Goal**: Verify code examples are correct and runnable

**Steps:**
1. Navigate through lessons with code
2. Copy each code block
3. Save to .go files
4. Attempt to run with `go run`
5. Verify outputs

**Expected Outcome:**
- All code examples are syntactically correct
- Code runs without errors
- Outputs match expectations
- Examples are educational and practical

**Success Criteria:**
- 100% of code examples are valid
- Code teaches correct Go practices
- Examples are runnable

---

### Scenario 5.3: Testing Application Limits
**Goal**: Test edge cases and boundaries

**Steps:**
1. Rapidly toggle theme 20 times
2. Mark all lessons complete, then unmark all
3. Navigate back/forward rapidly in browser
4. Enter very long search queries
5. Test on slow network (throttled)
6. Clear localStorage mid-session

**Expected Outcome:**
- Application remains stable
- No crashes or errors
- State management handles edge cases
- Performance remains acceptable
- Graceful degradation on slow network

**Success Criteria:**
- Application is robust
- No critical bugs under stress
- Good error handling

---

### Scenario 5.4: Developer Inspection
**Goal**: Analyze application architecture and performance

**Steps:**
1. Open DevTools
2. Check Console for errors
3. Monitor Network requests
4. Inspect localStorage structure
5. Profile performance
6. Audit accessibility

**Expected Outcome:**
- No console errors
- Efficient network usage (minimal requests)
- localStorage structure is clean
- Performance is optimized
- Lighthouse score is good
- Accessibility audit passes

**Success Criteria:**
- Clean codebase behavior
- Optimized performance
- Good architecture

---

## User Role 6: Content Creator / Instructor

**Persona**: Han, wants to use platform to teach students
**Device**: Desktop/Laptop
**Browser**: Multiple browsers for testing

### Scenario 6.1: Content Review
**Goal**: Review all lessons for teaching quality

**Steps:**
1. Navigate through all 15 lessons
2. Read each lesson completely
3. Verify Korean grammar and clarity
4. Check code examples for correctness
5. Assess pedagogical flow

**Expected Outcome:**
- All lessons are complete
- Content is accurate
- Korean is grammatically correct
- Lessons build on each other logically
- Examples are clear and instructive

**Success Criteria:**
- Content quality is high
- Suitable for teaching
- Proper progression

---

### Scenario 6.2: Student Progress Monitoring (Hypothetical)
**Goal**: Understand how students would interact

**Steps:**
1. Simulate student workflow
2. Mark lessons complete as if learning
3. Test search to find topics
4. Download lessons for offline study
5. Test on various devices

**Expected Outcome:**
- Student workflow is smooth
- Progress tracking is intuitive
- Search helps find topics
- Download enables flexible study
- Works on various devices

**Success Criteria:**
- Platform is student-friendly
- Features support learning
- Cross-device compatibility

---

## Cross-Role Scenarios

### Scenario X.1: Browser Compatibility
**Goal**: Ensure consistent experience across browsers

**Users**: All roles
**Steps:**
1. Test identical workflow in Chrome
2. Repeat in Firefox
3. Repeat in Safari (if available)
4. Repeat in Edge

**Expected Outcome:**
- All features work in all browsers
- UI renders consistently
- No browser-specific bugs
- LocalStorage works everywhere

**Success Criteria:**
- 100% feature parity across browsers
- Consistent user experience

---

### Scenario X.2: Performance Under Load
**Goal**: Test performance with extensive usage

**Users**: Power users, returning students
**Steps:**
1. Mark all 15 lessons complete
2. Navigate through all lessons multiple times
3. Perform many searches
4. Download all lessons
5. Toggle theme repeatedly
6. Check memory usage over time

**Expected Outcome:**
- Application remains responsive
- No memory leaks
- Performance doesn't degrade
- All features continue working

**Success Criteria:**
- Stable performance over time
- No degradation with usage

---

### Scenario X.3: Data Integrity
**Goal**: Ensure user data is preserved correctly

**Users**: All roles
**Steps:**
1. Set theme to dark
2. Mark specific lessons complete (e.g., 1, 3, 5, 7, 9)
3. Close browser completely
4. Clear browser cache (but not localStorage)
5. Reopen browser
6. Navigate to application

**Expected Outcome:**
- Theme is still dark
- Exact lessons (1, 3, 5, 7, 9) are still marked complete
- Progress shows 5/15
- No data loss

**Success Criteria:**
- 100% data persistence
- Reliable storage
- Consistent state

---

## Summary of Role-Based Testing

| Role | Primary Goals | Critical Tests | Device Focus |
|------|--------------|----------------|--------------|
| First-Time Learner | Understand platform, start learning | Initial load, first lesson, code copy | Desktop |
| Returning Student | Resume progress, continue learning | Progress persistence, download, theme | Desktop/Laptop |
| Mobile Learner | Learn on-the-go | Mobile UI, touch interactions, responsive | Mobile phone |
| Accessibility User | Navigate with assistive tech | Keyboard nav, screen reader, ARIA | Desktop |
| Power User | Efficient workflow, verify content | Performance, edge cases, code quality | Desktop |
| Content Creator | Assess teaching quality | Content review, student simulation | Multi-device |

---

**Total Role-Based Scenarios**: 21
**Total User Roles**: 6
**Cross-Role Scenarios**: 3

These scenarios complement the detailed test plan and provide user-centric perspectives on testing.
