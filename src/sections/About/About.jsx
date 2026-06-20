import { motion } from "framer-motion";
import SectionContainer from "../../components/ui/SectionContainer";

import {
  fadeUp,
  staggerContainer,
  lineGrow,
} from "../../utils/animations";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center"
    >
      <SectionContainer>
        <div className="py-40">

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{
              once: true,
              amount: 0.25,
            }}
            className="grid grid-cols-12 gap-8"
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
                ABOUT · 2026
              </motion.span>
            </div>

            {/* Heading */}
            <div className="col-span-12 lg:col-span-5 lg:pt-2">
              <motion.h2
                variants={fadeUp}
                className="
                  text-5xl
                  xl:text-[5rem]
                  font-light
                  leading-[0.92]
                  tracking-[-0.07em]
                "
              >
                Crafting digital
                <br />
                experiences.
              </motion.h2>
            </div>

            {/* Content */}
            <div className="col-span-12 lg:col-span-5 lg:pt-6">

              <motion.div
                variants={staggerContainer}
                className="max-w-lg"
              >

                <div className="space-y-8 text-lg leading-relaxed text-neutral-600">

                  <motion.p variants={fadeUp}>
                    I am a BSIT graduate passionate about building
                    modern web applications using React and Laravel.
                  </motion.p>

                  <motion.p variants={fadeUp}>
                    I enjoy creating clean interfaces and scalable
                    backend systems while continuously improving my
                    skills as a developer.
                  </motion.p>

                  <motion.p variants={fadeUp}>
                    Currently building portfolio projects and actively
                    seeking opportunities to grow as a full-stack
                    developer.
                  </motion.p>

                </div>

                {/* Info Row */}
                <motion.div
                  variants={fadeUp}
                  className="
                    mt-20
                    pt-8
                    border-t
                    border-neutral-200
                    grid
                    grid-cols-3
                    gap-8
                  "
                >
                  <div>
                    <p
                      className="
                        text-xs
                        uppercase
                        tracking-[0.2em]
                        text-neutral-400
                      "
                    >
                      Location
                    </p>

                    <p className="mt-2 text-neutral-700">
                      Philippines
                    </p>
                  </div>

                  <div>
                    <p
                      className="
                        text-xs
                        uppercase
                        tracking-[0.2em]
                        text-neutral-400
                      "
                    >
                      Focus
                    </p>

                    <p className="mt-2 text-neutral-700">
                      React / Laravel
                    </p>
                  </div>

                  <div>
                    <p
                      className="
                        text-xs
                        uppercase
                        tracking-[0.2em]
                        text-neutral-400
                      "
                    >
                      Status
                    </p>

                    <p className="mt-2 text-neutral-700">
                      Open to Work
                    </p>
                  </div>
                </motion.div>

              </motion.div>

            </div>

          </motion.div>

        </div>
      </SectionContainer>
    </section>
  );
}