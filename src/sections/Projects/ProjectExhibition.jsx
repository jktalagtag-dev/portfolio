import { useEffect, useRef, useState } from "react";

import {
  gsap,
  prefersReducedMotion,
  scheduleRefresh,
} from "../../utils/gsap";

import ExhibitionFallback from "./ExhibitionFallback";
import ProjectModal from "../../components/ui/ProjectModal";

/*
 * Continuous vertical carousel — the section pins (CSS sticky)
 * and two tracks (image + info) translate upward in lockstep,
 * mapped 1:1 to scroll so advancing feels like one smooth,
 * connected motion rather than a hold-then-jump. Each image
 * parallaxes at a slower rate inside its frame for depth, and a
 * progress bar tracks position. Runs on lg+ regardless of the OS
 * reduced-motion setting (this is the signature piece); narrower
 * screens fall back to a calm stacked list.
 *
 * The always-visible info column only shows number/title/tech —
 * everything else (description, role, links) lives in the
 * click-triggered ProjectModal, owned here and shared with the
 * mobile fallback.
 */

// Scroll length (in viewport heights) budgeted per project. Lower
// = snappier advance between projects; higher = more dwell.
const VH_PER_PROJECT = 88;

// How far the image drifts against its frame — the parallax depth.
const PARALLAX = 9;

export default function ProjectExhibition({ projects }) {
  const wrapperRef = useRef(null);
  const imageTrackRef = useRef(null);
  const infoTrackRef = useRef(null);
  const imgRefs = useRef([]);
  const progressRef = useRef(null);
  const activeRef = useRef(0);

  const [pinned, setPinned] = useState(false);
  const [active, setActive] = useState(0);
  const [openProject, setOpenProject] = useState(null);

  // Decide the mode after mount so we never mismatch the
  // pinned/fallback markup, and rebuild on breakpoint change.
  useEffect(() => {
    // Pin only on lg+ with a fine pointer and motion allowed; narrow
    // screens, touch-only tablets (an iPad Pro landscape is 1024px
    // wide but scroll-scrubbing against touch momentum feels broken),
    // and reduced-motion visitors get the calm stacked fallback.
    const decide = () =>
      setPinned(
        window.matchMedia(
          "(min-width: 1024px) and (hover: hover) and (pointer: fine)"
        ).matches && !prefersReducedMotion()
      );

    decide();
    window.addEventListener("resize", decide);

    return () => window.removeEventListener("resize", decide);
  }, []);

  useEffect(() => {
    if (!pinned) return undefined;

    // Lenis↔ScrollTrigger sync is wired globally in
    // useSmoothScroll, so this only builds the scrub timeline.
    const ctx = gsap.context(() => {
      const n = projects.length;
      if (n < 2) return;

      // Distance both tracks travel: from the first slide to the
      // last. yPercent is a share of each track's own height, and
      // each track is n slides tall, so one slide = 100/n percent.
      const travel = -100 * ((n - 1) / n);

      // One linear, scrubbed timeline drives everything. No dwell,
      // no eased scenes — motion is tied directly to scroll so it
      // reads as a continuous carousel.
      const tl = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: {
          // Pin is CSS position:sticky on the stage (robust with
          // Lenis); ScrollTrigger only scrubs the timeline against
          // the tall wrapper's scroll progress — no ST pinning.
          trigger: wrapperRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.8,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const idx = Math.round(self.progress * (n - 1));
            if (idx !== activeRef.current) {
              activeRef.current = idx;
              setActive(idx);
            }
          },
        },
      });

      // Both columns advance together — the carousel itself.
      tl.to(
        [imageTrackRef.current, infoTrackRef.current],
        { yPercent: travel, duration: 1 },
        0
      );

      // Each image drifts against its frame for parallax depth:
      // starting lower and ending higher, it lags the upward
      // track motion so it reads as a separate, slower layer.
      imgRefs.current.forEach((img) => {
        if (!img) return;
        tl.fromTo(
          img,
          { yPercent: -PARALLAX },
          { yPercent: PARALLAX, duration: 1 },
          0
        );
      });

      // Scrub progress bar along the bottom edge.
      if (progressRef.current) {
        tl.fromTo(
          progressRef.current,
          { scaleX: 0 },
          { scaleX: 1, duration: 1 },
          0
        );
      }

    }, wrapperRef);

    // Debounced + font-gated, same as every other primitive — avoids
    // stacking a second, redundant full-page refresh pass on top of
    // whatever the rest of the page's mount already scheduled.
    scheduleRefresh();

    return () => ctx.revert();
  }, [pinned, projects]);

  // Adjacent project with wraparound — same convention as the
  // case-study "Next Project" computation in PortfolioCaseStudy.jsx.
  const step = (offset) => {
    if (!openProject) return;
    const i = projects.findIndex(
      (p) => p.slug === openProject.slug
    );
    const n = projects.length;
    setOpenProject(projects[(i + offset + n) % n]);
  };

  if (!pinned) {
    return (
      <>
        <ExhibitionFallback
          projects={projects}
          onOpenProject={setOpenProject}
        />
        <ProjectModal
          project={openProject}
          onClose={() => setOpenProject(null)}
          onPrev={() => step(-1)}
          onNext={() => step(1)}
        />
      </>
    );
  }

  const total = String(projects.length).padStart(2, "0");

  return (
    <>
      <section
        ref={wrapperRef}
        aria-label="Featured projects"
        style={{ height: `${projects.length * VH_PER_PROJECT}vh` }}
      >
        <div
          className="
            sticky
            top-0

            h-screen
            w-full

            overflow-hidden
          "
        >
          <div
            className="
              mx-auto
              h-full
              max-w-[1900px]

              px-14
              xl:px-16
              2xl:px-20

              grid
              grid-cols-[1.6fr_1fr]
              gap-14
              xl:gap-20

              items-center
            "
          >
            {/* Image column — a vertical track that scrolls up */}
            <div className="h-[74vh] overflow-hidden">
              <div
                ref={imageTrackRef}
                className="will-change-transform"
              >
                {projects.map((project, i) => (
                  <div
                    key={project.slug}
                    className="
                      relative
                      h-[74vh]
                      w-full

                      overflow-hidden

                      border
                      border-white/10
                    "
                  >
                    <button
                      type="button"
                      onClick={() => setOpenProject(project)}
                      aria-label={`View ${project.title} details`}
                      className="
                        group/img

                        absolute
                        inset-0

                        h-full
                        w-full
                      "
                    >
                      <img
                        ref={(el) => (imgRefs.current[i] = el)}
                        src={project.image}
                        alt={project.title}
                        width="1920"
                        height="1080"
                        loading={i === 0 ? "eager" : "lazy"}
                        fetchPriority={i === 0 ? "high" : "auto"}
                        decoding="async"
                        className="
                          absolute
                          inset-x-0

                          h-[120%]
                          w-full

                          object-cover

                          transition-transform
                          duration-700
                          ease-[cubic-bezier(0.16,1,0.3,1)]

                          will-change-transform

                          group-hover/img:scale-[1.03]
                        "
                        style={{ top: "-10%" }}
                      />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Info column — a matching track, moves in lockstep */}
            <div className="h-[74vh] overflow-hidden">
              <div
                ref={infoTrackRef}
                className="will-change-transform"
              >
                {projects.map((project) => (
                  <div
                    key={project.slug}
                    className="
                      flex
                      h-[74vh]
                      flex-col
                      justify-center
                    "
                  >
                    <p
                      className="
                        text-[11px]
                        uppercase
                        tracking-[0.3em]
                        text-neutral-500
                      "
                    >
                      {project.number}&ensp;·&ensp;{project.year}
                    </p>

                    <h3
                      className="
                        mt-6

                        text-[2.5rem]
                        xl:text-[3.25rem]

                        font-light
                        leading-[1.02]
                        tracking-[-0.04em]
                      "
                    >
                      <button
                        type="button"
                        onClick={() => setOpenProject(project)}
                        className="
                          text-left
                          text-white

                          transition-colors
                          duration-300

                          hover:text-neutral-400
                        "
                      >
                        {project.title}
                      </button>
                    </h3>

                    <div
                      className="
                        mt-7

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
                            border-white/15

                            text-neutral-400
                          "
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Live index — fixed, does not travel with the tracks */}
          <p
            className="
              pointer-events-none
              absolute
              bottom-8
              right-14
              xl:right-16
              2xl:right-20

              text-[11px]
              uppercase
              tracking-[0.25em]
              text-neutral-500

              tabular-nums
            "
          >
            {String(active + 1).padStart(2, "0")}
            &ensp;/&ensp;
            {total}
          </p>

          {/* Scrub progress bar */}
          <div
            className="
              absolute
              bottom-0
              left-0
              right-0

              h-px
              bg-white/10
            "
          >
            <div
              ref={progressRef}
              className="
                h-px
                w-full

                origin-left
                scale-x-0

                bg-white
              "
            />
          </div>
        </div>
      </section>

      <ProjectModal
        project={openProject}
        onClose={() => setOpenProject(null)}
        onPrev={() => step(-1)}
        onNext={() => step(1)}
      />
    </>
  );
}
