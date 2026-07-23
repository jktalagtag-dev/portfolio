import Reveal from "../motion/Reveal";

/*
 * Objectives — numbered columns anchored by a top hairline, no
 * boxes: the ghost numeral sits above each goal and inks in on
 * hover (the Skills section's established gesture). Settle-in from
 * slightly larger (scale), distinct from the Challenge list's clip.
 */

export default function Objectives({ objectives }) {
  return (
    <Reveal
      variant="scale"
      stagger={0.08}
      className="
        grid
        grid-cols-1
        sm:grid-cols-2
        xl:grid-cols-4

        gap-x-8
        gap-y-12
      "
    >
      {objectives.map((item, index) => (
        <div
          key={item}
          data-reveal
          className="
            group

            border-t
            border-neutral-300

            pt-6
          "
        >
          <span
            className="
              text-4xl

              font-extralight
              leading-none
              tracking-[-0.06em]

              tabular-nums
              text-neutral-300

              transition-colors
              duration-500

              group-hover:text-neutral-900
            "
          >
            0{index + 1}
          </span>

          <h3
            className="
              mt-5

              text-lg
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
