import { Link } from "react-router-dom";

import HeroContainer from "../../components/ui/HeroContainer";
import Reveal from "../../components/motion/Reveal";

/*
 * Home's "who is this" beat, between the project showcase and the
 * contact close. Mirrors the About page's former "Currently" layout
 * (statement + status grid) rather than the About page's own
 * preview text, so nothing repeats when a visitor clicks through —
 * and it's now the ONLY place this status snapshot lives, since
 * Currently was removed from the About page in favor of putting it
 * here instead. No eyebrow label: ProjectShowcase above already
 * used one, and the Contact CTA below uses another — a third would
 * read as templated section scaffolding. Reserves a quiet empty
 * gutter column (matching the About page's own 12-col rhythm,
 * where a real vertical label sits) so content doesn't run edge to
 * edge — that reserved space is a big part of what makes the About
 * page's sections read as premium rather than cramped.
 */

export default function AboutTeaser() {
  return (
    <section className="overflow-hidden">
      <HeroContainer>
        <Reveal
          variant="scale"
          stagger={0.08}
          className="
            py-24
            sm:py-32
            lg:py-48

            border-t
            border-neutral-200
          "
        >
          <div
            data-reveal
            className="
              grid
              grid-cols-1
              lg:grid-cols-12

              gap-12
              lg:gap-8
            "
          >
            {/* Quiet gutter — reserved space, no label text */}
            <div className="hidden lg:block lg:col-span-2" />

            {/* Statement */}
            <div className="lg:col-span-5">
              <p
                className="
                  text-3xl
                  sm:text-4xl
                  xl:text-5xl

                  font-light
                  leading-[1.1]
                  tracking-[-0.02em]
                "
              >
                Frontend developer with a full-stack eye
                for detail — I build the interface, and
                understand what it takes to run behind it.
              </p>
            </div>

            {/* Status grid */}
            <div className="lg:col-span-5">
              <div
                className="
                  border-t
                  border-neutral-200

                  pt-10
                  lg:pt-2

                  grid
                  grid-cols-1
                  sm:grid-cols-2

                  gap-10
                  sm:gap-12
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

          <div
            data-reveal
            className="
              mt-16
              lg:mt-20

              pt-8

              border-t
              border-neutral-200
            "
          >
            <Link
              to="/about"
              className="
                inline-flex
                items-center
                gap-3

                text-sm
                uppercase
                tracking-[0.18em]

                text-neutral-500

                transition-colors
                duration-300

                hover:text-black
              "
            >
              More about me →
            </Link>
          </div>
        </Reveal>
      </HeroContainer>
    </section>
  );
}
