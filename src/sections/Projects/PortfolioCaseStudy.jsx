import { useParams } from "react-router-dom";

import { projects } from "../../data/projects";

import HeroContainer from "../../components/ui/HeroContainer";

import CaseStudySection from "../../components/case-study/CaseStudySection";
import ProjectHero from "../../components/case-study/ProjectHero";
import ChallengeGrid from "../../components/case-study/ChallengeGrid";
import Objectives from "../../components/case-study/Objectives";
import ProcessTimeline from "../../components/case-study/ProcessTimeline";

export default function ProjectCaseStudy() {
  const { slug } = useParams();

  const project = projects.find(
    (project) => project.slug === slug
  );

  if (!project) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-light">
          Project not found.
        </h1>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white">

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
                text-4xl
                lg:text-5xl

                font-light
                tracking-[-0.05em]
              "
            >
              Building a better digital experience for
              students and guidance counselors.
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
                text-4xl
                lg:text-5xl

                font-light
                tracking-[-0.05em]
              "
            >
              Turning requirements into
              thoughtful interfaces.
            </h2>

            <p
              className="
                mt-10

                text-lg
                leading-relaxed
                text-neutral-600
              "
            >
              As the Frontend Developer and UI Designer,
              I translated project requirements into
              responsive interfaces, collaborated with the
              team to integrate frontend and backend
              functionality, and helped create a consistent
              user experience throughout the system.
            </p>

            <div
              className="
                mt-12

                flex
                flex-wrap
                gap-4
              "
            >
              {project.responsibilities.map((item) => (

                <span
                  key={item}
                  className="
                    border
                    border-neutral-200

                    px-5
                    py-3

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
                text-4xl
                lg:text-5xl

                font-light
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
        {/* DEVELOPMENT */}
        {/* ================================================== */}

        <CaseStudySection label="Development">
          <div className="max-w-5xl">
            <h2
              className="
                text-4xl
                lg:text-5xl
                font-light
                tracking-[-0.05em]
              "
            >
              A modern web application powered by
              React and Laravel.
            </h2>

            <div
              className="
                mt-20

                grid
                md:grid-cols-3

                gap-8
              "
            >
              {project.tech.map((tech, index) => (
                <div
                  key={tech}
                  className="
                    border
                    border-neutral-200

                    p-10

                    text-center
                  "
                >
                  <p
                    className="
                      text-3xl
                      font-light
                    "
                  >
                    {tech}
                  </p>

                  {index !== project.tech.length - 1 && (
                    <div
                      className="
                        hidden
                        md:block

                        mt-8

                        text-neutral-300
                        text-2xl
                      "
                    >
                      ↓
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </CaseStudySection>

        {/* ================================================== */}
        {/* CHALLENGES & SOLUTIONS */}
        {/* ================================================== */}

        <CaseStudySection label="Challenges">
          <div className="space-y-10">
            {[
              {
                challenge:
                  "Maintaining a consistent interface across multiple modules.",
                solution:
                  "Built reusable UI patterns and standardized spacing, typography, and layouts.",
              },
              {
                challenge:
                  "Integrating frontend forms with backend validation.",
                solution:
                  "Worked closely with backend implementation to create a smoother validation flow and better user feedback.",
              },
            ].map((item) => (
              <div
                key={item.challenge}
                className="
                  border
                  border-neutral-200

                  p-10
                "
              >
                <p
                  className="
                    text-xs
                    uppercase
                    tracking-[0.25em]
                    text-neutral-400
                  "
                >
                  Challenge
                </p>

                <h3
                  className="
                    mt-3

                    text-2xl
                    font-light
                  "
                >
                  {item.challenge}
                </h3>

                <p
                  className="
                    mt-8

                    text-xs
                    uppercase
                    tracking-[0.25em]
                    text-neutral-400
                  "
                >
                  Solution
                </p>

                <p
                  className="
                    mt-3

                    text-neutral-600
                    leading-relaxed
                  "
                >
                  {item.solution}
                </p>
              </div>
            ))}
          </div>
        </CaseStudySection>

        {/* ================================================== */}
        {/* OUTCOME */}
        {/* ================================================== */}

        <CaseStudySection label="Outcome">
          <div>
            <h2
              className="
                text-4xl
                lg:text-5xl
                font-light
                tracking-[-0.05em]
              "
            >
              A successful capstone project with
              real-world impact.
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

            <div
              className="
                mt-16

                flex
                flex-wrap
                gap-4
              "
            >
              {[
                "Responsive",
                "Student Records",
                "Appointments",
                "Role-based Access",
                "Chatbot",
                "Reports",
              ].map((item) => (
                <span
                  key={item}
                  className="
                    border
                    border-neutral-200

                    px-5
                    py-3
                  "
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </CaseStudySection>

        {/* ================================================== */}
        {/* REFLECTION */}
        {/* ================================================== */}

        <CaseStudySection label="Reflection">
          <div className="max-w-4xl">
            <h2
              className="
                text-4xl
                lg:text-5xl

                font-light
                tracking-[-0.05em]
              "
            >
              Every project is an opportunity to
              become a better developer.
            </h2>

            <p
              className="
                mt-10

                text-xl
                leading-relaxed
                text-neutral-600
              "
            >
              {project.learnings}
            </p>

            <p
              className="
                mt-8

                text-lg
                leading-relaxed
                text-neutral-500
              "
            >
              Looking back, I would improve this project by
              introducing a more scalable component architecture,
              strengthening accessibility, and refining state
              management. Revisiting and rebuilding this system is
              one of my goals as I continue growing as a frontend
              developer.
            </p>
          </div>
        </CaseStudySection>

        {/* ================================================== */}
        {/* LINKS */}
        {/* ================================================== */}

        <CaseStudySection label="Explore">
          <div
            className="
              flex
              flex-wrap
              gap-8
            "
          >
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
          </div>
        </CaseStudySection>

      </HeroContainer>

    </main>
  );
}