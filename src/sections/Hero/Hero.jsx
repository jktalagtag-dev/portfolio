import { useLayoutEffect, useRef } from "react";

import HeroContainer from "../../components/ui/HeroContainer";

import CursorEffect from "./CursorEffect";
import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";

import {
  gsap,
  prefersReducedMotion,
} from "../../utils/gsap";

/*
 * Hero. The content reveals on load (headline blur-rise, meta
 * stagger — owned by the children) and recedes on scroll: as the
 * section scrolls out it drifts down, fades, and eases back in
 * scale, so the project curtain slides over a settling hero
 * rather than a hard cut. The scroll-exit is a GSAP scrub (glued
 * to Lenis); static under reduced motion.
 */

export default function Hero() {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);

  useLayoutEffect(() => {
    if (prefersReducedMotion()) return undefined;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // Drift + settle across the whole exit.
      tl.to(
        contentRef.current,
        { y: 140, scale: 0.96, duration: 1 },
        0
      );
      // Fade only through the middle of the pass, so it's still
      // legible on entry and fully gone before the curtain lands.
      tl.to(
        contentRef.current,
        { autoAlpha: 0, duration: 0.62 },
        0.2
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative isolate"
    >
      <CursorEffect className="relative overflow-hidden">
        <HeroBackground />

        <div
          ref={contentRef}
          className="
            relative
            z-10

            origin-top

            will-change-transform
          "
        >
          <HeroContainer>
            <HeroContent />
          </HeroContainer>
        </div>
      </CursorEffect>
    </section>
  );
}
