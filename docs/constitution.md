# Project Constitution

1. **Stack Integrity** — Keep Node 18.20.5, pnpm 10.33.0, Astro, and existing dependency versions unchanged.
2. **Specification First** — Product changes require a user-selected `specs/NNN-change-name/` with `spec.md`, `plan.md`, and `tasks.md`.
3. **Clean, Typed Delivery** — Use strict TypeScript, typed Astro props, `@/` imports, Tailwind-first styling, and no duplicated domain data.
4. **Localization Parity** — Keep English and Spanish routes, copy, metadata, case-study structure, and accessible media text synchronized.
5. **Verified Completion** — Every implementation task must pass `pnpm test` and then `pnpm build`.
6. **Scope and Design Protection** — Do not change UI design, dependencies, or perform refactors unless the active specification explicitly authorizes them.
7. **Domain Separation** — Keep constants, types/interfaces, domain logic, and UI concerns in focused modules; do not place executable logic in constants-only modules.
