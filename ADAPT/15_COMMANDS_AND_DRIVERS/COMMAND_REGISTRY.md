# Command Registry

## Command: Read And Execute Workcell Action Prompt

Syntax: `Read and Execute ACTION_PROMPT_{{ROLE}}_{{IDENTITY}}.md`

Required authority: Human invocation plus valid workcell authority, active handoff, and mutation permission.

Required files: scoped action prompt, `ACTION_PROMPT_MASTER.md`, `WORKCELL_IDENTITY.md`, `SCOPE_CONTRACT.md`, `DEFAULT_AGENT_BLUEPRINT.md`, `WORKFLOW_CUSTOMIZATION.md`, `EFFECTIVE_WORKFLOW.md`, `GUARDRAIL_BINDINGS.md`, active handoff, active context pack, `STOP_RULES.md`, and `MUTATION_PERMISSION_MATRIX.md`.

Allowed outputs: one bounded role action, authorized file mutations, evidence, context delta, next handoff, workcell artifact updates, gaps, and blockers.

Stop conditions: identity/role mismatch, ambiguous workcell, wrong handoff/context target, unresolved workflow, guardrail failure, missing authority, QA independence conflict, or completion of the next handoff.

## Command: Request Workflow Customization

Syntax: `Request workflow customization for {{WORKCELL_ID}}`

Required authority: Workcell owner or Director.

Required files: scoped action prompt, `DEFAULT_AGENT_BLUEPRINT.md`, `WORKFLOW_CUSTOMIZATION.md`, `GUARDRAIL_BINDINGS.md`, `WORKFLOW_CHANGE_REQUESTS.md`.

Allowed outputs: draft request, impact assessment, review handoff, or workflow customization gap.

Stop conditions: missing/ambiguous workcell, request changes protected binding, request expands role or mutation authority, or request bypasses governance.

## Command: Review Workflow Customization

Syntax: `Review workflow customization for {{WORKCELL_ID}}`

Required authority: Director or delegated Guardrail reviewer who is not self-approving a protected behavior change.

Required files: pending request, default blueprint, current customization, guardrail bindings, scope contract, mutation matrix, stop rules, and relevant guardrails.

Allowed outputs: approve, reject, request revision, create gap/blocker, and review evidence.

Stop conditions: missing request, reviewer lacks authority, impact cannot be determined, or source truth/contract decision is unresolved.

## Command: Apply Approved Workflow Customization

Syntax: `Apply approved workflow customization for {{WORKCELL_ID}}`

Required authority: Workcell owner, Director, or delegated Onboarding/Guardrail operator acting on an approved request.

Required files: approved request, `WORKFLOW_CUSTOMIZATION.md`, default blueprint, guardrail bindings, effective workflow, and change log.

Allowed outputs: update editable customization, recompute effective workflow, append change log, validation evidence, or gap.

Stop conditions: request is not approved, protected section would change, validation fails, or effective workflow cannot resolve.

## Command: Reject Workflow Customization

Syntax: `Reject workflow customization for {{WORKCELL_ID}}`

Required authority: Director or delegated Guardrail reviewer.

Required files: pending request, guardrail bindings, and change log.

Allowed outputs: rejection decision, reason, required revision/gap, and append-only log entry.

Stop conditions: missing request, ambiguous workcell, or reviewer lacks authority.

## Command: Show Effective Workflow

Syntax: `Show effective workflow for {{WORKCELL_ID}}`

Required authority: Workcell owner, Director, assigned reviewer, or authorized observer.

Required files: default blueprint, approved customization, guardrail bindings, and effective workflow.

Allowed outputs: read-only resolved workflow, input versions, validation status, and stale/unresolved warning.

Stop conditions: ambiguous workcell, identity mismatch, unresolved inputs, or access restriction.

## Command: Reset Workcell Workflow

Syntax: `Reset workcell workflow to default blueprint`

Required authority: Workcell owner with Director/Guardrail approval, or Director.

Required files: scoped workcell identity, default blueprint, customization, effective workflow, guardrail bindings, approved reset request, and change log.

Allowed outputs: clear approved editable customizations, recompute effective workflow from defaults and bindings, append reset entry, and validation evidence.

Stop conditions: active workcell is missing, reset approval is missing, default blueprint is invalid, or protected binding would change.

## Command: Onboard Workcell

Syntax: `Onboard {{IDENTITY}} as {{ROLE}}`

Required authority: Director or delegated Onboarding authority.

Required files: onboarding rules, role map, action prompt template, role blueprint, workflow templates, workcell templates, guardrails, mutation matrix, and stop rules.

Allowed outputs: one workcell folder, registry updates, onboarding evidence, onboarding report, and gaps/blockers.

Stop conditions: unsupported role, ambiguous identity, duplicate workcell, missing role blueprint, missing authority, unresolved mutation scope, or unresolved QA independence.

## Status

COMMAND_REGISTRY_ACTIVE
