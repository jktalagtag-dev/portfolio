import { motion } from "framer-motion";
import SectionContainer from "../../components/ui/SectionContainer";

import {
fadeUp,
staggerContainer,
lineGrow,
} from "../../utils/animations";

import skills from "../../data/skills";

export default function Skills() {
return ( <section
   id="skills"
   className="overflow-hidden"
 > <SectionContainer> <div className="py-20 lg:py-40">
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
gap-10
"
>
{/* Vertical Label */} <div
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
            SKILLS · 2026
          </motion.span>
        </div>

        {/* Content */}
        <div className="lg:col-span-10">
          {/* Heading */}
          <motion.div
            variants={fadeUp}
            className="max-w-4xl"
          >
            <h2
              className="
                max-w-[300px]
                sm:max-w-none

                text-[2.5rem]
                sm:text-5xl
                xl:text-[6rem]

                font-light
                leading-[0.9]
                tracking-[-0.08em]
              "
            >
              What I bring
              <br />
              to the table.
            </h2>
          </motion.div>

          {/* Skills */}
          <motion.div
            variants={staggerContainer}
            className="mt-16 lg:mt-32"
          >
            {skills.map((skill) => (
              <motion.div
                key={skill.number}
                variants={fadeUp}
                className="
                  group
                  border-t
                  border-neutral-200

                  py-10
                  lg:py-16
                "
              >
                <div
                  className="
                    grid
                    grid-cols-1
                    md:grid-cols-12
                    gap-6
                    lg:gap-8
                  "
                >
                  {/* Number */}
                  <div className="col-span-12 md:col-span-2">
                    <span
                      className="
                        text-[3.5rem]
                        sm:text-[4.5rem]
                        xl:text-[8rem]

                        leading-none
                        font-extralight
                        tracking-[-0.08em]

                        text-neutral-200

                        transition-all
                        duration-500

                        group-hover:text-neutral-700
                      "
                    >
                      {skill.number}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="col-span-12 md:col-span-10">
                    <h3
                      className="
                        text-[1.75rem]
                        sm:text-3xl
                        xl:text-4xl

                        font-light
                        tracking-tight
                      "
                    >
                      {skill.title}
                    </h3>

                    <p
                      className="
                        mt-5
                        max-w-2xl

                        text-base
                        sm:text-lg

                        leading-relaxed
                        text-neutral-600
                      "
                    >
                      {skill.description}
                    </p>

                    <p
                      className="
                        mt-6

                        text-[11px]
                        uppercase

                        tracking-[0.18em]
                        sm:tracking-[0.28em]

                        text-neutral-400

                        break-words
                      "
                    >
                      {skill.tech}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </div>
  </SectionContainer>
</section>

);
}
