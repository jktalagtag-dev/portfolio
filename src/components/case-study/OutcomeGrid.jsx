import Reveal from "../motion/Reveal";

/*
 * Outcome highlights — feature labels wipe open (clip).
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

            min-h-[120px]
            sm:min-h-[150px]

            flex
            items-end
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
