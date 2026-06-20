import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import SectionContainer from "../../components/ui/SectionContainer";

import {
  fadeUp,
  staggerContainer,
} from "../../utils/animations";

import { projects } from "../../data/projects";

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <section
      id="projects"
      className="min-h-screen py-40 overflow-hidden"
    >
      <SectionContainer>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            amount: 0.2,
          }}
        >
          {/* Section Label */}
          <motion.p
            variants={fadeUp}
            className="
              text-[11px]
              uppercase
              tracking-[0.3em]
              text-neutral-400
              mb-10
            "
          >
            Projects · 2026
          </motion.p>

          {/* Heading */}
          <motion.div
            variants={fadeUp}
            className="max-w-4xl"
          >
            <h2
              className="
                text-5xl
                xl:text-[6rem]
                font-light
                leading-[0.9]
                tracking-[-0.08em]
              "
            >
              Selected
              <br />
              works.
            </h2>

            <p
              className="
                mt-8
                max-w-lg
                text-lg
                leading-relaxed
                text-neutral-500
              "
            >
              A collection of projects focused on
              crafting modern digital experiences.
            </p>
          </motion.div>

          {/* Projects */}
          <motion.div
            variants={staggerContainer}
            className="mt-20"
          >
            {projects.map((project) => {
              const isActive =
                activeProject?.number === project.number;

              return (
                <motion.div
                  key={project.number}
                  variants={fadeUp}
                  onMouseEnter={() => setActiveProject(project)}
                  onMouseLeave={() => setActiveProject(null)}
                  className="
                    group
                    border-t
                    border-neutral-200
                    py-16
                  "
                >
                  <div className="grid grid-cols-12 gap-8 items-start">

                    {/* Number */}
                    <div className="col-span-12 md:col-span-2">
                      <span
                        className="
                          text-[6rem]
                          xl:text-[8rem]
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
                    <div className="col-span-12 xl:col-span-6">

                      <motion.h3
                        animate={{
                          x: isActive ? 20 : 0,
                        }}
                        transition={{
                          duration: 0.35,
                        }}
                        className="
                          text-4xl
                          xl:text-5xl
                          font-light
                          tracking-tight
                        "
                      >
                        {project.title}
                      </motion.h3>

                      <motion.p
                        animate={{
                          x: isActive ? 12 : 0,
                        }}
                        transition={{
                          duration: 0.4,
                        }}
                        className="
                          mt-6
                          max-w-xl
                          text-lg
                          leading-relaxed
                          text-neutral-600
                        "
                      >
                        {project.description}
                      </motion.p>

                      {/* Tech Stack */}
                      <motion.div
                        animate={{
                          x: isActive ? 12 : 0,
                        }}
                        transition={{
                          duration: 0.45,
                        }}
                        className="
                          mt-8
                          flex
                          flex-wrap
                          items-center
                          gap-3
                          text-xs
                          uppercase
                          tracking-[0.25em]
                          text-neutral-400
                        "
                      >
                        {project.tech.map((tech, index) => (
                          <div
                            key={tech}
                            className="flex items-center gap-3"
                          >
                            <span>{tech}</span>

                            {index !== project.tech.length - 1 && (
                              <span>·</span>
                            )}
                          </div>
                        ))}
                      </motion.div>

                      {/* CTA Row */}
                      <div className="mt-10 flex flex-wrap gap-8">

                        <Link
                          to={`/projects/${project.slug}`}
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
                          → View Case Study
                        </Link>

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

                      </div>

                    </div>

                    {/* Editorial Preview */}
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
                </motion.div>
              );
            })}
          </motion.div>

        </motion.div>
      </SectionContainer>
    </section>
  );
}
