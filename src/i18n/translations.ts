import type { ProjectId } from "@/data/projects"

export const locales = ["en", "es"] as const

export type Locale = (typeof locales)[number]

export interface ExperienceTranslation {
  date: string
  title: string
  titleSeparator?: string
  titleSecondary?: string
  company: string
  description: string
  tools: string
}

export interface ProjectTranslation {
  title: string
  description: string
}

export interface Translation {
  seo: {
    title: string
    description: string
  }
  nav: {
    experience: string
    projects: string
    about: string
    contact: string
  }
  theme: {
    label: string
    light: string
    dark: string
    system: string
  }
  language: {
    label: string
    english: string
    spanish: string
  }
  hero: {
    available: string
    greeting: string
    summaryStart: string
    summaryHighlight: string
    summaryEnd: string
  }
  sections: {
    experience: string
    projects: string
    about: string
  }
  experience: ExperienceTranslation[]
  projects: Record<ProjectId, ProjectTranslation>
  projectsUi: {
    imageAlt: string
    preview: string
    comingSoon: string
    caseStudy: string
  }
  caseStudyUi: {
    eyebrow: string
    backToProjects: string
    technologies: string
    contents: string
    resources: string
    repositories: string
    academicReferences: string
  }
  about: {
    introStart: string
    role: string
    introMiddle: string
    specialties: string
    introEnd: string
    backgroundStart: string
    countries: string
    backgroundMiddle: string
    angular: string
    backgroundEnd: string
    certificationsStart: string
    ocp: string
    certificationsMiddle: string
    aws: string
    certificationsEnd: string
    contentStart: string
    edteam: string
    contentMiddle: string
    prophetCode: string
    contentEnd: string
  }
  footer: {
    rights: string
    about: string
    contact: string
  }
}

const en: Translation = {
  seo: {
    title: "Prophet Code Portfolio - Senior Full Stack Developer and AI Engineer",
    description:
      "Hire Alexander Avila (Prophet Code) to build modern, scalable web and AI solutions. Senior Full Stack Developer and AI Engineer with over 8 years of experience.",
  },
  nav: {
    experience: "Experience",
    projects: "Projects",
    about: "About me",
    contact: "Contact",
  },
  theme: {
    label: "Choose theme",
    light: "Light",
    dark: "Dark",
    system: "System",
  },
  language: {
    label: "Choose language",
    english: "English",
    spanish: "Spanish",
  },
  hero: {
    available: "Available for work",
    greeting: "Hey, I'm",
    summaryStart: "Over 8 years of experience. ",
    summaryHighlight: "Systems engineer, software developer, and programming content creator.",
    summaryEnd: " Based in Peru 🦙🇵🇪, specializing in building unique and innovative solutions.",
  },
  sections: {
    experience: "Work experience",
    projects: "Projects",
    about: "About me",
  },
  experience: [
    {
      date: "February 2026 - Present",
      title: "Full Stack Developer",
      titleSeparator: "·",
      titleSecondary: "AI Engineer",
      company: "Minsait | Client: SINAVI, Spain",
      description:
        "I develop AI-powered full stack solutions across frontend, backend, and cloud. I implement biometric authentication with real-time identity and liveness detection using Python, FastAPI, MediaPipe, and React. I contribute to a RAG platform built with LangChain, PostgreSQL/pgvector, AWS S3, and Redis. I also design event-driven architectures for asynchronous document processing with S3, SQS, SNS, and Lambda, and optimize an n8n and Next.js chatbot for operational traceability.",
      tools:
        "Python, FastAPI, React, Next.js, MediaPipe, LangChain, PostgreSQL, pgvector, AWS, Redis, n8n",
    },
    {
      date: "October 2024 - January 2026",
      title: "Full Stack Developer",
      titleSeparator: "·",
      titleSecondary: "AI Engineer",
      company: "Encora | Client: BCP, Peru",
      description:
        "I developed core features for Cocos & Lucas, BCP's foreign exchange platform, using Angular and TypeScript. I implemented a blog with SSR and ISR, automated testing, and performance improvements. I built backend services with Python, FastAPI, PostgreSQL, Redis, and Pytest. I contributed to an internal RAG solution for technical documentation and knowledge retrieval with Amazon Bedrock and React/Next.js. I also worked on AWS infrastructure, security, and observability with CloudFront, WAF, and Grafana, CI/CD validations with GitHub Actions and Jenkins, and business event integration with Google Tag Manager.",
      tools:
        "Python, FastAPI, PostgreSQL, Redis, Pytest, Amazon Bedrock, React, Next.js, Angular, TypeScript, AWS CloudFront, AWS WAF, Grafana, GitHub Actions, Jenkins, Google Tag Manager",
    },
    {
      date: "October 2022 - September 2024",
      title: "Full Stack Developer",
      company: "Indra Sistemas | Client: MAEUEC, Spain",
      description:
        "I developed full stack solutions for Spain's MAEUEC. I implemented event-driven flows with AWS SQS and S3 for asynchronous processing and file delivery through presigned URLs. I built APIs and backend services with Python, FastAPI, and SQL Server. I improved service and business-event observability with AWS CloudWatch, Grafana, and React dashboards. I standardized testing and quality gates in CI with Pytest, Karma, Jest, SonarQube, and Jenkins. I also proposed a microfrontend architecture with Angular, pre-caching, and bundle optimization using Webpack, Redux, Tailwind CSS, and Docker.",
      tools:
        "Python, FastAPI, SQL Server, AWS SQS, AWS S3, AWS CloudWatch, Grafana, React, Angular, Webpack, Redux, Tailwind CSS, Docker, Pytest, Karma, Jest, SonarQube, Jenkins",
    },
    {
      date: "August 2018 - September 2022",
      title: "Full Stack Developer",
      company: "CIMA, Peru",
      description:
        "I developed backend services for an AI-powered English-learning platform using Python, Flask, IBM Watson, NLP, and Text-to-Speech. I designed REST APIs and microservices for academic and administrative systems with Node.js, Express, PostgreSQL, and Firebase. I contributed to a Python Machine Learning model that analyzed historical data and students' academic progress. I developed virtual classroom modules with Angular and integrated an interactive whiteboard built with React and Konva. I also mentored and reviewed code for two interns.",
      tools:
        "Python, Flask, IBM Watson, NLP, Text-to-Speech, Machine Learning, Node.js, Express, PostgreSQL, Firebase, Angular, React, TypeScript, Konva, SCSS",
    },
    {
      date: "February 2018 - August 2018",
      title: "Full Stack Developer Intern",
      company: "Garzasoft, Peru",
      description:
        "I contributed to a heavy machinery management system. I implemented backend modules with Spring Boot and MySQL for mileage tracking and logistics processes. I also refined interfaces, created layouts, and delivered visual improvements with Angular.",
      tools: "Spring Boot, MySQL, Angular",
    },
  ],
  projects: {
    drowsiness: {
      title: "Drowsiness Project - IoT + Deep Learning + Software",
      description:
        "My Systems Engineering thesis: VIDDS combines AI and IoT to detect possible driver drowsiness, alert the driver, and report incidents in real time. The complete prototype was tested in Lambayeque, Peru.",
    },
    cima: {
      title: "CIMA Virtual Classroom - Platform",
      description:
        "A virtual platform developed for CIMA school during the pandemic and used by its students. I led the frontend work with Angular and React, supported by Flask and Express services with PostgreSQL.",
    },
    jmp: {
      title: "JMPAquaculture - Monitor",
      description:
        "My first application for a real client in Brazil was an aquaculture monitoring app built with Spring Boot and Twilio for real-time notifications. Its first version used Java and JSP.",
    },
  },
  projectsUi: {
    imageAlt: "Prophet Code project",
    preview: "Preview",
    comingSoon: "Coming soon",
    caseStudy: "View case study",
  },
  caseStudyUi: {
    eyebrow: "Project case study",
    backToProjects: "Back to projects",
    technologies: "Technologies",
    contents: "On this page",
    resources: "Project resources",
    repositories: "Repositories",
    academicReferences: "Academic references",
  },
  about: {
    introStart: "My name is Alexander Ávila Briones. I am a Systems Engineer and ",
    role: "Senior Full Stack Developer / AI Engineer",
    introMiddle: ". My experience spans ",
    specialties: "software architecture, applied AI, backend development, cloud, and frontend",
    introEnd: ", building modern and scalable solutions that create real business impact.",
    backgroundStart: "I have worked with teams and clients from ",
    countries: "Peru, Spain, Costa Rica, Brazil, and Mexico",
    backgroundMiddle:
      ", contributing to projects across banking, education, insurance, and financial systems. I have extensive experience with ",
    angular: "Angular",
    backgroundEnd: ", a technology I teach through talks, courses, and technical content.",
    certificationsStart: "I hold the ",
    ocp: "OCP Java SE 17",
    certificationsMiddle: " and ",
    aws: "AWS Certified Developer",
    certificationsEnd:
      " certifications, strengthening my profile as a backend developer and cloud solutions specialist.",
    contentStart: "I also create programming content. I have taught courses on platforms such as ",
    edteam: "EDteam",
    contentMiddle: " and on my ",
    prophetCode: "Prophet Code",
    contentEnd:
      " channel, where I share knowledge and tools for developers with the goal of inspiring and educating the tech community.",
  },
  footer: {
    rights: "Almost all rights reserved",
    about: "About me",
    contact: "Contact",
  },
}

const es: Translation = {
  seo: {
    title: "Portafolio de Prophet Code - Senior Full Stack Developer y AI Engineer",
    description:
      "Contrata a Alexander Avila (Prophet Code) para desarrollar soluciones web y de IA modernas y escalables. Senior Full Stack Developer y AI Engineer con más de 8 años de experiencia.",
  },
  nav: {
    experience: "Experiencia",
    projects: "Proyectos",
    about: "Sobre mí",
    contact: "Contacto",
  },
  theme: {
    label: "Elegir tema",
    light: "Claro",
    dark: "Oscuro",
    system: "Sistema",
  },
  language: {
    label: "Elegir idioma",
    english: "Inglés",
    spanish: "Español",
  },
  hero: {
    available: "Disponible para trabajar",
    greeting: "Hey, soy",
    summaryStart: "Con más de 8 años de experiencia. ",
    summaryHighlight: "Ingeniero de sistemas, desarrollador de software y creador de contenido sobre programación.",
    summaryEnd: " Originario de Perú 🦙🇵🇪, especializado en desarrollar soluciones únicas e innovadoras.",
  },
  sections: {
    experience: "Experiencia laboral",
    projects: "Proyectos",
    about: "Sobre mí",
  },
  experience: [
    {
      date: "Febrero 2026 - Actualmente",
      title: "Full Stack Developer",
      titleSeparator: "·",
      titleSecondary: "AI Engineer",
      company: "Minsait | Cliente: SINAVI, España",
      description:
        "Desarrollo soluciones full stack basadas en IA, combinando frontend, backend y cloud. Implemento autenticación biométrica con detección de identidad y liveness en tiempo real usando Python, FastAPI, MediaPipe y React. Participo en una plataforma RAG con LangChain, PostgreSQL/pgvector, AWS S3 y Redis. Además, diseño arquitecturas event-driven para el procesamiento asíncrono de documentos con S3, SQS, SNS y Lambda, y optimizo un chatbot con n8n y Next.js para trazabilidad operacional.",
      tools:
        "Python, FastAPI, React, Next.js, MediaPipe, LangChain, PostgreSQL, pgvector, AWS, Redis, n8n",
    },
    {
      date: "Octubre 2024 - Enero 2026",
      title: "Full Stack Developer",
      titleSeparator: "·",
      titleSecondary: "AI Engineer",
      company: "Encora | Cliente: BCP, Perú",
      description:
        "Desarrollé funcionalidades core para Cocos & Lucas, plataforma de cambio de divisas de BCP, con Angular y TypeScript. Implementé un blog con SSR e ISR, testing automatizado y mejoras de performance. Desarrollé servicios backend con Python, FastAPI, PostgreSQL, Redis y Pytest. Participé en una solución RAG interna para documentación técnica y recuperación de conocimiento con Amazon Bedrock y React/Next.js. Contribuí a infraestructura, seguridad y observabilidad en AWS con CloudFront, WAF y Grafana, validaciones CI/CD con GitHub Actions y Jenkins, e integración de eventos de negocio con Google Tag Manager.",
      tools:
        "Python, FastAPI, PostgreSQL, Redis, Pytest, Amazon Bedrock, React, Next.js, Angular, TypeScript, AWS CloudFront, AWS WAF, Grafana, GitHub Actions, Jenkins, Google Tag Manager",
    },
    {
      date: "Octubre 2022 - Septiembre 2024",
      title: "Full Stack Developer",
      company: "Indra Sistemas | Cliente: MAEUEC, España",
      description:
        "Desarrollé soluciones full stack para MAEUEC de España. Implementé flujos event-driven con AWS SQS y S3 para procesamiento asíncrono y distribución de archivos con presigned URLs. Desarrollé APIs y servicios backend con Python, FastAPI y SQL Server. Mejoré la observabilidad de servicios y eventos de negocio con AWS CloudWatch, Grafana y dashboards en React. Estandaricé testing y quality gates en CI con Pytest, Karma, Jest, SonarQube y Jenkins. Propuse una arquitectura de microfrontends con Angular, pre-caching y optimización de bundles con Webpack, Redux, Tailwind CSS y Docker.",
      tools:
        "Python, FastAPI, SQL Server, AWS SQS, AWS S3, AWS CloudWatch, Grafana, React, Angular, Webpack, Redux, Tailwind CSS, Docker, Pytest, Karma, Jest, SonarQube, Jenkins",
    },
    {
      date: "Agosto 2018 - Septiembre 2022",
      title: "Full Stack Developer",
      company: "CIMA, Perú",
      description:
        "Desarrollé servicios backend para una plataforma de aprendizaje de inglés basada en IA con Python, Flask, IBM Watson, NLP y Text-to-Speech. Diseñé REST APIs y microservicios para sistemas académicos y administrativos con Node.js, Express, PostgreSQL y Firebase. Participé en un modelo de Machine Learning en Python para analizar información histórica y progresión académica de estudiantes. Desarrollé módulos de aula virtual con Angular e integré una pizarra interactiva en React y Konva. También realicé mentoría y code reviews para dos practicantes.",
      tools:
        "Python, Flask, IBM Watson, NLP, Text-to-Speech, Machine Learning, Node.js, Express, PostgreSQL, Firebase, Angular, React, TypeScript, Konva, SCSS",
    },
    {
      date: "Febrero 2018 - Agosto 2018",
      title: "Practicante Full Stack Developer",
      company: "Garzasoft, Perú",
      description:
        "Participé en el desarrollo de un sistema de gestión de maquinaria pesada. Implementé módulos backend con Spring Boot y MySQL para el control de kilometraje y procesos logísticos. También realicé ajustes de interfaz, creación de layouts y mejoras visuales con Angular.",
      tools: "Spring Boot, MySQL, Angular",
    },
  ],
  projects: {
    drowsiness: {
      title: "Drowsiness Project - IoT + Deep Learning + Software",
      description:
        "Mi tesis de Ingeniería de Sistemas: VIDDS combina inteligencia artificial e IoT para detectar una posible somnolencia, alertar al conductor y reportar incidentes en tiempo real. El prototipo completo fue probado en Lambayeque, Perú.",
    },
    cima: {
      title: "CIMA Aula Virtual - Plataforma",
      description:
        "Plataforma virtual desarrollada durante la pandemia para el colegio CIMA y utilizada por sus alumnos. Lideré el trabajo frontend con Angular y React, apoyado por servicios en Flask y Express con PostgreSQL.",
    },
    jmp: {
      title: "JMPAquaculture - Monitor",
      description:
        "Mi primera aplicación para un cliente real en Brasil fue una app de monitoreo de acuicultura, desarrollada en Spring Boot y con Twilio para notificaciones en tiempo real. La primera versión fue en Java con JSP.",
    },
  },
  projectsUi: {
    imageAlt: "Proyecto de Prophet Code",
    preview: "Vista previa",
    comingSoon: "Próximamente",
    caseStudy: "Ver caso de estudio",
  },
  caseStudyUi: {
    eyebrow: "Caso de estudio",
    backToProjects: "Volver a proyectos",
    technologies: "Tecnologías",
    contents: "En esta página",
    resources: "Recursos del proyecto",
    repositories: "Repositorios",
    academicReferences: "Referencias académicas",
  },
  about: {
    introStart: "Me llamo Alexander Ávila Briones, soy Ingeniero de Sistemas y ",
    role: "Senior Full Stack Developer / AI Engineer",
    introMiddle: ". Cuento con experiencia en ",
    specialties: "arquitectura de software, IA aplicada, desarrollo backend, cloud y frontend",
    introEnd: ", creando soluciones modernas y escalables para generar impacto real en los negocios.",
    backgroundStart: "He trabajado con equipos y clientes de ",
    countries: "Perú, España, Costa Rica, Brasil y México",
    backgroundMiddle:
      ", participando en proyectos para banca, educación, seguros y sistemas financieros. Cuento con amplia experiencia en ",
    angular: "Angular",
    backgroundEnd: ", tecnología sobre la cual dicto conferencias, cursos y contenido técnico.",
    certificationsStart: "Poseo las certificaciones ",
    ocp: "OCP Java SE 17",
    certificationsMiddle: " y ",
    aws: "AWS Certified Developer",
    certificationsEnd:
      ", fortaleciendo mi perfil como desarrollador backend y especialista en soluciones cloud.",
    contentStart: "Además, me dedico a crear contenido sobre programación. He dictado cursos en plataformas como ",
    edteam: "EDteam",
    contentMiddle: " y en mi canal ",
    prophetCode: "Prophet Code",
    contentEnd:
      ", donde comparto conocimientos y herramientas para desarrolladores, con el objetivo de inspirar y educar a la comunidad tecnológica.",
  },
  footer: {
    rights: "Casi todos los derechos reservados",
    about: "Sobre mí",
    contact: "Contacto",
  },
}

export const translations: Record<Locale, Translation> = { en, es }

export const getTranslations = (locale: Locale): Translation => translations[locale]

export const getLocalePath = (locale: Locale): string => (locale === "en" ? "/" : "/es/")
