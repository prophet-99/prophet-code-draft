---
name: clarification-generator
description: Review a named project specification for clarification gaps without editing it or proposing solutions.
---

# Clarification Generator

Use this skill when the user wants to clarify a specification.

## Workflow

1. Require the user to identify the specification folder name.
2. Locate the target at `specs/<specification-folder-name>/spec.md`.
3. Verify that `AGENTS.md` and `docs/constitution.md` exist. If a prerequisite or the target specification is missing, report the exact missing path and stop.
4. Read `AGENTS.md`, `docs/constitution.md`, and the target `spec.md` before reviewing it.
5. Review the specification using this prompt:

   > Review the specification as a professional QA: ambiguities, contradictions, missing edge cases, and conflicts with the constitution. Detect only; do not solve them.

6. Do not edit, rewrite, plan, or implement the specification.

## Required response format

Report numbered findings only under these four headings, in this order:

1. Ambiguities
2. Requirement contradictions
3. Missing edge cases
4. Constitution conflicts

If a category has no findings, state `None.` under that heading.
