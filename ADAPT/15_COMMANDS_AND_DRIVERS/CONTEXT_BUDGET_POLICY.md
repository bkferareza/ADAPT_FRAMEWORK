# Context Budget Policy

## Status
ACTIVE

## Purpose
This policy defines ADAPT context sizes and when each size is allowed.

## Context Sizes

| Size | Use when | Typical context | Decision |
|---|---|---|---|
| XS | One command or one status classification is needed. | One command, one small artifact, no cross-lane context. | Execute if authority is clear. |
| S | One bounded artifact update or review is needed. | One requirement, one scope contract, one template. | Execute if evidence is available. |
| M | One workcell or lane task needs bounded context. | Requirement, scope contract, relevant decisions, one contract, active handoff. | Execute or route if dependencies are known. |
| L | Multi-lane context is needed. | Integration or QA involved, Director awareness required, multiple artifacts. | Prefer splitting; proceed only with clear handoff and Context Pack. |
| XL | Full lane audit, release review, or major replan is needed. | Broad project state, release evidence, cross-lane records, major dependency map. | Requires Director and human approval or splitting. |

## Size Definitions

### XS
- one command
- one small artifact
- no cross-lane context

### S
- one requirement
- one scope contract
- one template

### M
- requirement
- scope contract
- relevant decisions
- one contract
- active handoff

### L
- multi-lane context
- integration or QA involved
- Director awareness required

### XL
- full lane audit
- release review
- major replan
- requires Director/human approval or splitting

## Context Selection Rules
- Use the smallest context that can safely complete the handoff.
- Do not load the whole project by default.
- Exclude stale or superseded artifacts.
- Include guardrails and approval gates when authority or mutation is involved.
- If context is insufficient, stop and route to Context Steward.
- If context size is XL, require approval or split first.

