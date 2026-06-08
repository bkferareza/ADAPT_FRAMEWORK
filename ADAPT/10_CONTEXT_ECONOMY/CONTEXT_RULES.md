# Context Rules

## Status
ACTIVE

## Purpose
Keeps ADAPT sustainable by limiting context to the smallest safe set for each movement.

## Core Rule
No lane, workcell, or agent reads the entire project by default.

## Context Flow
1. Handoff is created.
2. Context Steward estimates job size.
3. Context Pack is generated.
4. Target consumes only required context.
5. Target produces output and Context Delta.
6. Context Steward updates indexes and summaries.

## Job Sizes
- XS: classification/status only
- S: small artifact update
- M: bounded lane task
- L: multi-artifact or multi-lane task
- XL: too large; split first

## Execution Decisions
- EXECUTE_NOW
- SPLIT_FIRST
- BLOCK_AND_REQUEST_CLARIFICATION
- ROUTE_TO_OWNER

## Current State
No active context packs exist because no active handoffs exist.
