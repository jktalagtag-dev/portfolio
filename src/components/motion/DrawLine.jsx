import { useLayoutEffect, useRef } from "react";

import {
  gsap,
  prefersReducedMotion,
  scheduleRefresh,
} from "../../utils/gsap";

/*
 * A rule/line that draws itself in — reserved for dividers,
 * timeline spines and connectors, so structural lines feel
 * constructed rather than faded. `scrub` ties the draw to scroll
 * (good for long vertical spines); otherwise it's a one-shot on
 * enter. The caller styles the element (width/height/color);
 * this only animates the scale from 0. Honors reduced motion by
 * rendering the line fully drawn.
 */

export default function DrawLine({
  as: Tag = "div",
  className = "",
  axis = "y",
  scrub = false,
  duration = 1,
  start = "top 85%",
  end = "bottom 55%",
  origin,
}) {
  const ref = useRef(null);

  const transformOrigin =
    origin || (axis === "x" ? "left center" : "center top");

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    const from = axis === "x" ? { scaleX: 0 } : { scaleY: 0 };
    const to = axis === "x" ? { scaleX: 1 } : { scaleY: 1 };

    if (prefersReducedMotion()) {
      gsap.set(el, to);
      return undefined;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(el, from, {
        ...to,
        ease: scrub ? "none" : "power3.out",
        duration: scrub ? undefined : duration,
        scrollTrigger: scrub
          ? { trigger: el, start, end, scrub: true }
          : { trigger: el, start, once: true },
      });
    }, ref);

    scheduleRefresh();

    return () => ctx.revert();
  }, [axis, scrub, duration, start, end]);

  return (
    <Tag ref={ref} className={className} style={{ transformOrigin }} />
  );
}
