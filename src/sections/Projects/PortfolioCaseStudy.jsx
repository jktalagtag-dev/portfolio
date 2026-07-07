import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";

import { projects } from "../../data/projects";

import Navbar from "../../layout/Navbar";
import Footer from "../../layout/Footer";

import HeroContainer from "../../components/ui/HeroContainer";

import CaseStudySection from "../../components/case-study/CaseStudySection";
import ProjectHero from "../../components/case-study/ProjectHero";
import ChallengeGrid from "../../components/case-study/ChallengeGrid";
import Objectives from "../../components/case-study/Objectives";
import ProcessTimeline from "../../components/case-study/ProcessTimeline";
import DesignShowcase from "../../components/case-study/DesignShowcase";
import DevelopmentArchitecture from "../../components/case-study/DevelopmentArchitecture";
import ChallengeSolution from "../../components/case-study/ChallengeSolution";
import OutcomeGrid from "../../components/case-study/OutcomeGrid";
import Reflection from "../../components/case-study/Reflection";
import NextProject from "../../components/case-study/NextProject";

export default function ProjectCaseStudy() {
  const { slug } = useParams();

  const projectIndex = projects.findIndex(
    (project) => project.slug === slug
  );

  const project = projects[projectIndex];

  if (!project) {
    return (
      <main
        className="
          min-h-screen

          flex
          flex-col
          items-center
          justify-center

          gap-6

          px-5
          text-center
        "
      >
        <h1
          className="
            text-3xl
            sm:text-4xl

            font-light
            tracking-[-0.04em]
          "
        >
          Project not found.
        </h1>

        <Link
          to="/work"
          className="
            text-sm
            uppercase
            tracking-[0.2em]
            text-neutral-500

            transition-colors
            duration-300

            hover:text-black
          "
        >
          ← Back to Work
        </Link>
      </main>
    );
  }

  const nextProject =
    projects[(projectIndex + 1) % projects.length];

  const hasLinks =
    project.live !== "#" || project.github !== "#";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="overflow-x-clip"
    >
      <Navbar />

      <main className="min-h-screen">

        <ProjectHero project={project} />

        {/* ====================================================== */}
        {/* CONTENT */}
        {/* ====================================================== */}

        <HeroContainer>

          {/* ================================================== */}
          {/* OVERVIEW */}
          {/* ================================================== */}

          <CaseStudySection label="Overview">

            <div className="max-w-3xl">

              <h2
                className="
                  text-3xl
                  sm:text-4xl
                  lg:text-5xl

                  font-light
                  leading-[1.05]
                  tracking-[-0.05em]
                "
              >
                {project.overviewHeadline}
              </h2>

              <p
                className="
                  mt-10

                  text-lg
                  leading-relaxed
                  text-neutral-600
                "
              >
                {project.overview}
              </p>

            </div>

          </CaseStudySection>

          {/* ================================================== */}
          {/* CHALLENGE */}
          {/* ================================================== */}

          <CaseStudySection label="The Challenge">
            <ChallengeGrid challenges={project.challengeList} />
          </CaseStudySection>

          {/* ================================================== */}
          {/* OBJECTIVES */}
          {/* ================================================== */}

          <CaseStudySection label="Objectives">
            <Objectives objectives={project.objectives} />
          </CaseStudySection>

          {/* ================================================== */}
          {/* MY ROLE */}
          {/* ================================================== */}

          <CaseStudySection label="My Role">

            <div className="max-w-4xl">

              <h2
                className="
                  text-3xl
                  sm:text-4xl
                  lg:text-5xl

                  font-light
                  leading-[1.05]
                  tracking-[-0.05em]
                "
              >
                {project.roleHeadline}
              </h2>

              <p
                className="
                  mt-10

                  text-lg
                  leading-relaxed
                  text-neutral-600
                "
              >
                {project.roleDescription}
              </p>

              <div
                className="
                  mt-12

                  flex
                  flex-wrap
                  gap-3
                  sm:gap-4
                "
              >
                {project.responsibilities.map((item) => (

                  <span
                    key={item}
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
              </div>

            </div>

          </CaseStudySection>

          {/* ================================================== */}
          {/* PROCESS */}
          {/* ================================================== */}

          <CaseStudySection label="Process">
            <div className="max-w-4xl">
              <h2
                className="
                  text-3xl
                  sm:text-4xl
                  lg:text-5xl

                  font-light
                  leading-[1.05]
                  tracking-[-0.05em]
                "
              >
                From research to deployment.
              </h2>

              <div className="mt-16">
                <ProcessTimeline steps={project.processSteps} />
              </div>
            </div>
          </CaseStudySection>

          {/* ================================================== */}
          {/* DESIGN */}
          {/* ================================================== */}

          {project.gallery?.length > 0 && (
            <CaseStudySection label="Design">
              <DesignShowcase images={project.gallery} />
            </CaseStudySection>
          )}

          {/* ================================================== */}
          {/* DEVELOPMENT */}
          {/* ================================================== */}

          <CaseStudySection label="Development">
            <div>
              <h2
                className="
                  max-w-4xl

                  text-3xl
                  sm:text-4xl
                  lg:text-5xl

                  font-light
                  leading-[1.05]
                  tracking-[-0.05em]
                "
              >
                {project.developmentHeadline}
              </h2>

              <div className="mt-16">
                <DevelopmentArchitecture
                  layers={project.architecture}
                />
              </div>
            </div>
          </CaseStudySection>

          {/* ================================================== */}
          {/* CHALLENGES & SOLUTIONS */}
          {/* ================================================== */}

          <CaseStudySection label="Challenges">
            <ChallengeSolution
              items={project.challengeSolutions}
            />
          </CaseStudySection>

          {/* ================================================== */}
          {/* OUTCOME */}
          {/* ================================================== */}

          <CaseStudySection label="Outcome">
            <div>
              <h2
                className="
                  max-w-4xl

                  text-3xl
                  sm:text-4xl
                  lg:text-5xl

                  font-light
                  leading-[1.05]
                  tracking-[-0.05em]
                "
              >
                {project.outcomeHeadline}
              </h2>

              <p
                className="
                  mt-10

                  max-w-3xl

                  text-lg
                  leading-relaxed
                  text-neutral-600
                "
              >
                {project.outcome}
              </p>

              <div className="mt-16">
                <OutcomeGrid
                  highlights={project.outcomeHighlights}
                />
              </div>
            </div>
          </CaseStudySection>

          {/* ================================================== */}
          {/* REFLECTION */}
          {/* ================================================== */}

          <CaseStudySection label="Reflection">
            <Reflection
              headline={project.reflectionHeadline}
              learnings={project.learnings}
              note={project.reflectionNote}
            />
          </CaseStudySection>

          {/* ================================================== */}
          {/* LINKS */}
          {/* ================================================== */}

          {hasLinks && (
            <CaseStudySection label="Explore">
              <div
                className="
                  flex
                  flex-wrap
                  gap-8
                "
              >
                {project.live !== "#" && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      text-sm
                      uppercase
                      tracking-[0.2em]

                      transition-colors
                      hover:text-neutral-500
                    "
                  >
                    Live Demo ↗
                  </a>
                )}

                {project.github !== "#" && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      text-sm
                      uppercase
                      tracking-[0.2em]

                      transition-colors
                      hover:text-neutral-500
                    "
                  >
                    GitHub ↗
                  </a>
                )}
              </div>
            </CaseStudySection>
          )}

        </HeroContainer>

        {/* ====================================================== */}
        {/* NEXT PROJECT */}
        {/* ====================================================== */}

        <NextProject project={nextProject} />

      </main>

      <Footer />
    </motion.div>
  );
}
