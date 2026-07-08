import { motion } from "framer-motion";

import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";

import Hero from "../sections/Hero/Hero";
import ProjectShowcase from "../sections/Projects/ProjectShowcase";
import Intro from "../sections/Hero/Intro";

export default function Home() {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 0.8,
      }}
    >
      <Navbar />

      <main>
        <Hero />
        <Intro />
        {/*
          Curtain — everything after the hero sits on an
          opaque layer that scrolls up and covers the
          pinned hero.
        */}
        <div
          className="
            relative
            z-10

            bg-[#F8F8F8]
          "
        >
          <ProjectShowcase />

          <Footer />
        </div>
      </main>
    </motion.div>
  );
}
