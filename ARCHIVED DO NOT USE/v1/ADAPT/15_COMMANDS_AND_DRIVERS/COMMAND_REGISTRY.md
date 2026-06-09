# Command Registry

| Command | Purpose | Authority / Orchestrator | Allowed Output | Code Mutation | Approval | Stop Condition |
|---|---|---|---|---|---|---|
| Initialize ADAPT from requirements | Create approved governance scaffold | Director / Source Truth | ADAPT artifacts | No | Yes | Missing creation approval |
| Promote document as source truth | Version an approved source | Source Truth / Director | Source Truth artifacts | No | Yes | Promotion not approved |
| Analyze requirements into source truth | Normalize business truth | Source Truth | Requirement maps and gaps | No | No | Source missing |
| Run Director intake | Classify state and next movement | Director | Intake, decisions, control plane | No | No | Authority conflict |
| Onboard <Name> as <Role> | Create person-owned workcell | Onboarding / Director | Workcell artifacts | No | Yes | Inputs or role missing |
| Plan milestone <ID> | Recommend bounded delivery plan | Planning | Plan and risk reports | No | No | Objective/workcells missing |
| Approve milestone plan | Accept planning recommendation | Director | Decision and control update | No | Yes | Evidence incomplete |
| Generate roadmap for <Workcell> | Create bounded roadmap | Planning | Workcell roadmap | No | Director | Workcell absent |
| Generate context pack for active handoff | Compute minimum-safe context | Context Steward | Context Pack | No | No | No single handoff |
| Run atomic handoff dispatch | Perform one lawful movement | Dispatcher / active owner | Evidence, delta, next handoff | Scope-based | As required | Guardrail stop |
| Route gap <ID> | Assign gap closure | Director | Gap routing update | No | No | Gap invalid |
| Resolve blocker <ID> | Record evidence-based closure | Director / owner | Blocker decision | No | Yes | Closure proof absent |
| Run integration review | Reconcile cross-lane readiness | Integrator | Integration report | Limited | Scope-based | Contracts/evidence absent |
| Run QA validation | Independently validate acceptance | QA | Tests, defects, signoff recommendation | No | No | Criteria/environment absent |
| Trigger challenge review | Search for hidden failure modes | Challenge | Challenge report | No | No | No testable concern |
| Run janitor pass | Archive, compact, and flag stale items | Janitor | Janitor report | No | Major archive | Authority missing |
| Director consolidate cycle | Certify cycle state | Director | Consolidation and carry-over | No | Yes | Evidence/status incomplete |
| Prepare next cycle | Create planning handoff | Planning / Director | Next-cycle proposal | No | Director | Current cycle not consolidated |
