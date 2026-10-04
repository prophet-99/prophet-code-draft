---
name: spec-generator
description: Create, draft, edit, or review feature specifications when the user requests a project spec.
---

# Spec Generator

Turn a vague feature idea into an agreed specification. The specification is the contract: work not described in it is out of scope.

## Prerequisites

Before any create, draft, edit, or review workflow, verify that both `AGENTS.md` and `docs/constitution.md` exist. If either is missing, stop and report the missing file; do not start an interview, select a spec number, or write a spec.

When the prerequisites exist, read them, the relevant content under `specs/`, and [spec-template.md](spec-template.md). Follow project constraints and avoid contradicting existing approved specifications.

## Create or draft a specification

1. Interview the user one question at a time, with at most six questions total. Ask only questions whose answers change the requested behavior, error handling, edge cases, or out-of-scope boundaries. Wait for each answer before asking the next question.
2. Keep the discussion on **what** and **why**. Do not propose technical solutions. If asked how to implement it, redirect the conversation to desired behavior.
3. Inspect `specs/` directory names matching `NNN-*`. Use the next number after the highest existing three-digit prefix, or `001` when none exists. Create the destination as `specs/NNN-feature-name/spec.md`, where `feature-name` is kebab-case.
4. Use `spec-template.md` without omitting sections. Render the generated specification in English, preserving its section order: Context and objective, Users/actors, User stories, Functional requirements, Non-functional requirements, Edge cases, Out of scope, Completion criteria, and Open questions.
5. Write every functional requirement as one numbered EARS sentence (`RF-1`, `RF-2`, and so on). Each requirement must describe one behavior and be objectively verifiable. Follow the required pattern guidance in [EARS Notation](#ears-notation).
6. Mark unknown information as `[NEEDS CLARIFICATION: precise question]`. Never silently invent a missing decision.
7. After drafting the specification, request explicit approval. Do not create a plan or write implementation code until approval is received.

Do not include stack choices, architecture, file names, data schemas, algorithms, or function signatures in a specification.

## EARS Notation

Use exactly one pattern for each requirement; do not mix patterns.

| Pattern | Form | Use when |
| --- | --- | --- |
| Ubiquitous | `THE SYSTEM SHALL <action>` | The behavior is always true. |
| Event-driven | `WHEN <trigger>, THE SYSTEM SHALL <action>` | The system responds to an event. |
| State-driven | `WHILE <state>, THE SYSTEM SHALL <action>` | The behavior applies during a condition. |
| Optional feature | `WHERE <feature>, THE SYSTEM SHALL <action>` | The behavior applies only when a feature is present. |
| Unwanted behavior | `IF <condition>, THEN THE SYSTEM SHALL <action>` | The system handles an error or edge case. |

Good example:

> RF-4: IF a name already exists (comparison ignores case and surrounding whitespace), THEN THE SYSTEM SHALL not create a duplicate and SHALL report the conflict with exit status 1.

Bad example:

> ~~RF-4: The system shall handle duplicates well and be fast.~~

This is invalid because it uses no EARS pattern, is not objectively verifiable, combines multiple behaviors, and includes an unmeasurable adjective.

## Edit or review an existing specification

- For an edit, require the user to identify the target specification. Preserve the template structure, update only the requested content, and revalidate the EARS requirements and Out of scope section. Do not proceed to planning or code without explicit approval.
- For a review, do not rewrite the specification and do not propose solutions. Report numbered findings in exactly four groups: ambiguities, contradictions between requirements, uncovered edge cases, and conflicts with the constitution.

## Quality rules

- Always include Out of scope.
- Do not combine behaviors in one requirement; split requirements that contain multiple independently verifiable behaviors.
- Do not use unmeasurable adjectives such as “fast”, “intuitive”, or “robust” without a concrete threshold.
