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
      className="overflow-hidden"
    >
      <SectionContainer>
        <div className="py-20 lg:py-40">

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            className="
              grid
              grid-cols-1
              lg:grid-cols-12
              gap-8
            "
          >
            {/* Vertical Label */}
            <div
              className="
                hidden
                lg:flex
                col-span-2
                items-start
                gap-6
              "
            >
              <motion.div
                variants={lineGrow}
                className="w-px bg-neutral-200"
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
            <div className="lg:col-span-10">

              {/* Heading */}
              <motion.div
                variants={fadeUp}
                className="max-w-4xl"
              >
                <h2
                  className="
                    text-[2.5rem]
                    sm:text-5xl
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
                    mt-6
                    max-w-lg

                    text-base
                    sm:text-lg

                    leading-relaxed
                    text-neutral-500
                  "
                >
                  Professional experience,
                  academic achievements,
                  and projects that shaped
                  my development journey.
                </p>
              </motion.div>

              {/* Timeline */}
              <motion.div
                variants={staggerContainer}
                className="mt-16 lg:mt-24"
              >
                {experience.map((item, index) => {
                  const isFeatured =
                    item.title.includes("Full-Stack");

                  return (
                    <motion.article
                      key={index}
                      variants={fadeUp}
                      className="
                        group

                        border-t
                        border-neutral-200

                        py-12
                        lg:py-20
                      "
                    >
                      <div
                        className="
                          grid
                          grid-cols-1
                          xl:grid-cols-12
                          gap-8
                        "
                      >
                        {/* Year */}
                        <div
                          className="
                            xl:col-span-2
                          "
                        >
                          <span
                            className="
                              text-[4rem]
                              sm:text-[5rem]
                              xl:text-[7rem]

                              leading-none
                              font-extralight
                              tracking-[-0.08em]

                              text-neutral-200

                              transition-all
                              duration-500

                            
                            "
                          >
                            {item.year}
                          </span>
                        </div>

                        {/* Content */}
                        <div
                          className="
                            xl:col-span-10
                            max-w-4xl
                          "
                        >
                          {/* Featured Badge */}
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
                              Featured Capstone Project
                            </div>
                          )}

                          {/* Title */}
                          <h3
                            className={`
                              font-light
                              tracking-tight
                              leading-none

                              ${
                                isFeatured
                                  ? "text-3xl sm:text-5xl"
                                  : "text-3xl sm:text-4xl"
                              }
                            `}
                          >
                            {item.title}
                          </h3>

                          {/* Company */}
                          <p
                            className="
                              mt-4

                              text-[11px]
                              uppercase
                              tracking-[0.25em]

                              text-neutral-400
                            "
                          >
                            {item.company}
                          </p>

                          {/* Description */}
                          <p
                            className="
                              mt-8

                              max-w-3xl

                              text-base
                              sm:text-lg

                              leading-relaxed
                              text-neutral-600
                            "
                          >
                            {item.description}
                          </p>

                          {/* Metadata */}
                          <div
                            className="
                              mt-10

                              flex
                              flex-wrap
                              gap-x-6
                              gap-y-3
                            "
                          >
                            {item.tags.map((tag) => (
                              <span
                                key={tag}
                                className="
                                  text-[11px]
                                  uppercase
                                  tracking-[0.2em]

                                  text-neutral-400
                                "
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>

                      </div>
                    </motion.article>
                  );
                })}
              </motion.div>

            </div>

          </motion.div>

        </div>
      </SectionContainer>
    </section>
  );
}