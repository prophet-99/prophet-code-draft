import type { CaseStudyProjectId } from "@/data/projects"
import type { Locale } from "@/i18n/translations"
import { cimaCaseStudy } from "./cima"
import { drowsinessCaseStudy } from "./drowsiness"
import { jmpCaseStudy } from "./jmp"
import type { CaseStudyContent, LocalizedCaseStudyContent } from "./types"

const CASE_STUDY_CONTENT = {
  drowsiness: drowsinessCaseStudy,
  cima: cimaCaseStudy,
  jmp: jmpCaseStudy,
} satisfies Record<CaseStudyProjectId, LocalizedCaseStudyContent>

export const getCaseStudyContent = (
  projectId: CaseStudyProjectId,
  locale: Locale,
): CaseStudyContent => CASE_STUDY_CONTENT[projectId][locale]

export type {
  CaseStudyBlock,
  CaseStudyCalloutBlock,
  CaseStudyContent,
  CaseStudyDiagramBlock,
  CaseStudyGalleryBlock,
  CaseStudyImageBlock,
  CaseStudyListBlock,
  CaseStudyMedia,
  CaseStudyTextBlock,
} from "./types"
