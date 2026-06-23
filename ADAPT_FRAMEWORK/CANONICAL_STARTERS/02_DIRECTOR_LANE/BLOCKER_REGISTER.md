# Blocker Register

STATUS: DRAFT
PROJECT: {{PROJECT_NAME}}

## Purpose

Records execution blockers — conditions that prevent a bounded action from proceeding. Blockers must be escalated and resolved; workarounds that bypass governance are not permitted.

## Blockers

| BLK-ID | Title | Description | Blocked Item | Raised By | Raised Date | Assigned To | Status | Resolution | Resolved Date |
|--------|-------|-------------|--------------|-----------|-------------|-------------|--------|------------|---------------|
<!-- EXAMPLE: | BLK-001 | Missing API Contract | Backend cannot implement the payment endpoint until the API contract is accepted by Integrator | BI-005 Payment Flow | BACKEND_ANA | {{DATE}} | Integrator Lane | OPEN | — | — | -->

## Status Values

- OPEN: Blocker active; blocked item cannot proceed
- IN_PROGRESS: Resolution in progress
- RESOLVED: Blocker lifted; blocked item may proceed
- ESCALATED: Requires human decision or Director override
- DEFERRED: Blocked item deferred to a later milestone; blocker closed for now

## Notes

Blockers differ from gaps: a gap is a missing decision or context; a blocker is an active execution obstacle. The same root cause may produce both. BLK-IDs follow format BLK-NNN.
