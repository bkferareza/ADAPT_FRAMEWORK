# Scope Guardrail

## Status
ACTIVE

## Purpose
Prevents ownership bleed and unauthorized work.

## Current Scope
Allowed:
- create ADAPT governance documents
- create ADAPT reusable templates
- normalize `Paggawa.docx` as source truth
- record gaps, blockers, and open questions

Forbidden:
- source code creation
- technical architecture creation
- database schema creation
- implementation task assignment
- real team onboarding
- production decisions by assumption

## Enforcement Questions
- Is the action authorized by a governed artifact?
- Is the lane or workcell owner defined?
- Is the requested work inside assigned scope?
- Does the action require missing technology decisions?
- Does the action mutate forbidden files?

## Outcomes
- PASS
- WARNING
- GAP_CREATED
- BLOCKER_CREATED
- ROUTE_TO_OWNER
- STOP_REQUIRED
