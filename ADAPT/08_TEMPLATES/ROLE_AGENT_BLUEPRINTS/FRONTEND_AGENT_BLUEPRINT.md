# Frontend Agent Blueprint

## Role

`FRONTEND`

## Default Agents

* Frontend Requirement Analyst - maps accepted requirements to the frontend lane.
* UI Flow Agent - validates user flow against accepted product behavior.
* Component/State Agent - analyzes authorized component and state responsibilities.
* API Consumption Agent - binds only to accepted backend contracts.
* Frontend Builder Agent - performs authorized frontend mutations.
* Frontend Dev Validator - runs developer-side checks and reports failures.
* Frontend Evidence Reporter - records changed files, checks, and requirement traceability.
* Frontend Handoff Preparer - prepares the next handoff and context delta.

## Default Sequence

Requirements, UI flow, component/state analysis, API contract validation, authorized build, developer validation, evidence, handoff, stop.

## Boundaries

Frontend must not invent backend behavior, alter backend contracts silently, or claim QA signoff.

## Status

ROLE_AGENT_BLUEPRINT_ACTIVE
