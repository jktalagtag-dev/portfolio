import { Link } from "react-router-dom";

import HeroContainer from "../../components/ui/HeroContainer";
import MetadataCard from "../../components/case-study/MetadataCard";
import CaseStudySection from "../../components/case-study/CaseStudySection";
import Objectives from "../../components/case-study/Objectives";
import DesignShowcase from "../../components/case-study/DesignShowcase";
import ProjectLinks from "../../components/case-study/ProjectLinks";
import NextProject from "../../components/case-study/NextProject";

import MaskText from "../../components/motion/MaskText";
import Reveal from "../../components/motion/Reveal";
import ParallaxImage from "../../components/motion/ParallaxImage";

/*
 * Concise project page — for projects that deserve a dedicated
 * page but not the full flagship pipeline: hero, metadata, key
 * features, optional screenshots, links, next project. No
 * Process / Architecture / Challenges&Solutions / Reflection —
 * those stay flagship-only per CLAUDE.md §7.
 */

export default function ConciseCaseStudy({
  project,
  nextProject,
}) {
  const hasImage = project.image !== "#";
  const hasLinks =
    project.live !== "#" || project.github !== "#";

  return (
    <>
      {/* Hero */}
      <section className="pt-32 lg:pt-40 pb-16 lg:pb-20">
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

            <div className="mt-16">
              <p
                data-reveal
                className="
                  text-[11px]
                  uppercase
                  tracking-[0.3em]
                  text-neutral-400
                "
              >
                {project.number} · Overview
              </p>

              <MaskText
                as="h1"
                start="top 90%"
                className="
                  mt-6

                  max-w-4xl

                  text-[2.5rem]
                  sm:text-5xl
                  xl:text-[6rem]

                  font-light
                  leading-[0.9]
                  tracking-[-0.08em]
                "
              >
                {project.title}
              </MaskText>

              <p
                data-reveal
                className="
                  mt-6

                  max-w-2xl

                  text-lg

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
      <section className="pb-16">
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
      {hasImage && (
        <section className="pb-24">
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
      )}

      {/* Content */}
      <HeroContainer>
        {project.objectives?.length > 0 && (
          <CaseStudySection label="Key Features">
            <Objectives objectives={project.objectives} />
          </CaseStudySection>
        )}

        {project.gallery?.length > 0 && (
          <CaseStudySection label="Screenshots">
            <DesignShowcase images={project.gallery} />
          </CaseStudySection>
        )}

        {hasLinks && (
          <CaseStudySection label="Explore" reveal="rise">
            <ProjectLinks
              live={project.live}
              github={project.github}
            />
          </CaseStudySection>
        )}
      </HeroContainer>

      {/* Next project */}
      <NextProject project={nextProject} />
    </>
  );
}
