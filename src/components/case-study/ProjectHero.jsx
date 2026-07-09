import { Link } from "react-router-dom";

import HeroContainer from "../ui/HeroContainer";
import MetadataCard from "./MetadataCard";
import MaskText from "../motion/MaskText";
import Reveal from "../motion/Reveal";
import ParallaxImage from "../motion/ParallaxImage";

/*
 * Case-study hero: the title wipes up (mask), the surrounding
 * text and metadata rise, and the hero image carries a layered
 * parallax — the case study's opening statement.
 */

export default function ProjectHero({ project }) {
  return (
    <>
      {/* Title */}
      <section className="pt-36 lg:pt-44 pb-24">
        <HeroContainer>
          <Reveal variant="rise" stagger={0.1}>
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

            <div className="mt-20">
              <p
                data-reveal
                className="
                  text-[11px]
                  uppercase
                  tracking-[0.3em]
                  text-neutral-400
                "
              >
                {project.number} · Case Study
              </p>

              <MaskText
                as="h1"
                start="top 90%"
                className="
                  mt-6

                  max-w-6xl

                  text-[4rem]
                  sm:text-[5rem]
                  lg:text-[7rem]
                  xl:text-[8.5rem]

                  leading-[0.85]
                  tracking-[-0.08em]
                  font-extralight
                "
              >
                {project.title}
              </MaskText>

              <p
                data-reveal
                className="
                  mt-10

                  max-w-3xl

                  text-lg
                  sm:text-xl

                  leading-relaxed
                  text-neutral-600
                "
              >
                {project.description}
              </p>
            </div>
          </Reveal>
        </HeroContainer>
      </section>

      {/* Metadata */}
      <section className="pb-24">
        <HeroContainer>
          <Reveal
            variant="rise"
            stagger={0.08}
            className="
              border-y
              border-neutral-200

              py-12

              grid
              grid-cols-2
              lg:grid-cols-4

              gap-10
            "
          >
            <div data-reveal>
              <MetadataCard label="Role" value={project.role} />
            </div>
            <div data-reveal>
              <MetadataCard
                label="Timeline"
                value={project.timeline}
              />
            </div>
            <div data-reveal>
              <MetadataCard label="Year" value={project.year} />
            </div>
            <div data-reveal>
              <MetadataCard label="Stack" value={project.tech} />
            </div>
          </Reveal>
        </HeroContainer>
      </section>

      {/* Hero image */}
      <section className="pb-32">
        <HeroContainer>
          <ParallaxImage
            src={project.image}
            alt={project.title}
            priority
            intensity={8}
            className="
              aspect-[16/9]

              border
              border-neutral-200
            "
          />
        </HeroContainer>
      </section>
    </>
  );
}
