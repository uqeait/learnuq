window.addEventListener('load', function(){
    const faqData = [
      {
        id: 1,
        question: "What is the main goal of ENGG1100?",
        answer:
          "To introduce first-year engineering students to the community of engineering practice and provide them with the tools and skills necessary for success in their undergraduate and postgraduate studies, research environments, and in industry.",
        category: "Introduction/Overview",
      },
      {
        id: 2,
        question:
          "What are the core engineering competencies that students will develop in ENGG1100?",
        answer:
          "Recognizing and acknowledging one's knowledge and skill base; applying engineering principles to solution development; and developing professional and personal attributes related to self-management and communication.",
        category: "Introduction/Overview",
      },
      {
        id: 3,
        question:
          "What type of project will students participate in during the course?",
        answer:
          "Team-based multidisciplinary design project to develop physical prototypes in response to an engineering problem.",
        category: "Introduction/Overview",
      },
      {
        id: 4,
        question: "How will students be supported during the project?",
        answer:
          "Students will work in teams, supported by academic staff and tutors, and will go through a series of project based learning (PBL) sessions, seminars, and two practicals that will guide them through the stages of the project and help them develop a professional engineering mindset.",
        category: "Introduction/Overview",
      },
      {
        id: 5,
        question:
          "How is the course designed to help students with their career planning?",
        answer:
          "The course aims to provide insight into industry practices to help students plan their career after graduation and think like professional engineers.",
        category: "Introduction/Overview",
      },
      {
        id: 6,
        question:
          "How will the course help students develop enterprise skills?",
        answer:
          "By developing skills in self-management, communication, and teamwork through the multidisciplinary project.",
        category: "Introduction/Overview",
      },
      {
        id: 7,
        question:
          "How many hours per week are students required to attend PBL class during weeks 1-9?",
        answer: "Two (2) hours.",
        category: "Problem Based Learning (PBL)",
      },
      {
        id: 8,
        question: "How many modules does PBL consist of?",
        answer: "Seven (7).",
        category: "Problem Based Learning (PBL)",
      },
      {
        id: 9,
        question: 'When is the "in class progress reporting" scheduled for?',
        answer: "Week 9 (including Mid-Sem break see course plan).",
        category: "Problem Based Learning (PBL)",
      },
      {
        id: 10,
        question: "Where can the PBL modules be accessed?",
        answer:
          "Blackboard under the link on the left hand side menu <strong>ENGG1100 Self-Directed Learning - UQ Extend</strong> or under <strong>Learning Resources</strong> > <strong>UQ Extend course content</strong>.",
        category: "Problem Based Learning (PBL)",
      },
      {
        id: 11,
        question:
          "What type of activities are included in the PBL modules as preparation for the class?",
        answer:
          "Short videos, learning materials, knowledge check questions and in-class & portfolio activities.",
        category: "Problem Based Learning (PBL)",
      },
      {
        id: 12,
        question:
          "Is it recommended to complete the preparation activities before attending the PBL sessions?",
        answer: "Yes, Strongly Recommended.",
        category: "Problem Based Learning (PBL)",
      },
      {
        id: 13,
        question: "Are there any assignments related to PBL sessions?",
        answer:
          "Yes, students are required to complete an Engagement Portfolio for the PBL related tasks.",
        category: "Problem Based Learning (PBL)",
      },
      {
        id: 14,
        question: "What type of class is PBL?",
        answer: "In-person for internal-mode students.",
        category: "Problem Based Learning (PBL)",
      },
      {
        id: 15,
        question: "What should I do if I cannot attend my PBL session?",
        answer:
          "Inform your team and project leader and discuss catch-up options with them.",
        category: "Problem Based Learning (PBL)",
      },
      {
        id: 16,
        question:
          "How many hours per week do students need to attend Workshop class during weeks 1- 12?",
        answer: "Two hours",
        category: "Workshop (PB2 classes)",
      },
      {
        id: 17,
        question: "How many weeks is Workshop class held?",
        answer: "Twelve weeks",
        category: "Workshop (PB2 classes)",
      },
      {
        id: 18,
        question: "What type of class is Workshop?",
        answer: "In-person for internal mode students",
        category: "Workshop (PB2 classes)",
      },
      {
        id: 19,
        question:
          "What are the activities that take place during Workshop classes?",
        answer:
          "Receiving information about the project, and participating in team-based activities to design, build, test, and demonstrate your project",
        category: "Workshop (PB2 classes)",
      },
      {
        id: 20,
        question: "What should I do if I cannot attend my Workshop session?",
        answer:
          "Inform your team, tutor and project leader and discuss catch-up options with them.",
        category: "Workshop (PB2 classes)",
      },
      {
        id: 21,
        question: "When do students need to attend the seminar session?",
        answer:
          "Students need to attend the seminar session they have registered for in weeks 1-9.",
        category: "Seminars",
      },
      {
        id: 22,
        question:
          "How many hours per week are students required to attend a seminar?",
        answer: "One hour",
        category: "Seminars",
      },
      {
        id: 23,
        question: "What type of class is the seminars?",
        answer:
          "In-person for internal-model students. Students are required to attend the seminar session they have registered for.",
        category: "Seminars",
      },
      {
        id: 24,
        question: "What is the main goal of the seminars?",
        answer:
          "To assist students with the technical challenges of the project and enhance engineering skills",
        category: "Seminars",
      },
      {
        id: 25,
        question: "Is it possible to attend the seminars remotely via Zoom?",
        answer:
          "No. Seminars will be recorded and made available on Blackboard after the seminar. Go to <strong>Learning Resources</strong> > <strong>Seminar Recordings</strong>. This link will take you to the Echo360 catalogue of Seminar Recordings for the current semester of ENGG1100.",
        category: "Seminars",
      },
      {
        id: 26,
        question: "Are there any assignments related to the seminars?",
        answer:
          "Yes, students are required to complete an Engagement Portfolio for the seminar-related tasks scheduled for Weeks 2-9",
        category: "Seminars",
      },
      {
        id: 27,
        question: "Will seminars be recorded?",
        answer: "Yes, seminars will be recorded.",
        category: "Seminars",
      },
      {
        id: 28,
        question: "Where will the recordings be uploaded?",
        answer:
          "The recordings will be uploaded onto the blackboard site in the Seminars folder.",
        category: "Seminars",
      },
      {
        id: 29,
        question: "Can students view the recordings?",
        answer: "Yes, the recordings will be available for students to view.",
        category: "Seminars",
      },
      {
        id: 30,
        question:
          "What should I do if I cannot attend a seminar session I've registered for?",
        answer:
          "Inform your project leader. With permission, watch the seminar recording for completion of your engagement portfolio.",
        category: "Seminars",
      },
      {
        id: 31,
        question: "How many practical sessions are required in this course?",
        answer: "Two (2)",
        category: "Practical",
      },
      {
        id: 32,
        question: "What are the objectives of the practical session?",
        answer:
          "To learn how to use workshop tools, to understand the importance of precision and accuracy in manufacturing, to learn how to customize a component to suit the project's needs and provide support for manufacturing a component of the project; to learn how to use soldering and simple PCB.",
        category: "Practical",
      },
      {
        id: 33,
        question:
          "What specific task is required during the practical session?",
        answer:
          "To manufacture a base plate (manufactured component) by drilling a specific pattern of 3.5mm holes and a 5mm central hole in an unfinished plate.",
        category: "Practical",
      },
      {
        id: 34,
        question: "Can the pattern of holes be customized or expanded?",
        answer:
          "Yes, students can choose to customize the component and expand the holes at later stages of project development.",
        category: "Practical",
      },
      {
        id: 35,
        question:
          "What kind of equipment will be used during the practical session?",
        answer: "Workshop tools.",
        category: "Practical",
      },
      {
        id: 36,
        question: "Is there any assignment related to the practical?",
        answer:
          "Yes, students are required to complete an Engagement Portfolio for the practical related task.",
        category: "Practical",
      },
      {
        id: 37,
        question:
          "Where should the manufactured component be installed on the prototype?",
        answer:
          "As long as the component is 'Recognisable on prototype', you will receive the mark for it as per the marking criteria for demo day.",
        category: "Practical",
      },
      {
        id: 38,
        question:
          "What should I do if I cannot attend the practical session I have registered for?",
        answer:
          "Inform your project leader. Discuss the possibility of attending another practical session with the mechanical workshop supervisors at UQ Innovate. With permission, you may attend another session if space is available.",
        category: "Practical",
      },
      {
        id: 39,
        question:
          "What is the purpose of the Project Plan that students will be developing in Workshop week 2?",
        answer:
          "The Project Plan serves as a roadmap for the project, outlining a clear and organized approach for achieving a specific goal or objective. It identifies the necessary and available resources and breaks down complex projects into achievable milestones achieved through manageable tasks.",
        category: "Project Plan",
      },
      {
        id: 40,
        question:
          "Where can we find the Project Plan Template and Gantt Chart Template for this assignment?",
        answer:
          "The Project Plan Template and Gantt Chart Template can be downloaded from the course BB site.",
        category: "Project Plan",
      },
      {
        id: 41,
        question: "What should we include in the Project Plan?",
        answer:
          "The Project Plan should include details about your team and goals, the strengths of each team member, and the roles that are most suitable for each person. It should also include the team's availability and plans for meetings, communication, and sharing information. Additionally, it should summarize the objectives and expected outcomes of the project.",
        category: "Project Plan",
      },
      {
        id: 42,
        question:
          "How will the Project Plan be used to track progress throughout the project?",
        answer:
          "The Project Plan will include deliverable milestones for the project, with completion dates for each. These milestones are broken down into a set of tasks, which can be used to track progress throughout the project and make adjustments as needed.",
        category: "Project Plan",
      },
      {
        id: 43,
        question:
          "What are the main concerns of the owners of Flood Safe Havens regarding safety?",
        answer:
          "The main concerns of the owners of Flood Safe Havens regarding flood safety are the ability to protect the community centre against flooding in the event of flooding and wind loading.",
        category: "Project Context",
      },
      {
        id: 44,
        question:
          "How do the remote locations of the resorts affect their ability to access network services such as SES or fire-fighting services?",
        answer:
          "The remote locations of the resorts make them self-sufficient and independent of network services such as town water supply, sewerage, and electricity, but also make it difficult to access fire-fighting services in the event of a fire.",
        category: "Project Context",
      },
      {
        id: 45,
        question:
          "What is the goal of the proof-of-concept prototype for a floating and flood-safe community centre?",
        answer:
          "The goal of the proof-of-concept prototype for a floating and flood-safe community centre is to design and develop a prototype that can be tested in the test rig located in UQ Innovate, and also provide documentation detailing the prototype solution and considerations for scaling up to a full-scale design to be used at Flood Safe Havens.",
        category: "Design Objectives",
      },
      {
        id: 46,
        question:
          "What are the main requirements for the prototype as outlined by the client's brief?",
        answer:
          "The main requirements for the prototype as outlined by the client's brief are to be able to float, stay stable during floating, able to return to its original position after the floods recedes, remotely controllable, safe for operators and those nearby, economical for the client in both initial and ongoing costs, easy for operators to use with minimal training, socially acceptable to the community, and designed with minimal impact on the environment throughout its lifecycle.",
        category: "Design Objectives",
      },
      {
        id: 47,
        question:
          "How should the prototype be able to float or increase the safety during a storm?",
        answer:
          "The prototype should be able to stay afloat during rising water levels and offer maximum stability (minimum movement) in response to wind loading and water movement. Being able to return to its original position and the power consumption during the flood are also performance criteria.",
        category: "Design Objectives",
      },
      {
        id: 48,
        question: "Is remote control a requirement for the prototype?",
        answer: "Yes, remote control is a requirement for the prototype.",
        category: "Design Objectives",
      },
      {
        id: 49,
        question:
          "How should the prototype be safe for operators and those nearby?",
        answer:
          "The prototype should be designed with safety features and be easy to operate to minimize the risk of injuries to operators and those nearby.",
        category: "Design Objectives",
      },
      {
        id: 50,
        question:
          "What are the cost considerations for the client when it comes to the prototype?",
        answer:
          "The client should consider both initial and ongoing costs when it comes to the prototype, including the cost of materials, maintenance, and energy.",
        category: "Design Objectives",
      },
      {
        id: 51,
        question:
          "How should the prototype be socially acceptable to resort occupants?",
        answer:
          "The prototype should be designed to be socially acceptable to resort occupants, for example, by minimizing noise and emissions.",
        category: "Design Objectives",
      },
      {
        id: 52,
        question:
          "What environmental considerations should be taken into account when designing the prototype?",
        answer:
          "The prototype should be designed with minimal impact on the environment throughout its lifecycle, including using environmentally friendly materials and minimizing waste and pollution.",
        category: "Design Objectives",
      },
      {
        id: 53,
        question:
          "How should the structure subsystem be designed to support the system and house system components?",
        answer:
          "The structure subsystem should provide a stable body that can support the system and house system components and allow for the safety (floating) and stability (resistance against wind loading while floating).",
        category: "Design Subsystems",
      },
      {
        id: 54,
        question:
          "How should the drive subsystem be designed to allow for movement of the vehicle to the location of the flood threat?",
        answer:
          "The drive subsystem should provide the means for moving the structure to its original location after displacement by floods and/or wind at a stable and controllable speed.",
        category: "Design Subsystems",
      },
      {
        id: 55,
        question:
          "How should the power and control subsystem be designed to control and power the vehicle components and their functions?",
        answer:
          "The power and control subsystem should provide the means for controlling and powering the vehicle components and their functions. It should support the drive and fluid delivery functionality and be capable of being controlled autonomously, semi-autonomously, or manually. It should also allow operators to control the vehicle remotely, using either wired or wireless control solutions.",
        category: "Design Subsystems",
      },
      {
        id: 56,
        question:
          "What are the dimensional constraints for the design of the unmanned floating community centre prototype?",
        answer:
          "The maximum fully assembled length is 300 mm, the maximum fully assembled width is 300 mm, and the maximum fully assembled height is 210 mm.",
        category: "Design Constraints",
      },
      {
        id: 57,
        question: "What is the maximum total mass allowed for the prototype?",
        answer:
          "There is no weight restriction. What determines the weight and material choice of the prototype is the requiement that it needs to float in water.",
        category: "Design Constraints",
      },
      {
        id: 58,
        question:
          "Are the drive and structure subsystems required to be contained within the dimensional constraints of the vehicle before deployment and during retrieval?",
        answer:
          "Yes, the drive and structure subsystems must be contained within the dimensional constraints of the prototype before deployment and during retrieval.",
        category: "Design Constraints",
      },
      {
        id: 59,
        question:
          "Can the batteries and remote-control components of the control and power subsystem be located outside the vehicle, and are they subject to the dimensional and total mass constraints?",
        answer:
          "Cabling, batteries, and any remote-control components of the control and power subsystem can be located outside the prototype and therefore not subject to its dimensional constraints.",
        category: "Design Constraints",
      },
      {
        id: 60,
        question:
          "What is the voltage rating required for the batteries used in the prototype?",
        answer:
          "All power will be supplied by the on board power unit provided. This will be 12V at a maximum of 2A. The total power provided will be 150mAh.",
        category: "Design Constraints",
      },
      {
        id: 61,
        question:
          "Can the prototype be controlled through manual, wired or wireless remote control, or autonomous control?",
        answer:
          "The control philosophy for the vehicle can involve the use of a fully or semi-autonomous wired or wireless remote control, or manual control.",
        category: "Design Constraints",
      },
      {
        id: 62,
        question:
          "Will we lose marks for having our vehicle wired to a remote or laptop instead of being wireless?",
        answer:
          "No, a wired connection is fine. The system needs only to be 'remotely' controlled, which means no direct on-board operator. Wired control is perfectly acceptable.",
        category: "Design Constraints",
      },
      {
        id: 63,
        question:
          "Is there a requirement for a tag locator plate on the prototype?",
        answer: "Yes, the prototype must include a tag locator plate.",
        category: "Design Constraints",
      },
      {
        id: 64,
        question: "Where will the demonstration of the prototype take place?",
        answer:
          "The demonstration of the prototype will take place on a test rig located within UQ Innovate in the Mansergh Shaw Building (45) at the St Lucia campus.",
        category: "Design Constraints",
      },
      {
        id: 65,
        question: "What is the size of the test space on the rig?",
        answer:
          "The test space is roughly 900 mm by 600 mm (see project brief for detail).",
        category: "Design Constraints",
      },
      {
        id: 66,
        question:
          "What materials are we responsible for providing for our proof-of-concept prototype?",
        answer:
          "The team is responsible for providing all materials needed for their proof-of-concept prototype, with the exception of the manufactured component (unique identifier plate) made during Practical.",
        category: "Design Constraints",
      },
      {
        id: 67,
        question: "What is the budget for the prototype?",
        answer: "The budget for the prototype is capped at $250.",
        category: "Cost Considerations",
      },
      {
        id: 68,
        question:
          "Is the final prototype allowed to cost more than $250 to produce?",
        answer:
          "If a team chooses to spend more than the $250 budget, it will impact their performance during the demonstration day. Please refer to the marking criteria for the Demo Day to understand how this will affect the team's performance.",
        category: "Cost Considerations",
      },
      {
        id: 69,
        question: "What should be included in the formal budget report?",
        answer:
          "The formal budget report should include receipts, invoices, and estimates of replacement costs for materials that are recycled or reused, and all items used on the final prototype must be included in the formal budget report, including items supplied such as the manufactured component.",
        category: "Cost Considerations",
      },
      {
        id: 70,
        question:
          "How should the cost of materials for the prototype be divided among the team members?",
        answer:
          "The cost of materials for the prototype should be evenly shared among the team members.",
        category: "Cost Considerations",
      },
      {
        id: 71,
        question:
          "Will the University of Queensland reimburse the cost of materials for the prototype?",
        answer:
          "No, the University of Queensland will not reimburse the cost of materials for the prototype.",
        category: "Cost Considerations",
      },
      {
        id: 72,
        question: "How much does each unique identifier plate cost?",
        answer: "Each unique identifier plate is estimated to cost $5.",
        category: "Cost Considerations",
      },
      {
        id: 73,
        question:
          "Do I need to provide any evidence of the breakdown of the final prototype cost?",
        answer:
          "Yes, a formal budget report with evidence of the breakdown of the final prototype cost must be provided at the demonstration.",
        category: "Cost Considerations",
      },
      {
        id: 74,
        question:
          "Will all items used on the final prototype be included in the formal budget report?",
        answer:
          "Yes, all items used on the final prototype must be included in the formal budget report.",
        category: "Cost Considerations",
      },
      {
        id: 75,
        question:
          "Are laptops or iPhones part of the control system of the prototype and if so, how are their costs calculated for the formal budget report?",
        answer:
          "Laptops or iPhones may be used as part of the control system for the prototype. If so, the cost of these items for the formal budget report would be the cost of hiring them for the day of the demonstration, rather than their actual value.",
        category: "Cost Considerations",
      },
      {
        id: 76,
        question:
          "Can recycled or used materials be used as part of the prototype design? If so, how should their cost be included in the formal budget report?",
        answer:
          "Yes, recycled or used materials can be used as part of the prototype design. If these materials have not been purchased, they still need to be included in the formal budget report. It is recommended that the cost of these items is estimated based on their current condition, age, appearance, and functionality. This will give a fair representation of the cost of using these materials in the prototype.",
        category: "Cost Considerations",
      },
      {
        id: 77,
        question:
          "If I buy a pack of 100 screws for $20 but use only 2 screws on my final prototype, how much should I include as the cost of screws in our project budget?",
        answer:
          "You only consider the cost of the materials used on your final prototype. This means you only include the cost of 2 screws which will be 40 cents.",
        category: "Cost Considerations",
      },
      {
        id: 78,
        question:
          "What is the deadline for submitting our prototype and ancillary equipment?",
        answer:
          "The deadline for submitting the prototype and ancillary equipment is Monday in Week 13, from 9 am to 11 am at UQ Innovate.",
        category: "Prototype Submission",
      },
      {
        id: 79,
        question:
          "Do we need to submit our laptops or phones that we use to control the prototype?",
        answer:
          "No, laptops or phones used to control the prototype should not be included in the submission.",
        category: "Prototype Submission",
      },
      {
        id: 80,
        question: "Do we need to include batteries in the submission?",
        answer:
          "No, Fully charged batteries will be provided during the demonstration.",
        category: "Prototype Submission",
      },
      {
        id: 81,
        question: "What should we expect during the submission process?",
        answer:
          "During the submission process, the box should be open and its contents will be checked for safety. Once all items have been checked, the box will be sealed and carefully stored until the demonstration time.",
        category: "Prototype Submission",
      },
      {
        id: 82,
        question: "How should we label our box for submission?",
        answer:
          "The box should be labelled with the team's name and the day/time of the demonstration.",
        category: "Prototype Submission",
      },
      {
        id: 83,
        question:
          "What should we consider when selecting a box for submission?",
        answer:
          "The box should be robust and have sufficient capacity to not constrict the prototype or allow too much movement during transportation. It should be able to be closed and not remain open after the submission process.",
        category: "Prototype Submission",
      },
      {
        id: 84,
        question: "When is the demonstration for the prototype taking place?",
        answer:
          "The demonstration for the prototype will take place in Week 13.",
        category: "Prototype Demonstration",
      },
      {
        id: 85,
        question: "Where is the demonstration taking place?",
        answer:
          "The demonstration will take place on the test rig in UQ Innovate in the Mansergh Shaw Building (45).",
        category: "Prototype Demonstration",
      },
      {
        id: 86,
        question: "What are the available time slots for the demonstration?",
        answer:
          "The available time slots for the demonstration are dependent on the team's availability from Monday to Thursday of Week 13.",
        category: "Prototype Demonstration",
      },
      {
        id: 87,
        question: "How long is each time slot for team’s demonstration?",
        answer: "Each time slot is 30 minutes.",
        category: "Prototype Demonstration",
      },
      {
        id: 88,
        question: "How do we book a time slot for the demonstration?",
        answer:
          "Closer to the date, you will be able to book a time slot for the demonstration.",
        category: "Prototype Demonstration",
      },
      {
        id: 89,
        question:
          "Is attendance at the demonstration mandatory for all team members?",
        answer:
          "Yes, attendance at the demonstration in Week 13 is compulsory for every team member.",
        category: "Prototype Demonstration",
      },
      {
        id: 90,
        question: "What should we bring to the demonstration?",
        answer:
          "You should collect the box of your prototype from the registration desk as you arrive for your demonstration session. You need to bring your laptops or phones if you will use them to control the prototype.",
        category: "Prototype Demonstration",
      },
      {
        id: 91,
        question: "What should we expect when we arrive at the demonstration?",
        answer:
          "When you arrive at the registration desk in UQ Innovate, your attendance and compliance with appropriate personal protective equipment (PPE) will be checked. During the demonstration, you will need to follow all safety guidelines and directions from the teaching staff.",
        category: "Prototype Demonstration",
      },
      {
        id: 92,
        question:
          "How long is the oral presentation portion of the prototype demonstration?",
        answer:
          "The design presentation portion of the prototype demonstration is 5 minutes.",
        category: "Prototype Demonstration",
      },
      {
        id: 93,
        question:
          "How much time is given for preparing the prototype before testing?",
        answer:
          "3 minutes is given for preparing the prototype before testing.",
        category: "Prototype Demonstration",
      },
      {
        id: 94,
        question: "How long does the performance testing last?",
        answer: "The performance testing lasts for no more than 5 minutes.",
        category: "Prototype Demonstration",
      },
      {
        id: 95,
        question: "What is recorded during the performance testing?",
        answer:
          "During performance testing, the floating ability, the stability, the maneuverability and return to position ability are recorded.",
        category: "Prototype Demonstration",
      },
      {
        id: 96,
        question: "What happens after the performance testing is completed?",
        answer:
          "After the performance testing is completed, the team gathers all parts of the prototype, returns borrowed items, and moves to the debrief area for discussion and review of preliminary marks.",
        category: "Prototype Demonstration",
      },
      {
        id: 97,
        question: "What is expected after the debrief?",
        answer:
          "After the debrief, the team is expected to leave the demonstration area with all equipment and materials, and any rubbish left behind may affect the final marks for the demonstration.",
        category: "Prototype Demonstration",
      },
      {
        id: 98,
        question:
          "Is there a penalty for interrupting the operation of the prototype?",
        answer:
          "Touching and disrupting the operation of the prototype incurs a penalty per interruption. Interventions, such as fixing issues while the prototype is on the testing rig, will result in the loss of points. See the marking criteria in the Learning Guide on Blackboard under <strong>Learning Resources</strong> > <strong>Course Documents</strong> > <strong>ENGG1100 Learning Guide</strong>.",
        category: "Prototype Demonstration",
      },
      {
        id: 99,
        question:
          "What should we do if the prototype cannot pass the dimension check?",
        answer:
          "You need to ensure that the prototype dimension design allows for appropriate tolerances. If the prototype fails to do so, it cannot be operated on the test rig unless the issue is resolved within the demonstration time frame.",
        category: "Prototype Demonstration",
      },
      {
        id: 100,
        question:
          "Is it allowed to use a string attached to the back of the prototype to remove the prototype through the test rig gate at the end of the demonstration for time-saving purposes?",
        answer:
          "Yes, you can pull the prototype out using a string attached to the back, but this will result in a one-minute penalty.",
        category: "Prototype Demonstration",
      },
      {
        id: 101,
        question:
          "Is it allowed to use the prototype electrical wires to bring the prototype back to its position tat the end of the demonstration?",
        answer:
          "No, using the prototype electrical cables for repositioning the prototype in test rig is not permitted.",
        category: "Prototype Demonstration",
      },
      {
        id: 102,
        question:
          "What are the safety requirements that team members must follow during this project?",
        answer:
          "Team members must complete required UQ Innovate safety inductions, wear necessary personal protective equipment (PPE), and be cautious when working with materials and equipment.",
        category: "General Safety Requirements",
      },
      {
        id: 103,
        question: "How can team members access the UQ Innovate workshops?",
        answer:
          'Team members must complete the required inductions available on Blackboard under the "UQ Innovate Area Inductions" section.',
        category: "General Safety Requirements",
      },
      {
        id: 104,
        question:
          "What happens if team members work on prototypes outside of the designated areas?",
        answer:
          "Working on prototypes outside of these designated areas will result in the confiscation of materials and equipment until a booking can be made to resume work safely in the UQ Innovate workspace.",
        category: "General Safety Requirements",
      },
      {
        id: 105,
        question: "Where may prototype subsystems and components be tested?",
        answer:
          "Prototype subsystems and components may only be tested in the UQ Innovate workspace, and not in the First Year Engineering Learning Centre, outside, or other rooms on campus.",
        category: "General Safety Requirements",
      },
      {
        id: 106,
        question:
          "What personal protective equipment (PPE) must be worn when working in the UQ Innovate workspace?",
        answer:
          "When working in the UQ Innovate workspace, team members must always wear the following PPE: enclosed shoes, safety glasses, and work gloves (if necessary).",
        category: "General Safety Requirements",
      },
      {
        id: 107,
        question: "Can we use UQ Innovate during the mid-sem break?",
        answer:
          "Yes, you can use UQ Innovate during the mid-sem break if you need to use the bench space. To gain access, you will need to swipe your student card at the gate and enter UQ Innovate. If your inductions and safety are all up to date, the door will open, and you are free to use the work benches as you need, as well as the test rig, but with the heat sources off.",
        category: "General Safety Requirements",
      },
      {
        id: 108,
        question: "Why is it important to handle batteries correctly?",
        answer:
          "Batteries contain a large amount of energy, which can be safely and effectively used to power devices when handled correctly. However, if mistreated, batteries can release this energy rapidly as heat, which can cause fires and explosions.",
        category: "Battery Safety Requirements",
      },
      {
        id: 109,
        question:
          "What kind of batteries are not allowed to use for prototype design?",
        answer:
          "Due to the nature of lithium battery failures, you are NOT allowed to use them for your prototype design.",
        category: "Battery Safety Requirements",
      },
      {
        id: 110,
        question:
          "Why is it prohibited to use lithium batteries for prototype design?",
        answer:
          "The reason is that lithium batteries can be dangerous if they are mistreated, they can release energy rapidly as heat, which can cause fires and explosions. Therefore, lithium batteries are not permitted while you are learning about batteries until later in your degree.",
        category: "Battery Safety Requirements",
      },
      {
        id: 111,
        question: "What are the potential hazards of using lithium batteries?",
        answer:
          "The potential hazards of using lithium batteries are fires and explosions if they are mistreated.",
        category: "Battery Safety Requirements",
      },
      {
        id: 112,
        question:
          "Are there any alternatives for lithium batteries for prototype design?",
        answer:
          "Yes, there are many different battery chemistries. You should check with the instructor or supervisor for alternative battery options that are allowed. When you first power your project or after modification, you are advised to use a current limited power supply. These are available for use in the UQ Innovate Electronics lab, along with help in using them. Comparison and analysis of different solutions is all part of the engineering process.",
        category: "Battery Safety Requirements",
      },
      {
        id: 113,
        question: "What should you wear when working with batteries?",
        answer: "Safety glasses should be worn when working with batteries.",
        category: "Battery Safety Requirements",
      },
      {
        id: 114,
        question: "Should opposite battery terminals ever be connected?",
        answer:
          "No. Positive and negative terminals on a battery should never be connected to each other. This is also commonly termed short-circuiting or ‘shorting’ causing arcing. This can lead to overheating of a battery that could result in permanent damage, fire and explosion.",
        category: "Battery Safety Requirements",
      },
      {
        id: 115,
        question: "Should batteries get wet?",
        answer:
          "Never get a battery wet (this includes licking it) and keep electronic components away from water.",
        category: "Battery Safety Requirements",
      },
      {
        id: 116,
        question: "Where should you keep batteries?",
        answer:
          "Do not keep batteries in your pockets, it can be difficult to remove them if they catch fire or leak corrosive acid. Always remove batteries from their holders or prototype when transporting them.",
        category: "Battery Safety Requirements",
      },
      {
        id: 117,
        question:
          "What should be done with exposed wires while batteries are connected?",
        answer:
          "Do not leave wires exposed while batteries are connected. Use a connector to cover exposed terminals or remove batteries.",
        category: "Battery Safety Requirements",
      },
      {
        id: 118,
        question: "Can different types of batteries be mixed?",
        answer:
          "Never mix battery chemistries (e.g. NiMH with Alkaline) or use batteries of different case sizing (e.g. AA’s with AAA’s), charge capacity (e.g. 1200 mAH with 2000 mAH) or with different levels of charge (e.g. almost flat with fully charged). Batteries can heat because of different internal resistance between batteries. All the above situations create different internal resistance from the battery to battery.",
        category: "Battery Safety Requirements",
      },
      {
        id: 119,
        question: "What should be done if a battery is damaged?",
        answer:
          "If you suspect that a battery has been damaged or shorted, do not attempt to reuse it. Dispose of it in an e-waste bin rather than a general waste bin. E-waste bins are available in the UQ Innovate workshops.",
        category: "Battery Safety Requirements",
      },
      {
        id: 120,
        question:
          "What should be done if an incident occurs involving a battery, power supply, or electronic component?",
        answer:
          "If an incident occurs involving a battery, power supply, or electronic component, immediately notify UQ Innovate staff.",
        category: "Battery Safety Requirements",
      },
      {
        id: 121,
        question:
          "Can I leave batteries installed during transport or when not in use?",
        answer:
          "No. Batteries should always be removed and stored safely ensuring their terminals cannot short when not in use. Best practice is to insulate at least one terminal with tape or similar during transport or storage.",
        category: "Battery Safety Requirements",
      },
      {
        id: 122,
        question: "Where can you go for help with battery safety?",
        answer:
          "If you have any questions or concerns about the safety points listed above, you can attend the UQ Innovate Electronics Laboratory located on Level 1, Rm 103 of the Mansergh Shaw Building (45).",
        category: "Battery Safety Requirements",
      },
      {
        id: 123,
        question: "What are XT30 battery connectors?",
        answer:
          "XT30 battery connectors are a type of connector commonly used in small-scale electronic projects to connect batteries to devices.",
        category: "Battery Safety Requirements",
      },
      {
        id: 124,
        question: "Why should you use XT30 battery connectors?",
        answer:
          "XT30 battery connectors should be used to avoid shorting the battery wires and potential acid release or fire. Limited XT30 are available from your tutors and UQ Innovate Electronics Lab.",
        category: "Battery Safety Requirements",
      },
      {
        id: 125,
        question:
          "How do XT30 battery connectors prevent shorting and acid release/fire?",
        answer:
          "XT30 battery connectors prevent shorting and acid release/fire by providing a secure and reliable connection between the battery and device, which reduces the risk of accidental contact between the battery's positive and negative terminals.",
        category: "Battery Safety Requirements",
      },
      {
        id: 126,
        question:
          "Are there any other benefits of using XT30 battery connectors?",
        answer:
          "Yes, XT30 battery connectors also provide a quick and easy way to connect and disconnect batteries from devices, which can be useful for testing and swapping out batteries.",
        category: "Battery Safety Requirements",
      },
      {
        id: 127,
        question: "Can you use other types of connectors instead of XT30?",
        answer:
          "Other types of connectors may also be used, but XT30 connectors are commonly recommended for small-scale electronic projects because of their durability and secure connection. Check with your tutor or a UQ Innovate Electronics staff member if your proposed connector is safe.",
        category: "Battery Safety Requirements",
      },
      {
        id: 128,
        question: "What can be 3D printed by UQ Innovate?",
        answer:
          "Not everything can be 3D printed by UQ Innovate, designs need to follow the guidelines and requirements set by UQ Innovate and be approved before printing.",
        category: "3D Printing",
      },
      {
        id: 129,
        question:
          "What is the process for submitting a 3D design to UQ Innovate for printing?",
        answer:
          "The process for submitting a 3D design to UQ Innovate for printing includes consulting with UQ Innovate to review the design, submitting the design for review via the online job submission portal, and making any necessary changes as per feedback from UQ Innovate.",
        category: "3D Printing",
      },
      {
        id: 130,
        question:
          "What are some factors that may cause UQ Innovate to reject a 3D design?",
        answer:
          "UQ Innovate may reject designs due to factors such as incorrect scale, complexity, process time, material requirements, material waste, thin walls, or excessive undercuts.",
        category: "3D Printing",
      },
      {
        id: 131,
        question:
          "What should be considered before submitting a 3D design to UQ Innovate for printing?",
        answer:
          "Before submitting a 3D design to UQ Innovate for printing, designers should consider the material and time required for the design, and ensure that it meets the guidelines and requirements set by UQ Innovate.",
        category: "3D Printing",
      },
      {
        id: 132,
        question:
          "What should be done if a 3D design is not approved by UQ Innovate?",
        answer:
          "If a 3D design is not approved by UQ Innovate, designers should follow the feedback provided by UQ Innovate and make the necessary changes before resubmitting the design for review.",
        category: "3D Printing",
      },
      {
        id: 133,
        question:
          "How do designers get feedback on their 3D designs from UQ Innovate?",
        answer:
          "Designers can get feedback on their 3D designs from UQ Innovate by submitting their designs for review and making any necessary changes as per feedback provided by UQ Innovate.",
        category: "3D Printing",
      },
      {
        id: 134,
        question:
          "What is the most common software used by students for 3D printing parts, and is Inventor recommended for 3D printing a nozzle head specifically?",
        answer:
          "Some of the popular software packages include Autodesk Fusion 360, Inventor, SolidWorks, Tinkercad, Cura, Blender, SketchUp and OpenSCAD. In terms of designing a nozzle head specifically, Inventor is a solid choice as it is a comprehensive 3D CAD software that can be used to create detailed and accurate models.",
        category: "3D Printing",
      },
      {
        id: 135,
        question: "When can we visit UQ Innovate?",
        answer:
          "You can visit UQ Innovate once you have completed your UQ Innovate induction during weeks 1-13, including the mid-semester break.",
        category: "Prototype Manufacturing and Testing",
      },
      {
        id: 136,
        question: "What are the operating hours for UQ Innovate?",
        answer:
          "UQ Innovate operates from Monday to Friday, from 8:00 AM to 4:00 PM.",
        category: "Prototype Manufacturing and Testing",
      },
      {
        id: 137,
        question:
          "Do students need to book access to Makerspace technical facilities and Electronics Laboratory electronics facilities?",
        answer:
          "Students may be required to make a booking to access some of the Makerspace technical facilities and equipment and Electronics Laboratory electronics facilities.",
        category: "Prototype Manufacturing and Testing",
      },
      {
        id: 138,
        question:
          "When will there be an opportunity to test prototypes or subsystems on the test rig located in UQ Innovate?",
        answer:
          "The opportunity to test prototypes or subsystems on the test rig located in UQ Innovate is during Week 6 - Week 10. Specific times will be announced closer to week 6.",
        category: "Prototype Manufacturing and Testing",
      },
      {
        id: 139,
        question:
          "When can I test my prototype on the UQ Innovate test rig with heated targets?",
        answer:
          "You can test your prototype on the UQ Innovate test rig with heated targets in Week 11 on Wednesday, Thursday and Friday (12 - 3 pm) and Week 12 on Wednesday, Thursday and Friday (9 am - 3 pm).",
        category: "Prototype Manufacturing and Testing",
      },
      {
        id: 140,
        question:
          "Will the conditions be the same as during the demonstration session when I test my prototype variable water levels?",
        answer:
          "Yes, the conditions will be the same as during the demonstration session when you test your prototype with variable water levels.",
        category: "Prototype Manufacturing and Testing",
      },
      {
        id: 141,
        question: "How many times can I test my prototype on the test rig?",
        answer:
          "You are allowed to test your prototype multiple times on the test rig.",
        category: "Prototype Manufacturing and Testing",
      },
      {
        id: 142,
        question: "Is booking required for testing during weeks 11 and 12?",
        answer:
          "Booking may be required for testing during weeks 11 and 12, which will be facilitated by the test rig operators.",
        category: "Prototype Manufacturing and Testing",
      },
      {
        id: 143,
        question: "How long is each testing session on the test rig?",
        answer:
          "Each testing session on the test rig is limited to a maximum of 5 minutes.",
        category: "Prototype Manufacturing and Testing",
      },
      {
        id: 144,
        question:
          "Are there any safety protocols and guidelines to follow while using the test rig?",
        answer:
          "Yes, please make sure to follow all safety protocols and guidelines presented by the test rig operators while using the test rig.",
        category: "Prototype Manufacturing and Testing",
      },
      {
        id: 145,
        question:
          "When can we attend soldering training sessions at the Electronics Laboratory?",
        answer:
          "Starting from week 2, you can attend soldering training sessions at the Electronics Laboratory.",
        category: "Prototype Manufacturing and Testing",
      },
      {
        id: 146,
        question: "What is the format of the assessments for ENGG1100?",
        answer:
          "The assessments for ENGG1100 consist of an individual Concept Report, team Oral presentation, individual Engagement portfolio, team project demonstration, and team final report.",
        category: "Assessments",
      },
      {
        id: 147,
        question:
          "What is the maximum length for the main body of the individual Concept Report?",
        answer:
          "The main body of the individual Concept Report should not exceed 8 pages.",
        category: "Assessments",
      },
      {
        id: 148,
        question:
          "Will I lose marks if I go over the page limit in my concept report?",
        answer:
          "If you go over the page limit by only one page and that page contains important and useful information, you will not lose marks. However, if you go over the page limit by two or more pages, marks may be deducted in the 'Communication' section of the marking criteria.",
        category: "Assessments",
      },
      {
        id: 149,
        question:
          "Which sections of the Concept Report are we supposed to develop together as a team and can these sections be identical in our individual Concept Report?",
        answer:
          "The Prototype Function-Means Tree and Prototype Design sections of the Concept Report are designated as team work and can be presented identically in everyone's reports, while the Introduction, Design Criteria, Design Options, and Evaluate and Validate sections should be completed individually.",
        category: "Assessments",
      },
      {
        id: 150,
        question: "Is there a guide for writing the Concept Report?",
        answer:
          "Yes, the ENGG1100 Report Writing Guide (Aminossadati 2023a) can be downloaded and used.",
        category: "Assessments",
      },
      {
        id: 151,
        question: "What is the format of the team Oral presentation?",
        answer:
          "During week 8, teams will be required to attend PBL and WORKSHOP and deliver an oral presentation (5 minutes) on their preferred final option and the physical progress of their prototype to their teaching team. Attendance at PBL and WORKSHOP is mandatory and every team member is expected to contribute to the presentation.",
        category: "Assessments",
      },
      {
        id: 152,
        question:
          "What should I do if I cannot attend the PBL and WORKSHOP sessions in Week 8?",
        answer:
          "Inform your team, tutor and project leader. Follow the instructions in section 5.3 of the Electronic Course Profile.",
        category: "Assessments",
      },
      {
        id: 153,
        question: "What is the format of the individual Engagement portfolio?",
        answer:
          "You need to complete an individual Engagement portfolio using the provided template, which can be downloaded from Blackboard (Aminossadati 2023b). The reflections section of the portfolio should include your thoughts on your experience and the skills and attributes you utilized. It is recommended that you use a structured process of self-reflection called SEAL (Situation, Effect, Action, and Learning) to guide you through your experience and identify the skills and attributes you have developed (Employability 2023)",
        category: "Assessments",
      },
      {
        id: 154,
        question:
          "Which sections of the Engagement Portfolio are we supposed to develop together as a team and can these sections be identical in our individual Engagement Portfolio?",
        answer:
          "The tasks related to the PBL modules of the Engagement Portfolio are designated as team work and can be presented identically in everyone's reports, while the other sections should be completed individually.",
        category: "Assessments",
      },
      {
        id: 155,
        question: "When will the Project Demonstration take place?",
        answer:
          "The project demonstration will take place on the test rigs in UQ Innovate, with each team scheduled for a time slot of approximately 30 mins. Attendance at the Demonstration is compulsory for every team member.",
        category: "Assessments",
      },
      {
        id: 156,
        question:
          "What should I do if I cannot attend the Project Demonstration in week 13?",
        answer:
          "Inform your team, tutor and project leader. Follow the instructions in section 5.3 of the Electronic Course Profile.",
        category: "Assessments",
      },
      {
        id: 157,
        question: "What should be included in our team Final Report?",
        answer:
          "The team final report should detail the final design, fabrication, test, and demonstration processes of the project. It should also include the concept designs from which the final design was selected, the design selection approach, technical details, sustainability, and risk assessment. The main body of the report should not exceed 20 pages.",
        category: "Assessments",
      },
      {
        id: 158,
        question:
          "Will we lose marks if we go over the page limit in our team Final Report?",
        answer:
          "If you go over the page limit by only one page and that page contains important and useful information, you will not lose marks. However, if you go over the page limit by two or more pages, marks may be deducted in the 'Communication' section of the marking criteria.",
        category: "Assessments",
      },
      {
        id: 159,
        question:
          "What format should the final submission be in for Turnitin and why?",
        answer:
          "The final submission for Turnitin can be in either Word or PDF format. However, it is recommended to submit a PDF as sometimes Turnitin may alter a Word document slightly.",
        category: "Assessments",
      },
      {
        id: 160,
        question: "What is the penalty for submitting an assignment late?",
        answer:
          "For late submissions, 10% of the maximum possible mark allocated for the assessment item will be deducted per day for up to 7 calendar days, at which point any submission will not receive any marks. However, if there are medical or other acceptable reasons that will affect your ability to complete an assessment by the due date and time, you can apply for an extension or deferred examination (refer to Section 5.3 of the Electronic Course Profile).",
        category: "Assessments",
      },
      {
        id: 161,
        question: "To whom should our transmittal letter be addressed?",
        answer:
          "The School of Civil Engineering @ <span><strong>enquiries@civil.uq.edu.au</strong></span> <span class=\"badge bg-primary copyBadge\">Click to copy email address</span><br /><br /> And the course coordinator @ <strong>engg1100@uq.edu.au</strong> <span class=\"badge bg-primary copyBadge\">Click to copy email address</span>",
        category: "Assessments",
      },
      {
        id: 162,
        question:
          "What is a Peer Assessment Factor and is it compulsory in ENGG1100?",
        answer:
          "A Peer Assessment Factor (PAF) is calculated by the sum of all scores attributed to a student divided by the number of criteria multiplied by 100, and yes, it is mandatory in ENGG1100.",
        category: "Peer Assessment",
      },
      {
        id: 163,
        question:
          "When and how do I need to complete the peer assessment exercise?",
        answer:
          "You need to complete the peer assessment exercise in Week 13 and before Friday 4 pm. A link will be provided for the peer assessment exercise (PAF) on ENGG1100 Blackboard site.",
        category: "Peer Assessment",
      },
      {
        id: 164,
        question:
          "Do I need to add comments when I evaluate the contributions of myself and my team members?",
        answer:
          "Yes, you should also add comments where you vary the points by +10%. Please note that over-estimation of your own contribution and/or clique-type assessment (where students are unfairly penalized or rewarded) will be removed.",
        category: "Peer Assessment",
      },
      {
        id: 165,
        question:
          "What happens if a student inflates their self-assessment or gives biased assessments of their teammates?",
        answer:
          "Inflated self-assessment or biased assessments of teammates will be disregarded and will not be taken into consideration when calculating the individual's mark.",
        category: "Peer Assessment",
      },
      {
        id: 166,
        question: "What is a 'contributing factor'?",
        answer:
          "A 'contributing factor' is a measure of an individual's contribution to the team in a team-based assessment.",
        category: "Peer Assessment",
      },
      {
        id: 167,
        question: "How is the contributing factor determined?",
        answer:
          "The 'contributing factor' is determined based on the individual's Peer Assessment Factor (PAF), their contribution to the team, and feedback from the tutor.",
        category: "Peer Assessment",
      },
      {
        id: 168,
        question:
          "How is the individual mark for team-based assessments calculated?",
        answer:
          "The individual mark for team-based assessments is calculated based on the team's overall mark and the individual's 'contributing factor'.",
        category: "Peer Assessment",
      },
      {
        id: 169,
        question:
          "What is academic misconduct and what behaviours are considered academic misconduct?",
        answer:
          "Academic misconduct is a disciplinary offense that involves a range of unethical behaviours that are designed to give a student an unfair and unearned advantage over their peers. Examples include contract cheating, collusion, plagiarism, falsifying data, accessing examination materials without consent, impersonating another student, falsifying documents for academic advantage, or changing the work of another student in a group without their consent.",
        category: "Academic Misconduct",
      },
      {
        id: 170,
        question:
          "What is the role of the project leader in monitoring academic integrity?",
        answer:
          "The project leader is responsible for monitoring academic integrity and providing meaningful and constructive feedback to students to ensure academic standards are upheld. In cases of suspected misconduct, the project leader will consult with the course coordinator and refer the matter to the academic integrity officer for further investigation and potential disciplinary action.",
        category: "Academic Misconduct",
      },
      {
        id: 171,
        question:
          "How do you determine if plagiarism or academic misconduct has occurred in a Turnitin report?",
        answer:
          "The determination is based on both the similarity percentage and the nature of the similarity. The similarity score is typically used as a warning sign, and the entire similarity report is reviewed to assess all similar sections and the nature of the similarity. Instead of relying solely on the similarity percentage, the entire similarity report is reviewed to make a determination.",
        category: "Academic Misconduct",
      },
      {
        id: 172,
        question:
          "What is the possible outcome of an investigation into a student's submission that showed a high degree of similarity to another student's submission?",
        answer:
          "Following an investigation, it is possible that the student(s) involved in the submission of similar work may face disciplinary action from the school or university.",
        category: "Academic Misconduct",
      },
      {
        id: 173,
        question:
          "If I fail to provide adequate referencing in my report, would this be considered plagiarism and would I be reported to the integrity officer for committing academic misconduct?",
        answer:
          "Failing to provide adequate referencing in a report can be considered plagiarism, a form of academic misconduct. If you fail to provide adequate referencing in a report, your work may be flagged for plagiarism and may be subject to disciplinary action. Depending on the severity of the plagiarism, it could be reported to the academic integrity officer for further investigation and potential disciplinary action.",
        category: "Academic Misconduct",
      },
    ];
const options = {
    includeScore: true,
    keys: ['question', 'answer', 'category'],
    includeMatches: true,
    minMatchCharLength: 3,
    threshold: 0.4,
    limit: 10
  };
  
  const fuse = new Fuse(faqData, options);
  let timeout = null;
  
  document.getElementById('faqSearch').addEventListener('keyup', (e) => {
    const searchQuery = e.target.value;
    const results = fuse.search(searchQuery);
    // Send event to Google Analytics
    clearTimeout(timeout);
    timeout = setTimeout(function () {
      gtag("event", "Search", {
        event_category: "FAQ Search",
        event_label: searchQuery.toLowerCase(),
      });
    }, 500); 
    // Clear existing FAQs
    const resultsAccordion = document.getElementById("resultsAccordion");
    resultsAccordion.innerHTML = "";

    // Group results by category
    const resultsByCategory = results.reduce((acc, { item }) => {
      (acc[item.category] = acc[item.category] || []).push(item);
      return acc;
    }, {});

    // Iterate over each category and append questions
    for (const category in resultsByCategory) {
      // Limit results to top 5 for each category
      let topResults = resultsByCategory[category].slice(0, 5);
      let resultsAccName = category.replace(/\s+/g, "").replace(/\(PBL\)/g, "");

      let faqElements = topResults
        .map((faq) => {
          return `
          <div class="accordion-item">
            <h3 class="accordion-header" id="heading${faq.id}">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${faq.id}" aria-expanded="false" aria-controls="collapse${faq.id}">${faq.question}</button>
            </h3>
            <div id="collapse${faq.id}" class="accordion-collapse collapse" aria-labelledby="heading${faq.id}" data-bs-parent="#accordionfaq${resultsAccName}">
              <div class="accordion-body">
                <p>${faq.answer}</p>
              </div>
            </div>
          </div>
        `;
        })
        .join("");

      // Add the category and its questions to the FAQ accordion
      resultsAccordion.innerHTML += `
        <h3 class="text-uq my-2">${category}</h3>
        <div class="accordion" id="accordionfaq${resultsAccName}">
          ${faqElements}
        </div>
      `;
    }
    var $temp = $("<input>");
    $(".copyBadge").on("click", function () {
      var $url = $(this).prev().text();
      $("body").append($temp);
      $temp.val($url).select();
      document.execCommand("copy");
      $temp.remove();
      $(this).html(
        '<span style="color: var(--bs-bg-color) !important" class="fa fa-check"></span> Email copied'
      );
      window.setTimeout(function () {
        $(".copyBadge").text("Click to copy email address");
      }, 2000);
    });
  });
})