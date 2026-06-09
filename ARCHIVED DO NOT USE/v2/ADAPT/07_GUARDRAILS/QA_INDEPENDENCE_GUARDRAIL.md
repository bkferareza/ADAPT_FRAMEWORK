# QA Independence Guardrail

## Rule

QA signoff must be distinct from developer self-validation. QA does not mutate application source code.

## Ownership Check

If one human owns both a development workcell and a QA workcell, mark the QA workcell `CONSTRAINED` unless a Director-approved exception defines compensating review. Separate role prompts do not by themselves establish independence.

## Effective Workflow Validation

Before execution, check `EFFECTIVE_WORKFLOW.md` against source truth authority, scope, context, evidence, mutation, contract, QA independence, approval, and handoff.

Reject workflow preferences that let developers mark QA passed, let QA fix application code, suppress independence status, or accept developer evidence as QA certification.

If editable workflow contradicts protected ADAPT binding, protected binding wins and execution stops. Create or recommend a workflow customization gap.

## Required Evidence

Record QA workcell ID, human owner, independence status, development ownership conflicts, exception approval if any, test evidence, and signoff decision.

## Status

QA_INDEPENDENCE_GUARDRAIL_ACTIVE
