# Command Routing Matrix

| Command Family | Primary Orchestrator | Secondary | Approval | Can Mutate Code |
|---|---|---|---|---|
| Initialize / promote / analyze | Source Truth Orchestrator | Director Lane | Yes for promotion | No |
| Director intake / consolidate / prepare | Director Lane | Context Steward | Depends on decision | No |
| Onboard | Onboarding Orchestrator | Director Lane | Yes | No |
| Plan / roadmap | Planning Orchestrator | Director Lane | Plan approval required | No |
| Context / dispatch | Context Steward | Workcell Orchestrator | Scope dependent | Workcell only |
| Integration review | Integrator Orchestrator | Director Lane | No review approval | Limited authorized fixes only |
| QA validation | QA Orchestrator | Director Lane | Final signoff may require approval | Tests only if scoped |
| Janitor | Janitor Orchestrator | Director Lane | Required for major archive | No application code |
| Challenge | Challenge Lane | Director Lane | No | No |
