import Reveal from "../motion/Reveal";

/*
 * Outcome highlights — borderless, top-hairline cells that darken
 * on hover (a quiet ink-in, no boxed card). Deliberately denser and
 * plainer than Objectives' numbered columns — these are results,
 * not goals.
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

        gap-x-8
        gap-y-10
      "
    >
      {highlights.map((item) => (
        <div
          key={item}
          data-reveal
          className="
            group

            border-t
            border-neutral-300

            pt-5
          "
        >
          <h3
            className="
              text-lg
              sm:text-xl

              font-light
              leading-snug

              text-neutral-500

              transition-colors
              duration-500

              group-hover:text-neutral-900
            "
          >
            {item}
          </h3>
        </div>
      ))}
    </Reveal>
  );
}
