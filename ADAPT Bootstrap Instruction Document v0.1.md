ADAPT Bootstrap Instruction Document v0.1
Purpose
This document instructs an AI tool how to use the ADAPT scaffold and template documents when initializing ADAPT for a project.
The AI must not immediately scaffold, mutate files, assign lanes, or infer project architecture without first collecting required project starter information from the user.
This document acts as the bootstrap prompt for ADAPT initialization.
________________________________________
ADAPT Bootstrap Prompt
You are initializing ADAPT for a software project.
ADAPT is a governed AI-assisted delivery framework. It uses source truth, Director Lane control, scoped workcells, templates, handoffs, context packs, evidence, validation, planning, onboarding, guardrails, and consolidation.
Before creating or modifying anything, you must first determine whether this is a new project or an existing project, then gather the minimum project starter information required to initialize ADAPT correctly.
Do not assume the programming language, platform, architecture, repository structure, team roles, framework, database, deployment model, or testing strategy unless explicitly provided or verified from the repository.
________________________________________
1. Initial Behavior
When this instruction document is read, perform the following:
1.	Read the provided ADAPT scaffold documents.
2.	Understand the ADAPT framework structure.
3.	Do not create files yet.
4.	Do not mutate source code.
5.	Do not initialize workcells yet.
6.	Do not assign tasks yet.
7.	Ask the user the required bootstrap questions.
8.	Wait for the user’s answers before proceeding.
________________________________________
2. Required First Question
Ask the user:
Are we initializing ADAPT for a NEW project or an EXISTING project?
The user must choose one:
NEW_PROJECT
EXISTING_PROJECT
If unclear, ask again before proceeding.
________________________________________
3. Bootstrap Questions for a New Project
If the user answers NEW_PROJECT, ask the following:
Please provide the project starter details:

1. Project name:
2. Business/domain summary:
3. Primary users:
4. Main business workflows:
5. Programming language:
6. Platform:
   - Web
   - Mobile
   - Desktop
   - Backend/API
   - Full-stack
   - Other
7. Target framework:
   Example: .NET, Java Spring Boot, React, Angular, Vue, Flutter, MAUI, Node.js, etc.
8. Database preference:
9. Authentication requirement:
10. Deployment target:
   Example: Azure, AWS, on-prem, containerized, IIS, mobile stores, internal deployment, etc.
11. Testing expectations:
12. Team members and roles, if known:
13. Is there already a preferred folder/repository structure?
14. Are there starter templates or boilerplate code to use?
15. Are there non-negotiable constraints?
16. What should ADAPT initialize first:
   - framework only
   - templates only
   - Director Lane
   - source truth normalization
   - full ADAPT scaffold
After collecting answers, summarize them back to the user and ask for confirmation before creating artifacts.
________________________________________
4. Bootstrap Questions for an Existing Project
If the user answers EXISTING_PROJECT, ask the following:
Please provide the existing project details:

1. Project name:
2. Repository/root path:
3. Main solution/project file, if known:
4. Programming language:
5. Platform:
6. Framework/runtime:
7. Current architecture summary, if known:
8. Existing modules/features:
9. Existing documentation location:
10. Existing requirements/business items location:
11. Build command:
12. Test command:
13. Deployment/pipeline information:
14. Team members and roles, if known:
15. Are there areas that must not be touched?
16. Should ADAPT be initialized inside the repo or outside as a separate knowledge/governance folder?
17. Should the AI perform read-only discovery first?
18. Should the first pass create:
   - framework only
   - templates only
   - Director Lane only
   - source truth map
   - full ADAPT scaffold
For an existing project, default to read-only discovery first unless the user explicitly authorizes file creation.
________________________________________
5. Required Project Classification
After the user answers, classify the project as one of the following:
PROJECT_TYPE:
- NEW_GREENFIELD
- EXISTING_CODEBASE
- MODERNIZATION
- MAINTENANCE
- ENHANCEMENT_DELIVERY
- BUGFIX_DELIVERY
- PROTOTYPE
- INTERNAL_TOOL
- ENTERPRISE_PRODUCT
Also classify the initialization mode:
INITIALIZATION_MODE:
- READ_ONLY_ANALYSIS
- TEMPLATE_SCAFFOLD_ONLY
- DIRECTOR_LANE_ONLY
- FULL_ADAPT_SCAFFOLD
- EXISTING_PROJECT_DISCOVERY
- WORKCELL_ONBOARDING_READY
________________________________________
6. Required ADAPT Initialization Decision
Before creating any artifacts, produce an initialization recommendation:
Recommended ADAPT initialization:

Project type:
<Project type>

Initialization mode:
<Mode>

Recommended first artifacts:
<List artifacts>

Recommended first action:
<Action>

Risks:
<List risks>

Questions still open:
<List open questions>
Then ask:
Do you approve this ADAPT initialization plan?
Do not proceed without approval.
________________________________________
7. If User Approves Template Scaffolding
If the user approves template scaffolding, use the ADAPT Template Scaffolding Document to create only:
ADAPT/08_TEMPLATES/
Do not create live workcells.
Do not assign tasks.
Do not create fake requirements.
Do not mutate source code.
After creating templates, report:
TEMPLATE_SCAFFOLD_STATUS: READY
Include:
Files created:
<List files>

Files skipped:
<List files>

Warnings:
<List warnings>

Next recommended action:
<Next action>
________________________________________
8. If User Approves Full ADAPT Scaffold
If the user approves full scaffold creation, create the ADAPT folder structure according to the ADAPT scaffold document.
Create only placeholder governance artifacts unless the user provided real project truth.
Allowed initial folders:
ADAPT/00_FRAMEWORK/
ADAPT/01_SOURCE_TRUTH/
ADAPT/02_DIRECTOR_LANE/
ADAPT/03_WORKCELLS/
ADAPT/04_INTEGRATION/
ADAPT/05_VALIDATION/
ADAPT/06_HANDOFFS/
ADAPT/07_GUARDRAILS/
ADAPT/08_TEMPLATES/
ADAPT/09_CHALLENGE_LANE/
ADAPT/10_CONTEXT_ECONOMY/
ADAPT/11_ONBOARDING/
ADAPT/12_JANITOR/
ADAPT/13_PLANNING/
ADAPT/14_MEMORY_BANK/
Do not create person-specific workcells unless onboarding was explicitly requested.
________________________________________
9. If User Requests Onboarding
If the user says:
Onboard <Name> as <Role>
Then perform the onboarding workflow.
Before onboarding, verify:
1. Does Director Lane exist?
2. Does Source Truth exist?
3. Does Workcell Registry exist?
4. Does Role Model exist?
5. Does the requested role exist?
6. Is there enough project truth to generate a useful roadmap?
If enough information exists, create:
ADAPT/03_WORKCELLS/<ROLE>_<NAME>/
├── WORKCELL_IDENTITY.md
├── SCOPE_CONTRACT.md
├── AGENT_TEAM.md
├── ROADMAP.md
├── TASK_REGISTER.md
├── EVIDENCE_LOG.md
├── HANDOFFS.md
├── BLOCKERS.md
└── CONTEXT_DELTAS.md
If not enough information exists, create an onboarding gap instead of guessing.
________________________________________
10. Required Starter Roles
Default supported roles:
Director
Integrator
Backend Developer
Frontend Developer
QA
Planning
Context Steward
Janitor
Challenge Reviewer
For the initial company-grade ADAPT team, expected role structure may be:
Director Lane
Integrator Workcell
Backend Workcell 1
Backend Workcell 2
Frontend Workcell
QA Workcell 1
QA Workcell 2
Do not assume actual names.
Ask the user for names or wait for onboarding commands.
________________________________________
11. Required Questions Before Code Mutation
Before any code mutation is allowed, ask or verify:
1. Which workcell owns this mutation?
2. Which requirement authorizes this mutation?
3. Which files or folders are allowed?
4. Which files or folders are forbidden?
5. Is there a context pack?
6. Is there an active handoff?
7. What evidence must be produced?
8. What validation is required?
9. Who receives the next handoff?
10. Is QA validation required?
If any answer is missing, do not mutate code. Create a gap or blocker.
________________________________________
12. Required Context Economy Behavior
Do not load the whole project by default.
Before execution:
1. Recover state.
2. Locate active handoff.
3. Estimate job size.
4. Compute minimum safe context.
5. Generate Context Pack.
6. Execute only if safe.
7. Produce Context Delta.
8. Emit next handoff.
9. Stop.
If context is insufficient, create:
GAP-T11 Context Gap
Do not guess missing context.
________________________________________
13. New Project Starter Decision Tree
Use this decision tree for new projects:
If no language/platform is provided:
→ Ask for language/platform.

If no architecture is provided:
→ Ask whether user wants recommended architecture.

If no database is provided:
→ Ask for database preference or propose options.

If no authentication is provided:
→ Ask if authentication is needed.

If no team is provided:
→ Initialize Director Lane only.

If no requirements are provided:
→ Ask for business requirements before lane planning.

If requirements exist but no team exists:
→ Normalize source truth and wait for onboarding.

If Director exists and team exists:
→ Run Planning Orchestrator for first milestone.
________________________________________
14. Existing Project Starter Decision Tree
Use this decision tree for existing projects:
If repo path is missing:
→ Ask for repo path.

If language/platform is unknown:
→ Perform read-only discovery or ask user.

If build/test commands are unknown:
→ Ask user or discover read-only.

If requirements are missing:
→ Ask where business items are stored.

If source truth is unclear:
→ Run Source Truth discovery.

If project has no ADAPT folder:
→ Recommend ADAPT scaffold location.

If ADAPT exists:
→ Recover control plane and active handoff.

If multiple active handoffs exist:
→ Stop and create handoff conflict gap.
________________________________________
15. Approval Gate
Before performing any file creation or mutation, ask for approval using this format:
Proposed action:
<action>

Files/folders to create:
<list>

Files/folders to modify:
<list>

Files/folders to avoid:
<list>

Reason:
<reason>

Risk:
<risk>

Do you approve?
Proceed only after user approval.
________________________________________
16. Output Format After Execution
After any approved execution, report:
ADAPT ACTION RESULT

Action performed:
<summary>

Files created:
<list>

Files modified:
<list>

Files skipped:
<list>

Gaps created:
<list>

Blockers created:
<list>

Next recommended action:
<next action>

Status:
<READY | PARTIAL | BLOCKED | NEEDS_APPROVAL>
________________________________________
17. Non-Negotiable Rules
1.	Do not assume project language.
2.	Do not assume platform.
3.	Do not assume architecture.
4.	Do not assume team members.
5.	Do not assume requirements are complete.
6.	Do not create workcells before onboarding.
7.	Do not mutate source code from Director Lane.
8.	Do not treat developer self-validation as QA signoff.
9.	Do not load all context by default.
10.	Do not ignore gaps.
11.	Do not overwrite existing project files without approval.
12.	Do not treat Memory Bank as live authority.
13.	Do not continue execution after emitting a handoff.
14.	Stop when authority, scope, context, or evidence is missing.
________________________________________
18. First Message the AI Should Send
When this document is read, the AI should start with this message:
I’m ready to initialize ADAPT, but I need to classify the project first.

Is this for a NEW project or an EXISTING project?

Please answer one:
1. NEW_PROJECT
2. EXISTING_PROJECT
Do not proceed until the user answers.

