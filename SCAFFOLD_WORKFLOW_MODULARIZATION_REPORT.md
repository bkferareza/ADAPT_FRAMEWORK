# Scaffold Workflow Modularization Report

## Summary

The scaffold workflow is split into four stable responsibilities:

* START_HERE.md is the concise launcher and entrypoint.
* SCAFFOLD_WORKFLOW_AGENT.md is the workflow brain.
* SCAFFOLD_OUTPUT_CONTRACT.md is the generated output contract.
* WORKCELL_ONBOARDING_CONTRACT.md is the onboarding and action-prompt contract.

Project-specific ADAPT state is directed to ADAPT_INSTANCE. The framework repository remains reusable source rather than a generated project instance.

## Files Created

* SCAFFOLD_WORKFLOW_AGENT.md
* SCAFFOLD_OUTPUT_CONTRACT.md
* WORKCELL_ONBOARDING_CONTRACT.md
* SCAFFOLD_WORKFLOW_MODULARIZATION_REPORT.md
* ARCHIVED DO NOT USE/README.md

## Files Modified

* START_HERE.md
* README.md

## Files Intentionally Not Modified

The following historical generated trees and all of their ADAPT subfolders were not modified:

* ARCHIVED DO NOT USE/v0/
* ARCHIVED DO NOT USE/v1/
* ARCHIVED DO NOT USE/v2/

PROJECT_FOLDER was not modified. No generated ADAPT templates, commands, drivers, guardrails, workcells, or project application files were edited.

## Cleanup Performed

* Replaced the monolithic START_HERE.md with a concise launcher.
* Moved scaffold workflow, output, and onboarding behavior into separate root contracts.
* Updated README.md to identify active framework source and the external ADAPT_INSTANCE boundary.
* Left historical generated output in its existing archive location.
* Added an archive boundary marker with status REFERENCE_ONLY_GENERATED_OUTPUT.

## Validation Checklist

* START_HERE.md is concise.
* START_HERE.md points to the three scaffold contract files.
* SCAFFOLD_WORKFLOW_AGENT.md exists.
* SCAFFOLD_OUTPUT_CONTRACT.md exists.
* WORKCELL_ONBOARDING_CONTRACT.md exists.
* No generated ADAPT templates or command drivers were edited as source.
* Double-brace placeholders are used.
* Workcell action prompt generation is defined.
* Role-specific default agent blueprint generation is defined.
* Workflow customization governance is defined.

## Status

SCAFFOLD_WORKFLOW_MODULARIZED

End.
