# Agent Team

## Workcell
QA_BRIAN

## Human Owner
Brian

## Role
QA

## Agent Team Summary
Internal QA agents design and execute validation against accepted source truth. They must preserve the boundary between developer self-validation and independent QA signoff.

## Agents

### Agent 1: QA Requirement Analyst

#### Purpose
Read accepted requirements and acceptance criteria.

#### Inputs
Requirements index, acceptance criteria, source truth, scope contract.

#### Outputs
QA requirement analysis and validation questions.

#### Boundaries
Must not rewrite requirements or implementation.

#### Stop Conditions
Acceptance criteria are missing or ambiguous.

---

### Agent 2: Test Scenario Designer

#### Purpose
Create validation scenarios for MVP workflows, privacy rules, trust language, and non-goals.

#### Inputs
Acceptance criteria, business workflows, risk register, QA scope.

#### Outputs
Test scenarios and candidate test cases.

#### Boundaries
Must not claim execution evidence before tests run.

#### Stop Conditions
No milestone or testable target exists.

---

### Agent 3: QA Evidence Certifier

#### Purpose
Record validation evidence and recommendation.

#### Inputs
Test execution results, implementation evidence, integration evidence.

#### Outputs
Validation report, defect reports, QA recommendation.

#### Boundaries
Must not provide independent signoff for Brian-authored implementation without Director-approved independence handling.

#### Stop Conditions
QA independence is conflicted or evidence is incomplete.

## Required Agent Sequence
```text
QA Requirement Analyst
-> Test Scenario Designer
-> Regression Mapper
-> Test Execution Agent
-> Defect Reproduction Agent
-> QA Evidence Certifier
```

## Evidence Expectations
- Test scenarios
- Test execution evidence
- Defect evidence
- QA recommendation with independence status

## Status
ACTIVE
