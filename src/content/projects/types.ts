import type { Locale } from "@/i18n/translations"

export interface CaseStudyMedia {
  src: string
  alt: string
  width: number
  height: number
  caption?: string
}

export interface CaseStudyVideo {
  src: string
  orientation: "landscape" | "portrait"
  accessibleName: string
  caption: string
}

export type CaseStudyFormulaKind = "eyeAspectRatio"

export interface CaseStudyFormula {
  kind: CaseStudyFormulaKind
  accessibleName: string
  caption: string
}

interface CaseStudyBlockBase {
  id: string
  title?: string
}

export interface CaseStudyTextBlock extends CaseStudyBlockBase {
  type: "text"
  title: string
  paragraphs: [string, ...string[]]
}

export interface CaseStudyListBlock extends CaseStudyBlockBase {
  type: "list"
  title: string
  introduction?: string
  items: [string, ...string[]]
}

export interface CaseStudyImageBlock extends CaseStudyBlockBase {
  type: "image"
  image: CaseStudyMedia
}

export interface CaseStudyVideoBlock extends CaseStudyBlockBase {
  type: "video"
  video: CaseStudyVideo
}

export interface CaseStudyFormulaBlock extends CaseStudyBlockBase {
  type: "formula"
  formula: CaseStudyFormula
}

export interface CaseStudyGalleryBlock extends CaseStudyBlockBase {
  type: "gallery"
  images: [CaseStudyMedia, ...CaseStudyMedia[]]
}

export interface CaseStudyDiagramBlock extends CaseStudyBlockBase {
  type: "diagram"
  diagram: CaseStudyMedia
  description?: string
}

export interface CaseStudyCalloutBlock extends CaseStudyBlockBase {
  type: "callout"
  label?: string
  body: string
  emphasis?: "decision" | "result" | "learning" | "data"
}

export type CaseStudyBlock =
  | CaseStudyTextBlock
  | CaseStudyListBlock
  | CaseStudyImageBlock
  | CaseStudyVideoBlock
  | CaseStudyFormulaBlock
  | CaseStudyGalleryBlock
  | CaseStudyDiagramBlock
  | CaseStudyCalloutBlock

export interface CaseStudyContent {
  sections: CaseStudyBlock[]
}

export type LocalizedCaseStudyContent = Record<Locale, CaseStudyContent>

const assertMedia = (media: CaseStudyMedia, blockId: string): void => {
  if (!media.src || !media.alt.trim()) {
    throw new Error(`Case study block "${blockId}" requires a source and localized alternative text.`)
  }

  if (media.width <= 0 || media.height <= 0) {
    throw new Error(`Case study block "${blockId}" requires positive image dimensions.`)
  }
}

const assertVideo = (video: CaseStudyVideo, blockId: string): void => {
  if (
    !video.src.trim() ||
    !video.accessibleName.trim() ||
    !video.caption.trim() ||
    !["landscape", "portrait"].includes(video.orientation)
  ) {
    throw new Error(
      `Case study block "${blockId}" requires a video source, localized accessible name, and localized caption.`,
    )
  }
}

const assertFormula = (formula: CaseStudyFormula, blockId: string): void => {
  if (!formula.accessibleName.trim() || !formula.caption.trim()) {
    throw new Error(
      `Case study block "${blockId}" requires a localized formula name and caption.`,
    )
  }
}

const validateLocaleContent = (content: CaseStudyContent, locale: Locale): void => {
  const ids = new Set<string>()

  content.sections.forEach((block) => {
    if (!block.id.trim() || ids.has(block.id)) {
      throw new Error(`Case study content for "${locale}" contains an empty or duplicate block id: "${block.id}".`)
    }
    ids.add(block.id)

    if (block.type === "image") assertMedia(block.image, block.id)
    if (block.type === "video") assertVideo(block.video, block.id)
    if (block.type === "formula") assertFormula(block.formula, block.id)
    if (block.type === "diagram") assertMedia(block.diagram, block.id)
    if (block.type === "gallery") {
      if (block.images.length < 1 || block.images.length > 5) {
        throw new Error(`Gallery block "${block.id}" supports between 1 and 5 images.`)
      }
      block.images.forEach((image) => assertMedia(image, block.id))
    }
  })
}

export const defineCaseStudyContent = (
  content: LocalizedCaseStudyContent,
): LocalizedCaseStudyContent => {
  validateLocaleContent(content.en, "en")
  validateLocaleContent(content.es, "es")

  const englishIds = content.en.sections.map(({ id }) => id)
  const spanishIds = content.es.sections.map(({ id }) => id)
  if (englishIds.join("|") !== spanishIds.join("|")) {
    throw new Error("English and Spanish case study blocks must use the same ids and order.")
  }

  return content
}
