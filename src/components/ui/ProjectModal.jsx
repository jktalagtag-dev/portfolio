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
 * reuse ProjectLinks / tech-chip / metadata styling verbatim. Image
 * dominates the composition (70/30 split) with a compact detail
 * column — this is a quick look, not a reading surface.
 */

export default function ProjectModal({
  project,
  onClose,
  onPrev,
  onNext,
}) {
  const panelRef = useRef(null);
  const previousFocusRef = useRef(null);
  const titleId = "project-modal-title";

  const isOpen = !!project;

  useDialogEffects(isOpen, onClose);

  // Gallery-style keyboard nav — scoped here (not in the shared
  // dialog hook, which the Navbar overlay also uses and has no
  // concept of prev/next).
  useEffect(() => {
    if (!isOpen) return undefined;

    const onKeyDown = (e) => {
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen, onPrev, onNext]);

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

            p-4
            sm:p-6
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

              w-full

              max-w-5xl
              max-h-[85svh]
              sm:max-h-[90vh]

              overflow-y-auto

              bg-[#F8F8F8]

              outline-none
            "
          >
            {/* Close — floats over the image corner, doesn't clip
                content beneath it (no sticky bar / negative margin). */}
            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="
                absolute
                top-3
                right-3

                z-20

                flex
                h-9
                w-9

                items-center
                justify-center

                rounded-full

                bg-white/90
                backdrop-blur-sm

                transition-colors
                duration-300

                hover:bg-white
              "
            >
              <span className="relative block h-3 w-3.5">
                <span
                  className="
                    absolute
                    left-0
                    top-1/2

                    block
                    h-px
                    w-3.5

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
                    w-3.5

                    -rotate-45

                    bg-neutral-900
                  "
                />
              </span>
            </button>

            {project && (
              <div
                className="
                  px-5
                  sm:px-8
                  lg:px-10

                  pt-5
                  sm:pt-8
                  lg:pt-10

                  pb-8
                  lg:pb-10
                "
              >
                <div
                  className="
                    grid
                    grid-cols-1
                    lg:grid-cols-[7fr_3fr]

                    items-start

                    gap-6
                    lg:gap-8
                  "
                >
                  {/* Image — bleeds to the panel's edges below the
                      two-column desktop layout, so the close button
                      floats on top of it like a real photo corner.
                      Slight zoom + top-anchored crop so UI/dashboard
                      screenshots fill the frame with no dead edges
                      and keep their nav/header visible. */}
                  <div
                    className="
                      relative

                      -mx-5
                      -mt-5
                      sm:-mx-8
                      sm:-mt-8
                      lg:mx-0
                      lg:mt-0

                      overflow-hidden

                      border-b
                      lg:border

                      border-neutral-200

                      aspect-[16/10]
                    "
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="
                        h-full
                        w-full

                        scale-105

                        object-cover
                        object-top
                      "
                    />
                  </div>

                  {/* Details */}
                  <div
                    className="
                      lg:h-full

                      flex
                      flex-col
                    "
                  >
                    <p
                      className="
                        text-[10px]
                        uppercase
                        tracking-[0.25em]
                        text-neutral-400
                      "
                    >
                      {project.number}&ensp;·&ensp;{project.year}
                    </p>

                    <h2
                      id={titleId}
                      className="
                        mt-3

                        text-xl
                        lg:text-2xl

                        font-light
                        leading-[1.1]
                        tracking-[-0.03em]
                      "
                    >
                      {project.title}
                    </h2>

                    <p
                      className="
                        mt-3

                        text-sm
                        leading-relaxed
                        text-neutral-600
                      "
                    >
                      {project.description}
                    </p>

                    <div className="mt-5 space-y-3">
                      <div>
                        <p
                          className="
                            text-[9px]
                            uppercase
                            tracking-[0.2em]
                            text-neutral-400
                          "
                        >
                          Role
                        </p>
                        <p className="mt-0.5 text-xs text-neutral-600">
                          {project.role}
                        </p>
                      </div>

                      <div>
                        <p
                          className="
                            text-[9px]
                            uppercase
                            tracking-[0.2em]
                            text-neutral-400
                          "
                        >
                          Timeline
                        </p>
                        <p className="mt-0.5 text-xs text-neutral-600">
                          {project.timeline}
                        </p>
                      </div>
                    </div>

                    <div
                      className="
                        mt-4

                        flex
                        flex-wrap
                        gap-1.5
                      "
                    >
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="
                            px-2.5
                            py-1

                            text-[10px]
                            uppercase
                            tracking-[0.1em]

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
                        mt-5

                        pt-4

                        border-t
                        border-neutral-200

                        flex
                        flex-col
                        gap-2
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
                            gap-2

                            text-xs
                            uppercase
                            tracking-[0.15em]
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

                    {/* Prev / Next — pinned to the bottom of the
                        column on desktop, matching the reference's
                        bottom-right anchored arrows. */}
                    <div
                      className="
                        mt-4
                        lg:mt-auto
                        lg:pt-4

                        flex
                        items-center
                        justify-end
                        gap-4
                      "
                    >
                      <button
                        type="button"
                        onClick={onPrev}
                        aria-label="Previous project"
                        className="
                          text-xs
                          uppercase
                          tracking-[0.15em]
                          text-neutral-500

                          transition-colors
                          duration-300

                          hover:text-neutral-900
                        "
                      >
                        ←
                      </button>

                      <button
                        type="button"
                        onClick={onNext}
                        aria-label="Next project"
                        className="
                          text-xs
                          uppercase
                          tracking-[0.15em]
                          text-neutral-500

                          transition-colors
                          duration-300

                          hover:text-neutral-900
                        "
                      >
                        →
                      </button>
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
