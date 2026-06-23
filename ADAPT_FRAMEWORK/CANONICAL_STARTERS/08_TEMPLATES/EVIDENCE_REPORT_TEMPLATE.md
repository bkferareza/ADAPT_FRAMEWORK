# EVIDENCE REPORT

STATUS: DRAFT
EVIDENCE_REPORT_ID: {{ER-ID}}
WORKCELL_ID: {{WORKCELL_ID}}
SOURCE_TRUTH_VERSION: {{SOURCE_TRUTH_VERSION}}
DATE: {{DATE}}

---

## Work Performed

{{WORK_PERFORMED_SUMMARY}}

[Provide a concise summary of the bounded action performed. Reference the active handoff ID, the business items addressed, and the specific decisions or implementations executed during this action. Do not describe the role in general — describe what was done.]

---

## Artifacts Changed

| File | Change Type | Change Summary | Traceability |
|------|------------|---------------|-------------|
| `{{FILE_PATH}}` | CREATED / MODIFIED / DELETED | {{CHANGE_SUMMARY}} | {{BI-ID}} / {{REQ-ID}} |

[Every changed file must appear in this table. Traceability must reference a specific BI-ID or AC-ID from the source truth. Untraced changes are an evidence violation.]

---

## Contracts Impacted

List any API or integration contracts created, modified, or deprecated by this work.

| Contract ID | Contract Name | Change Type | Impact Description |
|------------|--------------|------------|-------------------|
| {{CONTRACT_ID}} | {{CONTRACT_NAME}} | CREATED / MODIFIED / DEPRECATED | {{IMPACT}} |

If no contracts were impacted, state: "No contracts impacted."

---

## Dev Validation Results

[Applicable only to implementation workcells — not QA. Record any self-checks performed by the developing workcell: build results, unit test outcomes, linting, or smoke checks. This is NOT QA signoff.]

| Check Type | Result | Evidence Reference |
|-----------|--------|-------------------|
| {{CHECK_TYPE}} | PASSED / FAILED / NOT_RUN | {{EVIDENCE_REFERENCE}} |

If dev validation was not performed, state the reason.

---

## Limitations and Assumptions

{{LIMITATIONS_AND_ASSUMPTIONS}}

[List anything that could not be verified, any assumption made in the absence of a Director decision, and any constraint that limits the completeness of this work. Each assumption should reference whether a gap was raised.]

---

## Open Items Remaining

Items that could not be resolved in this bounded action and must be handled in a subsequent action:

| Item | Type | Recommended Next Action | Gap / Blocker Reference |
|------|------|------------------------|------------------------|
| {{OPEN_ITEM}} | DECISION_NEEDED / IMPLEMENTATION_DEFERRED / DEPENDENCY_UNRESOLVED | {{RECOMMENDED_ACTION}} | {{GAP_OR_BLK_ID}} |

If none, state: "No open items remaining."

---

## Evidence Note

This report is evidence of work performed. It is not QA signoff. QA signoff is independent and is produced by the designated QA workcell in `05_VALIDATION/`. Self-certification by the developing workcell does not satisfy the QA independence requirement.
