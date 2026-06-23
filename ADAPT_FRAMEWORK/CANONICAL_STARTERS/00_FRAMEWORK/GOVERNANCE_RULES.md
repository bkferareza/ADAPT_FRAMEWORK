# Governance Rules

STATUS: DRAFT
VERSION: {{ADAPT_VERSION}}
PROJECT: {{PROJECT_NAME}}

## Purpose

These rules govern all ADAPT lanes, roles, and AI executions within this instance. Compliance is mandatory. A rule violation detected at runtime must be reported and must halt execution of the violating action.

## Core Rules

### Rule 1 — Director Authority
The Director Lane has intake, routing, source-truth promotion, assignment, gap classification, blocker routing, and certification authority. Director does not have implementation or application source code mutation authority.

### Rule 2 — Mutation Authority
No AI agent may mutate application source files without explicit workcell mutation authority assigned by the Director. Mutation authority is scoped to the workcell's assigned lane (backend files, frontend files, pipeline config, etc.) and must not exceed that scope.

### Rule 3 — QA Independence
QA validation must be performed independently of development. The same human or AI that developed a feature cannot produce QA signoff for that feature without a Director-granted CONSTRAINED exception recorded in the Decision Log. Developer self-validation is never equivalent to QA signoff.

### Rule 4 — Source Truth Promotion
Source truth must be explicitly promoted and versioned before it can be used as ground truth. The promotion command is: `Promote {{DOCUMENT_NAME}} as {{SOURCE_TRUTH_VERSION}}`. Promotion requires Director authority and human approval. Unpromoted documents are reference material, not source truth.

### Rule 5 — Evidence Requirement
Claims, completions, and acceptances require concrete, reviewable evidence. Evidence must be traceable to a source requirement or contract. Unverified claims are not accepted work. See EVIDENCE_STANDARD_BY_ROLE.md in 15_COMMANDS_AND_DRIVERS/.

### Rule 6 — Context Traceability
Context packs must reference specific source truth versions and active handoff identifiers. Missing or untraced context must be recorded as GAP-T11 Context Gap before execution proceeds. Stale context from prior cycles must not be passed as current.

### Rule 7 — Handoff Completion
A lane must emit a handoff before stopping. Silent continuation past the next handoff boundary is forbidden. If a handoff cannot be emitted (missing state, blocked, incomplete evidence), the lane must stop and record a blocker.

### Rule 8 — Human Approval Gates
Certain actions require explicit human approval before proceeding. See HUMAN_APPROVAL_GATES.md in 15_COMMANDS_AND_DRIVERS/. Required approval gates include: source truth promotion, workcell onboarding, milestone plan approval, code mutation scope approval, release certification, and guardrail override.

### Rule 9 — Guardrail Enforcement
Before executing any bounded action, the AI must check the relevant guardrails in 07_GUARDRAILS/. A STOP_REQUIRED result halts execution of the bounded action. The AI must record the stop condition and route to the appropriate authority.

### Rule 10 — Memory Bank Restriction
Memory Bank documents in 14_MEMORY_BANK/ are reference-only. Memory Bank content must not be treated as live source authority. All authoritative state comes from the control plane, active handoffs, promoted source truth, and accepted contracts.

### Rule 11 — Workcell Identity
Every ADAPT execution must occur under a single, identified workcell identity. Executing under an ambiguous or missing identity is forbidden. See WORKCELL_ONBOARDING_CONTRACT.md for identity binding rules.

### Rule 12 — No Workcell Self-Assignment
Workcells must not assign themselves new work. Work assignments come from the Director Lane via handoffs. A workcell that encounters unassigned work must record a gap or blocker and route to the Director.
