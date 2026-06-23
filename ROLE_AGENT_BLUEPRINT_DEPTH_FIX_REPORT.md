# Role Agent Blueprint Depth Fix Report

## Summary

Role agent blueprint scaffolding now requires detailed per-agent definitions instead of shallow agent-name lists.

## Files Modified

* `WORKCELL_ONBOARDING_CONTRACT.md`
* `SCAFFOLD_OUTPUT_CONTRACT.md`
* `ROLE_AGENT_BLUEPRINT_DEPTH_FIX_REPORT.md`

## Files Intentionally Not Modified

* `START_HERE.md`
* `README.md`
* `SCAFFOLD_WORKFLOW_AGENT.md`
* Output-location behavior and path-resolution behavior
* External versus repository test-output behavior
* Generated ADAPT instance folders
* `PROJECT_FOLDER/`
* `ARCHIVED DO NOT USE/`
* ADAPT application source files and project implementation logic

## Contract Changes

Every generated `DEFAULT_AGENT_BLUEPRINT.md` must now define each role agent with populated `Purpose`, `Inputs`, `Actions`, `Outputs`, `Boundaries`, `Stop Conditions`, `Evidence Produced`, and `Next Handoff` sections.

The onboarding contract now supplies the required agent catalog, role-specific focus, authority boundaries, independence constraints, gap and blocker behavior, evidence expectations, and routing rules for Director, Integrator, Backend, Frontend, QA, Planning, Context Steward, Janitor, and Challenge workcells.

Generic filler and agent-name-only blueprints are invalid. If complete role-specific definitions cannot be generated, scaffolding or onboarding must stop with `ROLE_AGENT_BLUEPRINT_DEPTH_FAILURE`.

## Validation Checklist

* Every generated role agent must have Purpose.
* Every generated role agent must have Inputs.
* Every generated role agent must have Actions.
* Every generated role agent must have Outputs.
* Every generated role agent must have Boundaries.
* Every generated role agent must have Stop Conditions.
* Every generated role agent must have Evidence Produced.
* Every generated role agent must have Next Handoff.
* Shallow agent-name-only blueprints are explicitly invalid.

## Status

ROLE_AGENT_BLUEPRINT_DEPTH_FIX_READY
