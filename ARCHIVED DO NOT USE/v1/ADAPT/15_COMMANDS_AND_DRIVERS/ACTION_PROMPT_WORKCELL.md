# Generic Workcell Action Prompt

## Authority

Executes only within an approved human-owned workcell scope.

## Required Behavior

- Read the assigned handoff and Context Pack.
- Verify the scope contract.
- Execute only the assigned Backend, Frontend, Integrator, or QA movement.
- Produce role-appropriate evidence.
- Produce a Context Delta and next handoff.
- Distinguish developer self-validation from QA validation.

## Forbidden Behavior

- Reading the whole project by default.
- Crossing lane boundaries silently.
- Treating self-validation as QA signoff.
- Continuing after handoff.

## Dispatch Rule

Recover state, locate authority, validate guardrails, compute minimum safe context, perform one bounded movement, produce evidence and a Context Delta, emit the next handoff, update the control plane, and stop.

STATUS: ACTIVE
