# START HERE - ADAPT Full External Instance Launcher

## Purpose

This file is the single sufficient launcher for ADAPT scaffolding.

When an AI tool is told:

```text
Read and execute START_HERE.md
```

it must scaffold a complete external ADAPT governance instance from the provided project document, populate starter governance artifacts, avoid project source mutation, report the result, and stop.

There is only one default initialization behavior:

```text
FULL_EXTERNAL_ADAPT_INSTANCE_SCAFFOLD
```

Do not ask the user to choose ADAPT_LITE, TEMPLATE_ONLY, DIRECTOR_ONLY, SOURCE_TRUTH_ONLY, FULL_SCAFFOLD, or any other startup mode.

---

## Operating Model

Use three folders:

```text
/workspace/
|-- ADAPT_FRAMEWORK/
|   `-- reusable ADAPT framework source
|
|-- PROJECT_FOLDER/
|   `-- actual project files or empty project folder
|
`-- ADAPT_INSTANCE/
    `-- generated project-specific ADAPT governance instance
```

Rules:

- `ADAPT_FRAMEWORK` is read-only by default.
- `PROJECT_FOLDER` is read-only by default.
- `ADAPT_INSTANCE` is the default write target.
- Do not initialize ADAPT inside the project folder unless explicitly instructed.
- Do not mutate application source code.
- Do not create backend/frontend/test implementation files.
- Do not create database schema.
- Do not create pipeline/deployment files.
- Do not finalize technology stack.
- Do not assign implementation tasks.
- Do not create real person-owned workcells unless onboarding commands are explicitly provided.
- If team roles are implied by the project, create workcell role placeholders and README content only, not real workcells.

---

## Workcell Identity And Execution Model

START_HERE scaffolds the full external ADAPT instance. Workcells are not real until they are explicitly onboarded.

For every approved `Onboard <Name> as <Role>` command, onboarding must create:

```text
ACTION_PROMPT_<ROLE>_<IDENTITY>.md
```

Individual lane execution must use:

```text
Read and Execute ACTION_PROMPT_<ROLE>_<IDENTITY>.md
```

The workcell action prompt binds the AI runtime to one role and one exact workcell identity. A human identity alone is not a valid lane selector because one human may own multiple workcells.

Each onboarded workcell also receives a role-specific `DEFAULT_AGENT_BLUEPRINT.md`, editable `WORKFLOW_CUSTOMIZATION.md`, computed `EFFECTIVE_WORKFLOW.md`, protected `GUARDRAIL_BINDINGS.md`, and governed workflow request/change-log artifacts.

Custom workflow changes must pass through ADAPT-governed workflow customization. Editable preferences cannot remove, weaken, or contradict protected ADAPT binding.

---

## Required Startup Inputs

Ask only for missing required paths or permissions.

Required:

```text
ADAPT framework path:
Project folder path:
ADAPT instance path:
Project document path:
File creation approval: YES/NO
Project source mutation approval: YES/NO
```

Optional:

```text
Project classification: NEW_PROJECT or EXISTING_PROJECT
Source truth promotion: YES/NO
Known team members:
Known target stack:
```

If optional values are missing, do not block scaffolding.

Defaults:

```text
Project classification:
NEW_PROJECT, unless existing source code is detected and discovery is approved.

Source truth promotion:
YES, if the user provides a project document and says to initialize ADAPT from it.

Project source mutation approval:
NO.

File creation approval:
Ask if not provided.

Initialization behavior:
FULL_EXTERNAL_ADAPT_INSTANCE_SCAFFOLD.
```

If required values are missing, ask with this exact shape and do not add mode choices:

```text
ADAPT startup requires required paths and permissions.

Please provide any missing values:

1. ADAPT framework path:
2. Project folder path:
3. ADAPT instance path:
4. Project document path:
5. File creation approval: YES/NO
6. Project source mutation approval: YES/NO

Optional, non-blocking:

7. Project classification: NEW_PROJECT or EXISTING_PROJECT
8. Source truth promotion: YES/NO
9. Known team members:
10. Known target stack:
```

---

## Required Launcher Workflow

When required inputs are present and file creation approval is `YES`, perform this workflow:

```text
1. Identify ADAPT framework path.
2. Identify project folder path.
3. Identify ADAPT instance output path.
4. Identify project document path.
5. Read reusable ADAPT framework files.
6. Read the project document.
7. Extract source truth from the project document.
8. Infer the project shape.
9. Create the full external ADAPT instance scaffold.
10. Populate source truth starter artifacts.
11. Populate Director Lane starter artifacts.
12. Populate guardrails, templates, handoffs, context economy, onboarding, janitor, planning, commands/drivers, memory bank, integration, validation, and challenge folders.
13. If explicit onboarding commands were provided, create identity-bound workcells using current onboarding rules and role blueprints.
14. Record missing technical/project details as open questions or gaps.
15. Emit the first recommended next command.
16. Stop.
```

If file creation approval is missing or `NO`, do not create files. Report that initialization is blocked by missing file creation approval.

If project source mutation approval is missing, default it to `NO`. Project source mutation approval is not required for this scaffold because project source files must not be changed.

---

## Required Framework Files To Read

Read from `ADAPT_FRAMEWORK` as reusable source:

```text
START_HERE.md
README.md

ADAPT/00_FRAMEWORK/
ADAPT/07_GUARDRAILS/
ADAPT/08_TEMPLATES/
ADAPT/10_CONTEXT_ECONOMY/
ADAPT/11_ONBOARDING/
ADAPT/12_JANITOR/
ADAPT/13_PLANNING/
ADAPT/15_COMMANDS_AND_DRIVERS/
```

Read only the minimum necessary files first:

```text
ADAPT/15_COMMANDS_AND_DRIVERS/ACTION_PROMPT_MASTER.md
ADAPT/15_COMMANDS_AND_DRIVERS/ACTION_PROMPT_WORKCELL.md
ADAPT/15_COMMANDS_AND_DRIVERS/COMMAND_REGISTRY.md
ADAPT/15_COMMANDS_AND_DRIVERS/COMMAND_SYNTAX.md
ADAPT/15_COMMANDS_AND_DRIVERS/COMMAND_ROUTING_MATRIX.md
ADAPT/15_COMMANDS_AND_DRIVERS/CONTROL_PLANE_SCHEMA.md
ADAPT/15_COMMANDS_AND_DRIVERS/STOP_RULES.md
ADAPT/15_COMMANDS_AND_DRIVERS/MUTATION_PERMISSION_MATRIX.md
ADAPT/15_COMMANDS_AND_DRIVERS/HUMAN_APPROVAL_GATES.md
ADAPT/15_COMMANDS_AND_DRIVERS/CONTEXT_BUDGET_POLICY.md
ADAPT/11_ONBOARDING/ONBOARDING_RULES.md
ADAPT/11_ONBOARDING/ROLE_TO_WORKCELL_MAP.md
ADAPT/08_TEMPLATES/ACTION_PROMPT_ROLE_IDENTITY_TEMPLATE.md
ADAPT/08_TEMPLATES/DEFAULT_AGENT_BLUEPRINT_TEMPLATE.md
ADAPT/08_TEMPLATES/WORKFLOW_CUSTOMIZATION_TEMPLATE.md
ADAPT/08_TEMPLATES/EFFECTIVE_WORKFLOW_TEMPLATE.md
ADAPT/08_TEMPLATES/GUARDRAIL_BINDINGS_TEMPLATE.md
ADAPT/08_TEMPLATES/WORKFLOW_CHANGE_REQUEST_TEMPLATE.md
ADAPT/08_TEMPLATES/WORKFLOW_CHANGE_LOG_TEMPLATE.md
ADAPT/08_TEMPLATES/ROLE_AGENT_BLUEPRINTS/
```

When scaffolding folders that depend on reusable content, copy existing framework files where available. If a required artifact is missing from the framework source, generate a conservative starter artifact with placeholders, explicit source references, and open gaps rather than inventing project facts.

If `MINIMAL_VIABLE_ADAPT_MODE.md` exists in the framework source, copy it as historical/reference only and mark it:

```text
STATUS: DEPRECATED_FOR_DEFAULT_START_HERE_FLOW
NOTE: START_HERE now always scaffolds the full external ADAPT instance.
```

---

## Required Project Document Extraction

From the project document, extract:

```text
project name
business/domain summary
primary users
main workflows
business rules
requirement sections
acceptance criteria
non-goals
risks
open questions
suggested product surfaces/modules
suggested validation concerns
suggested integration concerns
suggested role/workcell types
```

Do not invent missing content.

If language, platform, framework, database, authentication, deployment, testing expectations, team names and roles, or first milestone are missing, record them as open questions or gaps.

Use gap types:

```text
GAP-T10 Decision Gap
GAP-T11 Context Gap
```

Missing technical details must not block scaffolding.

---

## Required ADAPT Instance Folders

Always create the full external ADAPT instance scaffold:

```text
<ADAPT_INSTANCE>/ADAPT/00_FRAMEWORK/
<ADAPT_INSTANCE>/ADAPT/01_SOURCE_TRUTH/
<ADAPT_INSTANCE>/ADAPT/02_DIRECTOR_LANE/
<ADAPT_INSTANCE>/ADAPT/03_WORKCELLS/
<ADAPT_INSTANCE>/ADAPT/04_INTEGRATION/
<ADAPT_INSTANCE>/ADAPT/05_VALIDATION/
<ADAPT_INSTANCE>/ADAPT/06_HANDOFFS/
<ADAPT_INSTANCE>/ADAPT/07_GUARDRAILS/
<ADAPT_INSTANCE>/ADAPT/08_TEMPLATES/
<ADAPT_INSTANCE>/ADAPT/09_CHALLENGE_LANE/
<ADAPT_INSTANCE>/ADAPT/10_CONTEXT_ECONOMY/
<ADAPT_INSTANCE>/ADAPT/11_ONBOARDING/
<ADAPT_INSTANCE>/ADAPT/12_JANITOR/
<ADAPT_INSTANCE>/ADAPT/13_PLANNING/
<ADAPT_INSTANCE>/ADAPT/14_MEMORY_BANK/
<ADAPT_INSTANCE>/ADAPT/15_COMMANDS_AND_DRIVERS/
```

Also create handoff subfolders:

```text
<ADAPT_INSTANCE>/ADAPT/06_HANDOFFS/ACTIVE/
<ADAPT_INSTANCE>/ADAPT/06_HANDOFFS/CONSUMED/
<ADAPT_INSTANCE>/ADAPT/06_HANDOFFS/ARCHIVE/
```

Also create context subfolders:

```text
<ADAPT_INSTANCE>/ADAPT/10_CONTEXT_ECONOMY/CONTEXT_PACKS/
<ADAPT_INSTANCE>/ADAPT/10_CONTEXT_ECONOMY/CONTEXT_DELTAS/
<ADAPT_INSTANCE>/ADAPT/10_CONTEXT_ECONOMY/CONTEXT_SUMMARIES/
```

---

## Required Starter Artifacts

Generate these files inside the ADAPT instance.

### 00_FRAMEWORK

```text
ADAPT_FRAMEWORK.md
GOVERNANCE_RULES.md
ROLE_MODEL.md
ARTIFACT_STANDARDS.md
GLOSSARY.md
SOURCE_AUTHORITY_POLICY.md
```

### 01_SOURCE_TRUTH

```text
REQUIREMENTS_INDEX.md
BUSINESS_ITEMS.md
REQUIREMENT_SECTION_MAP.md
ACCEPTANCE_CRITERIA.md
OPEN_QUESTIONS.md
SOURCE_TRUTH_VERSION_LOG.md
```

### 02_DIRECTOR_LANE

```text
DIRECTOR_IDENTITY.md
PROJECT_CONTROL_PLANE.md
INTAKE_REGISTER.md
WORKCELL_REGISTRY.md
LANE_ASSIGNMENT_MATRIX.md
DEPENDENCY_MAP.md
GAP_REGISTER.md
BLOCKER_REGISTER.md
DECISION_LOG.md
ACCEPTED_WORK_REGISTER.md
CARRY_OVER_REGISTER.md
```

### 03_WORKCELLS

If no explicit onboarding commands were provided, create:

```text
README.md
ROLE_WORKCELL_BLUEPRINTS.md
```

The README must say:

```text
No real person-owned workcells have been onboarded yet.
Use: Onboard <Name> as <Role>.
Onboarding creates ACTION_PROMPT_<ROLE>_<IDENTITY>.md.
Execute a lane with: Read and Execute ACTION_PROMPT_<ROLE>_<IDENTITY>.md.
```

Do not create real workcells unless explicit onboarding commands were provided.

### 04_INTEGRATION

```text
INTEGRATION_CONTRACTS.md
API_CONTRACTS.md
UI_BE_CONTRACTS.md
PIPELINE_STATUS.md
MERGE_READINESS.md
RELEASE_READINESS.md
INTEGRATION_GAPS.md
```

### 05_VALIDATION

```text
QA_STRATEGY.md
TEST_CASE_INDEX.md
DEFECT_REGISTER.md
VALIDATION_EVIDENCE.md
REGRESSION_RISK_MAP.md
SIGNOFF_REGISTER.md
```

### 06_HANDOFFS

```text
README.md
ACTIVE/README.md
CONSUMED/README.md
ARCHIVE/README.md
```

### 07_GUARDRAILS

```text
SCOPE_GUARDRAIL.md
CONTEXT_GUARDRAIL.md
EVIDENCE_GUARDRAIL.md
CONTRACT_GUARDRAIL.md
MUTATION_GUARDRAIL.md
QA_INDEPENDENCE_GUARDRAIL.md
HANDOFF_GUARDRAIL.md
```

### 08_TEMPLATES

Copy or generate all reusable templates from the framework template source.

Required template files include:

```text
ACTION_PROMPT_ROLE_IDENTITY_TEMPLATE.md
DEFAULT_AGENT_BLUEPRINT_TEMPLATE.md
WORKFLOW_CUSTOMIZATION_TEMPLATE.md
EFFECTIVE_WORKFLOW_TEMPLATE.md
GUARDRAIL_BINDINGS_TEMPLATE.md
WORKFLOW_CHANGE_REQUEST_TEMPLATE.md
WORKFLOW_CHANGE_LOG_TEMPLATE.md
WORKCELL_IDENTITY_TEMPLATE.md
SCOPE_CONTRACT_TEMPLATE.md
AGENT_TEAM_TEMPLATE.md
ROADMAP_TEMPLATE.md
TASK_REGISTER_TEMPLATE.md
HANDOFF_TEMPLATE.md
EVIDENCE_REPORT_TEMPLATE.md
GAP_TEMPLATE.md
BLOCKER_TEMPLATE.md
CONTEXT_PACK_TEMPLATE.md
CONTEXT_DELTA_TEMPLATE.md
VALIDATION_REPORT_TEMPLATE.md
QA_TEST_CASE_TEMPLATE.md
DEFECT_REPORT_TEMPLATE.md
INTEGRATION_REPORT_TEMPLATE.md
MERGE_READINESS_TEMPLATE.md
ONBOARDING_REQUEST_TEMPLATE.md
ONBOARDING_REPORT_TEMPLATE.md
MILESTONE_PLAN_TEMPLATE.md
WORKCELL_ROADMAP_TEMPLATE.md
OVEREXTENSION_RISK_TEMPLATE.md
JANITOR_REPORT_TEMPLATE.md
CHALLENGE_REPORT_TEMPLATE.md
CYCLE_CONSOLIDATION_TEMPLATE.md
```

Also copy or generate:

```text
ROLE_AGENT_BLUEPRINTS/DIRECTOR_AGENT_BLUEPRINT.md
ROLE_AGENT_BLUEPRINTS/INTEGRATOR_AGENT_BLUEPRINT.md
ROLE_AGENT_BLUEPRINTS/BACKEND_AGENT_BLUEPRINT.md
ROLE_AGENT_BLUEPRINTS/FRONTEND_AGENT_BLUEPRINT.md
ROLE_AGENT_BLUEPRINTS/QA_AGENT_BLUEPRINT.md
ROLE_AGENT_BLUEPRINTS/PLANNING_AGENT_BLUEPRINT.md
ROLE_AGENT_BLUEPRINTS/CONTEXT_STEWARD_AGENT_BLUEPRINT.md
ROLE_AGENT_BLUEPRINTS/JANITOR_AGENT_BLUEPRINT.md
ROLE_AGENT_BLUEPRINTS/CHALLENGE_AGENT_BLUEPRINT.md
```

### 09_CHALLENGE_LANE

```text
CHALLENGE_IDENTITY.md
CHALLENGE_REGISTER.md
CHALLENGE_REPORT_TEMPLATE.md
```

### 10_CONTEXT_ECONOMY

```text
CONTEXT_RULES.md
CONTEXT_BUDGETS.md
CONTEXT_INDEX.md
STALE_CONTEXT_REGISTER.md
```

### 11_ONBOARDING

```text
ONBOARDING_RULES.md
ROLE_TO_WORKCELL_MAP.md
ONBOARDING_REQUESTS.md
ONBOARDING_REPORTS.md
```

`ONBOARDING_RULES.md` must require every onboarded workcell folder to contain:

```text
ACTION_PROMPT_<ROLE>_<IDENTITY>.md
WORKCELL_IDENTITY.md
SCOPE_CONTRACT.md
DEFAULT_AGENT_BLUEPRINT.md
WORKFLOW_CUSTOMIZATION.md
EFFECTIVE_WORKFLOW.md
GUARDRAIL_BINDINGS.md
WORKFLOW_CHANGE_REQUESTS.md
WORKFLOW_CHANGE_LOG.md
ROADMAP.md
TASK_REGISTER.md
EVIDENCE_LOG.md
HANDOFFS.md
BLOCKERS.md
CONTEXT_DELTAS.md
```

The onboarding report must list the workcell-scoped action prompt path and state:

```text
To execute this lane, run: Read and Execute ACTION_PROMPT_<ROLE>_<IDENTITY>.md
```

### 12_JANITOR

```text
JANITOR_RULES.md
STALE_ARTIFACT_REGISTER.md
ARCHIVE_CANDIDATES.md
CLEANUP_REPORTS.md
COMPACTION_SUMMARIES.md
```

### 13_PLANNING

```text
PLANNING_RULES.md
MILESTONE_REGISTER.md
CAPACITY_MODEL.md
MILESTONE_PLANS.md
WORKCELL_ROADMAPS.md
OVEREXTENSION_RISK_REPORTS.md
DEPENDENCY_SEQUENCES.md
```

### 14_MEMORY_BANK

```text
REFERENCES_INDEX.md
NOTES.md
```

### 15_COMMANDS_AND_DRIVERS

Copy or generate:

```text
COMMAND_REGISTRY.md
COMMAND_SYNTAX.md
COMMAND_ROUTING_MATRIX.md
CONTROL_PLANE_SCHEMA.md
ACTION_PROMPT_MASTER.md
ACTION_PROMPT_DIRECTOR.md
ACTION_PROMPT_CONTEXT_STEWARD.md
ACTION_PROMPT_ONBOARDING.md
ACTION_PROMPT_PLANNING.md
ACTION_PROMPT_WORKCELL.md
ACTION_PROMPT_INTEGRATOR.md
ACTION_PROMPT_QA.md
ACTION_PROMPT_JANITOR.md
ACTION_PROMPT_CHALLENGE.md
MUTATION_PERMISSION_MATRIX.md
HUMAN_APPROVAL_GATES.md
STOP_RULES.md
CONTEXT_BUDGET_POLICY.md
EVIDENCE_STANDARD_BY_ROLE.md
MINIMAL_VIABLE_ADAPT_MODE.md
```

---

## Source Truth Behavior

If source truth promotion is `YES`, record the project document as:

```text
SOURCE_TRUTH_V0.1
```

Update:

```text
SOURCE_TRUTH_VERSION_LOG.md
DECISION_LOG.md
PROJECT_CONTROL_PLANE.md
```

If source truth promotion is missing, default to draft map only and record:

```text
SOURCE_TRUTH_STATUS: DRAFT_SOURCE_TRUTH_MAP
```

If source truth promotion is `NO`, record the document extraction as a draft source truth map and preserve all extracted items as non-promoted starter artifacts.

---

## Project Control Plane Defaults

`PROJECT_CONTROL_PLANE.md` must include:

```text
ProjectName:
ProjectClassification:
InitializationBehavior: FULL_EXTERNAL_ADAPT_INSTANCE_SCAFFOLD
SourceTruthVersion:
SourceTruthStatus:
ProjectFolderPath:
AdaptFrameworkPath:
AdaptInstancePath:
TechnologyStackStatus: UNKNOWN_OR_NOT_FINALIZED
ProjectSourceMutationApproval: NO
ApplicationCodeCreated: NO
RealWorkcellsOnboarded: NO
ActiveHandoff: NONE
CurrentPhase: SCAFFOLD_INITIALIZED
ExecutionReadiness: READY_FOR_DIRECTOR_INTAKE
NextExpectedAction: Run Director intake
```

Always set `ProjectSourceMutationApproval` to `NO` unless the user explicitly provided `YES`. Even with approval, this startup flow must not mutate project source files.

---

## Starter Artifact Population Rules

Populate starter artifacts from the project document and reusable framework files.

Use project document content for:

- source truth starter maps
- business items
- requirement section map
- acceptance criteria
- open questions
- inferred project shape
- suggested validation concerns
- suggested integration concerns
- suggested role/workcell types

Use reusable framework content for:

- framework references
- governance rules
- guardrails
- templates
- context economy rules
- onboarding rules
- janitor rules
- planning rules
- commands and drivers
- role-specific default agent blueprints
- workcell action prompt binding
- workflow customization governance
- effective workflow resolution

Use placeholders only where facts are absent. Mark placeholders clearly as `TBD`, `UNKNOWN`, `NOT_PROVIDED`, `OPEN_QUESTION`, or `GAP`.

Do not create implementation plans, assigned tasks, code files, tests, schemas, pipelines, deployment manifests, or final stack choices.

---

## Required Output Report

After execution, produce:

```markdown
# ADAPT Startup / Initialization Report

## Framework Source Path

<path>

## Project Folder Path

<path>

## ADAPT Instance Path

<path>

## Project Document Path

<path>

## Initialization Behavior

FULL_EXTERNAL_ADAPT_INSTANCE_SCAFFOLD

## Source Truth Status

<SOURCE_TRUTH_V0.1 | DRAFT_SOURCE_TRUTH_MAP>

## Inferred Project Shape

- Project name:
- Primary users:
- Main workflows:
- Suggested surfaces/modules:
- Suggested workcell types:
- Validation concerns:
- Integration concerns:

## ADAPT Folders Created

<list>

## ADAPT Files Created

<list>

## Files Modified

<list>

## Project Files Touched

Must be NONE unless explicitly approved.

## Open Questions Recorded

<list>

## Gaps Created

<list>

## Blockers Created

<list>

## Next Recommended Command

Run Director intake.

## Status

READY_FOR_DIRECTOR_INTAKE
```

---

## Validation Checklist

Before reporting success, verify:

- Required paths were identified.
- File creation approval was `YES`.
- Project source mutation approval was treated as `NO` by default.
- The ADAPT instance path is outside the project folder unless explicitly instructed otherwise.
- All required ADAPT folders exist under `<ADAPT_INSTANCE>/ADAPT/`.
- All required handoff and context subfolders exist.
- All required starter artifacts exist or are explicitly recorded as gaps.
- Source truth status is recorded as either `SOURCE_TRUTH_V0.1` or `DRAFT_SOURCE_TRUTH_MAP`.
- `PROJECT_CONTROL_PLANE.md` contains the required defaults.
- `OPEN_QUESTIONS.md` includes missing technical/project details.
- `GAP_REGISTER.md` includes missing technical/project details as decision or context gaps.
- No project source files were created or modified.
- No backend/frontend/test implementation files were created.
- No database schema, pipeline file, deployment file, or technology stack finalization was created.
- No real person-owned workcells were created unless explicit onboarding commands were provided.
- The full scaffold includes all workcell action-prompt, workflow, guardrail-binding, workflow-governance, and role-agent blueprint templates.
- Every explicitly onboarded workcell has `ACTION_PROMPT_<ROLE>_<IDENTITY>.md` and all required workflow files.
- Every explicitly onboarded workcell uses the exact role-specific default agent blueprint.
- Every effective workflow is validated against source truth authority, scope, context, evidence, mutation, contract, QA independence, approval, and handoff.
- Human-only execution is rejected when an exact workcell identity is absent or ambiguous.
- The report ends with `READY_FOR_DIRECTOR_INTAKE`.

---

## Non-Negotiable Final Rules

If required paths are present and file creation approval is YES, scaffold the full external ADAPT instance.

Do not ask the user to choose Lite/Full/Template/Director modes.

Do not block scaffolding because technology stack is missing.

Do not create application source code.

Do not mutate project source files.

Do not create real person-owned workcells unless explicit onboarding commands are provided.

When onboarding is explicitly requested, create one role/identity-scoped action prompt and one role-specific default agent blueprint per workcell. Do not reuse a human-only prompt across roles.

Do not apply workflow customization without ADAPT governance and successful effective-workflow guardrail validation.

After scaffolding, stop and report.

The next command should be: Run Director intake.
