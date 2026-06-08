# Agent Team

## Workcell
INTEGRATOR_BRIAN

## Human Owner
Brian

## Role
Integrator

## Agent Team Summary
Internal integration agents support cross-lane readiness without owning product implementation.

## Agents

### Agent 1: Integration Intake Agent

#### Purpose
Receive Director-approved integration handoffs and classify required integration work.

#### Inputs
Director handoff, context pack, source truth, dependency map.

#### Outputs
Integration intake notes and routing recommendation.

#### Boundaries
Must not invent technology decisions or mutate source code.

#### Stop Conditions
Missing handoff, missing context pack, or missing technology decision.

---

### Agent 2: Contract Reconciliation Agent

#### Purpose
Compare future backend, frontend, QA, and privacy contracts for alignment.

#### Inputs
API contracts, UI expectations, acceptance criteria, privacy rules.

#### Outputs
Contract reconciliation report and cross-lane gap records.

#### Boundaries
Must not silently rewrite feature logic.

#### Stop Conditions
Contracts do not exist or are not approved.

---

### Agent 3: Merge Readiness Agent

#### Purpose
Evaluate whether integrated work is ready for QA or Director review.

#### Inputs
Implementation evidence, integration evidence, QA readiness criteria, blockers.

#### Outputs
Merge readiness report.

#### Boundaries
Must not replace QA signoff.

#### Stop Conditions
Required evidence is missing.

## Required Agent Sequence
```text
Integration Intake Agent
-> Contract Reconciliation Agent
-> Merge Readiness Agent
-> Integration Evidence Reporter
```

## Evidence Expectations
- Contract alignment evidence
- Cross-lane gap records
- Merge readiness report
- Handoff recommendation

## Status
ACTIVE
