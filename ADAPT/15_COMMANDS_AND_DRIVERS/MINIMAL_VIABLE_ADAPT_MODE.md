# Minimal Viable ADAPT Mode

## Status
ACTIVE

## Purpose
ADAPT Lite is the smallest useful ADAPT operating mode. It preserves authority, Source Truth, context economy, onboarding, and handoff discipline without enabling every specialized lane.

## ADAPT Lite Includes
- Framework
- Source Truth
- Director Lane
- Templates
- Context Economy
- Onboarding

## Optional Modules Added Later
- Planning
- Full Guardrails
- Integrator
- QA
- Janitor
- Challenge Lane

## Use ADAPT Lite When
- The project is early or exploratory.
- The team is small.
- Requirements are still being normalized.
- No implementation work has started.
- The next action is intake, Source Truth, onboarding, or simple handoff setup.
- Full lane overhead would slow down basic alignment.

## Use Full ADAPT When
- Multiple workcells are active.
- Source code mutation is authorized.
- Integration or QA independence matters.
- Milestones need capacity planning and sequencing.
- Release certification is approaching.
- Evidence, guardrails, blockers, and gaps require strict governance.
- The project has cross-lane dependencies or high risk.

## Lite Mode Rules
- Source Truth remains authoritative.
- Director Lane still controls movement.
- Context must still be computed, not dumped.
- Workcells still require onboarding and scope contracts.
- Handoffs remain atomic.
- Developer self-validation still cannot become QA signoff.
- Missing modules must be recorded as gaps before work depends on them.

## Upgrade Path
1. Confirm Source Truth is current.
2. Confirm Director Lane control plane is valid.
3. Add Planning when milestone slicing is needed.
4. Add Guardrails before code mutation.
5. Add Integrator before cross-lane merge work.
6. Add QA before independent validation or release certification.
7. Add Janitor when artifact volume creates stale-context risk.
8. Add Challenge Lane before high-risk approval or release.

