import { useEffect } from "react";
import Lenis from "lenis";

import { ScrollTrigger, prefersReducedMotion } from "./gsap";

/*
 * Lenis smooth scrolling, and the one place the whole GSAP
 * scroll system is kept in sync: every Lenis tick tells
 * ScrollTrigger to re-read scroll, so scroll-linked motion on
 * ANY page stays glued to the smooth scroll (not just the
 * project showcase, which used to wire this itself).
 *
 * Disabled under prefers-reduced-motion — motion-sensitive
 * visitors get native, instant scrolling and the reveal
 * primitives render their final state with no animation.
 */

let lenisInstance = null;

export function getLenis() {
  return lenisInstance;
}

export default function useSmoothScroll() {
  useEffect(() => {
    if (prefersReducedMotion()) return undefined;

    const lenis = new Lenis({
      lerp: 0.1,
      smoothWheel: true,
      syncTouch: false,
      wheelMultiplier: 1,
      touchMultiplier: 1,
    });

    lenisInstance = lenis;

    const onScroll = () => ScrollTrigger.update();
    lenis.on("scroll", onScroll);

    let rafId = 0;

    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.off("scroll", onScroll);
      lenis.destroy();
      lenisInstance = null;
    };
  }, []);
}
