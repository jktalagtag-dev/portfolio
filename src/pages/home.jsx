import { motion } from "framer-motion";

import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";

import Hero from "../sections/Hero/Hero";
import Projects from "../sections/Projects/Projects";

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
      className="overflow-x-hidden"
    >
      <Navbar />

      <main>
        <Hero />

        <Projects variant="featured" />
      </main>

      <Footer />
    </motion.div>
  );
}