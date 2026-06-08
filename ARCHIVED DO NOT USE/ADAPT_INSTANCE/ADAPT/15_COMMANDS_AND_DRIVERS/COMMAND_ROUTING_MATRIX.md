# Command Routing Matrix

| Command | Primary Orchestrator | Secondary Orchestrator | Requires Approval | Can Mutate Code |
|---|---|---|---|---|
| Initialize ADAPT from requirements | Director Lane | Source Truth Orchestrator | Yes | No |
| Promote document as source truth | Source Truth Orchestrator | Director Lane | Yes | No |
| Analyze requirements into source truth | Source Truth Orchestrator | Director Lane | No | No |
| Run Director intake | Director Lane | Guardrail Orchestrators | No | No |
| Onboard as | Onboarding Orchestrator | Director Lane | Yes | No |
| Plan milestone | Planning Orchestrator | Director Lane | No | No |
| Approve milestone plan | Director Lane | Planning Orchestrator | Yes | No |
| Generate roadmap for | Planning Orchestrator | Onboarding Orchestrator | Director | No |
| Generate context pack for active handoff | Context Steward | Guardrail Orchestrators | No | No |
| Run atomic handoff dispatch | Workcell Orchestrator | Context Steward | Scope-based | Scope-based |
| Route gap | Director Lane | Guardrail Orchestrators | No | No |
| Resolve blocker | Director Lane | Owning Orchestrator | Yes | No |
| Run integration review | Integrator Orchestrator | Guardrail Orchestrators | Scope-based | Limited |
| Run QA validation | QA Orchestrator | Director Lane | No | No |
| Trigger challenge review | Challenge Lane | Director Lane | No | No |
| Run janitor pass | Janitor Orchestrator | Director Lane | Major archive only | No |
| Director consolidate cycle | Director Lane | QA/Integrator/Janitor | Yes | No |
| Prepare next cycle | Planning Orchestrator | Director Lane | Director | No |
