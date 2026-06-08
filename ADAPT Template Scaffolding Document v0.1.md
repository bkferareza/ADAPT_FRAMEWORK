ADAPT Template Scaffolding Document v0.1
1. Purpose
This document defines the reusable template files that must be scaffolded for an ADAPT project deployment.
This is not the full ADAPT project scaffold. This document is specifically for creating the reusable templates that future ADAPT orchestrators, lanes, workcells, handoffs, evaluations, and context packs will use.
The target output folder is:
ADAPT/08_TEMPLATES/
The generated templates must support:
•	Director Lane control
•	Workcell creation
•	Role-specific agent teams
•	Scope contracts
•	Roadmaps
•	Atomic handoffs
•	Context packs
•	Context deltas
•	Evidence reports
•	Gap handling
•	Blocker handling
•	QA validation
•	Integration readiness
•	Planning outputs
•	Onboarding outputs
•	Janitor reports
•	Challenge / 10th Man reviews
•	End-of-cycle consolidation
________________________________________
2. Template Scaffolding Rules
The scaffolder must follow these rules:
1.	Create only template files under ADAPT/08_TEMPLATES/.
2.	Do not create live project artifacts.
3.	Do not create actual workcells.
4.	Do not assign real work.
5.	Do not mutate source code.
6.	Do not infer real team members unless provided.
7.	Use placeholders for project-specific values.
8.	Every template must be usable by a future ADAPT orchestrator.
9.	Every template must be readable by humans.
10.	Every template must clearly define required fields.
11.	Every template must distinguish required, optional, and generated fields.
12.	Every template must include a status field when applicable.
13.	Every template must include ownership fields when applicable.
14.	Every template must include evidence expectations when applicable.
15.	Every template must include handoff expectations when applicable.
________________________________________
3. Global Placeholder Convention
Use these placeholder styles consistently:
<PROJECT_NAME>
<WORKCELL_NAME>
<HUMAN_OWNER>
<ROLE>
<DATE>
<MILESTONE_ID>
<SPRINT_ID>
<REQUIREMENT_ID>
<TASK_ID>
<HANDOFF_ID>
<CONTEXT_PACK_ID>
<CONTEXT_DELTA_ID>
<GAP_ID>
<BLOCKER_ID>
<DECISION_ID>
<DEFECT_ID>
<CHALLENGE_ID>
Status values should use uppercase controlled values.
Example:
STATUS: DRAFT | ACTIVE | BLOCKED | READY_FOR_REVIEW | ACCEPTED | SUPERSEDED | ARCHIVED
________________________________________
4. Required Template Files
The scaffolder must create the following files:
ADAPT/08_TEMPLATES/
├── WORKCELL_IDENTITY_TEMPLATE.md
├── SCOPE_CONTRACT_TEMPLATE.md
├── AGENT_TEAM_TEMPLATE.md
├── ROADMAP_TEMPLATE.md
├── TASK_REGISTER_TEMPLATE.md
├── HANDOFF_TEMPLATE.md
├── EVIDENCE_REPORT_TEMPLATE.md
├── GAP_TEMPLATE.md
├── BLOCKER_TEMPLATE.md
├── CONTEXT_PACK_TEMPLATE.md
├── CONTEXT_DELTA_TEMPLATE.md
├── VALIDATION_REPORT_TEMPLATE.md
├── QA_TEST_CASE_TEMPLATE.md
├── DEFECT_REPORT_TEMPLATE.md
├── INTEGRATION_REPORT_TEMPLATE.md
├── MERGE_READINESS_TEMPLATE.md
├── ONBOARDING_REQUEST_TEMPLATE.md
├── ONBOARDING_REPORT_TEMPLATE.md
├── MILESTONE_PLAN_TEMPLATE.md
├── WORKCELL_ROADMAP_TEMPLATE.md
├── OVEREXTENSION_RISK_TEMPLATE.md
├── JANITOR_REPORT_TEMPLATE.md
├── CHALLENGE_REPORT_TEMPLATE.md
└── CYCLE_CONSOLIDATION_TEMPLATE.md
________________________________________
5. Template Contents
5.1 WORKCELL_IDENTITY_TEMPLATE.md
Purpose:
Defines the identity of a human-owned ADAPT Workcell.
Required content:
# Workcell Identity

## Workcell Name

<WORKCELL_NAME>

## Human Owner

<HUMAN_OWNER>

## Role

<ROLE>

## Workcell Type

Select one:

- DIRECTOR
- INTEGRATOR
- BACKEND
- FRONTEND
- QA
- PLANNING
- CONTEXT_STEWARD
- JANITOR
- CHALLENGE
- OTHER

## Mission

Describe the mission of this workcell.

## Authority Level

Describe what this workcell may decide, recommend, execute, or validate.

## Code Mutation Authority

Select one:

- NONE
- LIMITED
- ASSIGNED_SCOPE_ONLY
- INTEGRATION_SCOPE_ONLY
- VALIDATION_ONLY

## Allowed Artifact Mutation

List ADAPT artifacts this workcell may update.

## Forbidden Artifact Mutation

List ADAPT artifacts this workcell must not update.

## Allowed Code Mutation

List source areas this workcell may mutate, if any.

## Forbidden Code Mutation

List source areas this workcell must not mutate.

## Required Evidence

List evidence this workcell must produce before handoff or closure.

## Required Handoffs

List expected handoff targets.

## Stop Conditions

The workcell must stop when:

- Required source truth is missing.
- Scope is unclear.
- Context pack is insufficient.
- Work exceeds assigned scope.
- Required evidence cannot be produced.
- A guardrail blocks execution.

## Status

DRAFT
________________________________________
5.2 SCOPE_CONTRACT_TEMPLATE.md
Purpose:
Defines what a workcell owns, consumes, validates, and must not touch.
Required content:
# Scope Contract

## Workcell

<WORKCELL_NAME>

## Owner

<HUMAN_OWNER>

## Role

<ROLE>

## Scope Summary

Describe the bounded scope of this workcell.

## Owned Requirement Sections

| Requirement ID | Title | Ownership Type | Status |
|---|---|---|---|
| <REQUIREMENT_ID> | <TITLE> | OWNER | DRAFT |

## Owned Capabilities

List business or technical capabilities owned by this workcell.

## Consumed Capabilities

List capabilities owned by other workcells that this workcell depends on.

## Exposed Contracts

List APIs, UI contracts, data contracts, test contracts, or integration contracts this workcell exposes.

## Required Consumers

List workcells that consume this workcell’s output.

## Required Validators

List workcells or orchestrators that must validate this workcell’s output.

## Allowed Mutation Areas

List code or artifact paths allowed for this workcell.

## Forbidden Areas

List code or artifact paths forbidden for this workcell.

## Dependency Rules

Describe dependency constraints.

## Escalation Rules

Escalate to Director when:

- Ownership is unclear.
- Another lane’s scope is required.
- Acceptance criteria are missing.
- Requirement truth conflicts with implementation plan.

Escalate to Integrator when:

- API, UI, pipeline, or cross-lane contract alignment is required.

Escalate to QA when:

- Independent behavior validation is required.

## Status

DRAFT
________________________________________
5.3 AGENT_TEAM_TEMPLATE.md
Purpose:
Defines the internal agents inside a workcell.
Required content:
# Agent Team

## Workcell

<WORKCELL_NAME>

## Human Owner

<HUMAN_OWNER>

## Role

<ROLE>

## Agent Team Summary

Describe the internal agent team for this workcell.

## Agents

### Agent 1: <AGENT_NAME>

#### Purpose

Describe the agent’s responsibility.

#### Inputs

List artifacts or context this agent consumes.

#### Outputs

List artifacts this agent produces.

#### Boundaries

List what this agent must not do.

#### Stop Conditions

List when this agent must stop.

---

### Agent 2: <AGENT_NAME>

#### Purpose

#### Inputs

#### Outputs

#### Boundaries

#### Stop Conditions

---

## Required Agent Sequence

Describe the default order in which agents should run.

Example:

```text
Requirement Analyst
→ Planner / Designer
→ Builder or Executor
→ Self Validator
→ Evidence Reporter
Evidence Expectations
List evidence required before the workcell can hand off.
Status
DRAFT

---

## 5.4 `ROADMAP_TEMPLATE.md`

Purpose:

Defines a workcell’s roadmap.

Required content:

```markdown
# Workcell Roadmap

## Workcell

<WORKCELL_NAME>

## Human Owner

<HUMAN_OWNER>

## Milestone

<MILESTONE_ID>

## Roadmap Summary

Describe the workcell’s roadmap for this milestone or cycle.

## Assigned Goals

| Goal ID | Description | Priority | Status |
|---|---|---|---|
| <GOAL_ID> | <DESCRIPTION> | HIGH | DRAFT |

## Assigned Requirements

| Requirement ID | Title | Expected Output | Status |
|---|---|---|---|
| <REQUIREMENT_ID> | <TITLE> | <OUTPUT> | DRAFT |

## Execution Sequence

1. Read assigned source truth.
2. Review scope contract.
3. Analyze requirements.
4. Produce local plan.
5. Execute scoped work.
6. Produce self-validation or validation evidence.
7. Handoff to next owner.

## Dependencies

List upstream dependencies.

## Handoff Targets

List expected handoff recipients.

## Overextension Check

State whether the assigned work appears reasonable for the milestone.

## Risks

List risks.

## Status

DRAFT
________________________________________
5.5 TASK_REGISTER_TEMPLATE.md
Purpose:
Tracks assigned tasks inside a workcell.
Required content:
# Task Register

## Workcell

<WORKCELL_NAME>

## Human Owner

<HUMAN_OWNER>

| Task ID | Requirement ID | Description | Owner | Status | Blocker | Evidence |
|---|---|---|---|---|---|---|
| <TASK_ID> | <REQUIREMENT_ID> | <DESCRIPTION> | <HUMAN_OWNER> | DRAFT | None | Pending |

## Status Values

- DRAFT
- READY
- IN_PROGRESS
- BLOCKED
- READY_FOR_HANDOFF
- HANDED_OFF
- ACCEPTED
- SUPERSEDED
________________________________________
5.6 HANDOFF_TEMPLATE.md
Purpose:
Defines an atomic handoff between lanes, workcells, or orchestrators.
Required content:
# Handoff

## Handoff ID

<HANDOFF_ID>

## Status

DRAFT

## From

<ORIGIN_WORKCELL_OR_ORCHESTRATOR>

## To

<TARGET_WORKCELL_OR_ORCHESTRATOR>

## Handoff Type

Select one:

- REQUIREMENT_ASSIGNMENT
- IMPLEMENTATION_HANDOFF
- INTEGRATION_HANDOFF
- QA_HANDOFF
- GAP_HANDOFF
- BLOCKER_HANDOFF
- CONTEXT_HANDOFF
- CERTIFICATION_HANDOFF
- CONSOLIDATION_HANDOFF
- OTHER

## Related Requirement Sections

- <REQUIREMENT_ID>

## Related Tasks

- <TASK_ID>

## Summary

Describe what is being handed off.

## Current Authority

Explain why this handoff is lawful.

## Context Pack

<CONTEXT_PACK_ID>

## Required Action

Describe the exact next action.

## Required Inputs

List required inputs.

## Required Outputs

List required outputs.

## Required Evidence

List evidence required for this handoff to be considered complete.

## Known Blockers

List blockers or write `None`.

## Stop Conditions

Stop if:

- Context pack is insufficient.
- Required authority is missing.
- Scope exceeds target workcell.
- Required source truth is missing.
- Conflicting handoff exists.

## Completion Criteria

List completion criteria.

## Next Expected Handoff

Describe expected next handoff after completion.
________________________________________
5.7 EVIDENCE_REPORT_TEMPLATE.md
Purpose:
Records proof of completed work.
Required content:
# Evidence Report

## Evidence ID

<EVIDENCE_ID>

## Workcell

<WORKCELL_NAME>

## Related Handoff

<HANDOFF_ID>

## Related Requirements

- <REQUIREMENT_ID>

## Summary

Summarize what was done.

## Work Performed

List actions performed.

## Artifacts Changed

| Artifact / File | Change Summary | Reason |
|---|---|---|
| <PATH> | <SUMMARY> | <REASON> |

## Validation Performed

Describe validation performed.

## Evidence Produced

List evidence produced.

## Claims

| Claim | Evidence | Status |
|---|---|---|
| <CLAIM> | <EVIDENCE> | PROVEN |

## Claim Status Values

- PROVEN
- UNPROVEN
- INCOMPLETE
- AMBIGUOUS
- CONTRADICTED

## Known Gaps

List gaps or write `None`.

## Known Blockers

List blockers or write `None`.

## Handoff Recommendation

State next recommended handoff.

## Status

DRAFT
________________________________________
5.8 GAP_TEMPLATE.md
Purpose:
Records any missing, conflicting, unproven, invalidated, or ambiguous truth.
Required content:
# Gap Record

## Gap ID

<GAP_ID>

## Status

DRAFT

## Gap Type

Select one:

- GAP-T01 Requirement Truth Gap
- GAP-T02 Translation Gap
- GAP-T03 Ownership Gap
- GAP-T04 Dependency Gap
- GAP-T05 Depth Gap
- GAP-T06 Implementation Gap
- GAP-T07 Integration Gap
- GAP-T08 Validation Gap
- GAP-T09 Runtime Gap
- GAP-T10 Decision Gap
- GAP-T11 Context Gap

## Summary

Describe the gap.

## Detected By

<WORKCELL_OR_ORCHESTRATOR>

## Date Detected

<DATE>

## Related Requirements

- <REQUIREMENT_ID>

## Affected Workcells

- <WORKCELL_NAME>

## Severity

Select one:

- LOW
- MEDIUM
- HIGH
- BLOCKING

## Impact

Describe impact.

## Required Closure Proof

List proof required to close the gap.

## Assigned Owner

<WORKCELL_OR_ORCHESTRATOR>

## Routing Recommendation

Describe where this gap should go.

## Resolution Status

Select one:

- OPEN
- ASSIGNED
- IN_PROGRESS
- RESOLVED
- ACCEPTED_RISK
- DEFERRED
- DUPLICATE
- INVALID
- BLOCKER

## Resolution Notes

Describe resolution.
________________________________________
5.9 BLOCKER_TEMPLATE.md
Purpose:
Records a stop condition that prevents lawful progress.
Required content:
# Blocker Record

## Blocker ID

<BLOCKER_ID>

## Status

OPEN

## Summary

Describe the blocker.

## Blocker Type

Select one:

- REQUIREMENT_BLOCKER
- TECHNICAL_BLOCKER
- DEPENDENCY_BLOCKER
- CONTEXT_BLOCKER
- INTEGRATION_BLOCKER
- QA_BLOCKER
- PIPELINE_BLOCKER
- APPROVAL_BLOCKER
- OTHER

## Detected By

<WORKCELL_OR_ORCHESTRATOR>

## Related Requirements

- <REQUIREMENT_ID>

## Affected Workcells

- <WORKCELL_NAME>

## Impact

Describe what cannot proceed.

## Required Decision or Action

Describe what is needed to unblock.

## Assigned Owner

<WORKCELL_OR_ORCHESTRATOR>

## Escalation Target

<WORKCELL_OR_ORCHESTRATOR>

## Closure Proof

List proof required to close.

## Resolution Notes

Add resolution notes.

## Final Status

OPEN
________________________________________
5.10 CONTEXT_PACK_TEMPLATE.md
Purpose:
Defines the smallest safe context for a single handoff or execution.
Required content:
# Context Pack

## Context Pack ID

<CONTEXT_PACK_ID>

## Related Handoff

<HANDOFF_ID>

## Target Workcell / Agent

<WORKCELL_OR_AGENT>

## Purpose

Describe why this context pack exists.

## Job Size

Select one:

- XS
- S
- M
- L
- XL

## Execution Decision

Select one:

- EXECUTE_NOW
- SPLIT_FIRST
- BLOCK_AND_REQUEST_CLARIFICATION
- ROUTE_TO_OWNER

## Must Read

List required artifacts.

## Conditional Read

List artifacts to read only if needed.

## Do Not Read

List artifacts that should not be loaded.

## Current Truth Summary

Summarize only the current relevant truth.

## Relevant Requirements

- <REQUIREMENT_ID>

## Relevant Decisions

- <DECISION_ID>

## Relevant Contracts

List contracts.

## Allowed Scope

Describe allowed scope.

## Forbidden Scope

Describe forbidden scope.

## Known Gaps

List gaps or write `None`.

## Known Blockers

List blockers or write `None`.

## Required Output

List expected outputs.

## Closure Proof

List evidence required.

## Context Gap Rule

If required truth is missing from this Context Pack, create GAP-T11 Context Gap instead of guessing.

## Status

DRAFT
________________________________________
5.11 CONTEXT_DELTA_TEMPLATE.md
Purpose:
Captures what changed after an execution so the next context pack can stay small.
Required content:
# Context Delta

## Context Delta ID

<CONTEXT_DELTA_ID>

## Related Context Pack

<CONTEXT_PACK_ID>

## Related Handoff

<HANDOFF_ID>

## Producing Workcell

<WORKCELL_NAME>

## Summary

Summarize the delta.

## New Truth Created

List new accepted or candidate truth.

## Artifacts Changed

List changed artifacts.

## Decisions Made

List decisions or write `None`.

## Gaps Created

List gaps or write `None`.

## Blockers Created

List blockers or write `None`.

## Superseded Context

List old context that should no longer be treated as current.

## Recommended Next Context

List what the next agent should receive.

## Recommended Next Handoff

Describe next handoff.

## Status

DRAFT
________________________________________
5.12 VALIDATION_REPORT_TEMPLATE.md
Purpose:
Records validation evidence.
Required content:
# Validation Report

## Validation ID

<VALIDATION_ID>

## Validator

<WORKCELL_OR_AGENT>

## Validation Type

Select one:

- DEV_SELF_VALIDATION
- QA_VALIDATION
- INTEGRATION_VALIDATION
- CONTRACT_VALIDATION
- PIPELINE_VALIDATION
- CERTIFICATION_VALIDATION
- CHALLENGE_VALIDATION

## Related Requirements

- <REQUIREMENT_ID>

## Related Handoff

<HANDOFF_ID>

## Validation Summary

Summarize validation.

## Expected Behavior

Describe expected behavior.

## Actual Behavior

Describe actual behavior.

## Evidence

List logs, screenshots, test results, pipeline results, or observed behavior.

## Result

Select one:

- PASS
- FAIL
- PARTIAL
- BLOCKED
- NOT_TESTABLE
- CLARIFICATION_REQUIRED

## Defects Created

List defects or write `None`.

## Gaps Created

List gaps or write `None`.

## Recommendation

State recommendation.

## Status

DRAFT
________________________________________
5.13 QA_TEST_CASE_TEMPLATE.md
Purpose:
Defines an individual QA test case.
Required content:
# QA Test Case

## Test Case ID

<TEST_CASE_ID>

## Related Requirement

<REQUIREMENT_ID>

## Title

<TITLE>

## Test Type

Select one:

- HAPPY_PATH
- NEGATIVE
- EDGE_CASE
- REGRESSION
- PERMISSION
- INTEGRATION
- UI
- API
- DATA
- OTHER

## Preconditions

List preconditions.

## Test Data

List test data.

## Steps

1. <STEP>

## Expected Result

Describe expected result.

## Actual Result

To be filled during execution.

## Status

DRAFT

## Evidence

Add evidence during execution.

## Defect ID

<DEFECT_ID or None>
________________________________________
5.14 DEFECT_REPORT_TEMPLATE.md
Purpose:
Records defects found by QA or validation.
Required content:
# Defect Report

## Defect ID

<DEFECT_ID>

## Status

OPEN

## Reported By

<WORKCELL_NAME>

## Related Requirement

<REQUIREMENT_ID>

## Related Test Case

<TEST_CASE_ID>

## Summary

Describe the defect.

## Expected Behavior

Describe expected behavior.

## Actual Behavior

Describe actual behavior.

## Reproduction Steps

1. <STEP>

## Environment

Describe environment.

## Evidence

List screenshots, logs, videos, pipeline runs, or other proof.

## Severity

Select one:

- LOW
- MEDIUM
- HIGH
- CRITICAL

## Suspected Owner

<WORKCELL_NAME>

## Routing Recommendation

Describe routing.

## Resolution Notes

Add resolution notes.

## Final Status

OPEN
________________________________________
5.15 INTEGRATION_REPORT_TEMPLATE.md
Purpose:
Records cross-lane integration evidence.
Required content:
# Integration Report

## Integration Report ID

<INTEGRATION_REPORT_ID>

## Integrator Workcell

<WORKCELL_NAME>

## Related Handoffs

- <HANDOFF_ID>

## Related Requirements

- <REQUIREMENT_ID>

## Integration Summary

Summarize integration status.

## Workcells Involved

- <WORKCELL_NAME>

## Contracts Checked

List contracts checked.

## Contract Alignment

| Contract | Expected | Actual | Status |
|---|---|---|---|
| <CONTRACT> | <EXPECTED> | <ACTUAL> | PASS |

## Pipeline / Build Status

Describe build or pipeline status.

## Cross-Lane Gaps

List gaps or write `None`.

## Integration Blockers

List blockers or write `None`.

## Recommendation

Select one:

- READY_FOR_QA
- RETURN_TO_OWNER
- READY_FOR_DIRECTOR_REVIEW
- BLOCKED
- NEEDS_MORE_EVIDENCE

## Status

DRAFT
________________________________________
5.16 MERGE_READINESS_TEMPLATE.md
Purpose:
Determines whether work is safe to merge.
Required content:
# Merge Readiness Report

## Merge Readiness ID

<MERGE_READINESS_ID>

## Related Branch / Work Item

<BRANCH_OR_WORK_ITEM>

## Related Requirements

- <REQUIREMENT_ID>

## Related Workcells

- <WORKCELL_NAME>

## Required Evidence Checklist

| Evidence | Required | Present | Notes |
|---|---|---|---|
| Dev evidence | Yes | No | Pending |
| Integration evidence | Yes | No | Pending |
| QA evidence | Yes | No | Pending |
| Pipeline pass | Yes | No | Pending |
| Blockers closed | Yes | No | Pending |

## Open Gaps

List gaps or write `None`.

## Open Blockers

List blockers or write `None`.

## Merge Recommendation

Select one:

- READY_TO_MERGE
- NOT_READY
- BLOCKED
- CONDITIONAL_APPROVAL

## Required Follow-Up

List follow-ups.

## Status

DRAFT
________________________________________
5.17 ONBOARDING_REQUEST_TEMPLATE.md
Purpose:
Defines a request to create a new workcell.
Required content:
# Onboarding Request

## Onboarding Request ID

<ONBOARDING_REQUEST_ID>

## Requested Command

Example:

```text
Onboard <HUMAN_OWNER> as <ROLE>
Human Owner
<HUMAN_OWNER>
Requested Role
Requested By
Date
Existing Project State
Describe current team/project state.
Expected Workcell Type
Select one:
•	INTEGRATOR
•	BACKEND
•	FRONTEND
•	QA
•	OTHER
Notes
Add notes.
Status
DRAFT

---

## 5.18 `ONBOARDING_REPORT_TEMPLATE.md`

Purpose:

Records the result of onboarding a new workcell.

Required content:

```markdown
# Onboarding Report

## Onboarding Report ID

<ONBOARDING_REPORT_ID>

## Human Owner

<HUMAN_OWNER>

## Role

<ROLE>

## Workcell Created

<WORKCELL_NAME>

## Files Created

List files created.

## Scope Assigned

Summarize assigned scope.

## Initial Roadmap Created

Yes / No

## First Handoff Created

<HANDOFF_ID>

## Updated Director Artifacts

List updated Director artifacts.

## Open Questions

List questions or write `None`.

## Status

DRAFT
________________________________________
5.19 MILESTONE_PLAN_TEMPLATE.md
Purpose:
Defines the plan for a milestone.
Required content:
# Milestone Plan

## Milestone ID

<MILESTONE_ID>

## Milestone Name

<NAME>

## Planning Status

DRAFT

## Milestone Objective

Describe objective.

## Included Requirements

- <REQUIREMENT_ID>

## Excluded Requirements

- <REQUIREMENT_ID>

## Work Slices

| Slice ID | Description | Proposed Owner | Dependencies | Status |
|---|---|---|---|---|
| <SLICE_ID> | <DESCRIPTION> | <WORKCELL_NAME> | <DEPENDENCY> | DRAFT |

## Dependency Sequence

Describe recommended order.

## Workcell Allocation

| Workcell | Assigned Slices | Load | Risk |
|---|---|---|---|
| <WORKCELL_NAME> | <SLICES> | MEDIUM | LOW |

## Overextension Risks

List risks.

## QA Timing Plan

Describe when QA should receive validation candidates.

## Integrator Timing Plan

Describe when integration review should happen.

## Director Approval

PENDING

## Status

DRAFT
________________________________________
5.20 WORKCELL_ROADMAP_TEMPLATE.md
Purpose:
Defines a per-workcell roadmap for a milestone.
Required content:
# Workcell Roadmap

## Workcell

<WORKCELL_NAME>

## Human Owner

<HUMAN_OWNER>

## Milestone

<MILESTONE_ID>

## Roadmap Status

DRAFT

## Mission for This Milestone

Describe mission.

## Assigned Work

| Work Item | Requirement | Output | Priority | Status |
|---|---|---|---|---|
| <WORK_ITEM> | <REQUIREMENT_ID> | <OUTPUT> | HIGH | DRAFT |

## Suggested Execution Order

1. <STEP>

## Dependencies

List dependencies.

## Handoffs Expected

List handoffs expected.

## Evidence Required

List evidence required.

## Do Not Own

List explicitly out-of-scope items.

## Overextension Notes

State whether roadmap is reasonable.

## Status

DRAFT
________________________________________
5.21 OVEREXTENSION_RISK_TEMPLATE.md
Purpose:
Flags unrealistic workload distribution.
Required content:
# Overextension Risk Report

## Report ID

<REPORT_ID>

## Milestone

<MILESTONE_ID>

## Summary

Summarize overextension risk.

## Risk Items

| Workcell | Risk | Cause | Severity | Recommendation |
|---|---|---|---|---|
| <WORKCELL_NAME> | <RISK> | <CAUSE> | MEDIUM | <RECOMMENDATION> |

## Integration Timing Risk

Describe integration risks.

## QA Timing Risk

Describe QA risks.

## Dependency Risk

Describe dependency risks.

## Recommendation

Describe planning adjustment.

## Status

DRAFT
________________________________________
5.22 JANITOR_REPORT_TEMPLATE.md
Purpose:
Records cleanup, archive, stale artifact, and compaction findings.
Required content:
# Janitor Report

## Janitor Report ID

<JANITOR_REPORT_ID>

## Date

<DATE>

## Scope

Describe scope of janitor pass.

## Stale Artifacts

List stale artifacts.

## Archive Candidates

List archive candidates.

## Orphaned Tasks

List orphaned tasks.

## Stale Blockers

List stale blockers.

## Superseded Requirements

List superseded requirements.

## Context Packs to Archive

List context packs.

## Summary Compaction Candidates

List summaries to compact.

## Recommended Actions

List recommended cleanup actions.

## Actions Performed

List actions actually performed.

## Actions Requiring Director Approval

List actions requiring approval.

## Status

DRAFT
________________________________________
5.23 CHALLENGE_REPORT_TEMPLATE.md
Purpose:
Records optional 10th Man / Challenge Lane review.
Required content:
# Challenge Report

## Challenge ID

<CHALLENGE_ID>

## Trigger

Select one:

- CONSENSUS_TOO_FAST
- HIGH_RISK_CHANGE
- SECURITY_AUTH_DATA_CONCERN
- RELEASE_CANDIDATE
- LARGE_CHANGE_NO_DEFECTS
- DIRECTOR_REQUEST
- OTHER

## Related Requirements

- <REQUIREMENT_ID>

## Consensus Being Challenged

Describe the consensus.

## Challenge Claim

State the disagreement or concern.

## Possible Failure Mode

Describe possible failure mode.

## Evidence or Reasoning

Provide evidence or reasoning.

## Affected Workcells

- <WORKCELL_NAME>

## Recommended Verification

Describe what should be checked.

## Severity

LOW / MEDIUM / HIGH / BLOCKING

## Challenge Result

Select one:

- NO_ACTION
- CREATE_GAP
- CREATE_BLOCKER
- REQUEST_ADDITIONAL_VALIDATION

## Director Decision

PENDING

## Status

DRAFT
________________________________________
5.24 CYCLE_CONSOLIDATION_TEMPLATE.md
Purpose:
Records end-of-cycle consolidation.
Required content:
# Cycle Consolidation Report

## Cycle / Sprint ID

<SPRINT_ID>

## Date

<DATE>

## Director Lane

<WORKCELL_OR_DIRECTOR>

## Summary

Summarize cycle result.

## Completed Work

| Requirement | Workcell | Evidence | Status |
|---|---|---|---|
| <REQUIREMENT_ID> | <WORKCELL_NAME> | <EVIDENCE_ID> | ACCEPTED |

## Carry-Over Work

| Requirement | Workcell | Reason | Next Action |
|---|---|---|---|
| <REQUIREMENT_ID> | <WORKCELL_NAME> | <REASON> | <NEXT_ACTION> |

## Open Gaps

List open gaps.

## Open Blockers

List open blockers.

## Integration Status

Summarize integration status.

## QA Status

Summarize QA status.

## Pipeline / Release Status

Summarize pipeline/release status.

## Janitor Findings

Summarize janitor findings.

## Accepted Work Register Updates

List accepted work.

## Next-Cycle Planning Handoff

<HANDOFF_ID>

## Director Certification

Select one:

- CYCLE_ACCEPTED
- PARTIAL_ACCEPTANCE
- BLOCKED
- NEEDS_REPLAN

## Status

DRAFT
________________________________________
6. Scaffolding Completion Criteria
The template scaffold is complete when all required template files exist under:
ADAPT/08_TEMPLATES/
and each file includes:
•	title
•	purpose
•	required fields
•	status field
•	ownership field where applicable
•	evidence field where applicable
•	handoff field where applicable
•	stop conditions where applicable
•	controlled values where applicable
________________________________________
7. First Validation Pass
After creating the templates, perform this validation:
1. Confirm every required file exists.
2. Confirm no live workcell was created.
3. Confirm no source code was mutated.
4. Confirm all templates use placeholders.
5. Confirm templates support Director Lane, Workcells, Context Packs, Handoffs, Evidence, Gaps, Blockers, QA, Integration, Planning, Onboarding, Janitor, and Challenge Lane.
6. Confirm templates distinguish developer self-validation from QA validation.
7. Confirm templates do not treat Memory Bank as authority.
Expected result:
TEMPLATE_SCAFFOLD_STATUS: READY

