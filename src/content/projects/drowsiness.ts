import { defineCaseStudyContent } from "./types"

export const drowsinessCaseStudy = defineCaseStudyContent({
  en: {
    sections: [
      {
        type: "text",
        id: "thesis-context",
        title: "A thesis built around a real safety problem",
        paragraphs: [
          "I developed this project as the thesis that earned my Systems Engineering degree with an AI focus. It addressed a road-safety problem in Lambayeque, Peru: driver drowsiness can impair neurocognitive functions, reduce reaction capacity, and contribute to preventable traffic accidents.",
          "In 2024, integrated drowsiness-assistance capabilities were becoming common in parts of the European automotive market, but comparable systems were not yet broadly accessible in the local Latin American context. The work therefore focused on an applied, connected solution that could be evaluated in a real vehicle.",
        ],
      },
      {
        type: "text",
        id: "vidds-objective",
        title: "VIDDS: deep learning and IoT working together",
        paragraphs: [
          "The objective was to build and evaluate a system that detects possible driver drowsiness with deep learning and IoT, alerts the driver, records the incident, and makes it visible through a real-time monitoring platform. The result was VIDDS: the Very Intelligent Drowsiness Detection System.",
          "VIDDS connects facial analysis, embedded computing, physical hardware, location tracking, backend services, MongoDB persistence, and an Angular monitoring dashboard. Its purpose is to help prevent accidents and the avoidable loss of drivers' lives.",
        ],
      },
      {
        type: "text",
        id: "ear-foundation",
        title: "The detection principle: Eye Aspect Ratio",
        paragraphs: [
          "The project uses the Eye Aspect Ratio (EAR), a scalar derived from six facial landmarks around an eye. The method is based on the work of Tereza Soukupová and Jan Čech (2016), whose real-time blink-detection research observes that EAR remains relatively stable while an eye is open and approaches zero as it closes.",
          "The formula is EAR = (||p2 - p6|| + ||p3 - p5||) / (2||p1 - p4||). Its numerator adds the vertical distances between the eyelids, while its denominator measures the horizontal eye width. A lower value therefore indicates a more closed eye.",
          "VIDDS applies this mathematical signal through its configured prototype rule. The system treats its configured zero-state condition as a possible drowsiness incident; this is an engineering rule for the prototype, not a universal or clinical diagnosis.",
        ],
      },
      {
        type: "formula",
        id: "ear-formula",
        formula: {
          kind: "eyeAspectRatio",
          accessibleName: "Eye Aspect Ratio formula",
          caption: "Eye Aspect Ratio — Soukupová and Čech (2016)",
        },
      },
      {
        type: "text",
        id: "face-tracking",
        title: "From facial landmarks to an eye signal",
        paragraphs: [
          "The detection flow begins with MediaPipe FaceMesh. The embedded Python application uses the model to track the driver's face and identify the landmarks around each eye that are required for the EAR calculation.",
          "This tracking stage turns camera frames into stable landmark coordinates. The program can then continuously evaluate the eye state before deciding whether the configured drowsiness condition has occurred.",
        ],
      },
      {
        type: "image",
        id: "face-tracking-media",
        image: {
          src: "/projects/drowsiness-project/mediapipe-face-mesh.gif",
          alt: "MediaPipe FaceMesh tracking facial landmarks around a driver's face",
          width: 690,
          height: 388,
          caption: "FaceMesh identifies the facial landmarks used to observe the eye region in real time.",
        },
      },
      {
        type: "list",
        id: "prototype-components",
        title: "The VIDDS robotic prototype",
        introduction:
          "The embedded detection program runs on a Raspberry Pi 4B inside a physical prototype designed for use in a vehicle. The complete device combines:",
        items: [
          "A Neo GPS module for location tracking.",
          "A DFPlayer Mini and an audio speaker for the warning workflow.",
          "A Raspberry Pi Noir Camera v2 for facial capture.",
          "An external battery for portable power.",
          "Infrared LED lights for low-light and dark environments.",
          "The Raspberry Pi 4B for embedded computation and communication with the platform.",
        ],
      },
      {
        type: "image",
        id: "prototype-components-media",
        image: {
          src: "/projects/drowsiness-project/vidds-components.webp",
          alt: "Electronic and IoT components used to build the VIDDS prototype",
          width: 1920,
          height: 1440,
          caption:
            "The hardware combines embedded computation, facial capture, low-light vision, location tracking, power, and audio alerting.",
        },
      },
      {
        type: "image",
        id: "assembled-prototype-media",
        image: {
          src: "/projects/drowsiness-project/vidds.webp",
          alt: "Assembled VIDDS driver-drowsiness detection prototype",
          width: 1920,
          height: 1440,
          caption:
            "The assembled VIDDS device was installed in the vehicle during field validation.",
        },
      },
      {
        type: "text",
        id: "incident-flow",
        title: "From detection to a traceable safety incident",
        paragraphs: [
          "When the configured EAR condition identifies a possible drowsiness incident, the prototype immediately emits an audible warning through its speaker. During field testing, the alert sounded for approximately three to four seconds to prompt the driver to wake up.",
          "At the same time, the device obtains its current GPS location and sends the incident to the Spring Boot backend through its API flow. The backend connects the embedded Python core with the Angular application and stores the incident in MongoDB for later consultation.",
        ],
      },
      {
        type: "list",
        id: "monitoring-experience",
        title: "Incident visibility in real time",
        introduction:
          "Each user is associated with a vehicle equipped with VIDDS. When the platform receives an incident, its Google Maps monitoring experience presents:",
        items: [
          "The location of the event on an interactive map.",
          "The incident date and resolved address.",
          "The associated user and associated vehicle.",
          "An assistance-call action for follow-up.",
        ],
      },
      {
        type: "text",
        id: "field-validation",
        title: "Field validation in a real vehicle",
        paragraphs: [
          "VIDDS was evaluated in a real vehicle while a participant alternated between normal behavior and simulated falling asleep and asleep states. The validation covered different lighting conditions, head accessories, and glasses and no glasses.",
          "When the participant simulated drowsiness, the physical prototype emitted its audible alert and the monitoring interface registered the resulting incident. This connected the driver scenario, the embedded device, GPS data, backend communication, stored records, and the dashboard in one end-to-end test.",
        ],
      },
      {
        type: "video",
        id: "field-test-video",
        title: "VIDDS in a real vehicle",
        video: {
          src: "/projects/drowsiness-project/vidds-demo.mp4",
          orientation: "portrait",
          accessibleName: "VIDDS field test in a real vehicle",
          caption:
            "The field test connects simulated drowsiness, the physical alert, GPS reporting, and incident registration.",
        },
      },
      {
        type: "list",
        id: "engineering-quality",
        title: "Engineering quality and operational confidence",
        introduction:
          "VIDDS was developed as an observable and testable software system, not only as an AI experiment. Its quality practices included:",
        items: [
          "Backend automated testing with JUnit and Mockito.",
          "Backend observability with Prometheus and Grafana.",
          "Frontend unit testing with Jest.",
          "Map-interactivity evaluation with Lighthouse and custom measurements.",
          "Performance checks intended to prevent the map from freezing the interface while incidents were displayed or updated.",
        ],
      },
      {
        type: "video",
        id: "frontend-tracker-video",
        title: "The incident reaches the monitoring platform",
        video: {
          src: "/projects/drowsiness-project/frontend-tracker.mp4",
          orientation: "landscape",
          accessibleName: "Real-time VIDDS incident tracking dashboard",
          caption:
            "The Angular dashboard shows the reported incident, its map location, and its operational context in real time.",
        },
      },
    ],
  },
  es: {
    sections: [
      {
        type: "text",
        id: "thesis-context",
        title: "Una tesis construida alrededor de un problema real de seguridad",
        paragraphs: [
          "Desarrollé este proyecto como la tesis con la que obtuve el título de Ingeniería de Sistemas con enfoque en inteligencia artificial. Abordó un problema de seguridad vial en Lambayeque, Perú: la somnolencia puede afectar las funciones neurocognitivas del conductor, reducir su capacidad de reacción y contribuir a accidentes de tránsito evitables.",
          "En 2024, las funciones integradas de asistencia ante la somnolencia empezaban a ser comunes en partes del mercado automotor europeo, pero sistemas comparables todavía no eran ampliamente accesibles en el contexto latinoamericano local. Por ello, el trabajo se centró en una solución aplicada y conectada que pudiera evaluarse en un vehículo real.",
        ],
      },
      {
        type: "text",
        id: "vidds-objective",
        title: "VIDDS: deep learning e IoT trabajando juntos",
        paragraphs: [
          "El objetivo fue construir y evaluar un sistema que detectara una posible somnolencia del conductor mediante deep learning e IoT, alertara al conductor, registrara el incidente y lo hiciera visible en una plataforma de monitoreo en tiempo real. El resultado fue VIDDS: Very Intelligent Drowsiness Detection System.",
          "VIDDS conecta análisis facial, computación embebida, hardware físico, rastreo de ubicación, servicios backend, persistencia en MongoDB y un panel de monitoreo en Angular. Su propósito es ayudar a prevenir accidentes y la pérdida evitable de vidas de conductores.",
        ],
      },
      {
        type: "text",
        id: "ear-foundation",
        title: "El principio de detección: Eye Aspect Ratio",
        paragraphs: [
          "El proyecto utiliza Eye Aspect Ratio (EAR), un valor escalar derivado de seis puntos de referencia faciales alrededor de un ojo. El método se basa en el trabajo de Tereza Soukupová y Jan Čech (2016), cuya investigación de detección de parpadeo en tiempo real observa que el EAR permanece relativamente estable mientras el ojo está abierto y se aproxima a cero cuando se cierra.",
          "La fórmula es EAR = (||p2 - p6|| + ||p3 - p5||) / (2||p1 - p4||). El numerador suma las distancias verticales entre los párpados, mientras que el denominador mide el ancho horizontal del ojo. Por ello, un valor menor indica que el ojo está más cerrado.",
          "VIDDS aplica esta señal matemática mediante la regla configurada para el prototipo. El sistema interpreta su condición configurada de estado cero como un posible incidente de somnolencia; se trata de una regla de ingeniería del prototipo, no de un diagnóstico universal ni clínico.",
        ],
      },
      {
        type: "formula",
        id: "ear-formula",
        formula: {
          kind: "eyeAspectRatio",
          accessibleName: "Fórmula de Eye Aspect Ratio",
          caption: "Eye Aspect Ratio — Soukupová y Čech (2016)",
        },
      },
      {
        type: "text",
        id: "face-tracking",
        title: "De los puntos faciales a una señal ocular",
        paragraphs: [
          "El flujo de detección comienza con MediaPipe FaceMesh. La aplicación embebida en Python utiliza el modelo para rastrear el rostro del conductor e identificar los puntos alrededor de cada ojo necesarios para calcular el EAR.",
          "Esta etapa de rastreo convierte los fotogramas de la cámara en coordenadas estables. Luego, el programa puede evaluar continuamente el estado de los ojos antes de decidir si ocurrió la condición de somnolencia configurada.",
        ],
      },
      {
        type: "image",
        id: "face-tracking-media",
        image: {
          src: "/projects/drowsiness-project/mediapipe-face-mesh.gif",
          alt: "MediaPipe FaceMesh rastreando puntos de referencia faciales alrededor del rostro de un conductor",
          width: 690,
          height: 388,
          caption: "FaceMesh identifica en tiempo real los puntos faciales utilizados para observar la región de los ojos.",
        },
      },
      {
        type: "list",
        id: "prototype-components",
        title: "El prototipo robótico VIDDS",
        introduction:
          "El programa de detección embebido se ejecuta en una Raspberry Pi 4B dentro de un prototipo físico diseñado para utilizarse en un vehículo. El dispositivo completo combina:",
        items: [
          "Un módulo Neo GPS para rastrear la ubicación.",
          "Un DFPlayer Mini y una bocina de audio para el flujo de alertas.",
          "Una cámara Raspberry Pi Noir Camera v2 para capturar el rostro.",
          "Una batería externa para la alimentación portátil.",
          "Luces LED infrarrojas para ambientes con poca luz u oscuridad.",
          "La Raspberry Pi 4B para la computación embebida y la comunicación con la plataforma.",
        ],
      },
      {
        type: "image",
        id: "prototype-components-media",
        image: {
          src: "/projects/drowsiness-project/vidds-components.webp",
          alt: "Componentes electrónicos e IoT utilizados para construir el prototipo VIDDS",
          width: 1920,
          height: 1440,
          caption:
            "El hardware combina computación embebida, captura facial, visión con poca luz, rastreo de ubicación, energía y alertas de audio.",
        },
      },
      {
        type: "image",
        id: "assembled-prototype-media",
        image: {
          src: "/projects/drowsiness-project/vidds.webp",
          alt: "Prototipo ensamblado de VIDDS para detectar somnolencia del conductor",
          width: 1920,
          height: 1440,
          caption:
            "El dispositivo VIDDS ensamblado se instaló en el vehículo durante la validación de campo.",
        },
      },
      {
        type: "text",
        id: "incident-flow",
        title: "De la detección a un incidente de seguridad rastreable",
        paragraphs: [
          "Cuando la condición EAR configurada identifica un posible incidente de somnolencia, el prototipo emite de inmediato una alerta audible mediante su bocina. Durante las pruebas de campo, la alerta sonaba aproximadamente de tres a cuatro segundos para hacer reaccionar al conductor.",
          "Al mismo tiempo, el dispositivo obtiene su ubicación GPS actual y envía el incidente al backend en Spring Boot mediante su flujo de API. El backend conecta el núcleo embebido en Python con la aplicación Angular y guarda el incidente en MongoDB para su consulta posterior.",
        ],
      },
      {
        type: "list",
        id: "monitoring-experience",
        title: "Visibilidad del incidente en tiempo real",
        introduction:
          "Cada usuario está asociado con un vehículo equipado con VIDDS. Cuando la plataforma recibe un incidente, su experiencia de monitoreo con Google Maps presenta:",
        items: [
          "La ubicación del evento en un mapa interactivo.",
          "La fecha del incidente y la dirección resuelta.",
          "El usuario asociado y el vehículo asociado.",
          "Una acción de llamada para solicitar asistencia.",
        ],
      },
      {
        type: "text",
        id: "field-validation",
        title: "Validación de campo en un vehículo real",
        paragraphs: [
          "VIDDS fue evaluado en un vehículo real mientras un participante alternaba entre un comportamiento normal y estados simulados de quedarse dormido y estar dormido. La validación cubrió diferentes condiciones de iluminación, accesorios en la cabeza y el uso o ausencia de lentes.",
          "Cuando el participante simuló somnolencia, el prototipo físico emitió su alerta audible y la interfaz de monitoreo registró el incidente resultante. Esto conectó el escenario del conductor, el dispositivo embebido, los datos GPS, la comunicación con el backend, los registros almacenados y el dashboard en una prueba de extremo a extremo.",
        ],
      },
      {
        type: "video",
        id: "field-test-video",
        title: "VIDDS en un vehículo real",
        video: {
          src: "/projects/drowsiness-project/vidds-demo.mp4",
          orientation: "portrait",
          accessibleName: "Prueba de campo de VIDDS en un vehículo real",
          caption:
            "La prueba de campo conecta la somnolencia simulada, la alerta física, el reporte GPS y el registro del incidente.",
        },
      },
      {
        type: "list",
        id: "engineering-quality",
        title: "Calidad de ingeniería y confianza operativa",
        introduction:
          "VIDDS fue desarrollado como un sistema de software observable y comprobable, no solamente como un experimento de inteligencia artificial. Sus prácticas de calidad incluyeron:",
        items: [
          "Pruebas automatizadas del backend con JUnit y Mockito.",
          "Observabilidad del backend con Prometheus y Grafana.",
          "Pruebas unitarias del frontend con Jest.",
          "Evaluación de la interactividad del mapa con Lighthouse y mediciones personalizadas.",
          "Comprobaciones de rendimiento orientadas a evitar que el mapa congelara la interfaz mientras los incidentes se mostraban o actualizaban.",
        ],
      },
      {
        type: "video",
        id: "frontend-tracker-video",
        title: "El incidente llega a la plataforma de monitoreo",
        video: {
          src: "/projects/drowsiness-project/frontend-tracker.mp4",
          orientation: "landscape",
          accessibleName: "Dashboard de VIDDS rastreando incidentes en tiempo real",
          caption:
            "El dashboard en Angular muestra en tiempo real el incidente reportado, su ubicación en el mapa y su contexto operativo.",
        },
      },
    ],
  },
})
