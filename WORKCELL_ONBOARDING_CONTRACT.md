# WORKCELL ONBOARDING CONTRACT

## Purpose

This file defines how generated ADAPT instances onboard workcells.

## Onboarding Command

Use:

```text
Onboard {{IDENTITY}} as {{ROLE}}
```

## Generated Workcell Path

```text
{{ADAPT_INSTANCE_PATH}}/ADAPT/03_WORKCELLS/{{ROLE}}_{{IDENTITY}}/
```

## Required Workcell Files

When onboarding a workcell, create:

```text
ACTION_PROMPT_{{ROLE}}_{{IDENTITY}}.md
WORKCELL_IDENTITY.md
SCOPE_CONTRACT.md
DEFAULT_AGENT_BLUEPRINT.md
WORKFLOW_CUSTOMIZATION.md
EFFECTIVE_WORKFLOW.md
GUARDRAIL_BINDINGS.md
WORKFLOW_CHANGE_REQUESTS.md
WORKFLOW_CHANGE_LOG.md
ROADMAP.md
TASK_REGISTER.md
EVIDENCE_LOG.md
HANDOFFS.md
BLOCKERS.md
CONTEXT_DELTAS.md
```

## Workcell Action Prompt

The generated workcell action prompt must be named:

```text
ACTION_PROMPT_{{ROLE}}_{{IDENTITY}}.md
```

Users execute the lane with:

```text
Read and Execute ACTION_PROMPT_{{ROLE}}_{{IDENTITY}}.md
```

It must bind the AI runtime to exactly one workcell identity.

## Protected Binding

The workcell action prompt must include a protected section that cannot be removed or weakened.

It must define:

* ActiveWorkcell
* HumanOwner
* Role
* WorkcellType
* Authority
* MutationAuthority
* QAIndependenceStatus
* SourceTruthRequired
* ActiveHandoffRequired
* ContextPackRequired
* EvidenceRequired
* StopAfterNextHandoff

## Editable Member Workflow

The workcell action prompt may include an editable member workflow section.

Editable:

* local analysis order
* local checklists
* extra self-review agents
* preferred evidence formatting
* preferred local tool usage
* personal working notes

Forbidden:

* skipping source truth
* skipping context pack
* skipping evidence
* skipping handoff
* expanding mutation scope
* bypassing QA independence
* treating Memory Bank as live authority
* continuing after next handoff
* mutating another lane's files
* overriding Director decisions
* removing guardrail checks

## Effective Workflow

Before execution, resolve:

```text
DEFAULT_AGENT_BLUEPRINT.md
+
WORKFLOW_CUSTOMIZATION.md
+
GUARDRAIL_BINDINGS.md
=====================
EFFECTIVE_WORKFLOW.md
```

If effective workflow violates guardrails, stop.

## Role-specific default agent blueprints

Generated onboarding must create role-specific default agents.

### Director

* Director Intake Agent
* Source Truth Agent
* Lane Assignment Agent
* Dependency Mapping Agent
* Gap Routing Agent
* Blocker Routing Agent
* Certification Agent
* Consolidation Agent

### Integrator

* Integration Intake Agent
* Contract Reconciliation Agent
* API/UI Binding Agent
* Pipeline/Build Agent
* Merge Readiness Agent
* Cross-Lane Gap Agent
* Integration Evidence Reporter
* Integration Handoff Preparer

### Backend

* Backend Requirement Analyst
* Backend API Contract Agent
* Backend Domain/Data Agent
* Backend Architecture Agent
* Backend Builder Agent
* Backend Dev Validator
* Backend Evidence Reporter
* Backend Handoff Preparer

### Frontend

* Frontend Requirement Analyst
* UI Flow Agent
* Component/State Agent
* API Consumption Agent
* Frontend Builder Agent
* Frontend Dev Validator
* Frontend Evidence Reporter
* Frontend Handoff Preparer

### QA

* QA Requirement Analyst
* Test Scenario Designer
* Regression Mapper
* Test Execution Agent
* Defect Reproduction Agent
* QA Evidence Certifier
* QA Handoff Preparer

### Planning

* Milestone Analyzer
* Work Slicer
* Dependency Sequencer
* Capacity Balancer
* Roadmap Generator
* Overextension Risk Reporter
* Planning Handoff Preparer

### Context Steward

* State Recovery Agent
* Job Sizing Agent
* Context Selector Agent
* Context Pack Builder
* Context Delta Processor
* Stale Context Detector
* Context Handoff Preparer

### Janitor

* Stale Artifact Detector
* Handoff Archivist
* Orphan Task Detector
* Summary Compactor
* Cleanup Reporter

### Challenge

* Consensus Breaker
* Failure Mode Hunter
* Evidence Skeptic
* Challenge Reporter

## Workflow customization commands

Generated instances must support:

* Request workflow customization for {{WORKCELL_ID}}
* Review workflow customization for {{WORKCELL_ID}}
* Apply approved workflow customization for {{WORKCELL_ID}}
* Reject workflow customization for {{WORKCELL_ID}}
* Show effective workflow for {{WORKCELL_ID}}
* Reset workcell workflow to default blueprint

Customization requests must be reviewed against the protected binding and guardrail bindings before approval. Applying a customization must update EFFECTIVE_WORKFLOW.md and WORKFLOW_CHANGE_LOG.md. Rejected requests must remain recorded in WORKFLOW_CHANGE_REQUESTS.md.

## Identity safety rule

A human may own multiple workcells.

One ADAPT action may execute under only one active workcell identity.

If the action prompt identity is missing or ambiguous, stop.

Do not execute based on human name alone.
