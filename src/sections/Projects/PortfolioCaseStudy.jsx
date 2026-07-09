import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";

import { projects } from "../../data/projects";

import Navbar from "../../layout/Navbar";
import Footer from "../../layout/Footer";

import FlagshipCaseStudy from "./FlagshipCaseStudy";
import ConciseCaseStudy from "./ConciseCaseStudy";

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

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="overflow-x-clip"
    >
      <Navbar />

      <main className="min-h-screen">

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
    </motion.div>
  );
}
