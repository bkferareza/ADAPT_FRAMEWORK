# Onboarding Rules

## Purpose

Onboarding converts an approved human/role request into one real, identity-bound ADAPT workcell. A role placeholder is not a workcell.

## Accepted Command

`Onboard <Name> as <Role>`

The command requires Director or delegated Onboarding authority. It must identify one supported role from `ROLE_TO_WORKCELL_MAP.md`.

## Identity Derivation

Derive values only from the current approved onboarding inputs:

* `<ROLE>`: canonical role key from `ROLE_TO_WORKCELL_MAP.md`.
* `<IDENTITY>`: filename-safe uppercase identity key derived from `<Name>`.
* `<WORKCELL_ID>`: `<ROLE>_<IDENTITY>`.
* Action prompt filename: `ACTION_PROMPT_<ROLE>_<IDENTITY>.md`.

Replace spaces and unsupported filename characters with `_`. Preserve the human-readable name inside `WORKCELL_IDENTITY.md`. If normalization produces an empty, duplicate, or ambiguous identity, stop onboarding.

One human may own multiple workcells. Every workcell must have a distinct `<WORKCELL_ID>` and action prompt.

## Required Inputs

* human name
* canonical role
* approving authority
* workcell type
* role authority
* mutation authority
* QA independence status or `N/A`

Unknown authority must not be guessed.

## Role Blueprint Selection

Select exactly one source:

`ADAPT/08_TEMPLATES/ROLE_AGENT_BLUEPRINTS/<ROLE>_AGENT_BLUEPRINT.md`

Instantiate it as `DEFAULT_AGENT_BLUEPRINT.md`. If the exact role blueprint is missing, stop and create a role-blueprint gap.

## Required Workcell Files

Create these files inside `ADAPT/03_WORKCELLS/<WORKCELL_ID>/`:

* `ACTION_PROMPT_<ROLE>_<IDENTITY>.md`
* `WORKCELL_IDENTITY.md`
* `SCOPE_CONTRACT.md`
* `DEFAULT_AGENT_BLUEPRINT.md`
* `WORKFLOW_CUSTOMIZATION.md`
* `EFFECTIVE_WORKFLOW.md`
* `GUARDRAIL_BINDINGS.md`
* `WORKFLOW_CHANGE_REQUESTS.md`
* `WORKFLOW_CHANGE_LOG.md`
* `ROADMAP.md`
* `TASK_REGISTER.md`
* `EVIDENCE_LOG.md`
* `HANDOFFS.md`
* `BLOCKERS.md`
* `CONTEXT_DELTAS.md`

Use current reusable templates, never archived output.

## Instantiation Procedure

1. Validate approving authority and canonical role.
2. Derive `<IDENTITY>`, `<WORKCELL_ID>`, and the action prompt filename.
3. Reject duplicate or ambiguous workcell identity.
4. Load the exact role blueprint.
5. Create the workcell folder and required files.
6. Fill protected action-prompt fields from approved onboarding data.
7. Copy the role blueprint into `DEFAULT_AGENT_BLUEPRINT.md`.
8. Initialize `WORKFLOW_CUSTOMIZATION.md` with no customizations.
9. Instantiate `GUARDRAIL_BINDINGS.md`.
10. Resolve and validate `EFFECTIVE_WORKFLOW.md`.
11. Initialize workflow request and append-only change-log artifacts.
12. Register the workcell and its action prompt path.
13. Produce an onboarding report and stop.

## QA Independence

For a QA workcell, record whether its human owner also owns a development workcell. If yes, set `QAIndependenceStatus: CONSTRAINED` unless a Director-approved exception is recorded. Never infer independent QA from separate workcell folders alone.

## Onboarding Report

The report must list:

* human owner
* role
* workcell ID
* workcell folder
* role blueprint source
* workcell-scoped action prompt path
* QA independence status
* files created
* gaps or blockers

It must tell the user:

`To execute this lane, run: Read and Execute ACTION_PROMPT_<ROLE>_<IDENTITY>.md`

## Stop Conditions

Stop onboarding if authority, role, identity, blueprint, mutation scope, or QA independence status cannot be resolved safely. Stop after the onboarding report; do not execute lane work.

## Status

ONBOARDING_RULES_ACTIVE
