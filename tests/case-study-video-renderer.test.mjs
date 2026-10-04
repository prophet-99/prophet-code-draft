import assert from "node:assert/strict"
import { readFile } from "node:fs/promises"
import test from "node:test"

const rendererPath = new URL("../src/components/CaseStudyBlocks.astro", import.meta.url)

test("video blocks use the established wide media presentation", async () => {
  const source = await readFile(rendererPath, "utf8")

  assert.match(source, /block\.type === "video"/)
  assert.match(source, /case-study-block--wide/)
  assert.match(source, /return block\.video\.accessibleName/)
})

test("video blocks render accessible native playback and a visible caption", async () => {
  const source = await readFile(rendererPath, "utf8")

  assert.match(source, /<video/)
  assert.match(source, /controls/)
  assert.match(source, /preload="metadata"/)
  assert.match(source, /aria-label=\{block\.video\.accessibleName\}/)
  assert.match(source, /<source src=\{block\.video\.src\} type="video\/mp4"/)
  assert.match(source, /<figcaption[\s\S]*\{block\.video\.caption\}/)
})

test("portrait videos are centered and height-constrained without cropping landscape videos", async () => {
  const source = await readFile(rendererPath, "utf8")

  assert.match(source, /block\.video\.orientation === "portrait"/)
  assert.match(source, /max-h-\[75vh\]/)
  assert.match(source, /md:max-h-\[70vh\]/)
  assert.match(source, /w-auto object-contain/)
  assert.match(source, /h-auto w-full/)
  assert.match(source, /justify-center bg-black/)
})
