# Go Learning Service - Test Execution Checklist

Quick reference checklist for manual testing. For detailed steps, see [TEST_PLAN.md](TEST_PLAN.md).

---

## Pre-Test Setup

- [ ] Application is running at http://localhost:3000
- [ ] Browser DevTools are open (Console, Network, Application tabs ready)
- [ ] Clear browser cache and localStorage (for clean test)
- [ ] Note: Browser, OS, screen resolution for test report

---

## 1. Initial Load & Home Page ✓

- [ ] 1.1 Home page loads without errors
- [ ] 1.2 Sidebar TOC loads with all 15 lessons
- [ ] 1.3 "학습 시작하기" button navigates to first lesson

---

## 2. Navigation & Routing ✓

- [ ] 2.1 Click lesson in sidebar → navigates correctly
- [ ] 2.2 Direct URL navigation works (e.g., /lesson/03-Control-Flow)
- [ ] 2.3 Logo click returns to home page
- [ ] 2.4 Invalid lesson ID shows error message

---

## 3. Theme Toggle ✓

- [ ] 3.1 Toggle to dark mode (UI updates)
- [ ] 3.2 Toggle back to light mode
- [ ] 3.3 Theme persists across page navigation
- [ ] 3.4 Theme persists after page refresh

---

## 4. Sidebar Search ✓

- [ ] 4.1 Search "hello" → filters to Hello World lesson
- [ ] 4.2 Search "s" → shows multiple results
- [ ] 4.3 Search "xyz12345" → shows no results gracefully
- [ ] 4.4 Clear search → all lessons reappear
- [ ] 4.5 Search is case-insensitive (HELLO = hello)

---

## 5. Progress Tracking ✓

- [ ] 5.1 Click checkbox → lesson marked complete (progress: 1/15)
- [ ] 5.2 Mark 5 lessons complete → progress: 5/15, bar shows ~33%
- [ ] 5.3 Uncheck a lesson → progress decrements
- [ ] 5.4 Progress persists across navigation
- [ ] 5.5 Progress persists after page refresh
- [ ] 5.6 Mark all 15 lessons → progress: 15/15, bar shows 100%

---

## 6. Lesson Content Rendering ✓

- [ ] 6.1 Lesson title and content display correctly
- [ ] 6.2 Code blocks have syntax highlighting
- [ ] 6.3 Multiple code blocks render independently
- [ ] 6.4 Markdown features render (bold, italic, lists, headings)
- [ ] 6.5 Korean text displays correctly

---

## 7. Code Copy Functionality ✓

- [ ] 7.1 Hover over code block → copy button appears
- [ ] 7.2 Click copy → icon changes to checkmark, reverts after 2s
- [ ] 7.3 Paste copied code → matches original
- [ ] 7.4 Each code block copies independently

---

## 8. Lesson Download ✓

- [ ] 8.1 Click download button → file downloads (e.g., 01-Hello-World.md)
- [ ] 8.2 Open downloaded file → content is valid markdown
- [ ] 8.3 Download different lessons → each gets unique filename
- [ ] 8.4 Download button visible on mobile (icon only)

---

## 9. Responsive - Mobile (< 1024px) ✓

- [ ] 9.1 Resize to mobile → hamburger menu appears, sidebar hidden
- [ ] 9.2 Click hamburger → sidebar slides in with overlay
- [ ] 9.3 Click X or overlay → sidebar closes
- [ ] 9.4 Click lesson in mobile sidebar → navigates and sidebar closes
- [ ] 9.5 Content is readable on mobile (no horizontal scroll)

---

## 10. Responsive - Desktop (> 1024px) ✓

- [ ] 11.1 Sidebar always visible, no hamburger menu
- [ ] 11.2 Sidebar scrolls independently from main content

---

## 11. Loading States ✓

- [ ] 12.1 Navigate to lesson → loading spinner appears briefly
- [ ] 12.2 Slow network (throttle to Slow 3G) → spinner visible longer

---

## 12. Accessibility ✓

- [ ] 13.1 Tab through header → focus on menu, logo, theme toggle
- [ ] 13.2 Tab through sidebar → focus on search, checkboxes, links
- [ ] 13.3 Tab through content → focus on download, copy buttons
- [ ] 13.4 All interactive elements have ARIA labels
- [ ] 13.5 Screen reader announces elements correctly (if available)
- [ ] 13.6 Enter/Space activate buttons and links

---

## 13. Error Handling ✓

- [ ] 14.1 Set network offline → TOC fails gracefully (no crash)
- [ ] 14.2 Load lesson offline → error logged, no crash
- [ ] 14.3 Invalid lesson URL → shows "레슨을 찾을 수 없습니다"
- [ ] 14.4 Download failure → error logged, app continues

---

## 14. Browser Compatibility ✓

- [ ] 15.1 Test in Chrome/Edge (all features work)
- [ ] 15.2 Test in Firefox (all features work)
- [ ] 15.3 Test in Safari (all features work, if available)

---

## 15. Performance ✓

- [ ] 16.1 Initial page load < 3 seconds
- [ ] 16.2 Lesson navigation is near-instant (< 500ms)
- [ ] 16.3 Search filters instantly as you type
- [ ] 16.4 No memory leaks after navigating through 10+ lessons

---

## 16. Data Persistence ✓

- [ ] 17.1 Set dark theme → close browser → reopen → still dark
- [ ] 17.2 Mark lessons complete → close browser → reopen → still complete
- [ ] 17.3 Check localStorage (theme and progress keys exist)
- [ ] 17.4 Clear localStorage → defaults restored (light theme, 0/15 progress)

---

## 17. Edge Cases ✓

- [ ] 18.1 Paste 500+ chars in search → no UI breaks
- [ ] 18.2 Rapidly toggle theme 10x → works correctly
- [ ] 18.3 Rapidly navigate lessons → no race conditions
- [ ] 18.4 Rapidly toggle checkbox 10x → final state correct
- [ ] 18.5 Browser back/forward → navigation works correctly

---

## 18. Content Integrity ✓

- [ ] 19.1 Manually visit all 15 lesson URLs → all load correctly
- [ ] 19.2 Sidebar has exactly 15 items matching lesson files
- [ ] 19.3 Code examples appear valid (no obvious syntax errors)

---

## 19. Security ✓

- [ ] 20.1 Markdown content doesn't execute scripts (XSS protection)
- [ ] 20.2 Edit localStorage with malicious data → app doesn't break

---

## Critical User Journeys

### Journey 1: First-Time Learner
- [ ] Land on home → Click "학습 시작하기" → Read lesson → Copy code → Mark complete → Next lesson
- **Result**: _______________

### Journey 2: Returning Student
- [ ] Open app → See saved progress → Search lesson → Download lesson → Mark complete
- **Result**: _______________

### Journey 3: Mobile User
- [ ] Access on mobile → Open sidebar → Search → Navigate → Read → Copy → Complete
- **Result**: _______________

---

## Test Summary

**Date**: _______________
**Tester**: _______________
**Browser**: _______________
**OS**: _______________
**Screen Size**: _______________

**Total Tests**: 80+
**Passed**: _____ / _____
**Failed**: _____ / _____
**Blocked**: _____ / _____
**Skipped**: _____ / _____

---

## Issues Found

| # | Severity | Description | Steps to Reproduce | Expected | Actual |
|---|----------|-------------|-------------------|----------|--------|
| 1 | | | | | |
| 2 | | | | | |
| 3 | | | | | |

**Severity**: Critical / High / Medium / Low

---

## Notes

_(Add any additional observations, performance metrics, or concerns)_

---

## Sign-Off

- [ ] All critical tests passed
- [ ] All high-priority tests passed
- [ ] Issues documented and reported
- [ ] Ready for production / Needs fixes

**Tester Signature**: _______________
**Date**: _______________
