# Context Guardrail

## Status
ACTIVE

## Purpose
Prevents stale, insufficient, excessive, or irrelevant context.

## Rule
No agent reads the whole project by default.

## Context Pack Requirements
A lawful context pack must include:
- context pack ID
- related handoff
- target lane or workcell
- purpose
- job size
- must-read artifacts
- conditional-read artifacts
- do-not-read artifacts
- current truth summary
- allowed scope
- forbidden scope
- known gaps
- known blockers
- required output
- closure proof

## Job Sizes
- XS: classification or status only
- S: small artifact update
- M: bounded lane task
- L: multi-artifact or multi-lane task
- XL: too large and must split

## Stop Conditions
Stop or create `GAP-T11 Context Gap` when:
- required source truth is absent
- context pack is missing
- context is stale
- context is too broad to execute safely
- context conflicts with source truth
