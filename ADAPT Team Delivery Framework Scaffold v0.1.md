ADAPT Team Delivery Framework Scaffold v0.1
1. Purpose
This document defines the scaffold for deploying ADAPT into a real software delivery project with a team.
ADAPT is treated as the governance framework for AI-assisted delivery. It is not a single chatbot, not a single agent, and not a free-form automation layer. It is a governed project operating model that converts business requirements into controlled team execution through source truth, Director-led coordination, scoped workcells, internal agent teams, guardrails, context packs, handoffs, evidence, validation, integration, consolidation, and continuous adaptation.
The goal of this scaffold is to initialize ADAPT safely for a project where the team may not yet be fully onboarded. At the beginning, ADAPT may contain only requirements, source truth, and the Director Lane. Workcells are created later through onboarding.
________________________________________
2. Core Principles
ADAPT follows these operating principles:
1.	Source truth must be explicit.
2.	Conversation is not authority.
3.	Repository artifacts are the durable memory.
4.	Director Lane controls project movement but does not mutate code.
5.	Workcells execute scoped work.
6.	Each human team member gets a governed workcell.
7.	Each workcell may contain multiple internal agents.
8.	Developer self-validation is not QA signoff.
9.	QA Workcells are independent validation lanes.
10.	Guardrails enforce lane safety.
11.	Handoffs must be atomic.
12.	Context must be computed, not dumped.
13.	No lane closes on confidence; a lane closes only on evidence.
14.	Gaps are first-class workflow objects.
15.	Planning recommends work distribution; Director approves it.
16.	Janitor keeps ADAPT sustainable by archiving, compacting, and flagging stale artifacts.
17.	Director consolidates each cycle before the next cycle begins.
________________________________________
3. Initial Deployment State
At initialization, the project may have no developer lanes, no QA lanes, and no Integrator lane yet.
Initial ADAPT state:
ADAPT/
├── 00_FRAMEWORK/
├── 01_SOURCE_TRUTH/
├── 02_DIRECTOR_LANE/
├── 08_TEMPLATES/
└── 14_MEMORY_BANK/
Initial authority:
Director Lane exists.
Requirements exist.
No workcells exist yet.
No implementation lanes exist yet.
No QA lanes exist yet.
Workcells are created only through the Onboarding Orchestrator.
________________________________________
4. Full Scaffold Structure
ADAPT/
├── 00_FRAMEWORK/
│   ├── ADAPT_FRAMEWORK.md
│   ├── GOVERNANCE_RULES.md
│   ├── ROLE_MODEL.md
│   ├── ARTIFACT_STANDARDS.md
│   └── GLOSSARY.md
│
├── 01_SOURCE_TRUTH/
│   ├── REQUIREMENTS_INDEX.md
│   ├── BUSINESS_ITEMS.md
│   ├── REQUIREMENT_SECTION_MAP.md
│   ├── ACCEPTANCE_CRITERIA.md
│   ├── OPEN_QUESTIONS.md
│   └── SOURCE_TRUTH_VERSION_LOG.md
│
├── 02_DIRECTOR_LANE/
│   ├── DIRECTOR_IDENTITY.md
│   ├── PROJECT_CONTROL_PLANE.md
│   ├── INTAKE_REGISTER.md
│   ├── WORKCELL_REGISTRY.md
│   ├── LANE_ASSIGNMENT_MATRIX.md
│   ├── DEPENDENCY_MAP.md
│   ├── GAP_REGISTER.md
│   ├── BLOCKER_REGISTER.md
│   ├── DECISION_LOG.md
│   ├── ACCEPTED_WORK_REGISTER.md
│   ├── CARRY_OVER_REGISTER.md
│   └── CONSOLIDATION_REPORTS/
│
├── 03_WORKCELLS/
│   ├── INTEGRATOR_<NAME>/
│   ├── BACKEND_<NAME>/
│   ├── BACKEND_<NAME>/
│   ├── FRONTEND_<NAME>/
│   ├── QA_<NAME>/
│   └── QA_<NAME>/
│
├── 04_INTEGRATION/
│   ├── INTEGRATION_CONTRACTS.md
│   ├── API_CONTRACTS.md
│   ├── UI_BE_CONTRACTS.md
│   ├── PIPELINE_STATUS.md
│   ├── MERGE_READINESS.md
│   ├── RELEASE_READINESS.md
│   └── INTEGRATION_GAPS.md
│
├── 05_VALIDATION/
│   ├── QA_STRATEGY.md
│   ├── TEST_CASE_INDEX.md
│   ├── DEFECT_REGISTER.md
│   ├── VALIDATION_EVIDENCE.md
│   ├── REGRESSION_RISK_MAP.md
│   └── SIGNOFF_REGISTER.md
│
├── 06_HANDOFFS/
│   ├── ACTIVE/
│   ├── CONSUMED/
│   └── ARCHIVE/
│
├── 07_GUARDRAILS/
│   ├── SCOPE_GUARDRAIL.md
│   ├── CONTEXT_GUARDRAIL.md
│   ├── EVIDENCE_GUARDRAIL.md
│   ├── CONTRACT_GUARDRAIL.md
│   ├── MUTATION_GUARDRAIL.md
│   ├── QA_INDEPENDENCE_GUARDRAIL.md
│   └── HANDOFF_GUARDRAIL.md
│
├── 08_TEMPLATES/
│   ├── WORKCELL_IDENTITY_TEMPLATE.md
│   ├── SCOPE_CONTRACT_TEMPLATE.md
│   ├── AGENT_TEAM_TEMPLATE.md
│   ├── ROADMAP_TEMPLATE.md
│   ├── HANDOFF_TEMPLATE.md
│   ├── EVIDENCE_REPORT_TEMPLATE.md
│   ├── GAP_TEMPLATE.md
│   ├── BLOCKER_TEMPLATE.md
│   ├── CONTEXT_PACK_TEMPLATE.md
│   ├── CONTEXT_DELTA_TEMPLATE.md
│   └── VALIDATION_REPORT_TEMPLATE.md
│
├── 09_CHALLENGE_LANE/
│   ├── CHALLENGE_IDENTITY.md
│   ├── CHALLENGE_REGISTER.md
│   └── CHALLENGE_REPORT_TEMPLATE.md
│
├── 10_CONTEXT_ECONOMY/
│   ├── CONTEXT_RULES.md
│   ├── CONTEXT_BUDGETS.md
│   ├── CONTEXT_INDEX.md
│   ├── CONTEXT_PACKS/
│   │   ├── ACTIVE/
│   │   └── ARCHIVE/
│   ├── CONTEXT_DELTAS/
│   └── CONTEXT_SUMMARIES/
│
├── 11_ONBOARDING/
│   ├── ONBOARDING_RULES.md
│   ├── ROLE_TO_WORKCELL_MAP.md
│   ├── ONBOARDING_REQUESTS/
│   └── ONBOARDING_REPORTS/
│
├── 12_JANITOR/
│   ├── JANITOR_RULES.md
│   ├── STALE_ARTIFACT_REGISTER.md
│   ├── ARCHIVE_CANDIDATES.md
│   ├── CLEANUP_REPORTS/
│   └── COMPACTION_SUMMARIES/
│
├── 13_PLANNING/
│   ├── PLANNING_RULES.md
│   ├── MILESTONE_REGISTER.md
│   ├── CAPACITY_MODEL.md
│   ├── MILESTONE_PLANS/
│   ├── WORKCELL_ROADMAPS/
│   ├── OVEREXTENSION_RISK_REPORTS/
│   └── DEPENDENCY_SEQUENCES/
│
└── 14_MEMORY_BANK/
    ├── REFERENCES_INDEX.md
    └── NOTES.md
________________________________________
5. Framework Layer
Folder:
ADAPT/00_FRAMEWORK/
Purpose:
The Framework Layer defines the reusable ADAPT rules for the project. It should be stable and changed only when the governance model itself changes.
Required files:
ADAPT_FRAMEWORK.md
GOVERNANCE_RULES.md
ROLE_MODEL.md
ARTIFACT_STANDARDS.md
GLOSSARY.md
Responsibilities:
•	Define what ADAPT is for this project.
•	Define artifact standards.
•	Define role boundaries.
•	Define handoff rules.
•	Define evidence rules.
•	Define guardrail expectations.
•	Define language used across the project.
This layer does not assign work, write code, test features, or certify delivery.
________________________________________
6. Source Truth Layer
Folder:
ADAPT/01_SOURCE_TRUTH/
Purpose:
The Source Truth Layer stores normalized business and project truth.
Required files:
REQUIREMENTS_INDEX.md
BUSINESS_ITEMS.md
REQUIREMENT_SECTION_MAP.md
ACCEPTANCE_CRITERIA.md
OPEN_QUESTIONS.md
SOURCE_TRUTH_VERSION_LOG.md
Responsibilities:
•	Store approved requirements.
•	Break requirements into sections.
•	Record business rules.
•	Record acceptance criteria.
•	Track open questions.
•	Track superseded requirement versions.
•	Prevent old requirements from silently competing with current truth.
Requirement versioning rule:
REQ-001-v2 supersedes REQ-001-v1.
REQ-001-v1 must not be deleted.
REQ-001-v1 must be marked as superseded.
________________________________________
7. Director Lane
Folder:
ADAPT/02_DIRECTOR_LANE/
Purpose:
Director Lane is the no-code project control lane. It controls project movement, intake, assignments, blockers, gaps, onboarding, planning approval, consolidation, and certification.
Director Lane has no code mutation authority.
Allowed Director mutations:
PROJECT_CONTROL_PLANE.md
INTAKE_REGISTER.md
WORKCELL_REGISTRY.md
LANE_ASSIGNMENT_MATRIX.md
DEPENDENCY_MAP.md
GAP_REGISTER.md
BLOCKER_REGISTER.md
DECISION_LOG.md
ACCEPTED_WORK_REGISTER.md
CARRY_OVER_REGISTER.md
CONSOLIDATION_REPORTS/
Forbidden Director mutations:
application source code
backend code
frontend code
test code
pipeline files
deployment files
feature implementation files
Director internal orchestrators:
Intake Orchestrator
Source Truth Orchestrator
Lane Assignment Orchestrator
Dependency Orchestrator
Gap Orchestrator
Certification Orchestrator
Consolidation Orchestrator
Director core workflow:
Receive intake
→ normalize source truth
→ analyze impact
→ assign or reassign work
→ route blockers and gaps
→ approve planning outputs
→ monitor evidence
→ certify accepted truth
→ consolidate cycle
________________________________________
8. Workcell Layer
Folder:
ADAPT/03_WORKCELLS/
Purpose:
Each human team member gets one governed ADAPT Workcell. The Workcell defines the person’s role, scope, internal agents, roadmap, tasks, handoffs, blockers, and evidence obligations.
Default team structure:
INTEGRATOR_<NAME>
BACKEND_<NAME>
BACKEND_<NAME>
FRONTEND_<NAME>
QA_<NAME>
QA_<NAME>
Each workcell should contain:
WORKCELL_IDENTITY.md
SCOPE_CONTRACT.md
AGENT_TEAM.md
ROADMAP.md
TASK_REGISTER.md
EVIDENCE_LOG.md
HANDOFFS.md
BLOCKERS.md
CONTEXT_DELTAS.md
Workcell rule:
A workcell may act deeply inside its assigned scope.
A workcell must stop or hand off when work exceeds its scope.
________________________________________
9. Integrator Workcell
Purpose:
The Integrator Workcell owns cross-lane technical joining, pipeline awareness, merge readiness, contracts, integration gaps, and authorized integration-level fixes.
Integrator does not own all feature logic.
Integrator agents:
Integration Intake Agent
Contract Reconciliation Agent
API / UI Binding Agent
Pipeline / Build Agent
Merge Readiness Agent
Cross-Lane Gap Agent
Integration Evidence Reporter
Integrator responsibilities:
•	Receive handoffs from BE, FE, QA, and Director.
•	Validate integration readiness.
•	Check BE/FE/API contract alignment.
•	Track pipeline/build status.
•	Detect cross-lane mismatches.
•	Route issues back to correct owners.
•	Produce integration evidence.
•	Produce merge readiness reports.
Integrator outputs:
INTEGRATION_EVIDENCE_REPORT.md
CONTRACT_RECONCILIATION_REPORT.md
MERGE_READINESS_REPORT.md
BUILD_FAILURE_ROUTE.md
HANDOFF_TO_QA_OR_DIRECTOR.md
Integrator limitation:
Integrator must not silently rewrite feature logic owned by BE or FE.
Integrator may only mutate integration/config/pipeline/glue work when authorized.
________________________________________
10. Backend Workcell
Purpose:
Backend Workcells own assigned backend delivery scope.
Backend agents:
Backend Requirement Analyst
Backend Domain / Data Agent
API Contract Agent
Backend Architecture Agent
Backend Builder Agent
Backend Dev Validator
Backend Evidence Reporter
Backend responsibilities:
•	Analyze backend obligations from assigned requirements.
•	Identify API, service, data, validation, security, and permission rules.
•	Define or update API contracts.
•	Plan backend implementation.
•	Mutate backend code only inside assigned scope.
•	Run developer-side validation.
•	Produce backend evidence.
•	Handoff to Integrator and/or QA.
Backend outputs:
BACKEND_REQUIREMENT_ANALYSIS.md
BACKEND_DATA_IMPACT.md
API_CONTRACT_UPDATE.md
BACKEND_IMPLEMENTATION_PLAN.md
BACKEND_DEV_VALIDATION_REPORT.md
BACKEND_EVIDENCE_REPORT.md
HANDOFF_TO_INTEGRATOR.md
Backend limitation:
Backend Dev Validator is not QA.
Backend cannot produce QA signoff.
Backend cannot silently change frontend behavior.
________________________________________
11. Frontend Workcell
Purpose:
Frontend Workcell owns assigned frontend behavior, UI flow, components, state, client-side validation, and API consumption.
Frontend agents:
Frontend Requirement Analyst
UI Flow Agent
Component / State Agent
API Consumption Agent
Frontend Builder Agent
Frontend Dev Validator
Frontend Evidence Reporter
Frontend responsibilities:
•	Analyze frontend obligations from assigned requirements.
•	Map user flows.
•	Define screen/component/state behavior.
•	Identify API expectations.
•	Mutate frontend code only inside assigned scope.
•	Perform developer-side validation.
•	Produce frontend evidence.
•	Handoff to Integrator and/or QA.
Frontend outputs:
FRONTEND_REQUIREMENT_ANALYSIS.md
UI_FLOW_MAP.md
FRONTEND_COMPONENT_PLAN.md
STATE_BEHAVIOR_MAP.md
FRONTEND_API_EXPECTATION.md
FRONTEND_DEV_VALIDATION_REPORT.md
FRONTEND_EVIDENCE_REPORT.md
HANDOFF_TO_INTEGRATOR_OR_QA.md
Frontend limitation:
Frontend must not invent backend behavior.
Frontend must route unclear API expectations to Integrator or Backend owner.
Frontend Dev Validator is not QA.
________________________________________
12. QA Workcell
Purpose:
QA Workcells are independent validation lanes. They validate product behavior against accepted source truth.
QA agents:
QA Requirement Analyst
Test Scenario Designer
Regression Mapper
Test Execution Agent
Defect Reproduction Agent
QA Evidence Certifier
QA responsibilities:
•	Read accepted requirements and acceptance criteria.
•	Create test scenarios.
•	Map regression risks.
•	Execute validation.
•	Record pass/fail evidence.
•	Reproduce defects.
•	Produce QA signoff recommendation.
QA outputs:
QA_REQUIREMENT_ANALYSIS.md
TEST_SCENARIO_SET.md
TEST_CASE_REGISTER.md
REGRESSION_RISK_MAP.md
QA_EXECUTION_REPORT.md
DEFECT_REPORT.md
QA_VALIDATION_EVIDENCE.md
QA_SIGNOFF_RECOMMENDATION.md
QA statuses:
QA_PASS
QA_FAIL
QA_BLOCKED
QA_PARTIAL
QA_NOT_TESTABLE
CLARIFICATION_REQUIRED
QA limitation:
QA Workcell must remain independent from developer self-validation.
Developer self-validation cannot be treated as QA signoff.
________________________________________
13. Guardrail Orchestrators
Folder:
ADAPT/07_GUARDRAILS/
Purpose:
Guardrails enforce lane safety without micromanaging the team.
Guardrails:
Scope Guardrail
Context Guardrail
Evidence Guardrail
Contract Guardrail
Mutation Guardrail
QA Independence Guardrail
Handoff Guardrail
Guardrail responsibilities:
Scope Guardrail
- Prevents lane ownership bleed.

Context Guardrail
- Prevents stale, insufficient, or excessive context.

Evidence Guardrail
- Prevents claims without proof.

Contract Guardrail
- Protects BE/FE/API/QA alignment.

Mutation Guardrail
- Prevents unauthorized code or artifact changes.

QA Independence Guardrail
- Prevents dev self-validation from becoming QA signoff.

Handoff Guardrail
- Ensures there is one lawful next movement.
Guardrail outcome types:
PASS
WARNING
GAP_CREATED
BLOCKER_CREATED
ROUTE_TO_OWNER
STOP_REQUIRED
________________________________________
14. Context Economy Layer
Folder:
ADAPT/10_CONTEXT_ECONOMY/
Purpose:
The Context Economy Layer keeps ADAPT sustainable by preventing every agent from reading the whole project.
Rule:
No agent reads the whole project by default.
Each agent receives an atomic Context Pack.
Each agent returns a Context Delta.
Context Steward agents:
State Recovery Agent
Job Sizing Agent
Context Selector Agent
Context Pack Builder
Context Delta Processor
Context flow:
Handoff created
→ Context Steward computes minimum safe context
→ Context Pack is generated
→ Agent consumes only the Context Pack
→ Agent produces output and Context Delta
→ Context Steward updates summaries
Job sizes:
XS - classification/status only
S  - small artifact update
M  - bounded lane task
L  - multi-artifact/multi-lane task
XL - too large; must split
Execution choices:
EXECUTE_NOW
SPLIT_FIRST
BLOCK_AND_REQUEST_CLARIFICATION
ROUTE_TO_OWNER
________________________________________
15. Adaptive / Atomic Handoff Dispatch
The ADAPT Action Prompt should perform Adaptive / Atomic Handoff Dispatch.
Runtime workflow:
Run ACTION_PROMPT
→ recover current state
→ locate active handoff or control plane
→ validate authority
→ estimate job size
→ compute minimum safe context
→ generate or attach Context Pack
→ decide execute/split/block/route
→ run authorized orchestrator or workcell
→ produce evidence
→ produce Context Delta
→ emit next handoff
→ update control plane
→ STOP
Critical rule:
ACTION_PROMPT is not the worker.
ACTION_PROMPT is the dispatcher, context packer, and safety gate.
Every run must stop after one bounded movement.
________________________________________
16. Gap Handling
Gaps are first-class workflow objects.
Definition:
GAP = any missing, conflicting, unproven, invalidated, or ambiguous truth that prevents safe execution or certification.
Gap types:
GAP-T01 Requirement Truth Gap
GAP-T02 Translation Gap
GAP-T03 Ownership Gap
GAP-T04 Dependency Gap
GAP-T05 Depth Gap
GAP-T06 Implementation Gap
GAP-T07 Integration Gap
GAP-T08 Validation Gap
GAP-T09 Runtime Gap
GAP-T10 Decision Gap
GAP-T11 Context Gap
Gap workflow:
Detect gap
→ classify gap
→ assign owner
→ assign severity
→ define closure proof
→ route to correct workcell or orchestrator
→ resolve or escalate
→ evaluator verifies closure
→ Director records decision
Gap final states:
RESOLVED
ACCEPTED_RISK
DEFERRED
DUPLICATE
INVALID
BLOCKER
________________________________________
17. Evaluation Orchestrators
Evaluation is evidence-based.
Evaluation lenses:
Requirement Evaluator
Translation Evaluator
Contract Evaluator
Code Mutation Evaluator
Runtime / Pipeline Evaluator
QA Evaluation Orchestrator
Certification Evaluator
Evidence ladder:
1. Requirement evidence
2. Plan evidence
3. Code/change evidence
4. Contract evidence
5. Build/test evidence
6. Runtime/QA evidence
7. Certification evidence
Rule:
No lane closes on confidence.
A lane closes only on evidence.
Evidence claim states:
PROVEN
UNPROVEN
INCOMPLETE
AMBIGUOUS
CONTRADICTED
________________________________________
18. Challenge Lane / 10th Man
Folder:
ADAPT/09_CHALLENGE_LANE/
Purpose:
The Challenge Lane is optional. It exists to challenge consensus and search for hidden failure modes.
Trigger conditions:
all orchestrators agree too quickly
high-risk implementation
security/auth/data/payment concern
major architecture decision
release candidate
large change with no defects found
Director manually requests challenge
Challenge agents:
Consensus Breaker
Failure Mode Hunter
Evidence Skeptic
Challenge Reporter
Challenge outputs:
CHALLENGE_REPORT.md
POSSIBLE_FAILURE_MODE.md
RECOMMENDED_VERIFICATION.md
Challenge result types:
NO_ACTION
CREATE_GAP
CREATE_BLOCKER
REQUEST_ADDITIONAL_VALIDATION
The Challenge Lane has challenge authority, not execution authority.
________________________________________
19. Onboarding Orchestrator
Folder:
ADAPT/11_ONBOARDING/
Purpose:
The Onboarding Orchestrator creates new workcells from the current project truth and role model.
Example command:
Onboard Brian as Integrator
Onboarding workflow:
Receive onboarding command
→ identify person
→ identify role
→ read current requirements
→ read workcell registry
→ read lane assignment matrix
→ detect unowned or role-relevant work
→ scaffold workcell
→ generate scope contract
→ generate agent team
→ generate roadmap
→ register workcell
→ emit first handoff
Onboarding outputs:
WORKCELL_IDENTITY.md
SCOPE_CONTRACT.md
AGENT_TEAM.md
ROADMAP.md
TASK_REGISTER.md
HANDOFFS.md
EVIDENCE_LOG.md
BLOCKERS.md
ONBOARDING_REPORT.md
Onboarding rule:
Onboarding does not randomly assign work.
Onboarding uses source truth, role, current assignments, dependency map, and planning rules.
________________________________________
20. Planning Orchestrator
Folder:
ADAPT/13_PLANNING/
Purpose:
The Planning Orchestrator takes the next milestone and distributes work into bounded workcell roadmaps.
Planning reads:
accepted source truth
milestone objective
workcell registry
capacity model
lane assignment matrix
dependency map
open blockers
open gaps
carry-over work
Planning workflow:
Receive milestone
→ analyze milestone goal
→ slice work into bounded chunks
→ sequence dependencies
→ map work to workcells
→ check capacity and overextension
→ produce per-workcell roadmaps
→ produce overextension risk report
→ handoff plan to Director for approval
Planning outputs:
MILESTONE_PLAN.md
WORKCELL_ROADMAP_<NAME>.md
DEPENDENCY_SEQUENCE.md
OVEREXTENSION_RISK_REPORT.md
CARRY_OVER_RECOMMENDATION.md
Planning rule:
Planning recommends.
Director approves.
Planning must prevent:
one workcell receiving too much work
QA receiving all validation too late
Integrator receiving all cross-lane issues at the end
frontend being blocked by unscheduled backend work
backend contracts being created without FE/QA visibility
________________________________________
21. Janitor Orchestrator
Folder:
ADAPT/12_JANITOR/
Purpose:
The Janitor Orchestrator keeps ADAPT clean, sustainable, compact, and usable.
Janitor agents:
Stale Artifact Detector
Handoff Archivist
Orphan Task Detector
Summary Compactor
Cleanup Reporter
Janitor responsibilities:
archive consumed handoffs
detect stale context packs
detect superseded requirements
flag orphaned tasks
flag stale blockers
compact summaries
update indexes
recommend cleanup
Janitor limitations:
Janitor does not decide product behavior.
Janitor does not delete truth casually.
Janitor marks, archives, summarizes, and recommends cleanup.
Janitor outputs:
JANITOR_REPORT.md
STALE_ARTIFACT_REGISTER.md
ARCHIVE_CANDIDATES.md
COMPACTION_SUMMARY.md
________________________________________
22. End-of-Cycle Consolidation
Command:
Director consolidate cycle
Purpose:
End-of-cycle consolidation gathers all completed work, evidence, blockers, gaps, validation status, integration status, and carry-over items.
Consolidation workflow:
Director receives consolidate order
→ requests Janitor report
→ requests Integrator merge/pipeline status
→ requests QA validation status
→ requests workcell completion status
→ compares finished work against requirement map
→ records accepted work
→ records carry-over work
→ records open blockers and gaps
→ updates project control plane
→ emits next-cycle planning handoff
Consolidation outputs:
CYCLE_CONSOLIDATION_REPORT.md
ACCEPTED_WORK_REGISTER.md
CARRY_OVER_REGISTER.md
OPEN_GAPS.md
OPEN_BLOCKERS.md
NEXT_CYCLE_HANDOFF.md
________________________________________
23. Memory Bank
Folder:
ADAPT/14_MEMORY_BANK/
Purpose:
The Memory Bank stores references, historical notes, examples, prior framework discussions, and non-authoritative context.
Rule:
Memory Bank is reference only.
Memory Bank is not live authority.
A reference becomes authority only when promoted into Source Truth, Framework, Director Lane, or another governed artifact.
Memory Bank files:
REFERENCES_INDEX.md
NOTES.md
________________________________________
24. Required Initialization Commands
The following commands should be supported by ADAPT:
Initialize ADAPT from requirements
Analyze requirements into source truth
Onboard <Name> as <Role>
Plan milestone <Milestone ID>
Run handoff dispatch
Generate context pack for active handoff
Route gap <Gap ID>
Director consolidate cycle
Run janitor pass
Prepare next cycle
Trigger challenge review
________________________________________
25. Initialization Workflow
Full initialization flow:
1. Create ADAPT folder structure.
2. Place ADAPT framework rules under 00_FRAMEWORK.
3. Place raw/sample business project requirements under 01_SOURCE_TRUTH.
4. Run source truth normalization.
5. Create Director Lane.
6. Director analyzes requirements and creates initial requirement section map.
7. No workcells exist yet.
8. Onboard Integrator.
9. Onboard backend developers.
10. Onboard frontend developer.
11. Onboard QA members.
12. Planning Orchestrator creates milestone roadmap.
13. Director approves roadmap.
14. Context Steward prepares first atomic handoffs.
15. Workcells begin execution.
________________________________________
26. Operating Lifecycle
Full ADAPT lifecycle:
Initialize ADAPT
→ load requirements
→ normalize source truth
→ onboard team members
→ generate workcell roadmaps
→ plan milestone
→ Director approves plan
→ run atomic handoff dispatch
→ Context Steward creates context packs
→ workcells execute scoped work
→ developers self-validate
→ Integrator validates cross-lane readiness
→ QA validates independently
→ gaps/blockers re-enter Director Intake
→ optional Challenge Lane reviews high-risk consensus
→ Director certifies accepted work
→ Director consolidates cycle
→ Janitor archives and compacts
→ Planning prepares next milestone
________________________________________
27. Final Governance Laws
1.	Director Lane does not mutate code.
2.	Workcells execute only inside assigned scope.
3.	Dev self-validation is not QA signoff.
4.	QA Workcells are independent validation lanes.
5.	No handoff should require full-project context unless explicitly justified.
6.	Every handoff must include or reference a Context Pack.
7.	Every execution must produce evidence.
8.	Every execution must produce a Context Delta.
9.	Every run must stop after one bounded movement.
10.	No gap may be ignored.
11.	Planning recommends; Director approves.
12.	Janitor may archive and compact, but must not delete truth casually.
13.	Challenge Lane may disagree, but must provide evidence or a testable failure mode.
14.	Memory Bank is not live authority.
15.	Accepted truth must be versioned and preserved.
________________________________________
28. Scaffold Completion Criteria
The ADAPT scaffold is considered initialized when the following exist:
00_FRAMEWORK/ADAPT_FRAMEWORK.md
00_FRAMEWORK/GOVERNANCE_RULES.md
01_SOURCE_TRUTH/REQUIREMENTS_INDEX.md
02_DIRECTOR_LANE/DIRECTOR_IDENTITY.md
02_DIRECTOR_LANE/PROJECT_CONTROL_PLANE.md
02_DIRECTOR_LANE/INTAKE_REGISTER.md
02_DIRECTOR_LANE/WORKCELL_REGISTRY.md
08_TEMPLATES/WORKCELL_IDENTITY_TEMPLATE.md
08_TEMPLATES/SCOPE_CONTRACT_TEMPLATE.md
08_TEMPLATES/AGENT_TEAM_TEMPLATE.md
08_TEMPLATES/HANDOFF_TEMPLATE.md
10_CONTEXT_ECONOMY/CONTEXT_RULES.md
11_ONBOARDING/ONBOARDING_RULES.md
13_PLANNING/PLANNING_RULES.md
After these exist, ADAPT can accept onboarding commands and begin forming team workcells.
________________________________________
29. First Practical Test
To test the scaffold, use a sample business project and run:
Initialize ADAPT from requirements.
Analyze requirements into source truth.
Onboard Brian as Integrator.
Plan Milestone 01.
Generate Brian's Integrator roadmap.
Run handoff dispatch.
Expected result:
Director Lane exists.
Source truth is normalized.
Integrator Workcell is scaffolded.
Integrator scope is bounded.
Initial roadmap exists.
First handoff exists.
Context Pack exists.
No source code mutation has occurred yet.
This proves the framework can start from requirements, create a lane, and prepare atomic execution without overloading context or mixing responsibilities.

