# START HERE — ADAPT Framework Launcher

## Purpose

This file is the primary entrypoint for using ADAPT.

When an AI tool is told:

```text
Read and execute START_HERE.md
```

it must start from this file.

This repository is the **ADAPT Framework Source**. It is not automatically the target project and not automatically the project-specific ADAPT instance.

ADAPT should normally operate with three separate folders:

```text
/workspace/
├── ADAPT_FRAMEWORK/
│   └── reusable ADAPT framework, templates, commands, and rules
│
├── PROJECT_FOLDER/
│   └── actual project files, source code, business files, or existing repo
│
└── ADAPT_INSTANCE/
    └── project-specific ADAPT control plane, source truth, workcells, handoffs, evidence, and context packs
```

Default rule:

> Do not initialize ADAPT inside the project folder unless the user explicitly approves it.

---

# 1. First Instruction to the AI Tool

You are an AI tool operating ADAPT.

Before creating, modifying, scaffolding, or executing anything, you must classify the operating context.

You must determine:

1. Where is the ADAPT Framework Source?
2. Where is the target Project Folder?
3. Where should the ADAPT Instance be created or recovered?
4. Is the project new or existing?
5. What initialization mode is requested?
6. Is source truth already provided?
7. Is file creation approved?
8. Is project source mutation approved?

If any of these are missing, ask the user.

Do not guess.

---

# 2. Required First Response

When this file is read without complete startup details, respond with:

```text
ADAPT startup requires target details.

Please provide:

1. ADAPT framework path:
2. Project folder path:
3. ADAPT instance output path:
4. Is this a NEW_PROJECT or EXISTING_PROJECT?
5. Initialization mode:
   - ADAPT_LITE
   - TEMPLATE_ONLY
   - DIRECTOR_ONLY
   - SOURCE_TRUTH_ONLY
   - FULL_SCAFFOLD
   - WORKCELL_ONBOARDING
   - RECOVER_EXISTING_ADAPT
6. Source truth document path, if any:
7. Should source truth be promoted now? YES/NO
8. May I create or modify files? YES/NO
9. May I modify project source code? YES/NO
```

If the user already provided these details, continue without asking again.

---

# 3. Operating Identity

This repository should be treated as:

```text
ADAPT_FRAMEWORK_SOURCE
```

It contains reusable ADAPT materials:

```text
ADAPT/00_FRAMEWORK/
ADAPT/07_GUARDRAILS/
ADAPT/08_TEMPLATES/
ADAPT/10_CONTEXT_ECONOMY/
ADAPT/11_ONBOARDING/
ADAPT/12_JANITOR/
ADAPT/13_PLANNING/
ADAPT/15_COMMANDS_AND_DRIVERS/
```

These files are reusable framework references.

Project-specific state should be written to the external ADAPT Instance folder, not to this framework repository, unless the user explicitly says they are updating the framework itself.

---

# 4. Folder Roles

## 4.1 ADAPT Framework Source

Purpose:

```text
Reusable ADAPT framework, rules, templates, command drivers, and operating model.
```

Allowed by default:

```text
Read framework files.
Use templates.
Use command drivers.
Use guardrail definitions.
Use action prompts.
```

Forbidden by default:

```text
Do not store project-specific control plane here.
Do not store project-specific workcells here.
Do not store project-specific handoffs here.
Do not mutate framework files unless the user explicitly requests framework changes.
```

---

## 4.2 Project Folder

Purpose:

```text
Actual application source code, business files, existing project repo, or product documents.
```

Allowed by default:

```text
Read only if user approves discovery.
```

Forbidden by default:

```text
Do not mutate project source code.
Do not create application files.
Do not create backend/frontend/test files.
Do not change build, pipeline, or deployment files.
```

Project source mutation requires:

```text
approved workcell
active handoff
scope contract
context pack
mutation permission
required evidence
explicit user approval when required
```

---

## 4.3 ADAPT Instance Folder

Purpose:

```text
Project-specific ADAPT governance state.
```

Allowed outputs:

```text
ADAPT control plane
source truth map
Director Lane
workcell registry
workcells
handoffs
context packs
context deltas
evidence reports
gap register
blocker register
planning artifacts
janitor reports
cycle consolidation reports
```

This is the default write target for ADAPT project operations.

---

# 5. Initialization Modes

The user must choose one initialization mode.

## 5.1 ADAPT_LITE

Use when:

```text
early project
solo testing
requirements only
no full team yet
no implementation yet
```

Creates or recovers only:

```text
00_FRAMEWORK reference copy or links
01_SOURCE_TRUTH
02_DIRECTOR_LANE
08_TEMPLATES
10_CONTEXT_ECONOMY
11_ONBOARDING
```

Does not create:

```text
full workcells
full QA structure
full integration structure
challenge lane
heavy janitor workflow
implementation tasks
```

ADAPT Lite is not weaker ADAPT. It is the safe bootstrap mode before the team and delivery workflow exist.

---

## 5.2 TEMPLATE_ONLY

Use when the user only wants reusable templates scaffolded.

Creates:

```text
ADAPT/08_TEMPLATES/
```

Does not create:

```text
Director Lane
workcells
source truth
implementation tasks
```

---

## 5.3 DIRECTOR_ONLY

Use when the user wants the project control layer but no team workcells yet.

Creates:

```text
ADAPT/02_DIRECTOR_LANE/
```

May also create:

```text
ADAPT/01_SOURCE_TRUTH/
ADAPT/10_CONTEXT_ECONOMY/
```

Does not create real workcells unless explicitly onboarded.

---

## 5.4 SOURCE_TRUTH_ONLY

Use when the user wants business/project documents normalized into ADAPT source truth.

Requires:

```text
source truth document path
approval to promote or draft-map source truth
```

Missing technology stack should not block this mode.

If technical stack is missing, record it in:

```text
OPEN_QUESTIONS.md
GAP_REGISTER.md
```

---

## 5.5 FULL_SCAFFOLD

Use when the user wants the full ADAPT governance scaffold.

May create:

```text
00_FRAMEWORK
01_SOURCE_TRUTH
02_DIRECTOR_LANE
04_INTEGRATION
05_VALIDATION
06_HANDOFFS
07_GUARDRAILS
08_TEMPLATES
09_CHALLENGE_LANE
10_CONTEXT_ECONOMY
11_ONBOARDING
12_JANITOR
13_PLANNING
14_MEMORY_BANK
15_COMMANDS_AND_DRIVERS
```

Does not create real human workcells unless explicit onboarding commands are provided.

---

## 5.6 WORKCELL_ONBOARDING

Use when the user says:

```text
Onboard <Name> as <Role>
```

Requires:

```text
Director Lane exists
Workcell Registry exists
role is supported
user explicitly requested onboarding
```

Creates:

```text
ADAPT/03_WORKCELLS/<ROLE>_<NAME>/
```

---

## 5.7 RECOVER_EXISTING_ADAPT

Use when an ADAPT Instance already exists.

Must read:

```text
ADAPT/02_DIRECTOR_LANE/PROJECT_CONTROL_PLANE.md
ADAPT/06_HANDOFFS/ACTIVE/
ADAPT/10_CONTEXT_ECONOMY/CONTEXT_DELTAS/
ADAPT/02_DIRECTOR_LANE/BLOCKER_REGISTER.md
ADAPT/02_DIRECTOR_LANE/GAP_REGISTER.md
```

Then recover current state before executing anything.

---

# 6. Required Framework Files to Read

When operating ADAPT, read only what is needed.

Minimum framework files:

```text
ADAPT/15_COMMANDS_AND_DRIVERS/ACTION_PROMPT_MASTER.md
ADAPT/15_COMMANDS_AND_DRIVERS/COMMAND_REGISTRY.md
ADAPT/15_COMMANDS_AND_DRIVERS/COMMAND_ROUTING_MATRIX.md
ADAPT/15_COMMANDS_AND_DRIVERS/CONTROL_PLANE_SCHEMA.md
ADAPT/15_COMMANDS_AND_DRIVERS/STOP_RULES.md
ADAPT/15_COMMANDS_AND_DRIVERS/MUTATION_PERMISSION_MATRIX.md
ADAPT/15_COMMANDS_AND_DRIVERS/HUMAN_APPROVAL_GATES.md
ADAPT/15_COMMANDS_AND_DRIVERS/CONTEXT_BUDGET_POLICY.md
```

Read role-specific prompts only when needed:

```text
ACTION_PROMPT_DIRECTOR.md
ACTION_PROMPT_CONTEXT_STEWARD.md
ACTION_PROMPT_ONBOARDING.md
ACTION_PROMPT_PLANNING.md
ACTION_PROMPT_WORKCELL.md
ACTION_PROMPT_INTEGRATOR.md
ACTION_PROMPT_QA.md
ACTION_PROMPT_JANITOR.md
ACTION_PROMPT_CHALLENGE.md
```

Read templates only when scaffolding artifacts.

---

# 7. Universal Execution Law

Every ADAPT action must follow Adaptive / Atomic Handoff Dispatch.

The sequence is:

```text
1. Recover current state.
2. Locate active handoff or control plane.
3. Validate authority.
4. Estimate job size.
5. Compute minimum safe context.
6. Generate or attach Context Pack.
7. Decide execute / split / block / route.
8. Execute only one authorized bounded move.
9. Produce evidence.
10. Produce Context Delta.
11. Emit next handoff.
12. Update control plane.
13. Stop.
```

Do not continue after emitting the next handoff.

---

# 8. Authority Rules

## 8.1 Conversation is not authority

Chat messages, assumptions, and model memory are not operational authority.

Authority lives in:

```text
source truth
control plane
active handoff
scope contract
context pack
decision log
evidence artifacts
approval records
```

---

## 8.2 Memory Bank is not live authority

Memory Bank is reference only.

A Memory Bank item becomes live only if promoted through Director-controlled workflow.

---

## 8.3 Source truth must be promoted

Project documents are not automatically live source truth.

To promote a document, the user must explicitly say something like:

```text
Promote <document> as SOURCE_TRUTH_V0.1
```

The promotion must be recorded in:

```text
SOURCE_TRUTH_VERSION_LOG.md
DECISION_LOG.md
```

---

## 8.4 Markdown and document authority

Portable documents may exist as `.docx`.

Markdown artifacts are preferred for operational use.

If `.docx` and `.md` conflict:

```text
Director Lane must resolve the conflict through DECISION_LOG.md.
```

---

# 9. Project Source Mutation Rules

Do not mutate project source code unless all are true:

```text
1. A real workcell owns the mutation.
2. There is an active handoff.
3. There is a context pack.
4. Scope contract permits the mutation.
5. Mutation permission matrix allows it.
6. Required evidence is known.
7. Stop rules do not block execution.
```

Director Lane must never mutate application source code.

QA Workcell must not mutate application source code.

Janitor must not mutate application source code.

Context Steward must not mutate application source code.

Challenge Lane must not mutate application source code.

---

# 10. Startup Decision Tree

## If no project folder path is provided

Ask for it.

Do not continue.

## If no ADAPT instance path is provided

Ask for it.

Do not create inside the project folder by default.

## If project is existing but discovery is not approved

Do not inspect project source.

Ask for approval.

## If project is new and no source truth exists

Ask for business/project document or requirements.

## If source truth is provided but not approved for promotion

Create draft source truth map only, or ask for promotion approval.

## If initialization mode is missing

Ask the user to choose a mode.

## If technology stack is missing

Do not block framework, template, Director, or source truth scaffolding.

Record as open question or gap.

## If team members are missing

Do not block framework, template, Director, or source truth scaffolding.

Do not create real workcells.

Wait for onboarding commands.

---

# 11. Valid Commands

Supported commands include:

```text
Initialize ADAPT from requirements
Promote <document> as SOURCE_TRUTH_V0.1
Analyze requirements into source truth
Run Director intake
Onboard <Name> as <Role>
Plan milestone <Milestone ID>
Approve milestone plan
Generate roadmap for <Workcell>
Generate context pack for active handoff
Run atomic handoff dispatch
Route gap <Gap ID>
Resolve blocker <Blocker ID>
Run integration review
Run QA validation
Trigger challenge review
Run janitor pass
Director consolidate cycle
Prepare next cycle
Recover existing ADAPT instance
```

If a command is unclear, classify it and ask for confirmation before execution.

---

# 12. Required Output Format

After any startup or execution attempt, respond with:

```markdown
# ADAPT Startup / Execution Report

## Framework Source Path

<path>

## Project Folder Path

<path>

## ADAPT Instance Path

<path>

## Project Classification

<NEW_PROJECT or EXISTING_PROJECT>

## Initialization Mode

<mode>

## Current Phase

<phase>

## Action Performed

<summary>

## Files Created

<list>

## Files Modified

<list>

## Files Not Touched

<list>

## Open Questions

<list>

## Gaps Created

<list>

## Blockers Created

<list>

## Next Recommended Command

<exact next command>

## Status

<READY_FOR_USER_REVIEW | READY_FOR_SOURCE_TRUTH_PROMOTION | READY_FOR_DIRECTOR_LANE | READY_FOR_ONBOARDING | READY_FOR_PLANNING | BLOCKED>
```

---

# 13. Non-Negotiable Stop Rules

Stop if:

```text
no active authority exists
multiple active handoffs exist
source truth is missing for source-truth-dependent work
context pack is missing for execution
scope exceeds workcell authority
mutation authority is missing
Director is asked to mutate code
QA is asked to validate without acceptance criteria
implementation task has no owner
required evidence cannot be produced
guardrail returns STOP_REQUIRED
```

When stopping, create or recommend a gap/blocker instead of guessing.

---

# 14. How to Start ADAPT on a New Machine

Use a prompt like:

```text
Read and execute START_HERE.md.

ADAPT framework path:
C:\WORK\ADAPT_FRAMEWORK

Project folder path:
C:\WORK\PROJECT_X

ADAPT instance path:
C:\WORK\PROJECT_X_ADAPT

Project classification:
EXISTING_PROJECT

Initialization mode:
DIRECTOR_ONLY

Do not mutate project source code.
```

If values are missing, ask for them.

---

# 15. How to Start ADAPT for an Empty New Project

Use:

```text
Read and execute START_HERE.md.

ADAPT framework path:
<path to ADAPT_FRAMEWORK>

Project folder path:
<path to empty project folder>

ADAPT instance path:
<path to external ADAPT instance>

Project classification:
NEW_PROJECT

Initialization mode:
ADAPT_LITE

Source truth document:
<path to project requirements document>

Promote source truth:
YES

Do not create application source code.
Do not finalize technology stack.
```

---

# 16. How to Recover an Existing ADAPT Instance

Use:

```text
Read and execute START_HERE.md.

ADAPT framework path:
<path to ADAPT_FRAMEWORK>

Project folder path:
<path to project folder>

ADAPT instance path:
<path to existing ADAPT instance>

Initialization mode:
RECOVER_EXISTING_ADAPT

Do not mutate project source code.
```

Recovery must start from:

```text
PROJECT_CONTROL_PLANE.md
ACTIVE_HANDOFFS
GAP_REGISTER.md
BLOCKER_REGISTER.md
LAST_CONTEXT_DELTA
```

---

# 17. Final Rule

If uncertain, do not guess.

Classify the uncertainty as one of:

```text
OPEN_QUESTION
GAP
BLOCKER
NEEDS_APPROVAL
NEEDS_CONTEXT
NEEDS_ONBOARDING
NEEDS_PLANNING
```

Then stop or ask the user.

ADAPT must be safe before it is fast.
