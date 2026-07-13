import { useLayoutEffect, useState, useEffect } from "react";
import { motion } from "framer-motion";

import { getLenis } from "../../utils/useSmoothScroll";
import { scheduleRefresh } from "../../utils/gsap";

const easeOutExpo = [0.22, 1, 0.36, 1];

/*
 * The black curtain that connects every route — an extension of the
 * site's chapter-break language (black showcase, Approach section,
 * Footer) into navigation itself. Two-panel pattern under
 * AnimatePresence mode="wait":
 *
 *   exit panel  — sweeps up from the bottom to cover the outgoing
 *                 page while it leaves.
 *   enter panel — the incoming page mounts already covered, then the
 *                 panel lifts away upward.
 *
 * Because the new page mounts covered, the scroll reset (folded in
 * from the old ScrollToTop component) happens invisibly behind the
 * curtain instead of visibly yanking the outgoing page to the top.
 *
 * The very first page of the app lifetime skips the enter panel:
 * on a fresh session the intro Loader's own upward wipe is the
 * reveal, and on return visits content should just be there.
 */

let hasNavigated = false;

export default function PageTransition({ children }) {
  // Captured once at mount: is this a navigation (curtain) or the
  // app's first page (no curtain)?
  const [showEnter] = useState(() => hasNavigated);

  useEffect(() => {
    hasNavigated = true;
  }, []);

  useLayoutEffect(() => {
    // Lenis keeps its own animated scroll position — reset it too,
    // or it lerps back to the previous page's offset.
    getLenis()?.scrollTo(0, { immediate: true, force: true });

    window.scrollTo({ top: 0, left: 0, behavior: "instant" });

    // The route's scroll-reveals mount fresh; recompute trigger
    // positions once the page has laid out. (Debounced; the motion
    // primitives also schedule this on their own mounts.)
    scheduleRefresh();
  }, []);

  return (
    <div className="overflow-x-clip">
      {children}

      {/* Exit — covers the outgoing page. Parked below the viewport
          for the page's whole life; only its `exit` ever shows. */}
      <motion.div
        aria-hidden="true"
        initial={{ y: "100%" }}
        animate={{ y: "100%" }}
        exit={{ y: 0 }}
        transition={{ duration: 0.45, ease: [0.65, 0, 0.35, 1] }}
        className="
          fixed
          inset-0

          z-[90]

          bg-black

          pointer-events-none
        "
      />

      {/* Enter — the incoming page starts covered, then the panel
          lifts away, monogram riding with it. */}
      {showEnter && (
        <motion.div
          aria-hidden="true"
          initial={{ y: 0 }}
          animate={{ y: "-100%" }}
          transition={{
            duration: 0.7,
            delay: 0.1,
            ease: easeOutExpo,
          }}
          className="
            fixed
            inset-0

            z-[90]

            flex
            items-center
            justify-center

            bg-black

            pointer-events-none
          "
        >
          <span
            className="
              text-[11px]
              uppercase
              tracking-[0.35em]

              text-neutral-500
            "
          >
            JKT
          </span>
        </motion.div>
      )}
    </div>
  );
}
