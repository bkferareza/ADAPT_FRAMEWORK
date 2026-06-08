# Command Registry

Status: ACTIVE

| ID | Command | Authority | Required Inputs | Allowed Outputs | Stop Conditions |
|---|---|---|---|---|---|
| CMD-01 | Initialize ADAPT from requirements | Governed orchestrator for command | Valid authority and required inputs | Governed artifacts and evidence | Scope, authority, context, or evidence failure |
| CMD-02 | Promote document as source truth | Governed orchestrator for command | Valid authority and required inputs | Governed artifacts and evidence | Scope, authority, context, or evidence failure |
| CMD-03 | Analyze requirements into source truth | Governed orchestrator for command | Valid authority and required inputs | Governed artifacts and evidence | Scope, authority, context, or evidence failure |
| CMD-04 | Run Director intake | Governed orchestrator for command | Valid authority and required inputs | Governed artifacts and evidence | Scope, authority, context, or evidence failure |
| CMD-05 | Onboard <Name> as <Role> | Governed orchestrator for command | Valid authority and required inputs | Governed artifacts and evidence | Scope, authority, context, or evidence failure |
| CMD-06 | Plan milestone <ID> | Governed orchestrator for command | Valid authority and required inputs | Governed artifacts and evidence | Scope, authority, context, or evidence failure |
| CMD-07 | Approve milestone plan | Governed orchestrator for command | Valid authority and required inputs | Governed artifacts and evidence | Scope, authority, context, or evidence failure |
| CMD-08 | Generate roadmap for <Workcell> | Governed orchestrator for command | Valid authority and required inputs | Governed artifacts and evidence | Scope, authority, context, or evidence failure |
| CMD-09 | Generate context pack for active handoff | Governed orchestrator for command | Valid authority and required inputs | Governed artifacts and evidence | Scope, authority, context, or evidence failure |
| CMD-10 | Run atomic handoff dispatch | Governed orchestrator for command | Valid authority and required inputs | Governed artifacts and evidence | Scope, authority, context, or evidence failure |
| CMD-11 | Route gap <ID> | Governed orchestrator for command | Valid authority and required inputs | Governed artifacts and evidence | Scope, authority, context, or evidence failure |
| CMD-12 | Resolve blocker <ID> | Governed orchestrator for command | Valid authority and required inputs | Governed artifacts and evidence | Scope, authority, context, or evidence failure |
| CMD-13 | Run integration review | Governed orchestrator for command | Valid authority and required inputs | Governed artifacts and evidence | Scope, authority, context, or evidence failure |
| CMD-14 | Run QA validation | Governed orchestrator for command | Valid authority and required inputs | Governed artifacts and evidence | Scope, authority, context, or evidence failure |
| CMD-15 | Trigger challenge review | Governed orchestrator for command | Valid authority and required inputs | Governed artifacts and evidence | Scope, authority, context, or evidence failure |
| CMD-16 | Run janitor pass | Governed orchestrator for command | Valid authority and required inputs | Governed artifacts and evidence | Scope, authority, context, or evidence failure |
| CMD-17 | Director consolidate cycle | Governed orchestrator for command | Valid authority and required inputs | Governed artifacts and evidence | Scope, authority, context, or evidence failure |
| CMD-18 | Prepare next cycle | Governed orchestrator for command | Valid authority and required inputs | Governed artifacts and evidence | Scope, authority, context, or evidence failure |

Application mutation is allowed only for a scoped workcell command with explicit approval and allowed paths. Director, Planning, Context Steward, QA validation, Janitor, and Challenge commands do not mutate product code.
