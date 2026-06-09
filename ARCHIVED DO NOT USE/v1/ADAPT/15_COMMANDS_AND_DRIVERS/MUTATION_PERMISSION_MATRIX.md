# Mutation Permission Matrix

| Role | ADAPT Control | Source Truth | Source Code | Tests | Pipeline/Config | Create Gaps | Create Blockers | Certify Acceptance | QA Signoff |
|---|---|---|---|---|---|---|---|---|---|
| Director Lane | Yes | With approval | No | No | No | Yes | Yes | Yes | No |
| Integrator Workcell | Scoped | No | Integration scope only | No | Scoped | Yes | Yes | No | No |
| Backend Workcell | Own artifacts | No | Assigned scope only | Dev tests if approved | No | Yes | Yes | No | No |
| Frontend Workcell | Own artifacts | No | Assigned scope only | Dev tests if approved | No | Yes | Yes | No | No |
| QA Workcell | QA artifacts | No | No | QA assets if approved | No | Yes | Yes | No | Recommendation |
| Planning Orchestrator | Planning artifacts | No | No | No | No | Yes | Yes | No | No |
| Context Steward | Context artifacts | No | No | No | No | Yes | No | No | No |
| Janitor | Hygiene artifacts | No | No | No | No | Yes | No | No | No |
| Challenge Lane | Challenge artifacts | No | No | No | No | Yes | Yes | No | No |

Startup override: application source mutation is `NO` for every role because no workcell or mutation scope exists.
