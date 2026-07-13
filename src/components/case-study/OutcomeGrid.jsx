import Reveal from "../motion/Reveal";

/*
 * Outcome highlights — compact cells that fill white and sharpen
 * their frame on hover (a quiet lift off the #F8F8F8 ground),
 * wiping open in sequence. Deliberately denser and plainer than
 * Objectives' numbered cards — these are results, not goals.
 */

export default function OutcomeGrid({ highlights }) {
  return (
    <Reveal
      variant="clip"
      stagger={0.08}
      className="
        grid
        grid-cols-2
        lg:grid-cols-3

        gap-4
        sm:gap-6
      "
    >
      {highlights.map((item) => (
        <div
          key={item}
          data-reveal
          className="
            border
            border-neutral-200

            p-6
            sm:p-8

            min-h-[110px]
            sm:min-h-[130px]

            flex
            items-end

            transition-colors
            duration-500

            hover:border-neutral-400
            hover:bg-white
          "
        >
          <h3
            className="
              text-base
              sm:text-xl

              font-light
              leading-snug
            "
          >
            {item}
          </h3>
        </div>
      ))}
    </Reveal>
  );
}
