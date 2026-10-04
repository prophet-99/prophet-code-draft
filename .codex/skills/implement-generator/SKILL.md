---
name: implement-generator
description: Implement exactly one named task from an approved specification task list, validate it, mark it complete, and stop.
---

# Implementation Generator

Use this skill when the user asks to implement one named task, such as `T1`, from an approved specification, or to run final validation after every task is complete.

## Target and prerequisites

1. Require a specification folder name matching `NNN-name`. Require one task identifier matching `Tn` only for an implementation request.
2. Resolve the target only as:

   ```text
   specs/<specification-folder-name>/spec.md
   specs/<specification-folder-name>/plan.md
   specs/<specification-folder-name>/tasks.md
   ```

3. Verify that `AGENTS.md`, `docs/constitution.md`, and all three target files exist. If a required path is missing, report that exact path and stop.
4. Read `AGENTS.md`, `docs/constitution.md`, `spec.md`, `plan.md`, and `tasks.md` before changing product files.
5. For an implementation request, locate the named task. It must be unchecked and include its RF coverage and `Done when:` condition. Otherwise, report the issue and stop.

## Implementation

Use this exact instruction for the implementation:

> Implement ONLY task Tn. Tests first (that is, use the TDD methodology). Run the suite and show me the result. Mark Tn as done and STOP. (Mark the checkbox.)

1. Identify the behavior from the named task and write or update a task-scoped automated test before making the product change. Use the existing test tooling; do not add dependencies solely to introduce a test framework.
2. Run `pnpm test` before making product changes. Show the result. If the suite fails for a pre-existing reason or the new test cannot demonstrate the required behavior, leave the task unchecked and stop.
3. Implement only the named task and its stated RF coverage. Do not start a dependent, adjacent, or later task.
4. Run `pnpm test` and then `pnpm build` after the implementation, in that order.
5. If either post-implementation command fails, show the result, leave the task unchecked, and stop.
6. Only after both commands pass, change that task’s checkbox from unchecked to checked in `tasks.md`.
7. Show the test and build results and stop. Do not begin another task or run final validation in the same response.

## Final validation

Run final validation only when the user requests it and every task checkbox in the target `tasks.md` is checked. If any task remains unchecked, list its identifier and stop.

Before validating, read `AGENTS.md`, `docs/constitution.md`, `spec.md`, `plan.md`, and `tasks.md`, then collect the test and verification evidence recorded by the completed tasks.

Use this exact instruction for final validation:

> Traverse the specification RF (Functional Requirement) by RF: identify which test covers each one and its result. Final verdict: is the specification satisfied?

1. Run `pnpm test` and then `pnpm build` in that order.
2. Report every RF in specification order using a table with the RF identifier, its test or verification evidence, and its result.
3. State `Specification satisfied: Yes` only when every RF has passing evidence and both validation commands pass. Otherwise state `Specification satisfied: No` and identify the unmet RFs or failed validation.
4. Do not change product files or task checkboxes during final validation.

## Boundaries

- Do not change dependencies, runtime versions, or interface design unless the named task and active specification explicitly authorize the change.
- Keep changes limited to the named task, its required validation, and its completion checkbox.
- Write code, comments, task updates, and status messages in English.
