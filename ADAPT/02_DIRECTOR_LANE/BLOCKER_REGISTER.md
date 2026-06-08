# Blocker Register

## Status
ACTIVE

## Current Blockers
| Blocker ID | Summary | Type | Impact | Status | Closure Proof |
|---|---|---|---|---|---|
| BLK-001 | Technology stack is not finalized. | REQUIREMENT_BLOCKER | Blocks technical architecture, code generation, database schema, and implementation tasks. | OPEN | Approved technology decisions recorded in `DECISION_LOG.md`. |
| BLK-002 | No workcells are onboarded. | DEPENDENCY_BLOCKER | Previously blocked assignment of real implementation or QA tasks. | RESOLVED | Workcell registry contains INTEGRATOR_BRIAN, BACKEND_BRIAN, FRONTEND_BRIAN, and QA_BRIAN. |
| BLK-003 | Independent QA signoff for Brian-authored work is not available. | QA_BLOCKER | Blocks independent QA signoff if Brian authors or integrates the implementation being validated. | OPEN | Separate QA reviewer is onboarded, or Director approves an independence exception, or QA_BRIAN outputs are classified as non-independent validation only. |

## Non-Blockers
The document scaffold itself is not blocked because `START_HERE.md` authorizes governance and template generation.

## Rule
A blocker must identify what cannot proceed and what proof closes the stop condition.
