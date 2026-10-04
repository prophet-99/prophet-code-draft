import assert from "node:assert/strict"
import { readFile } from "node:fs/promises"
import test from "node:test"

const pagePath = new URL("../src/components/ProjectCaseStudyPage.astro", import.meta.url)
const translationsPath = new URL("../src/i18n/translations.ts", import.meta.url)
const projectsPath = new URL("../src/data/projects.ts", import.meta.url)

test("case-study resources render academic references separately from repositories", async () => {
  const [page, translations] = await Promise.all([
    readFile(pagePath, "utf8"),
    readFile(translationsPath, "utf8"),
  ])

  assert.match(page, /project\.references\.length > 0/)
  assert.match(page, /copy\.caseStudyUi\.academicReferences/)
  assert.match(page, /project\.references\.map\(\(reference\)/)
  assert.match(page, /reference\.label\[locale\]/)
  assert.match(translations, /academicReferences: string/)
  assert.match(translations, /academicReferences: "Academic references"/)
  assert.match(translations, /academicReferences: "Referencias académicas"/)
})

test("Drowsiness project metadata communicates the thesis, VIDDS, AI, and IoT in both locales", async () => {
  const [translations, projects] = await Promise.all([
    readFile(translationsPath, "utf8"),
    readFile(projectsPath, "utf8"),
  ])

  assert.match(translations, /Systems Engineering thesis/)
  assert.match(translations, /tesis de Ingeniería de Sistemas/)
  assert.match(translations, /VIDDS/)
  assert.match(translations, /AI and IoT/)
  assert.match(translations, /inteligencia artificial e IoT/)
  assert.match(projects, /Systems Engineering thesis case study/)
  assert.match(projects, /Caso de estudio de tesis de Ingeniería de Sistemas/)
})
