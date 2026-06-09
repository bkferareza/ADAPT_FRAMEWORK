# Handoff Guardrail

## Rule

Except for explicitly allowed onboarding, recovery, and context-generation actions, execution requires one active handoff targeted to the exact workcell.

## Effective Workflow Validation

Before execution, check `EFFECTIVE_WORKFLOW.md` against source truth authority, scope, context, evidence, mutation, contract, QA independence, approval, and handoff.

Reject workflow preferences that skip handoffs, use another workcell's handoff, broaden the objective, omit required evidence, or continue after emitting the next handoff.

If editable workflow contradicts protected ADAPT binding, protected binding wins and execution stops. Create or recommend a workflow customization gap.

## Required Handoff Fields

* source workcell
* target workcell
* bounded objective
* source truth references
* contract references
* allowed paths
* context pack reference
* evidence obligations
* stop condition

## Required Evidence

Record the consumed handoff, resulting artifacts, next handoff, context delta, and final stop status.

## Status

HANDOFF_GUARDRAIL_ACTIVE
