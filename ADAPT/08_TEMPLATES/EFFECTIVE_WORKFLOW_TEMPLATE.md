# Effective Workflow

## Workcell Binding

* Workcell: `<WORKCELL_ID>`
* Role: `<ROLE>`
* Human owner: `<IDENTITY>`
* Resolved on: `<DATE>`
* Default blueprint version: `<BLUEPRINT_VERSION>`
* Customization request: `<WORKFLOW_CHANGE_REQUEST_ID or NONE>`
* Guardrail binding version: `<GUARDRAIL_BINDING_VERSION>`

## Resolution Inputs

1. `DEFAULT_AGENT_BLUEPRINT.md`
2. approved content from `WORKFLOW_CUSTOMIZATION.md`
3. `GUARDRAIL_BINDINGS.md`

Protected ADAPT binding overrides editable content.

## Resolved Agents

`<DEFAULT_AGENTS_PLUS_APPROVED_ADDITIONS>`

## Resolved Procedure

`<DEFAULT_SEQUENCE_PLUS_APPROVED_PREFERENCES>`

## Resolved Evidence Format

`<DEFAULT_OR_APPROVED_FORMAT>`

## Guardrail Validation

| Check | Result | Evidence |
|---|---|---|
| Source truth authority | `<PASS/FAIL>` | `<REFERENCE>` |
| Scope | `<PASS/FAIL>` | `<REFERENCE>` |
| Context | `<PASS/FAIL>` | `<REFERENCE>` |
| Evidence | `<PASS/FAIL>` | `<REFERENCE>` |
| Mutation | `<PASS/FAIL>` | `<REFERENCE>` |
| Contract | `<PASS/FAIL>` | `<REFERENCE>` |
| QA independence | `<PASS/FAIL/N/A>` | `<REFERENCE>` |
| Approval | `<PASS/FAIL>` | `<REFERENCE>` |
| Handoff | `<PASS/FAIL>` | `<REFERENCE>` |

Any `FAIL` makes this workflow non-executable and requires a workflow customization gap.

## Status

`<EFFECTIVE_WORKFLOW_ACTIVE | EFFECTIVE_WORKFLOW_BLOCKED>`
