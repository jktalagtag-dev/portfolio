import Reveal from "../motion/Reveal";

/*
 * Challenges & Solutions — borderless paired rows, challenge and
 * solution either side of an arrow that nudges forward on hover,
 * making the problem -> answer reading direction literal. Breakpoint
 * aligned to lg (the site-wide fault line) rather than the old
 * md-only split, so this no longer flips layout at a different width
 * than every surrounding section.
 */

export default function ChallengeSolution({ items }) {
  return (
    <Reveal
      variant="scale"
      stagger={0.1}
      className="divide-y divide-neutral-200 border-t border-neutral-200"
    >
      {items.map((item) => (
        <div
          key={item.challenge}
          data-reveal
          className="
            group

            py-10
            lg:py-14

            grid
            lg:grid-cols-[1fr_auto_1fr]

            gap-6
            lg:gap-10
          "
        >
          <div>
            <p
              className="
                text-[11px]
                uppercase
                tracking-[0.25em]
                text-neutral-400
              "
            >
              Challenge
            </p>

            <h3
              className="
                mt-4

                text-2xl
                sm:text-3xl

                font-light
                leading-snug
                tracking-[-0.02em]
              "
            >
              {item.challenge}
            </h3>
          </div>

          {/* The reading direction, made literal */}
          <span
            aria-hidden="true"
            className="
              hidden
              lg:flex

              items-center

              text-2xl
              font-light
              text-neutral-300

              transition-all
              duration-500

              group-hover:translate-x-2
              group-hover:text-neutral-900
            "
          >
            →
          </span>

          <div>
            <p
              className="
                text-[11px]
                uppercase
                tracking-[0.25em]
                text-neutral-400
              "
            >
              Solution
            </p>

            <p
              className="
                mt-4

                text-lg
                leading-relaxed
                text-neutral-600
              "
            >
              {item.solution}
            </p>
          </div>
        </div>
      ))}
    </Reveal>
  );
}
