import assert from "node:assert/strict"
import { readFile } from "node:fs/promises"
import test from "node:test"

const narrativePath = new URL("../src/content/projects/drowsiness.ts", import.meta.url)

test("Drowsiness opening explains the thesis, safety problem, and VIDDS objective in both locales", async () => {
  const source = await readFile(narrativePath, "utf8")

  assert.match(source, /Systems Engineering degree with an AI focus/)
  assert.match(source, /título de Ingeniería de Sistemas con enfoque en inteligencia artificial/)
  assert.match(source, /Lambayeque, Peru/)
  assert.match(source, /Lambayeque, Perú/)
  assert.match(source, /Very Intelligent Drowsiness Detection System/)
})

test("Drowsiness opening presents the exact EAR formula, attribution, and explanation", async () => {
  const source = await readFile(narrativePath, "utf8")

  assert.match(source, /EAR = \(\|\|p2 - p6\|\| \+ \|\|p3 - p5\|\|\) \/ \(2\|\|p1 - p4\|\|\)/)
  assert.match(source, /Soukupová and Čech \(2016\)/)
  assert.match(source, /Soukupová y Čech \(2016\)/)
  assert.match(source, /vertical distances/)
  assert.match(source, /distancias verticales/)
})

test("FaceMesh tracking uses the supplied localized animation block", async () => {
  const source = await readFile(narrativePath, "utf8")

  assert.match(source, /id: "face-tracking"/)
  assert.match(source, /id: "face-tracking-media"/)
  assert.match(source, /src: "\/projects\/drowsiness-project\/mediapipe-face-mesh\.gif"/)
  assert.match(source, /alt: "MediaPipe FaceMesh tracking facial landmarks around a driver's face"/)
  assert.match(source, /alt: "MediaPipe FaceMesh rastreando puntos de referencia faciales alrededor del rostro de un conductor"/)
})

test("VIDDS hardware sections use the supplied components and prototype images", async () => {
  const source = await readFile(narrativePath, "utf8")

  assert.match(source, /src: "\/projects\/drowsiness-project\/vidds-components\.webp"/)
  assert.match(source, /src: "\/projects\/drowsiness-project\/vidds\.webp"/)
  for (const capability of [
    "Neo GPS",
    "DFPlayer Mini",
    "Raspberry Pi Noir Camera v2",
    "external battery",
    "audio speaker",
    "infrared LED lights",
    "Raspberry Pi 4B",
  ]) {
    assert.match(source, new RegExp(capability, "i"))
  }
})

test("incident and monitoring narrative covers alerting, location, storage, and dashboard details", async () => {
  const source = await readFile(narrativePath, "utf8")

  assert.match(source, /three to four seconds/)
  assert.match(source, /tres a cuatro segundos/)
  assert.match(source, /current GPS location/)
  assert.match(source, /ubicación GPS actual/)
  assert.match(source, /MongoDB/)
  for (const detail of ["date", "address", "associated user", "associated vehicle", "assistance-call action"]) {
    assert.match(source, new RegExp(detail))
  }
})

test("field-validation narrative covers the required real-vehicle conditions and response", async () => {
  const source = await readFile(narrativePath, "utf8")

  assert.match(source, /real vehicle/)
  assert.match(source, /different lighting conditions/)
  assert.match(source, /glasses and no glasses/)
  assert.match(source, /head accessories/)
  assert.match(source, /simulated falling asleep and asleep states/)
  assert.match(source, /vehículo real/)
})

test("field validation and monitoring use both supplied localized video blocks", async () => {
  const source = await readFile(narrativePath, "utf8")

  assert.match(source, /id: "field-test-video"/)
  assert.match(source, /src: "\/projects\/drowsiness-project\/vidds-demo\.mp4"/)
  assert.match(source, /src: "\/projects\/drowsiness-project\/vidds-demo\.mp4"[\s\S]*orientation: "portrait"/)
  assert.match(source, /id: "frontend-tracker-video"/)
  assert.match(source, /src: "\/projects\/drowsiness-project\/frontend-tracker\.mp4"/)
  assert.match(source, /src: "\/projects\/drowsiness-project\/frontend-tracker\.mp4"[\s\S]*orientation: "landscape"/)
  assert.match(source, /accessibleName: "VIDDS field test in a real vehicle"/)
  assert.match(source, /accessibleName: "Prueba de campo de VIDDS en un vehículo real"/)
  assert.match(source, /accessibleName: "Real-time VIDDS incident tracking dashboard"/)
  assert.match(source, /accessibleName: "Dashboard de VIDDS rastreando incidentes en tiempo real"/)
})

test("engineering-quality narrative names backend, frontend, observability, and map checks", async () => {
  const source = await readFile(narrativePath, "utf8")

  for (const practice of ["JUnit", "Mockito", "Prometheus", "Grafana", "Jest", "Lighthouse", "custom measurements"]) {
    assert.match(source, new RegExp(practice))
  }
  assert.match(source, /prevent the map from freezing the interface/)
  assert.match(source, /evitar que el mapa congelara la interfaz/)
})
