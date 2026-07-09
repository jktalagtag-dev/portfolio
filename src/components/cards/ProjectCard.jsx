/*
 * Lightweight project presentation — for projects that don't
 * warrant a dedicated page (tier: "card"). A bounded box, not
 * the site's edge-to-edge row idiom: that boundary is what
 * signals "lighter tier" at a glance, not just smaller text.
 *
 * Used in card-tier rows in the Work archive. Entrance motion is
 * owned by the caller's Reveal, so this is a plain article.
 */

export default function ProjectCard({
  project,
  compact = false,
}) {
  const hasImage = project.image !== "#";
  const hasLive = project.live !== "#";
  const hasGithub = project.github !== "#";

  return (
    <article
      className={`
        border
        border-neutral-200

        ${compact ? "p-5 sm:p-6" : "p-6 sm:p-8"}
      `}
    >
      {/* Thumbnail */}
      <div
        className={`
          overflow-hidden

          border
          border-neutral-200

          bg-neutral-50

          ${compact ? "aspect-[16/10]" : "aspect-[4/3]"}
        `}
      >
        {hasImage ? (
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="
              h-full
              w-full

              object-cover
            "
          />
        ) : (
          <div
            className="
              flex
              h-full
              w-full

              items-center
              justify-center
            "
          >
            <span
              className="
                text-[3.5rem]
                sm:text-[4.5rem]

                font-extralight
                leading-none
                tracking-[-0.08em]

                text-neutral-200
              "
            >
              {project.number}
            </span>
          </div>
        )}
      </div>

      {/* Title */}
      <h3
        className={`
          mt-6

          font-light
          leading-snug
          tracking-tight

          ${
            compact
              ? "text-lg sm:text-xl"
              : "text-[1.75rem] sm:text-[2.25rem]"
          }
        `}
      >
        {project.title}
      </h3>

      {/* Description */}
      <p
        className="
          mt-2

          line-clamp-2

          text-sm
          sm:text-base

          leading-relaxed
          text-neutral-500
        "
      >
        {project.description}
      </p>

      {/* Tech chips */}
      <div
        className="
          mt-4

          flex
          flex-wrap
          gap-2
        "
      >
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="
              px-3
              py-1.5

              text-[11px]
              uppercase

              tracking-[0.12em]

              border
              border-neutral-200

              text-neutral-500
            "
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Links */}
      {(hasLive || hasGithub) && (
        <div
          className="
            mt-5

            flex
            flex-wrap
            gap-6
          "
        >
          {hasLive && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="
                rounded-sm

                text-sm
                uppercase
                tracking-[0.15em]
                text-neutral-500

                transition-colors
                duration-300

                hover:text-black

                focus-visible:outline
                focus-visible:outline-2
                focus-visible:outline-offset-2
                focus-visible:outline-neutral-900
              "
            >
              Live Demo ↗
            </a>
          )}

          {hasGithub && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="
                rounded-sm

                text-sm
                uppercase
                tracking-[0.15em]
                text-neutral-500

                transition-colors
                duration-300

                hover:text-black

                focus-visible:outline
                focus-visible:outline-2
                focus-visible:outline-offset-2
                focus-visible:outline-neutral-900
              "
            >
              GitHub ↗
            </a>
          )}
        </div>
      )}
    </article>
  );
}
