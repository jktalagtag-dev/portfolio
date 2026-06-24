import { Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

import Loader from "./components/ui/Loader";

import Home from "./pages/Home";
import Work from "./pages/Work";
import AboutPage from "./pages/About";
import Contact from "./pages/Contact";
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
     <Route path="/" element={<Home />} />

<Route path="/work" element={<Work />} />

<Route
  path="/work/:slug"
  element={<ProjectCaseStudy />}
/>

<Route path="/about" element={<AboutPage />} />

<Route path="/contact" element={<Contact />} />
    </Routes>
  );
}