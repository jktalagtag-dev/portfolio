import { useLayoutEffect, useMemo, useRef } from "react";

import {
  gsap,
  prefersReducedMotion,
  scheduleRefresh,
} from "../../utils/gsap";

/*
 * A statement that reads at scroll pace — each word brightens in
 * sequence, scrubbed to scroll position (not one-shot), so the
 * sentence completes exactly as the reader moves through it.
 * Reserved for editorial pull-quotes / philosophy statements; body
 * copy should never do this. Expects plain-string children (words
 * are split on whitespace). Honors reduced motion by rendering
 * fully bright.
 */

export default function ScrubText({
  children,
  as: Tag = "p",
  className = "",
  start = "top 75%",
  end = "top 30%",
}) {
  const ref = useRef(null);

  const words = useMemo(
    () => String(children).trim().split(/\s+/),
    [children]
  );

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    const targets = el.querySelectorAll("[data-word]");
    if (!targets.length) return undefined;

    if (prefersReducedMotion()) {
      gsap.set(targets, { opacity: 1 });
      return undefined;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        targets,
        { opacity: 0.22 },
        {
          opacity: 1,
          ease: "none",
          stagger: 0.06,
          scrollTrigger: {
            trigger: el,
            start,
            end,
            scrub: true,
          },
        }
      );
    }, ref);

    scheduleRefresh();

    return () => ctx.revert();
  }, [children, start, end]);

  return (
    <Tag ref={ref} className={className}>
      {words.map((word, i) => (
        <span key={i}>
          <span data-word className="inline-block">
            {word}
          </span>{" "}
        </span>
      ))}
    </Tag>
  );
}
