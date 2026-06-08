# Scope Contract

## Workcell
FRONTEND_BRIAN

## Owner
Brian

## Role
Frontend Developer

## Scope Summary
Own future user-facing behavior for Paggawa Mobile and Paggawa Quest, including job request creation, worker/job discovery, assisted access flows, responses, match state, completion, reviews, reputation display, privacy-safe discovery views, and trust-language presentation.

## Owned Requirement Sections
| Requirement ID | Title | Ownership Type | Status |
|---|---|---|---|
| PGG-REQ-001 | Resident job posting | FRONTEND_OWNER_CANDIDATE | PENDING_TECH_DECISION |
| PGG-REQ-002 | Worker nearby job discovery | FRONTEND_OWNER_CANDIDATE | PENDING_TECH_DECISION |
| PGG-REQ-003 | Resident worker discovery | FRONTEND_OWNER_CANDIDATE | PENDING_TECH_DECISION |
| PGG-REQ-004 | Barangay-assisted job request | FRONTEND_OWNER_CANDIDATE | PENDING_TECH_DECISION |
| PGG-REQ-005 | Barangay worker registration | FRONTEND_OWNER_CANDIDATE | PENDING_TECH_DECISION |
| PGG-REQ-006 | Worker response to job | FRONTEND_OWNER_CANDIDATE | PENDING_TECH_DECISION |
| PGG-REQ-007 | Resident acceptance and match creation | FRONTEND_OWNER_CANDIDATE | PENDING_TECH_DECISION |
| PGG-REQ-008 | Matched work completion | FRONTEND_OWNER_CANDIDATE | PENDING_TECH_DECISION |
| PGG-REQ-009 | Review and reputation | FRONTEND_OWNER_CANDIDATE | PENDING_TECH_DECISION |
| PGG-REQ-010 | Privacy before match | FRONTEND_OWNER_CANDIDATE | PENDING_TECH_DECISION |
| PGG-REQ-011 | Trust label constraints | FRONTEND_OWNER_CANDIDATE | PENDING_TECH_DECISION |
| PGG-REQ-014 | MVP surface support | FRONTEND_OWNER_CANDIDATE | PENDING_TECH_DECISION |

## Owned Capabilities
- Frontend requirement analysis
- UI flow planning
- State behavior planning
- Trust-language presentation
- Client-side privacy display rules

## Consumed Capabilities
- Backend contracts from BACKEND_BRIAN
- Integration guidance from INTEGRATOR_BRIAN
- QA scenarios from QA_BRIAN
- Source truth and Director decisions

## Exposed Contracts
No UI/API contracts exist yet.

## Required Consumers
- INTEGRATOR_BRIAN
- QA_BRIAN
- Director Lane

## Required Validators
- INTEGRATOR_BRIAN for API/UI alignment
- QA_BRIAN for validation only where QA independence is lawful

## Allowed Mutation Areas
- `ADAPT/03_WORKCELLS/FRONTEND_BRIAN/`
- Future frontend code paths only after approved scope contract update and handoff

## Forbidden Areas
- All source code at onboarding time
- Backend code
- QA signoff artifacts
- Production architecture before approval

## Dependency Rules
Frontend execution depends on approved platform/framework, backend contract clarity, privacy field policy, active handoff, and allowed paths.

## Escalation Rules
Escalate to Director when requirements, trust wording, or platform decisions are missing.

Escalate to Integrator when API/UI alignment is required.

Escalate to Backend when backend behavior is unclear.

Escalate to QA when independent behavior validation is required.

## Status
ACTIVE
