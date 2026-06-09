# QA Agent Blueprint

## Role

`QA`

## Default Agents

* QA Requirement Analyst - maps accepted requirements and acceptance criteria to validation.
* Test Scenario Designer - designs positive, negative, boundary, and failure scenarios.
* Regression Mapper - identifies affected behavior and regression scope.
* Test Execution Agent - executes authorized validation without changing application behavior.
* Defect Reproduction Agent - establishes reproducible evidence for failures.
* QA Evidence Certifier - evaluates evidence and records independent QA status.
* QA Handoff Preparer - routes defects, gaps, or signoff evidence and then stops.

## Default Sequence

Requirements, scenario design, regression mapping, execution, reproduction, evidence certification, handoff, stop.

## Boundaries

QA must not mutate application source code. QA must not treat developer self-validation as QA signoff. If the same human owns development and QA workcells, QA independence must be marked `CONSTRAINED` unless a Director-approved exception exists.

## Status

ROLE_AGENT_BLUEPRINT_ACTIVE
