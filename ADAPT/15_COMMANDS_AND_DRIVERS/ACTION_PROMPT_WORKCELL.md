# Workcell Action Prompt Driver

## Purpose

This driver governs creation, selection, and execution of workcell-scoped prompts. It is not a substitute for an identity-bound prompt.

## Required Entrypoint

Individual lane execution must use:

`Read and Execute ACTION_PROMPT_{{ROLE}}_{{IDENTITY}}.md`

`Read and Execute {{IDENTITY}}` is invalid because one human may own multiple workcells.

## Onboarding Generation

For `Onboard {{IDENTITY}} as {{ROLE}}`:

1. Apply `ONBOARDING_RULES.md`.
2. Resolve the canonical role through `ROLE_TO_WORKCELL_MAP.md`.
3. Derive `{{IDENTITY}}` and `{{WORKCELL_ID}}`.
4. Instantiate `ACTION_PROMPT_ROLE_IDENTITY_TEMPLATE.md`.
5. Instantiate the exact role blueprint as `DEFAULT_AGENT_BLUEPRINT.md`.
6. Instantiate workflow customization, effective workflow, guardrail binding, request, and log files.
7. Validate all protected bindings before registering the workcell.
8. Report the scoped action prompt path and stop.

## Execution Gate

Before lane execution:

* confirm the requested filename exists in exactly one workcell folder
* confirm filename role and identity match `WORKCELL_IDENTITY.md`
* confirm the active handoff and context pack target the same workcell
* confirm `EFFECTIVE_WORKFLOW.md` resolves from approved inputs
* validate source truth authority, scope, context, evidence, mutation, contract, QA independence, approval, and handoff

Any mismatch stops execution.

## Workflow Customization

Owner preferences may change only through:

1. `Request workflow customization for {{WORKCELL_ID}}`
2. `Review workflow customization for {{WORKCELL_ID}}`
3. `Apply approved workflow customization for {{WORKCELL_ID}}` or `Reject workflow customization for {{WORKCELL_ID}}`
4. recompute `EFFECTIVE_WORKFLOW.md`
5. append `WORKFLOW_CHANGE_LOG.md`

Protected action-prompt binding is not editable through this workflow.

## Required Execution Output

* action summary
* files read
* files changed
* evidence produced
* gaps/blockers created
* context delta
* next handoff
* stop status

## Status

WORKCELL_ACTION_PROMPT_DRIVER_ACTIVE
