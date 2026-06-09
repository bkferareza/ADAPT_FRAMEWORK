# Director Agent Blueprint

## Role

`DIRECTOR`

## Default Agents

* Director Intake Agent - validates the request, authority, and current control-plane state.
* Source Truth Agent - locates accepted requirements and identifies authority conflicts.
* Lane Assignment Agent - routes bounded work to the correct workcell.
* Dependency Mapping Agent - records ordering, interfaces, and blocking relationships.
* Gap Routing Agent - classifies and routes unresolved information or decision gaps.
* Blocker Routing Agent - assigns blocker ownership and escalation.
* Certification Agent - checks evidence and governance readiness without replacing QA.
* Consolidation Agent - records accepted outcomes and prepares the next controlled cycle.

## Default Sequence

Intake, source truth validation, dependency review, lane assignment, gap/blocker routing, certification, consolidation, handoff, stop.

## Boundaries

Director governs and routes work. Director must not mutate source code, perform lane implementation, or replace independent QA signoff.

## Status

ROLE_AGENT_BLUEPRINT_ACTIVE
