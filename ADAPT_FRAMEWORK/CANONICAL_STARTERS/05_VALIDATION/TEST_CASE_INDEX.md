# Test Case Index

STATUS: DRAFT
PROJECT: {{PROJECT_NAME}}
SOURCE_TRUTH_VERSION: {{SOURCE_TRUTH_VERSION}}

## Purpose

Index of all QA test cases. Each test case is derived from an acceptance criterion and documents expected behavior, test type, and result.

## Test Cases

| TC-ID | AC-ID | Title | Test Type | Preconditions | Steps Summary | Expected Result | Actual Result | Status | Notes |
|-------|-------|-------|-----------|---------------|---------------|-----------------|---------------|--------|-------|
<!-- EXAMPLE: | TC-001 | AC-001 | Login with valid credentials | Functional | User exists in system; not currently logged in | 1. Navigate to login 2. Enter valid email + password 3. Submit | Session token returned; redirect to dashboard | — | NOT_RUN | — | -->

## Status Values

- NOT_RUN: Test case defined but not yet executed
- PASSED: Test executed; expected result met
- FAILED: Test executed; expected result not met — see DEFECT_REGISTER.md
- BLOCKED: Cannot execute; see Notes for blocker
- SKIPPED: Intentionally skipped; reason in Notes

## Notes

TC-IDs follow format TC-NNN. Every test case must link to an acceptance criterion (AC-ID). Test cases without an AC link must be flagged and reviewed by the QA Requirement Analyst before execution.
