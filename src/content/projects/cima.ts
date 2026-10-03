import { defineCaseStudyContent } from "./types"

export const cimaCaseStudy = defineCaseStudyContent({
  en: {
    sections: [
      {
        type: "text",
        id: "challenge",
        title: "The challenge",
        paragraphs: [
          "The pandemic created an immediate need for CIMA school to continue its academic activities online. The platform had to bring essential classroom workflows into one accessible space for students and the educational team.",
        ],
      },
      {
        type: "text",
        id: "contribution",
        title: "My contribution",
        paragraphs: [
          "I led the frontend work with Angular and React, coordinating the user-facing experience with services built in Flask and Express and data stored in PostgreSQL. The work connected the academic workflows with a consistent web interface.",
        ],
      },
      {
        type: "text",
        id: "result",
        title: "The result",
        paragraphs: [
          "The result was a virtual classroom platform used by CIMA students during the pandemic. It provided a centralized digital environment that supported the school’s continuity while in-person activity was restricted.",
        ],
      },
    ],
  },
  es: {
    sections: [
      {
        type: "text",
        id: "challenge",
        title: "El desafío",
        paragraphs: [
          "La pandemia generó la necesidad inmediata de que el colegio CIMA continuara sus actividades académicas por internet. La plataforma debía reunir los flujos esenciales del aula en un espacio accesible para los estudiantes y el equipo educativo.",
        ],
      },
      {
        type: "text",
        id: "contribution",
        title: "Mi contribución",
        paragraphs: [
          "Lideré el trabajo frontend con Angular y React, conectando la experiencia de usuario con servicios desarrollados en Flask y Express y datos almacenados en PostgreSQL. El trabajo integró los flujos académicos en una interfaz web consistente.",
        ],
      },
      {
        type: "text",
        id: "result",
        title: "El resultado",
        paragraphs: [
          "El resultado fue una plataforma de aula virtual utilizada por los alumnos de CIMA durante la pandemia. Proporcionó un entorno digital centralizado que ayudó a mantener la continuidad del colegio mientras la actividad presencial estuvo restringida.",
        ],
      },
    ],
  },
})
