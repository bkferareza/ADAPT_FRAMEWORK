# Command Routing Matrix

## Status
ACTIVE

## Purpose
This matrix maps supported ADAPT commands to their primary and secondary orchestrators.

| Command | Primary Orchestrator | Secondary Orchestrator | Requires Approval | Can Mutate Code |
|---|---|---|---|---|
| Initialize ADAPT from requirements | Director Lane | Source Truth Orchestrator; Guardrail Orchestrators | Yes | No |
| Promote document as source truth | Source Truth Orchestrator | Director Lane | Yes | No |
| Analyze requirements into source truth | Source Truth Orchestrator | Director Lane | No | No |
| Run Director intake | Director Lane | Guardrail Orchestrators | Conditional | No |
| Onboard as | Onboarding Orchestrator | Director Lane | Yes | No |
| Plan milestone | Planning Orchestrator | Director Lane | No | No |
| Approve milestone plan | Director Lane | Planning Orchestrator | Yes | No |
| Generate roadmap for | Planning Orchestrator | Director Lane | Conditional | No |
| Generate context pack for active handoff | Context Steward | Guardrail Orchestrators | Conditional for XL | No |
| Run atomic handoff dispatch | Workcell Orchestrator | Context Steward; Guardrail Orchestrators | Conditional | Conditional only with approved workcell code scope |
| Route gap | Director Lane | Guardrail Orchestrators | Conditional | No |
| Resolve blocker | Director Lane | Guardrail Orchestrators | Yes to close | No |
| Run integration review | Integrator Orchestrator | Context Steward; Guardrail Orchestrators | Conditional | Conditional only with approved integration scope |
| Run QA validation | QA Orchestrator | Context Steward; Guardrail Orchestrators | Conditional | No, except authorized QA test artifacts |
| Trigger challenge review | Challenge Lane | Director Lane | Conditional | No |
| Run janitor pass | Janitor Orchestrator | Director Lane | Conditional for archive | No |
| Director consolidate cycle | Director Lane | Integrator Orchestrator; QA Orchestrator; Challenge Lane | Conditional | No |
| Prepare next cycle | Director Lane | Planning Orchestrator; Context Steward | Conditional | No |

## Orchestrator Definitions
- Director Lane controls intake, routing, approval, blockers, gaps, certification, consolidation, and next-cycle movement.
- Source Truth Orchestrator promotes and normalizes authoritative requirements.
- Planning Orchestrator recommends milestone plans, sequencing, capacity, and roadmaps.
- Onboarding Orchestrator creates workcell scaffolds after approval.
- Context Steward computes minimum safe context and processes deltas.
- Workcell Orchestrator executes one bounded assigned handoff.
- Integrator Orchestrator reconciles contracts, cross-lane alignment, and merge readiness.
- QA Orchestrator independently validates behavior against acceptance criteria.
- Janitor Orchestrator identifies stale artifacts and archive candidates.
- Challenge Lane challenges consensus and evidence quality.
- Guardrail Orchestrators return ALLOW, ROUTE, SPLIT_REQUIRED, BLOCK_REQUIRED, or STOP_REQUIRED.

