# Handoff

## Purpose
Defines an atomic handoff between lanes, workcells, or orchestrators.

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
