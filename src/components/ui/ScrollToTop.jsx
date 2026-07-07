import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { getLenis } from "../../utils/useSmoothScroll";

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
  }, [pathname]);

  return null;
}
