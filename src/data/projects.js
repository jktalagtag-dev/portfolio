// Tier guide (see /work/:slug dispatch in PortfolioCaseStudy.jsx):
// "flagship" -> full case study (FlagshipCaseStudy.jsx). Reads all fields.
// "concise"  -> short dedicated page (ConciseCaseStudy.jsx). Reads: title,
//               description, role, timeline, year, tech, image, objectives
//               (shown as "Key Features"), gallery (optional, "Screenshots"),
//               live, github. Does NOT read process/architecture/reflection
//               fields.
// "card"     -> no dedicated page (ProjectCard only, Home + archive).
//               Reads: title, description, tech, image, live, github.
export const projects = [
    {
        number: "01",
        slug: "guidance-management-system",
        year: "2025",
        tier: "flagship",
        title: "Guidance Management System",
        description:
        "A web-based guidance management platform developed for Forbes College, featuring appointment scheduling, student records management, and a safe-response chatbot.",
        overview:
        "Developed as our BSIT capstone project, the system was created to modernize guidance office operations and provide students with easier access to support services through a centralized digital platform.",
        overviewHeadline:
        "Building a better digital experience for students and guidance counselors.",
        process:
        "The project started with identifying common challenges faced by students and guidance staff. After gathering requirements, wireframes and user flows were created before developing the interface and integrating backend functionality using React and Laravel.",
        processSteps: [
        {
            title: "Research",
            description:
            "Understanding the needs of students and guidance counselors through requirement gathering and system analysis.",
        },
        {
            title: "Planning",
            description:
            "Defining information architecture, user flows, and system modules before moving into design.",
        },
        {
            title: "UI Design",
            description:
            "Creating clean, responsive interfaces focused on usability and accessibility.",
        },
        {
            title: "Development",
            description:
            "Building reusable React components and integrating them with Laravel APIs and MySQL.",
        },
        {
            title: "Testing",
            description:
            "Validating functionality, fixing bugs, and refining the overall user experience.",
        },
        {
            title: "Deployment",
            description:
            "Preparing the application for presentation and final capstone defense.",
        },
        ],
        challenges:
        "Designing an intuitive user experience while integrating chatbot functionality, role-based access control, appointment management, and administrative workflows within a single platform.",
        challengeList: [
        "Manual record keeping",
        "Long administrative processes",
        "Limited accessibility for students",
        "No centralized digital platform",
        ],
        objectives: [
        "Digitize Records",
        "Improve Accessibility",
        "Reduce Administrative Work",
        "Provide Chatbot Support",
        ],
        roleHeadline:
        "Turning requirements into thoughtful interfaces.",
        roleDescription:
        "As the Frontend Developer and UI Implementer, I translated project requirements into responsive interfaces, collaborated with the team to integrate frontend and backend functionality, and helped create a consistent user experience throughout the system.",
        developmentHeadline:
        "A modern web application powered by React and Laravel.",
        architecture: [
        {
            label: "Frontend",
            title: "React",
            description:
            "Reusable components, client-side routing, and responsive layouts for students, counselors, and administrators.",
        },
        {
            label: "Backend",
            title: "Laravel",
            description:
            "REST APIs, authentication, role-based access control, and the safe-response chatbot logic.",
        },
        {
            label: "Database",
            title: "MySQL",
            description:
            "Structured storage for student records, appointments, and guidance office reports.",
        },
        ],
        challengeSolutions: [
        {
            challenge:
            "Maintaining a consistent interface across multiple modules.",
            solution:
            "Built reusable UI patterns and standardized spacing, typography, and layouts.",
        },
        {
            challenge:
            "Integrating frontend forms with backend validation.",
            solution:
            "Worked closely with backend implementation to create a smoother validation flow and better user feedback.",
        },
        ],
        outcome:
        "Successfully completed and defended as a capstone project, delivering a centralized solution that improved accessibility and organization of guidance-related services.",
        outcomeHeadline:
        "A successful capstone project with real-world impact.",
        outcomeHighlights: [
        "Responsive",
        "Student Records",
        "Appointments",
        "Role-based Access",
        "Chatbot",
        "Reports",
        ],
        learnings:
        "This project strengthened my understanding of full-stack development, user-centered design, database management, and collaborating within a development team to deliver a real-world solution.",
        reflectionHeadline:
        "Every project is an opportunity to become a better developer.",
        reflectionNote:
        "Looking back, I would improve this project by introducing a more scalable component architecture, strengthening accessibility, and refining state management. Revisiting and rebuilding this system is one of my goals as I continue growing as a frontend developer.",
        role: "Frontend Developer & UI Implementer",
        timeline: "3 Months",
        responsibilities: [
        "UI Design",
        "Frontend Development",
        "Backend Integration",
        "Database Design",
        ],
        tech: [
        "React",
        "Laravel",
        "PHP",
        "MySQL",
        ],
        image: "/projects/project-1.png",
        github: "#",
        live: "https://portfolio-eohibl4gy-juankt08.vercel.app",
    },

    {
        number: "02",
        slug: "portfolio-website",
        year: "2026",
        tier: "flagship",
        title: "Portfolio Website",
        description:
        "A personal portfolio focused on editorial layouts, thoughtful interactions, and showcasing frontend development and interface implementation skills.",

        overview:
        "Created to present projects, experience, and technical capabilities through a clean, modern, and intentional user experience inspired by editorial and Swiss design principles.",
        overviewHeadline:
        "An editorial portfolio designed and built as a product.",

        process:
        "The project began with defining a personal brand direction focused on frontend development and UI implementation. Layout exploration, typography systems, motion design, and responsive behavior were refined through multiple iterations before development.",
        processSteps: [
        {
            title: "Brand Direction",
            description:
            "Defining a personal brand direction focused on frontend development and UI implementation.",
        },
        {
            title: "Layout Exploration",
            description:
            "Exploring grid systems, typography, and editorial-inspired layout structures.",
        },
        {
            title: "Motion Design",
            description:
            "Designing purposeful animations and transitions that support the story, not distract from it.",
        },
        {
            title: "Development",
            description:
            "Building reusable React components styled with Tailwind CSS and animated with Framer Motion.",
        },
        {
            title: "Responsive Refinement",
            description:
            "Refining responsive behavior and spacing across breakpoints through multiple iterations.",
        },
        {
            title: "Launch",
            description:
            "Deploying and continuously iterating on the portfolio as new projects and skills are added.",
        },
        ],

        challenges:
        "Balancing editorial minimalism with usability, responsiveness, visual hierarchy, and modern frontend interactions while maintaining strong performance across devices.",
        challengeList: [
        "Editorial minimalism vs. usability",
        "Responsive across all breakpoints",
        "Maintaining visual hierarchy",
        "Performance across devices",
        ],
        objectives: [
        "Editorial Visual Language",
        "Responsive Component System",
        "Purposeful Motion Design",
        "Showcase Real Work",
        ],
        roleHeadline:
        "Designer, developer, and product owner in one.",
        roleDescription:
        "I owned the entire project — from defining the brand direction and typography system to building the reusable component library, motion system, and responsive layouts that power every page.",
        developmentHeadline:
        "A component-driven system built with React and Tailwind CSS.",
        architecture: [
        {
            label: "Framework",
            title: "React + Vite",
            description:
            "Component-driven pages with client-side routing and a fast development workflow.",
        },
        {
            label: "Styling",
            title: "Tailwind CSS",
            description:
            "A consistent editorial design language — typography scale, spacing rhythm, and a 12-column grid.",
        },
        {
            label: "Motion",
            title: "Framer Motion",
            description:
            "Shared animation variants for reveals, staggers, and timeline draws that support the story.",
        },
        ],
        challengeSolutions: [
        {
            challenge:
            "Keeping editorial minimalism from hurting usability.",
            solution:
            "Every element earns its place — strong hierarchy, generous whitespace, and clear calls to action guide the reader through the story.",
        },
        {
            challenge:
            "Maintaining consistency as the site grows.",
            solution:
            "Built a reusable case study component system driven by a single data model, so every project tells its story with the same structure and rhythm.",
        },
        ],

        outcome:
        "An evolving portfolio platform that serves as a professional showcase for projects, skills, and design-focused frontend development work.",
        outcomeHeadline:
        "A living product that grows with every project.",
        outcomeHighlights: [
        "Editorial Design",
        "Component Library",
        "Responsive",
        "Motion System",
        "Case Study System",
        "Fast Performance",
        ],

        learnings:
        "This project improved my understanding of visual hierarchy, responsive design systems, motion design, accessibility considerations, and building reusable frontend components.",
        reflectionHeadline:
        "Designing for yourself is the hardest brief.",
        reflectionNote:
        "The portfolio is never finished — each iteration sharpens the typography, the motion, and the story. Next steps include richer case study imagery, accessibility passes, and performance refinements.",

        role: "Frontend Developer & UI Implementer",
        timeline: "Ongoing",
        responsibilities: [
        "UI Design",
        "Frontend Development",
        "Responsive Design",
        "Motion Design",
        "Content Strategy",
        ],
        tech: [
        "React",
        "Tailwind CSS",
        "Framer Motion",
        ],
        image: "/projects/project-2.jpg",
        github: "#",
        live: "#",
    },

    {
        number: "03",
        slug: "coming-soon",
        year: "2026",
        tier: "card",
        title: "Next Project",
        description:
        "A new frontend-focused project currently in planning and development.",

        overview:
        "This upcoming project will focus on solving a real-world problem while exploring stronger UI systems, interaction design, and frontend architecture.",
        overviewHeadline:
        "A new problem worth solving, currently taking shape.",

        process:
        "Currently in the research and planning phase. User needs, design direction, and technical requirements are being explored before implementation begins.",
        processSteps: [
        {
            title: "Research",
            description:
            "Exploring the problem space and identifying real user needs worth solving for.",
        },
        {
            title: "Planning",
            description:
            "Defining scope, direction, and technical requirements before implementation begins.",
        },
        {
            title: "Design",
            description:
            "To be explored once direction and requirements are finalized.",
        },
        {
            title: "Development",
            description:
            "Implementation will begin after design direction is locked in.",
        },
        {
            title: "Testing",
            description:
            "Planned once a working version is ready to validate.",
        },
        {
            title: "Launch",
            description:
            "Coming soon.",
        },
        ],

        challenges:
        "Defining the scope, user experience, and technical architecture before moving into development.",
        challengeList: [
        "Defining project scope",
        "Shaping the user experience",
        "Choosing technical architecture",
        "Planning before development",
        ],
        objectives: [
        "Define Project Scope",
        "Explore UI Systems",
        "Strengthen Architecture",
        "Ship a Real Solution",
        ],
        roleHeadline:
        "Research and planning before a single line of code.",
        roleDescription:
        "I am currently leading the research and planning phase — exploring the problem space, defining scope, and shaping the design direction before development begins.",
        developmentHeadline:
        "Architecture decisions are being explored.",
        architecture: [
        {
            label: "Frontend",
            title: "React",
            description:
            "The foundation is set — component architecture and UI systems are being planned.",
        },
        {
            label: "Direction",
            title: "To Be Announced",
            description:
            "The full stack will be chosen to fit the problem, not the other way around.",
        },
        ],
        challengeSolutions: [
        {
            challenge:
            "Choosing the right problem to solve.",
            solution:
            "Researching real user needs first, so the project demonstrates product thinking — not just technical skill.",
        },
        ],

        outcome:
        "Coming soon.",
        outcomeHeadline:
        "The story is still being written.",
        outcomeHighlights: [
        "In Research",
        "UI Systems",
        "Frontend Architecture",
        ],

        learnings:
        "This project will be an opportunity to further strengthen frontend development, UI implementation, and product-thinking skills.",
        reflectionHeadline:
        "The best projects start with a clear question.",
        reflectionNote: "",
        role: "Frontend Developer & UI Implementer",
        timeline: "In Progress",
        responsibilities: [
        "Research",
        "UI Design",
        "Frontend Development",
        ],
        tech: [
        "React",
        "UI Design",
        ],
        image: "/projects/project-3.jpg",
        github: "#",
        live: "#",
    },
];
