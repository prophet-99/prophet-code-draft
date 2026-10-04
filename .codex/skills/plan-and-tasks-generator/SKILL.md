---
name: plan-and-tasks-generator
description: Generate an implementation plan or approved-plan tasks for a named specification without writing product code.
---

# Plan and Tasks Generator

Use this skill when the user asks to generate `plan.md` or `tasks.md` for a named specification folder.

## Boundaries

- This skill may create or update only `plan.md` and `tasks.md`.
- This skill must never create, edit, or execute product code, configuration, dependencies, or design changes.
- Write generated plans and tasks in English.

## Target and prerequisites

1. Require a specification folder name matching `NNN-name`.
2. Resolve the target only as:

   ```text
   specs/<specification-folder-name>/spec.md
   specs/<specification-folder-name>/plan.md
   specs/<specification-folder-name>/tasks.md
   ```

3. Verify that `AGENTS.md`, `docs/constitution.md`, and the target `spec.md` exist. If any required path is missing, report that exact path and stop.
4. Read `AGENTS.md`, `docs/constitution.md`, and the target `spec.md` before generating either document. Read every supporting document explicitly referenced by the specification.

## Generate a plan

When the user requests a plan, create or update only the target `plan.md`. Do not create `tasks.md` and do not perform implementation.

Use this exact instruction for the plan:

> Read the constitution and specification. Without writing code, generate `plan.md` with modules, a data model, justified decisions including the rejected alternative, and a testing strategy. State which RF each part covers.

The plan must include:

- Modules and their responsibilities, with the RFs covered by each module.
- The required data-model changes, or an explicit statement that no data-model change is required.
- Decisions with their rationale and the rejected alternative.
- A testing strategy that traces verification to the relevant RFs.
- Project constraints that affect the implementation approach.

After writing `plan.md`, request explicit user approval and stop. Do not generate tasks until the user explicitly approves that plan.

## Generate tasks

Generate tasks only when all of the following are true:

- The user identifies the specification folder.
- The target `plan.md` exists and has been read.
- The user explicitly approves the plan.

Once those conditions are true, create or update the target `tasks.md` directly. Do not ask for another confirmation and do not perform implementation.

Use this exact instruction for the tasks:

> Break the plan into tasks of under 30 minutes, ordered by dependency, each with its RFs and a verifiable `Done when:` line. Use checkboxes.

Every task must:

- Use a Markdown checkbox.
- Begin with a stable sequential identifier in the form `T1`, `T2`, and so on.
- Be ordered after its dependencies.
- Be estimated at less than 30 minutes.
- Identify the RFs it covers.
- Include one verifiable `Done when:` line.

Include the project-required validation tasks in this order: `pnpm test`, followed by `pnpm build`.
