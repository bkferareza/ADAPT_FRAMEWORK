# Mutation Permission Matrix

| Role | ADAPT Control | Source Truth | Product Code | Tests | Pipeline / Config | Gaps / Blockers | Accept | QA Signoff |
|---|---|---|---|---|---|---|---|---|
| Director | Yes | Approval only | No | No | No | Yes | Yes | No |
| Integrator | Scoped | No | Limited approved integration scope | No | Limited approved scope | Yes | No | No |
| Backend | Own artifacts | No | Approved backend paths | Developer tests if scoped | No | Yes | No | No |
| Frontend | Own artifacts | No | Approved frontend paths | Developer tests if scoped | No | Yes | No | No |
| QA | Validation artifacts | No | No | Approved QA paths | No | Yes | No | Constrained recommendation |
| Planning | Planning artifacts | No | No | No | No | Yes | No | No |
| Context Steward | Context artifacts | No | No | No | No | Context gaps | No | No |
| Janitor | Cleanup artifacts | No | No | No | No | Stale findings | No | No |
| Challenge | Challenge artifacts | No | No | No | No | Yes | No | No |
