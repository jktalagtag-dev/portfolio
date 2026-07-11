import { useLayoutEffect, useRef } from "react";

import {
  gsap,
  ScrollTrigger,
  prefersReducedMotion,
} from "../../utils/gsap";

import MaskText from "../../components/motion/MaskText";
import ParallaxImage from "../../components/motion/ParallaxImage";

/*
 * Mobile / narrow-screen project sequence. Not the desktop
 * pinned carousel, and deliberately not a uniform fade-on-scroll
 * list either — each project is a small composed scene:
 *
 *   - a layered parallax image (frame fixed, photo drifts),
 *   - an oversized numeral behind it drifting the OTHER way
 *     (the second plane — this is the "layered" in parallax),
 *   - a mask-wipe reveal on the title (text-on-scroll),
 *   - a short metadata stagger.
 *
 * The choreography is per-scene and one-shot, so a fast-skimming
 * reader is never blocked and nothing loops. Image and title are
 * buttons that open the shared ProjectModal (owned by
 * ProjectExhibition) instead of navigating — only title + tech
 * stay always-visible here, everything else lives in the modal.
 */

export default function ExhibitionFallback({
  projects,
  onOpenProject,
}) {
  const rootRef = useRef(null);

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return undefined;
    if (prefersReducedMotion()) return undefined;

    const ctx = gsap.context(() => {
      gsap.utils.toArray("[data-scene]").forEach((scene) => {
        // Metadata cascade — earned, tight, one-shot on enter.
        const bits = scene.querySelectorAll("[data-reveal]");
        if (bits.length) {
          gsap.from(bits, {
            y: 26,
            autoAlpha: 0,
            filter: "blur(6px)",
            duration: 0.7,
            ease: "power3.out",
            stagger: 0.08,
            scrollTrigger: {
              trigger: scene,
              start: "top 70%",
              once: true,
            },
          });
        }

        // Second plane: the big numeral drifts opposite the photo.
        const num = scene.querySelector("[data-parallax-num]");
        if (num) {
          gsap.fromTo(
            num,
            { yPercent: 22 },
            {
              yPercent: -22,
              ease: "none",
              scrollTrigger: {
                trigger: scene,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
              },
            }
          );
        }
      });

      ScrollTrigger.refresh();
    }, rootRef);

    return () => ctx.revert();
  }, [projects]);

  return (
    <div
      ref={rootRef}
      className="
        px-5
        sm:px-6
        md:px-10

        space-y-24
        sm:space-y-28
      "
    >
      {projects.map((project, i) => (
        <article key={project.slug} data-scene>
          {/* Image plane + numeral plane */}
          <button
            type="button"
            onClick={() => onOpenProject(project)}
            aria-label={`View ${project.title} details`}
            className="group relative block w-full text-left"
          >
            <ParallaxImage
              src={project.image}
              alt={project.title}
              priority={i === 0}
              intensity={6}
              className="
                relative
                z-10

                aspect-[4/3]
                sm:aspect-[16/10]

                border
                border-white/10
              "
            />

            {/* Foreground plane — editorial page-number over the
                image, drifting on its own rate. mix-blend keeps it
                legible on any photo. */}
            <span
              data-parallax-num
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                right-4
                top-3
                z-20

                font-extralight
                leading-none
                tracking-[-0.04em]

                text-[3.25rem]
                sm:text-[4rem]

                text-white
                mix-blend-difference
              "
            >
              {project.number}
            </span>
          </button>

          {/* Title — mask-wipe reveal (text-on-scroll) */}
          <h3
            className="
              mt-8

              text-[2rem]
              sm:text-[2.5rem]

              font-light
              leading-[1.05]
              tracking-[-0.04em]
              text-white
            "
          >
            <MaskText
              as="span"
              start="top 82%"
              innerClassName="
                transition-colors
                duration-300
              "
            >
              <button
                type="button"
                onClick={() => onOpenProject(project)}
                className="text-left hover:text-neutral-400"
              >
                {project.title}
              </button>
            </MaskText>
          </h3>

          {/* Metadata cascade */}
          <p
            data-reveal
            className="
              mt-5

              text-[11px]
              uppercase
              tracking-[0.3em]
              text-neutral-500
            "
          >
            {project.number}&ensp;·&ensp;{project.year}
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
                  border-white/15

                  text-neutral-400
                "
              >
                {tech}
              </span>
            ))}
          </div>
        </article>
      ))}
    </div>
  );
}
