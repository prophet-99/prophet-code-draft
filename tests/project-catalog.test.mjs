import assert from "node:assert/strict"
import { readFile } from "node:fs/promises"
import test from "node:test"

const projectCatalogPath = new URL("../src/data/projects.ts", import.meta.url)

test("project catalog maps every project to its supplied Showcase asset", async () => {
  const source = await readFile(projectCatalogPath, "utf8")

  assert.match(source, /image: "\/projects\/drowsiness-project\/showcase\.webp"/)
  assert.match(source, /image: "\/projects\/cima-classroom-project\/showcase\.webp"/)
  assert.match(source, /image: "\/projects\/jmpaquaculture-project\/showcase\.webp"/)
})

test("Drowsiness resources include three repositories and the thesis reference", async () => {
  const source = await readFile(projectCatalogPath, "utf8")

  assert.match(source, /https:\/\/github\.com\/prophet-99\/drowsiness-app-vidds/)
  assert.match(source, /https:\/\/github\.com\/prophet-99\/drowsiness-app-backend/)
  assert.match(source, /https:\/\/github\.com\/prophet-99\/drowsiness-app-frontend/)
  assert.match(source, /export interface ProjectReference/)
  assert.match(source, /references: ProjectReference\[\]/)
  assert.match(source, /https:\/\/repositorio\.unprg\.edu\.pe\/handle\/20\.500\.12893\/12952/)
})
