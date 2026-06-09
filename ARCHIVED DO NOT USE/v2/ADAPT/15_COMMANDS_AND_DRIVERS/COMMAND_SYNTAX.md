# Command Syntax

## Placeholder Rules

* `{{ROLE}}` is a canonical key from `ROLE_TO_WORKCELL_MAP.md`.
* `{{IDENTITY}}` is the filename-safe onboarding identity key.
* `{{WORKCELL_ID}}` is the exact registered workcell identifier.
* A human identity alone never selects a workcell.

## Valid Examples

```text
Read and Execute ACTION_PROMPT_{{ROLE}}_{{IDENTITY}}.md
Request workflow customization for {{WORKCELL_ID}}
Review workflow customization for {{WORKCELL_ID}}
Apply approved workflow customization for {{WORKCELL_ID}}
Reject workflow customization for {{WORKCELL_ID}}
Show effective workflow for {{WORKCELL_ID}}
Reset workcell workflow to default blueprint
Onboard {{IDENTITY}} as {{ROLE}}
```

## Invalid Examples

```text
Read and Execute {{IDENTITY}}
```

Reason: Ambiguous identity. One human may own multiple workcells.

```text
{{QA_WORKCELL_ID}}, fix backend API
```

Reason: QA scope violation.

```text
{{BACKEND_WORKCELL_ID}}, mark QA passed
```

Reason: QA independence violation.

## Parsing Rules

1. Resolve exact workcell identity before loading lane context.
2. Match action prompt filename, folder, `WORKCELL_IDENTITY.md`, role, and owner.
3. Reject aliases that could refer to multiple workcells.
4. Do not infer a different role from task wording.
5. Do not execute workflow changes from free-form instructions; route them through registered commands.

## Status

COMMAND_SYNTAX_ACTIVE
