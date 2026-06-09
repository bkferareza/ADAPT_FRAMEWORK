# Context Guardrail

## Rule

Execution uses a current, workcell-targeted, minimum sufficient context pack. Memory Bank is reference-only and cannot replace active context or source truth.

## Effective Workflow Validation

Before execution, check `EFFECTIVE_WORKFLOW.md` against source truth authority, scope, context, evidence, mutation, contract, QA independence, approval, and handoff.

Reject workflow preferences that skip context, load unrelated lanes by default, rely on stale context, or treat personal notes as authority.

If editable workflow contradicts protected ADAPT binding, protected binding wins and execution stops. Create or recommend a workflow customization gap.

## Required Evidence

Record context pack ID, target workcell, freshness, selected sources, exclusions, and resulting context delta.

## Status

CONTEXT_GUARDRAIL_ACTIVE
