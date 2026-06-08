# Scope Contract

## Workcell
QA_BRIAN

## Owner
Brian

## Role
QA

## Scope Summary
Own future QA validation planning and evidence for Paggawa against accepted source truth. QA_BRIAN may prepare validation scenarios now, but independent QA signoff is restricted because Brian also owns implementation roles.

## Owned Requirement Sections
| Requirement ID | Title | Ownership Type | Status |
|---|---|---|---|
| PGG-REQ-001 | Resident job posting | QA_VALIDATOR_CANDIDATE | PENDING_TESTABLE_BUILD |
| PGG-REQ-002 | Worker nearby job discovery | QA_VALIDATOR_CANDIDATE | PENDING_TESTABLE_BUILD |
| PGG-REQ-003 | Resident worker discovery | QA_VALIDATOR_CANDIDATE | PENDING_TESTABLE_BUILD |
| PGG-REQ-004 | Barangay-assisted job request | QA_VALIDATOR_CANDIDATE | PENDING_TESTABLE_BUILD |
| PGG-REQ-005 | Barangay worker registration | QA_VALIDATOR_CANDIDATE | PENDING_TESTABLE_BUILD |
| PGG-REQ-006 | Worker response to job | QA_VALIDATOR_CANDIDATE | PENDING_TESTABLE_BUILD |
| PGG-REQ-007 | Resident acceptance and match creation | QA_VALIDATOR_CANDIDATE | PENDING_TESTABLE_BUILD |
| PGG-REQ-008 | Matched work completion | QA_VALIDATOR_CANDIDATE | PENDING_TESTABLE_BUILD |
| PGG-REQ-009 | Review and reputation | QA_VALIDATOR_CANDIDATE | PENDING_TESTABLE_BUILD |
| PGG-REQ-010 | Privacy before match | QA_VALIDATOR_CANDIDATE | PENDING_TESTABLE_BUILD |
| PGG-REQ-011 | Trust label constraints | QA_VALIDATOR_CANDIDATE | PENDING_TESTABLE_BUILD |
| PGG-REQ-012 | Barangay role boundaries | QA_VALIDATOR_CANDIDATE | PENDING_TESTABLE_BUILD |
| PGG-REQ-013 | Job status lifecycle | QA_VALIDATOR_CANDIDATE | PENDING_TESTABLE_BUILD |
| PGG-REQ-014 | MVP surface support | QA_VALIDATOR_CANDIDATE | PENDING_TESTABLE_BUILD |
| PGG-REQ-016 | MVP non-goals | QA_VALIDATOR_CANDIDATE | PENDING_TESTABLE_BUILD |

## Owned Capabilities
- QA requirement analysis
- Test scenario design
- Regression risk mapping
- Defect reproduction after implementation exists
- QA evidence reporting when independence is lawful

## Consumed Capabilities
- Accepted source truth
- Acceptance criteria
- Implementation handoffs
- Integration evidence
- Developer self-validation evidence

## Exposed Contracts
- QA validation report
- Defect report
- QA signoff recommendation when independence requirements are satisfied

## Required Consumers
- Director Lane
- INTEGRATOR_BRIAN
- BACKEND_BRIAN
- FRONTEND_BRIAN

## Required Validators
- Director Lane for QA independence and signoff acceptability

## Allowed Mutation Areas
- `ADAPT/03_WORKCELLS/QA_BRIAN/`
- Future QA evidence artifacts after approved handoff

## Forbidden Areas
- Application source code
- Backend code
- Frontend code
- Integration fixes
- Developer-owned evidence logs

## Dependency Rules
QA execution depends on accepted source truth, acceptance criteria, testable implementation, validation context pack, and QA independence clearance.

## Escalation Rules
Escalate to Director when QA independence is conflicted, acceptance criteria are missing, or signoff authority is unclear.

Escalate to Integrator when integration evidence is missing.

Escalate to Backend or Frontend when a defect appears implementation-owned.

## Status
ACTIVE
