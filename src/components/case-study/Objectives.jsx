import { motion } from "framer-motion";

import { fadeUp, staggerContainer } from "../../utils/animations";

export default function Objectives({ objectives }) {
  return (
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
        sm:grid-cols-2
        xl:grid-cols-4

        gap-6
      "
    >
      {objectives.map((item) => (
        <motion.div
          key={item}
          variants={fadeUp}
          className="
            border
            border-neutral-200

            p-8

            flex
            items-center

            min-h-[160px]
          "
        >
          <h3
            className="
              text-xl
              font-light
              leading-snug
            "
          >
            {item}
          </h3>
        </motion.div>
      ))}
    </motion.div>
  );
}
