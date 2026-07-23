import HeroContainer from "../../components/ui/HeroContainer";
import SectionHeader from "../../components/case-study/SectionHeader";
import CaseStudyHero from "../../components/case-study/CaseStudyHero";
import SpecStrip from "../../components/case-study/SpecStrip";
import Objectives from "../../components/case-study/Objectives";
import GalleryBleed from "../../components/case-study/GalleryBleed";
import ProjectLinks from "../../components/case-study/ProjectLinks";
import NextProject from "../../components/case-study/NextProject";

import Reveal from "../../components/motion/Reveal";

/*
 * Concise project page — the same product-presentation language as
 * the flagship tier (full-bleed hero, spec strip) at a lighter
 * weight: hero, specs, key features, optional screenshots, links,
 * next project. No Overview / Process / Architecture / Challenges &
 * Solutions / Reflection — those stay flagship-only per CLAUDE.md §7.
 */

export default function ConciseCaseStudy({
  project,
  nextProject,
}) {
  const hasLinks =
    project.live !== "#" || project.github !== "#";

  return (
    <>
      <CaseStudyHero project={project} eyebrow="Overview" />

      <SpecStrip project={project} />

      {project.objectives?.length > 0 && (
        <section className="py-24 sm:py-32 lg:py-44">
          <HeroContainer>
            <SectionHeader label="Key Features" />
            <div className="mt-16">
              <Objectives objectives={project.objectives} />
            </div>
          </HeroContainer>
        </section>
      )}

      {project.gallery?.length > 0 && (
        <section className="border-t border-neutral-200 py-24 sm:py-32 lg:py-44">
          <SectionHeader label="Screenshots" />
          <div className="mt-16">
            <GalleryBleed images={project.gallery} />
          </div>
        </section>
      )}

      {hasLinks && (
        <section className="border-t border-neutral-200 py-20 lg:py-28">
          <HeroContainer>
            <Reveal variant="rise" className="flex justify-center">
              <ProjectLinks
                live={project.live}
                github={project.github}
              />
            </Reveal>
          </HeroContainer>
        </section>
      )}

      <NextProject project={nextProject} />
    </>
  );
}
