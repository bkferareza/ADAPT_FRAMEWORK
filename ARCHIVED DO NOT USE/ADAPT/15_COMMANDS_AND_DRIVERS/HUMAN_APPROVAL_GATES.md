# Human Approval Gates

## Status
ACTIVE

## Purpose
This document defines actions that require explicit human approval before ADAPT can proceed.

## Required Approval Gates

| Gate | Approval required before | Evidence required |
|---|---|---|
| Promote source truth | A document becomes an authoritative Source Truth version. | Source document, target version, rationale, conflict notes. |
| Create full ADAPT scaffold | Full framework, source truth, Director Lane, guardrails, templates, and operating layers are generated. | Requirements document, initialization mode, project state. |
| Onboard workcell | A real owner or agent receives workcell authority. | Name, supported role, scope contract draft, independence risks. |
| Approve milestone plan | Planning recommendations become approved delivery scope. | Milestone plan, dependencies, capacity, risks, QA/integration plan. |
| Approve code mutation scope | Any workcell mutates source code, tests, pipeline, or config. | Active handoff, allowed paths, forbidden paths, requirement link, evidence obligations. |
| Accept risk | Known risk is allowed to continue without immediate mitigation. | Risk description, impact, owner, expiration or review point. |
| Close blocker | A blocker is marked resolved or closed. | Blocker id, resolution proof, owner confirmation. |
| Certify release | A release candidate is accepted for release. | Source Truth mapping, integration report, QA recommendation, open risks, challenge status. |
| Archive major source truth | Source Truth or major historical authority is archived. | Archive rationale, replacement authority, recovery path. |
| Override guardrail | A STOP_REQUIRED, BLOCK_REQUIRED, or required route is overridden. | Guardrail result, override rationale, risk acceptance, human approver. |
| Run XL context job | A full lane audit, release review, or major replan consumes XL context. | Scope, reason splitting is insufficient, expected output, stopping point. |

## Approval Record Standard
Approval records must include:
- approver
- date/time
- gate name
- artifact or command approved
- scope of approval
- expiration or review point, if applicable
- risks accepted

## No Implied Approval
Silence, chat phrasing, prior approval for a different scope, or successful execution of a related command does not imply approval for a new gate.

