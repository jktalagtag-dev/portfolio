// Tier guide (see /work/:slug dispatch in PortfolioCaseStudy.jsx):
// "flagship" -> full case study (FlagshipCaseStudy.jsx). Reads all fields,
//               including pullQuote (optional black chapter break after
//               Overview), gallery (optional, [{src, caption}] — full-
//               bleed/two-up media rows; src may be omitted for a
//               placeholder frame until a real screenshot exists), and
//               deepDives (optional, [{title, description}] — narrative
//               "engineering story" content, e.g. a debugging writeup).
//               `sections` (optional array of section keys) controls
//               which beats appear and in what order — see the
//               SECTION_RENDERERS keys in FlagshipCaseStudy.jsx. Falls
//               back to that file's DEFAULT_SECTIONS when omitted.
// "concise"  -> short dedicated page (ConciseCaseStudy.jsx). Reads: title,
//               description, role, timeline, year, tech, image, objectives
//               (shown as "Key Features"), gallery (optional, "Screenshots",
//               same rules as above), live, github. Does NOT read
//               process/architecture/reflection fields.
// "card"     -> no dedicated page (archive/exhibition card only —
//               frontend-only projects live here, not as a case study).
//               Reads: title, description, tech, image, live, github.
export const projects = [
    {
        number: "01",
        slug: "ai-business-platform",
        year: "2025",
        tier: "flagship",
        title: "AI Business Platform",
        description:
        "A multi-tenant SaaS platform that unifies ticketing, HR, inventory, document search, workflow automation, and an AI assistant under one architecture — built around AI from day one, not bolted on after.",

        overview:
        "Most internal business software is fragmented — companies buy separate systems for HR, inventory, support tickets, and AI assistants that duplicate user management and permissions while making integration harder. This platform explores how enterprise software can stay scalable while supporting multiple organizations, strict security boundaries, and AI-powered workflows on one shared foundation.",
        overviewHeadline:
        "Enterprise software, unified around AI from day one.",
        pullQuote:
        "Most business software is fragmented — separate systems for HR, inventory, tickets, and AI that duplicate data and permissions instead of sharing one foundation.",

        challengeList: [
        "Multi-tenancy without data leaking between organizations",
        "Role-based authorization across every module",
        "AI tool calling and retrieval-augmented generation",
        "Workflow automation and audit logging",
        "Shared APIs across HR, inventory, and support",
        ],
        objectives: [
        "Ticket Management",
        "HR",
        "Inventory",
        "Document Search",
        "Workflow Automation",
        "AI Assistant",
        ],
        roleHeadline:
        "Full-stack ownership, from database to AI layer.",
        roleDescription:
        "As the Full-Stack Software Engineer, I owned system architecture, backend and frontend development, AI integration, database design, and DevOps — designing a platform where every module shares the same architectural foundation instead of being stitched together through plugins and middleware.",
        developmentHeadline:
        "Clean Architecture, from the HTTP layer down to the domain.",
        architecture: [
        {
            label: "Backend",
            title: "Laravel 12 + PostgreSQL",
            description:
            "Follows Clean Architecture — HTTP, application, domain, and infrastructure layers stay separate, so controllers hold no business logic and domain models remain framework-independent.",
        },
        {
            label: "Frontend",
            title: "React 18 + TypeScript",
            description:
            "Strictly separates server state, UI state, authentication, and local preferences — no duplicated server state inside client stores, cutting down on synchronization bugs and unnecessary re-renders.",
        },
        {
            label: "Multi-Tenancy",
            title: "Tenant-scoped repositories",
            description:
            "Every request executes inside a tenant context, with repositories automatically scoping queries so organizations can never access each other's data. A later architectural audit found duplicated tenant-filtering logic across several repositories — an opportunity to centralize through shared abstractions.",
        },
        ],
        challengeSolutions: [
        {
            challenge:
            "Coupling the AI assistant to one provider would make switching models expensive and risky.",
            solution:
            "Built a provider-agnostic AI layer behind one shared interface, validated against OpenAI, OpenRouter, Ollama, and Gemini — changing providers is now a configuration change, not a code change.",
        },
        {
            challenge:
            "A Radix Dialog race condition could have required patching every modal in the app individually.",
            solution:
            "Traced the bug to the shared dialog component and fixed it once, preventing the same failure across every create/edit workflow in the platform.",
        },
        ],
        deepDives: [
        {
            title: "Debugging Gemini Tool Calling",
            description:
            "Multi-turn tool-calling conversations against Gemini's OpenAI-compatible endpoint failed after the first function call, with an undocumented error: “Function call is missing a thought_signature.” Rather than relying on community discussion, I inspected raw API responses directly — comparing streamed and non-streamed payloads, reproducing the issue outside the application, and replaying requests manually. That surfaced an undocumented field, tool_calls[].extra_content.google.thought_signature, which the platform now persists alongside conversation history so Gemini tool-calling conversations continue correctly across multiple requests. The workflow — reproduce, isolate, verify, generalize — is one I apply consistently since.",
        },
        ],
        outcome:
        "The AI layer has been validated end-to-end against OpenAI, OpenRouter, Ollama, and Gemini, and the Clean Architecture split means infrastructure can be replaced without touching application logic — a foundation built to scale in both directions, more tenants and more AI providers, without a rewrite.",
        outcomeHeadline:
        "A platform proven against four different AI providers.",
        outcomeHighlights: [
        "Multi-Tenant SaaS",
        "Provider-Agnostic AI",
        "RAG Document Search",
        "Role-Based Access",
        "Audit Logging",
        "Clean Architecture",
        ],
        learnings:
        "This project deepened my understanding of enterprise application architecture, scalable backend design, AI infrastructure and provider abstraction, debugging undocumented APIs, multi-tenant SaaS development, and the trade-offs behind real software architecture decisions.",
        reflectionHeadline:
        "Enterprise architecture is a series of trade-offs.",
        reflectionNote:
        "An architectural audit later surfaced duplicated tenant-filtering logic spread across several repositories — centralizing it behind a shared abstraction is next, a reminder that even a deliberately layered system accumulates debt worth revisiting.",
        role: "Full-Stack Software Engineer",
        timeline: "October 2025 – Present",
        responsibilities: [
        "System Architecture",
        "Backend Development",
        "Frontend Development",
        "AI Integration",
        "Database Design",
        "DevOps",
        ],
        tech: [
        "React",
        "TypeScript",
        "Laravel",
        "PostgreSQL",
        "TanStack Query",
        "Zustand",
        ],
        // No real screenshot yet — shared on-brand placeholder until
        // one is supplied; swap this path for a real image later, no
        // component changes needed.
        image: "/projects/coming-soon.svg",
        gallery: [
        { caption: "Ticket Management" },
        { caption: "HR Module" },
        { caption: "Inventory Module" },
        { caption: "Document Search (RAG)" },
        { caption: "AI Assistant" },
        ],
        github: "#",
        live: "#",
        // Leads with its strongest material — architecture and the
        // Gemini debugging story — before features/role. Deliberately
        // different rhythm from the other two flagship case studies.
        sections: [
        "overview",
        "challenge",
        "development",
        "deepDive",
        "objectives",
        "role",
        "challengeSolutions",
        "outcome",
        "gallery",
        "reflection",
        "links",
        ],
    },

    {
        number: "02",
        slug: "predictive-inventory-system",
        // No year or project duration was given in the source
        // material — using 2025 / "Client Project" as honest
        // placeholders rather than a fabricated date range. Correct
        // if wrong.
        year: "2025",
        tier: "flagship",
        title: "Predictive Inventory System",
        description:
        "A full-stack inventory and sales platform built for Steven Hydrotech Exponent Water Treatment and Supply Services — managing purchasing, sales, demand forecasting, and automatic replenishment, with data integrity and offline resilience built in from the start.",

        overview:
        "The system manages the complete operational workflow, from purchasing inventory to sales, forecasting future demand, and recommending replenishment quantities. Rather than focusing only on CRUD operations, it emphasizes data integrity, auditability, and resilience in environments with unreliable internet connectivity.",
        overviewHeadline:
        "Inventory software built to survive bad connections and worse assumptions.",
        pullQuote:
        "Traditional inventory systems fail quietly — inaccurate balances, duplicated transactions, misleading forecasts. This one was designed around preventing those failures instead of patching them after the fact.",

        challengeList: [
        "Inaccurate stock balances",
        "Duplicated transactions",
        "Poor audit trails",
        "Unreliable offline behavior",
        "Misleading demand forecasts",
        ],
        objectives: [
        "Purchase Orders",
        "Point of Sale",
        "Stock Monitoring",
        "Demand Forecasting",
        "EOQ Reorder Recommendations",
        "Offline Synchronization",
        ],
        roleHeadline:
        "Full-stack ownership of a system a real business depends on.",
        roleDescription:
        "As the Full-Stack Software Engineer, I owned system design, backend and frontend development, database architecture, and UX improvements — building the system around preventing failure modes instead of treating them as exceptions to handle later.",
        developmentHeadline:
        "Two independent applications, one shared source of truth.",
        architecture: [
        {
            label: "Backend",
            title: "Laravel 12 + MySQL",
            description:
            "Owns the inventory ledger, forecasting, and authorization logic behind a REST API.",
        },
        {
            label: "Frontend",
            title: "React 19 + TypeScript",
            description:
            "Maintained as a separate application from the backend, allowing independent deployment and testing.",
        },
        {
            label: "Offline Layer",
            title: "IndexedDB + Dexie",
            description:
            "Pending operations are stored locally when connectivity drops and synchronized once it returns, with conflict detection on the server rather than silent overwrites.",
        },
        ],
        challengeSolutions: [
        {
            challenge:
            "Inventory quantities are prone to silent, unauditable edits.",
            solution:
            "Quantities are never edited directly — every stock change generates an immutable movement record, and current inventory is calculated from that history rather than stored as a mutable value.",
        },
        {
            challenge:
            "Field staff lose internet connectivity mid-transaction.",
            solution:
            "The app stores pending operations locally in IndexedDB and synchronizes them once connectivity returns, with conflicts detected on the server instead of silently overwritten.",
        },
        {
            challenge:
            "Retried requests — POS checkout, receiving, sync — could duplicate inventory movements.",
            solution:
            "Critical endpoints use idempotency keys, so a repeated request never creates a duplicate movement.",
        },
        ],
        deepDives: [
        {
            title: "Forecasting Without False Confidence",
            description:
            "Demand forecasting uses a Simple Moving Average. Rather than producing a misleading prediction when there isn't enough sales history yet, the system explicitly reports that more data is required — trading a confident-looking number for an honest one, and staying transparent about the limits of what it actually knows.",
        },
        ],
        outcome:
        "Permissions are enforced through policy classes instead of scattered role checks, centralizing authorization logic and making it easier to test and maintain — one piece of a system designed for auditability end to end, from the inventory ledger to every synced offline transaction.",
        outcomeHeadline:
        "A system built to survive audits, not just transactions.",
        outcomeHighlights: [
        "Inventory Ledger",
        "Offline-First",
        "Idempotent APIs",
        "Demand Forecasting",
        "Role-Based Access",
        "Audit Trail",
        ],
        learnings:
        "This project gave me practical experience with inventory domain modeling, offline-first architecture, synchronization strategies, forecasting algorithms, idempotent API design, audit logging, and enterprise-grade role-based access control.",
        reflectionHeadline:
        "Reliability is a design decision, not a bug fix.",
        reflectionNote:
        "Preferring an honest “not enough data yet” over a confident wrong answer is a principle I now apply beyond forecasting — to any feature where the system might be tempted to guess.",
        role: "Full-Stack Software Engineer",
        timeline: "Client Project",
        responsibilities: [
        "System Design",
        "Backend Development",
        "Frontend Development",
        "Database Architecture",
        "UX Improvements",
        ],
        tech: [
        "React",
        "TypeScript",
        "Laravel",
        "MySQL",
        "Dexie",
        "IndexedDB",
        ],
        image: "/projects/coming-soon.svg",
        gallery: [
        { caption: "Point of Sale" },
        { caption: "Purchase Orders" },
        { caption: "Stock Monitoring" },
        { caption: "Demand Forecasting" },
        { caption: "Reporting" },
        ],
        github: "#",
        live: "#",
        // Leads with features (Objectives) before the problem framing —
        // a feature-first read, distinct from both other case studies.
        sections: [
        "overview",
        "pullQuote",
        "objectives",
        "challenge",
        "role",
        "challengeSolutions",
        "deepDive",
        "development",
        "gallery",
        "outcome",
        "reflection",
        "links",
        ],
    },

    {
        number: "03",
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
        pullQuote:
        "From a semester of research to a defended capstone — a centralized platform built to make guidance services easier to reach for every student who needed them.",
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
        image: "/projects/3.webp",
        // Real screenshots to follow — placeholders name the actual
        // modules so drop-in later is just adding `src` per item.
        gallery: [
        { caption: "Student Records Dashboard" },
        { caption: "Appointment Scheduling" },
        { caption: "Safe-Response Chatbot" },
        { caption: "Guidance Reports" },
        { caption: "Role-Based Access Control" },
        ],
        github: "#",
        // Previous value pointed at a stale Vercel preview deployment
        // that now 404s — hidden (ProjectLinks skips "#") until a
        // real, stable URL is supplied.
        live: "#",
        // Gallery moved right after the pull-quote to spotlight the
        // system's screenshots early — distinct from both other
        // case studies, which place theirs later.
        sections: [
        "overview",
        "pullQuote",
        "gallery",
        "challenge",
        "objectives",
        "role",
        "process",
        "development",
        "challengeSolutions",
        "outcome",
        "reflection",
        "links",
        ],
    },

    {
        number: "04",
        slug: "portfolio-website",
        year: "2026",
        // Frontend-only — no dedicated case study; still shown as an
        // archive/exhibition card with real links. The flagship-only
        // fields below are kept but unused, ready if this project
        // ever grows a backend and flips tier back to "flagship".
        tier: "card",
        title: "Portfolio Website",
        description:
        "A personal portfolio focused on editorial layouts, thoughtful interactions, and showcasing frontend development and interface implementation skills.",

        overview:
        "Created to present projects, experience, and technical capabilities through a clean, modern, and intentional user experience inspired by editorial and Swiss design principles.",
        overviewHeadline:
        "An editorial portfolio designed and built as a product.",
        pullQuote:
        "Every detail here — the type, the motion, the pacing — is a decision I made and can defend. Designing for yourself turned out to be the hardest brief of all.",

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
        image: "/projects/2.webp",
        github: "https://github.com/jktalagtag-dev/portfolio",
        live: "https://portfolio-juankt08.vercel.app",
    },

    {
        number: "05",
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
        image: "/projects/1.webp",
        github: "#",
        live: "#",
    },
];
