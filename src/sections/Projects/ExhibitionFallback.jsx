import { useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import MaskText from "../../components/motion/MaskText";
import ParallaxImage from "../../components/motion/ParallaxImage";

gsap.registerPlugin(ScrollTrigger);

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
 * reader is never blocked and nothing loops.
 */

export default function ExhibitionFallback({ projects }) {
  const rootRef = useRef(null);

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return undefined;

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
          <Link
            to={`/work/${project.slug}`}
            className="group relative block"
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
                border-neutral-200
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
          </Link>

          {/* Title — mask-wipe reveal (text-on-scroll) */}
          <h3
            className="
              mt-8

              text-[2rem]
              sm:text-[2.5rem]

              font-light
              leading-[1.05]
              tracking-[-0.04em]
              text-neutral-900
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
              <Link
                to={`/work/${project.slug}`}
                className="hover:text-neutral-500"
              >
                {project.title}
              </Link>
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
              text-neutral-400
            "
          >
            {project.number}&ensp;·&ensp;{project.year}
          </p>

          <p
            data-reveal
            className="
              mt-4

              max-w-xl

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
              mt-5

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

          <div data-reveal className="mt-7">
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
          </div>
        </article>
      ))}
    </div>
  );
}
