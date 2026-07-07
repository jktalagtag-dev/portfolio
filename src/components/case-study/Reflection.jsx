import { motion } from "framer-motion";

import { fadeUp, staggerContainer } from "../../utils/animations";

export default function Reflection({
  headline,
  learnings,
  note,
}) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{
        once: true,
        amount: 0.2,
      }}
      className="max-w-4xl"
    >
      <motion.h2
        variants={fadeUp}
        className="
          text-3xl
          sm:text-4xl
          lg:text-5xl

          font-light
          leading-[1.05]
          tracking-[-0.05em]
        "
      >
        {headline}
      </motion.h2>

      <motion.p
        variants={fadeUp}
        className="
          mt-10

          text-lg
          sm:text-xl

          leading-relaxed
          text-neutral-600
        "
      >
        {learnings}
      </motion.p>

      {note && (
        <motion.p
          variants={fadeUp}
          className="
            mt-8

            text-base
            sm:text-lg

            leading-relaxed
            text-neutral-500
          "
        >
          {note}
        </motion.p>
      )}
    </motion.div>
  );
}
