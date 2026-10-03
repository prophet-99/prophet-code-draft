import { defineCaseStudyContent } from "./types"

export const jmpCaseStudy = defineCaseStudyContent({
  en: {
    sections: [
      {
        type: "text",
        id: "challenge",
        title: "The challenge",
        paragraphs: [
          "Aquaculture operations need clear monitoring and fast communication when conditions require attention. JMPAquaculture was created for a real client in Brazil to bring that information and its alerts into a dedicated application.",
        ],
      },
      {
        type: "text",
        id: "contribution",
        title: "My contribution",
        paragraphs: [
          "I developed the application and its monitoring workflow. The first version used Java and JSP, and the solution later incorporated Spring Boot and Twilio to support a more maintainable backend and real-time notifications.",
        ],
      },
      {
        type: "text",
        id: "result",
        title: "The result",
        paragraphs: [
          "The project became my first application delivered for a real client. It combined operational monitoring with automated notifications in a focused product adapted to the client’s aquaculture context.",
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
          "Las operaciones de acuicultura necesitan un monitoreo claro y una comunicación rápida cuando alguna condición requiere atención. JMPAquaculture fue creado para un cliente real en Brasil con el objetivo de reunir esa información y sus alertas en una aplicación dedicada.",
        ],
      },
      {
        type: "text",
        id: "contribution",
        title: "Mi contribución",
        paragraphs: [
          "Desarrollé la aplicación y su flujo de monitoreo. La primera versión utilizó Java y JSP, y posteriormente la solución incorporó Spring Boot y Twilio para facilitar un backend más mantenible y notificaciones en tiempo real.",
        ],
      },
      {
        type: "text",
        id: "result",
        title: "El resultado",
        paragraphs: [
          "El proyecto se convirtió en mi primera aplicación entregada a un cliente real. Combinó monitoreo operativo y notificaciones automáticas en un producto enfocado y adaptado al contexto acuícola del cliente.",
        ],
      },
    ],
  },
})
