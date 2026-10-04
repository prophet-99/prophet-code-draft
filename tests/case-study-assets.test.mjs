import assert from "node:assert/strict"
import { access, readFile } from "node:fs/promises"
import test from "node:test"

const root = new URL("../", import.meta.url)

const requiredAssets = [
  "public/projects/drowsiness-project/showcase.webp",
  "public/projects/drowsiness-project/mediapipe-face-mesh.gif",
  "public/projects/drowsiness-project/vidds-components.webp",
  "public/projects/drowsiness-project/vidds.webp",
  "public/projects/drowsiness-project/vidds-demo.mp4",
  "public/projects/drowsiness-project/frontend-tracker.mp4",
  "public/projects/cima-classroom-project/showcase.webp",
  "public/projects/jmpaquaculture-project/showcase.webp",
]

test("every case-study and Showcase asset referenced by the specification exists", async () => {
  await Promise.all(requiredAssets.map((asset) => access(new URL(asset, root))))
})

test("localized project routes remain available for all three case studies", async () => {
  const [englishRoute, spanishRoute] = await Promise.all([
    readFile(new URL("src/pages/projects/[slug].astro", root), "utf8"),
    readFile(new URL("src/pages/es/proyectos/[slug].astro", root), "utf8"),
  ])

  assert.match(englishRoute, /CASE_STUDY_PROJECT_IDS/)
  assert.match(spanishRoute, /CASE_STUDY_PROJECT_IDS/)
  assert.match(englishRoute, /locale="en"/)
  assert.match(spanishRoute, /locale="es"/)
})

test("CIMA and JMP case-study narratives remain outside this implementation", async () => {
  const [cima, jmp] = await Promise.all([
    readFile(new URL("src/content/projects/cima.ts", root), "utf8"),
    readFile(new URL("src/content/projects/jmp.ts", root), "utf8"),
  ])

  assert.doesNotMatch(cima, /drowsiness-project/)
  assert.doesNotMatch(jmp, /drowsiness-project/)
  assert.doesNotMatch(cima, /type: "video"/)
  assert.doesNotMatch(jmp, /type: "video"/)
})
