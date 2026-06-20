# HERO_REFINEMENT.md

# Portfolio Website - Hero Refinement Log

Date: June 2026

---

## Current Development Stage

Completed:

- Project setup
- React + Vite
- Tailwind CSS v4
- Folder structure
- Navbar v1
- Hero v1
- Hero refinements

Current focus:

- Desktop-first development

---

# Development Strategy

Decision:

Build desktop first before mobile responsiveness.

Reason:

The portfolio design is heavily editorial and desktop-oriented.

Responsive design will be implemented after all sections are complete.

Workflow:

1. Desktop Layout
2. Complete Sections
3. Animations
4. Responsive Design
5. Polish
6. Deployment

---

# Hero Design Inspiration

Primary inspiration:

Swiss editorial portfolios.

Characteristics:

- Large typography
- Minimal color palette
- Asymmetrical composition
- Strong whitespace
- Large portrait imagery
- Vertical labels

Reference traits:

- Portrait dominates the right side
- Hero text occupies left side
- Minimal navigation
- Transparent navbar
- Optical alignment over mathematical alignment

---

# Hero Layout

Grid system:

```text
1 | 4 | 7
```

Columns:

```text
1 column  -> Vertical Label
4 columns -> Hero Content
7 columns -> Portrait
```

---

# Hero Structure

```text
---------------------------------------------------
Navbar
---------------------------------------------------

Vertical Label

+02      React
Projects Laravel

Hello
— React & Laravel Full-Stack Developer

Scroll down ↓

                           Portrait
                           Portrait
                           Portrait
---------------------------------------------------
```

---

# Hero Container

Decision:

Use a dedicated HeroContainer.

Reason:

The Hero should span the full viewport width.

Implementation:

```jsx
w-full
px-6
md:px-10
lg:px-14
xl:px-16
2xl:px-20
```

No:

- max-width
- mx-auto

---

# Typography

Hero title:

```text
Hello
```

Classes:

```jsx
text-[7rem]
md:text-[8rem]
xl:text-[10rem]
leading-[0.82]
tracking-[-0.11em]
font-extralight
```

Design principle:

Large typography creates visual hierarchy.

---

# Vertical Label

Content:

```text
Full Stack Developer
2026
```

Implementation:

```css
writing-mode: vertical-rl;
rotate: 180deg;
```

Divider:

```jsx
h-[320px]
w-px
bg-neutral-200
```

---

# Stats

Avoid fake statistics.

Current values:

```text
02+ Projects Built
React / Laravel
```

Future updates:

Replace with actual project count.

---

# Portrait

Current state:

Gray placeholder.

Future:

- Transparent PNG
- Grayscale image
- No border
- No shadow
- No card background

Target size:

```jsx
h-[82vh]
w-[92%]
```

---

# Navbar Decisions

Navbar:

- Fixed position
- Transparent background
- No blur

Reason:

Blur covered the vertical label.

Logo:

```text
JK
```

Navigation:

- About
- Projects
- Experience
- Contact

CTA:

```text
Resume ↗
```

Interactions:

```css
hover:text-neutral-900
hover:translate-x-1
transition-all duration-300
```

---

# Responsive Strategy

Decision:

Responsive design postponed until all desktop sections are complete.

Future mobile layout:

Desktop:

```text
Label | Text | Portrait
```

Mobile:

```text
Hello

Developer subtitle

Portrait

Stats

Scroll ↓
```

---

# Current Progress

Completed:

✅ Navbar

✅ Hero Layout

✅ Hero Refinement

⏳ About Section

⏳ Projects Section

⏳ Experience Section

⏳ Contact Section

⏳ Footer

⏳ Animations

⏳ Responsive Design

⏳ Deployment

---

# Next Step

Build the About section.

Goal:

Introduce:

- BSIT background
- React and Laravel expertise
- Career goals
- Open-to-work status