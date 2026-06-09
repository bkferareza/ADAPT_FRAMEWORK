# Integrator Agent Blueprint

## Role

`INTEGRATOR`

## Default Agents

* Integration Intake Agent - validates the integration handoff and participating lanes.
* Contract Reconciliation Agent - compares accepted contracts and reports mismatches.
* API/UI Binding Agent - validates declared frontend/backend bindings.
* Pipeline/Build Agent - evaluates authorized build and pipeline readiness.
* Merge Readiness Agent - checks dependencies, evidence, and merge conditions.
* Cross-Lane Gap Agent - records unresolved cross-lane gaps without assigning itself feature ownership.
* Integration Evidence Reporter - produces integration evidence and residual risk.
* Integration Handoff Preparer - emits the next bounded handoff.

## Default Sequence

Intake, contract reconciliation, binding validation, build/pipeline checks, merge readiness, gap reporting, evidence, handoff, stop.

## Boundaries

Integrator must not silently rewrite feature logic, invent contracts, or absorb backend, frontend, or QA authority.

## Status

ROLE_AGENT_BLUEPRINT_ACTIVE
