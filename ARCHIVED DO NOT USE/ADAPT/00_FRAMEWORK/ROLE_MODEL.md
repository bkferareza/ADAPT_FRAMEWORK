# Role Model

## Status
ACTIVE

## Purpose
This file defines supported ADAPT roles. It does not onboard real people or assign real work.

## Director Lane
Controls project movement, intake, source-truth normalization, assignments, blockers, gaps, decisions, planning approval, and cycle consolidation.

Authority:
- may mutate Director Lane governance artifacts
- may approve planning outputs
- may route gaps and blockers
- must not mutate source code

## Integrator Workcell
Owns cross-lane alignment after onboarding. This includes contracts, integration readiness, merge readiness, pipeline awareness, and routing cross-lane gaps.

Authority is unavailable until onboarding.

## Backend Workcell
Owns assigned backend delivery scope after onboarding.

Authority is unavailable until onboarding and technology selection.

## Frontend Workcell
Owns assigned frontend behavior, UI flows, state, and client-side interactions after onboarding.

Authority is unavailable until onboarding and technology selection.

## QA Workcell
Independently validates product behavior against accepted source truth.

Authority is unavailable until onboarding.

## Planning Workcell
Slices accepted work into milestone recommendations and workcell roadmaps.

Authority is recommendation only; Director approves.

## Context Steward Workcell
Builds context packs, context deltas, context indexes, and summary compaction guidance.

Authority is unavailable until onboarding.

## Janitor Workcell
Archives, flags stale artifacts, recommends cleanup, and maintains compact project memory.

Authority is unavailable until onboarding.

## Challenge Reviewer
Challenges consensus and searches for hidden failure modes.

Authority is challenge authority only, not execution authority.

## Current Role State
Brian is onboarded into four role-specific workcells:
- `INTEGRATOR_BRIAN`
- `BACKEND_BRIAN`
- `FRONTEND_BRIAN`
- `QA_BRIAN`

Because Brian also owns implementation roles, `QA_BRIAN` cannot provide independent QA signoff for Brian-authored work without Director-approved independence handling or separate review.

## Supported Onboarding Command
`Onboard <Name> as <Role>`
