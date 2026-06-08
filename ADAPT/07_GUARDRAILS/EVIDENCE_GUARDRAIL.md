# Evidence Guardrail

## Status
ACTIVE

## Purpose
Prevents closure of claims without proof.

## Evidence Rule
No lane closes on confidence. A lane closes only on evidence.

## Evidence Claim States
- PROVEN
- UNPROVEN
- INCOMPLETE
- AMBIGUOUS
- CONTRADICTED

## Required Evidence Fields
- claim
- related requirement
- artifact reviewed or changed
- validation performed
- observed result
- evidence source
- known gaps
- known blockers

## Current Scaffold Evidence
Evidence for this initialization is:
- `START_HERE.md` authorizes document-only scaffold generation
- `Paggawa.docx` provides source truth
- ADAPT scaffold and template documents define required structure

## Stop Conditions
Create a gap or blocker when:
- a claim cannot be traced to source truth
- validation cannot be performed
- required evidence is missing
- evidence contradicts the claimed result
