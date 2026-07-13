# Portfolio

Personal portfolio for **John Karlo Talagtag** — Frontend Developer & UI Implementer.

An editorial, motion-driven presentation of case studies, skills, and experience — built as a product, not a template.

## Tech Stack

- **React 19** + **Vite** — app shell and dev tooling
- **React Router** — client-side routing
- **Tailwind CSS v4** — styling
- **Framer Motion** — component-level interaction and gesture motion
- **GSAP** (`ScrollTrigger`) — scroll-driven reveals, scrubs, and draws
- **Lenis** — smooth scrolling, synced to GSAP's ScrollTrigger

## Getting Started

```bash
npm install
npm run dev       # start the dev server
npm run build      # production build to dist/
npm run preview    # preview the production build locally
npm run lint       # run ESLint
```

## Project Structure

```
src/
  pages/          # route-level pages (Home, Work, About, Contact, case studies)
  sections/        # page sections, grouped by page/feature
  components/
    ui/            # layout primitives (Container, cards, modal, etc.)
    motion/        # reusable motion primitives (Reveal, MaskText, DrawLine, CountUp)
    case-study/     # shared case-study building blocks
  layout/          # Navbar, Footer
  data/            # project, skills, and experience content
  utils/           # GSAP setup, smooth scroll, misc hooks
  styles/          # global CSS (Tailwind entry, design tokens)
```

Routes are declared in `src/App.jsx`. Case studies are data-driven from `src/data/projects.js` and dispatch to a tier-specific template (flagship / concise / card) based on how much detail a given project warrants.

## Design Principles

Typography-first, whitespace-as-content, motion that explains rather than decorates. See `CLAUDE.md` and `PRODUCT.md` for the full brand and engineering handbook.

## Deployment

Deployed on [Vercel](https://vercel.com); `vercel.json` rewrites all routes to `index.html` for client-side routing.
