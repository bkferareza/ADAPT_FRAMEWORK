# Evidence Guardrail

## Rule

Every completion claim requires role-appropriate, reproducible evidence linked to the workcell, source truth, action, and changed artifacts.

## Effective Workflow Validation

Before execution, check `EFFECTIVE_WORKFLOW.md` against source truth authority, scope, context, evidence, mutation, contract, QA independence, approval, and handoff.

Reject workflow preferences that omit failed checks, replace evidence with summaries, allow unsupported completion, or treat developer validation as QA signoff.

If editable workflow contradicts protected ADAPT binding, protected binding wins and execution stops. Create or recommend a workflow customization gap.

## Required Evidence

Record files read, files changed, commands/checks performed, results, failures, gaps, blockers, requirement references, and handoff reference.

## Status

EVIDENCE_GUARDRAIL_ACTIVE
