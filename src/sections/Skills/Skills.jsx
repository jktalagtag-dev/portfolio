import { useLayoutEffect, useRef, useState } from "react";

import SectionContainer from "../../components/ui/SectionContainer";
import Reveal from "../../components/motion/Reveal";
import { gsap, ScrollTrigger, scheduleRefresh } from "../../utils/gsap";

import skills from "../../data/skills";

/*
 * Skills. Two-column sticky layout: a live index pins in the left
 * column while the skill rows scroll past it on the right. The index
 * isn't static copy — a ScrollTrigger per row tracks which one is
 * centered in view and updates the counter + highlighted title, so
 * the pinned column stays true to where you actually are (motion in
 * service of orientation, not decoration). Runs alongside Reveal's
 * own one-shot entrance animation on the same grid — separate
 * concerns, no conflict. Motion character stays "scale" for the
 * entrance (rows settle in from slightly larger). overflow-x-clip
 * (not -hidden) so the sticky column isn't disabled by a scroll
 * container.
 */

export default function Skills() {
  const rowRefs = useRef([]);
  const [active, setActive] = useState(0);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      rowRefs.current.forEach((row, i) => {
        if (!row) return;
        ScrollTrigger.create({
          trigger: row,
          // Rows (~215-270px) are much shorter than the viewport, so
          // tracking against dead-center runs ahead of what's
          // actually being read — align instead with where the
          // sticky column visually sits (lg:top-32).
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
    <section id="skills" className="overflow-x-clip">
      <SectionContainer>
        <div className="py-20 lg:py-40">
          <Reveal
            variant="scale"
            stagger={0.1}
            className="
              grid
              grid-cols-1
              lg:grid-cols-12
              gap-12
              lg:gap-10
            "
          >
            {/* Live index */}
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
                Skills
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
                {String(skills.length).padStart(2, "0")}
              </p>

              <div className="mt-10 space-y-4">
                {skills.map((skill, i) => (
                  <p
                    key={skill.number}
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
                    {skill.title}
                  </p>
                ))}
              </div>
            </div>

            {/* Rows */}
            <div className="lg:col-span-8">
              {skills.map((skill, i) => (
                <div
                  key={skill.number}
                  ref={(el) => (rowRefs.current[i] = el)}
                  data-reveal
                  className="
                    group

                    border-t
                    border-neutral-200

                    py-10
                    lg:py-14

                    first:border-t-0
                    first:pt-0
                    lg:first:pt-0
                  "
                >
                  <div
                    className="
                      flex
                      items-baseline
                      gap-6
                      lg:gap-10
                    "
                  >
                    <span
                      className="
                        text-2xl
                        sm:text-3xl

                        font-extralight
                        tracking-[-0.04em]

                        text-neutral-300

                        transition-colors
                        duration-500

                        group-hover:text-neutral-900
                      "
                    >
                      {skill.number}
                    </span>

                    <div>
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
          </Reveal>
        </div>
      </SectionContainer>
    </section>
  );
}
