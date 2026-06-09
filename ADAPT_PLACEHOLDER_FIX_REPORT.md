# ADAPT Placeholder Fix Report

## Summary

Unsafe angle-bracket placeholder patterns in the active ADAPT scaffold templates, command documentation, onboarding documentation, and `START_HERE.md` examples were replaced with stable double-brace placeholders. Placeholder-only text was changed; ADAPT architecture and onboarding behavior were not changed.

## Files Modified

- `START_HERE.md`
- `ADAPT/08_TEMPLATES/ACTION_PROMPT_ROLE_IDENTITY_TEMPLATE.md`
- `ADAPT/08_TEMPLATES/DEFAULT_AGENT_BLUEPRINT_TEMPLATE.md`
- `ADAPT/08_TEMPLATES/EFFECTIVE_WORKFLOW_TEMPLATE.md`
- `ADAPT/08_TEMPLATES/GUARDRAIL_BINDINGS_TEMPLATE.md`
- `ADAPT/08_TEMPLATES/WORKFLOW_CHANGE_LOG_TEMPLATE.md`
- `ADAPT/08_TEMPLATES/WORKFLOW_CHANGE_REQUEST_TEMPLATE.md`
- `ADAPT/08_TEMPLATES/WORKFLOW_CUSTOMIZATION_TEMPLATE.md`
- `ADAPT/11_ONBOARDING/ONBOARDING_RULES.md`
- `ADAPT/11_ONBOARDING/ROLE_TO_WORKCELL_MAP.md`
- `ADAPT/15_COMMANDS_AND_DRIVERS/ACTION_PROMPT_WORKCELL.md`
- `ADAPT/15_COMMANDS_AND_DRIVERS/COMMAND_REGISTRY.md`
- `ADAPT/15_COMMANDS_AND_DRIVERS/COMMAND_SYNTAX.md`
- `ADAPT/15_COMMANDS_AND_DRIVERS/STOP_RULES.md`
- `ADAPT_PLACEHOLDER_FIX_REPORT.md`

## Unsafe Patterns Removed

- `&lt;ROLE&gt;`
- `&lt;IDENTITY&gt;`
- `&lt;WORKCELL_ID&gt;`
- `&lt;Name&gt;`
- `&lt;Role&gt;`
- `ACTION_PROMPT_&lt;ROLE&gt;_&lt;IDENTITY&gt;.md`
- `Read and Execute ACTION_PROMPT_&lt;ROLE&gt;_&lt;IDENTITY&gt;.md`
- `Onboard &lt;Name&gt; as &lt;Role&gt;`
- Workflow command placeholders using `&lt;WORKCELL_ID&gt;`
- Other placeholder-shaped angle-bracket tokens in the requested active Markdown files

The malformed blank action-prompt filename, execution command, and onboarding command forms were also searched and were already absent.

## Safe Patterns Confirmed

- `ACTION_PROMPT_{{ROLE}}_{{IDENTITY}}.md`
- `Read and Execute ACTION_PROMPT_{{ROLE}}_{{IDENTITY}}.md`
- `Onboard {{IDENTITY}} as {{ROLE}}`
- `Request workflow customization for {{WORKCELL_ID}}`
- `Show effective workflow for {{WORKCELL_ID}}`

## Remaining Placeholder Warnings

None in the requested active files.

A repository-wide scan still finds legacy angle-bracket placeholders in the out-of-scope versioned reference documents `ADAPT Bootstrap Instruction Document v0.1.md`, `ADAPT Team Delivery Framework Scaffold v0.1.md`, `ADAPT Template Scaffolding Document v0.1.md`, and `ADAPT_WORKCELL_ACTION_PROMPT_SCAFFOLD_REPORT.md`, plus files under `ARCHIVED DO NOT USE/`. These historical/reference files were intentionally not modified because they are outside the requested active paths.

The requested directories `ADAPT/00_FRAMEWORK/`, `ADAPT/10_CONTEXT_ECONOMY/`, `ADAPT/12_JANITOR/`, and `ADAPT/13_PLANNING/` are not present in the active repository tree, so there were no files in those paths to modify.

## Validation Commands / Searches Performed

- Listed all Markdown files in the requested active paths.
- Searched requested active files for the role, identity, workcell ID, name, and role-name angle-bracket tokens.
- Searched requested active files for all placeholder-shaped angle-bracket tokens.
- Searched for the malformed blank action-prompt filename.
- Searched for the malformed blank action-prompt execution command.
- Searched for the malformed blank onboarding command.
- Searched for spaced placeholders such as `{{ ROLE }}` and `{{ IDENTITY }}`.
- Confirmed all five required safe strings with exact fixed-string searches.
- Performed a repository-wide search to identify remaining legacy placeholders outside the requested active paths.
- Ran `git diff --check`.

## Status

PLACEHOLDER_FIX_COMPLETE
