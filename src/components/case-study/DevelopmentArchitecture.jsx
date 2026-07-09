import DrawLine from "../motion/DrawLine";
import Reveal from "../motion/Reveal";

/*
 * Development architecture — layered cards slide in while the
 * connectors between them draw down, so the stack reads as
 * assembling itself.
 */

export default function DevelopmentArchitecture({ layers }) {
  return (
    <Reveal
      variant="slide"
      stagger={0.12}
      className="max-w-3xl"
    >
      {layers.map((layer, index) => (
        <div key={layer.title}>
          <div
            data-reveal
            className="
              border
              border-neutral-200

              p-6
              sm:p-10

              grid
              sm:grid-cols-12

              gap-4
              sm:gap-8

              items-baseline
            "
          >
            <p
              className="
                sm:col-span-4

                text-[11px]
                uppercase
                tracking-[0.25em]
                text-neutral-400
              "
            >
              {layer.label}
            </p>

            <div className="sm:col-span-8">
              <h3
                className="
                  text-2xl
                  sm:text-3xl

                  font-light
                  tracking-[-0.03em]
                "
              >
                {layer.title}
              </h3>

              <p
                className="
                  mt-3

                  text-neutral-600
                  leading-relaxed
                "
              >
                {layer.description}
              </p>
            </div>
          </div>

          {index !== layers.length - 1 && (
            <div className="flex justify-center">
              <DrawLine
                axis="y"
                className="h-10 w-px bg-neutral-300"
              />
            </div>
          )}
        </div>
      ))}
    </Reveal>
  );
}
