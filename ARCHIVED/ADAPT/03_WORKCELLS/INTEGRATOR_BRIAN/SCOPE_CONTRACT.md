# Scope Contract

## Workcell
INTEGRATOR_BRIAN

## Owner
Brian

## Role
Integrator

## Scope Summary
Own future cross-lane alignment for Paggawa. This includes integration contract readiness, frontend/backend/QA handoff alignment, privacy-contract consistency, pipeline awareness, merge readiness, and cross-lane gap routing after implementation work becomes lawful.

## Owned Requirement Sections
| Requirement ID | Title | Ownership Type | Status |
|---|---|---|---|
| PGG-REQ-010 | Privacy before match | INTEGRATION_COORDINATOR | PENDING_TECH_DECISION |
| PGG-REQ-013 | Job status lifecycle | INTEGRATION_COORDINATOR | PENDING_TECH_DECISION |
| PGG-REQ-014 | MVP surface support | INTEGRATION_COORDINATOR | PENDING_TECH_DECISION |
| PGG-REQ-015 | Data and record retention needs | INTEGRATION_COORDINATOR | PENDING_TECH_DECISION |

## Owned Capabilities
- Integration readiness review
- Cross-lane contract reconciliation
- Merge readiness reporting
- Integration gap routing
- Evidence routing between implementation and QA lanes

## Consumed Capabilities
- Backend contracts and implementation evidence from BACKEND_BRIAN
- Frontend API expectations and UI behavior evidence from FRONTEND_BRIAN
- QA validation requirements and findings from QA_BRIAN
- Director decisions and approved scope

## Exposed Contracts
No technical contracts are exposed yet.

Future exposed contracts may include API/UI alignment reports, merge readiness reports, and integration handoff packages.

## Required Consumers
- Director Lane
- BACKEND_BRIAN
- FRONTEND_BRIAN
- QA_BRIAN

## Required Validators
- Director Lane for governance compliance
- QA_BRIAN for independent validation only where QA independence is lawful

## Allowed Mutation Areas
- `ADAPT/03_WORKCELLS/INTEGRATOR_BRIAN/`
- Future integration artifacts only after Director-approved handoff

## Forbidden Areas
- Application source code until approved
- Backend-owned feature logic
- Frontend-owned feature logic
- QA signoff artifacts
- Source Truth without approval

## Dependency Rules
Integration work depends on approved technology decisions, scoped backend/frontend work, and validated contracts.

## Escalation Rules
Escalate to Director when:
- Ownership is unclear.
- Technology decisions are missing.
- Acceptance criteria are missing.
- Requirement truth conflicts with an implementation plan.

Escalate to Backend or Frontend when:
- A contract issue belongs to that implementation owner.

Escalate to QA when:
- Independent behavior validation is required and QA independence is not conflicted.

## Status
ACTIVE
