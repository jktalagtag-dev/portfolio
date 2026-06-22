# Portfolio Development Log

## Project Overview

Personal portfolio website for:

**John Karlo Talagtag**
React & Laravel Full-Stack Developer

Design direction:

* Minimalist
* Swiss / Editorial
* Typography-first
* Apple / Linear / Vercel inspired
* Monochrome palette
* Large typography
* Strong whitespace
* Subtle motion

---

# Current Progress

## Completed

### Navigation

Implemented:

* Fixed navbar
* Blur effect retained
* Semi-transparent background
* Mobile menu
* Logo integration (`JKT.png`)
* Underline hover animations
* Responsive navigation

Current navbar style:

* `backdrop-blur-xl`
* `bg-white/60`
* Minimal text navigation
* Mobile "Menu / Close" button

---

## Hero Section

### Desktop

Current direction:

* Large "Hello."
* Giant outlined JK initials
* Mouse parallax effect
* Editorial layout
* Vertical developer label
* Stats block

Content:

* 02+ Years Learning
* 10+ Projects Built

Subtitle:

> I am John Karlo · React & Laravel Full-Stack Developer

---

### Mobile Hero

Several iterations tested:

#### Rejected

* Hidden JK
* Small centered JK
* Apple multilingual "Hello" intro

Reason:

* Felt unnecessary
* Distracted from portfolio

#### Current Direction

Keep giant outlined JK in background.

Goals:

* Similar feeling to desktop
* Text remains centered
* Maintain readability
* Avoid excessive empty space

Known issues:

* JK visibility varies across devices
* Hero positioning differs between browsers
* Need additional mobile testing

---

## About Section

Updated structure:

### Heading

Possible options:

* Building thoughtful digital products.
* Creating experiences through code.
* Turning ideas into digital experiences.

Current preference:

> Building thoughtful digital products.

### Content

Focus:

* Full-stack development
* React
* Laravel
* Practical problem solving
* Professional growth

### Information Row

* Location
* Focus
* Status

Mobile optimized:

* 1 column mobile
* 3 columns desktop

---

## Skills Section

Implemented:

### Frontend

* React
* JavaScript
* Tailwind CSS

### Backend

* Laravel
* PHP
* MySQL

### Workflow

* Git
* GitHub
* Figma
* VS Code

Future improvement:

* Add proficiency indicators
* Improve visual hierarchy

---

## Experience Section

Current content includes:

### OJT

MAMS LT&G Franchising Corp.

Responsibilities:

* Hardware support
* Printer troubleshooting
* Creative design
* Branch support
* System assistance
* Internal system development support

---

## Contact Section

Current direction:

Large editorial CTA.

Headline:

> Let's build something meaningful.

Includes:

* Email
* LinkedIn
* GitHub
* Resume

Status:

Good overall.

---

# Layout System Review

## Current Problem

Three different container systems exist.

### HeroContainer

Uses:

px-5
sm:px-6
md:px-8
lg:px-10
xl:px-12
2xl:px-16

### SectionContainer

Uses:

px-6
md:px-10
lg:px-14
xl:px-16
2xl:px-20

### Container

Uses:

max-w-[1900px]
mx-auto

Different paddings.

Result:

* Sections shift alignment
* Layout feels inconsistent
* Premium feel reduced

---

## Planned Fix

Use a single container system.

Recommended base:

```jsx
export default function Container({
  children,
  className = "",
}) {
  return (
    <div
      className={`
        max-w-[1900px]
        mx-auto

        px-6
        md:px-10
        lg:px-14
        xl:px-16
        2xl:px-20

        ${className}
      `}
    >
      {children}
    </div>
  );
}
```

Then:

* HeroContainer wraps Container
* SectionContainer wraps Container

Single source of truth.

---

# Currently Section Review

Issues identified:

### Too Tall

Current:

```jsx
min-h-[80vh]
py-40
```

Creates excessive page height.

### Recommendation

Use:

```jsx
py-24 lg:py-32
```

Remove:

```jsx
min-h-[80vh]
```

---

## Bigger Question

Potentially remove section entirely.

Current structure:

Hero
About
Skills
Projects
Experience
Currently
Contact

Possible simplification:

Hero
About
Skills
Projects
Experience
Contact

Move:

* Open to Work
* Availability
* Location

into Contact section.

---

# Mobile Optimization Status

## Completed

* Responsive navbar
* Responsive hero typography
* Responsive spacing
* Mobile menu

## Remaining

### Hero

* Finalize JK positioning
* Improve first-screen impact
* Ensure consistency across devices

### About

* Verify mobile spacing

### Skills

* Optimize mobile layout

### Projects

* Complete redesign

### Experience

* Improve mobile presentation

### Contact

* Verify spacing

---

# Recruiter Feedback Discussion

Concern:

> Will recruiters skip the portfolio because it lacks visuals and color?

Conclusion:

No.

Typography-first portfolios are acceptable when:

* Typography is strong
* Layout is intentional
* Projects are excellent

Recruiters care most about:

1. Projects
2. Experience
3. Resume

Not background colors.

---

# Next Priority

## Projects Section

Reason:

Recruiters spend most time here.

Planned improvements:

### Desktop

* Large screenshots
* Case-study style layout
* Better hierarchy

### Mobile

* Optimized cards
* Better project presentation

### Future

* Live Demo buttons
* GitHub buttons
* Project detail pages

---

# Current Portfolio Rating

Navbar: 8.5/10

Hero: 8/10

About: 8/10

Contact: 8/10

Container System: 6.5/10

Overall: 8/10

---

# Immediate Next Task

1. Unify container system.
2. Review Projects section.
3. Optimize Projects for mobile.
4. Refine Experience section.
5. Final mobile QA before job applications.
