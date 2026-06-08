# Contract Guardrail

## Status
ACTIVE

## Purpose
Protects alignment across business rules, future UI behavior, future backend behavior, QA expectations, and integration boundaries.

## Current Contract State
No technical contracts exist because the technology stack is not finalized.

## Business Contracts Already Active
- Exact address and contact details must not be exposed before match.
- Worker response is not a confirmed booking.
- A match occurs only after resident acceptance.
- Only matched jobs can be completed.
- Barangay registration does not guarantee workmanship.
- Trust labels must not imply certification or guaranteed quality.
- MVP excludes payments, escrow, full chat, GPS tracking, maps, native mobile application, production authentication, production database, official LGU integration, complex dispute resolution, moderation workflow, advanced AI matching, ranking, and nationwide deployment logic.

## Stop Conditions
Stop or create a gap when:
- UI behavior invents backend behavior
- backend behavior invents product policy
- QA expectations conflict with source truth
- privacy behavior is underspecified
- an implementation contract is requested before technology decisions
