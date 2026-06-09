# Decision Log

## Status
ACTIVE

## Decisions
| Decision ID | Date | Decision | Authority | Status | Notes |
|---|---|---|---|---|---|
| DEC-001 | 2026-06-09 | Initialize ADAPT in `FULL_ADAPT_DOCUMENT_SCAFFOLD` mode. | START_HERE.md | ACCEPTED | Generate governance/scaffold documents and templates only. |
| DEC-002 | 2026-06-09 | Promote `Paggawa.docx` as `SOURCE_TRUTH_V0.1`. | START_HERE.md | ACCEPTED | Business source truth is active. |
| DEC-003 | 2026-06-09 | Do not generate source code, architecture, database schema, or implementation files because technology stack is unknown. | START_HERE.md | ACCEPTED | Enforced by guardrails. |
| DEC-004 | 2026-06-09 | Do not onboard real team members or assign real implementation tasks yet. | START_HERE.md | ACCEPTED | Workcell registry remains empty. |
| DEC-005 | 2026-06-09 | Onboard Brian as Integrator, Backend Developer, Frontend Developer, and QA. | User command | ACCEPTED | Creates four role-specific Brian workcells. |
| DEC-006 | 2026-06-09 | Treat QA_BRIAN as QA planning/validation workcell with independence constraint. | QA Independence Guardrail | ACCEPTED | QA_BRIAN cannot independently sign off Brian-authored work without separate review or Director-approved independence handling. |

## Pending Decisions
| Pending ID | Topic | Needed Decision |
|---|---|---|
| PDEC-001 | Technology stack | Programming language, platform, framework, storage, auth, deployment. |
| PDEC-002 | First milestone | Define milestone objective and scope. |
| PDEC-003 | Team onboarding | Identify human owners and roles. |
| PDEC-004 | Privacy field policy | Define exact pre-match and post-match data visibility. |
| PDEC-005 | Barangay notes | Define visibility, retention, and sensitivity policy. |
| PDEC-006 | QA independence | Decide whether to onboard a separate QA reviewer or allow prototype-only non-independent validation by QA_BRIAN. |

## Rule
Only approved decisions are authority.
