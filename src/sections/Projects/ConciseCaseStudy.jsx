import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import HeroContainer from "../../components/ui/HeroContainer";
import MetadataCard from "../../components/case-study/MetadataCard";
import CaseStudySection from "../../components/case-study/CaseStudySection";
import Objectives from "../../components/case-study/Objectives";
import DesignShowcase from "../../components/case-study/DesignShowcase";
import ProjectLinks from "../../components/case-study/ProjectLinks";
import NextProject from "../../components/case-study/NextProject";

import { fadeUp, staggerContainer } from "../../utils/animations";

/*
 * Concise project page — for projects that deserve a dedicated
 * page but not the full flagship pipeline: hero, metadata, key
 * features, optional screenshots, links, next project. No
 * Process / Architecture / Challenges&Solutions / Reflection —
 * those stay flagship-only per CLAUDE.md §7.
 */

export default function ConciseCaseStudy({
  project,
  nextProject,
}) {
  const hasImage = project.image !== "#";
  const hasLinks =
    project.live !== "#" || project.github !== "#";

  return (
    <>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="show"
      >
        {/* ====================================================== */}
        {/* HERO */}
        {/* ====================================================== */}

        <section className="pt-32 lg:pt-40 pb-16 lg:pb-20">
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
              className="mt-16"
            >

              <p
                className="
                  text-[11px]
                  uppercase
                  tracking-[0.3em]
                  text-neutral-400
                "
              >
                {project.number} · Overview
              </p>

              <h1
                className="
                  mt-6

                  max-w-4xl

                  text-[2.5rem]
                  sm:text-5xl
                  xl:text-[6rem]

                  font-light
                  leading-[0.9]
                  tracking-[-0.08em]
                "
              >
                {project.title}
              </h1>

              <p
                className="
                  mt-6

                  max-w-2xl

                  text-lg

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
        {/* METADATA */}
        {/* ====================================================== */}

        <section className="pb-16">
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

        {hasImage && (
          <section className="pb-24">
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
        )}
      </motion.div>

      {/* ====================================================== */}
      {/* CONTENT */}
      {/* ====================================================== */}

      <HeroContainer>

        {project.objectives?.length > 0 && (
          <CaseStudySection label="Key Features">
            <Objectives objectives={project.objectives} />
          </CaseStudySection>
        )}

        {project.gallery?.length > 0 && (
          <CaseStudySection label="Screenshots">
            <DesignShowcase images={project.gallery} />
          </CaseStudySection>
        )}

        {hasLinks && (
          <CaseStudySection label="Explore">
            <ProjectLinks
              live={project.live}
              github={project.github}
            />
          </CaseStudySection>
        )}

      </HeroContainer>

      {/* ====================================================== */}
      {/* NEXT PROJECT */}
      {/* ====================================================== */}

      <NextProject project={nextProject} />
    </>
  );
}
