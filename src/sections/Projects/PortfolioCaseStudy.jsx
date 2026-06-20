import { Link, useParams } from "react-router-dom";

import { projects } from "../../data/projects";

export default function ProjectCaseStudy() {
  const { slug } = useParams();

  const project = projects.find(
    (project) => project.slug === slug
  );

  if (!project) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl">
          Project not found.
        </h1>
      </main>
    );
  }

  return (
    <main className="min-h-screen">

      {/* Hero */}
      <section className="pt-40 pb-24">
        <div className="max-w-7xl mx-auto px-6">

          <Link
            to="/"
            className="
              text-sm
              uppercase
              tracking-[0.2em]
              text-neutral-500
              hover:text-black
            "
          >
            ← Back
          </Link>

          <p
            className="
              mt-16
              text-xs
              uppercase
              tracking-[0.3em]
              text-neutral-400
            "
          >
            Case Study · {project.year}
          </p>

          <h1
            className="
              mt-6
              text-6xl
              xl:text-[8rem]
              leading-[0.9]
              tracking-[-0.08em]
              font-light
            "
          >
            {project.title}
          </h1>

          <p
            className="
              mt-10
              max-w-2xl
              text-xl
              leading-relaxed
              text-neutral-600
            "
          >
            {project.description}
          </p>

        </div>
      </section>

      {/* Image */}
      <section className="pb-32">
        <div className="max-w-7xl mx-auto px-6">

          <img
            src={project.image}
            alt={project.title}
            className="
              w-full
              aspect-[16/9]
              object-cover
            "
          />

        </div>
      </section>

      {/* Content */}
      <section className="pb-40">
        <div className="max-w-5xl mx-auto px-6">

          <div className="border-t border-neutral-200 py-16">
            <h2 className="text-3xl font-light">
              Overview
            </h2>

            <p className="mt-8 text-lg leading-relaxed text-neutral-600">
              {project.overview}
            </p>
          </div>

          <div className="border-t border-neutral-200 py-16">
            <h2 className="text-3xl font-light">
              Tech Stack
            </h2>

            <div className="mt-8 flex flex-wrap gap-4">
              {project.tech.map((item) => (
                <span
                  key={item}
                  className="
                    border
                    border-neutral-200
                    px-4
                    py-2
                  "
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="border-t border-neutral-200 py-16">
            <h2 className="text-3xl font-light">
              Challenges
            </h2>

            <p className="mt-8 text-lg leading-relaxed text-neutral-600">
              {project.challenges}
            </p>
          </div>

          <div className="border-t border-neutral-200 py-16">
            <h2 className="text-3xl font-light">
              Outcome
            </h2>

            <p className="mt-8 text-lg leading-relaxed text-neutral-600">
              {project.outcome}
            </p>
          </div>

          <div className="border-t border-b border-neutral-200 py-16 flex gap-6">

            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="text-sm uppercase tracking-[0.15em]"
            >
              Live Demo ↗
            </a>

            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="text-sm uppercase tracking-[0.15em]"
            >
              GitHub ↗
            </a>

          </div>

        </div>
      </section>

    </main>
  );
}