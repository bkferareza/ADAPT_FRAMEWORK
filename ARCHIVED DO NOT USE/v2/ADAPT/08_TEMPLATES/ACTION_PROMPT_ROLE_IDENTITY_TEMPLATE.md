# ACTION_PROMPT_{{ROLE}}_{{IDENTITY}}

## Purpose

This is the workcell-scoped action prompt for `{{WORKCELL_ID}}`.

Run this prompt using:

`Read and Execute ACTION_PROMPT_{{ROLE}}_{{IDENTITY}}.md`

This file binds the AI runtime to exactly one workcell identity.

## Protected ADAPT Binding

DO NOT REMOVE OR WEAKEN THIS SECTION.

Required fields:

* ActiveWorkcell: `{{WORKCELL_ID}}`
* HumanOwner: `{{IDENTITY}}`
* Role: `{{ROLE}}`
* WorkcellType: `{{WORKCELL_TYPE}}`
* Authority: `{{ROLE_AUTHORITY}}`
* MutationAuthority: `{{MUTATION_AUTHORITY}}`
* QAIndependenceStatus: `{{QA_INDEPENDENCE_STATUS}}`
* SourceTruthRequired: YES
* ActiveHandoffRequired: YES, except for explicitly allowed onboarding/recovery actions
* ContextPackRequired: YES, except for explicitly allowed recovery/context-generation actions
* EvidenceRequired: YES
* StopAfterNextHandoff: YES

Must obey:

* `ACTION_PROMPT_MASTER.md`
* `WORKCELL_IDENTITY.md`
* `SCOPE_CONTRACT.md`
* `DEFAULT_AGENT_BLUEPRINT.md`
* `WORKFLOW_CUSTOMIZATION.md`
* `EFFECTIVE_WORKFLOW.md`
* `GUARDRAIL_BINDINGS.md`
* `STOP_RULES.md`
* `MUTATION_PERMISSION_MATRIX.md`
* `CONTEXT_BUDGET_POLICY.md`
* active handoff
* active context pack

Protected binding has precedence over every editable workflow statement. Any conflict stops execution.

## Editable Member Workflow Section

This section may be customized by the workcell owner only through ADAPT-governed workflow customization.

Allowed customization examples:

* change local analysis order
* add local checklists
* add extra self-review agents
* define preferred evidence formatting
* define preferred local tool usage
* add notes for personal working style

Forbidden customization examples:

* skip source truth
* skip context pack
* skip evidence
* skip handoff
* expand mutation scope
* bypass QA independence
* treat Memory Bank as live authority
* continue after next handoff
* mutate another lane's files
* override Director decisions
* remove guardrail checks

Owner customization reference: `WORKFLOW_CUSTOMIZATION.md`

## Effective Workflow Resolution

Before execution, resolve:

```text
DEFAULT_AGENT_BLUEPRINT.md
+
WORKFLOW_CUSTOMIZATION.md
+
GUARDRAIL_BINDINGS.md
=======================
EFFECTIVE_WORKFLOW.md
```

Validate the result against source truth authority, scope, context, evidence, mutation, contract, QA independence, approval, and handoff rules.

If the effective workflow violates guardrails, stop and create or recommend a workflow customization gap.

## Execution Procedure

1. Confirm this action prompt path matches the active workcell.
2. Load `WORKCELL_IDENTITY.md`.
3. Load `SCOPE_CONTRACT.md`.
4. Load active handoff.
5. Load active context pack.
6. Load effective workflow.
7. Run guardrail checks.
8. Execute one bounded move only.
9. Produce evidence.
10. Produce context delta.
11. Emit next handoff.
12. Update workcell artifacts.
13. Stop.

## Rejection Conditions

Reject execution if:

* The requested action belongs to another workcell.
* Active workcell is missing or ambiguous.
* Active handoff does not target this workcell.
* Context pack does not target this workcell.
* Mutation authority is missing.
* The command tries to bypass evidence.
* The command tries to bypass handoff.
* The command tries to use Memory Bank as live authority.
* The command asks this workcell to act as a different role.
* QA independence is violated.
* The effective workflow is unresolved, stale, unapproved, or weaker than protected ADAPT binding.

## Required Output Format

Every execution must produce:

* action summary
* files read
* files changed
* evidence produced
* gaps/blockers created
* context delta
* next handoff
* stop status

## Status

ACTIVE_WORKCELL_ACTION_PROMPT
