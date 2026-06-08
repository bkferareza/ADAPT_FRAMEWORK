# ADAPT Framework Generation Test

This repository contains a generated ADAPT framework scaffold for a sample business project, `Paggawa: Local Skills Discovery and Barangay-Assisted Job Matching Platform`.

The purpose of this repository is to test framework generation, document scaffolding, operating commands, role boundaries, context economy, and handoff discipline before any application source code or final technical stack is created.

## What ADAPT Is

ADAPT is a document-first delivery framework for converting accepted business truth into controlled execution. It separates durable authority, planning, workcell ownership, context packs, evidence, QA independence, integration readiness, challenge review, and cleanup into explicit artifacts.

The central operating rule is Adaptive / Atomic Handoff Dispatch:

1. Recover current state.
2. Locate active handoff or control plane.
3. Validate authority.
4. Estimate job size.
5. Compute minimum safe context.
6. Generate or attach Context Pack.
7. Decide whether to execute, split, block, or route.
8. Execute only if authorized and atomic.
9. Produce evidence.
10. Produce Context Delta.
11. Emit next handoff.
12. Update control plane.
13. Stop.

## What This Repository Contains

- `START_HERE.md` - original scaffold instruction entry point.
- `Paggawa.docx` - sample business project document used as the initial source truth input.
- `ADAPT/00_FRAMEWORK/` - framework rules, governance, roles, glossary, artifact standards.
- `ADAPT/01_SOURCE_TRUTH/` - normalized business items, acceptance criteria, requirement index, open questions, source truth version log.
- `ADAPT/02_DIRECTOR_LANE/` - project control plane, registries, blockers, gaps, decisions, assignments.
- `ADAPT/03_WORKCELLS/` - sample onboarded workcell scaffolds for Brian across integrator, backend, frontend, and QA roles.
- `ADAPT/07_GUARDRAILS/` - scope, context, evidence, contract, mutation, QA independence, and handoff guardrails.
- `ADAPT/08_TEMPLATES/` - reusable templates for handoffs, context packs, evidence, defects, reports, roadmaps, blockers, gaps, and workcells.
- `ADAPT/10_CONTEXT_ECONOMY/` - context rules, budgets, and indexes.
- `ADAPT/11_ONBOARDING/` - onboarding rules, role mapping, onboarding requests, and onboarding reports.
- `ADAPT/12_JANITOR/` - cleanup and stale artifact rules.
- `ADAPT/13_PLANNING/` - planning rules, capacity model, and milestone register.
- `ADAPT/14_MEMORY_BANK/` - reference-only notes and indexes.
- `ADAPT/15_COMMANDS_AND_DRIVERS/` - command registry, syntax, routing matrix, control-plane schema, action prompts, mutation permissions, approval gates, stop rules, context budget policy, evidence standards, and ADAPT Lite mode.

## What This Repository Does Not Contain

This scaffold intentionally does not include:

- application source code
- backend implementation files
- frontend implementation files
- test implementation files
- database schema
- deployment files
- pipeline configuration
- final technology stack decisions

Technology is currently marked as `UNKNOWN / NOT FINALIZED`. Any future source mutation requires explicit Source Truth, Director authority, approved workcell scope, active handoff, context pack, allowed paths, and evidence obligations.

## Current Test Status

This is a framework generation test, not a runnable application. The repository is useful for reviewing:

- whether ADAPT scaffold documents are coherent
- whether authority boundaries are explicit
- whether commands route to the right orchestrators
- whether QA independence is protected
- whether context is sized instead of dumped
- whether handoffs are atomic and evidence-bearing
- whether the framework can support later planning and implementation safely

## Recommended Next Actions

1. Review `ADAPT/02_DIRECTOR_LANE/PROJECT_CONTROL_PLANE.md`.
2. Decide whether `ADAPT/15_COMMANDS_AND_DRIVERS/` should be registered as an active ADAPT area.
3. Resolve open project starter decisions: platform, technology stack, first milestone, and QA independence handling.
4. Run Director intake before any additional onboarding, planning, or implementation work.

