import Reveal from "../motion/Reveal";

/*
 * Objectives — cards settle in from slightly larger (scale),
 * distinct from the Challenge grid's clip above.
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
      {objectives.map((item) => (
        <div
          key={item}
          data-reveal
          className="
            border
            border-neutral-200

            p-8

            flex
            items-center

            min-h-[160px]
          "
        >
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
