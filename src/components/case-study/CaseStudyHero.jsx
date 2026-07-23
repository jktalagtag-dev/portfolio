import { Link } from "react-router-dom";

import HeroContainer from "../ui/HeroContainer";
import MaskText from "../motion/MaskText";
import Reveal from "../motion/Reveal";
import ParallaxImage from "../motion/ParallaxImage";

/*
 * Case-study opening, product-presentation style: everything
 * centered — eyebrow, mask-wiped title, one-paragraph description —
 * then the hero image runs EDGE TO EDGE below it, no gutters, no
 * hairline frame, cinematic crop widening with the viewport. The
 * image is the product shot; the type introduces it.
 */

export default function CaseStudyHero({
  project,
  eyebrow = "Case Study",
}) {
  const hasImage = project.image && project.image !== "#";

  return (
    <>
      <section className="pt-36 lg:pt-44 pb-16 lg:pb-24">
        <HeroContainer>
          <Reveal
            variant="rise"
            stagger={0.1}
            className="text-center"
          >
            <Link
              data-reveal
              to="/work"
              className="
                inline-flex
                items-center
                gap-2

                text-[11px]
                uppercase
                tracking-[0.25em]
                text-neutral-400

                transition-colors
                duration-300

                hover:text-black
              "
            >
              ← Back to Work
            </Link>

            <p
              data-reveal
              className="
                mt-14

                text-[11px]
                uppercase
                tracking-[0.3em]
                text-neutral-400
              "
            >
              {project.number} · {eyebrow}
            </p>

            <MaskText
              as="h1"
              start="top 90%"
              className="
                mx-auto
                mt-6

                max-w-6xl

                text-[3rem]
                sm:text-[4.5rem]
                lg:text-[6.5rem]
                xl:text-[8rem]

                font-extralight
                leading-[0.9]
                tracking-[-0.06em]
              "
            >
              {project.title}
            </MaskText>

            <p
              data-reveal
              className="
                mx-auto
                mt-8

                max-w-2xl

                text-lg
                sm:text-xl

                leading-relaxed
                text-neutral-600
              "
            >
              {project.description}
            </p>
          </Reveal>
        </HeroContainer>
      </section>

      {/* Full-bleed hero image — deliberately outside every
          container. Taller crop on phones so the shot still
          carries presence; cinematic on wide screens. */}
      {hasImage && (
        <section>
          <ParallaxImage
            src={project.image}
            alt={project.title}
            priority
            intensity={10}
            className="
              w-full

              aspect-[4/3]
              sm:aspect-[16/9]
              lg:aspect-[21/9]
            "
          />
        </section>
      )}
    </>
  );
}
