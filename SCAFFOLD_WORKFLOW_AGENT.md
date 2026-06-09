# SCAFFOLD WORKFLOW AGENT

## Purpose

This file defines how an AI tool scaffolds a full external ADAPT instance from a project document.

## Operating Model

* ADAPT_FRAMEWORK is read-only framework source.
* PROJECT_FOLDER is the actual project folder.
* ADAPT_INSTANCE is the project-specific ADAPT governance output.
* START_HERE.md is the launcher.
* This file is the scaffold workflow agent.
* SCAFFOLD_OUTPUT_CONTRACT.md defines required generated files.
* WORKCELL_ONBOARDING_CONTRACT.md defines onboarding behavior.

Do not depend on tool-specific skills or product-specific agent features. Execute this contract using the file and document capabilities available in the current environment.

## Required Inputs

* {{ADAPT_FRAMEWORK_PATH}}
* {{PROJECT_FOLDER_PATH}}
* {{ADAPT_INSTANCE_PATH}}
* {{PROJECT_DOCUMENT_PATH}}
* File creation approval
* Project source mutation approval

If a required path or approval is missing, ask for it before scaffolding. File creation requires explicit approval.

## Workflow

1. Validate required paths.
2. Read START_HERE.md.
3. Read SCAFFOLD_WORKFLOW_AGENT.md.
4. Read SCAFFOLD_OUTPUT_CONTRACT.md.
5. Read WORKCELL_ONBOARDING_CONTRACT.md.
6. Read the project document.
7. Extract source truth.
8. Infer project shape.
9. Scaffold full external ADAPT instance.
10. Populate starter artifacts.
11. Record missing details as open questions/gaps.
12. Do not create real workcells unless onboarding commands were provided.
13. Do not mutate project source code unless explicitly approved for shell scaffolding.
14. Produce ADAPT Startup / Initialization Report.
15. Stop.

## Source Truth Extraction

Extract:

* project name
* domain summary
* users
* workflows
* business rules
* requirements
* acceptance criteria
* risks
* non-goals
* open questions
* suggested modules
* validation concerns
* integration concerns

Do not invent missing content.

## Missing Details Handling

Missing language, framework, database, auth, deployment, team names, and first milestone must not block scaffolding.

Record them in:

* OPEN_QUESTIONS.md
* GAP_REGISTER.md

Use:

* GAP-T10 Decision Gap
* GAP-T11 Context Gap

## Project Shell Policy

Project shell creation is allowed only if project source mutation approval is YES.

If approved, shell creation must be limited to:

* solution shell
* frontend shell
* backend shell
* README files
* placeholder contracts
* placeholder docs
* placeholder test folders

Forbidden:

* real business logic
* secrets
* cloud resources
* production auth
* database persistence
* payment/chat/GPS/live-map implementation

Do not edit existing project source as part of shell scaffolding unless the approval explicitly covers those files.

## Required Final Report

The scaffold must output:

# ADAPT Startup / Initialization Report

Include:

* framework source path
* project folder path
* ADAPT instance path
* project document path
* initialization behavior
* source truth status
* inferred project shape
* ADAPT folders created
* ADAPT files created
* project files touched
* open questions recorded
* gaps created
* blockers created
* next recommended command
* status

Next recommended command:
Run Director intake.

## Stop Rule

After scaffold initialization, stop.
