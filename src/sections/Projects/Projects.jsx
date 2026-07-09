import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import SectionContainer from "../../components/ui/SectionContainer";
import ProjectCard from "../../components/cards/ProjectCard";
import MaskText from "../../components/motion/MaskText";
import Reveal from "../../components/motion/Reveal";

import { projects } from "../../data/projects";

/*
 * Work archive. Scroll entrances are GSAP (heading wipes up, each
 * row rises in, card-tier rows scale in); the desktop
 * hover-preview panel and the on-hover text shift stay Framer —
 * those are pointer interactions, not scroll motion.
 */

export default function Projects({ variant = "archive" }) {
  const [activeProject, setActiveProject] = useState(null);

  const featuredProjects = projects.slice(0, 2);

  const displayedProjects =
    variant === "featured" ? featuredProjects : projects;

  return (
    <section id="projects" className="overflow-hidden">
      <SectionContainer>
        <div className="py-20 lg:py-40">
          {/* Header */}
          <Reveal variant="rise" stagger={0.1}>
            <p
              data-reveal
              className="
                text-[11px]
                uppercase
                tracking-[0.3em]
                text-neutral-400
                mb-8
              "
            >
              {variant === "featured"
                ? "Featured Work"
                : "All Projects"}
            </p>

            <div className="max-w-4xl">
              <h2
                className="
                  max-w-[280px]
                  sm:max-w-none

                  text-[2.5rem]
                  sm:text-5xl
                  xl:text-[6rem]

                  font-light
                  leading-[0.9]
                  tracking-[-0.08em]
                "
              >
                <MaskText as="span" className="block" delay={0}>
                  {variant === "featured" ? "Featured" : "All"}
                </MaskText>
                <MaskText
                  as="span"
                  className="block"
                  delay={0.12}
                >
                  {variant === "featured" ? "work." : "projects."}
                </MaskText>
              </h2>

              <p
                data-reveal
                className="
                  mt-6
                  max-w-lg

                  text-base
                  sm:text-lg

                  leading-relaxed
                  text-neutral-500
                "
              >
                A selection of projects showcasing my approach to
                frontend development, thoughtful interfaces, and
                user-focused experiences.
              </p>
            </div>
          </Reveal>

          {/* Projects */}
          <div className="mt-16 lg:mt-24">
            {displayedProjects.map((project) => {
              // Card-tier: a slim, bounded row — scales in.
              if (project.tier === "card") {
                return (
                  <Reveal
                    key={project.number}
                    variant="scale"
                    className="
                      border-t
                      border-neutral-200

                      py-8
                    "
                  >
                    <div className="max-w-sm">
                      <ProjectCard project={project} compact />
                    </div>
                  </Reveal>
                );
              }

              const isActive =
                activeProject?.number === project.number;

              return (
                <Reveal key={project.number} variant="rise">
                  <div
                    onMouseEnter={() => setActiveProject(project)}
                    onMouseLeave={() => setActiveProject(null)}
                    className="
                      group
                      border-t
                      border-neutral-200

                      py-10
                      lg:py-16
                    "
                  >
                    <div
                      className="
                        grid
                        grid-cols-1
                        xl:grid-cols-12
                        gap-8
                        items-start
                      "
                    >
                      {/* Mobile Number + Title */}
                      <div className="xl:hidden">
                        <div className="flex items-end gap-4">
                          <span
                            className="
                              text-5xl
                              font-extralight
                              tracking-[-0.08em]
                              text-neutral-200
                            "
                          >
                            {project.number}
                          </span>

                          <h3
                            className="
                              text-3xl
                              font-light
                              tracking-tight
                              pb-1
                            "
                          >
                            {project.title}
                          </h3>
                        </div>
                      </div>

                      {/* Desktop Number */}
                      <div className="hidden xl:block xl:col-span-2">
                        <span
                          className="
                            text-[8rem]
                            leading-none
                            font-extralight
                            tracking-[-0.08em]

                            text-neutral-200

                            transition-all
                            duration-500

                            group-hover:text-neutral-700
                          "
                        >
                          {project.number}
                        </span>
                      </div>

                      {/* Content */}
                      <div className="xl:col-span-6">
                        <motion.h3
                          animate={{ x: isActive ? 20 : 0 }}
                          transition={{ duration: 0.35 }}
                          className="
                            hidden
                            xl:block

                            text-5xl
                            font-light
                            tracking-tight
                          "
                        >
                          {project.title}
                        </motion.h3>

                        {/* Mobile Preview */}
                        <div
                          className="
                            mt-6
                            xl:hidden

                            overflow-hidden
                            border
                            border-neutral-200
                          "
                        >
                          <img
                            src={project.image}
                            alt={project.title}
                            loading="lazy"
                            decoding="async"
                            className="
                              w-full
                              aspect-[16/10]
                              object-cover
                            "
                          />
                        </div>

                        <motion.p
                          animate={{ x: isActive ? 12 : 0 }}
                          transition={{ duration: 0.4 }}
                          className="
                            mt-6

                            max-w-xl

                            text-base
                            sm:text-lg

                            leading-relaxed
                            text-neutral-600
                          "
                        >
                          {project.description}
                        </motion.p>

                        <div
                          className="
                            mt-4

                            flex
                            flex-wrap
                            gap-x-8
                            gap-y-3
                          "
                        >
                          <div>
                            <p
                              className="
                                text-[10px]
                                uppercase
                                tracking-[0.2em]
                                text-neutral-400
                              "
                            >
                              Role
                            </p>

                            <p className="mt-1 text-sm text-neutral-600">
                              {project.role}
                            </p>
                          </div>

                          <div>
                            <p
                              className="
                                text-[10px]
                                uppercase
                                tracking-[0.2em]
                                text-neutral-400
                              "
                            >
                              Timeline
                            </p>

                            <p className="mt-1 text-sm text-neutral-600">
                              {project.timeline}
                            </p>
                          </div>
                        </div>

                        {/* Tech Stack */}
                        <div
                          className="
                            mt-6
                            flex
                            flex-wrap
                            gap-2
                          "
                        >
                          {project.tech.map((tech) => (
                            <span
                              key={tech}
                              className="
                                px-3
                                py-1.5

                                text-[11px]
                                uppercase

                                tracking-[0.12em]

                                border
                                border-neutral-200

                                text-neutral-500
                              "
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        {/* CTA */}
                        <div
                          className="
                            mt-8

                            flex
                            flex-col
                            gap-4

                            sm:flex-row
                            sm:flex-wrap
                            sm:gap-8
                          "
                        >
                          <Link
                            to={`/work/${project.slug}`}
                            className="
                              text-sm
                              uppercase
                              tracking-[0.15em]
                              text-neutral-500

                              transition-all
                              duration-300

                              hover:text-black
                            "
                          >
                            View Case Study →
                          </Link>

                          {project.live !== "#" && (
                            <a
                              href={project.live}
                              target="_blank"
                              rel="noreferrer"
                              className="
                                text-sm
                                uppercase
                                tracking-[0.15em]
                                text-neutral-500

                                transition-all
                                duration-300

                                hover:text-black
                              "
                            >
                              Live Demo ↗
                            </a>
                          )}

                          {project.github !== "#" && (
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noreferrer"
                              className="
                                text-sm
                                uppercase
                                tracking-[0.15em]
                                text-neutral-500

                                transition-all
                                duration-300

                                hover:text-black
                              "
                            >
                              GitHub ↗
                            </a>
                          )}
                        </div>
                      </div>

                      {/* Desktop Preview */}
                      <div
                        className="
                          hidden
                          xl:flex

                          xl:col-span-4

                          justify-end
                          items-start

                          min-h-[320px]
                          relative
                        "
                      >
                        <AnimatePresence mode="wait">
                          {isActive && (
                            <motion.div
                              key={project.number}
                              initial={{
                                opacity: 0,
                                x: 120,
                                scale: 0.96,
                              }}
                              animate={{
                                opacity: 1,
                                x: 40,
                                scale: 1,
                              }}
                              exit={{
                                opacity: 0,
                                x: 120,
                                scale: 0.96,
                              }}
                              transition={{
                                duration: 0.45,
                                ease: [0.22, 1, 0.36, 1],
                              }}
                              className="
                                absolute
                                top-0
                                -right-24

                                overflow-hidden

                                border
                                border-neutral-200

                                bg-white
                                shadow-2xl
                              "
                            >
                              <img
                                src={project.image}
                                alt={project.title}
                                loading="lazy"
                                decoding="async"
                                className="
                                  w-[460px]
                                  aspect-[4/3]
                                  object-cover
                                "
                              />
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}

            {variant === "archive" && (
              <Reveal
                variant="rise"
                className="
                  mt-20
                  pt-12

                  border-t
                  border-neutral-200
                "
              >
                <p
                  className="
                    max-w-xl

                    text-lg
                    leading-relaxed

                    text-neutral-500
                  "
                >
                  More projects are currently in development. This
                  collection will continue to grow as I explore
                  frontend development, UI implementation, and
                  interactive web experiences.
                </p>
              </Reveal>
            )}

            {variant === "featured" && (
              <Reveal variant="rise" className="mt-16">
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
              </Reveal>
            )}
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}
