import { motion } from "framer-motion";

import { fadeUp, staggerContainer } from "../../utils/animations";

export default function ChallengeSolution({ items }) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{
        once: true,
        amount: 0.2,
      }}
      className="space-y-6 lg:space-y-10"
    >
      {items.map((item) => (
        <motion.div
          key={item.challenge}
          variants={fadeUp}
          className="
            border
            border-neutral-200

            p-6
            sm:p-10

            grid
            md:grid-cols-2

            gap-8
            md:gap-12
          "
        >
          <div>
            <p
              className="
                text-[11px]
                uppercase
                tracking-[0.25em]
                text-neutral-400
              "
            >
              Challenge
            </p>

            <h3
              className="
                mt-4

                text-xl
                sm:text-2xl

                font-light
                leading-snug
                tracking-[-0.02em]
              "
            >
              {item.challenge}
            </h3>
          </div>

          <div>
            <p
              className="
                text-[11px]
                uppercase
                tracking-[0.25em]
                text-neutral-400
              "
            >
              Solution
            </p>

            <p
              className="
                mt-4

                text-neutral-600
                leading-relaxed
              "
            >
              {item.solution}
            </p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
