# Scaffold Test Record

STATUS: DRAFT
VERSION: 1.0

## Purpose

Defines the expected test procedure for validating that executing `Read and Execute ADAPT_FRAMEWORK/START_HERE.md` against a real project document produces a correct and complete ADAPT instance.

---

## Test Definition

### Test Command

```
Read and Execute ADAPT_FRAMEWORK/START_HERE.md
```

### Test Inputs

| Input | Value |
|-------|-------|
| Project document | Paggawa.docx |
| Deployment mode | MODE_B (Requirements Only — no existing codebase) |
| ADAPT instance path | ../Paggawa_ADAPT_INSTANCE/ (sibling of framework folder) |
| Project source mutation | NO |
| Canonical starters path | ADAPT_FRAMEWORK/CANONICAL_STARTERS/ |

### Expected Outputs

- Full ADAPT instance folder structure (16 folders: 00_FRAMEWORK through 15_COMMANDS_AND_DRIVERS)
- All required starter files populated from canonical starters (ADAPT_FRAMEWORK/CANONICAL_STARTERS/)
- Source truth extracted from Paggawa.docx into:
  - REQUIREMENTS_INDEX.md
  - BUSINESS_ITEMS.md
  - ACCEPTANCE_CRITERIA.md
- Missing technical decisions recorded as GAP-T10 or GAP-T11 in GAP_REGISTER.md and OPEN_QUESTIONS.md
- No application source code created
- No real person-owned workcells created (03_WORKCELLS/ contains only README.md and ROLE_WORKCELL_BLUEPRINTS.md)
- ADAPT Startup / Initialization Report produced
- Status: READY_FOR_DIRECTOR_INTAKE

### Pass Criteria

| Criterion | How to Verify |
|-----------|--------------|
| Every file listed in SCAFFOLD_OUTPUT_CONTRACT.md exists in the output | List all files in Paggawa_ADAPT_INSTANCE/ and compare against contract |
| No angle-bracket placeholders remain in the output | Grep for `<[A-Z_]+>` across all generated files |
| No unreplaced {{DOUBLE_BRACE}} placeholders remain in source-truth-populated files | Grep for `{{` in REQUIREMENTS_INDEX.md, BUSINESS_ITEMS.md, ACCEPTANCE_CRITERIA.md |
| GAP_REGISTER.md contains at least the known-missing technical decisions | Review GAP_REGISTER.md for GAP-T10 entries covering language, framework, database, auth, deployment |
| No person-owned workcells exist | 03_WORKCELLS/ contains only README.md and ROLE_WORKCELL_BLUEPRINTS.md |
| PROJECT_CONTROL_PLANE.md has DeploymentMode = MODE_B_REQUIREMENTS_ONLY | Read PROJECT_CONTROL_PLANE.md DeploymentMode field |
| Deployment mode is recorded in PROJECT_CONTROL_PLANE.md | Verify DeploymentMode field is present and set |
| ADAPT Startup / Initialization Report was produced | Report must be present in the scaffold output or conversation transcript |

---

## Test Execution Record

| Field | Value |
|-------|-------|
| Last test run | NOT YET RUN |
| Last test result | PENDING |
| Tester | — |
| Notes | — |

---

## Known Pre-Conditions

Before running this test:

1. Verify `ADAPT_FRAMEWORK/CANONICAL_STARTERS/` is populated with all required starter files
2. Verify `ADAPT_FRAMEWORK/DEPLOYMENT_MODES.md` exists and defines MODE_B
3. Verify `Paggawa.docx` is present at the repository root
4. Verify the target path `../Paggawa_ADAPT_INSTANCE/` does not already exist (or is empty)

---

## Failure Classification

| Failure Type | Classification |
|-------------|---------------|
| Missing required file | CONTRACT_VIOLATION |
| Unreplaced placeholder in source-truth file | POPULATION_FAILURE |
| Application source code created | MUTATION_VIOLATION |
| Real workcell created without onboarding command | WORKCELL_VIOLATION |
| DeploymentMode not recorded | CONTROL_PLANE_FAILURE |
| No gap recorded for missing technical decision | GAP_REGISTER_FAILURE |
| Canonical starter not used (file generated from AI knowledge) | CANONICAL_STARTER_BYPASS |

---

## Related Files

- `ADAPT_FRAMEWORK/START_HERE.md` — entry point
- `ADAPT_FRAMEWORK/SCAFFOLD_WORKFLOW_AGENT.md` — scaffold workflow
- `ADAPT_FRAMEWORK/SCAFFOLD_OUTPUT_CONTRACT.md` — required output files
- `ADAPT_FRAMEWORK/DEPLOYMENT_MODES.md` — mode definitions
- `ADAPT_FRAMEWORK/CANONICAL_STARTERS/` — authoritative starter content
