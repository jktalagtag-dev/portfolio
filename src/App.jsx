import { Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import ProjectCaseStudy from "./sections/Projects/PortfolioCaseStudy";

export default function App() {
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