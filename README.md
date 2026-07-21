<div align="center">

# ✦ John Karlo Talagtag Portfolio

### Frontend Developer • Software Engineer • UI Implementer

A modern editorial portfolio showcasing my projects, technical skills, and development process through thoughtful design, meaningful motion, and clean engineering.

[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=white)]()
[![Vite](https://img.shields.io/badge/Vite-7-646CFF?style=for-the-badge&logo=vite&logoColor=white)]()
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38BDF8?style=for-the-badge&logo=tailwindcss&logoColor=white)]()
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-Animation-0055FF?style=for-the-badge)]()
[![GSAP](https://img.shields.io/badge/GSAP-Scroll_Animations-88CE02?style=for-the-badge)]()
[![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-black?style=for-the-badge&logo=vercel)]()

**Live Website:** https://your-domain.com

</div>

---

# Overview

This repository contains the source code for my personal portfolio.

Rather than using a pre-built template, the portfolio was designed and developed from scratch to reflect how I approach software engineering—clean architecture, responsive interfaces, reusable components, and purposeful animations.

The project focuses on delivering an experience that feels polished while maintaining excellent performance and accessibility.

---

# Features

- Modern editorial-inspired interface
- Fully responsive across desktop, tablet, and mobile
- Smooth scrolling powered by Lenis
- Scroll-driven storytelling using GSAP
- Micro-interactions with Framer Motion
- Project case studies
- Performance-focused architecture
- Reusable component system
- SEO-friendly structure
- Dark minimalist visual design

---

# Tech Stack

| Category | Technologies |
|-----------|--------------|
| Frontend | React 19, Vite |
| Styling | Tailwind CSS v4 |
| Animation | Framer Motion, GSAP, ScrollTrigger |
| Scrolling | Lenis |
| Routing | React Router |
| Deployment | Vercel |

---

# Project Structure

```text
src
├── assets
├── components
│   ├── ui
│   ├── motion
│   ├── case-study
│   └── shared
├── data
├── hooks
├── layout
├── pages
├── sections
├── styles
├── utils
├── App.jsx
└── main.jsx
```

Project data is managed through dedicated data files, making case studies and content reusable while keeping presentation components clean.

---

# Local Development

Clone the repository.

```bash
git clone https://github.com/yourusername/portfolio.git
```

Move into the project.

```bash
cd portfolio
```

Install dependencies.

```bash
npm install
```

Start the development server.

```bash
npm run dev
```

Build for production.

```bash
npm run build
```

Preview the production build.

```bash
npm run preview
```

Lint the project.

```bash
npm run lint
```

---

# Design Philosophy

This portfolio follows several core principles:

- Design with purpose
- Motion should communicate, not distract
- Typography is the primary visual language
- Components should be reusable
- Mobile experience should never feel secondary
- Performance is a feature
- Simplicity over unnecessary complexity

---

# Architecture

The application follows a feature-oriented structure with reusable UI primitives.

- Data-driven content
- Modular page sections
- Reusable animation components
- Shared layout system
- Utility-first styling
- Separation of presentation and content

Routes are defined in:

```text
src/App.jsx
```

Project information is sourced from:

```text
src/data/projects.js
```

Case studies automatically render different layouts depending on project complexity.

---

# Performance Goals

- Fast initial load
- Optimized animations
- Responsive layouts
- Accessibility-conscious interactions
- Clean component composition
- Maintainable codebase

---

# Deployment

The portfolio is deployed using **Vercel**.

For SPA routing, `vercel.json` rewrites every request to:

```text
index.html
```

allowing React Router to handle navigation.

---

# Future Improvements

- [ ] Blog system
- [ ] Project filtering
- [ ] Command palette
- [ ] Interactive timeline
- [ ] Better accessibility support
- [ ] Performance dashboard
- [ ] View transitions
- [ ] Theme customization

---

# Documentation

Additional documentation is available inside the repository.

```
CLAUDE.md
PRODUCT.md
README.md
```

---

# Connect With Me

**John Karlo Talagtag**

Frontend Developer • Software Engineer

Portfolio: https://your-domain.com

LinkedIn: https://linkedin.com/in/yourprofile

GitHub: https://github.com/yourusername

Email: your@email.com

---

<div align="center">

Built with ❤️ using React, Tailwind CSS, GSAP, Framer Motion, and Vite.

</div>
