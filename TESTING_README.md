# Testing Documentation

This directory contains comprehensive testing documentation for the "Go 예제로 배우는 웹 학습 서비스" (Go Learning by Example Web Service).

---

## Documentation Files

### 📋 [TEST_PLAN.md](TEST_PLAN.md)
**Comprehensive Test Plan - MAIN DOCUMENT**

The complete, detailed test plan with 20 categories and 80+ individual test scenarios. Each scenario includes:
- Step-by-step instructions
- Expected results
- Success criteria
- Technical details

**Use this for**: Detailed test execution, understanding exact test steps, reference documentation

**Sections**:
- Application Overview
- 20 Test Categories (Initial Load, Navigation, Theme, Search, Progress, Content, Copy, Download, Responsive Design, Loading States, Accessibility, Error Handling, Browser Compatibility, Performance, Data Persistence, Edge Cases, Content Integrity, Security)
- Test Data Requirements
- Testing Environment
- Success Criteria

---

### 📊 [TEST_SUMMARY.md](TEST_SUMMARY.md)
**Executive Summary**

High-level overview of the test plan, perfect for stakeholders and project managers.

**Use this for**: Quick understanding of test coverage, reporting to management, project planning

**Sections**:
- Test Coverage Summary (table format)
- Key Features Tested
- Test Execution Strategy
- Critical User Journeys
- Success Metrics
- Known Issues & Limitations

---

### ✅ [TEST_CHECKLIST.md](TEST_CHECKLIST.md)
**Test Execution Checklist**

Quick reference checklist for manual test execution. Print-friendly format with checkboxes.

**Use this for**: Daily test execution, tracking progress, quick reference during testing

**Sections**:
- Pre-Test Setup
- 19 Category Checklists (with checkboxes)
- Critical User Journeys
- Test Summary (to fill in)
- Issues Found (table)
- Sign-off Section

---

### 👥 [TEST_SCENARIOS_BY_ROLE.md](TEST_SCENARIOS_BY_ROLE.md)
**Role-Based Test Scenarios**

Test scenarios organized by user persona and goals. Focuses on user experience and workflows.

**Use this for**: User acceptance testing, UX validation, understanding user perspectives

**Sections**:
- 6 User Roles:
  1. First-Time Learner (desktop)
  2. Returning Student (laptop)
  3. Mobile Learner (phone)
  4. Accessibility User (screen reader)
  5. Power User / Developer
  6. Content Creator / Instructor
- 21+ Role-Based Scenarios
- Cross-Role Scenarios

---

## Quick Start Guide

### For Test Execution

1. **Start here**: Read [TEST_SUMMARY.md](TEST_SUMMARY.md) for overview
2. **Print this**: [TEST_CHECKLIST.md](TEST_CHECKLIST.md) for daily use
3. **Reference this**: [TEST_PLAN.md](TEST_PLAN.md) for detailed steps
4. **Consider this**: [TEST_SCENARIOS_BY_ROLE.md](TEST_SCENARIOS_BY_ROLE.md) for UX testing

### For Stakeholders

1. **Executive Summary**: [TEST_SUMMARY.md](TEST_SUMMARY.md)
2. **User Experience**: [TEST_SCENARIOS_BY_ROLE.md](TEST_SCENARIOS_BY_ROLE.md)
3. **Detailed Plan**: [TEST_PLAN.md](TEST_PLAN.md) (optional)

### For Developers

1. **Full Details**: [TEST_PLAN.md](TEST_PLAN.md)
2. **Edge Cases**: TEST_PLAN.md → Section 18
3. **Performance**: TEST_PLAN.md → Section 16
4. **Accessibility**: TEST_PLAN.md → Section 13

---

## Test Execution Workflow

```
┌─────────────────────────────────────────────────────────────┐
│ 1. Pre-Test Setup                                           │
│    □ Application running at http://localhost:3000           │
│    □ Clear cache and localStorage                           │
│    □ Open DevTools (Console, Network, Application)          │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│ 2. Phase 1: Critical Tests (Must Pass)                      │
│    □ Initial Load & Home Page                               │
│    □ Navigation & Routing                                   │
│    □ Progress Tracking                                      │
│    □ Lesson Content Rendering                               │
│    □ Data Persistence                                       │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│ 3. Phase 2: Feature Tests (High Priority)                   │
│    □ Theme Toggle                                           │
│    □ Sidebar Search                                         │
│    □ Code Copy & Download                                   │
│    □ Responsive Design (Mobile/Desktop)                     │
│    □ Accessibility                                          │
│    □ Browser Compatibility                                  │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│ 4. Phase 3: Edge Cases & Performance (Medium Priority)      │
│    □ Loading States                                         │
│    □ Error Handling                                         │
│    □ Edge Cases                                             │
│    □ Performance Metrics                                    │
│    □ Content Integrity                                      │
│    □ Security                                               │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│ 5. Document Results                                         │
│    □ Fill in TEST_CHECKLIST.md                              │
│    □ Create bug reports for failures                        │
│    □ Take screenshots of issues                             │
│    □ Note any observations                                  │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│ 6. Sign-Off                                                 │
│    □ Review test results                                    │
│    □ Verify all critical tests passed                       │
│    □ Approve for release OR request fixes                   │
└─────────────────────────────────────────────────────────────┘
```

---

## Test Coverage Overview

| Test Area | Scenarios | Priority | Estimated Time |
|-----------|-----------|----------|----------------|
| **Core Functionality** | 25 | Critical | 2-3 hours |
| **User Interface** | 20 | High | 1-2 hours |
| **Responsive Design** | 8 | Critical | 1 hour |
| **Accessibility** | 6 | High | 1-2 hours |
| **Performance** | 4 | Medium | 30 min |
| **Data & State** | 8 | Critical | 1 hour |
| **Error Handling** | 4 | Critical | 30 min |
| **Edge Cases** | 6 | Medium | 1 hour |
| **Security** | 2 | High | 30 min |
| **Content Integrity** | 3 | Critical | 30 min |
| **Total** | **80+** | - | **9-12 hours** |

---

## Testing Environments

### Required Browsers
- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest, macOS/iOS)
- ✅ Edge (latest)

### Required Screen Sizes
- 📱 Mobile: 375px, 414px (iPhone SE, iPhone 12 Pro)
- 📱 Tablet: 768px, 1024px (iPad, iPad Pro)
- 💻 Desktop: 1280px, 1440px, 1920px (Laptop, Desktop)

### Required Tools
- Browser DevTools
- Network throttling capability
- Screen reader (optional: NVDA, JAWS, VoiceOver)
- Text editor (to verify downloaded files)
- Screenshot tool

---

## Bug Reporting Template

When filing bugs from test execution:

```markdown
## Bug #X: [Brief Description]

**Severity**: Critical / High / Medium / Low

**Test Scenario**: [Reference from test plan, e.g., "5.1 Mark Lesson as Complete"]

**Steps to Reproduce**:
1.
2.
3.

**Expected Result**:
[What should happen]

**Actual Result**:
[What actually happened]

**Environment**:
- Browser: [Chrome 120.0.0]
- OS: [macOS 14.0]
- Screen Size: [1920x1080]
- Date: [2025-10-21]

**Screenshots**:
[Attach screenshots]

**Console Errors**:
```
[Paste any console errors]
```

**Additional Notes**:
[Any other relevant information]
```

---

## Test Metrics & KPIs

### Success Criteria
- ✅ **100%** of critical tests must pass
- ✅ **95%+** of high-priority tests must pass
- ✅ **90%+** of medium-priority tests should pass
- ✅ **0** critical or high-severity bugs in production
- ✅ **Zero** console errors during normal operation
- ✅ **WCAG 2.1 AA** accessibility compliance

### Performance Targets
- ⚡ Initial page load: < 3 seconds
- ⚡ Lesson navigation: < 500ms
- ⚡ Search filtering: Instant (< 100ms)
- ⚡ Theme toggle: Instant
- ⚡ Lighthouse score: > 90 (Performance, Accessibility)

---

## Automation Opportunities

**Future Consideration**: Automate repetitive tests

### High-Priority Automation
1. **Navigation Tests**: Automate clicking through all lessons
2. **Progress Tracking**: Automate checkbox toggling and verification
3. **Theme Toggle**: Automate theme switching and persistence
4. **Search Functionality**: Automate search queries and filtering
5. **Responsive Design**: Automate viewport resizing tests

### Recommended Tools
- **E2E Testing**: Playwright (preferred) or Cypress
- **Unit Testing**: Jest + React Testing Library
- **Visual Regression**: Percy or Chromatic
- **Accessibility**: axe-core, pa11y
- **Performance**: Lighthouse CI

### Sample Playwright Test
```typescript
// Example: test/lesson-navigation.spec.ts
import { test, expect } from '@playwright/test';

test('navigate to first lesson', async ({ page }) => {
  await page.goto('http://localhost:3000');
  await page.click('text=학습 시작하기');
  await expect(page).toHaveURL('/lesson/00-Overview');
  await expect(page.locator('h1')).toContainText('개요');
});
```

---

## Continuous Testing Strategy

### Pre-Commit
- Run linting (ESLint)
- Run type checking (TypeScript)
- Run unit tests (if implemented)

### Pre-PR
- Run critical E2E tests (automated)
- Manual smoke test on key features

### Pre-Release
- **Full manual test execution** using TEST_CHECKLIST.md
- All role-based scenarios
- Cross-browser testing
- Performance audit (Lighthouse)
- Accessibility audit

### Post-Release
- Monitor for console errors (error tracking tool)
- Collect user feedback
- Regression testing for any hotfixes

---

## FAQs

### Q: Where do I start?
**A**: Read [TEST_SUMMARY.md](TEST_SUMMARY.md) first, then use [TEST_CHECKLIST.md](TEST_CHECKLIST.md) for execution.

### Q: How long will testing take?
**A**: Full manual testing: 9-12 hours. Critical tests only: 3-4 hours.

### Q: Do I need to run all 80+ tests?
**A**: For major releases, yes. For minor updates, focus on critical and affected areas.

### Q: What if I find a bug?
**A**: Document it using the bug reporting template, take screenshots, note console errors.

### Q: Can I automate these tests?
**A**: Yes! See "Automation Opportunities" section above.

### Q: What browsers are required?
**A**: Chrome, Firefox, Safari, Edge (all latest versions).

### Q: What about mobile testing?
**A**: Use browser DevTools responsive mode, or test on real devices (iOS/Android).

### Q: How do I test accessibility?
**A**: Follow Section 13 in TEST_PLAN.md. Use keyboard only, test with screen reader.

### Q: What's the difference between TEST_PLAN.md and TEST_CHECKLIST.md?
**A**: TEST_PLAN.md has detailed steps and explanations. TEST_CHECKLIST.md is a quick checkbox list.

### Q: Should I test in production or staging?
**A**: Test in staging/development. URL: http://localhost:3000

---

## Contributing to Test Documentation

If you find issues with the test plan or want to add scenarios:

1. **Missing Scenario**: Add to appropriate section in TEST_PLAN.md
2. **New User Role**: Add to TEST_SCENARIOS_BY_ROLE.md
3. **Checklist Update**: Update TEST_CHECKLIST.md
4. **Summary Update**: Update TEST_SUMMARY.md

Maintain consistency across all documents.

---

## Document Maintenance

- **Last Updated**: 2025-10-21
- **Version**: 1.0
- **Application Version**: Based on current codebase
- **Review Frequency**: Update when major features are added
- **Owner**: QA Team / Test Lead

---

## Contact & Support

For questions about testing:
- Review this README and linked documents
- Check the codebase: `/app`, `/components`, `/lib`
- Verify lesson files: `/public/lessons`
- Open DevTools console for debugging

---

## Quick Links

- 📋 [Detailed Test Plan](TEST_PLAN.md) - Full test scenarios
- 📊 [Executive Summary](TEST_SUMMARY.md) - Overview and metrics
- ✅ [Execution Checklist](TEST_CHECKLIST.md) - Daily testing
- 👥 [Role-Based Scenarios](TEST_SCENARIOS_BY_ROLE.md) - User perspectives

---

**Happy Testing! 🧪**
