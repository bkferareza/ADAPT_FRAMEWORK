# ADAPT Workcell Action Prompt Scaffold Report

## Summary

Added a generic reusable scaffold for workcell-scoped action prompts. Each onboarded workcell now receives an action prompt bound to its canonical role, exact workcell identity, approved authority, role-specific default agent blueprint, governed customization, computed effective workflow, and protected guardrail bindings.

## Files Created

* `ADAPT/07_GUARDRAILS/CONTEXT_GUARDRAIL.md`
* `ADAPT/07_GUARDRAILS/EVIDENCE_GUARDRAIL.md`
* `ADAPT/07_GUARDRAILS/HANDOFF_GUARDRAIL.md`
* `ADAPT/07_GUARDRAILS/MUTATION_GUARDRAIL.md`
* `ADAPT/07_GUARDRAILS/QA_INDEPENDENCE_GUARDRAIL.md`
* `ADAPT/07_GUARDRAILS/SCOPE_GUARDRAIL.md`
* `ADAPT/08_TEMPLATES/ACTION_PROMPT_ROLE_IDENTITY_TEMPLATE.md`
* `ADAPT/08_TEMPLATES/DEFAULT_AGENT_BLUEPRINT_TEMPLATE.md`
* `ADAPT/08_TEMPLATES/EFFECTIVE_WORKFLOW_TEMPLATE.md`
* `ADAPT/08_TEMPLATES/GUARDRAIL_BINDINGS_TEMPLATE.md`
* `ADAPT/08_TEMPLATES/WORKFLOW_CHANGE_LOG_TEMPLATE.md`
* `ADAPT/08_TEMPLATES/WORKFLOW_CHANGE_REQUEST_TEMPLATE.md`
* `ADAPT/08_TEMPLATES/WORKFLOW_CUSTOMIZATION_TEMPLATE.md`
* `ADAPT/08_TEMPLATES/ROLE_AGENT_BLUEPRINTS/DIRECTOR_AGENT_BLUEPRINT.md`
* `ADAPT/08_TEMPLATES/ROLE_AGENT_BLUEPRINTS/INTEGRATOR_AGENT_BLUEPRINT.md`
* `ADAPT/08_TEMPLATES/ROLE_AGENT_BLUEPRINTS/BACKEND_AGENT_BLUEPRINT.md`
* `ADAPT/08_TEMPLATES/ROLE_AGENT_BLUEPRINTS/FRONTEND_AGENT_BLUEPRINT.md`
* `ADAPT/08_TEMPLATES/ROLE_AGENT_BLUEPRINTS/QA_AGENT_BLUEPRINT.md`
* `ADAPT/08_TEMPLATES/ROLE_AGENT_BLUEPRINTS/PLANNING_AGENT_BLUEPRINT.md`
* `ADAPT/08_TEMPLATES/ROLE_AGENT_BLUEPRINTS/CONTEXT_STEWARD_AGENT_BLUEPRINT.md`
* `ADAPT/08_TEMPLATES/ROLE_AGENT_BLUEPRINTS/JANITOR_AGENT_BLUEPRINT.md`
* `ADAPT/08_TEMPLATES/ROLE_AGENT_BLUEPRINTS/CHALLENGE_AGENT_BLUEPRINT.md`
* `ADAPT/11_ONBOARDING/ONBOARDING_RULES.md`
* `ADAPT/11_ONBOARDING/ROLE_TO_WORKCELL_MAP.md`
* `ADAPT/15_COMMANDS_AND_DRIVERS/ACTION_PROMPT_MASTER.md`
* `ADAPT/15_COMMANDS_AND_DRIVERS/ACTION_PROMPT_WORKCELL.md`
* `ADAPT/15_COMMANDS_AND_DRIVERS/COMMAND_REGISTRY.md`
* `ADAPT/15_COMMANDS_AND_DRIVERS/COMMAND_SYNTAX.md`
* `ADAPT/15_COMMANDS_AND_DRIVERS/MUTATION_PERMISSION_MATRIX.md`
* `ADAPT/15_COMMANDS_AND_DRIVERS/STOP_RULES.md`
* `ADAPT_WORKCELL_ACTION_PROMPT_SCAFFOLD_REPORT.md`

## Files Modified

* `START_HERE.md`

## Behavior Added

* role/identity action prompts
* role-specific default agent blueprints
* workflow customization governance
* effective workflow resolution
* identity-safe execution
* guardrail validation

Onboarding now derives `ACTION_PROMPT_<ROLE>_<IDENTITY>.md` from approved inputs, instantiates exactly one matching role blueprint, creates the complete workflow-governance artifact set, reports the scoped prompt path, and stops before lane execution.

## Expected Rescaffold Result

Future onboarding should create files using the pattern:

* `ACTION_PROMPT_<ROLE>_<IDENTITY>.md`
* `DEFAULT_AGENT_BLUEPRINT.md`
* `WORKFLOW_CUSTOMIZATION.md`
* `EFFECTIVE_WORKFLOW.md`
* `GUARDRAIL_BINDINGS.md`
* `WORKFLOW_CHANGE_REQUESTS.md`
* `WORKFLOW_CHANGE_LOG.md`

The same workcell folder also receives its identity, scope, roadmap, task, evidence, handoff, blocker, and context-delta artifacts.

## Validation Checklist

* Onboarded workcell has role/identity action prompt.
* Action prompt binds exact workcell identity.
* Default agent blueprint is role-specific.
* Workflow customization exists.
* Effective workflow exists.
* Guardrail bindings exist.
* Ambiguous human-only execution is rejected.
* QA independence is protected.
* No application source code was created.

## Status

`WORKCELL_ACTION_PROMPT_SCAFFOLD_READY`
