# QA Strategy

STATUS: DRAFT
PROJECT: {{PROJECT_NAME}}
SOURCE_TRUTH_VERSION: {{SOURCE_TRUTH_VERSION}}
MILESTONE: {{ACTIVE_MILESTONE}}

## Purpose

Defines the QA approach, independence model, test types, and coverage priorities for this ADAPT instance. QA validates against accepted source truth and acceptance criteria — not against developer assumptions.

## QA Independence Model

QA Independence Status: {{QA_INDEPENDENCE_STATUS}}

Valid values: FULL (separate human/AI) | CONSTRAINED (same human, Director exception granted) | BLOCKED (cannot proceed without exception)

Exception Reference (if CONSTRAINED): {{DIRECTOR_EXCEPTION_REFERENCE}}

## Test Types Planned

| Test Type | Scope | Tools (if known) | Priority | Notes |
|-----------|-------|-------------------|----------|-------|
<!-- EXAMPLE: | Functional | Core user flows per acceptance criteria | {{TEST_TOOL}} | HIGH | All MUST_HAVE requirements | -->
<!-- EXAMPLE: | Regression | Previously passing scenarios | {{TEST_TOOL}} | HIGH | Run after each integration | -->
<!-- EXAMPLE: | Security | Auth flows, input validation | {{TEST_TOOL}} | HIGH | — | -->
<!-- EXAMPLE: | Performance | Key API endpoints | {{TEST_TOOL}} | MEDIUM | Load profile TBD | -->
<!-- EXAMPLE: | Accessibility | UI components | {{TEST_TOOL}} | MEDIUM | WCAG 2.1 AA target | -->

## Coverage Priorities

- Priority 1: Acceptance criteria for MUST_HAVE requirements
- Priority 2: Acceptance criteria for SHOULD_HAVE requirements
- Priority 3: Regression coverage for previously accepted work
- Priority 4: Edge cases and security scenarios

## QA Entry Criteria

QA begins only when:
1. Director has assigned QA work via handoff
2. Accepted source truth version is identified
3. Acceptance criteria are in READY_FOR_TEST status
4. Developer handoff with evidence has been received

## QA Exit Criteria

QA is complete when:
1. All READY_FOR_TEST acceptance criteria have a PASSED or FAILED status
2. All found defects are recorded in DEFECT_REGISTER.md
3. QA Evidence Certifier has reviewed completeness
4. QA Handoff Preparer has sent results to Director
