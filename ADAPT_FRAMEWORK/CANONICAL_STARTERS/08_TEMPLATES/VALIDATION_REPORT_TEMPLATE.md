# VALIDATION REPORT

STATUS: DRAFT
VALIDATION_REPORT_ID: {{VR-{{SEQUENCE}}}}
QA_WORKCELL_ID: {{QA_WORKCELL_ID}}
SOURCE_TRUTH_VERSION: {{SOURCE_TRUTH_VERSION}}
SCOPE: {{VALIDATION_SCOPE}}
DATE: {{DATE}}
QA_INDEPENDENCE_STATUS: {{FULL / CONSTRAINED}}

---

> **QA Independence Note:** If QA_INDEPENDENCE_STATUS is CONSTRAINED, the nature of the constraint must be documented in `02_DIRECTOR_LANE/DECISION_LOG.md` and referenced here. A constrained independence status limits the probative value of this report and must be disclosed to the Director.

---

## Test Cases Executed

| TC-ID | AC-ID | Result | Evidence Reference |
|-------|-------|--------|-------------------|
| {{TC-ID}} | {{AC-ID}} | PASSED / FAILED / BLOCKED / NOT_RUN | `{{EVIDENCE_PATH}}` |

[Every acceptance criterion in scope must have at least one corresponding test case. Untested acceptance criteria must appear with result NOT_RUN and a reason in the evidence reference column.]

---

## Defects Found

| DEF-ID | Severity | AC-ID | Status | Notes |
|--------|---------|-------|--------|-------|
| {{DEF-ID}} | CRITICAL / HIGH / MEDIUM / LOW | {{AC-ID}} | OPEN / RESOLVED / DEFERRED | {{DEFECT_NOTES}} |

If no defects were found, state: "No defects found."

**Severity definitions:**
- `CRITICAL` — acceptance criterion cannot be met; release is blocked
- `HIGH` — significant deviation from acceptance criterion; fix required before Director can approve
- `MEDIUM` — partial deviation; Director decides whether to approve with condition
- `LOW` — cosmetic or minor deviation; Director decides

---

## Coverage Summary

| Metric | Count |
|--------|-------|
| Acceptance criteria in scope | {{TOTAL_AC}} |
| Test cases executed | {{TOTAL_TC}} |
| Acceptance criteria: PASSED | {{AC_PASSED}} |
| Acceptance criteria: FAILED | {{AC_FAILED}} |
| Acceptance criteria: BLOCKED | {{AC_BLOCKED}} |
| Acceptance criteria: NOT_RUN | {{AC_NOT_RUN}} |
| Defects: CRITICAL | {{DEF_CRITICAL}} |
| Defects: HIGH | {{DEF_HIGH}} |
| Defects: MEDIUM | {{DEF_MEDIUM}} |
| Defects: LOW | {{DEF_LOW}} |

---

## Evidence

Validation evidence artifacts produced during this QA pass:

| Evidence ID | Description | Location |
|------------|-------------|---------|
| {{EVIDENCE_ID}} | {{EVIDENCE_DESCRIPTION}} | `05_VALIDATION/EVIDENCE/{{EVIDENCE_ID}}.md` |

---

## Residual Risks

Risks that testing could not eliminate:

| Risk | AC-IDs Affected | Likelihood | Recommendation |
|------|----------------|-----------|---------------|
| {{RISK_DESCRIPTION}} | {{AC-IDs}} | HIGH / MEDIUM / LOW | {{RECOMMENDATION}} |

If none, state: "No residual risks identified."

---

## QA Recommendation

**Recommendation:** PASS / CONDITIONAL_PASS / FAIL

| Value | Meaning |
|-------|---------|
| PASS | All acceptance criteria in scope are met. No defects outstanding. Director may approve. |
| CONDITIONAL_PASS | Minor issues outstanding. Director must review conditions below and decide whether to approve. |
| FAIL | One or more acceptance criteria are not met. Defects must be resolved before re-validation. |

**Conditions (if CONDITIONAL_PASS):**

{{QA_CONDITIONS}}

[List specific conditions the Director must evaluate before approving. Reference DEF-IDs and AC-IDs.]

**QA Recommendation Rationale:**

{{RECOMMENDATION_RATIONALE}}

---

## Handoff to Director

The Director must decide the following based on this report:

- {{DIRECTOR_DECISION_ITEM_1}}
- {{DIRECTOR_DECISION_ITEM_2}}

[Specify the exact decisions required: approve for release, require defect resolution, grant conditional approval, or request re-validation. Do not leave this section generic — tailor it to the actual findings above.]

---

## QA Independence Note

This report is the product of independent QA validation. It is not self-certification by the developing workcell. The QA workcell that produced this report (`{{QA_WORKCELL_ID}}`) must be a distinct identity from any workcell that performed implementation work on the items validated here.
