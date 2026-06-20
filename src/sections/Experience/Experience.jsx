import { motion } from "framer-motion";
import SectionContainer from "../../components/ui/SectionContainer";

import {
  fadeUp,
  staggerContainer,
  lineGrow,
} from "../../utils/animations";

import { experience } from "../../data/experience";

export default function Experience() {
  return (
    <section
      id="experience"
      className="min-h-screen py-40"
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
          className="grid grid-cols-12 gap-8"
        >

          {/* Vertical Label */}
          <div
            className="
              hidden
              lg:flex
              col-span-2
              items-start
              pt-8
              gap-6
            "
          >
            <motion.div
              variants={lineGrow}
              className="w-px h-[360px] bg-neutral-200"
            />

            <motion.span
              variants={fadeUp}
              className="
                text-[11px]
                uppercase
                tracking-[0.25em]
                text-neutral-400
                [writing-mode:vertical-rl]
                rotate-180
              "
            >
              EXPERIENCE · 2026
            </motion.span>
          </div>

          {/* Content */}
          <div className="col-span-12 lg:col-span-10">

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
                Experience.
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
                Professional experience, academic projects,
                and milestones that shaped my journey as a
                developer and designer.
              </p>
            </motion.div>

            {/* Experience List */}
            <motion.div
              variants={staggerContainer}
              className="mt-24"
            >
              {experience.map((item, index) => {
                const isFeatured =
                  item.title.includes("Full-Stack");

                return (
                  <motion.div
                    key={index}
                    variants={fadeUp}
                    className={`
                      group
                      border-t
                      border-neutral-200
                      py-16
                      transition-all
                      duration-500
                      ${
                        isFeatured
                          ? "pl-0 lg:pl-8 border-l border-l-neutral-300"
                          : ""
                      }
                    `}
                  >
                    <div className="grid grid-cols-12 gap-8">

                      {/* Year */}
                      <div className="col-span-12 md:col-span-2">

                        <span
                          className="
                            block
                            text-[4rem]
                            xl:text-[5rem]
                            leading-none
                            font-extralight
                            tracking-[-0.08em]
                            text-neutral-200
                            transition-all
                            duration-500
                            group-hover:text-neutral-700
                          "
                        >
                          {item.year}
                        </span>

                      </div>

                      {/* Content */}
                      <div className="col-span-12 md:col-span-10">

                        {isFeatured && (
                          <div
                            className="
                              inline-flex
                              items-center
                              px-3
                              py-1
                              border
                              border-neutral-200
                              text-[11px]
                              uppercase
                              tracking-[0.2em]
                              text-neutral-500
                              mb-6
                            "
                          >
                            Featured Academic Project
                          </div>
                        )}

                        <h3
                          className={`
                            font-light
                            tracking-tight
                            ${
                              isFeatured
                                ? "text-4xl xl:text-5xl"
                                : "text-3xl xl:text-4xl"
                            }
                          `}
                        >
                          {item.title}
                        </h3>

                        <p
                          className="
                            mt-3
                            text-sm
                            uppercase
                            tracking-[0.25em]
                            text-neutral-400
                          "
                        >
                          {item.company}
                        </p>

                        <p
                          className="
                            mt-8
                            max-w-3xl
                            text-lg
                            leading-relaxed
                            text-neutral-600
                          "
                        >
                          {item.description}
                        </p>

                        {/* Tags */}
                        <div
                          className="
                            mt-10
                            flex
                            flex-wrap
                            gap-x-4
                            gap-y-2
                          "
                        >
                          {item.tags.map((tag) => (
                            <span
                              key={tag}
                              className="
                                text-xs
                                uppercase
                                tracking-[0.25em]
                                text-neutral-400
                              "
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                      </div>

                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

          </div>

        </motion.div>

      </SectionContainer>
    </section>
  );
}