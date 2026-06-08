# START HERE Full Scaffold Overhaul Report

## Summary Of Changes

Replaced the root `START_HERE.md` launcher with a single full external ADAPT instance scaffolding flow. The launcher now asks only for missing required paths and permissions, reads the reusable ADAPT framework source, reads the provided project document, extracts source truth starter material, creates the complete external ADAPT governance instance, reports gaps and open questions, recommends Director intake, and stops.

## Removed Mode-Selection Behavior

Removed the prior startup requirement to choose between `ADAPT_LITE`, `TEMPLATE_ONLY`, `DIRECTOR_ONLY`, `SOURCE_TRUTH_ONLY`, `FULL_SCAFFOLD`, `WORKCELL_ONBOARDING`, and `RECOVER_EXISTING_ADAPT` as initialization modes.

The launcher now explicitly says not to ask the user to choose Lite/Full/Template/Director modes.

## New Default Behavior

The only default startup behavior is:

```text
FULL_EXTERNAL_ADAPT_INSTANCE_SCAFFOLD
```

The startup flow creates a complete external governance scaffold under `ADAPT_INSTANCE`, promotes or draft-maps source truth based on the provided inputs, avoids project source mutation, records unknown technical choices as gaps or open questions, and ends at:

```text
READY_FOR_DIRECTOR_INTAKE
```

## Files Modified

```text
START_HERE.md
```

## Files Created

```text
START_HERE_FULL_SCAFFOLD_OVERHAUL_REPORT.md
```

## Validation Checklist

- `START_HERE.md` identifies itself as the single sufficient launcher for ADAPT scaffolding.
- `START_HERE.md` defines `FULL_EXTERNAL_ADAPT_INSTANCE_SCAFFOLD` as the only default initialization behavior.
- Old mode-selection instructions were removed from the required startup flow.
- Required startup inputs are limited to framework path, project folder path, ADAPT instance path, project document path, file creation approval, and project source mutation approval.
- Optional startup inputs are non-blocking.
- Project source mutation defaults to `NO`.
- File creation approval is required before scaffolding.
- The launcher requires the full external ADAPT folder scaffold.
- The launcher lists all required starter artifacts.
- The launcher requires source truth extraction from the project document without inventing missing content.
- Missing technical/project details are recorded as open questions or `GAP-T10` / `GAP-T11` gaps.
- The launcher prevents application source code, database schema, pipeline/deployment files, and final technology stack creation.
- The launcher prevents real person-owned workcells unless explicit onboarding commands are provided.
- The required startup report format is included.
- The final non-negotiable rules end with `Run Director intake`.

## Recommended Next Test Command

```text
Read and execute START_HERE.md
```

Provide required paths and approvals, then verify that the generated external ADAPT instance reaches:

```text
READY_FOR_DIRECTOR_INTAKE
```

## Status

```text
START_HERE_FULL_SCAFFOLD_READY
```
