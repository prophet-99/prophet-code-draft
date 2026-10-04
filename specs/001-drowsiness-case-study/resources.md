# Github Repos
https://github.com/prophet-99/drowsiness-app-vidds (Core de python embebida en la Raspberry Pi 4)
https://github.com/prophet-99/drowsiness-app-backend (Backend)
https://github.com/prophet-99/drowsiness-app-frontend (Frontend)

# Thesis reference
https://repositorio.unprg.edu.pe/handle/20.500.12893/12952 (TESIS REFERENCE)

# Study Case Summary
This is the expanded source narrative. I’ll use it to refine the spec, while keeping the spec itself focused on what the portfolio must communicate rather than implementation detail.
VIDDS — Full Case-Study Narrative
A thesis built around a real safety problem
The Drowsiness Project was developed as a thesis project that supported Alexander Ávila’s Systems Engineering degree with an AI focus. Its purpose was to address a real road-safety problem in Lambayeque, Peru: driver drowsiness can impair neurocognitive functions, reduce reaction capacity, and increase the likelihood of traffic accidents.
The project was conceived in 2024, when integrated drowsiness-assistance capabilities were already becoming common in parts of the European automotive market but were not yet broadly accessible in the local Latin American context. The goal was not merely to identify whether a driver’s eyes were closed; it was to build and evaluate a connected system that could detect a possible drowsiness event, alert the driver, record the incident, and make the event visible through a real-time monitoring platform.
That work resulted in VIDDS: the Very Intelligent Drowsiness Detection System. VIDDS is both an AI and IoT prototype: it combines facial analysis, embedded computing, physical hardware, location tracking, alerts, backend services, data persistence, and a monitoring dashboard.
The detection principle: Eye Aspect Ratio
The core of the project is the Eye Aspect Ratio (EAR), a scalar that estimates how open an eye is from facial landmark coordinates. The foundational reference is Real-Time Eye Blink Detection using Facial Landmarks by Tereza Soukupová and Jan Čech (2016). Their work defines EAR from six eye landmarks and explains that the value is mostly stable while the eye is open and approaches zero as the eye closes. Soukupová & Čech, 2016
\[
EAR = \frac{\lVert p_2 - p_6 \rVert_2 + \lVert p_3 - p_5 \rVert_2}{2\lVert p_1 - p_4 \rVert_2}
\]
In this formula, \(p_1\) through \(p_6\) are the detected two-dimensional points around one eye. The numerator measures the vertical distances between eyelids, while the denominator measures the horizontal eye width. A lower result indicates that the eye is more closed.
For VIDDS, this mathematical signal became the basis for detecting a drowsiness incidence. The prototype interprets its configured zero-state condition as a driver-drowsiness event, triggers an audible alarm, and sends the location of the event to the platform. The project should present this as its applied detection rule, rather than as a universal or clinical diagnosis of drowsiness.
From face tracking to a safety event
The detection flow begins with MediaPipe FaceMesh, which tracks the driver’s face and identifies the landmarks needed to observe the eye region. The MediaPipe-Face-Mesh.gif asset belongs precisely in this part of the story: it should visually explain the facial-tracking stage before the project introduces the EAR calculation.
The embedded program continuously evaluates the eye state. When the configured EAR condition indicates that the driver may be falling asleep, VIDDS performs two immediate actions:
1. It emits an audible warning through the prototype speaker to prompt the driver to wake up. During field testing, the alert sounded for approximately three to four seconds.
2. It retrieves the current location through the GPS module and sends the incident information to the backend through the device-to-platform API flow.
This turns the system into more than a local alarm. A detected event becomes a traceable safety incident that can be reviewed through the monitoring platform.
The VIDDS robotic prototype
The detection logic runs inside a physical prototype built around a Raspberry Pi 4B. Together with the remaining components, the Raspberry Pi forms the VIDDS device installed inside the vehicle during testing.
The prototype includes:
- A Neo GPS module to obtain location data.
- A DFPlayer Mini to support the audio-alert workflow.
- A Raspberry Pi Noir Camera v2 for facial capture.
- An external battery for portable operation.
- An audio speaker for drowsiness warnings.
- Infrared LED lights to support operation in low-light or dark conditions.
The hardware-components image should accompany this explanation, helping visitors understand that VIDDS is not only a dashboard or a model running on a laptop. It is an integrated physical system designed to operate inside a vehicle. The prototype image should follow, presenting the complete assembled VIDDS device.
The platform: incident visibility in real time
The VIDDS platform connects the prototype with a monitoring experience. It includes user access, user administration, vehicle association, and a map-based dashboard. Each user can be associated with a vehicle equipped with VIDDS, allowing each detected event to be contextualized.
When an incidence is reported, the monitoring dashboard presents information such as:
- The location of the event on an interactive map.
- The incident date.
- The resolved address.
- The user associated with the device.
- The vehicle associated with the user.
- A call-for-assistance action.
The platform also stores the incident information in MongoDB, making the data available for later consultation. The frontend-tracker video belongs near the end of the narrative because it demonstrates this operational value: the user can see the incident appear on the map in real time while the driver is being alerted inside the vehicle.
Field validation in a real vehicle
VIDDS was evaluated through field testing in a real car. A participant simulated both normal driving conditions and drowsiness conditions while the prototype and monitoring interface were observed from a laptop.
The validation considered several conditions intended to challenge the detection flow:
- Different lighting environments.
- Head accessories.
- Glasses and no glasses.
- Simulated states of falling asleep and being asleep.
During a detected event, the prototype emitted the warning sound and the dashboard registered the incident. The monitoring interface then displayed where the event occurred, who was using the system, and the associated vehicle information.
The BIDDS-Demo media should support this field-validation section because it represents the physical test of the prototype in the vehicle. The case study should make clear that the project was evaluated beyond a controlled desktop demonstration: it connected an actual driver scenario, a physical prototype, location data, alerts, and a monitoring interface.
Engineering quality and operational confidence
The project also included quality practices across the platform:
- Backend automated testing with JUnit and Mockito.
- Backend observability through Prometheus and Grafana.
- Frontend unit testing with Jest.
- Map-interactivity evaluation with Lighthouse and custom measurements.
- Performance attention intended to avoid freezing the interface while displaying or updating map information.
These details reinforce the engineering story behind VIDDS. The project was not limited to an AI experiment; it included the work needed to make the prototype observable, testable, and usable as part of a broader software system.
Recommended media narrative
1. Showcase — The home-page project image and opening image for the Drowsiness case study.
2. Problem and thesis context — Introduce driver drowsiness, Lambayeque, Peru, and the motivation to reduce preventable accidents.
3. EAR foundation — Explain the Eye Aspect Ratio and display the formula with the verified Soukupová and Čech citation.
4. Face tracking — Display MediaPipe-Face-Mesh.gif while explaining FaceMesh and landmark tracking.
5. VIDDS hardware — Show the components image, then the complete VIDDS prototype.
6. Incident flow — Explain the detection condition, audio alert, GPS capture, backend communication, data storage, and real-time dashboard.
7. Field validation — Show the field-test demonstration media and explain lighting, accessories, glasses, and simulated drowsiness conditions.
8. Monitoring experience — Present the frontend-tracker video and explain the map, event metadata, vehicle association, and assistance action.
9. Conclusion — Close with the mixed demonstration video as the end-to-end representation of VIDDS.
Project resources
- VIDDS embedded Python core
- VIDDS backend
- VIDDS frontend
- Thesis reference — Universidad Nacional Pedro Ruiz Gallo
The EAR citation and formula are supported by the original Soukupová and Čech paper.