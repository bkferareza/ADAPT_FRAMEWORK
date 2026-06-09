# ADAPT Framework Source

This repository contains reusable source contracts for scaffolding an external, project-specific ADAPT governance instance.

## Core Files

- `START_HERE.md` is the launcher.
- `SCAFFOLD_WORKFLOW_AGENT.md` is the scaffold workflow agent.
- `SCAFFOLD_OUTPUT_CONTRACT.md` defines generated output.
- `WORKCELL_ONBOARDING_CONTRACT.md` defines onboarding behavior.

Read and execute `START_HERE.md` to begin.

## Repository Boundary

- `ADAPT_FRAMEWORK` is read-only framework source.
- `PROJECT_FOLDER` is the actual project folder.
- `ADAPT_INSTANCE` is the default destination for project-specific ADAPT output.
- Project-specific ADAPT output goes to `ADAPT_INSTANCE`.
- Application source code is not part of the default scaffold operation.
- Project source mutation is allowed only when explicitly approved for limited shell scaffolding.

## Historical Output

Existing generated ADAPT folders in this repo, if any, are historical/reference only.

The versioned content under `ARCHIVED DO NOT USE/` is marked `REFERENCE_ONLY_GENERATED_OUTPUT`. It is not active framework source and must not be used as the project-specific ADAPT instance.

## Supporting Documents

Legacy bootstrap, framework, template, command-driver, and prior report documents at the repository root are supporting references. The four core files above define the active modular scaffold workflow.
