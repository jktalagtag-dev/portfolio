import HeroContainer from "../../components/ui/HeroContainer";
import Reveal from "../../components/motion/Reveal";

import CaseStudyHero from "../../components/case-study/CaseStudyHero";
import SpecStrip from "../../components/case-study/SpecStrip";
import SectionHeader from "../../components/case-study/SectionHeader";
import Statement from "../../components/case-study/Statement";
import ChallengeGrid from "../../components/case-study/ChallengeGrid";
import Objectives from "../../components/case-study/Objectives";
import ProcessPinned from "../../components/case-study/ProcessPinned";
import GalleryBleed from "../../components/case-study/GalleryBleed";
import DevelopmentArchitecture from "../../components/case-study/DevelopmentArchitecture";
import EngineeringNotes from "../../components/case-study/EngineeringNotes";
import ChallengeSolution from "../../components/case-study/ChallengeSolution";
import OutcomeGrid from "../../components/case-study/OutcomeGrid";
import PullQuote from "../../components/case-study/PullQuote";
import ProjectLinks from "../../components/case-study/ProjectLinks";
import NextProject from "../../components/case-study/NextProject";

/*
 * Full case-study pipeline — presented as a product page, not a spec
 * document, and composed differently per project instead of one fixed
 * template: `project.sections` (an ordered list of the keys below)
 * drives which beats appear and in what order, so each flagship case
 * study can lead with its own strongest material (architecture,
 * screenshots, an engineering story) while still drawing from ONE
 * shared component library. Falls back to DEFAULT_SECTIONS — roughly
 * CLAUDE.md §7's original fixed order — when a project doesn't
 * specify its own. Every section gets a top hairline except the
 * first one and whatever immediately follows "pullQuote" (a border
 * right after the black chapter break reads worse than a clean cut).
 */

const DEFAULT_SECTIONS = [
  "overview",
  "pullQuote",
  "challenge",
  "objectives",
  "role",
  "process",
  "gallery",
  "development",
  "deepDive",
  "challengeSolutions",
  "outcome",
  "reflection",
  "links",
];

const border = (bordered) => (bordered ? "border-t border-neutral-200" : "");

const SECTION_RENDERERS = {
  overview: (project, bordered, key) => (
    <Statement
      key={key}
      className={border(bordered)}
      label="Overview"
      headline={project.overviewHeadline}
      body={project.overview}
    />
  ),

  pullQuote: (project, _bordered, key) =>
    project.pullQuote ? (
      <PullQuote key={key}>{project.pullQuote}</PullQuote>
    ) : null,

  challenge: (project, bordered, key) => (
    <section
      key={key}
      className={`py-24 sm:py-32 lg:py-44 ${border(bordered)}`}
    >
      <HeroContainer>
        <SectionHeader label="The Challenge" />
        <div className="mt-16">
          <ChallengeGrid challenges={project.challengeList} />
        </div>
      </HeroContainer>
    </section>
  ),

  objectives: (project, bordered, key) => (
    <section
      key={key}
      className={`py-24 sm:py-32 lg:py-44 ${border(bordered)}`}
    >
      <HeroContainer>
        <SectionHeader label="Objectives" />
        <div className="mt-16">
          <Objectives objectives={project.objectives} />
        </div>
      </HeroContainer>
    </section>
  ),

  role: (project, bordered, key) => (
    <Statement
      key={key}
      className={border(bordered)}
      label="My Role"
      headline={project.roleHeadline}
      body={project.roleDescription}
    >
      <Reveal
        variant="rise"
        className="
          mx-auto
          mt-12

          flex
          max-w-3xl
          flex-wrap
          justify-center
          gap-3
          sm:gap-4
        "
      >
        {project.responsibilities.map((item) => (
          <span
            key={item}
            data-reveal
            className="
              border
              border-neutral-200

              px-4
              py-2.5
              sm:px-5
              sm:py-3

              text-sm
            "
          >
            {item}
          </span>
        ))}
      </Reveal>
    </Statement>
  ),

  process: (project, bordered, key) =>
    project.processSteps?.length > 0 ? (
      <section
        key={key}
        className={`py-24 sm:py-32 lg:py-44 ${border(bordered)}`}
      >
        <HeroContainer>
          <SectionHeader
            label="Process"
            headline="From research to deployment."
          />
          <div className="mt-16 lg:mt-24">
            <ProcessPinned steps={project.processSteps} />
          </div>
        </HeroContainer>
      </section>
    ) : null,

  gallery: (project, bordered, key) =>
    project.gallery?.length > 0 ? (
      <section
        key={key}
        className={`py-24 sm:py-32 lg:py-44 ${border(bordered)}`}
      >
        <SectionHeader label="Design" />
        <div className="mt-16">
          <GalleryBleed images={project.gallery} />
        </div>
      </section>
    ) : null,

  development: (project, bordered, key) => (
    <section
      key={key}
      className={`py-24 sm:py-32 lg:py-44 ${border(bordered)}`}
    >
      <HeroContainer>
        <SectionHeader
          label="Development"
          headline={project.developmentHeadline}
        />
        <div className="mt-16 lg:mt-24">
          <DevelopmentArchitecture layers={project.architecture} />
        </div>
      </HeroContainer>
    </section>
  ),

  deepDive: (project, bordered, key) =>
    project.deepDives?.length > 0 ? (
      <section
        key={key}
        className={`py-24 sm:py-32 lg:py-44 ${border(bordered)}`}
      >
        <HeroContainer>
          <SectionHeader label="Engineering Notes" />
          <div className="mt-16">
            <EngineeringNotes notes={project.deepDives} />
          </div>
        </HeroContainer>
      </section>
    ) : null,

  challengeSolutions: (project, bordered, key) => (
    <section
      key={key}
      className={`py-24 sm:py-32 lg:py-44 ${border(bordered)}`}
    >
      <HeroContainer>
        <SectionHeader label="Challenges" />
        <div className="mt-16">
          <ChallengeSolution items={project.challengeSolutions} />
        </div>
      </HeroContainer>
    </section>
  ),

  outcome: (project, bordered, key) => (
    <Statement
      key={key}
      className={border(bordered)}
      label="Outcome"
      headline={project.outcomeHeadline}
      body={project.outcome}
    >
      <div className="mt-16">
        <OutcomeGrid highlights={project.outcomeHighlights} />
      </div>
    </Statement>
  ),

  reflection: (project, bordered, key) => (
    <Statement
      key={key}
      className={border(bordered)}
      label="Reflection"
      headline={project.reflectionHeadline}
      body={project.learnings}
    >
      {project.reflectionNote && (
        <Reveal variant="rise">
          <p
            className="
              mx-auto
              mt-6

              max-w-2xl

              text-center
              text-base
              sm:text-lg

              leading-relaxed
              text-neutral-500
            "
          >
            {project.reflectionNote}
          </p>
        </Reveal>
      )}
    </Statement>
  ),

  links: (project, bordered, key) => {
    const hasLinks = project.live !== "#" || project.github !== "#";
    if (!hasLinks) return null;

    return (
      <section key={key} className={`py-20 lg:py-28 ${border(bordered)}`}>
        <HeroContainer>
          <Reveal variant="rise" className="flex justify-center">
            <ProjectLinks live={project.live} github={project.github} />
          </Reveal>
        </HeroContainer>
      </section>
    );
  },
};

export default function FlagshipCaseStudy({ project, nextProject }) {
  const sections = project.sections || DEFAULT_SECTIONS;

  return (
    <>
      <CaseStudyHero project={project} />

      <SpecStrip project={project} />

      {sections.map((key, index) => {
        const render = SECTION_RENDERERS[key];
        if (!render) return null;

        const bordered =
          index > 0 && sections[index - 1] !== "pullQuote";

        return render(project, bordered, key);
      })}

      <NextProject project={nextProject} />
    </>
  );
}
