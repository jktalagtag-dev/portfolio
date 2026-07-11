import { useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  animate,
} from "framer-motion";

import HeroContainer from "../../components/ui/HeroContainer";
import Reveal from "../../components/motion/Reveal";
import ProjectModal from "../../components/ui/ProjectModal";

/*
 * The archive, as a horizontal drag carousel — Work's own identity,
 * distinct from Home's vertical pinned scrub. One shared "index"
 * (left-edge-paged, not center-anchored — simpler once card count
 * per viewport varies by breakpoint) drives both the arrow buttons
 * and the drag-release snap, via a single `goTo`. The "which card
 * looks emphasized" look is a separate concern: driven continuously
 * off the raw drag position via `useTransform`, so it's never a
 * frame behind the actual gesture and never needs its own state.
 *
 * Reveal's scroll-entrance (GSAP) and this drag emphasis (Framer)
 * each own a different DOM node per card — GSAP animates the outer
 * [data-reveal] wrapper's opacity/y once, on enter; Framer drives
 * the inner element's scale/opacity continuously. Same node would
 * mean two systems fighting over one style property every frame.
 */

function CarouselCard({ project, index, x, step, onOpen }) {
  const isCardTier = project.tier === "card";
  const s = step || 1;
  const range = [-(s * (index + 1)), -(s * index), -(s * (index - 1))];
  const scale = useTransform(x, range, [0.92, 1, 0.92]);
  const opacity = useTransform(x, range, [0.65, 1, 0.65]);

  return (
    <div
      data-reveal
      className="
        shrink-0

        w-[85vw]
        sm:w-[440px]
        md:w-[480px]
        lg:w-[560px]
        xl:w-[620px]
        2xl:w-[680px]
      "
    >
      <motion.div style={{ scale, opacity }} className="group">
        <button
          type="button"
          onClick={onOpen}
          aria-label={`View ${project.title} details`}
          className={`
            block
            w-full
            text-left

            ${isCardTier ? "border border-neutral-200 p-2" : ""}
          `}
        >
          <div
            className="
              overflow-hidden

              aspect-[4/5]
              sm:aspect-[4/3]
              lg:aspect-[16/10]
            "
          >
            <img
              src={project.image}
              alt={project.title}
              loading="lazy"
              decoding="async"
              draggable={false}
              className="
                h-full
                w-full

                object-cover

                transition-transform
                duration-700
                ease-[cubic-bezier(0.16,1,0.3,1)]

                will-change-transform

                group-hover:scale-[1.03]
              "
            />
          </div>
        </button>

        <div
          className="
            mt-5

            flex
            items-baseline
            justify-between

            gap-4
          "
        >
          <button
            type="button"
            onClick={onOpen}
            className="
              text-left

              text-xl
              sm:text-2xl

              font-light
              tracking-tight

              transition-colors
              duration-300

              hover:text-neutral-500
            "
          >
            {project.title}
          </button>

          <span
            className="
              shrink-0

              text-[11px]
              uppercase
              tracking-[0.25em]
              text-neutral-400
            "
          >
            {project.number}
          </span>
        </div>

        <p
          className="
            mt-2

            max-w-md

            text-sm
            leading-relaxed
            text-neutral-500
          "
        >
          {project.description}
        </p>

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
      </motion.div>
    </div>
  );
}

export default function WorkCarousel({ projects }) {
  const viewportRef = useRef(null);
  const trackRef = useRef(null);
  const stepRef = useRef(0);
  const dragDistanceRef = useRef(0);

  const x = useMotionValue(0);
  const [step, setStep] = useState(0);
  const [constraints, setConstraints] = useState({ left: 0, right: 0 });
  const [index, setIndex] = useState(0);
  const [openProject, setOpenProject] = useState(null);

  useEffect(() => {
    const viewport = viewportRef.current;
    const track = trackRef.current;
    if (!viewport || !track) return undefined;

    const recalc = () => {
      const firstCard = track.children[0];
      const cardWidth = firstCard
        ? firstCard.getBoundingClientRect().width
        : 0;
      const gap = parseFloat(getComputedStyle(track).columnGap || "0");
      const computedStep = cardWidth + gap;

      stepRef.current = computedStep;
      setStep(computedStep);

      const overflow = track.scrollWidth - viewport.clientWidth;
      setConstraints({ left: -Math.max(overflow, 0), right: 0 });
    };

    recalc();

    const ro = new ResizeObserver(recalc);
    ro.observe(viewport);
    ro.observe(track);

    document.fonts?.ready.then(recalc);

    return () => ro.disconnect();
  }, [projects.length]);

  const goTo = (i) => {
    const clamped = Math.max(0, Math.min(projects.length - 1, i));
    setIndex(clamped);

    const target = Math.max(
      constraints.left,
      -stepRef.current * clamped
    );
    animate(x, target, {
      type: "spring",
      stiffness: 300,
      damping: 32,
    });
  };

  const handleDragEnd = () => {
    const raw = Math.round(-x.get() / (stepRef.current || 1));
    goTo(raw);
  };

  // Continuous, driven straight off drag position — same source as
  // the card emphasis system, and the same visual grammar as Home's
  // ProjectExhibition scrub bar (hairline track + fill), just fed by
  // drag instead of vertical scroll.
  const progress = useTransform(x, [constraints.left || -1, 0], [1, 0]);

  // Modal prev/next — same wraparound-by-slug convention as
  // ProjectExhibition.jsx's Home carousel.
  const stepModal = (offset) => {
    if (!openProject) return;
    const i = projects.findIndex((p) => p.slug === openProject.slug);
    const n = projects.length;
    setOpenProject(projects[(i + offset + n) % n]);
  };

  return (
    <>
      <div
        ref={viewportRef}
        className="
          w-full
          overflow-hidden

          pl-5
          sm:pl-6
          md:pl-10
          lg:pl-14
          xl:pl-16
          2xl:pl-12
        "
      >
        <Reveal variant="rise" stagger={0.08}>
          <motion.div
            ref={trackRef}
            drag="x"
            dragConstraints={constraints}
            dragElastic={0.12}
            dragMomentum={false}
            onPointerDown={() => {
              dragDistanceRef.current = 0;
            }}
            onDrag={(_e, info) => {
              dragDistanceRef.current += Math.abs(info.delta.x);
            }}
            onDragEnd={handleDragEnd}
            style={{ x }}
            className="
              flex

              gap-6
              lg:gap-10
              xl:gap-12

              pb-2

              cursor-grab
              active:cursor-grabbing

              select-none
            "
          >
            {projects.map((project, i) => (
              <CarouselCard
                key={project.slug}
                project={project}
                index={i}
                x={x}
                step={step}
                onOpen={() => {
                  if (dragDistanceRef.current > 6) return;
                  setOpenProject(project);
                }}
              />
            ))}
          </motion.div>
        </Reveal>
      </div>

      <HeroContainer>
        <div className="mt-8 lg:mt-10">
          {/* Hairline progress — same track+fill grammar as Home's
              ProjectExhibition scrub bar, driven continuously off
              the drag position itself. */}
          <div className="h-px w-full bg-neutral-200">
            <motion.div
              style={{ scaleX: progress, transformOrigin: "left" }}
              className="h-px bg-neutral-900"
            />
          </div>

          <div
            className="
              mt-4

              flex
              items-center
              justify-end

              gap-6
            "
          >
            <p
              className="
                text-[11px]
                uppercase
                tracking-[0.25em]
                text-neutral-500

                tabular-nums
              "
            >
              {String(index + 1).padStart(2, "0")}
              &ensp;/&ensp;
              {String(projects.length).padStart(2, "0")}
            </p>

            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={() => goTo(index - 1)}
                disabled={index === 0}
                aria-label="Previous project"
                className="
                  text-xs
                  uppercase
                  tracking-[0.15em]
                  text-neutral-500

                  transition-colors
                  duration-300

                  hover:text-neutral-900

                  disabled:opacity-30
                  disabled:hover:text-neutral-500
                "
              >
                ←
              </button>

              <button
                type="button"
                onClick={() => goTo(index + 1)}
                disabled={index === projects.length - 1}
                aria-label="Next project"
                className="
                  text-xs
                  uppercase
                  tracking-[0.15em]
                  text-neutral-500

                  transition-colors
                  duration-300

                  hover:text-neutral-900

                  disabled:opacity-30
                  disabled:hover:text-neutral-500
                "
              >
                →
              </button>
            </div>
          </div>
        </div>
      </HeroContainer>

      <ProjectModal
        project={openProject}
        onClose={() => setOpenProject(null)}
        onPrev={() => stepModal(-1)}
        onNext={() => stepModal(1)}
      />
    </>
  );
}
