# Stop Rules

## Universal Stops

Stop immediately if:

* action prompt identity does not match the workcell
* human identity is provided but workcell identity is missing
* one human owns multiple workcells and the requested active workcell is ambiguous
* `ACTION_PROMPT_<ROLE>_<IDENTITY>.md` attempts to execute outside its role
* workflow customization weakens guardrails
* effective workflow cannot be resolved
* protected ADAPT binding is missing, changed, weakened, or contradicted
* source truth authority is missing, stale, or contradicted
* scope contract is missing or the action is out of scope
* active handoff is required but missing, stale, consumed, or targeted elsewhere
* active context pack is required but missing, stale, or targeted elsewhere
* mutation authority or allowed paths are missing
* evidence is bypassed or completion cannot be supported
* an accepted contract would be changed silently
* QA independence is violated
* required approval is missing
* Memory Bank is treated as live authority
* another workcell's action prompt or workflow is targeted for mutation

## Effective Workflow Stops

Before execution, validate the effective workflow against source truth authority, scope, context, evidence, mutation, contract, QA independence, approval, and handoff. Any failed or unresolved check stops execution.

If editable workflow conflicts with protected ADAPT binding, protected binding wins. Create or recommend a workflow customization gap.

## Normal Stop

After one bounded move:

1. produce evidence
2. produce context delta
3. emit next handoff
4. update authorized workcell artifacts
5. stop

Do not continue into the next handoff.

## Status

STOP_RULES_ACTIVE
