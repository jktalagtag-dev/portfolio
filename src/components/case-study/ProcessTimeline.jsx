import DrawLine from "../motion/DrawLine";
import Reveal from "../motion/Reveal";

/*
 * Process — the spine draws itself down as you scroll (scrubbed),
 * and each step rises in. The drawn line is the signature here;
 * no other section draws a vertical timeline.
 */

export default function ProcessTimeline({ steps }) {
  return (
    <div className="relative">
      {/* Timeline spine */}
      <DrawLine
        axis="y"
        scrub
        start="top 75%"
        end="bottom 45%"
        className="
          absolute
          left-0
          top-0
          bottom-0

          w-px
          bg-neutral-200
        "
      />

      {/* Steps */}
      <Reveal
        variant="rise"
        stagger={0.12}
        className="space-y-10"
      >
        {steps.map((step, index) => (
          <div
            key={step.title}
            data-reveal
            className="
              flex
              gap-8

              pl-8
            "
          >
            <span
              className="
                text-sm
                text-neutral-400
                min-w-[40px]
              "
            >
              0{index + 1}
            </span>

            <div>
              <h3
                className="
                  text-2xl
                  font-light
                "
              >
                {step.title}
              </h3>

              <p
                className="
                  mt-3

                  text-neutral-600
                  leading-relaxed
                "
              >
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </Reveal>
    </div>
  );
}
