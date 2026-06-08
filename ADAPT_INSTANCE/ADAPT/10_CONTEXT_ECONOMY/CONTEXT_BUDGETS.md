# Context Budgets

| Size | Intended Scope | Default Decision |
|---|---|---|
| XS | One command or one small status/artifact update | EXECUTE_NOW |
| S | One requirement, scope contract, and template | EXECUTE_NOW |
| M | Bounded lane task with relevant decisions, contract, and handoff | EXECUTE_NOW if authorized |
| L | Multi-artifact or multi-lane review | SPLIT_FIRST or Director-aware execution |
| XL | Full audit, release review, or major replan | SPLIT_FIRST or require approval |

STATUS: ACTIVE
