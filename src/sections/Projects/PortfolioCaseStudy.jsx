import { useParams, Link } from "react-router-dom";

import { projects } from "../../data/projects";

import Navbar from "../../layout/Navbar";
import Footer from "../../layout/Footer";

import PageTransition from "../../components/motion/PageTransition";
import usePageMeta from "../../utils/usePageMeta";

import FlagshipCaseStudy from "./FlagshipCaseStudy";
import ConciseCaseStudy from "./ConciseCaseStudy";

export default function ProjectCaseStudy() {
  const { slug } = useParams();

  const projectIndex = projects.findIndex(
    (project) => project.slug === slug
  );

  const project = projects[projectIndex];

  usePageMeta(
    project ? project.title : "Project not found",
    project?.description
  );

  // Unknown slug — same composition as the site 404, scoped to Work.
  if (!project) {
    return (
      <PageTransition>
        <Navbar />

        <main
          id="main-content"
          className="
            flex
            min-h-svh

            flex-col
            items-center
            justify-center

            px-5
            text-center
          "
        >
          <p
            className="
              text-[11px]
              uppercase
              tracking-[0.3em]
              text-neutral-400
            "
          >
            404
          </p>

          <h1
            className="
              mt-6

              text-[3rem]
              sm:text-[5rem]
              lg:text-[6rem]

              font-light
              leading-[0.95]
              tracking-[-0.06em]
            "
          >
            Project not found.
          </h1>

          <p
            className="
              mt-8

              max-w-md

              text-base
              sm:text-lg

              leading-relaxed
              text-neutral-500
            "
          >
            The case study you're looking for doesn't exist
            or has been moved.
          </p>

          <Link
            to="/work"
            className="
              mt-12

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
            ← Back to Work
          </Link>
        </main>

        <Footer />
      </PageTransition>
    );
  }

  const nextProject =
    projects[(projectIndex + 1) % projects.length];

  return (
    <PageTransition>
      <Navbar />

      <main id="main-content" className="min-h-screen">

        {/* key by slug so navigating between case studies fully
            remounts the pipeline — otherwise the scroll-reveal
            effects don't re-run for the new project's content. */}
        {project.tier === "flagship" ? (
          <FlagshipCaseStudy
            key={slug}
            project={project}
            nextProject={nextProject}
          />
        ) : (
          <ConciseCaseStudy
            key={slug}
            project={project}
            nextProject={nextProject}
          />
        )}

      </main>

      <Footer />
    </PageTransition>
  );
}
