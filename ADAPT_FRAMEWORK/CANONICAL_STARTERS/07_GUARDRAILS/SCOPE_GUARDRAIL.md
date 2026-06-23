# SCOPE_GUARDRAIL

STATUS: DRAFT
PROJECT: {{PROJECT_NAME}}
GUARDRAIL_ID: {{GUARDRAIL_ID_SCOPE}}

## Enforcement Rule

No workcell may execute work outside its assigned scope as defined in its SCOPE_CONTRACT.md.

## Trigger Conditions

- An action would write, modify, or delete files outside the file paths declared in the workcell's SCOPE_CONTRACT.md
- An action would implement functionality not assigned to the workcell via its business items list in SCOPE_CONTRACT.md
- An action would route work to another lane without a Director-issued handoff artifact in 06_HANDOFFS/ACTIVE/
- A workcell attempts to accept or close a business item not listed in its SCOPE_CONTRACT.md
- A workcell discovers a dependency that would require touching another workcell's scope without a formal cross-scope authorization

## Outcome Types

### PASS

The planned action falls within the file paths, business items, and boundaries declared in the workcell's SCOPE_CONTRACT.md. No scope expansion is required. Proceed with the bounded action.

### WARN

The planned action is near the declared scope boundary. The action may be valid, but the relationship between the action and the scope declaration is not unambiguous. The AI agent must document the boundary reasoning before proceeding, record it in the active work log, and flag it in the next handoff for Director awareness.

### STOP_REQUIRED

The planned action is clearly outside the workcell's declared scope. The action must not be executed. The AI agent must stop immediately, record a blocker in 02_DIRECTOR_LANE/BLOCKER_REGISTER.md, emit a blocked handoff to the Director lane, and await an updated SCOPE_CONTRACT.md before resuming.

## AI Behavior When Fired

| Outcome | AI Must | Record In | Route To |
|---------|---------|-----------|----------|
| PASS | Proceed with bounded action | — | — |
| WARN | Proceed with documented boundary reasoning; flag in next handoff | Active work log; handoff artifact in 06_HANDOFFS/ACTIVE/ | Director (informational) |
| STOP_REQUIRED | STOP. Do not execute the action. Emit a blocked handoff. | 02_DIRECTOR_LANE/BLOCKER_REGISTER.md; 06_HANDOFFS/ACTIVE/ | Director lane |

## Override Requirements

- Only the Director role may expand a workcell's scope.
- Expansion requires an updated SCOPE_CONTRACT.md at 03_WORKCELLS/{{WORKCELL_ID}}/SCOPE_CONTRACT.md with a new version entry.
- Expansion requires a new Director-issued handoff artifact that explicitly references the updated scope contract.
- The workcell must not proceed on expanded scope until both conditions are met.
- No workcell may self-authorize a scope expansion under any circumstance.

## References

- `03_WORKCELLS/{{WORKCELL_ID}}/SCOPE_CONTRACT.md` — primary scope authority for this workcell
- `02_DIRECTOR_LANE/BLOCKER_REGISTER.md` — where scope blockers are recorded
- `06_HANDOFFS/ACTIVE/` — where blocked and informational handoffs are emitted
- `00_FRAMEWORK/GOVERNANCE_RULES.md` — framework-level scope enforcement rules
- `02_DIRECTOR_LANE/LANE_ASSIGNMENT_MATRIX.md` — lane-level scope assignments
