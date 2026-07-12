import { useLayoutEffect, useRef, useState } from "react";

import SectionContainer from "../../components/ui/SectionContainer";
import Reveal from "../../components/motion/Reveal";
import DrawLine from "../../components/motion/DrawLine";
import { gsap, ScrollTrigger, scheduleRefresh } from "../../utils/gsap";

import { experience } from "../../data/experience";

/*
 * Experience. Two-column sticky layout with a real drawn spine (a
 * vertical DrawLine that draws itself down as you scroll) and a live
 * index in the left column: a ScrollTrigger per entry tracks which
 * one is centered in view and updates the counter + highlighted
 * title, so the pinned column stays true to where you actually are
 * rather than showing static copy. Runs alongside Reveal's own
 * one-shot entrance animation — separate concerns, no conflict.
 * Motion character stays "slide". overflow-x-clip so the sticky
 * column works.
 */

export default function Experience() {
  const rowRefs = useRef([]);
  const [active, setActive] = useState(0);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      rowRefs.current.forEach((row, i) => {
        if (!row) return;
        ScrollTrigger.create({
          trigger: row,
          // Aligned with where the sticky column sits (lg:top-32),
          // not dead-center — see Skills.jsx for why.
          start: "top 35%",
          end: "bottom 35%",
          onToggle: (self) => self.isActive && setActive(i),
        });
      });
    });

    scheduleRefresh();

    return () => ctx.revert();
  }, []);

  return (
    <section id="experience" className="overflow-x-clip">
      <SectionContainer>
        <div className="py-20 lg:py-40">
          <Reveal
            variant="slide"
            stagger={0.12}
            className="
              grid
              grid-cols-1
              lg:grid-cols-12
              gap-12
              lg:gap-10
            "
          >
            {/* Sticky title */}
            <div
              className="
                lg:col-span-4

                lg:sticky
                lg:top-32
                lg:self-start
              "
            >
              <p
                data-reveal
                className="
                  text-[11px]
                  uppercase
                  tracking-[0.3em]
                  text-neutral-400
                "
              >
                Experience
              </p>

              <p
                data-reveal
                className="
                  mt-2

                  text-xs
                  tabular-nums
                  text-neutral-400
                "
              >
                {String(active + 1).padStart(2, "0")} /{" "}
                {String(experience.length).padStart(2, "0")}
              </p>

              <div className="mt-10 space-y-4">
                {experience.map((item, i) => (
                  <p
                    key={item.title}
                    data-reveal
                    className={`
                      transition-all
                      duration-500

                      ${
                        i === active
                          ? "text-2xl sm:text-3xl font-light text-neutral-900"
                          : "text-base text-neutral-300"
                      }
                    `}
                  >
                    {item.title}
                  </p>
                ))}
              </div>
            </div>

            {/* Timeline */}
            <div className="lg:col-span-8">
              <div className="relative">
                {/* Drawn spine */}
                <DrawLine
                  axis="y"
                  scrub
                  className="
                    absolute
                    left-0
                    top-0

                    h-full
                    w-px

                    bg-neutral-200
                  "
                />

                {experience.map((item, index) => (
                  <article
                    key={index}
                    ref={(el) => (rowRefs.current[index] = el)}
                    data-reveal
                    className="
                      group

                      relative

                      pl-8
                      lg:pl-12

                      pb-14
                      lg:pb-20

                      last:pb-0
                    "
                  >
                    {/* Node on the spine */}
                    <span
                      className="
                        absolute
                        left-0
                        top-[0.55rem]

                        h-[9px]
                        w-[9px]

                        -translate-x-1/2

                        rounded-full

                        border
                        border-neutral-900

                        bg-[#F8F8F8]

                        transition-colors
                        duration-500

                        group-hover:bg-neutral-900
                      "
                    />

                    <p
                      className="
                        text-[11px]
                        uppercase
                        tracking-[0.25em]
                        text-neutral-400
                      "
                    >
                      {item.year}
                    </p>

                    {item.featured && (
                      <div
                        className="
                          mt-4

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
                        "
                      >
                        Featured Capstone Project
                      </div>
                    )}

                    <h3
                      className={`
                        mt-4

                        font-light
                        tracking-tight
                        leading-tight

                        ${
                          item.featured
                            ? "text-2xl sm:text-4xl"
                            : "text-2xl sm:text-3xl"
                        }
                      `}
                    >
                      {item.title}
                    </h3>

                    <p
                      className="
                        mt-3

                        text-[11px]
                        uppercase
                        tracking-[0.25em]

                        text-neutral-400
                      "
                    >
                      {item.company}
                    </p>

                    <p
                      className="
                        mt-6

                        max-w-2xl

                        text-base
                        sm:text-lg

                        leading-relaxed
                        text-neutral-600
                      "
                    >
                      {item.description}
                    </p>

                    <div
                      className="
                        mt-8

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
                  </article>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </SectionContainer>
    </section>
  );
}
