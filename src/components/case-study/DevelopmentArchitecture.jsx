import Reveal from "../motion/Reveal";

/*
 * Development architecture — alternating feature rows, the Apple
 * grammar: each layer is a big borderless typographic block that
 * takes the opposite side from the one before it, so the stack
 * reads as a paced left-right-left walk down the page instead of
 * a boxed diagram. Below lg everything settles back to a single
 * left-aligned column.
 */

export default function DevelopmentArchitecture({ layers }) {
  return (
    <div className="space-y-20 lg:space-y-32">
      {layers.map((layer, index) => {
        const flip = index % 2 === 1;

        return (
          <Reveal key={layer.title} variant="rise">
            <div
              className={`
                lg:max-w-3xl

                ${flip ? "lg:ml-auto lg:text-right" : ""}
              `}
            >
              <p
                className="
                  text-[11px]
                  uppercase
                  tracking-[0.25em]
                  text-neutral-400
                "
              >
                {layer.label}
              </p>

              <h3
                className="
                  mt-4

                  text-3xl
                  sm:text-4xl
                  lg:text-5xl

                  font-light
                  leading-[1.05]
                  tracking-[-0.04em]
                "
              >
                {layer.title}
              </h3>

              <p
                className={`
                  mt-5

                  max-w-xl

                  text-lg
                  leading-relaxed
                  text-neutral-600

                  ${flip ? "lg:ml-auto" : ""}
                `}
              >
                {layer.description}
              </p>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}
