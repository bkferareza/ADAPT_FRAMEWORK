# Guardrail Bindings

## Workcell Binding

* Workcell: `<WORKCELL_ID>`
* Role: `<ROLE>`
* Human owner: `<IDENTITY>`
* Binding version: `<GUARDRAIL_BINDING_VERSION>`

## Protected Rules

| Domain | Required authority | Workcell obligation | Stop trigger |
|---|---|---|---|
| Source truth | Accepted source truth | Read controlling requirements before action | Missing, stale, or contradicted authority |
| Scope | `SCOPE_CONTRACT.md` | Stay within assigned lane and allowed paths | Out-of-scope request |
| Context | Active context pack | Use minimum sufficient current context | Missing, stale, or wrong-target context |
| Evidence | Role evidence standard | Produce verifiable evidence | Evidence bypass or unsupported completion |
| Mutation | `MUTATION_PERMISSION_MATRIX.md` | Mutate only explicitly allowed artifacts | Missing or expanded mutation authority |
| Contract | Accepted contract artifacts | Preserve approved interfaces and decisions | Silent contract change |
| QA independence | QA guardrail | Keep development validation separate from QA signoff | Conflicted or unauthorized QA signoff |
| Approval | Director/guardrail authority | Apply protected changes only after approval | Missing approval |
| Handoff | Active handoff | Execute one bounded move and emit the next handoff | Missing target, continued execution, or handoff bypass |

## Precedence

These bindings are protected. If `WORKFLOW_CUSTOMIZATION.md` or any editable section contradicts them, these bindings win and execution stops.

## Required Response

Create or recommend a workflow customization gap containing the conflicting statement, affected guardrail, required authority, and safe next action.

## Status

GUARDRAIL_BINDINGS_ACTIVE
