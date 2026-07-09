import { useLayoutEffect, useRef } from "react";

import {
  gsap,
  prefersReducedMotion,
  scheduleRefresh,
} from "../../utils/gsap";

/*
 * Counts a number up to its value when it scrolls into view — the
 * signature move reserved for metrics/stats, so numbers feel
 * earned rather than just faded in. `prefix`/`suffix` keep symbols
 * ("+", "%") outside the animated figure. Honors reduced motion by
 * rendering the final value immediately.
 */

export default function CountUp({
  value,
  prefix = "",
  suffix = "",
  decimals = 0,
  duration = 1.6,
  as: Tag = "span",
  className = "",
  start = "top 85%",
}) {
  const ref = useRef(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    const format = (n) =>
      `${prefix}${n.toFixed(decimals)}${suffix}`;

    if (prefersReducedMotion()) {
      el.textContent = format(value);
      return undefined;
    }

    const counter = { n: 0 };

    const ctx = gsap.context(() => {
      el.textContent = format(0);
      gsap.to(counter, {
        n: value,
        duration,
        ease: "power2.out",
        onUpdate: () => {
          el.textContent = format(counter.n);
        },
        scrollTrigger: {
          trigger: el,
          start,
          once: true,
        },
      });
    }, ref);

    scheduleRefresh();

    return () => ctx.revert();
  }, [value, prefix, suffix, decimals, duration, start]);

  return (
    <Tag ref={ref} className={className}>
      {`${prefix}${value}${suffix}`}
    </Tag>
  );
}
