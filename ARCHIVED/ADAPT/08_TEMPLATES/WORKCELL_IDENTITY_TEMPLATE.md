# Workcell Identity

## Purpose
Defines the identity of a human-owned ADAPT Workcell.

## Workcell Name
<WORKCELL_NAME>

## Human Owner
<HUMAN_OWNER>

## Role
<ROLE>

## Workcell Type
Select one:
- DIRECTOR
- INTEGRATOR
- BACKEND
- FRONTEND
- QA
- PLANNING
- CONTEXT_STEWARD
- JANITOR
- CHALLENGE
- OTHER

## Mission
Describe the mission of this workcell.

## Authority Level
Describe what this workcell may decide, recommend, execute, or validate.

## Code Mutation Authority
Select one:
- NONE
- LIMITED
- ASSIGNED_SCOPE_ONLY
- INTEGRATION_SCOPE_ONLY
- VALIDATION_ONLY

## Allowed Artifact Mutation
List ADAPT artifacts this workcell may update.

## Forbidden Artifact Mutation
List ADAPT artifacts this workcell must not update.

## Allowed Code Mutation
List source areas this workcell may mutate, if any.

## Forbidden Code Mutation
List source areas this workcell must not mutate.

## Required Evidence
List evidence this workcell must produce before handoff or closure.

## Required Handoffs
List expected handoff targets.

## Stop Conditions
The workcell must stop when:
- Required source truth is missing.
- Scope is unclear.
- Context pack is insufficient.
- Work exceeds assigned scope.
- Required evidence cannot be produced.
- A guardrail blocks execution.

## Status
DRAFT
