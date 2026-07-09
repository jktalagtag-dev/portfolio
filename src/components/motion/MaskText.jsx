import { useLayoutEffect, useRef } from "react";

import {
  gsap,
  prefersReducedMotion,
  scheduleRefresh,
} from "../../utils/gsap";

/*
 * Text-on-scroll reveal — the content sits in an overflow-hidden
 * line and rises into view (translateY from below the mask to 0)
 * once it scrolls into range. A clip/mask wipe rather than a
 * fade: editorial, and it reads as deliberate rather than the
 * uniform fade-and-rise reflex. One-shot (not scrubbed) so the
 * text is never in motion while being read.
 */

export default function MaskText({
  children,
  as: Tag = "span",
  className = "",
  innerClassName = "",
  delay = 0,
  start = "top 85%",
}) {
  const innerRef = useRef(null);

  useLayoutEffect(() => {
    const inner = innerRef.current;
    if (!inner) return undefined;
    if (prefersReducedMotion()) {
      gsap.set(inner, { clearProps: "all" });
      return undefined;
    }

    const ctx = gsap.context(() => {
      gsap.from(inner, {
        yPercent: 118,
        duration: 0.9,
        delay,
        ease: "power4.out",
        scrollTrigger: {
          trigger: inner,
          start,
          once: true,
        },
      });
    });

    scheduleRefresh();

    return () => ctx.revert();
  }, [delay, start]);

  return (
    // pb/-mb pair gives the clip box room for descenders (g, j, p)
    // without adding layout space below the line.
    <Tag
      className={`block overflow-hidden pb-[0.14em] -mb-[0.14em] ${className}`}
    >
      <span
        ref={innerRef}
        className={`block will-change-transform ${innerClassName}`}
      >
        {children}
      </span>
    </Tag>
  );
}
