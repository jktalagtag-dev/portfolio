import { motion } from "framer-motion";

import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";

import Hero from "../sections/Hero/Hero";
import ProjectShowcase from "../sections/Projects/ProjectShowcase";

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

        {/*
          Opaque layer above the hero — as it scrolls up it
          covers the hero's fade/recede exit.
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
