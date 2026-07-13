import Reveal from "../motion/Reveal";

/*
 * Objectives — the numbered card grid: an oversized ghost numeral
 * anchors each card, and hovering darkens the frame + numeral (the
 * Skills section's established gesture). Cards settle in from
 * slightly larger (scale), distinct from the Challenge list's clip.
 */

export default function Objectives({ objectives }) {
  return (
    <Reveal
      variant="scale"
      stagger={0.08}
      className="
        grid
        sm:grid-cols-2
        xl:grid-cols-4

        gap-6
      "
    >
      {objectives.map((item, index) => (
        <div
          key={item}
          data-reveal
          className="
            group

            border
            border-neutral-200

            p-8

            flex
            flex-col
            justify-between

            gap-10

            min-h-[200px]

            transition-colors
            duration-500

            hover:border-neutral-900
          "
        >
          <span
            className="
              text-4xl

              font-extralight
              leading-none
              tracking-[-0.06em]

              text-neutral-200

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
