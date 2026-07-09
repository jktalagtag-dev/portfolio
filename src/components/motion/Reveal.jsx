import { useLayoutEffect, useRef } from "react";

import {
  gsap,
  prefersReducedMotion,
  scheduleRefresh,
} from "../../utils/gsap";

/*
 * Scroll-reveal for blocks, grids and lists. One component, four
 * distinct materials via `variant` — so different surfaces can
 * reveal in visibly different ways instead of one uniform fade:
 *
 *   rise  — y + fade (calm default)
 *   clip  — clip-path wipe from the top edge (editorial)
 *   scale — settle in from slightly larger
 *   slide — enter from the left
 *
 * With `stagger`, it animates descendants marked [data-reveal]
 * in sequence; otherwise it animates its own single element.
 * Honors reduced motion by rendering the final state, untouched.
 */

const FROM = {
  rise: { y: 44, autoAlpha: 0 },
  clip: { clipPath: "inset(0 0 100% 0)", autoAlpha: 0, y: 16 },
  scale: { scale: 0.94, autoAlpha: 0 },
  slide: { x: -48, autoAlpha: 0 },
};

const TO = {
  rise: { y: 0, autoAlpha: 1 },
  clip: { clipPath: "inset(0 0 0% 0)", autoAlpha: 1, y: 0 },
  scale: { scale: 1, autoAlpha: 1 },
  slide: { x: 0, autoAlpha: 1 },
};

export default function Reveal({
  children,
  as: Tag = "div",
  variant = "rise",
  className = "",
  stagger = 0,
  delay = 0,
  duration = 0.85,
  start = "top 82%",
}) {
  const ref = useRef(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    const targets = stagger
      ? el.querySelectorAll("[data-reveal]")
      : [el];
    if (!targets.length) return undefined;

    if (prefersReducedMotion()) {
      gsap.set(targets, { clearProps: "all" });
      return undefined;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(targets, FROM[variant] || FROM.rise, {
        ...(TO[variant] || TO.rise),
        duration,
        delay,
        ease: "power3.out",
        stagger: stagger || 0,
        scrollTrigger: {
          trigger: el,
          start,
          once: true,
        },
      });
    }, ref);

    scheduleRefresh();

    return () => ctx.revert();
  }, [variant, stagger, delay, duration, start]);

  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}
