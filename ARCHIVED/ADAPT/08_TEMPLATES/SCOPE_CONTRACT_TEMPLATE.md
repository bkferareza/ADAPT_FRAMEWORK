# Scope Contract

## Purpose
Defines what a workcell owns, consumes, validates, and must not touch.

## Workcell
<WORKCELL_NAME>

## Owner
<HUMAN_OWNER>

## Role
<ROLE>

## Scope Summary
Describe the bounded scope of this workcell.

## Owned Requirement Sections
| Requirement ID | Title | Ownership Type | Status |
|---|---|---|---|
| <REQUIREMENT_ID> | <TITLE> | OWNER | DRAFT |

## Owned Capabilities
List business or technical capabilities owned by this workcell.

## Consumed Capabilities
List capabilities owned by other workcells that this workcell depends on.

## Exposed Contracts
List APIs, UI contracts, data contracts, test contracts, or integration contracts this workcell exposes.

## Required Consumers
List workcells that consume this workcell's output.

## Required Validators
List workcells or orchestrators that must validate this workcell's output.

## Allowed Mutation Areas
List code or artifact paths allowed for this workcell.

## Forbidden Areas
List code or artifact paths forbidden for this workcell.

## Dependency Rules
Describe dependency constraints.

## Escalation Rules
Escalate to Director when:
- Ownership is unclear.
- Another lane's scope is required.
- Acceptance criteria are missing.
- Requirement truth conflicts with implementation plan.

Escalate to Integrator when:
- API, UI, pipeline, or cross-lane contract alignment is required.

Escalate to QA when:
- Independent behavior validation is required.

## Status
DRAFT
