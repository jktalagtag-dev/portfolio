import SectionContainer from "../../components/ui/SectionContainer";
import VerticalLabel from "../../components/ui/VerticalLabel";
import Reveal from "../../components/motion/Reveal";

/*
 * Currently. Motion character: "clip" — the heading and status
 * blocks wipe open from the top edge, a cleaner, more architectural
 * reveal that closes the About page distinctly from the rise /
 * scale / slide of the sections above.
 */

export default function Currently() {
  return (
    <section
      id="currently"
      className="
        py-24
        lg:py-32
        overflow-hidden
      "
    >
      <SectionContainer>
        <Reveal
          variant="clip"
          stagger={0.12}
          className="
            grid
            grid-cols-1
            lg:grid-cols-12
            gap-8
          "
        >
          <VerticalLabel label="CURRENTLY · 2026" />

          {/* Content */}
          <div className="lg:col-span-10">
            {/* Heading */}
            <div data-reveal className="max-w-5xl">
              <h2
                className="
                  text-4xl
                  sm:text-5xl
                  xl:text-[6rem]
                  font-light
                  leading-[0.9]
                  tracking-[-0.08em]
                "
              >
                Currently.
              </h2>
            </div>

            {/* Main Content */}
            <div
              className="
                mt-16
                lg:mt-24

                grid
                grid-cols-1
                lg:grid-cols-12

                gap-10
                lg:gap-12
              "
            >
              {/* Left */}
              <div data-reveal className="lg:col-span-6">
                <p
                  className="
                    text-2xl
                    sm:text-3xl
                    xl:text-4xl

                    font-light
                    leading-[1.15]
                    tracking-tight
                  "
                >
                  Building portfolio projects, refining my React
                  and UI engineering skills, and actively seeking
                  opportunities to grow as a frontend developer.
                </p>
              </div>

              {/* Right */}
              <div data-reveal className="lg:col-span-6">
                <div
                  className="
                    border-t
                    border-neutral-200

                    pt-8

                    grid
                    grid-cols-1
                    sm:grid-cols-2

                    gap-8
                    sm:gap-10
                  "
                >
                  <div>
                    <p
                      className="
                        text-xs
                        uppercase
                        tracking-[0.25em]
                        text-neutral-400
                      "
                    >
                      Status
                    </p>

                    <p className="mt-3 text-lg sm:text-xl">
                      Available for Work
                    </p>
                  </div>

                  <div>
                    <p
                      className="
                        text-xs
                        uppercase
                        tracking-[0.25em]
                        text-neutral-400
                      "
                    >
                      Focus
                    </p>

                    <p className="mt-3 text-lg sm:text-xl">
                      React · Laravel · UI/UX
                    </p>
                  </div>

                  <div>
                    <p
                      className="
                        text-xs
                        uppercase
                        tracking-[0.25em]
                        text-neutral-400
                      "
                    >
                      Location
                    </p>

                    <p className="mt-3 text-lg sm:text-xl">
                      Philippines
                    </p>
                  </div>

                  <div>
                    <p
                      className="
                        text-xs
                        uppercase
                        tracking-[0.25em]
                        text-neutral-400
                      "
                    >
                      Availability
                    </p>

                    <p className="mt-3 text-lg sm:text-xl">
                      Immediate
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </SectionContainer>
    </section>
  );
}
