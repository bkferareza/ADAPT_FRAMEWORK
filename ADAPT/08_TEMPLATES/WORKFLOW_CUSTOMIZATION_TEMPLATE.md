# Workflow Customization

## Workcell Binding

* Workcell: `<WORKCELL_ID>`
* Role: `<ROLE>`
* Human owner: `<IDENTITY>`
* Current request: `<WORKFLOW_CHANGE_REQUEST_ID or NONE>`
* Approval status: `<DRAFT | PENDING_REVIEW | APPROVED | REJECTED | NONE>`
* Approved by: `<DIRECTOR_OR_GUARDRAIL_REVIEWER or NONE>`
* Approved on: `<DATE or NONE>`

## Editable Preferences

### Analysis Order

`<OWNER_PREFERENCE or DEFAULT>`

### Local Checklists

`<OWNER_PREFERENCE or DEFAULT>`

### Additional Self-Review Agents

`<OWNER_PREFERENCE or NONE>`

### Evidence Formatting

`<OWNER_PREFERENCE or DEFAULT>`

### Local Tool Usage

`<OWNER_PREFERENCE or DEFAULT>`

### Working Style Notes

`<OWNER_PREFERENCE or NONE>`

## Prohibited Changes

This file cannot waive source truth, scope, context, evidence, mutation, contract, QA independence, approval, or handoff rules. It cannot change role authority, protected binding, allowed paths, or stop behavior.

## Governance Check

* Guardrail review result: `<PASS | FAIL | NOT_REVIEWED>`
* Conflicts found: `<NONE or LIST>`
* Required gap: `<GAP_ID or NONE>`

Only approved preferences may be included in `EFFECTIVE_WORKFLOW.md`.

## Status

WORKFLOW_CUSTOMIZATION_<STATUS>
