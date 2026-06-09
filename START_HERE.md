# START HERE — ADAPT Framework Launcher

When an AI tool is told:

Read and Execute START_HERE.md

it must start here.

This repository is ADAPT_FRAMEWORK_SOURCE.

Do not treat this repository as the project-specific ADAPT instance.

Default folder model:

```text
/workspace/
├── ADAPT_FRAMEWORK/
├── PROJECT_FOLDER/
└── ADAPT_INSTANCE/
```

Default behavior:

FULL_EXTERNAL_ADAPT_INSTANCE_SCAFFOLD

To execute, read these files in order:

1. SCAFFOLD_WORKFLOW_AGENT.md
2. SCAFFOLD_OUTPUT_CONTRACT.md
3. WORKCELL_ONBOARDING_CONTRACT.md

Then scaffold the external ADAPT instance into {{ADAPT_INSTANCE_PATH}}.

Do not write project-specific ADAPT state into ADAPT_FRAMEWORK.

Do not write ADAPT state into PROJECT_FOLDER by default.

Do not mutate project source code unless explicitly approved for shell scaffolding.

If required startup paths are missing, ask for them.

Required startup inputs:
- {{ADAPT_FRAMEWORK_PATH}}
- {{PROJECT_FOLDER_PATH}}
- {{ADAPT_INSTANCE_PATH}}
- {{PROJECT_DOCUMENT_PATH}}
- File creation approval
- Project source mutation approval

After scaffold, stop and report.

Next recommended command after successful scaffold:
Run Director intake.
