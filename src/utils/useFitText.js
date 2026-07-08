import { useLayoutEffect, useRef, useState } from "react";

/*
 * Fit-to-width text — measures rendered glyphs and solves
 * for the font size that makes them span the container
 * exactly, at every viewport. Re-fits after the webfont
 * loads and on resize. Text width scales linearly with
 * font size (tracking is in em), so one ratio pass
 * converges.
 *
 * Mark the element that receives the font size with
 * `data-fit-sized` and the inline ink element(s) with
 * `data-fit-ink` (AnimatedHeading does both). Apply the
 * returned fontSize via style, with a vw fallback while
 * it is still null.
 */

export default function useFitText() {
  const containerRef = useRef(null);
  const [fontSize, setFontSize] = useState(null);

  useLayoutEffect(() => {
    const wrap = containerRef.current;

    if (!wrap) return undefined;

    const fit = () => {
      const sized = wrap.querySelector("[data-fit-sized]");
      const inks = wrap.querySelectorAll("[data-fit-ink]");

      if (!sized || inks.length === 0) return;

      const current = parseFloat(
        getComputedStyle(sized).fontSize
      );

      const textWidth = [...inks].reduce(
        (width, el) =>
          width + el.getBoundingClientRect().width,
        0
      );
      const available = wrap.clientWidth;

      if (!current || !textWidth || !available) return;

      const next = current * (available / textWidth);

      setFontSize((prev) =>
        prev && Math.abs(prev - next) < 0.5 ? prev : next
      );
    };

    const observer = new ResizeObserver(fit);
    observer.observe(wrap);

    document.fonts.ready.then(fit);

    return () => observer.disconnect();
  }, []);

  return { containerRef, fontSize };
}
