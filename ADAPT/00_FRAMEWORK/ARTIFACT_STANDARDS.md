# Artifact Standards

## Status
ACTIVE

## Purpose
Defines how ADAPT documents should be written and maintained.

## Naming
- Use uppercase controlled status values.
- Use stable IDs for requirements, gaps, blockers, decisions, milestones, handoffs, and context packs.
- Use descriptive Markdown headings.
- Use tables where traceability matters.

## Required Fields
Governed artifacts should include, when applicable:
- title
- purpose
- status
- owner or responsible lane
- related source truth
- related requirements
- evidence expectations
- handoff expectations
- open gaps
- blockers
- next action

## Status Values
General:
- DRAFT
- ACTIVE
- BLOCKED
- READY_FOR_REVIEW
- ACCEPTED
- SUPERSEDED
- ARCHIVED

Gaps:
- OPEN
- ASSIGNED
- IN_PROGRESS
- RESOLVED
- ACCEPTED_RISK
- DEFERRED
- DUPLICATE
- INVALID
- BLOCKER

Blockers:
- OPEN
- ROUTED
- IN_REVIEW
- RESOLVED
- CLOSED

## Requirement ID Convention
Use `PGG-REQ-###` for requirements derived from the Paggawa source truth.

## Business Item ID Convention
Use `PGG-BI-###` for normalized business items.

## Decision ID Convention
Use `DEC-###`.

## Gap ID Convention
Use `GAP-###`.

## Blocker ID Convention
Use `BLK-###`.

## Traceability
Every requirement should be traceable to a section of `SOURCE_TRUTH_V0.1`.

Every acceptance criterion should map to at least one requirement.

## Evidence Standard
Evidence must describe what was checked, what artifact changed or was reviewed, what result was observed, and what claim it supports.

## Non-Authority Artifacts
Notes, references, conversation summaries, and memory-bank entries are not authority unless promoted into governed artifacts.
