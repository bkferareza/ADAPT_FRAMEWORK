# Control Plane Schema

Required fields:

`ProjectName`, `ProjectClassification`, `ProjectType`, `InitializationBehavior`, `InitializationMode`, `SourceTruthVersion`, `SourceTruthStatus`, `ProjectFolderPath`, `AdaptFrameworkPath`, `AdaptInstancePath`, `TechnologyStackStatus`, `ProjectSourceMutationApproval`, `ApplicationCodeCreated`, `RealWorkcellsOnboarded`, `ActiveMilestone`, `ActiveCycle`, `ActiveHandoff`, `CurrentAuthority`, `ExecutionReadiness`, `CurrentPhase`, `ActiveWorkcell`, `Blocked`, `ActiveBlockers`, `ActiveGaps`, `LastAction`, `LastContextDelta`, `NextExpectedAction`, `LastConsolidatedAt`, `Notes`.

Execution readiness values include `READY`, `NOT_READY`, `BLOCKED`, `NEEDS_CONTEXT`, `NEEDS_APPROVAL`, `NEEDS_PLANNING`, `NEEDS_ONBOARDING`, and startup value `READY_FOR_DIRECTOR_INTAKE`.

Current phase values include `INITIALIZED`, `SCAFFOLD_INITIALIZED`, `SOURCE_TRUTH_LOADING`, `SOURCE_TRUTH_READY`, `ONBOARDING`, `PLANNING`, `EXECUTION`, `INTEGRATION`, `QA_VALIDATION`, `CHALLENGE_REVIEW`, `CONSOLIDATION`, `JANITOR_PASS`, `READY_FOR_NEXT_CYCLE`, and `BLOCKED`.

STATUS: ACTIVE
