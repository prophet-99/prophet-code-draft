# Plan 001 — Drowsiness Case Study

## Objective and constraints

Deliver the approved bilingual Drowsiness Detection case study and restore the supplied Showcase image on every public project card. Keep the existing Astro, TypeScript, Tailwind, routing, and case-study presentation model. Do not redesign the interface, change dependencies or runtime versions, expand the CIMA Classroom or JMP Aquaculture narratives, or introduce product functionality outside this specification.

## Modules and RF coverage

### 1. Project catalog and external resources

Update the project catalog so the Drowsiness, CIMA Classroom, and JMP Aquaculture home-page cards use their supplied Showcase paths. Update the Drowsiness project resource data with its three supplied repository destinations and its thesis reference.

- RF coverage: RF-1, RF-2, RF-19, RF-20, RF-21, RF-22.
- Responsibility: keep project-level media paths and public resource links as shared typed data consumed by both the home page and case-study page.

### 2. Typed case-study media model and rendering

Extend the case-study content domain with a typed video block and validate its required source and localized accessible text. Render videos with native controls, metadata-only preloading, an accessible name, and a visible localized caption. Reuse the established full-width media-card styling so media is added without redesigning the case-study layout.

- RF coverage: RF-8, RF-9, RF-10, RF-17, RF-18; non-functional accessible-media and visual-design requirements.
- Responsibility: make supplied MP4 files first-class content blocks while retaining the existing image, GIF, gallery, text, list, diagram, and callout behavior.

### 3. Drowsiness bilingual narrative

Replace the current three generic Drowsiness sections with matching English and Spanish blocks in the approved narrative order: thesis and road-safety context, VIDDS objective, EAR foundation and citation, FaceMesh tracking, components, assembled prototype, incident flow, monitoring details, field validation, field-test video, frontend-tracker video, and engineering-quality practices.

Use the supplied Drowsiness assets only in their approved contexts: Showcase in the existing page hero; FaceMesh GIF in facial tracking; component and prototype images in the physical-system explanation; VIDDS demonstration video in field validation; and frontend-tracker video near the conclusion. Present the EAR formula as readable Unicode mathematical text and credit Soukupová and Čech (2016). State the configured detection condition as a project-specific prototype rule, not a universal or clinical diagnosis.

- RF coverage: RF-3 through RF-18 and RF-23; all bilingual narrative, formula-legibility, and localized-media-text requirements.
- Responsibility: preserve identical block IDs and order across locales while supplying language-appropriate copy, captions, and alternative text.

### 4. Case-study resource presentation and localized metadata

Render the Drowsiness thesis as an academic reference separate from the repository list, then add localized labels for that reference area. Refresh the Drowsiness localized project description and case-study metadata only where needed to reflect the thesis and VIDDS narrative without altering the CIMA or JMP narratives.

- RF coverage: RF-19, RF-20, RF-21, RF-22; non-functional English/Spanish metadata parity and public-link requirements.
- Responsibility: distinguish source-code repositories from an academic thesis while retaining the existing project-resources section and link components.

## Data model

- Update existing `Project.image` values to the three supplied Showcase files. No project identifier, route, or preview-state change is required.
- Expand the Drowsiness `Project.repositories` collection from one entry to the three supplied repositories.
- Add an optional typed project-reference collection for non-repository public resources. Use it only for the Drowsiness thesis reference so a thesis is not represented as source code.
- Add a `CaseStudyVideo` domain type and a corresponding video-block member to the existing `CaseStudyBlock` union. The video type must carry its source, localized accessible name, and localized caption; its validator must reject an empty source or accessible text.
- No database, API, server, route, dependency, or runtime change is required.

## Decisions and rejected alternatives

### Model video as a typed case-study block

- Chosen: add a dedicated video block with native HTML video rendering and validation.
- Rationale: MP4 assets need playback controls and accessible text, which image blocks cannot provide correctly.
- Rejected alternative: render raw video markup inside prose or treat MP4 files as images. Both bypass the typed content model and accessibility validation.

### Keep the EAR formula dependency-free

- Chosen: render the supplied formula as Unicode mathematical text in an existing content block with a localized explanation and scholarly attribution.
- Rationale: it is legible in a static portfolio and requires no runtime or dependency change.
- Rejected alternative: add a mathematical rendering library or turn the formula into an image. The first changes dependencies; the second weakens semantic and localized accessibility.

### Separate the thesis from repositories

- Chosen: model the thesis as a typed project reference and display it separately from source repositories.
- Rationale: the academic source has a different purpose and link semantics from the three codebases.
- Rejected alternative: place the thesis in the repository collection. That would incorrectly label an academic reference as code.

### Map supplied assets explicitly

- Chosen: update the known catalog entries to the supplied Showcase paths and place the known Drowsiness media in explicit content blocks.
- Rationale: the portfolio uses static, typed project data and the specification defines distinct narrative roles for each asset.
- Rejected alternative: discover files automatically at runtime. That would make static content ordering and localized media text nondeterministic.

### Keep non-Drowsiness changes limited to Showcase paths

- Chosen: update only CIMA Classroom and JMP Aquaculture image paths in the project catalog.
- Rationale: this meets the shared-resource requirement while respecting the explicit narrative boundary.
- Rejected alternative: add their assets to or rewrite their case studies. That exceeds the approved scope.

## Testing strategy

1. Use the case-study content validators during the production build to verify non-empty media sources, accessible text, positive image dimensions, unique IDs, and exact English/Spanish block-ID ordering.
2. Run `pnpm test` and then `pnpm build` after implementation tasks. The build must type-check the expanded content union, execute content validation, and generate all localized static routes.
3. Manually verify the English and Spanish Drowsiness routes for narrative order, formula readability, citation, images, both videos, captions, three repository links, and thesis link.
4. Manually verify English and Spanish home pages for the three Showcase images and ensure the CIMA and JMP case-study narratives remain unchanged.
5. Verify unavailable external destinations do not prevent the case-study pages from rendering, and confirm no supplied media path produces a broken presentation block.

## Acceptance traceability

| Implementation part | Covered RFs |
| --- | --- |
| Project catalog Showcase mappings | RF-1, RF-2 |
| Drowsiness repositories and thesis reference | RF-19, RF-20, RF-21, RF-22 |
| Video domain and renderer | RF-8, RF-9, RF-10, RF-17, RF-18 |
| Bilingual Drowsiness narrative and media sequencing | RF-3 through RF-18, RF-23 |
| Localized metadata, captions, alternative text, and validation | All applicable non-functional requirements |
