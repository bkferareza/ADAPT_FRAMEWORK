# QA Independence Guardrail

## Status
ACTIVE

## Purpose
Prevents developer self-validation from being treated as QA signoff.

## Rule
Developer self-validation is useful evidence but cannot certify product acceptance.

## QA Validation Requires
- accepted source truth
- acceptance criteria
- test cases or validation scenarios
- independent QA owner or approved validation lane
- observed pass/fail evidence
- defects and gaps recorded when found

## Current QA State
`QA_BRIAN` exists.

## Current Constraint
QA_BRIAN may prepare QA scenarios and validation evidence, but cannot independently sign off Brian-authored or Brian-integrated work unless Director approves independence handling or a separate reviewer is onboarded.

## Stop Conditions
Stop or create a gap when:
- a delivery claim asks for QA signoff without QA ownership
- developer checks are represented as independent validation
- acceptance criteria are missing or ambiguous
- implementation is not testable
