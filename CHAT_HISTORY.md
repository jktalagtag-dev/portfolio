# PORTFOLIO 2.0 — REBRAND & SITE ARCHITECTURE

## Vision

Reposition the portfolio from a generic Full-Stack Developer portfolio into a Frontend Developer portfolio that highlights design awareness, interface implementation, and user experience thinking.

### Personal Brand

**Frontend Developer who enjoys turning ideas into clean and intuitive digital experiences.**

### Supporting Statement

Design-focused frontend development with full-stack understanding.

---

# Core Principles

The portfolio should communicate:

* Frontend Development
* UI Implementation
* Design Awareness
* Problem Solving
* Professional Presentation

The portfolio should NOT feel like:

* A resume website
* A technology showcase
* A developer template

The work should always come before the skills.

---

# Site Architecture

## Home

Route:

```txt
/
```

Purpose:

Introduce who I am and immediately showcase my best work.

### Sections

1. Hero
2. Featured Work
3. About Preview
4. Contact CTA

---

## Work

Route:

```txt
/work
```

Purpose:

Showcase all projects.

### Sections

1. Featured Projects
2. Additional Projects
3. Project Links

---

## Individual Project Pages

Routes:

```txt
/work/guidance-management-system

/work/project-name
```

Purpose:

Present detailed case studies.

### Structure

1. Overview
2. Problem
3. Solution
4. Role
5. Technologies
6. Key Features
7. Challenges
8. Outcome

---

## About

Route:

```txt
/about
```

Purpose:

Tell my story and explain how I work.

### Sections

1. Introduction
2. Experience
3. Skills
4. Technologies
5. Resume

### Content Migration

Move the following existing sections here:

* About
* Skills
* Experience
* Currently

---

## Contact

Route:

```txt
/contact
```

Purpose:

Provide a simple way to connect.

### Sections

1. Contact Message
2. Email
3. LinkedIn
4. GitHub
5. Resume

---

# Navigation

```txt
JK

Work
About
Contact
Resume
```

Notes:

* No Home link.
* Clicking the logo returns to Home.
* Work becomes the primary navigation item.

---

# Homepage Structure

## Hero

Headline:

Hello.

Subheadline:

I'm John Karlo,
a Frontend Developer who enjoys turning ideas into clean and intuitive digital experiences.

Supporting Copy:

Based in the Philippines. Focused on building responsive interfaces with React while bringing a full-stack understanding to every project.

CTA:

* View Work
* Resume

---

## Featured Work

This section appears immediately after Hero.

Projects should be presented before:

* Skills
* Experience
* Technologies

The work becomes the centerpiece of the portfolio.

---

## About Preview

Short introduction.

Example CTA:

Learn More →

Links to:

```txt
/about
```

---

## Contact CTA

Simple closing section encouraging collaboration and opportunities.

---

# Design Direction

Keep:

* Swiss Design influence
* Editorial layouts
* Large typography
* Generous whitespace
* Minimal aesthetic
* Framer Motion animations
* JK branding

Avoid:

* Excessive visual clutter
* Large skill grids on the homepage
* Resume-first layouts
* Generic developer portfolio patterns

---

# Mobile Optimization

Mobile optimization will begin AFTER:

1. Site architecture is completed
2. Routing is completed
3. Content updates are completed

Mobile optimization is Phase 2.

---

# Development Order

Phase 1

1. Routing Setup
2. Home Page
3. Work Page
4. About Page
5. Contact Page

Phase 2

6. Individual Project Pages
7. Mobile Optimization
8. Final Polish
9. Deployment

---

# Final Goal

When someone visits the portfolio, they should immediately think:

"This person builds thoughtful and polished user experiences."

The work should speak first.

Everything else should support it.
