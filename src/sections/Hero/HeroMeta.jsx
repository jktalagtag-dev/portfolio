import { motion, useReducedMotion } from "framer-motion";

import useLocalTime from "../../utils/useLocalTime";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 1.0,
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 32,
    filter: "blur(8px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function HeroMeta() {
  const time = useLocalTime();
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      variants={containerVariants}
      initial={shouldReduceMotion ? false : "hidden"}
      animate="visible"
      className="
        mt-10
        lg:mt-14

        flex
        flex-col
        gap-3

        sm:flex-row
        sm:items-end
        sm:justify-between

        text-[11px]
        sm:text-[12px]

        uppercase
        tracking-[0.22em]
      "
    >
      <motion.p
        variants={itemVariants}
        className="text-neutral-700"
      >
        John Karlo Talagtag
      </motion.p>

      <motion.p
        variants={itemVariants}
        className="text-neutral-500"
      >
        Current Time: {time} PHT
      </motion.p>
    </motion.div>
  );
}