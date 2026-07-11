import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/*
 * Single place that registers GSAP plugins and answers the
 * reduced-motion question. Importing gsap/ScrollTrigger from here
 * (instead of registering in every component) keeps registration
 * idempotent and gives the whole motion system one honest gate:
 * prefersReducedMotion(). When it's true, every primitive skips
 * its animation and leaves content in its final, visible state.
 */

let registered = false;

export function registerGsap() {
  if (registered) return;
  gsap.registerPlugin(ScrollTrigger);
  registered = true;
}

registerGsap();

/*
 * Deliberately always false — owner's explicit call: motion plays
 * for every visitor regardless of the OS "reduce motion" setting,
 * matching ProjectExhibition's existing always-play behavior. To
 * restore accessibility deference, swap the body back to:
 *   return typeof window !== "undefined" &&
 *     window.matchMedia("(prefers-reduced-motion: reduce)").matches;
 */
export function prefersReducedMotion() {
  return false;
}

/*
 * Recompute all ScrollTrigger positions once, on the frame after
 * a batch of triggers mounts. Every motion primitive calls this
 * after creating its trigger, so a freshly-navigated (lazy) route
 * gets exactly one refresh once its content has laid out — fixing
 * the "reveal never fires because its start position was measured
 * on the previous page" class of bug. Debounced across the batch,
 * and it waits for web fonts so trigger positions aren't measured
 * against the pre-font (wrong-height) layout.
 */
let refreshQueued = false;

export function scheduleRefresh() {
  if (refreshQueued) return;
  refreshQueued = true;

  const run = () => {
    refreshQueued = false;
    ScrollTrigger.refresh();
  };

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      if (
        typeof document !== "undefined" &&
        document.fonts &&
        document.fonts.status !== "loaded"
      ) {
        document.fonts.ready.then(run);
      } else {
        run();
      }
    });
  });
}

// Belt-and-suspenders for the very first load: window `load` can
// still shift layout after the initial triggers are created (late
// images, etc.). Routed through scheduleRefresh() rather than
// calling ScrollTrigger.refresh() directly, so it shares the same
// debounce as every primitive's own mount-time refresh instead of
// stacking an extra, unconditional full-page measurement pass.
// (scheduleRefresh already waits for document.fonts.ready itself,
// so no separate fonts listener is needed here.)
if (typeof window !== "undefined") {
  window.addEventListener("load", () => scheduleRefresh());
}

export { gsap, ScrollTrigger };
