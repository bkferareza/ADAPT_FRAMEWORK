# Role To Workcell Map

## Canonical Roles

| Role key | Workcell type | Role authority | Default mutation authority | QA independence | Blueprint source |
|---|---|---|---|---|---|
| `DIRECTOR` | Governance | Intake, route, approve, certify, consolidate | ADAPT governance artifacts only; no source code | N/A | `ROLE_AGENT_BLUEPRINTS/DIRECTOR_AGENT_BLUEPRINT.md` |
| `INTEGRATOR` | Integration | Reconcile contracts and integration readiness | Approved integration artifacts and explicitly handed-off integration paths | N/A | `ROLE_AGENT_BLUEPRINTS/INTEGRATOR_AGENT_BLUEPRINT.md` |
| `BACKEND` | Delivery | Execute approved backend scope | Explicitly allowed backend paths in active handoff | N/A | `ROLE_AGENT_BLUEPRINTS/BACKEND_AGENT_BLUEPRINT.md` |
| `FRONTEND` | Delivery | Execute approved frontend scope | Explicitly allowed frontend paths in active handoff | N/A | `ROLE_AGENT_BLUEPRINTS/FRONTEND_AGENT_BLUEPRINT.md` |
| `QA` | Independent validation | Validate accepted behavior and certify QA evidence | QA artifacts and test assets only; no application source code | Required | `ROLE_AGENT_BLUEPRINTS/QA_AGENT_BLUEPRINT.md` |
| `PLANNING` | Planning | Recommend milestones, slices, sequencing, and capacity | Planning artifacts only | N/A | `ROLE_AGENT_BLUEPRINTS/PLANNING_AGENT_BLUEPRINT.md` |
| `CONTEXT_STEWARD` | Context governance | Recover state and prepare context | Context artifacts only | N/A | `ROLE_AGENT_BLUEPRINTS/CONTEXT_STEWARD_AGENT_BLUEPRINT.md` |
| `JANITOR` | Artifact maintenance | Detect, archive, compact, and report governed cleanup | Authorized maintenance artifacts only | N/A | `ROLE_AGENT_BLUEPRINTS/JANITOR_AGENT_BLUEPRINT.md` |
| `CHALLENGE` | Challenge review | Challenge assumptions, failure modes, and evidence | Challenge artifacts only; no execution authority | N/A | `ROLE_AGENT_BLUEPRINTS/CHALLENGE_AGENT_BLUEPRINT.md` |

## Mapping Rules

* Role aliases must be normalized to one canonical role before onboarding.
* A human name is not a workcell ID.
* One human in multiple roles receives one workcell and one action prompt per role.
* A workcell cannot load another role's blueprint to expand authority.
* Unsupported roles require Director review and a new approved role blueprint before onboarding.

## Workcell ID Pattern

`<ROLE>_<IDENTITY>`

## Action Prompt Pattern

`ACTION_PROMPT_<ROLE>_<IDENTITY>.md`

## Status

ROLE_TO_WORKCELL_MAP_ACTIVE
