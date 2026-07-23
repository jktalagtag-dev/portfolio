import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, MotionConfig } from "framer-motion";
import { lazy, Suspense, useEffect, useState } from "react";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

import Loader from "./components/ui/Loader";
import useSmoothScroll from "./utils/useSmoothScroll";
import { ScrollTrigger } from "./utils/gsap";

/*
 * Route-level code splitting — each page ships as its own
 * chunk, so the first paint only loads what it needs.
 */
const Home = lazy(() => import("./pages/Home"));
const Work = lazy(() => import("./pages/Work"));
const AboutPage = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));
const ProjectCaseStudy = lazy(() =>
  import("./sections/Projects/PortfolioCaseStudy")
);

// The intro loader is a brand moment for first-time
// visitors — repeating it on every reload just costs time.
const hasSeenLoader = () =>
  sessionStorage.getItem("intro-loader-shown") === "1";

// Minimum time the loader stays up — long enough for its own
// choreography to land, short enough to never feel like a gate.
const LOADER_MIN_MS = 1600;

export default function App() {
  const location = useLocation();

  const [loading, setLoading] = useState(
    () => !hasSeenLoader()
  );

  useSmoothScroll();

  // Loader dismissal is tied to real readiness (fonts, which every
  // ScrollTrigger measurement depends on) with a minimum display
  // time — not a fake fixed timer.
  useEffect(() => {
    if (!loading) return undefined;

    let cancelled = false;

    const minDelay = new Promise((resolve) =>
      setTimeout(resolve, LOADER_MIN_MS)
    );

    Promise.all([document.fonts.ready, minDelay]).then(() => {
      if (cancelled) return;

      sessionStorage.setItem("intro-loader-shown", "1");
      setLoading(false);

      requestAnimationFrame(() => {
        ScrollTrigger.refresh();
      });
    });

    return () => {
      cancelled = true;
    };
  }, [loading]);

  // Warm the other route chunks once the browser is idle, so the
  // curtain transition (AnimatePresence mode="wait") never lands on
  // a blank Suspense frame waiting for a chunk to download.
  useEffect(() => {
    const prefetch = () => {
      import("./pages/Home");
      import("./pages/Work");
      import("./pages/About");
      import("./pages/Contact");
      import("./sections/Projects/PortfolioCaseStudy");
    };

    if ("requestIdleCallback" in window) {
      const id = requestIdleCallback(prefetch, { timeout: 4000 });
      return () => cancelIdleCallback(id);
    }

    const id = setTimeout(prefetch, 2500);
    return () => clearTimeout(id);
  }, []);

  return (
    // reducedMotion="never": owner's explicit call to always play
    // motion for every visitor, matching prefersReducedMotion()
    // in utils/gsap.js — see that file for how to revert both.
    <MotionConfig reducedMotion="never">
      {/* Deployed on Vercel (see vercel.json) — these are the
          zero-config traffic + Core Web Vitals dashboards, not
          visible UI. */}
      <Analytics />
      <SpeedInsights />

      {/* The loader overlays the app (z-[9999]) and wipes upward on
          exit, revealing the already-rendered page beneath — its own
          AnimatePresence so the app doesn't wait to mount. */}
      <AnimatePresence>
        {loading && <Loader key="loader" />}
      </AnimatePresence>

      {!loading && (
        <Suspense fallback={null}>
          {/* Keyed on pathname: mode="wait" lets the outgoing page's
              curtain cover it before the incoming page (mounting
              already covered) lifts its own — see PageTransition. */}
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home />} />

              <Route path="/work" element={<Work />} />

              <Route
                path="/work/:slug"
                element={<ProjectCaseStudy />}
              />

              <Route path="/about" element={<AboutPage />} />

              <Route path="/contact" element={<Contact />} />

              <Route path="*" element={<NotFound />} />
            </Routes>
          </AnimatePresence>
        </Suspense>
      )}
    </MotionConfig>
  );
}
