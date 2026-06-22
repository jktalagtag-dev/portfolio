import { Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

import Home from "./pages/home";
import Loader from "./components/ui/Loader";
import ProjectCaseStudy from "./sections/Projects/PortfolioCaseStudy";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <AnimatePresence>
        <Loader />
      </AnimatePresence>
    );
  }

  return (
    <Routes>
      <Route
        path="/"
        element={<Home />}
      />

      <Route
        path="/projects/:slug"
        element={<ProjectCaseStudy />}
      />
    </Routes>
  );
}