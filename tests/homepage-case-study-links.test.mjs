import assert from "node:assert/strict"
import { readFile } from "node:fs/promises"
import test from "node:test"

const catalogPath = new URL("../src/data/projects.ts", import.meta.url)
const projectsComponentPath = new URL("../src/components/Projects.astro", import.meta.url)

test("only the Drowsiness case study is published on the homepage", async () => {
  const source = await readFile(catalogPath, "utf8")
  const publicationStates = [...source.matchAll(/isPublished: (true|false)/g)].map(
    ([, state]) => state,
  )

  assert.deepEqual(publicationStates, ["true", "false", "false"])
})

test("unpublished case studies retain a visible but disabled homepage action", async () => {
  const source = await readFile(projectsComponentPath, "utf8")

  assert.match(source, /caseStudy\.isPublished \? \(/)
  assert.match(source, /href=\{getProjectCaseStudyPath\(locale, caseStudy\.slug\)\}/)
  assert.match(source, /aria-disabled="true"/)
  assert.match(source, /\{copy\.projectsUi\.caseStudy\}/)
  assert.match(source, /cursor-not-allowed/)
})
