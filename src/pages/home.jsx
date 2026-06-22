import { motion } from "framer-motion";

import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";

import Hero from "../sections/Hero/Hero";
import About from "../sections/About/About";
import Skills from "../sections/Skills/Skills";
import Projects from "../sections/Projects/Projects";
import Experience from "../sections/Experience/Experience";
import Contact from "../sections/Contact/Contact";
import Currently from "../sections/Currently/Currently";

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
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Currently />
        <Contact />
      </main>

      <Footer />
    </motion.div>
  );
}