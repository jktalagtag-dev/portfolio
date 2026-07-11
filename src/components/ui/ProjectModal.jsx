import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import ProjectLinks from "../case-study/ProjectLinks";
import useDialogEffects from "../../utils/useDialogEffects";

const easeOutExpo = [0.22, 1, 0.36, 1];

/*
 * The project "quick look" — everything that used to sit always
 * visible in the showcase grid (description, role, tech, links)
 * now lives here, opened on click. Deliberately NOT the full
 * flagship case-study pipeline: that would make the modal an
 * unusable full-page-in-a-box and break deep-linking. Projects with
 * a dedicated page get a "View Full Case Study" link out instead.
 *
 * Panel stays on the site's light theme (not black) so it reads as
 * the clear focal surface against the dark backdrop, and so it can
 * reuse ProjectLinks / tech-chip / metadata styling verbatim.
 */

export default function ProjectModal({ project, onClose }) {
  const panelRef = useRef(null);
  const previousFocusRef = useRef(null);
  const titleId = "project-modal-title";

  const isOpen = !!project;

  useDialogEffects(isOpen, onClose);

  useEffect(() => {
    if (isOpen) {
      previousFocusRef.current = document.activeElement;
      panelRef.current?.focus();
    } else {
      previousFocusRef.current?.focus?.();
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: easeOutExpo }}
          onClick={onClose}
          className="
            fixed
            inset-0

            z-[60]

            flex
            items-center
            justify-center

            bg-black/85
            backdrop-blur-sm

            p-0
            md:p-8
            lg:p-12
          "
        >
          <motion.div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            tabIndex={-1}
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.97, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: 12 }}
            transition={{ duration: 0.35, ease: easeOutExpo }}
            className="
              relative

              h-full
              w-full
              md:h-auto

              max-w-5xl
              md:max-h-[90vh]

              overflow-y-auto

              bg-[#F8F8F8]

              outline-none
            "
          >
            {/* Close */}
            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="
                sticky
                top-0

                z-10

                ml-auto

                flex
                h-14
                w-14

                items-center
                justify-center

                bg-[#F8F8F8]
              "
            >
              <span className="relative block h-3.5 w-4">
                <span
                  className="
                    absolute
                    left-0
                    top-1/2

                    block
                    h-px
                    w-4

                    rotate-45

                    bg-neutral-900
                  "
                />
                <span
                  className="
                    absolute
                    left-0
                    top-1/2

                    block
                    h-px
                    w-4

                    -rotate-45

                    bg-neutral-900
                  "
                />
              </span>
            </button>

            {project && (
              <div
                className="
                  px-6
                  sm:px-10
                  lg:px-14

                  pb-12
                  lg:pb-16

                  -mt-14
                "
              >
                <div
                  className="
                    grid
                    grid-cols-1
                    lg:grid-cols-2

                    gap-10
                    lg:gap-14
                  "
                >
                  {/* Image */}
                  <div
                    className="
                      overflow-hidden

                      border
                      border-neutral-200

                      aspect-[4/3]
                      lg:aspect-auto
                      lg:h-full
                    "
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="
                        h-full
                        w-full

                        object-cover
                      "
                    />
                  </div>

                  {/* Details */}
                  <div className="lg:py-2">
                    <p
                      className="
                        text-[11px]
                        uppercase
                        tracking-[0.3em]
                        text-neutral-400
                      "
                    >
                      {project.number}&ensp;·&ensp;{project.year}
                    </p>

                    <h2
                      id={titleId}
                      className="
                        mt-5

                        text-[2rem]
                        lg:text-[2.5rem]

                        font-light
                        leading-[1.05]
                        tracking-[-0.04em]
                      "
                    >
                      {project.title}
                    </h2>

                    <p
                      className="
                        mt-6

                        text-base
                        leading-relaxed
                        text-neutral-600
                      "
                    >
                      {project.description}
                    </p>

                    {project.objectives?.length > 0 && (
                      <div className="mt-8">
                        <p
                          className="
                            text-[11px]
                            uppercase
                            tracking-[0.25em]
                            text-neutral-400
                          "
                        >
                          Key Features
                        </p>

                        <ul
                          className="
                            mt-4

                            space-y-2

                            text-base
                            text-neutral-700
                          "
                        >
                          {project.objectives.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div
                      className="
                        mt-8

                        flex
                        flex-wrap
                        gap-x-8
                        gap-y-4
                      "
                    >
                      <div>
                        <p
                          className="
                            text-[10px]
                            uppercase
                            tracking-[0.2em]
                            text-neutral-400
                          "
                        >
                          Role
                        </p>
                        <p className="mt-1 text-sm text-neutral-600">
                          {project.role}
                        </p>
                      </div>

                      <div>
                        <p
                          className="
                            text-[10px]
                            uppercase
                            tracking-[0.2em]
                            text-neutral-400
                          "
                        >
                          Timeline
                        </p>
                        <p className="mt-1 text-sm text-neutral-600">
                          {project.timeline}
                        </p>
                      </div>
                    </div>

                    <div
                      className="
                        mt-6

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

                    <div
                      className="
                        mt-8

                        pt-6

                        border-t
                        border-neutral-200

                        flex
                        flex-wrap
                        items-center
                        gap-x-8
                        gap-y-4
                      "
                    >
                      <ProjectLinks
                        live={project.live}
                        github={project.github}
                      />

                      {project.tier !== "card" && (
                        <Link
                          to={`/work/${project.slug}`}
                          onClick={onClose}
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
                          View Full Case Study
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
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
