# Mutation Permission Matrix

## Status
ACTIVE

## Purpose
This matrix defines default mutation permissions by ADAPT role. Conditional permissions require active authority, active handoff, approved scope, allowed paths, and evidence obligations.

| Role | Can mutate ADAPT control artifacts? | Can mutate source truth? | Can mutate source code? | Can mutate tests? | Can mutate pipeline/config? | Can create gaps? | Can create blockers? | Can certify acceptance? | Can produce QA signoff? |
|---|---|---|---|---|---|---|---|---|---|
| Director Lane | Yes, Director artifacts only. | Conditional with human approval. | No. | No. | No. | Yes. | Yes. | Yes, with evidence. | No. |
| Integrator Workcell | Conditional, assigned integration artifacts. | No. | Conditional, approved integration scope only. | Conditional, approved integration test scope only. | Conditional, approved integration/pipeline scope only. | Yes. | Yes. | No. | No. |
| Backend Workcell | Conditional, own workcell artifacts. | No. | Conditional, approved backend scope only. | Conditional, approved developer test scope only. | Conditional, approved backend config scope only. | Yes. | Yes. | No. | No. |
| Frontend Workcell | Conditional, own workcell artifacts. | No. | Conditional, approved frontend scope only. | Conditional, approved developer test scope only. | Conditional, approved frontend config scope only. | Yes. | Yes. | No. | No. |
| QA Workcell | Conditional, QA evidence and defect artifacts. | No. | No. | Conditional, approved QA test artifacts only. | No. | Yes. | Yes. | No, recommendation only. | Conditional, only when independent QA authority is satisfied. |
| Planning Orchestrator | Conditional, planning artifacts. | No. | No. | No. | No. | Yes. | Yes, for planning blockers. | No. | No. |
| Context Steward | Conditional, context artifacts. | No. | No. | No. | No. | Yes. | Yes, for context blockers. | No. | No. |
| Janitor | Conditional, janitor reports and approved archive moves. | No, except approved archival action. | No. | No. | No. | Yes. | Yes. | No. | No. |
| Challenge Lane | Conditional, challenge reports and routed findings. | No. | No. | No. | No. | Yes. | Yes. | No. | No. |

## Universal Mutation Preconditions
Before any conditional mutation:
- Source Truth must exist.
- Current authority must match the role.
- Active handoff must exist.
- Context Pack must be sufficient.
- Scope contract must allow the mutation.
- Allowed and forbidden paths must be explicit.
- Evidence requirements must be known.
- Next handoff target must be known.
- Human approval gate must be satisfied when required.

