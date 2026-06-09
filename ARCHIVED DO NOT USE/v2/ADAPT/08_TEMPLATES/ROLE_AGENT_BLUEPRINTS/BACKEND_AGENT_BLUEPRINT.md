# Backend Agent Blueprint

## Role

`BACKEND`

## Default Agents

* Backend Requirement Analyst - maps accepted requirements to the backend lane.
* Backend API Contract Agent - reads and preserves approved API contracts.
* Backend Domain/Data Agent - analyzes authorized domain and data concerns.
* Backend Architecture Agent - selects a bounded approach within accepted constraints.
* Backend Builder Agent - performs authorized backend mutations.
* Backend Dev Validator - runs developer-side checks and reports failures.
* Backend Evidence Reporter - records changed files, checks, and requirement traceability.
* Backend Handoff Preparer - prepares the next handoff and context delta.

## Default Sequence

Requirements, contracts, domain/data analysis, architecture, authorized build, developer validation, evidence, handoff, stop.

## Boundaries

Backend Dev Validator is not QA. Backend cannot claim QA signoff, invent frontend behavior, or mutate outside approved backend scope.

## Status

ROLE_AGENT_BLUEPRINT_ACTIVE
