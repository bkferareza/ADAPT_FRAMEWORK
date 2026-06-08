# Dependency Map

## Status
ACTIVE

## Purpose
Records known business dependencies from `SOURCE_TRUTH_V0.1`.

## Business Dependencies
| Dependency ID | Upstream | Downstream | Dependency Summary | Status |
|---|---|---|---|---|
| DEP-001 | Job request creation | Worker job discovery | Open jobs must exist before workers can discover them. | ACTIVE |
| DEP-002 | Worker registration/profile | Resident worker discovery | Workers must have discoverable safe profiles before residents can browse them. | ACTIVE |
| DEP-003 | Worker response | Resident acceptance | A resident can only accept an existing worker response. | ACTIVE |
| DEP-004 | Resident acceptance | Match creation | Match is created only after resident acceptance. | ACTIVE |
| DEP-005 | Match creation | Coordination detail unlocking | Private coordination details are available only after confirmed match. | ACTIVE |
| DEP-006 | Match creation | Job completion | Only matched jobs can be completed. | ACTIVE |
| DEP-007 | Job completion | Review and reputation | Reviews and completed-work reputation follow completion. | ACTIVE |
| DEP-008 | Privacy rules | All discovery surfaces | Discovery views must hide exact address and contact details before match. | ACTIVE |
| DEP-009 | Barangay assisted access | Quest board and shared state | Barangay-created requests and registrations participate in the same product model. | ACTIVE |
| DEP-010 | Technology decisions | Architecture and implementation | Implementation planning depends on stack, platform, data, auth, and deployment decisions. | OPEN |

## Current Technical Dependencies
No technical dependencies are finalized.

## Dependency Gaps
See `GAP_REGISTER.md`.
