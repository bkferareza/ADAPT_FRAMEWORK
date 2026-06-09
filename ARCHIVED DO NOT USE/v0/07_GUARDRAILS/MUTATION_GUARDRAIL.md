# Mutation Guardrail

## Status
ACTIVE

## Purpose
Prevents unauthorized file and source mutation.

## Current Allowed Mutation
Only ADAPT governance and scaffold documents requested by `START_HERE.md` may be created.

## Current Forbidden Mutation
- source code
- application files
- technical architecture files
- database schema files
- test code
- pipeline files
- deployment files
- person-specific workcell files
- real implementation task files

## Code Mutation Pre-Checks
Before any future code mutation, verify:
- owning workcell
- authorizing requirement
- active handoff
- context pack
- allowed paths
- forbidden paths
- evidence required
- validation required
- next handoff target
- QA expectation

## Stop Conditions
Stop and create a blocker when:
- any pre-check is missing
- requested mutation is outside assigned scope
- technology stack is not approved
- no active handoff exists
