import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { getLenis } from "../../utils/useSmoothScroll";
import { scheduleRefresh } from "../../utils/gsap";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Lenis keeps its own animated scroll position — reset it
    // too, or it lerps back to the previous page's offset.
    getLenis()?.scrollTo(0, { immediate: true, force: true });

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });

    // The new route's scroll-reveals mount fresh; recompute their
    // trigger positions once the page has laid out, or they keep
    // the previous route's (stale) coordinates and never fire.
    // (Debounced; the primitives also schedule this on mount.)
    scheduleRefresh();
  }, [pathname]);

  return null;
}
