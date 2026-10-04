---
name: agents-generator
description: Create or update a project AGENTS.md file when the user asks to create an agent guide or agent instructions.
---

# Agents Generator

Use this skill when the user asks to create or update an `AGENTS.md` file for a project. Do not use it for ordinary code changes or for creating AI agents that are not project instruction files.

Before drafting the file, inspect the repository to ground the project description, commands, languages, conventions, and existing constraints in facts. Ask only for decisions that cannot be discovered from the repository, such as limits or required workflow rules.

Create or update `AGENTS.md` from [agents-template.md](agents-template.md). Replace every placeholder with project-specific information; do not leave placeholder text in the final file. Preserve the section order unless the user explicitly requests a different structure.

Write the completed `AGENTS.md` in English. Do not invent commands, policy files, or workflow requirements: either verify them in the repository or obtain them from the user.
