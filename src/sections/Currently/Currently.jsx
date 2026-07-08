import { motion } from "framer-motion";
import SectionContainer from "../../components/ui/SectionContainer";

import {
  fadeUp,
  staggerContainer,
  lineGrow,
} from "../../utils/animations";

export default function Currently() {
  return (
    <section
      id="currently"
      className="
        py-24
        lg:py-32
        overflow-hidden
      "
    >
      <SectionContainer>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          className="
            grid
            grid-cols-1
            lg:grid-cols-12
            gap-8
          "
        >
          {/* Vertical Label */}
          <div
            className="
              hidden
              lg:flex
              col-span-2
              items-start
              pt-8
              gap-6
            "
          >
            <motion.div
              variants={lineGrow}
              className="w-px h-[320px] bg-neutral-200"
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
              CURRENTLY · 2026
            </motion.span>
          </div>

          {/* Content */}
          <div className="lg:col-span-10">
            {/* Heading */}
            <motion.div
              variants={fadeUp}
              className="max-w-5xl"
            >
              <h2
                className="
                  text-4xl
                  sm:text-5xl
                  xl:text-[6rem]
                  font-light
                  leading-[0.9]
                  tracking-[-0.08em]
                "
              >
                Currently.
              </h2>
            </motion.div>

            {/* Main Content */}
            <div
              className="
                mt-16
                lg:mt-24

                grid
                grid-cols-1
                lg:grid-cols-12

                gap-10
                lg:gap-12
              "
            >
              {/* Left */}
              <motion.div
                variants={fadeUp}
                className="lg:col-span-6"
              >
                <p
                  className="
                    text-2xl
                    sm:text-3xl
                    xl:text-4xl

                    font-light
                    leading-[1.15]
                    tracking-tight
                  "
                >
                  Building portfolio projects,
                  refining my React and UI
                  engineering skills, and actively
                  seeking opportunities to grow as
                  a frontend developer.
                </p>
              </motion.div>

              {/* Right */}
              <motion.div
                variants={fadeUp}
                className="lg:col-span-6"
              >
                <div
                  className="
                    border-t
                    border-neutral-200

                    pt-8

                    grid
                    grid-cols-1
                    sm:grid-cols-2

                    gap-8
                    sm:gap-10
                  "
                >
                  <div>
                    <p
                      className="
                        text-xs
                        uppercase
                        tracking-[0.25em]
                        text-neutral-400
                      "
                    >
                      Status
                    </p>

                    <p className="mt-3 text-lg sm:text-xl">
                      Available for Work
                    </p>
                  </div>

                  <div>
                    <p
                      className="
                        text-xs
                        uppercase
                        tracking-[0.25em]
                        text-neutral-400
                      "
                    >
                      Focus
                    </p>

                    <p className="mt-3 text-lg sm:text-xl">
                      React · Laravel · UI/UX
                    </p>
                  </div>

                  <div>
                    <p
                      className="
                        text-xs
                        uppercase
                        tracking-[0.25em]
                        text-neutral-400
                      "
                    >
                      Location
                    </p>

                    <p className="mt-3 text-lg sm:text-xl">
                      Philippines
                    </p>
                  </div>

                  <div>
                    <p
                      className="
                        text-xs
                        uppercase
                        tracking-[0.25em]
                        text-neutral-400
                      "
                    >
                      Availability
                    </p>

                    <p className="mt-3 text-lg sm:text-xl">
                      Immediate
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </SectionContainer>
    </section>
  );
}