import AngularIcon from "@/components/icons/Angular.astro"
import BootstrapIcon from "@/components/icons/Bootstrap.astro"
import ExpressIcon from "@/components/icons/Express.astro"
import FlaskIcon from "@/components/icons/Flask.astro"
import PostgreSQLIcon from "@/components/icons/PostgreSQL.astro"
import PythonIcon from "@/components/icons/Python.astro"
import RaspberryPiIcon from "@/components/icons/RaspberryPi.astro"
import ReactIcon from "@/components/icons/React.astro"
import SpringIcon from "@/components/icons/Spring.astro"
import TwilioIcon from "@/components/icons/Twilio.astro"
import type { Locale } from "@/i18n/translations"

export type ProjectId = "drowsiness" | "cima" | "jmp"
export type CaseStudyProjectId = ProjectId

export interface ProjectTechnology {
  name: string
  class: string
  icon: any
}

export type ProjectPreview =
  | { status: "available"; url: string }
  | { status: "comingSoon" }

export interface ProjectRepository {
  label: Record<Locale, string>
  url: string
}

export interface Project {
  id: ProjectId
  image: string
  tags: ProjectTechnology[]
  preview: ProjectPreview
  repositories: ProjectRepository[]
  caseStudy: {
    slug: CaseStudyProjectId
    metaDescription: Record<Locale, string>
  }
}

export const TAGS = {
  ANGULAR: {
    name: "Angular",
    class: "bg-[#efd5ff] text-black font-medium",
    icon: AngularIcon,
  },
  REACT: {
    name: "React",
    class: "bg-[#c8e7f0] text-black font-medium",
    icon: ReactIcon,
  },
  FLASK: {
    name: "Flask",
    class: "bg-[#e5e7eb] text-black font-medium",
    icon: FlaskIcon,
  },
  EXPRESS: {
    name: "Express",
    class: "bg-[#b0b5b9] text-black font-medium",
    icon: ExpressIcon,
  },
  POSTGRESQL: {
    name: "PostgreSQL",
    class: "bg-[#dbeafe] text-black font-medium",
    icon: PostgreSQLIcon,
  },
  SPRING: {
    name: "Spring",
    class: "bg-[#d7f2c3] text-black font-medium",
    icon: SpringIcon,
  },
  RASPBERRY_PI: {
    name: "Raspberry PI",
    class: "bg-[#edb1c3] text-black font-medium",
    icon: RaspberryPiIcon,
  },
  PYTHON: {
    name: "Python",
    class: "bg-[#bed0f0] text-black font-medium",
    icon: PythonIcon,
  },
  BOOTSTRAP: {
    name: "Bootstrap",
    class: "bg-[#e2c8ff] text-black font-medium",
    icon: BootstrapIcon,
  },
  TWILIO: {
    name: "Twilio",
    class: "bg-[#ffbcbc] text-black font-medium",
    icon: TwilioIcon,
  },
} satisfies Record<string, ProjectTechnology>

export const PROJECTS: Project[] = [
  {
    id: "drowsiness",
    image: "/projects/drowsiness-project.webp",
    tags: [TAGS.ANGULAR, TAGS.SPRING, TAGS.RASPBERRY_PI, TAGS.PYTHON],
    preview: { status: "comingSoon" },
    repositories: [
      {
        label: { en: "Frontend", es: "Frontend" },
        url: "https://github.com/prophet-99/drowsiness-app-frontend",
      },
    ],
    caseStudy: {
      slug: "drowsiness",
      metaDescription: {
        en: "Case study of an IoT system for detecting driver drowsiness and sending real-time alerts.",
        es: "Caso de estudio de un sistema IoT para detectar somnolencia en conductores y enviar alertas en tiempo real.",
      },
    },
  },
  {
    id: "cima",
    image: "/projects/cima.webp",
    tags: [TAGS.ANGULAR, TAGS.REACT, TAGS.FLASK, TAGS.EXPRESS, TAGS.POSTGRESQL],
    preview: {
      status: "available",
      url: "https://plataforma.colegiocima.edu.pe/CampusVirtual",
    },
    repositories: [],
    caseStudy: {
      slug: "cima",
      metaDescription: {
        en: "Case study of the virtual classroom platform developed for CIMA school during the pandemic.",
        es: "Caso de estudio de la plataforma de aula virtual desarrollada para el colegio CIMA durante la pandemia.",
      },
    },
  },
  {
    id: "jmp",
    image: "/projects/jmpaquaculture.webp",
    tags: [TAGS.SPRING, TAGS.TWILIO, TAGS.BOOTSTRAP],
    preview: { status: "comingSoon" },
    repositories: [
      {
        label: { en: "Main repository", es: "Repositorio principal" },
        url: "https://github.com/prophet-99/jmpaquaculture",
      },
    ],
    caseStudy: {
      slug: "jmp",
      metaDescription: {
        en: "Case study of an aquaculture monitoring application built for a client in Brazil.",
        es: "Caso de estudio de una aplicación de monitoreo de acuicultura desarrollada para un cliente en Brasil.",
      },
    },
  },
]

export const CASE_STUDY_PROJECT_IDS: CaseStudyProjectId[] = ["drowsiness", "cima", "jmp"]

export const getProjectById = (id: ProjectId): Project => {
  const project = PROJECTS.find((item) => item.id === id)
  if (!project) throw new Error(`Unknown project: ${id}`)
  return project
}

export const getProjectCaseStudyPath = (locale: Locale, slug: CaseStudyProjectId): string =>
  locale === "en" ? `/projects/${slug}/` : `/es/proyectos/${slug}/`
