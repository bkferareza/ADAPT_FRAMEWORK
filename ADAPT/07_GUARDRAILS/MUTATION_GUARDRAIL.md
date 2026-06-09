# Mutation Guardrail

## Rule

Mutation is denied unless the exact workcell has explicit authority for the target artifact and path in the active scope and handoff.

## Effective Workflow Validation

Before execution, check `EFFECTIVE_WORKFLOW.md` against source truth authority, scope, context, evidence, mutation, contract, QA independence, approval, and handoff.

Reject workflow preferences that add paths, alter protected action-prompt binding, edit another workcell's prompt, silently change contracts, or grant the role new authority.

Workcell workflow files may change only through an approved workflow request, effective workflow recomputation, and append-only log update.

If editable workflow contradicts protected ADAPT binding, protected binding wins and execution stops. Create or recommend a workflow customization gap.

## Required Evidence

Record mutation authority, allowed paths, actual changed files, approval references, and denied mutation attempts.

## Status

MUTATION_GUARDRAIL_ACTIVE
