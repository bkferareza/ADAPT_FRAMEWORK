# Acceptance Criteria

STATUS: DRAFT
VERSION: {{ADAPT_VERSION}}
PROJECT: {{PROJECT_NAME}}
SOURCE_TRUTH_VERSION: {{SOURCE_TRUTH_VERSION}}

## Purpose

Acceptance criteria derived from requirements. Each criterion defines a verifiable condition that must be satisfied for the linked requirement to be considered done. QA test scenarios are derived from these criteria.

## Acceptance Criteria

| AC-ID | REQ-ID | Criterion | Test Type | Status | Verified By | Notes |
|-------|--------|-----------|-----------|--------|-------------|-------|
<!-- EXAMPLE: | AC-001 | REQ-001 | User can log in with valid email and password and receive a session token | Functional | READY_FOR_TEST | — | Happy path | -->

## Status Values

- DRAFT: Defined but not reviewed
- READY_FOR_TEST: Accepted by Director; available for QA test scenario creation
- PASSED: QA has verified this criterion
- FAILED: QA found this criterion unmet; linked defect exists
- BLOCKED: Cannot be tested; blocker exists

## Test Type Values

Functional / Security / Performance / Accessibility / Integration / Regression / Edge Case

## Notes

Acceptance criteria are the primary input for QA test scenarios. They must be traceable to a source requirement (REQ-ID). AC-IDs follow format AC-NNN.
