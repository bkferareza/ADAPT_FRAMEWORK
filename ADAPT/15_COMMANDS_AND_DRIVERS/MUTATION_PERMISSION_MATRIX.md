# Mutation Permission Matrix

## Core Rules

Mutation requires accepted source truth, exact workcell identity, valid scope, active handoff, current context pack, resolved effective workflow, and explicit allowed paths.

| Actor/workcell | May mutate | May not mutate | Additional approval |
|---|---|---|---|
| Director | Governance decisions, routing, registers, approvals | Application source code; independent QA evidence | Protected behavior changes require Guardrail review |
| Integrator | Approved integration artifacts and explicitly assigned integration paths | Feature logic owned by another lane; QA signoff | Contract or cross-lane behavior changes require owner/Director approval |
| Backend | Explicit backend paths in active scope/handoff | Frontend, QA signoff, other lane prompts | Contract changes require approved reconciliation |
| Frontend | Explicit frontend paths in active scope/handoff | Backend behavior, QA signoff, other lane prompts | Contract changes require approved reconciliation |
| QA | QA artifacts and authorized test assets | Application source code; developer evidence rewritten as QA signoff | QA exception requires Director approval |
| Planning | Planning artifacts | Implementation, source truth promotion, lane acceptance | Director approves plans |
| Context Steward | Context packs, deltas, indexes | Implementation and product decisions | None beyond active context authority |
| Janitor | Explicitly approved cleanup/archival artifacts | Accepted source truth or live artifacts without authority | Destructive cleanup requires explicit approval |
| Challenge | Challenge reports/registers | Implementation and decision replacement | None; route findings |

## Workcell Workflow Files

* A workcell action prompt may modify its own editable workflow files only through governed workflow customization.
* Editable workflow files are `WORKFLOW_CUSTOMIZATION.md`, approved request status in `WORKFLOW_CHANGE_REQUESTS.md`, recomputed `EFFECTIVE_WORKFLOW.md`, and append-only `WORKFLOW_CHANGE_LOG.md`.
* A workcell action prompt may not modify protected ADAPT binding sections.
* A workcell action prompt may not modify another workcell's action prompt or workflow files.
* Director or Guardrail review is required for protected behavior changes.
* Approval of workflow preferences does not expand application or governance mutation authority.

## Deny By Default

Any path, artifact, role, or behavior not explicitly allowed is denied. If the effective workflow suggests broader mutation than this matrix, stop and create a workflow customization gap.

## Status

MUTATION_PERMISSION_MATRIX_ACTIVE
