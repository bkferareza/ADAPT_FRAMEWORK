# Evidence Standard By Role

## Status
ACTIVE

## Purpose
This document defines required evidence by ADAPT role. Claims without evidence remain UNPROVEN.

## Evidence States
- PROVEN
- UNPROVEN
- INCOMPLETE
- AMBIGUOUS
- CONTRADICTED

## Role Evidence Requirements

| Role | Required evidence |
|---|---|
| Director | Decision log, assignment updates, control plane update, certification report. |
| Backend | Requirement analysis, implementation evidence, API contract update if applicable, developer validation report, handoff. |
| Frontend | UI flow evidence, API expectation evidence, implementation evidence, developer validation report, handoff. |
| Integrator | Contract reconciliation, integration report, pipeline/build status, merge readiness. |
| QA | Test cases, execution evidence, defect reports, QA signoff recommendation. |
| Context Steward | Context Pack, Context Delta processing notes. |
| Janitor | Janitor report, archive candidates, compaction summary. |
| Challenge | Challenge report, failure mode, recommended verification. |

## Evidence Quality Rules
- Evidence must identify the requirement or handoff it supports.
- Evidence must name the artifact inspected or changed.
- Evidence must state the method used.
- Evidence must state result and confidence state.
- Evidence must record gaps, blockers, or contradictions.
- Developer self-validation must be labeled as developer self-validation.
- QA validation must be labeled as independent QA validation only when independence requirements are satisfied.

## Insufficient Evidence
Evidence is insufficient when:
- It is only an assertion.
- It does not map to accepted requirements.
- It cannot be reproduced or inspected.
- It conflicts with Source Truth.
- It depends only on Memory Bank.
- It comes from the implementing workcell but is claimed as QA signoff.

