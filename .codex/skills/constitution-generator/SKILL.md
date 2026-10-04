---
name: constitution-generator
description: Propose, create, or edit a project constitution when the user requests short, verifiable project principles.
---

# Constitution Generator

Use this skill when the user asks to propose, create, edit, or extend a project constitution. Do not use it for general documentation that is not a project constitution.

Use this prompt shape, replacing `XX` with the exact number of principles requested by the user:

```text
Propose this project's constitution: XX short and verifiable principles about stack, quality, tests, and limits. Maximum 15 lines. Wait for my approval.
```

Before proposing content, inspect the existing constitution, `AGENTS.md`, project commands, and relevant project configuration. Ground every principle in verified repository facts or explicit user decisions.

- Write the proposed constitution in English.
- Produce exactly the user-requested number of short, numbered, verifiable principles.
- Keep the proposal to 15 lines or fewer. If the requested number cannot fit the limit, ask the user to reduce it or allow a longer document.
- Cover stack integrity, code quality, testing, and change limits across the principles whenever the requested count permits.
- Do not create or edit `docs/constitution.md` while proposing. Wait for explicit user approval.
- After approval, update the existing constitution or create it at `docs/constitution.md`, then follow the project's required validation commands.
