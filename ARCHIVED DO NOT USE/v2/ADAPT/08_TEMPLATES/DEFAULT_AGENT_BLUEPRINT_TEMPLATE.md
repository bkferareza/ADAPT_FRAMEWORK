# Default Agent Blueprint

## Workcell Binding

* Workcell: `{{WORKCELL_ID}}`
* Role: `{{ROLE}}`
* Human owner: `{{IDENTITY}}`
* Blueprint source: `ROLE_AGENT_BLUEPRINTS/{{ROLE}}_AGENT_BLUEPRINT.md`
* Blueprint version: `{{BLUEPRINT_VERSION}}`

## Resolution Rule

During onboarding, copy the matching role blueprint into this file and replace only workcell placeholders. Do not merge blueprints from other roles.

If no exact role blueprint exists, stop onboarding and create a role-blueprint gap. Do not invent role authority.

## Default Agents

`{{COPY_ROLE_SPECIFIC_DEFAULT_AGENTS_HERE}}`

## Default Sequence

`{{COPY_ROLE_SPECIFIC_DEFAULT_SEQUENCE_HERE}}`

## Role Boundaries

`{{COPY_ROLE_SPECIFIC_BOUNDARIES_HERE}}`

## Required Outputs

* bounded action result
* evidence appropriate to the role
* context delta
* next handoff
* stop status

## Governance

This file is the approved default for the workcell role. Owner preferences belong in `WORKFLOW_CUSTOMIZATION.md`. The computed result belongs in `EFFECTIVE_WORKFLOW.md`.

## Status

DEFAULT_AGENT_BLUEPRINT_ACTIVE
