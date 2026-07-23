import { useLayoutEffect, useRef, useState } from "react";

import Reveal from "../motion/Reveal";
import { gsap, ScrollTrigger, scheduleRefresh } from "../../utils/gsap";

/*
 * Process as a pinned scroll moment — the case study's one
 * sticky sequence: a giant ghost numeral holds on the left while
 * the steps scroll past on the right, each step taking the
 * spotlight (full ink) as it crosses the reading line and the
 * numeral counting up in lockstep. Same ScrollTrigger-per-row
 * live-index machinery as Experience.jsx — proven against Lenis,
 * no GSAP pinning involved (CSS sticky does the holding).
 * Below lg it relaxes to a plain numbered list.
 */

export default function ProcessPinned({ steps }) {
  const rowRefs = useRef([]);
  const [active, setActive] = useState(0);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      rowRefs.current.forEach((row, i) => {
        if (!row) return;
        ScrollTrigger.create({
          trigger: row,
          // Aligned with where the sticky numeral sits (lg:top-32),
          // matching Experience.jsx's convention.
          start: "top 45%",
          end: "bottom 45%",
          onToggle: (self) => self.isActive && setActive(i),
        });
      });
    });

    scheduleRefresh();

    return () => ctx.revert();
  }, []);

  return (
    <div
      className="
        grid
        grid-cols-1
        lg:grid-cols-12

        gap-12
        lg:gap-10
      "
    >
      {/* Pinned numeral — desktop only; the list carries its own
          numbering below lg. */}
      <div
        className="
          hidden
          lg:block

          lg:col-span-5

          lg:sticky
          lg:top-32
          lg:self-start
        "
      >
        <p
          className="
            text-[10rem]
            xl:text-[13rem]

            font-extralight
            leading-[0.8]
            tracking-[-0.06em]

            tabular-nums
            text-neutral-200
          "
        >
          0{active + 1}
        </p>

        <p
          className="
            mt-6

            text-xs
            tabular-nums
            text-neutral-400
          "
        >
          {String(active + 1).padStart(2, "0")} /{" "}
          {String(steps.length).padStart(2, "0")}
        </p>
      </div>

      {/* Steps */}
      <div
        className="
          lg:col-span-7

          space-y-14
          lg:space-y-28
        "
      >
        {steps.map((step, index) => (
          <Reveal key={step.title} variant="rise">
            <div
              ref={(el) => (rowRefs.current[index] = el)}
              className={`
                transition-opacity
                duration-500

                ${
                  index === active
                    ? "lg:opacity-100"
                    : "lg:opacity-30"
                }
              `}
            >
              <p
                className="
                  lg:hidden

                  text-[11px]
                  uppercase
                  tracking-[0.25em]
                  text-neutral-400

                  tabular-nums
                "
              >
                0{index + 1}
              </p>

              <h3
                className="
                  mt-3
                  lg:mt-0

                  text-2xl
                  sm:text-3xl

                  font-light
                  leading-tight
                  tracking-[-0.02em]
                "
              >
                {step.title}
              </h3>

              <p
                className="
                  mt-4

                  max-w-xl

                  text-lg
                  leading-relaxed
                  text-neutral-600
                "
              >
                {step.description}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
