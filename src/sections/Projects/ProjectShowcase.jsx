import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { projects } from "../../data/projects";

import HeroContainer from "../../components/ui/HeroContainer";
import ProjectExhibition from "./ProjectExhibition";

import { fadeUp } from "../../utils/animations";

/*
 * Selected work (Home) — a masthead scrolls in normally, then
 * the exhibition pins and scrubs each project into the next as
 * an immersive scene, releasing into the "All Projects" link.
 */

export default function ProjectShowcase() {
  return (
    <section id="projects" className="pt-14 sm:pt-16 lg:pt-28">
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
            ({String(projects.length).padStart(2, "0")})
          </p>
        </motion.div>
      </HeroContainer>

      {/* Pinned, scroll-scrubbed exhibition */}
      <div className="mt-14 lg:mt-16">
        <ProjectExhibition projects={projects} />
      </div>

      {/* All projects */}
      <HeroContainer>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="
            mt-14
            sm:mt-16
            lg:mt-28

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

              py-8
              sm:py-10
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

      <div className="pb-8 sm:pb-10 lg:pb-16" />
    </section>
  );
}
