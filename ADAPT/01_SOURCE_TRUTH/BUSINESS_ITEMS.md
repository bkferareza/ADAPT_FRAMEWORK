# Business Items

## Status
ACTIVE

## Source Truth
`SOURCE_TRUTH_V0.1`

## Business Items
| Business Item ID | Title | Summary | Related Requirements |
|---|---|---|---|
| PGG-BI-001 | Local labor visibility | Make nearby skilled workers and nearby job needs discoverable in local communities. | PGG-REQ-001, PGG-REQ-002, PGG-REQ-003 |
| PGG-BI-002 | Hybrid digital and assisted access | Support both phone-based users and barangay-assisted users. | PGG-REQ-004, PGG-REQ-005, PGG-REQ-014 |
| PGG-BI-003 | Resident job request creation | Residents can create job requests with title, category, description, approximate area, urgency, and optional budget range. | PGG-REQ-001 |
| PGG-BI-004 | Worker job discovery | Workers can view nearby open jobs using safe discovery information. | PGG-REQ-002, PGG-REQ-010 |
| PGG-BI-005 | Worker profile discovery | Residents can browse worker cards and profiles with skills, service area, availability, and trust signals. | PGG-REQ-003, PGG-REQ-011 |
| PGG-BI-006 | Barangay-assisted job creation | Barangay staff can create job requests on behalf of residents. | PGG-REQ-004 |
| PGG-BI-007 | Barangay worker registration | Barangay staff can register local workers and basic worker profile information. | PGG-REQ-005 |
| PGG-BI-008 | Worker response | Workers can respond to open jobs with message, availability, and estimate note. | PGG-REQ-006 |
| PGG-BI-009 | Match creation | A match is created only when the resident accepts one worker response. | PGG-REQ-007 |
| PGG-BI-010 | Completion flow | Only matched jobs can be marked completed, and duplicate completion should be prevented. | PGG-REQ-008 |
| PGG-BI-011 | Review and reputation | Completed jobs can receive ratings and reviews that update simple reputation indicators. | PGG-REQ-009 |
| PGG-BI-012 | Privacy boundary | Exact address and contact details stay hidden before confirmed match. | PGG-REQ-010 |
| PGG-BI-013 | Trust language boundary | Trust labels must not imply guaranteed work quality or legal certification. | PGG-REQ-011 |
| PGG-BI-014 | Barangay authority boundary | Barangay staff assist access and local records but do not handle payments, certify skill, or resolve disputes in the first prototype. | PGG-REQ-012 |
| PGG-BI-015 | MVP boundaries | Payments, escrow, chat, GPS, maps, native mobile app, production auth, production database, LGU integration, advanced AI matching, and ranking are non-goals. | PGG-REQ-016 |

## Product Surfaces
- Paggawa Mobile
- Paggawa Quest

## Primary Users
- Resident / Client
- Worker
- Barangay Staff
- Referrer as future or optional trust participant

## Core Product Loop
resident need -> job request -> worker discovery -> worker response -> resident match -> completed work -> reputation signal
