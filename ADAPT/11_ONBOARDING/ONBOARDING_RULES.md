# Onboarding Rules

## Status
ACTIVE

## Purpose
Defines how real human-owned workcells are created.

## Current State
Brian is onboarded into four role-specific workcells:
- `INTEGRATOR_BRIAN`
- `BACKEND_BRIAN`
- `FRONTEND_BRIAN`
- `QA_BRIAN`

## Onboarding Command
```text
Onboard <Name> as <Role>
```

## Supported Roles
- Director
- Integrator
- Backend Developer
- Frontend Developer
- QA
- Planning
- Context Steward
- Janitor
- Challenge Reviewer

## Required Pre-Checks
Before onboarding:
- Director Lane exists
- Source Truth exists
- Workcell Registry exists
- Role Model exists
- requested role is supported
- enough project truth exists for useful scope

## Onboarding Outputs
When approved, onboarding may create a person-specific workcell with:
- `WORKCELL_IDENTITY.md`
- `SCOPE_CONTRACT.md`
- `AGENT_TEAM.md`
- `ROADMAP.md`
- `TASK_REGISTER.md`
- `EVIDENCE_LOG.md`
- `HANDOFFS.md`
- `BLOCKERS.md`
- `CONTEXT_DELTAS.md`

## Assignment Rule
Onboarding does not randomly assign work. It uses source truth, role, current assignments, dependency map, planning rules, and Director approval.

## Current Constraint
Do not create additional person-specific workcells until explicitly requested. Brian's workcells do not authorize source-code mutation without technology decisions, active handoffs, context packs, and allowed mutation paths.
