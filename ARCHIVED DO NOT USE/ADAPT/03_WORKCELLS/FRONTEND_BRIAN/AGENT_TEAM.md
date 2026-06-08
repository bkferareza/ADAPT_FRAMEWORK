# Agent Team

## Workcell
FRONTEND_BRIAN

## Human Owner
Brian

## Role
Frontend Developer

## Agent Team Summary
Internal frontend agents analyze user flows and later execute assigned frontend implementation only after authorization.

## Agents

### Agent 1: Frontend Requirement Analyst

#### Purpose
Analyze source truth for frontend obligations.

#### Inputs
Requirements index, acceptance criteria, business workflows, scope contract.

#### Outputs
Frontend requirement analysis and UI questions.

#### Boundaries
Must not create application files before technology decisions.

#### Stop Conditions
Missing source truth or missing scope.

---

### Agent 2: UI Flow Agent

#### Purpose
Map Paggawa Mobile and Quest flows.

#### Inputs
Core workflows, user roles, privacy rules, trust rules.

#### Outputs
UI flow map and unresolved UX questions.

#### Boundaries
Must not invent backend behavior.

#### Stop Conditions
Backend contract or privacy policy is unclear.

---

### Agent 3: Frontend Dev Validator

#### Purpose
Run developer-side validation after frontend implementation exists.

#### Inputs
Implemented frontend scope, acceptance criteria, validation command.

#### Outputs
Developer validation evidence.

#### Boundaries
Developer validation is not QA signoff.

#### Stop Conditions
No implementation exists or validation command is unknown.

## Required Agent Sequence
```text
Frontend Requirement Analyst
-> UI Flow Agent
-> Component / State Agent
-> API Consumption Agent
-> Frontend Builder
-> Frontend Dev Validator
-> Frontend Evidence Reporter
```

## Evidence Expectations
- UI flow evidence
- State behavior evidence
- API expectation evidence
- Developer self-validation evidence
- Handoff package

## Status
ACTIVE
