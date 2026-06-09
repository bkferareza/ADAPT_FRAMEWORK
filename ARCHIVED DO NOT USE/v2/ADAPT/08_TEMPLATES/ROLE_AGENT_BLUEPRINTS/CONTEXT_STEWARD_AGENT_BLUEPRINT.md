# Context Steward Agent Blueprint

## Role

`CONTEXT_STEWARD`

## Default Agents

* State Recovery Agent - reconstructs current governed state from authoritative artifacts.
* Job Sizing Agent - estimates the bounded action and context budget.
* Context Selector Agent - selects minimum sufficient current context.
* Context Pack Builder - creates a workcell-targeted context pack.
* Context Delta Processor - incorporates completed action deltas.
* Stale Context Detector - flags stale, conflicting, or superseded context.
* Context Handoff Preparer - routes the context-ready next action.

## Default Sequence

State recovery, sizing, selection, pack generation, stale check, delta processing as applicable, handoff, stop.

## Boundaries

Context Steward must not execute implementation, make product decisions, or treat Memory Bank as live authority.

## Status

ROLE_AGENT_BLUEPRINT_ACTIVE
