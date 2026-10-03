import { defineCaseStudyContent } from "./types"

export const drowsinessCaseStudy = defineCaseStudyContent({
  en: {
    sections: [
      {
        type: "text",
        id: "challenge",
        title: "The challenge",
        paragraphs: [
          "Driver fatigue can develop gradually and is difficult to identify before it becomes dangerous. This project explored a connected system capable of recognizing signs of drowsiness and turning them into timely alerts.",
        ],
      },
      {
        type: "text",
        id: "contribution",
        title: "My contribution",
        paragraphs: [
          "I integrated the Angular monitoring interface, Spring Boot services, and the Python and MediaPipe detection process running with Raspberry Pi hardware. The work connected device processing, backend communication, and the user-facing experience into one flow.",
        ],
      },
      {
        type: "text",
        id: "result",
        title: "The result",
        paragraphs: [
          "The result was an end-to-end prototype tested in Lambayeque, Peru. It demonstrated how computer vision, IoT hardware, and web software could work together to detect drowsiness events and support real-time notification.",
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
          "La fatiga al conducir puede aparecer de manera gradual y es difícil de reconocer antes de que se convierta en un peligro. Este proyecto exploró un sistema conectado capaz de identificar señales de somnolencia y transformarlas en alertas oportunas.",
        ],
      },
      {
        type: "text",
        id: "contribution",
        title: "Mi contribución",
        paragraphs: [
          "Integré la interfaz de monitoreo en Angular, los servicios en Spring Boot y el proceso de detección con Python y MediaPipe ejecutado junto a Raspberry Pi. El trabajo conectó el procesamiento del dispositivo, la comunicación con el backend y la experiencia de usuario en un solo flujo.",
        ],
      },
      {
        type: "text",
        id: "result",
        title: "El resultado",
        paragraphs: [
          "El resultado fue un prototipo integral probado en Lambayeque, Perú. Demostró cómo la visión por computadora, el hardware IoT y el software web podían trabajar juntos para detectar eventos de somnolencia y facilitar notificaciones en tiempo real.",
        ],
      },
    ],
  },
})
