# Agent Team

## Purpose
Defines the internal agents inside a workcell.

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
Describe the agent's responsibility.

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
Describe the agent's responsibility.

#### Inputs
List artifacts or context this agent consumes.

#### Outputs
List artifacts this agent produces.

#### Boundaries
List what this agent must not do.

#### Stop Conditions
List when this agent must stop.

---

## Required Agent Sequence
Describe the default order in which agents should run.

Example:

```text
Requirement Analyst
-> Planner / Designer
-> Builder or Executor
-> Self Validator
-> Evidence Reporter
```

## Evidence Expectations
List evidence required before the workcell can hand off.

## Handoff Expectations
List expected handoff targets and required handoff artifacts.

## Status
DRAFT
