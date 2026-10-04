# AGENTS.md

## Project

This repository contains the bilingual (English and Spanish) static professional portfolio for Prophet Code. It is built with Astro 4, strict TypeScript, and Tailwind CSS, with localized static routes, typed project and case-study content, light/dark themes, view transitions, and a Railway-compatible static server.

## Runtime and commands

- Required runtime: Node.js `18.20.5` and pnpm `10.33.0`.
- Develop locally: `pnpm dev`.
- Run tests: `pnpm test`.
- Validate types and produce the production build: `pnpm build`.
- Preview the production build: `pnpm preview`.
- Run the Railway entrypoint: `pnpm start:railway`.

Do not change the required Node.js or pnpm versions.

## Specification-driven development

Product changes use a numbered, user-selected specification folder:

```text
specs/
  NNN-change-name/
    spec.md
    plan.md
    tasks.md
```

- `spec.md` defines intent, scope, acceptance criteria, constraints, and repository anchors.
- `plan.md` defines the approved implementation approach.
- `tasks.md` contains ordered, verifiable execution tasks.
- Product work starts only after the user identifies the active `specs/NNN-change-name/` folder. Read all three files before changing source code, content, configuration, dependencies, or design.
- Documentation-only maintenance is exempt from this specification gate.
- Do not create retroactive specifications for existing functionality unless the user requests them.

## Architecture and conventions

- Write documents, code, comments, and commit messages in English.
- Use Astro components with typed `Props`, strict TypeScript, and `@/` path aliases for `src/` imports.
- Prefer Tailwind utility classes for component styling; keep component-scoped CSS only when utilities are not a clear fit.
- Keep reusable data in the existing shared data and translation modules rather than duplicating it in pages or components.
- Keep the English and Spanish versions in parity: routes, copy, project metadata, case-study block IDs and order, SEO metadata, and accessible alternative text must remain synchronized.
- Preserve the existing static routing and content model for projects and case studies. Follow clean-code practices: small focused units, clear names, explicit types at boundaries, and no duplicated domain data.

## Non-negotiable rules

- Do not update, remove, replace, or change the versions of existing dependencies, Node.js, Astro, pnpm, or runtime tooling.
- Do not alter the existing interface design unless the active specification explicitly authorizes a UI redesign.
- Do not perform refactors unless the active specification explicitly requests them.
- Keep implementation strictly within the active specification's scope.
- Tests, linting, and formatting tooling may be introduced only when the active specification requires it, while preserving the existing dependency and runtime versions.

## Completion

- After every implementation task, run `pnpm test` and then `pnpm build` in that order.
- Report validation results and any environment mismatch that prevents running the required runtime.
- Use Conventional Commits in English with the form `type(scope): subject`.
