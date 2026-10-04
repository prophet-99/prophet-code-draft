import assert from "node:assert/strict"
import { readFile } from "node:fs/promises"
import test from "node:test"

const contentTypesPath = new URL("../src/content/projects/types.ts", import.meta.url)

test("case-study content defines a typed video block", async () => {
  const source = await readFile(contentTypesPath, "utf8")

  assert.match(source, /export interface CaseStudyVideo/)
  assert.match(source, /src: string/)
  assert.match(source, /accessibleName: string/)
  assert.match(source, /caption: string/)
  assert.match(source, /orientation: "landscape" \| "portrait"/)
  assert.match(source, /export interface CaseStudyVideoBlock[\s\S]*type: "video"[\s\S]*video: CaseStudyVideo/)
  assert.match(source, /\| CaseStudyVideoBlock/)
})

test("case-study validation rejects video blocks without source or accessible text", async () => {
  const source = await readFile(contentTypesPath, "utf8")

  assert.match(source, /const assertVideo/)
  assert.match(source, /!video\.src\.trim\(\)/)
  assert.match(source, /!video\.accessibleName\.trim\(\)/)
  assert.match(source, /!\["landscape", "portrait"\]\.includes\(video\.orientation\)/)
  assert.match(source, /block\.type === "video"\) assertVideo\(block\.video, block\.id\)/)
})
