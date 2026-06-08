You are scaffolding the ADAPT Commands and Drivers layer.
This is not a dry run.
Your task is to generate the operating command documents and action prompt drivers for an ADAPT project.
Do not generate application source code.
Do not mutate application source code.
Do not create real workcells unless explicitly instructed.
Do not assign real implementation tasks.
Do not invent final technical stack decisions.
Do not treat Memory Bank as live authority.
Generate only ADAPT operating/manual/prompt documents.
Target folder:
ADAPT/15_COMMANDS_AND_DRIVERS/
Create the following documents:
1.	COMMAND_REGISTRY.md
2.	COMMAND_SYNTAX.md
3.	COMMAND_ROUTING_MATRIX.md
4.	CONTROL_PLANE_SCHEMA.md
5.	ACTION_PROMPT_MASTER.md
6.	ACTION_PROMPT_DIRECTOR.md
7.	ACTION_PROMPT_CONTEXT_STEWARD.md
8.	ACTION_PROMPT_ONBOARDING.md
9.	ACTION_PROMPT_PLANNING.md
10.	ACTION_PROMPT_WORKCELL.md
11.	ACTION_PROMPT_INTEGRATOR.md
12.	ACTION_PROMPT_QA.md
13.	ACTION_PROMPT_JANITOR.md
14.	ACTION_PROMPT_CHALLENGE.md
15.	MUTATION_PERMISSION_MATRIX.md
16.	HUMAN_APPROVAL_GATES.md
17.	STOP_RULES.md
18.	CONTEXT_BUDGET_POLICY.md
19.	EVIDENCE_STANDARD_BY_ROLE.md
20.	MINIMAL_VIABLE_ADAPT_MODE.md
Output format:
For each generated file, print:
=== FILE: ADAPT/15_COMMANDS_AND_DRIVERS/ ===
At the end, print:
ADAPT COMMANDS AND DRIVERS GENERATION RESULT
Include:
•	files generated
•	files intentionally skipped
•	assumptions made
•	unresolved questions
•	recommended next action
Core ADAPT operating rule:
Every ADAPT run must follow Adaptive / Atomic Handoff Dispatch:
1.	Recover current state.
2.	Locate active handoff or control plane.
3.	Validate authority.
4.	Estimate job size.
5.	Compute minimum safe context.
6.	Generate or attach Context Pack.
7.	Decide whether to execute, split, block, or route.
8.	Execute only if authorized and atomic.
9.	Produce evidence.
10.	Produce Context Delta.
11.	Emit next handoff.
12.	Update control plane.
13.	Stop.
Do not continue after emitting the next handoff.
Document requirements:
1. COMMAND_REGISTRY.md
Create a registry of supported ADAPT commands.
Must include these commands:
•	Initialize ADAPT from requirements
•	Promote document as source truth
•	Analyze requirements into source truth
•	Run Director intake
•	Onboard as
•	Plan milestone
•	Approve milestone plan
•	Generate roadmap for
•	Generate context pack for active handoff
•	Run atomic handoff dispatch
•	Route gap
•	Resolve blocker
•	Run integration review
•	Run QA validation
•	Trigger challenge review
•	Run janitor pass
•	Director consolidate cycle
•	Prepare next cycle
For each command, define:
•	command name
•	purpose
•	required authority
•	required inputs
•	allowed outputs
•	target orchestrator
•	mutation allowed or not
•	approval required or not
•	stop conditions
2. COMMAND_SYNTAX.md
Define command syntax.
Include examples:
Initialize ADAPT from requirements
Promote Paggawa.docx as SOURCE_TRUTH_V0.1
Onboard Brian as Integrator
Onboard Ana as Backend Developer
Plan milestone M01
Generate context pack for active handoff
Run atomic handoff dispatch
Director consolidate cycle
Run janitor pass
Trigger challenge review for M01 release candidate
Also define invalid command examples and why they are invalid.
3. COMMAND_ROUTING_MATRIX.md
Create a routing matrix showing which command goes to which orchestrator.
Use this format:
Command	Primary Orchestrator	Secondary Orchestrator	Requires Approval	Can Mutate Code
Orchestrators:
•	Director Lane
•	Source Truth Orchestrator
•	Planning Orchestrator
•	Onboarding Orchestrator
•	Context Steward
•	Workcell Orchestrator
•	Integrator Orchestrator
•	QA Orchestrator
•	Janitor Orchestrator
•	Challenge Lane
•	Guardrail Orchestrators
4. CONTROL_PLANE_SCHEMA.md
Define exact schema for:
ADAPT/02_DIRECTOR_LANE/PROJECT_CONTROL_PLANE.md
Must include:
•	ProjectName
•	ProjectType
•	InitializationMode
•	SourceTruthVersion
•	ActiveMilestone
•	ActiveCycle
•	ActiveHandoff
•	CurrentAuthority
•	ExecutionReadiness
•	CurrentPhase
•	ActiveWorkcell
•	Blocked
•	ActiveBlockers
•	ActiveGaps
•	LastAction
•	LastContextDelta
•	NextExpectedAction
•	LastConsolidatedAt
•	Notes
Also define allowed values for:
ExecutionReadiness:
•	READY
•	NOT_READY
•	BLOCKED
•	NEEDS_CONTEXT
•	NEEDS_APPROVAL
•	NEEDS_PLANNING
•	NEEDS_ONBOARDING
CurrentPhase:
•	INITIALIZED
•	SOURCE_TRUTH_LOADING
•	SOURCE_TRUTH_READY
•	ONBOARDING
•	PLANNING
•	EXECUTION
•	INTEGRATION
•	QA_VALIDATION
•	CHALLENGE_REVIEW
•	CONSOLIDATION
•	JANITOR_PASS
•	READY_FOR_NEXT_CYCLE
•	BLOCKED
5. ACTION_PROMPT_MASTER.md
Create the master action prompt.
It must instruct the AI:
You are running ADAPT Atomic Handoff Dispatch.
You must:
•	read control plane first
•	locate active handoff
•	validate authority
•	run guardrail checks
•	estimate job size
•	ask Context Steward to compute context if needed
•	execute only one bounded move
•	produce evidence
•	produce context delta
•	emit next handoff
•	update control plane
•	stop
It must forbid:
•	broad uncontrolled execution
•	source code mutation without workcell authority
•	Director code mutation
•	assuming missing source truth
•	using Memory Bank as live authority
•	treating dev self-validation as QA signoff
•	continuing after next handoff
6. ACTION_PROMPT_DIRECTOR.md
Create Director Lane action prompt.
Director can:
•	intake
•	classify requirements
•	promote source truth with approval
•	assign lanes
•	route blockers
•	route gaps
•	approve planning outputs
•	certify accepted work
•	consolidate cycle
Director cannot:
•	mutate source code
•	modify implementation files
•	produce QA signoff
•	bypass evidence
•	bypass Integrator or QA when required
7. ACTION_PROMPT_CONTEXT_STEWARD.md
Create Context Steward action prompt.
Context Steward must:
•	recover state
•	inspect active handoff
•	estimate job size
•	select minimum safe context
•	generate context pack
•	avoid stale/superseded context
•	declare context gaps
•	process context deltas
It must not:
•	execute implementation
•	validate product correctness
•	decide product scope
•	mutate source code
8. ACTION_PROMPT_ONBOARDING.md
Create Onboarding action prompt.
It must support:
Onboard as
It must:
•	verify Director Lane exists
•	verify source truth exists
•	verify role is supported
•	scaffold workcell
•	create identity, scope contract, agent team, roadmap, task register, evidence log, blockers, handoffs
•	update workcell registry
•	emit first handoff
It must not:
•	assign excessive work
•	create implementation tasks without source truth
•	invent team members
•	mutate application code
9. ACTION_PROMPT_PLANNING.md
Create Planning action prompt.
It must:
•	read milestone objective
•	read source truth
•	read workcell registry
•	read capacity model
•	read dependency map
•	read blockers and gaps
•	slice milestone into workcell roadmaps
•	detect overextension
•	sequence dependencies
•	recommend plan to Director
It must not:
•	approve its own plan
•	mutate code
•	over-assign work
•	dump QA/integration work at end of cycle
10. ACTION_PROMPT_WORKCELL.md
Create generic Workcell action prompt.
It must:
•	read assigned handoff
•	read context pack only
•	verify scope contract
•	execute assigned task only
•	produce evidence
•	produce context delta
•	emit handoff
•	stop
It must include workcell modes:
•	Backend Workcell
•	Frontend Workcell
•	Integrator Workcell
•	QA Workcell
It must distinguish:
•	developer self-validation
•	independent QA validation
11. ACTION_PROMPT_INTEGRATOR.md
Create Integrator prompt.
Integrator must:
•	reconcile contracts
•	check BE/FE alignment
•	check API/UI binding
•	check pipeline status
•	detect cross-lane gaps
•	prepare merge readiness
•	route back to owner if mismatch exists
Integrator must not:
•	silently rewrite feature logic
•	become QA signoff
•	become Director approval
•	absorb all unowned work without gap classification
12. ACTION_PROMPT_QA.md
Create QA prompt.
QA must:
•	read accepted requirements
•	derive test cases
•	validate behavior
•	record evidence
•	create defects
•	produce signoff recommendation
QA must not:
•	mutate application code
•	rely only on developer evidence
•	treat dev self-validation as QA validation
•	validate without acceptance criteria
13. ACTION_PROMPT_JANITOR.md
Create Janitor prompt.
Janitor must:
•	detect stale artifacts
•	identify archive candidates
•	archive consumed handoffs when allowed
•	detect stale context packs
•	detect orphaned tasks
•	compact summaries
•	produce janitor report
Janitor must not:
•	delete source truth casually
•	decide product behavior
•	close blockers without proof
•	change source code
14. ACTION_PROMPT_CHALLENGE.md
Create Challenge / 10th Man prompt.
Challenge Lane must:
•	challenge consensus
•	identify hidden failure modes
•	inspect evidence quality
•	recommend verification
•	create challenge report
It must not:
•	execute implementation
•	block by opinion only
•	disagree without evidence or testable failure mode
15. MUTATION_PERMISSION_MATRIX.md
Create permission matrix.
Roles:
•	Director Lane
•	Integrator Workcell
•	Backend Workcell
•	Frontend Workcell
•	QA Workcell
•	Planning Orchestrator
•	Context Steward
•	Janitor
•	Challenge Lane
Columns:
•	Can mutate ADAPT control artifacts?
•	Can mutate source truth?
•	Can mutate source code?
•	Can mutate tests?
•	Can mutate pipeline/config?
•	Can create gaps?
•	Can create blockers?
•	Can certify acceptance?
•	Can produce QA signoff?
16. HUMAN_APPROVAL_GATES.md
Define when human approval is required.
Required approval gates:
•	promote source truth
•	create full ADAPT scaffold
•	onboard workcell
•	approve milestone plan
•	approve code mutation scope
•	accept risk
•	close blocker
•	certify release
•	archive major source truth
•	override guardrail
•	run XL context job
17. STOP_RULES.md
Define universal stop rules.
Stop if:
•	no active authority
•	multiple active handoffs
•	source truth missing
•	context pack missing or insufficient
•	work exceeds scope
•	mutation authority missing
•	Director is asked to mutate code
•	QA validation is requested without acceptance criteria
•	implementation task has no owner
•	output evidence cannot be produced
•	conflict exists between requirement and implementation
•	guardrail returns STOP_REQUIRED
18. CONTEXT_BUDGET_POLICY.md
Define context sizes:
XS:
•	one command
•	one small artifact
•	no cross-lane context
S:
•	one requirement
•	one scope contract
•	one template
M:
•	requirement
•	scope contract
•	relevant decisions
•	one contract
•	active handoff
L:
•	multi-lane context
•	integration/QA involved
•	Director awareness required
XL:
•	full lane audit
•	release review
•	major replan
•	requires Director/human approval or splitting
19. EVIDENCE_STANDARD_BY_ROLE.md
Define required evidence by role.
Director:
•	decision log
•	assignment updates
•	control plane update
•	certification report
Backend:
•	requirement analysis
•	implementation evidence
•	API contract update if applicable
•	dev validation report
•	handoff
Frontend:
•	UI flow evidence
•	API expectation evidence
•	implementation evidence
•	dev validation report
•	handoff
Integrator:
•	contract reconciliation
•	integration report
•	pipeline/build status
•	merge readiness
QA:
•	test cases
•	execution evidence
•	defect reports
•	QA signoff recommendation
Context Steward:
•	context pack
•	context delta processing notes
Janitor:
•	janitor report
•	archive candidates
•	compaction summary
Challenge:
•	challenge report
•	failure mode
•	recommended verification
20. MINIMAL_VIABLE_ADAPT_MODE.md
Define ADAPT Lite mode.
ADAPT Lite should include only:
•	Framework
•	Source Truth
•	Director Lane
•	Templates
•	Context Economy
•	Onboarding
Optional modules added later:
•	Planning
•	Full Guardrails
•	Integrator
•	QA
•	Janitor
•	Challenge Lane
Explain when to use ADAPT Lite vs Full ADAPT.
End of generation.

