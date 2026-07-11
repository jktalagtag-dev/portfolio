import { Link } from "react-router-dom";

import HeroContainer from "../../components/ui/HeroContainer";
import Reveal from "../../components/motion/Reveal";

import skills from "../../data/skills";

/*
 * Home's "who is this" beat, between the project showcase and the
 * contact close. Deliberately NOT the About page's own preview
 * text (that would repeat verbatim the moment a visitor clicks
 * through to /about) — a fresh one-liner instead, backed by the
 * tech stack as evidence. No eyebrow label here: ProjectShowcase
 * above already used one, and the Contact CTA below uses another —
 * repeating a third would read as templated section scaffolding.
 */

const stack = [
  ...new Set(
    skills.flatMap((skill) =>
      skill.tech.split("·").map((item) => item.trim())
    )
  ),
];

export default function AboutTeaser() {
  return (
    <section className="overflow-hidden">
      <HeroContainer>
        <Reveal
          variant="scale"
          stagger={0.08}
          className="
            py-16
            sm:py-20
            lg:py-32

            border-t
            border-neutral-200
          "
        >
          <h2
            data-reveal
            className="
              max-w-3xl

              text-[1.75rem]
              sm:text-[2.5rem]
              lg:text-[3.25rem]

              font-light
              leading-[1.1]
              tracking-[-0.04em]
            "
          >
            Frontend developer with a full-stack
            eye for detail — I build the interface,
            and understand what it takes to run
            behind it.
          </h2>

          <div
            data-reveal
            className="
              mt-10
              lg:mt-12

              flex
              flex-wrap
              gap-2
            "
          >
            {stack.map((tech) => (
              <span
                key={tech}
                className="
                  px-3
                  py-1.5

                  text-[11px]
                  uppercase
                  tracking-[0.12em]

                  border
                  border-neutral-200

                  text-neutral-500
                "
              >
                {tech}
              </span>
            ))}
          </div>

          <div
            data-reveal
            className="
              mt-10
              lg:mt-12

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
              More About Me →
            </Link>
          </div>
        </Reveal>
      </HeroContainer>
    </section>
  );
}
