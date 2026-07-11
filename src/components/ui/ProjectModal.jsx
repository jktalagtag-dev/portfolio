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
 * and details are independent flex columns (not a shared padded
 * wrapper) so the image can bleed fully — no inset padding on any
 * side, at any breakpoint — while the details column keeps its own
 * padding. On desktop the image is align-stretched to match the
 * detail column's natural height (object-cover fills whatever that
 * resolves to), so it always fills its full 70% × full-height area.
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
              lg:h-[560px]
              lg:max-h-[85vh]

              overflow-y-auto
              lg:overflow-hidden

              scrollbar-thin-black

              bg-[#F8F8F8]

              flex
              flex-col
              lg:flex-row

              outline-none
            "
          >
            {/* Close — floats over the image corner. */}
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
              <>
                {/* Image — full bleed, no padding on any side, at
                    any breakpoint. Fixed aspect on mobile/tablet
                    (stacked layout); on desktop the panel has a
                    fixed height (lg:h-[560px] on the panel) and
                    this stretches to fill it exactly, so every
                    project's modal is the same size regardless of
                    how much detail-column content it has. */}
                <div
                  className="
                    relative
                    shrink-0

                    lg:w-[60%]
                    lg:self-stretch

                    overflow-hidden

                    aspect-[16/10]
                    lg:aspect-auto

                    border-b
                    lg:border-b-0
                    lg:border-r

                    border-neutral-200
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

                {/* Details — its own padding, independent of the
                    image, 40% width on desktop. Scrolls internally
                    if content exceeds the panel's fixed height,
                    since the image no longer stretches to match
                    variable content — the modal's overall size
                    stays identical across every project. */}
                <div
                  className="
                    flex
                    flex-1
                    flex-col

                    lg:h-full
                    lg:overflow-y-auto

                    scrollbar-thin-black

                    px-5
                    sm:px-8
                    lg:px-6

                    pt-5
                    sm:pt-8
                    lg:pt-8

                    pb-8
                    lg:pb-8
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
                      column on desktop. */}
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
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
