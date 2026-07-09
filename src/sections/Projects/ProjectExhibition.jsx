import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { getLenis } from "../../utils/useSmoothScroll";

import ExhibitionFallback from "./ExhibitionFallback";

gsap.registerPlugin(ScrollTrigger);

/*
 * Scroll-scrubbed pinned exhibition — the section pins and the
 * viewport holds while each project cross-dissolves into the
 * next, driven entirely by scroll position (scrub). Images are
 * stacked and overlap through the transition so there is never
 * an empty state; the info panel on the right stays anchored
 * while its contents change. Only runs on lg+ with motion
 * allowed; everything else falls back to a calm stacked list.
 */

const HOLD = 0.55; // scroll "dwell" on each scene before it moves
const SHIFT = 130; // px the editorial spread travels in/out

export default function ProjectExhibition({ projects }) {
  const wrapperRef = useRef(null);
  const stageRef = useRef(null);
  const slotRefs = useRef([]);
  const imgRefs = useRef([]);
  const infoRefs = useRef([]);

  // Decide the mode after mount so we never mismatch the
  // pinned/fallback markup, and rebuild on breakpoint change.
  const [pinned, setPinned] = useState(false);

  useEffect(() => {
    const decide = () =>
      setPinned(
        window.matchMedia("(min-width: 1024px)").matches &&
          !window.matchMedia(
            "(prefers-reduced-motion: reduce)"
          ).matches
      );

    decide();
    window.addEventListener("resize", decide);

    return () => window.removeEventListener("resize", decide);
  }, []);

  useEffect(() => {
    if (!pinned) return undefined;

    const lenis = getLenis();
    const onLenisScroll = () => ScrollTrigger.update();
    lenis?.on("scroll", onLenisScroll);

    const ctx = gsap.context(() => {
      const slots = slotRefs.current;
      const imgs = imgRefs.current;
      const infos = infoRefs.current;
      const n = projects.length;

      // Resting states: project 0 shown, the rest staged below.
      slots.forEach((slot, i) => {
        gsap.set(slot, {
          y: i === 0 ? 0 : SHIFT,
          scale: i === 0 ? 1 : 1.08,
          autoAlpha: i === 0 ? 1 : 0,
          filter: i === 0 ? "blur(0px)" : "blur(12px)",
        });
      });

      infos.forEach((info, i) => {
        gsap.set(info, { autoAlpha: i === 0 ? 1 : 0 });
        const bits = info.querySelectorAll("[data-reveal]");
        if (i !== 0) {
          gsap.set(bits, {
            y: 40,
            autoAlpha: 0,
            filter: "blur(8px)",
          });
        }
      });

      // Pin is CSS position:sticky on the stage (robust across
      // smooth-scroll setups); ScrollTrigger only scrubs the
      // timeline against the tall wrapper's scroll progress.
      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });

      // Gentle parallax on the inner image across the whole
      // pinned pass — only the visible frame reads it.
      imgs.forEach((img) => {
        tl.fromTo(
          img,
          { yPercent: -6 },
          { yPercent: 6, ease: "none", duration: n },
          0
        );
      });

      let at = HOLD;

      for (let i = 0; i < projects.length - 1; i++) {
        const out = slots[i];
        const inc = slots[i + 1];
        const outInfo = infos[i];
        const incInfo = infos[i + 1];
        const incBits =
          incInfo.querySelectorAll("[data-reveal]");

        // Outgoing spread recedes upward and blurs away.
        tl.to(
          out,
          {
            y: -SHIFT,
            scale: 0.98,
            autoAlpha: 0,
            filter: "blur(12px)",
            ease: "power2.in",
            duration: 0.9,
          },
          at
        );

        // Incoming spread slides up into place — overlaps the
        // outgoing one so the frame is never empty.
        tl.fromTo(
          inc,
          {
            y: SHIFT,
            scale: 1.08,
            autoAlpha: 0,
            filter: "blur(12px)",
          },
          {
            y: 0,
            scale: 1,
            autoAlpha: 1,
            filter: "blur(0px)",
            ease: "power3.out",
            duration: 1,
          },
          at + 0.15
        );

        // Info panel: old copy lifts out, new copy staggers in.
        tl.to(
          outInfo,
          {
            autoAlpha: 0,
            duration: 0.4,
            ease: "power2.in",
          },
          at
        );
        tl.set(incInfo, { autoAlpha: 1 }, at + 0.2);
        tl.fromTo(
          incBits,
          { y: 40, autoAlpha: 0, filter: "blur(8px)" },
          {
            y: 0,
            autoAlpha: 1,
            filter: "blur(0px)",
            ease: "power3.out",
            duration: 0.8,
            stagger: 0.09,
          },
          at + 0.3
        );

        at += 1 + HOLD;
      }

      ScrollTrigger.refresh();
    }, wrapperRef);

    return () => {
      lenis?.off("scroll", onLenisScroll);
      ctx.revert();
    };
  }, [pinned, projects]);

  if (!pinned) {
    return <ExhibitionFallback projects={projects} />;
  }

  return (
    <section
      ref={wrapperRef}
      aria-label="Featured projects"
      style={{ height: `${projects.length * 100}vh` }}
    >
      <div
        ref={stageRef}
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
            grid-cols-[1.7fr_1fr]
            gap-14
            xl:gap-20

            items-center
          "
        >
          {/* Image stack (left) */}
          <div className="relative h-[72vh]">
            {projects.map((project, i) => (
              <div
                key={project.slug}
                ref={(el) => (slotRefs.current[i] = el)}
                className="
                  absolute
                  inset-0

                  will-change-transform
                "
              >
                <div
                  className="
                    relative
                    h-full
                    w-full

                    overflow-hidden

                    border
                    border-neutral-200
                  "
                >
                  <img
                    ref={(el) => (imgRefs.current[i] = el)}
                    src={project.image}
                    alt={project.title}
                    loading={i === 0 ? "eager" : "lazy"}
                    decoding="async"
                    className="
                      absolute
                      inset-0

                      h-full
                      w-full

                      object-cover

                      will-change-transform
                    "
                    style={{ scale: "1.12" }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Info panel (right) — anchored, contents cross-fade */}
          <div className="relative h-[72vh]">
            {projects.map((project, i) => (
              <div
                key={project.slug}
                ref={(el) => (infoRefs.current[i] = el)}
                className="
                  absolute
                  inset-0

                  flex
                  flex-col
                  justify-center
                "
              >
                <p
                  data-reveal
                  className="
                    text-[11px]
                    uppercase
                    tracking-[0.3em]
                    text-neutral-400
                  "
                >
                  {project.number}&ensp;·&ensp;{project.year}
                </p>

                <h3
                  data-reveal
                  className="
                    mt-6

                    text-[2.5rem]
                    xl:text-[3.25rem]

                    font-light
                    leading-[1.02]
                    tracking-[-0.04em]

                    text-neutral-900
                  "
                >
                  {project.title}
                </h3>

                <p
                  data-reveal
                  className="
                    mt-6

                    max-w-md

                    text-base
                    leading-relaxed
                    text-neutral-500
                  "
                >
                  {project.description}
                </p>

                <p
                  data-reveal
                  className="
                    mt-7

                    text-[11px]
                    uppercase
                    tracking-[0.2em]
                    text-neutral-400
                  "
                >
                  {project.role}&ensp;·&ensp;{project.timeline}
                </p>

                <div
                  data-reveal
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

                <div
                  data-reveal
                  className="
                    mt-9

                    flex
                    flex-wrap
                    items-center

                    gap-x-8
                    gap-y-3
                  "
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

                  {project.live !== "#" && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="
                        text-sm
                        uppercase
                        tracking-[0.18em]
                        text-neutral-500

                        transition-colors
                        duration-300

                        hover:text-neutral-900
                      "
                    >
                      Live ↗
                    </a>
                  )}
                </div>

                {/* Progress index */}
                <p
                  className="
                    mt-12

                    text-[11px]
                    uppercase
                    tracking-[0.25em]
                    text-neutral-300
                  "
                >
                  {String(i + 1).padStart(2, "0")}
                  &ensp;/&ensp;
                  {String(projects.length).padStart(2, "0")}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
