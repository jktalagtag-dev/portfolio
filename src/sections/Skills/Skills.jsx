import SectionContainer from "../../components/ui/SectionContainer";
import VerticalLabel from "../../components/ui/VerticalLabel";
import Reveal from "../../components/motion/Reveal";

import skills from "../../data/skills";

/*
 * Skills. Motion character: "scale" — the heading and each skill
 * row settle in from slightly larger, distinct from the About
 * rise above and the Experience slide below.
 */

export default function Skills() {
  return (
    <section id="skills" className="overflow-hidden">
      <SectionContainer>
        <div className="py-20 lg:py-40">
          <Reveal
            variant="scale"
            stagger={0.1}
            className="
              grid
              grid-cols-1
              lg:grid-cols-12
              gap-10
            "
          >
            <VerticalLabel label="SKILLS · 2026" />

            {/* Content */}
            <div className="lg:col-span-10">
              {/* Heading */}
              <div data-reveal className="max-w-4xl">
                <h2
                  className="
                    max-w-[300px]
                    sm:max-w-none

                    text-[2.5rem]
                    sm:text-5xl
                    xl:text-[6rem]

                    font-light
                    leading-[0.9]
                    tracking-[-0.08em]
                  "
                >
                  What I bring
                  <br />
                  to the table.
                </h2>
              </div>

              {/* Skills */}
              <div className="mt-16 lg:mt-32">
                {skills.map((skill) => (
                  <div
                    key={skill.number}
                    data-reveal
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
                        md:grid-cols-12
                        gap-6
                        lg:gap-8
                      "
                    >
                      {/* Number */}
                      <div className="col-span-12 md:col-span-2">
                        <span
                          className="
                            text-[3.5rem]
                            sm:text-[4.5rem]
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
                          {skill.number}
                        </span>
                      </div>

                      {/* Content */}
                      <div className="col-span-12 md:col-span-10">
                        <h3
                          className="
                            text-[1.75rem]
                            sm:text-3xl
                            xl:text-4xl

                            font-light
                            tracking-tight
                          "
                        >
                          {skill.title}
                        </h3>

                        <p
                          className="
                            mt-5
                            max-w-2xl

                            text-base
                            sm:text-lg

                            leading-relaxed
                            text-neutral-600
                          "
                        >
                          {skill.description}
                        </p>

                        <p
                          className="
                            mt-6

                            text-[11px]
                            uppercase

                            tracking-[0.18em]
                            sm:tracking-[0.28em]

                            text-neutral-400

                            break-words
                          "
                        >
                          {skill.tech}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </SectionContainer>
    </section>
  );
}
