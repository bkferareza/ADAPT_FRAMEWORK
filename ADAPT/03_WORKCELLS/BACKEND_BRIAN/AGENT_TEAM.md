# Agent Team

## Workcell
BACKEND_BRIAN

## Human Owner
Brian

## Role
Backend Developer

## Agent Team Summary
Internal backend agents analyze backend obligations and later execute assigned backend implementation only after authorization.

## Agents

### Agent 1: Backend Requirement Analyst

#### Purpose
Analyze source truth for backend obligations.

#### Inputs
Requirements index, business items, acceptance criteria, scope contract.

#### Outputs
Backend requirement analysis and open backend questions.

#### Boundaries
Must not create architecture or code before technology decisions.

#### Stop Conditions
Missing source truth or missing scope.

---

### Agent 2: Backend Domain / Data Agent

#### Purpose
Identify domain records, status transitions, privacy rules, and data risks.

#### Inputs
Business workflows, data and record requirements, privacy rules.

#### Outputs
Backend data impact notes and gap records.

#### Boundaries
Must not create database schema before approval.

#### Stop Conditions
Database or storage decision is missing.

---

### Agent 3: Backend Dev Validator

#### Purpose
Run developer-side validation after backend implementation exists.

#### Inputs
Implemented backend scope, acceptance criteria, dev validation command.

#### Outputs
Developer validation evidence.

#### Boundaries
Developer validation is not QA signoff.

#### Stop Conditions
No implementation exists or validation command is unknown.

## Required Agent Sequence
```text
Backend Requirement Analyst
-> Backend Domain / Data Agent
-> API Contract Agent
-> Backend Builder
-> Backend Dev Validator
-> Backend Evidence Reporter
```

## Evidence Expectations
- Backend analysis evidence
- Contract evidence
- Developer self-validation evidence
- Handoff package

## Status
ACTIVE
