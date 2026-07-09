import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { fadeUp, staggerContainer } from "../../utils/animations";

/*
 * Non-pinned fallback for mobile and reduced-motion: the same
 * projects as a calm, scroll-revealed stacked sequence — image
 * over story, one project at a time. No scroll-jacking.
 */

export default function ExhibitionFallback({ projects }) {
  return (
    <div
      className="
        px-5
        sm:px-6
        md:px-10

        space-y-20
        sm:space-y-28
      "
    >
      {projects.map((project) => (
        <motion.article
          key={project.slug}
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <Link
            to={`/work/${project.slug}`}
            className="group block"
          >
            <motion.div
              variants={fadeUp}
              className="
                overflow-hidden

                border
                border-neutral-200
              "
            >
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                decoding="async"
                className="
                  aspect-[4/3]
                  sm:aspect-[16/10]

                  w-full

                  object-cover

                  transition-transform
                  duration-700
                  ease-[cubic-bezier(0.16,1,0.3,1)]

                  group-hover:scale-[1.03]
                "
              />
            </motion.div>
          </Link>

          <motion.p
            variants={fadeUp}
            className="
              mt-8

              text-[11px]
              uppercase
              tracking-[0.3em]
              text-neutral-400
            "
          >
            {project.number}&ensp;·&ensp;{project.year}
          </motion.p>

          <motion.h3
            variants={fadeUp}
            className="
              mt-4

              text-[2rem]
              sm:text-[2.5rem]

              font-light
              leading-[1.05]
              tracking-[-0.04em]
              text-neutral-900
            "
          >
            <Link
              to={`/work/${project.slug}`}
              className="
                transition-colors
                duration-300
                hover:text-neutral-500
              "
            >
              {project.title}
            </Link>
          </motion.h3>

          <motion.p
            variants={fadeUp}
            className="
              mt-4

              max-w-xl

              text-base
              leading-relaxed
              text-neutral-500
            "
          >
            {project.description}
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="
              mt-5

              text-[11px]
              uppercase
              tracking-[0.2em]
              text-neutral-400
            "
          >
            {project.role}&ensp;·&ensp;{project.timeline}
          </motion.p>

          <motion.div
            variants={fadeUp}
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
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mt-7"
          >
            <Link
              to={`/work/${project.slug}`}
              className="
                group/link

                inline-flex
                items-center
                gap-3

                text-sm
                uppercase
                tracking-[0.18em]
                text-neutral-900

                transition-colors
                duration-300

                hover:text-neutral-500
              "
            >
              View Case Study
              <span
                className="
                  transition-transform
                  duration-300

                  group-hover/link:translate-x-1.5
                "
              >
                →
              </span>
            </Link>
          </motion.div>
        </motion.article>
      ))}
    </div>
  );
}
