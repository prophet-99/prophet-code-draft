# Spec 001 — Drowsiness Case Study

## Context and objective
Enrich the Drowsiness Project portfolio entry with a complete, bilingual case study for developers and people interested in applied AI. The case study must explain the Lambayeque, Peru, road-safety problem, the impact of driver drowsiness, the project’s goal of helping prevent avoidable accidents, its real-world validation, and the resulting VIDDS (Very Intelligent Drowsiness Detection System) prototype.

This iteration has two clearly separated scopes. The Drowsiness Detection case study receives the complete narrative and all of its supplied visual media. The CIMA Classroom and JMP Aquaculture projects receive only an updated Showcase image on their home-page project cards so that every public project continues to render correctly.

The approved source narrative, media sequence, public links, formula context, and resource inventory are maintained in [resources.md](resources.md). Read that document in full before creating the implementation plan or changing the portfolio.

## Users / actors
- Developers evaluating the project’s applied AI, IoT, real-time monitoring, and quality practices.
- General portfolio visitors interested in how an AI-assisted driver-safety system works.
- The portfolio owner maintaining project resources, repository links, and thesis reference material.

## User stories
- H1: As a developer, I want to understand the problem, detection approach, field validation, and outcomes so that I can assess the project’s engineering value.
- H2: As an interested visitor, I want to follow the project story through explanatory media so that I can understand how drowsiness detection and incident reporting work.
- H3: As the portfolio owner, I want each project to use its available Showcase image so that its home-page presentation remains complete and current.

## Functional requirements (EARS acceptance criteria)
- RF-1: THE SYSTEM SHALL display the supplied Showcase image on the home-page card for each public project.
- RF-2: WHEN a visitor opens the Drowsiness Detection case study, THE SYSTEM SHALL display its supplied Showcase image as the introductory visual.
- RF-3: THE SYSTEM SHALL explain that driver drowsiness affects neurocognitive functions and contributes to road-safety risk in Lambayeque, Peru.
- RF-4: THE SYSTEM SHALL explain that VIDDS was built and evaluated to detect driver drowsiness with deep learning and IoT in order to help prevent accidents.
- RF-5: THE SYSTEM SHALL present the Eye Aspect Ratio formula as `EAR = (||p2 - p6|| + ||p3 - p5||) / (2||p1 - p4||)`.
- RF-6: THE SYSTEM SHALL credit Soukupová and Čech (2016) as the academic reference for the Eye Aspect Ratio method.
- RF-7: THE SYSTEM SHALL explain that the Eye Aspect Ratio compares distances between identified eye landmarks to determine whether the eyes indicate drowsiness.
- RF-8: WHEN the case study introduces facial tracking, THE SYSTEM SHALL display the supplied facial-tracking animation.
- RF-9: WHEN the case study introduces the physical system, THE SYSTEM SHALL display the supplied image of the VIDDS components.
- RF-10: WHEN the case study introduces the assembled system, THE SYSTEM SHALL display the supplied image of the VIDDS prototype.
- RF-11: THE SYSTEM SHALL identify the prototype capabilities for location tracking, audio alerting, low-light vision, power, and embedded computation.
- RF-12: WHEN a drowsiness incident is detected, THE SYSTEM SHALL describe the prototype’s audible alert to wake the driver.
- RF-13: WHEN a drowsiness incident is detected, THE SYSTEM SHALL describe the transmission of the driver’s current location for incident tracking.
- RF-14: THE SYSTEM SHALL explain that the monitoring experience presents an incident’s location, date, address, associated user, associated vehicle, and assistance-call action.
- RF-15: THE SYSTEM SHALL describe the field validation across lighting conditions and the presence or absence of eyewear and head accessories.
- RF-16: WHEN a field-test participant simulates drowsiness, THE SYSTEM SHALL describe the audible alert and the resulting incident appearing in the monitoring experience.
- RF-17: WHEN the case study presents the field validation, THE SYSTEM SHALL display the supplied field-test demonstration video.
- RF-18: WHEN the case study reaches its conclusion, THE SYSTEM SHALL display the supplied front-end tracking video.
- RF-19: THE SYSTEM SHALL provide a link to the project’s embedded core repository.
- RF-20: THE SYSTEM SHALL provide a link to the project’s back-end repository.
- RF-21: THE SYSTEM SHALL provide a link to the project’s front-end repository.
- RF-22: THE SYSTEM SHALL provide a link to the academic thesis reference.
- RF-23: THE SYSTEM SHALL describe the project’s testing, monitoring, and performance-validation practices.

## Non-functional requirements
- The case study, its metadata, and all media text must provide equivalent English and Spanish information.
- Every supplied image, animation, and video must have accessible media text in both languages.
- The Eye Aspect Ratio formula and its attribution must remain legible in both languages.
- Repository and thesis links must resolve to the intended public destinations.
- The case study must preserve the established portfolio visual design.

## Edge cases
- The CIMA Classroom and JMP Aquaculture projects must continue to display their supplied Showcase images on the home page without changes to their case-study narratives.
- A missing supplied Drowsiness Detection media asset must not prevent the remaining case-study content from rendering.
- A repository or thesis destination that is unavailable must not prevent the surrounding case-study content from rendering.

## Out of scope
- Expanding or rewriting the CIMA Classroom case-study narrative is out of scope.
- Expanding or rewriting the JMP Aquaculture case-study narrative is out of scope.
- Redesigning the established portfolio interface is out of scope.

## Completion criteria
- The home page uses the supplied Showcase image for every public project.
- The Drowsiness Detection case study communicates the problem, solution, facial-analysis basis, prototype behavior, monitoring experience, field validation, quality practices, media, repositories, and thesis reference in English and Spanish.
- The Drowsiness Detection case study presents its supplied media in the narrative contexts defined by this specification.
- All supplied project media and public links render or resolve without broken references.

## Open questions
- None.
