PORTFOLIO 2.0 ENGINEERING HANDBOOK
Version: 1.0
> This document is the single source of truth for the portfolio. Any AI assistant
> or developer continuing this project should follow this handbook.
---
1. PROJECT VISION
This is not a generic React portfolio.
It is a product that communicates the professional identity of John Karlo Talagtag.
The portfolio should demonstrate:
Frontend engineering
UI implementation
Design thinking
Product thinking
Problem solving
Communication
Every page should answer:
"Why should someone hire John Karlo?"
---
2. BRAND
Portfolio title:
Frontend Developer & UI Implementer
Resume title:
Frontend Developer
Core positioning:
Design-minded frontend development with full-stack understanding.
Do NOT position the owner as a generic full-stack developer.
---
3. DESIGN PHILOSOPHY
Keywords
Editorial
Minimal
Thoughtful
Intentional
Purposeful
Premium
Rules
Typography first.
Whitespace is content.
Motion supports understanding.
Remove anything that does not improve the story.
---
4. TECHNOLOGY
React
Vite
React Router
Tailwind CSS
Framer Motion
---
5. PROJECT STRUCTURE
src/
components/
ui/
case-study/
pages/
sections/
data/
assets/
utils/
---
6. HOME PAGE
Completed
Hero
About
Skills
Featured Work
Experience
Contact
Do not redesign unless necessary.
---
7. CASE STUDY SYSTEM
The case study is the heart of the portfolio.
Story order
Hero
↓
Overview
↓
Challenge
↓
Objectives
↓
Role
↓
Process
↓
Design
↓
Development
↓
Challenges & Solutions
↓
Outcome
↓
Reflection
↓
Next Project
---
8. COMPONENT LIBRARY
Existing
CaseStudySection.jsx
SectionLabel.jsx
MetadataCard.jsx
ProjectHero.jsx
ChallengeGrid.jsx
Objectives.jsx
ProcessTimeline.jsx
DesignShowcase.jsx (renders only when project.gallery has images)
DevelopmentArchitecture.jsx
ChallengeSolution.jsx
OutcomeGrid.jsx
Reflection.jsx
NextProject.jsx
Every component must have a single responsibility.
---
9. DATA MODEL
Do NOT build a complex CMS.
Instead:
Expand projects.js only when a UI component requires additional data.
The UI drives the data model.
---
10. TYPOGRAPHY
Display:
Large editorial headlines.
Section headings:
Large but secondary.
Body:
Comfortable reading width.
Metadata:
Small uppercase labels.
Never introduce random font sizes.
---
11. LAYOUT
Use the homepage as the reference.
12-column grid
Large vertical spacing
Consistent section rhythm
Strong alignment
---
12. MOTION
Motion should explain.
Examples
Hero:
Reveal
Cards:
Stagger
Timeline:
Draw
Architecture:
Build
Reflection:
Subtle fade
Avoid unnecessary floating or looping animations.
---
13. IMAGERY
Images are evidence.
Use
UI screenshots
Mobile screenshots
Wireframes
Architecture diagrams
Mockups
Before/after comparisons
Avoid decorative imagery.
---
14. CODING STANDARDS
Functional components only.
Reusable components.
Composition over duplication.
Keep files focused.
Organize imports.
Consistent Tailwind ordering.
---
15. WORKFLOW
Always:
Build reusable component.
Integrate into page.
Expand data model only if required.
Refactor if duplication appears.
---
16. CURRENT STATUS
Completed
✔ Brand
✔ Home
✔ Hero
✔ About
✔ Skills
✔ Experience
✔ Contact
✔ Resume
✔ Basic Case Study
✔ CaseStudySection
✔ SectionLabel
✔ MetadataCard
✔ ProjectHero
✔ ChallengeGrid
✔ Objectives
✔ ProcessTimeline
✔ DesignShowcase
✔ DevelopmentArchitecture
✔ ChallengeSolution
✔ OutcomeGrid
✔ Reflection
✔ NextProject
✔ Full Case Study System (data-driven, all projects)
In Progress
Phase 2 — Assets (case study imagery for DesignShowcase)
---
17. FUTURE ROADMAP
Phase 1
Case Study System
Phase 2
Assets
Wireframes
Architecture
Mockups
Screenshots
Phase 3
Polish
SEO
Accessibility
Performance
Open Graph
QA
Phase 4
Career Launch
LinkedIn
GitHub READMEs
Resume updates
Applications
---
18. AI ASSISTANT INSTRUCTIONS
When assisting this project:
Preserve the editorial design language.
Favor reusable architecture.
Return complete files when editing.
Do not introduce unnecessary complexity.
Critique ideas honestly.
Prioritize maintainability.
Match existing spacing, typography, and motion.
Before adding any feature ask:
Does this make the story clearer?
If the answer is no, remove it.
---
19. FINAL GOAL
Deliver a portfolio that feels like a premium product presentation rather than a React showcase.
The portfolio should communicate thoughtful design, clean implementation, engineering maturity, and the ability to solve real problems.

---
20. DESIGN TOKENS
No dark mode exists yet. Single light theme only — do not add dark: variants
until a theme toggle is actually built (see Future Roadmap).
Color Palette (defined in src/styles/globals.css :root)
Background: #F8F8F8
Text: #222222
Secondary / Muted Text (Tailwind default palette, used by role):
neutral-400 — eyebrows, vertical labels, metadata
neutral-500 / neutral-600 — body copy, descriptions
Border / Divider: neutral-200 (Tailwind default)
Accent: none in active use. Avoid strong brand colors. If one is introduced,
it must be sparing and reserved for interaction states only.
---
21. TYPOGRAPHY SYSTEM
Primary Font:
Geist (self-hosted variable woff2, loaded via @font-face in globals.css —
do not reintroduce the `geist` npm package, it depends on next/font and
does not work under Vite)
Monospace:
Not currently used anywhere in the codebase. Do not reference Geist Mono
as active until a real monospace use case exists (code blocks, metadata
tables, etc).
Tracking
Eyebrows:
0.18em–0.3em uppercase
Reading width:
65–75 characters
Heading Scale (actual, responsive — mobile value to largest desktop breakpoint)
Display (Hero h1)
4.5rem → 9rem (72px–144px)
H2 (section headings: About, Skills, Experience, Contact)
2.5rem → 6–7rem (40px–96/112px)
H3 (card / list item titles)
1.75rem → 2.25rem (28px–36px)
Body
1rem → 1.125rem (16px–18px)
Small Labels
11px uppercase
---
22. SPACING SYSTEM
No enforced spacing tokens exist (no tailwind.config.js or @theme scale —
Tailwind v4 CSS-first config, default 4px-multiple scale only). Section
rhythm is achieved by convention, not by a hard token system:
Section vertical padding: py-20 (mobile) → py-32/py-40 (desktop)
Grid gutters: gap-6 / gap-8 / gap-10
Container: max-w-[1900px], responsive horizontal padding px-5 → px-20
(see Container.jsx). This is the real container width — do not reference
1440px anywhere.
---
23. UI ELEMENT LIBRARY
Navigation
Sticky navbar
Section navigation
Resume CTA
Hero
Editorial heading
Metadata cards
Availability badge
Social links
Scroll indicator
Sections
Vertical section label
Section container
12-column grid
Cards
MetadataCard
Project Card
Skill Card
Experience Card
Challenge Card
Objective Card
Outcome Card
Buttons
Primary
Secondary
Text Link
Icon Button
Case Study
Hero
Overview
Challenge Grid
Objectives
Timeline
Architecture
Design Gallery
Development
Reflection
Next Project
Media
Browser Mockup
Mobile Mockup
Architecture Diagram
Image Gallery
---
24. LOGO SYSTEM
Brand: JKT
Style:
Swiss / Editorial / Minimal
Primary: JKT Monogram
Secondary: JKT/
Assets
SVG Light
SVG Dark
PNG
Favicon 16x16
Favicon 32x32
Apple Touch Icon 180x180
Colors
Match Section 20 (currently light theme only: #F8F8F8 background, #222222 mark)
Clear Space
1x logo height
Never add gradients, shadows or distortion.
---
25. DESIGN PRINCIPLES
Every element must improve:
Readability
Hierarchy
Storytelling
Usability
If not, remove it.