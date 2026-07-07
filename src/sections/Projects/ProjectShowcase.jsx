import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { projects } from "../../data/projects";

import CinematicImage from "../../components/ui/CinematicImage";

import { fadeUp, staggerContainer } from "../../utils/animations";

/*
 * Cinematic work showcase (Home) — the featured project and
 * the two that follow, each presented as a full-bleed
 * scroll-expanding image with a centered editorial title.
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
              ? "h-[60svh] lg:h-[85svh]"
              : "h-[48svh] lg:h-[70svh]"
          }
        >
          {/* Hover badge — the video's central play button, ours */}
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

      {/* Centered meta */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{
          once: true,
          amount: 0.4,
        }}
        className="
          px-5

          py-16
          lg:py-24

          text-center
        "
      >
        <motion.p
          variants={fadeUp}
          className="
            text-[11px]
            uppercase
            tracking-[0.3em]
            text-neutral-400
          "
        >
          {featured
            ? "Featured Work"
            : `Project ${project.number}`}
          &ensp;·&ensp;
          {project.year}
        </motion.p>

        <motion.h2
          variants={fadeUp}
          className="mt-6"
        >
          <Link
            to={`/work/${project.slug}`}
            className="
              inline-block

              text-[2.5rem]
              sm:text-[4rem]
              lg:text-[5.5rem]

              font-light
              leading-[0.95]
              tracking-[-0.06em]

              transition-colors
              duration-500

              hover:text-neutral-500
            "
          >
            {project.title}
          </Link>
        </motion.h2>

        <motion.p
          variants={fadeUp}
          className="
            mx-auto
            mt-6

            max-w-xl

            text-base
            sm:text-lg

            leading-relaxed
            text-neutral-500
          "
        >
          {project.description}
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="mt-8"
        >
          <Link
            to={`/work/${project.slug}`}
            className="
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
            View Case Study →
          </Link>
        </motion.div>
      </motion.div>
    </article>
  );
}

export default function ProjectShowcase() {
  return (
    <section id="projects">
      {shownProjects.map((project, index) => (
        <ShowcaseItem
          key={project.slug}
          project={project}
          featured={index === 0}
        />
      ))}

      {/* All work */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="
          border-t
          border-neutral-200

          py-20
          lg:py-28

          text-center
        "
      >
        <Link
          to="/work"
          className="
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
          View All Work →
        </Link>
      </motion.div>
    </section>
  );
}
