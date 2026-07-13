import Reveal from "../motion/Reveal";

/*
 * The Challenge — a numbered index of problems, not a card grid:
 * hairline rows with editorial numerals, wiping open in sequence.
 * (Each case-study grid carries its own identity — this one is the
 * "list", Objectives is the numbered card grid, Outcome the compact
 * fill-on-hover cells, Challenge/Solution the paired columns.)
 */

export default function ChallengeGrid({ challenges }) {
  return (
    <Reveal variant="clip" stagger={0.1}>
      {challenges.map((item, index) => (
        <div
          key={item}
          data-reveal
          className="
            group

            flex
            items-baseline

            gap-6
            sm:gap-10

            border-t
            border-neutral-200

            py-7
            sm:py-8

            last:border-b
          "
        >
          <span
            className="
              text-[11px]
              uppercase
              tracking-[0.25em]
              text-neutral-400

              transition-colors
              duration-500

              group-hover:text-neutral-900
            "
          >
            0{index + 1}
          </span>

          <h3
            className="
              text-xl
              sm:text-2xl

              font-light
              leading-snug
              tracking-[-0.03em]
            "
          >
            {item}
          </h3>
        </div>
      ))}
    </Reveal>
  );
}
