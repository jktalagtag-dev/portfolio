import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import SectionContainer from "../../components/ui/SectionContainer";

import {
  fadeUp,
  staggerContainer,
  lineGrow,
} from "../../utils/animations";

export default function About() {
  return (
    <section
      id="about-preview"
      className="overflow-hidden"
    >
      <SectionContainer>
        <div className="py-20 lg:py-40">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{
              once: true,
              amount: 0.25,
            }}
            className="
              grid
              grid-cols-1
              lg:grid-cols-12
              gap-10
            "
          >
            {/* Vertical Label */}
            <div
              className="
                hidden
                lg:flex
                col-span-2
                items-center
                gap-6
              "
            >
              <motion.div
                variants={lineGrow}
                className="w-px bg-neutral-200"
              />

              <motion.span
                variants={fadeUp}
                className="
                  text-[11px]
                  uppercase
                  tracking-[0.25em]
                  text-neutral-400
                  [writing-mode:vertical-rl]
                  rotate-180
                "
              >
                ABOUT · PREVIEW
              </motion.span>
            </div>

            {/* Heading */}
            <div className="col-span-12 lg:col-span-5">
              <motion.h2
                variants={fadeUp}
                className="
                  max-w-[300px]
                  sm:max-w-none

                  text-[2.5rem]
                  sm:text-5xl
                  xl:text-[5rem]

                  font-light
                  leading-[0.92]
                  tracking-[-0.07em]
                "
              >
                A little
                <br />
                about me.
              </motion.h2>
            </div>

            {/* Content */}
            <div className="col-span-12 lg:col-span-5 lg:pt-6">
              <motion.div
                variants={staggerContainer}
                className="max-w-xl"
              >
                <div
                  className="
                    space-y-6

                    text-base
                    sm:text-lg

                    leading-relaxed
                    text-neutral-600
                  "
                >
                  <motion.p variants={fadeUp}>
                    I'm John Karlo, a Frontend Developer who enjoys
                    turning ideas into clean and intuitive digital
                    experiences.
                  </motion.p>

                  <motion.p variants={fadeUp}>
                    My focus is building responsive interfaces with
                    React while bringing a full-stack understanding
                    from working with Laravel, PHP, and databases.
                  </motion.p>

                  <motion.p variants={fadeUp}>
                    I enjoy the intersection of design and
                    development—where thoughtful user experiences
                    meet solid implementation.
                  </motion.p>
                </div>

                <motion.div
                  variants={fadeUp}
                  className="
                    mt-12

                    pt-8

                    border-t
                    border-neutral-200
                  "
                >
                  <Link
                    to="/about"
                    className="
                      inline-flex
                      items-center
                      gap-3

                      text-sm
                      uppercase
                      tracking-[0.18em]

                      text-neutral-500

                      transition-colors
                      duration-300

                      hover:text-black
                    "
                  >
                    Learn More →
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </SectionContainer>
    </section>
  );
}