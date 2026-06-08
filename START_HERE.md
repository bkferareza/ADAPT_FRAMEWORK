You are initializing ADAPT for my attached sample business project.

This is no longer a dry run.

Execution mode:
FULL_ADAPT_DOCUMENT_SCAFFOLD

Project state:
NEW_PROJECT

Project document:
Promote the attached project business document as SOURCE_TRUTH_V0.1.

Technology stack:
UNKNOWN / NOT FINALIZED.

Important rule:
Because technology stack is not finalized, do not generate source code, technical architecture, database schema, or implementation files yet.

Generate only ADAPT governance/scaffold documents and templates.

You are authorized to generate document contents for the ADAPT scaffold.

Do not mutate source code.
Do not create actual application files.
Do not onboard real team members yet.
Do not assign real implementation tasks yet.
Do not invent final technology decisions.

Generate the following document set:

1. ADAPT/00_FRAMEWORK/
- ADAPT_FRAMEWORK.md
- GOVERNANCE_RULES.md
- ROLE_MODEL.md
- ARTIFACT_STANDARDS.md
- GLOSSARY.md

2. ADAPT/01_SOURCE_TRUTH/
- REQUIREMENTS_INDEX.md
- BUSINESS_ITEMS.md
- REQUIREMENT_SECTION_MAP.md
- ACCEPTANCE_CRITERIA.md
- OPEN_QUESTIONS.md
- SOURCE_TRUTH_VERSION_LOG.md

3. ADAPT/02_DIRECTOR_LANE/
- DIRECTOR_IDENTITY.md
- PROJECT_CONTROL_PLANE.md
- INTAKE_REGISTER.md
- WORKCELL_REGISTRY.md
- LANE_ASSIGNMENT_MATRIX.md
- DEPENDENCY_MAP.md
- GAP_REGISTER.md
- BLOCKER_REGISTER.md
- DECISION_LOG.md

4. ADAPT/07_GUARDRAILS/
- SCOPE_GUARDRAIL.md
- CONTEXT_GUARDRAIL.md
- EVIDENCE_GUARDRAIL.md
- CONTRACT_GUARDRAIL.md
- MUTATION_GUARDRAIL.md
- QA_INDEPENDENCE_GUARDRAIL.md
- HANDOFF_GUARDRAIL.md

5. ADAPT/08_TEMPLATES/
Generate all templates from the ADAPT Template Scaffolding document.

6. ADAPT/10_CONTEXT_ECONOMY/
- CONTEXT_RULES.md
- CONTEXT_BUDGETS.md
- CONTEXT_INDEX.md

7. ADAPT/11_ONBOARDING/
- ONBOARDING_RULES.md
- ROLE_TO_WORKCELL_MAP.md

8. ADAPT/12_JANITOR/
- JANITOR_RULES.md

9. ADAPT/13_PLANNING/
- PLANNING_RULES.md
- MILESTONE_REGISTER.md
- CAPACITY_MODEL.md

10. ADAPT/14_MEMORY_BANK/
- REFERENCES_INDEX.md
- NOTES.md

Output format:
For each file, print:

=== FILE: <path> ===
<file contents>

At the end, provide:

ADAPT GENERATION RESULT
- files generated
- files intentionally skipped
- unresolved questions
- recommended next action

Do not stop to ask questions unless a required document is missing.
If technical information is missing, record it in OPEN_QUESTIONS.md and GAP_REGISTER.md instead of blocking scaffold generation.