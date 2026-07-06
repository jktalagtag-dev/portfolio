import { motion } from "framer-motion";

import { fadeUp, staggerContainer } from "../../utils/animations";

export default function ChallengeGrid({ challenges }) {
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
        md:grid-cols-2
        gap-6
      "
    >
      {challenges.map((item) => (
        <motion.div
          key={item}
          variants={fadeUp}
          className="
            border
            border-neutral-200

            p-8

            min-h-[180px]

            flex
            items-end
          "
        >
          <h3
            className="
              text-2xl
              font-light
              tracking-[-0.03em]
            "
          >
            {item}
          </h3>
        </motion.div>
      ))}
    </motion.div>
  );
}
