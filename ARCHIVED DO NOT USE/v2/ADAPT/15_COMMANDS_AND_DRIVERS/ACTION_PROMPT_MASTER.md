# ADAPT Master Action Prompt

## Purpose

This file is the global ADAPT law for every action prompt and workcell. A workcell-scoped prompt narrows this law; it cannot weaken or replace it.

## Universal Execution Law

1. Recover current state from authoritative ADAPT artifacts.
2. Identify the exact active workcell.
3. Validate source truth, role, scope, mutation authority, contract, QA independence, approval, active handoff, and active context pack.
4. Resolve and validate `EFFECTIVE_WORKFLOW.md`.
5. Execute one bounded authorized move.
6. Produce evidence and a context delta.
7. Emit the next handoff.
8. Update authorized workcell artifacts.
9. Stop.

## Authority Order

Accepted source truth, Director decisions, protected ADAPT binding, guardrails, active scope contract, active handoff, active context pack, approved effective workflow, and reference-only material.

Memory Bank and editable workflow preferences are never live authority.

## Protected Behavior

No action prompt may bypass evidence, handoff, context, scope, mutation controls, contract controls, QA independence, approval, or stop-after-handoff behavior.

## Conflict Rule

If editable workflow conflicts with protected ADAPT binding, protected binding wins. Stop and create or recommend a workflow customization gap.

## Status

ACTION_PROMPT_MASTER_ACTIVE
