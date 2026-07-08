import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { projects } from "../../data/projects";

import HeroContainer from "../../components/ui/HeroContainer";
import CinematicImage from "../../components/ui/CinematicImage";

import { fadeUp, staggerContainer } from "../../utils/animations";

/*
 * Selected work (Home) — full-bleed scroll-expanding images
 * with an editorial baseline row beneath each: number and
 * year left, stack right, title and description on a
 * 12-column grid. Echoes the hero's ruler language.
 */

const shownProjects = projects.slice(0, 3);

function ShowcaseItem({ project, featured }) {
  return (
    <article>
      <Link
        to={`/work/${project.slug}`}
        className="group relative block"
      >
        <CinematicImage
          src={project.image}
          alt={project.title}
          radius={featured ? 32 : 24}
          inset={featured ? 0.88 : 0.92}
          heightClassName={
            featured
              ? "h-[55svh] sm:h-[70svh] lg:h-[85svh]"
              : "h-[45svh] sm:h-[55svh] lg:h-[70svh]"
          }
        >
          {/* Hover badge */}
          <span
            className="
              pointer-events-none

              absolute
              left-1/2
              top-1/2

              -translate-x-1/2
              -translate-y-1/2

              rounded-full

              border
              border-neutral-200/60

              bg-white/80
              backdrop-blur-md

              px-7
              py-7

              text-[11px]
              uppercase
              tracking-[0.2em]
              text-neutral-900

              opacity-0
              scale-90

              transition-all
              duration-500
              ease-[cubic-bezier(0.16,1,0.3,1)]

              group-hover:opacity-100
              group-hover:scale-100
            "
          >
            View Case Study
          </span>
        </CinematicImage>
      </Link>

      {/* Baseline row */}
      <HeroContainer>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            amount: 0.4,
          }}
          className="
            mt-8
            lg:mt-12
          "
        >
          {/* Eyebrow row + ruler */}
          <motion.div
            variants={fadeUp}
            className="
              flex
              flex-wrap
              items-baseline
              justify-between

              gap-x-6
              gap-y-2

              border-b
              border-neutral-200

              pb-4
            "
          >
            <p
              className="
                text-[11px]
                uppercase
                tracking-[0.3em]
                text-neutral-400
              "
            >
              {project.number}
              {featured && " — Featured"}
              &ensp;·&ensp;
              {project.year}
            </p>

            <p
              className="
                hidden
                sm:block

                text-[11px]
                uppercase
                tracking-[0.3em]
                text-neutral-400
              "
            >
              {project.tech.join("  ·  ")}
            </p>
          </motion.div>

          {/* Title — description */}
          <div
            className="
              mt-6
              lg:mt-8

              grid
              grid-cols-1
              lg:grid-cols-12

              gap-6
              lg:gap-10
            "
          >
            <motion.h2
              variants={fadeUp}
              className="lg:col-span-7"
            >
              <Link
                to={`/work/${project.slug}`}
                className="
                  inline-block

                  text-[2rem]
                  sm:text-[2.75rem]
                  lg:text-[3.5rem]

                  font-light
                  leading-[1.02]
                  tracking-[-0.05em]

                  transition-colors
                  duration-500

                  hover:text-neutral-500
                "
              >
                {project.title}
              </Link>
            </motion.h2>

            <motion.div
              variants={fadeUp}
              className="lg:col-span-5"
            >
              <p
                className="
                  max-w-md

                  text-base

                  leading-relaxed
                  text-neutral-500
                "
              >
                {project.description}
              </p>

              <Link
                to={`/work/${project.slug}`}
                className="
                  group/link

                  mt-6

                  inline-flex
                  items-center
                  gap-3

                  text-sm
                  uppercase
                  tracking-[0.18em]
                  text-neutral-500

                  transition-colors
                  duration-300

                  hover:text-black
                "
              >
                View Case Study
                <span
                  className="
                    transition-transform
                    duration-300

                    group-hover/link:translate-x-1.5
                  "
                >
                  →
                </span>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </HeroContainer>
    </article>
  );
}

export default function ProjectShowcase() {
  return (
    <section
      id="projects"
      className="pt-20 lg:pt-28"
    >
      {/* Section masthead */}
      <HeroContainer>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="
            flex
            items-baseline
            justify-between

            gap-6

            border-b
            border-neutral-200

            pb-5
          "
        >
          <p
            className="
              text-[11px]
              uppercase
              tracking-[0.3em]
              text-neutral-400
            "
          >
            Selected Work
          </p>

          <p
            className="
              text-[11px]
              uppercase
              tracking-[0.3em]
              text-neutral-400
            "
          >
            2025 — 2026&ensp;·&ensp;(03)
          </p>
        </motion.div>
      </HeroContainer>

      {/* Projects */}
      <div
        className="
          mt-14
          lg:mt-20

          space-y-24
          lg:space-y-36
        "
      >
        {shownProjects.map((project, index) => (
          <ShowcaseItem
            key={project.slug}
            project={project}
            featured={index === 0}
          />
        ))}
      </div>

      {/* All projects */}
      <HeroContainer>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="
            mt-24
            lg:mt-36

            border-t
            border-neutral-200
          "
        >
          <Link
            to="/work"
            className="
              group

              flex
              items-center
              justify-between

              gap-6

              py-10
              lg:py-16
            "
          >
            <span
              className="
                text-[1.75rem]
                sm:text-[2.75rem]
                lg:text-[3.5rem]

                font-light
                leading-none
                tracking-[-0.04em]

                transition-colors
                duration-500

                group-hover:text-neutral-500
              "
            >
              All Projects
            </span>

            <span
              className="
                flex
                items-center
                gap-4

                text-sm
                uppercase
                tracking-[0.18em]
                text-neutral-500

                transition-colors
                duration-300

                group-hover:text-black
              "
            >
              <span className="hidden sm:inline">
                View All
              </span>
              <span
                className="
                  transition-transform
                  duration-300

                  group-hover:translate-x-2
                "
              >
                →
              </span>
            </span>
          </Link>
        </motion.div>
      </HeroContainer>

      <div className="pb-10 lg:pb-16" />
    </section>
  );
}
