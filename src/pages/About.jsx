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

            <div
              data-reveal
              className="
                mt-12

                flex
                flex-wrap
                items-center

                gap-x-6
                gap-y-3

                text-[11px]
                uppercase
                tracking-[0.22em]
                text-neutral-500
              "
            >
              <span>Frontend Developer</span>
              <span className="text-neutral-300">/</span>
              <span>Philippines</span>
              <span className="text-neutral-300">/</span>
              <span>Available for Work</span>
            </div>
          </Reveal>
        </HeroContainer>

        <About />

        {/* Philosophy — About's black chapter break, mirroring
            Home's ProjectShowcase bg-black beat so the page reads
            with the same light → dark → light contrast rhythm
            rather than one flat light scroll. */}
        <section className="bg-black">
          <HeroContainer>
            <div
              className="
                py-24
                sm:py-32
                lg:py-48
              "
            >
              <p
                className="
                  text-[11px]
                  uppercase
                  tracking-[0.3em]
                  text-neutral-500
                "
              >
                Approach
              </p>

              <MaskText
                as="p"
                start="top 85%"
                className="
                  mt-8

                  max-w-5xl

                  text-[2rem]
                  sm:text-[2.75rem]
                  lg:text-[3.5rem]

                  font-light
                  leading-[1.15]
                  tracking-[-0.03em]

                  text-white
                "
              >
                Good frontend is invisible — it just feels right. I
                sweat the typography, the motion, and the small
                interactions most people never notice.
              </MaskText>
            </div>
          </HeroContainer>
        </section>

        <Skills />
        <Experience />

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
