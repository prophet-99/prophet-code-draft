# Tasks 001 — Drowsiness Case Study

- [x] T1 — Update the shared project catalog with the three supplied Showcase paths, the three Drowsiness repositories, and the typed thesis reference data.
  Estimate: 25 minutes.
  RFs: RF-1, RF-2, RF-19, RF-20, RF-21, RF-22.
  Done when: The catalog uses the supplied Showcase assets, exposes all three repository URLs and the thesis URL as typed data, and `pnpm test` then `pnpm build` pass.

- [x] T2 — Add the typed video case-study domain model, union member, and validation for a source and localized accessible text.
  Depends on: T1.
  Estimate: 25 minutes.
  RFs: RF-17, RF-18; accessible-media requirements.
  Done when: The content model accepts valid video blocks, rejects empty required video fields, and `pnpm test` then `pnpm build` pass.

- [x] T3 — Render typed video blocks with native controls, metadata-only preloading, an accessible name, and a localized visible caption using the established case-study media-card presentation.
  Depends on: T2.
  Estimate: 25 minutes.
  RFs: RF-17, RF-18; accessible-media and design-preservation requirements.
  Done when: A valid video block renders with controls and localized accessible text without changing the established page design, and `pnpm test` then `pnpm build` pass.

- [x] T4 — Replace the bilingual Drowsiness opening narrative with matching thesis context, VIDDS objective, EAR formula and citation, and FaceMesh tracking blocks, including the supplied facial-tracking GIF.
  Depends on: T2.
  Estimate: 25 minutes.
  RFs: RF-3, RF-4, RF-5, RF-6, RF-7, RF-8.
  Done when: English and Spanish use identical block IDs and order, present the required EAR explanation and attribution, place the GIF in the tracking section, and `pnpm test` then `pnpm build` pass.

- [x] T5 — Add bilingual Drowsiness blocks for the VIDDS components, assembled prototype, incident flow, monitoring details, and field-validation conditions using the supplied images.
  Depends on: T4.
  Estimate: 25 minutes.
  RFs: RF-9, RF-10, RF-11, RF-12, RF-13, RF-14, RF-15, RF-16.
  Done when: Both locales preserve matching IDs and order, present the supplied images in their approved contexts, and describe the required prototype, incident, monitoring, and validation information with `pnpm test` then `pnpm build` passing.

- [x] T6 — Add the bilingual field-test and frontend-tracker video blocks and the engineering-quality narrative in their approved sequence.
  Depends on: T3, T5.
  Estimate: 25 minutes.
  RFs: RF-17, RF-18, RF-23.
  Done when: Both supplied MP4 files render in their required narrative sections with localized accessible text and the quality practices are described in both locales, with `pnpm test` then `pnpm build` passing.

- [x] T7 — Render the Drowsiness thesis as a localized academic reference distinct from repositories and align Drowsiness localized project metadata with the approved thesis narrative.
  Depends on: T1, T6.
  Estimate: 25 minutes.
  RFs: RF-19, RF-20, RF-21, RF-22; English/Spanish metadata and link requirements.
  Done when: The resources area presents three repositories and the thesis reference with localized labels, Drowsiness metadata remains equivalent across locales, and `pnpm test` then `pnpm build` pass.

- [x] T8 — Perform the final bilingual visual and link verification for all required routes and supplied project media.
  Depends on: T7.
  Estimate: 20 minutes.
  RFs: RF-1 through RF-23.
  Done when: The English and Spanish home pages show all three Showcase images, the Drowsiness routes show the approved narrative and media without broken references, CIMA and JMP narratives are unchanged, and `pnpm test` then `pnpm build` pass.
