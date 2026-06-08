# Command Syntax

## Status
ACTIVE

## Purpose
This document defines valid command shapes for ADAPT operating commands. Commands are plain-language instructions with explicit objects, roles, versions, or targets.

## Command Grammar

Use one of these forms:

```text
Initialize ADAPT from requirements
Promote <document> as <SOURCE_TRUTH_VERSION>
Analyze requirements into source truth
Run Director intake
Onboard <Name> as <Supported Role>
Plan milestone <MilestoneId>
Approve milestone plan <MilestoneId>
Generate roadmap for <Target>
Generate context pack for active handoff
Run atomic handoff dispatch
Route gap <GapId or gap description>
Resolve blocker <BlockerId>
Run integration review
Run QA validation
Trigger challenge review [for <Target>]
Run janitor pass
Director consolidate cycle
Prepare next cycle
```

## Required Syntax Rules
- Name the command action clearly.
- Include the target document, role, milestone, gap, blocker, or review target when the command requires one.
- Do not combine multiple execution commands unless the command is a Director intake that will route them.
- Do not request source code mutation unless an active workcell, active handoff, approved scope, and allowed paths already exist.
- Do not treat Memory Bank content as live authority.

## Valid Examples

| Command | Why valid |
|---|---|
| Initialize ADAPT from requirements | Matches the initialization command and relies on approved requirements input. |
| Promote Paggawa.docx as SOURCE_TRUTH_V0.1 | Names the source document and target Source Truth version. |
| Onboard Brian as Integrator | Names an owner and supported role. |
| Onboard Ana as Backend Developer | Names an owner and supported role; requires human approval before execution. |
| Plan milestone M01 | Names a milestone target for planning recommendation. |
| Generate context pack for active handoff | Targets the single active handoff and routes to Context Steward. |
| Run atomic handoff dispatch | Invokes the universal bounded execution flow. |
| Director consolidate cycle | Invokes cycle consolidation under Director authority. |
| Run janitor pass | Routes cleanup review to Janitor. |
| Trigger challenge review for M01 release candidate | Names the challenge target and evidence scope. |

## Invalid Examples

| Command | Why invalid |
|---|---|
| Build the whole app now | Requests broad uncontrolled execution and source mutation without technology, ownership, handoff, or scope authority. |
| Promote this chat as source truth | Conversation is not durable authority unless converted into an approved artifact first. |
| Onboard whoever is needed | Does not name an owner or supported role and invents team members. |
| Plan and implement M01 | Combines planning and implementation; planning recommends and Director approves before execution. |
| Run QA validation on vibes | Missing accepted requirements, acceptance criteria, and test target. |
| Director fix the backend bug | Director Lane cannot mutate source code. |
| Use Memory Bank as the latest requirement | Memory Bank is reference only and cannot override Source Truth. |
| Generate context pack for all workcells | Context must be minimum safe context for a bounded handoff, not a project dump. |
| Close blocker B01 because it seems solved | Blocker closure requires proof and approval. |
| Continue after next handoff | ADAPT dispatch must stop after emitting the next handoff. |

## Ambiguous Command Handling
If a command is ambiguous but non-destructive, run Director intake and record the ambiguity as a gap. If the ambiguity affects authority, mutation, source truth, QA independence, or release certification, stop and route to Director Lane or human approval.

