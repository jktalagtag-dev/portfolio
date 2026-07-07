import { useEffect } from "react";
import Lenis from "lenis";

/*
 * Lenis smooth scrolling — inertia-based scroll that makes
 * every scroll-linked animation (hero curtain, cinematic
 * images) interpolate smoothly instead of stepping with the
 * wheel. Disabled under prefers-reduced-motion.
 */

let lenisInstance = null;

export function getLenis() {
  return lenisInstance;
}

export default function useSmoothScroll() {
  useEffect(() => {
    if (
      window.matchMedia("(prefers-reduced-motion: reduce)")
        .matches
    ) {
      return undefined;
    }

    const lenis = new Lenis({
      lerp: 0.1,
      smoothWheel: true,
    });

    lenisInstance = lenis;

    let rafId;

    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      lenisInstance = null;
    };
  }, []);
}
