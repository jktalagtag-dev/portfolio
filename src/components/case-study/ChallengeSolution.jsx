import Reveal from "../motion/Reveal";

/*
 * Challenges & Solutions — paired cards settle in (scale).
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
            border
            border-neutral-200

            p-6
            sm:p-10

            grid
            md:grid-cols-2

            gap-8
            md:gap-12
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
