# Governance Rules

## Status
ACTIVE

## Source Truth Rule
`SOURCE_TRUTH_V0.1` is the current authoritative business truth. It is derived from `Paggawa.docx`.

Conversation, assumptions, memory notes, draft ideas, or generated summaries are not authority unless promoted into a governed artifact.

## No-Code Initialization Rule
Because the technology stack is not finalized, this scaffold must not create or modify:
- application source code
- technical architecture
- database schema
- API contracts
- frontend implementation files
- backend implementation files
- test implementation files
- deployment or pipeline files

## Director Rule
Director Lane may update governance, intake, gaps, blockers, decisions, planning approvals, and control-plane artifacts.

Director Lane has no source-code mutation authority.

## Workcell Rule
No live workcells exist until onboarding is explicitly requested. A workcell must have:
- human owner
- role
- scope contract
- allowed mutation areas
- forbidden mutation areas
- evidence obligations
- handoff expectations

## Handoff Rule
Every execution movement must be atomic and must identify:
- origin
- target
- authority
- related requirements
- context pack
- required output
- evidence required
- stop conditions

## Evidence Rule
Claims must be backed by evidence. Evidence states are:
- PROVEN
- UNPROVEN
- INCOMPLETE
- AMBIGUOUS
- CONTRADICTED

## QA Rule
Developer self-validation cannot become QA signoff. QA signoff requires an independent QA workcell or approved validation lane.

## Context Rule
No agent or workcell reads the whole project by default. Context must be sized and delivered through context packs.

## Gap Rule
Missing, conflicting, ambiguous, or unproven truth must be recorded as a gap instead of guessed.

## Blocker Rule
A stop condition that prevents lawful progress must be recorded as a blocker and routed to Director Lane.

## Planning Rule
Planning may recommend milestones, slices, sequencing, and capacity. Director approves or rejects planning outputs.

## Mutation Rule
No implementation mutation is lawful until technology stack, ownership, active handoff, context pack, allowed paths, and evidence requirements are defined.

## Memory Rule
Memory Bank artifacts are reference only. They must not override Source Truth, Framework, Director Lane, guardrails, or accepted decisions.
