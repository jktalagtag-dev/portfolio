import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";

import HeroContainer from "../components/ui/HeroContainer";
import MaskText from "../components/motion/MaskText";
import Reveal from "../components/motion/Reveal";

import About from "../sections/About/About";
import Skills from "../sections/Skills/Skills";
import Experience from "../sections/Experience/Experience";
import Currently from "../sections/Currently/Currently";

export default function AboutPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="overflow-x-clip"
    >
      <Navbar />

      <main className="pt-32 lg:pt-40">
        {/* Page header */}
        <HeroContainer className="pb-16 lg:pb-24">
          <Reveal variant="rise" stagger={0.1}>
            <p
              data-reveal
              className="
                text-[11px]
                uppercase
                tracking-[0.3em]
                text-neutral-400
              "
            >
              About
            </p>

            <MaskText
              as="h1"
              start="top 92%"
              className="
                mt-8

                max-w-5xl

                text-[clamp(2.5rem,7vw,6rem)]

                font-light
                leading-[0.95]
                tracking-[-0.06em]
              "
            >
              Design-minded frontend developer building
              thoughtful digital experiences.
            </MaskText>

            <p
              data-reveal
              className="
                mt-8

                max-w-xl

                text-base
                sm:text-lg

                leading-relaxed
                text-neutral-500
              "
            >
              I care about the details — typography,
              motion, and the small interactions that make
              an interface feel considered.
            </p>
          </Reveal>
        </HeroContainer>

        <About />
        <Skills />
        <Experience />
        <Currently />

        {/* Closing CTA */}
        <section
          className="
            border-t
            border-neutral-200
          "
        >
          <HeroContainer>
            <Link
              to="/contact"
              className="group block py-20 lg:py-28"
            >
              <p
                className="
                  text-[11px]
                  uppercase
                  tracking-[0.3em]
                  text-neutral-400
                "
              >
                Next
              </p>

              <MaskText
                as="span"
                start="top 88%"
                className="
                  mt-6
                  block

                  text-[2.25rem]
                  sm:text-[3.5rem]
                  lg:text-[5rem]

                  font-light
                  leading-[0.95]
                  tracking-[-0.05em]
                "
                innerClassName="
                  transition-colors
                  duration-500

                  group-hover:text-neutral-500
                "
              >
                Let&rsquo;s work together
                <span
                  className="
                    inline-block

                    transition-transform
                    duration-500

                    group-hover:translate-x-3
                  "
                >
                  &nbsp;→
                </span>
              </MaskText>
            </Link>
          </HeroContainer>
        </section>
      </main>

      <Footer />
    </motion.div>
  );
}
