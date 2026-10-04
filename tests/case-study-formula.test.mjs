import assert from "node:assert/strict"
import { readFile } from "node:fs/promises"
import test from "node:test"

const typesPath = new URL("../src/content/projects/types.ts", import.meta.url)
const rendererPath = new URL("../src/components/CaseStudyBlocks.astro", import.meta.url)
const narrativePath = new URL("../src/content/projects/drowsiness.ts", import.meta.url)

test("case-study content models and validates accessible mathematical formulas", async () => {
  const source = await readFile(typesPath, "utf8")

  assert.match(source, /export type CaseStudyFormulaKind = "eyeAspectRatio"/)
  assert.match(source, /export interface CaseStudyFormula/)
  assert.match(source, /kind: CaseStudyFormulaKind/)
  assert.match(source, /accessibleName: string/)
  assert.match(source, /export interface CaseStudyFormulaBlock[\s\S]*type: "formula"/)
  assert.match(source, /\| CaseStudyFormulaBlock/)
  assert.match(source, /const assertFormula/)
  assert.match(source, /block\.type === "formula"\) assertFormula\(block\.formula, block\.id\)/)
})

test("EAR renders as native MathML with a fraction, subscripts, norms, and an accessible name", async () => {
  const source = await readFile(rendererPath, "utf8")

  assert.match(source, /<math/)
  assert.match(source, /display="block"/)
  assert.match(source, /aria-label=\{block\.formula\.accessibleName\}/)
  assert.match(source, /<mfrac>/)
  assert.match(source, /<msub>/)
  assert.match(source, /<mo>‖<\/mo>/)
  assert.match(source, /\{block\.formula\.caption\}/)
})

test("Drowsiness uses the localized typed EAR formula block", async () => {
  const source = await readFile(narrativePath, "utf8")

  assert.match(source, /type: "formula"/)
  assert.match(source, /kind: "eyeAspectRatio"/)
  assert.match(source, /accessibleName: "Eye Aspect Ratio formula"/)
  assert.match(source, /accessibleName: "Fórmula de Eye Aspect Ratio"/)
})
