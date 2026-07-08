import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { projects } from "../../data/projects";

import HeroContainer from "../../components/ui/HeroContainer";
import CinematicImage from "../../components/ui/CinematicImage";
import ProjectCard from "../../components/cards/ProjectCard";

import { fadeUp, staggerContainer } from "../../utils/animations";

/*
 * Selected work (Home) — full-bleed scroll-expanding images
 * for flagship projects only, each followed by a single calm
 * editorial read: title, then description, then CTA — one
 * focal point at a time, not competing side by side. Everything
 * else surfaces below in a quieter "More Work" strip, so
 * visual weight matches actual significance.
 */

const flagshipProjects = projects.filter(
  (project) => project.tier === "flagship"
);

const restProjects = projects.filter(
  (project) => project.tier !== "flagship"
);

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

      {/* Baseline — one focal read at a time */}
      <HeroContainer>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            amount: 0.4,
          }}
        >
          {/* Eyebrow + ruler */}
          <motion.p
            variants={fadeUp}
            className="
              text-[11px]
              uppercase
              tracking-[0.3em]
              text-neutral-400

              border-b
              border-neutral-200

              pb-4
            "
          >
            {project.number}&ensp;·&ensp;{project.year}
          </motion.p>

          {/* Title */}
          <motion.h2
            variants={fadeUp}
            className="
              mt-10
              sm:mt-12
              lg:mt-14
            "
          >
            <Link
              to={`/work/${project.slug}`}
              className="
                inline-block

                text-[2.25rem]
                sm:text-[3.25rem]
                lg:text-[4.5rem]

                font-light
                leading-[0.95]
                tracking-[-0.05em]

                transition-colors
                duration-500

                hover:text-neutral-500
              "
            >
              {project.title}
            </Link>
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={fadeUp}
            className="
              mt-8
              lg:mt-10

              max-w-2xl

              text-lg

              leading-relaxed
              text-neutral-500
            "
          >
            {project.description}
          </motion.p>

          {/* CTA */}
          <motion.div variants={fadeUp}>
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
            ({String(flagshipProjects.length).padStart(2, "0")})
          </p>
        </motion.div>
      </HeroContainer>

      {/* Flagship projects */}
      <div
        className="
          mt-14
          lg:mt-20

          space-y-24
          lg:space-y-36
        "
      >
        {flagshipProjects.map((project, index) => (
          <ShowcaseItem
            key={project.slug}
            project={project}
            featured={index === 0}
          />
        ))}
      </div>

      {/* More Work — everything else, at a lighter weight */}
      {restProjects.length > 0 && (
        <HeroContainer>
          <div
            className="
              mt-24
              lg:mt-32
            "
          >
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="
                text-[11px]
                uppercase
                tracking-[0.3em]
                text-neutral-400

                pb-5

                border-b
                border-neutral-200
              "
            >
              More Work
            </motion.p>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="
                mt-10

                grid
                grid-cols-1
                sm:grid-cols-2

                gap-6
                lg:gap-8
              "
            >
              {restProjects.map((project) => (
                <ProjectCard
                  key={project.slug}
                  project={project}
                  compact
                />
              ))}
            </motion.div>
          </div>
        </HeroContainer>
      )}

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
