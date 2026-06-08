# Control Plane Schema

## Status
ACTIVE

## Purpose
This document defines the required schema for `ADAPT/02_DIRECTOR_LANE/PROJECT_CONTROL_PLANE.md`.

## Required Fields

| Field | Required | Type | Description |
|---|---|---|---|
| ProjectName | Yes | Text | Durable project name. |
| ProjectType | Yes | Text | Product or project category. |
| InitializationMode | Yes | Enum or text | Current scaffold mode, such as FULL_ADAPT_DOCUMENT_SCAFFOLD or ADAPT_LITE. |
| SourceTruthVersion | Yes | Version string | Current authoritative Source Truth version. |
| ActiveMilestone | Yes | Milestone id or NONE | Current milestone under planning or execution. |
| ActiveCycle | Yes | Cycle id or NONE | Current delivery cycle. |
| ActiveHandoff | Yes | Handoff id or NONE | The single active handoff. Multiple active handoffs are invalid. |
| CurrentAuthority | Yes | Role or lane | Role, lane, or human authority currently allowed to act. |
| ExecutionReadiness | Yes | Enum | Current readiness state. |
| CurrentPhase | Yes | Enum | Current ADAPT phase. |
| ActiveWorkcell | Yes | Workcell id or NONE | Workcell currently assigned to act. |
| Blocked | Yes | Boolean | TRUE when lawful progress is blocked. |
| ActiveBlockers | Yes | List | Active blocker ids or NONE. |
| ActiveGaps | Yes | List | Active gap ids or NONE. |
| LastAction | Yes | Text | Most recent completed command or dispatch result. |
| LastContextDelta | Yes | Delta id or NONE | Most recent Context Delta produced or processed. |
| NextExpectedAction | Yes | Text | Next lawful command, route, or handoff target. |
| LastConsolidatedAt | Yes | Date/time or NONE | Last cycle consolidation timestamp. |
| Notes | Yes | Text | Short durable notes that do not override Source Truth. |

## Allowed Values

### ExecutionReadiness
- READY
- NOT_READY
- BLOCKED
- NEEDS_CONTEXT
- NEEDS_APPROVAL
- NEEDS_PLANNING
- NEEDS_ONBOARDING

### CurrentPhase
- INITIALIZED
- SOURCE_TRUTH_LOADING
- SOURCE_TRUTH_READY
- ONBOARDING
- PLANNING
- EXECUTION
- INTEGRATION
- QA_VALIDATION
- CHALLENGE_REVIEW
- CONSOLIDATION
- JANITOR_PASS
- READY_FOR_NEXT_CYCLE
- BLOCKED

## Canonical Markdown Shape

```markdown
# Project Control Plane

## Status
ACTIVE

| Field | Value |
|---|---|
| ProjectName | <project name> |
| ProjectType | <project type> |
| InitializationMode | <mode> |
| SourceTruthVersion | <version or NONE> |
| ActiveMilestone | <milestone id or NONE> |
| ActiveCycle | <cycle id or NONE> |
| ActiveHandoff | <handoff id or NONE> |
| CurrentAuthority | <lane, workcell, human approval, or NONE> |
| ExecutionReadiness | <allowed value> |
| CurrentPhase | <allowed value> |
| ActiveWorkcell | <workcell id or NONE> |
| Blocked | <TRUE or FALSE> |
| ActiveBlockers | <ids or NONE> |
| ActiveGaps | <ids or NONE> |
| LastAction | <last action summary> |
| LastContextDelta | <delta id or NONE> |
| NextExpectedAction | <next expected action> |
| LastConsolidatedAt | <timestamp or NONE> |
| Notes | <durable notes> |
```

## Validation Rules
- `ActiveHandoff` must be `NONE` or exactly one handoff id.
- `Blocked` must be `TRUE` when `ExecutionReadiness` is `BLOCKED`.
- `ActiveBlockers` must not be `NONE` when `Blocked` is `TRUE`.
- `ExecutionReadiness` must be `NEEDS_CONTEXT` when an active handoff exists without a sufficient Context Pack.
- `CurrentPhase` must be `SOURCE_TRUTH_READY` or later before onboarding, planning, execution, integration, QA, challenge, or consolidation.
- `CurrentAuthority` must match the command, handoff, or approval gate being executed.
- `Notes` cannot override Source Truth, decisions, blockers, gaps, or guardrail results.

