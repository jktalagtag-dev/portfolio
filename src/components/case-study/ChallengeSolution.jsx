import Reveal from "../motion/Reveal";

/*
 * Challenges & Solutions — the pairing IS the layout: challenge and
 * solution sit either side of an arrow that nudges forward on hover
 * (the site's arrow gesture), making the problem → answer reading
 * direction literal. Cards settle in (scale).
 */

export default function ChallengeSolution({ items }) {
  return (
    <Reveal
      variant="scale"
      stagger={0.1}
      className="space-y-6 lg:space-y-10"
    >
      {items.map((item) => (
        <div
          key={item.challenge}
          data-reveal
          className="
            group

            border
            border-neutral-200

            p-6
            sm:p-10

            grid
            md:grid-cols-[1fr_auto_1fr]

            gap-8
            md:gap-10

            transition-colors
            duration-500

            hover:border-neutral-400
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

                text-xl
                sm:text-2xl

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
              md:flex

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

                text-neutral-600
                leading-relaxed
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
