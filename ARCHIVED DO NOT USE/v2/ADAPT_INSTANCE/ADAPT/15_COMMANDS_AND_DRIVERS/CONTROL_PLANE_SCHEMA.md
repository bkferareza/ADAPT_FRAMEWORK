# Control Plane Schema

Required fields: ProjectName, ProjectType, InitializationMode, SourceTruthVersion, ActiveMilestone, ActiveCycle, ActiveHandoff, CurrentAuthority, ExecutionReadiness, CurrentPhase, ActiveWorkcell, Blocked, ActiveBlockers, ActiveGaps, LastAction, LastContextDelta, NextExpectedAction, LastConsolidatedAt, and Notes.

ExecutionReadiness values: READY, NOT_READY, BLOCKED, NEEDS_CONTEXT, NEEDS_APPROVAL, NEEDS_PLANNING, NEEDS_ONBOARDING.

CurrentPhase values: INITIALIZED, SOURCE_TRUTH_LOADING, SOURCE_TRUTH_READY, ONBOARDING, PLANNING, EXECUTION, INTEGRATION, QA_VALIDATION, CHALLENGE_REVIEW, CONSOLIDATION, JANITOR_PASS, READY_FOR_NEXT_CYCLE, BLOCKED, and SCAFFOLD_INITIALIZED.
