import { Routes, Route } from "react-router-dom";
import {
  AnimatePresence,
  MotionConfig,
} from "framer-motion";
import { lazy, Suspense, useEffect, useState } from "react";

import Loader from "./components/ui/Loader";
import ScrollToTop from "./components/ui/ScrollToTop";
import useSmoothScroll from "./utils/useSmoothScroll";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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

export default function App() {
  const [loading, setLoading] = useState(
    () => !hasSeenLoader()
  );

  useSmoothScroll();

  useEffect(() => {
    if (!loading) return undefined;

    const timer = setTimeout(() => {
      sessionStorage.setItem("intro-loader-shown", "1");
      setLoading(false);
      requestAnimationFrame(() => {
  ScrollTrigger.refresh();
});
    }, 1800);

    return () => clearTimeout(timer);
  }, [loading]);

  return (
    <MotionConfig reducedMotion="never">
      <AnimatePresence mode="wait">
        {loading ? (
          <Loader key="loader" />
        ) : (
          <>
            <ScrollToTop />

            <Suspense fallback={null}>
              <Routes>
                <Route path="/" element={<Home />} />

                <Route path="/work" element={<Work />} />

                <Route
                  path="/work/:slug"
                  element={<ProjectCaseStudy />}
                />

                <Route
                  path="/about"
                  element={<AboutPage />}
                />

                <Route
                  path="/contact"
                  element={<Contact />}
                />

                <Route
                  path="*"
                  element={<NotFound />}
                />
              </Routes>
            </Suspense>
          </>
        )}
      </AnimatePresence>
    </MotionConfig>
  );
}