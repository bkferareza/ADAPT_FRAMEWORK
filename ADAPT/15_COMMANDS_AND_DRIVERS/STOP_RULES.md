# Stop Rules

## Status
ACTIVE

## Purpose
These universal stop rules apply to every ADAPT command, orchestrator, and workcell.

## Universal Stop Rules
Stop if:
- No active authority exists.
- Multiple active handoffs exist.
- Source Truth is missing.
- Context Pack is missing or insufficient.
- Work exceeds scope.
- Mutation authority is missing.
- Director is asked to mutate code.
- QA validation is requested without acceptance criteria.
- Implementation task has no owner.
- Output evidence cannot be produced.
- Conflict exists between requirement and implementation.
- Guardrail returns STOP_REQUIRED.

## Additional Stop Triggers
Stop if:
- The request depends on Memory Bank as live authority.
- The command combines planning, approval, implementation, integration, QA, and consolidation into one uncontrolled move.
- A human approval gate is triggered but not satisfied.
- QA independence is compromised and no Director-approved handling exists.
- A blocker prevents lawful progress.
- A gap would require guessing product behavior.
- A task cannot emit a next handoff.

## Required Stop Output
When stopping, produce:
- stop reason
- violated rule or missing authority
- artifacts inspected
- evidence available
- gap or blocker to record
- recommended next lawful action

## Stop Is Not Failure
Stopping is a valid ADAPT outcome when continued execution would exceed authority, context, evidence, or scope.

