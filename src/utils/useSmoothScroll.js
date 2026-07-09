import { useEffect } from "react";
import Lenis from "lenis";

/*
 * Lenis smooth scrolling
 * ----------------------
 * Development version:
 * - Always enables Lenis regardless of the OS "Reduce Motion" setting.
 * - Keeps scroll-linked animations smooth.
 * - Properly cleans up on unmount.
 *
 * Before deploying to production, consider restoring
 * prefers-reduced-motion support for accessibility.
 */

let lenisInstance = null;

export function getLenis() {
  return lenisInstance;
}

export default function useSmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
      smoothWheel: true,
      syncTouch: false,
      wheelMultiplier: 1,
      touchMultiplier: 1,
    });

    lenisInstance = lenis;

    let rafId = 0;

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