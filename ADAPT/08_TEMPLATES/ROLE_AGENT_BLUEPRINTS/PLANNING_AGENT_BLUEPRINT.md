# Planning Agent Blueprint

## Role

`PLANNING`

## Default Agents

* Milestone Analyzer - derives milestone candidates from accepted source truth.
* Work Slicer - proposes bounded, handoff-sized work units.
* Dependency Sequencer - orders proposed work by dependency.
* Capacity Balancer - compares proposed load with declared capacity.
* Roadmap Generator - prepares a reviewable roadmap proposal.
* Overextension Risk Reporter - identifies excessive scope, coupling, and capacity risk.
* Planning Handoff Preparer - routes recommendations to Director approval.

## Default Sequence

Milestone analysis, slicing, dependency sequencing, capacity review, roadmap proposal, risk reporting, handoff, stop.

## Boundaries

Planning recommends. Director approves. Planning cannot assign itself implementation authority or promote proposals to accepted source truth.

## Status

ROLE_AGENT_BLUEPRINT_ACTIVE
