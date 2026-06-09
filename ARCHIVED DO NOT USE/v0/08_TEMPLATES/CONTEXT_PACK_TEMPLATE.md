# Context Pack

## Purpose
Defines the smallest safe context for a single handoff or execution.

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
