import SectionContainer from "../../components/ui/SectionContainer";
import VerticalLabel from "../../components/ui/VerticalLabel";
import Reveal from "../../components/motion/Reveal";

import { experience } from "../../data/experience";

/*
 * Experience. Motion character: "slide" — the heading and each
 * timeline entry enter from the left, so the section reads as a
 * sequence advancing in time, distinct from the scale/rise/clip
 * of its neighbours.
 */

export default function Experience() {
  return (
    <section id="experience" className="overflow-hidden">
      <SectionContainer>
        <div className="py-20 lg:py-40">
          <Reveal
            variant="slide"
            stagger={0.12}
            className="
              grid
              grid-cols-1
              lg:grid-cols-12
              gap-8
            "
          >
            <VerticalLabel label="EXPERIENCE · 2026" />

            {/* Content */}
            <div className="lg:col-span-10">
              {/* Heading */}
              <div data-reveal className="max-w-4xl">
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
                  Professional experience, academic achievements,
                  and projects that shaped my development journey.
                </p>
              </div>

              {/* Timeline */}
              <div className="mt-16 lg:mt-24">
                {experience.map((item, index) => {
                  const isFeatured = item.featured;

                  return (
                    <article
                      key={index}
                      data-reveal
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
                        <div className="xl:col-span-2">
                          <span
                            className="
                              text-[4rem]
                              sm:text-[5rem]
                              xl:text-[7rem]

                              leading-none
                              font-extralight
                              tracking-[-0.08em]

                              text-neutral-200
                            "
                          >
                            {item.year}
                          </span>
                        </div>

                        {/* Content */}
                        <div className="xl:col-span-10 max-w-4xl">
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
                    </article>
                  );
                })}
              </div>
            </div>
          </Reveal>
        </div>
      </SectionContainer>
    </section>
  );
}
