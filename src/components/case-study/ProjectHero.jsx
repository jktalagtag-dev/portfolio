import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import HeroContainer from "../ui/HeroContainer";
import MetadataCard from "./MetadataCard";

import { fadeUp, staggerContainer } from "../../utils/animations";

export default function ProjectHero({ project }) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="show"
    >
      {/* ====================================================== */}
      {/* PROJECT HERO */}
      {/* ====================================================== */}

      <section className="pt-36 lg:pt-44 pb-24">
        <HeroContainer>

          <motion.div variants={fadeUp}>
            <Link
              to="/work"
              className="
                inline-flex
                items-center
                gap-2

                text-[11px]
                uppercase
                tracking-[0.25em]
                text-neutral-400

                transition-colors
                duration-300

                hover:text-black
              "
            >
              ← Back to Work
            </Link>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mt-20"
          >

            <p
              className="
                text-[11px]
                uppercase
                tracking-[0.3em]
                text-neutral-400
              "
            >
              {project.number} · Case Study
            </p>

            <h1
              className="
                mt-6

                max-w-6xl

                text-[4rem]
                sm:text-[5rem]
                lg:text-[7rem]
                xl:text-[8.5rem]

                leading-[0.85]
                tracking-[-0.08em]
                font-extralight
              "
            >
              {project.title}
            </h1>

            <p
              className="
                mt-10

                max-w-3xl

                text-lg
                sm:text-xl

                leading-relaxed
                text-neutral-600
              "
            >
              {project.description}
            </p>

          </motion.div>
        </HeroContainer>
      </section>

      {/* ====================================================== */}
      {/* PROJECT METADATA */}
      {/* ====================================================== */}

      <section className="pb-24">
        <HeroContainer>

          <motion.div
            variants={fadeUp}
            className="
              border-y
              border-neutral-200

              py-12

              grid
              grid-cols-2
              lg:grid-cols-4

              gap-10
            "
          >
            <MetadataCard
              label="Role"
              value={project.role}
            />

            <MetadataCard
              label="Timeline"
              value={project.timeline}
            />

            <MetadataCard
              label="Year"
              value={project.year}
            />

            <MetadataCard
              label="Stack"
              value={project.tech}
            />
          </motion.div>

        </HeroContainer>
      </section>

      {/* ====================================================== */}
      {/* HERO IMAGE */}
      {/* ====================================================== */}

      <section className="pb-32">
        <HeroContainer>

          <motion.div
            variants={fadeUp}
            className="
              overflow-hidden
              border
              border-neutral-200
            "
          >
            <img
              src={project.image}
              alt={project.title}
              fetchPriority="high"
              decoding="async"
              className="
                w-full
                aspect-[16/9]
                object-cover
              "
            />
          </motion.div>

        </HeroContainer>
      </section>
    </motion.div>
  );
}
