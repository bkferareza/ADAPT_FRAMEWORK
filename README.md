# ADAPT Framework Source

This repository contains reusable source contracts for scaffolding an external, project-specific ADAPT governance instance.

## Canonical Framework Path

The canonical framework source lives in the `ADAPT_FRAMEWORK/` folder in this repository root.

`ADAPT_FRAMEWORK/` is the canonical `{{ADAPT_FRAMEWORK_PATH}}`.

## Core Files

All core contract files are located inside `ADAPT_FRAMEWORK/`:

- `ADAPT_FRAMEWORK/START_HERE.md` — launcher
- `ADAPT_FRAMEWORK/SCAFFOLD_WORKFLOW_AGENT.md` — scaffold workflow agent
- `ADAPT_FRAMEWORK/SCAFFOLD_OUTPUT_CONTRACT.md` — defines generated output
- `ADAPT_FRAMEWORK/WORKCELL_ONBOARDING_CONTRACT.md` — defines onboarding behavior
- `ADAPT_FRAMEWORK/DEPLOYMENT_MODES.md` — defines MODE_A and MODE_B scaffold behavior
- `ADAPT_FRAMEWORK/CANONICAL_STARTERS/` — authoritative starter file content for all scaffold output

Read and execute `ADAPT_FRAMEWORK/START_HERE.md` to begin.

## Repository Structure

```text
ADAPT FRAMEWORK/          ← repository root (ADAPT_FRAMEWORK_SOURCE)
├── ADAPT_FRAMEWORK/      ← canonical {{ADAPT_FRAMEWORK_PATH}}
│   ├── START_HERE.md
│   ├── SCAFFOLD_WORKFLOW_AGENT.md
│   ├── SCAFFOLD_OUTPUT_CONTRACT.md
│   ├── WORKCELL_ONBOARDING_CONTRACT.md
│   ├── DEPLOYMENT_MODES.md
│   ├── CANONICAL_STARTERS/
│   └── VALIDATION/
├── ARCHIVED DO NOT USE/  ← reference only, do not use as source
├── Paggawa.docx          ← sample project document
└── README.md
```

## Repository Boundary

- `ADAPT_FRAMEWORK/` is read-only framework source.
- `PROJECT_FOLDER` is the actual project folder (sibling of framework root).
- `ADAPT_INSTANCE` is the default destination for project-specific ADAPT output (sibling of framework root).
- Project-specific ADAPT output goes to `ADAPT_INSTANCE`.
- Application source code is not part of the default scaffold operation.
- Project source mutation is allowed only when explicitly approved for limited shell scaffolding.

## Historical Output

Existing generated ADAPT folders in this repo, if any, are historical/reference only.

The versioned content under `ARCHIVED DO NOT USE/` is marked `REFERENCE_ONLY_GENERATED_OUTPUT`. It is not active framework source and must not be used as the project-specific ADAPT instance.

## Supporting Documents

Legacy bootstrap, framework, template, command-driver, and prior report documents at the repository root are supporting references. The four core contract files inside `ADAPT_FRAMEWORK/` define the active modular scaffold workflow.
