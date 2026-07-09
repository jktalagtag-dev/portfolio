import { motion } from "framer-motion";

import useLocalTime from "../../utils/useLocalTime";

/*
 * Bottom metadata cluster — name at the left edge, live local
 * time offset to the right, both small/uppercase, sitting on
 * one baseline beneath the headline (stacks on mobile).
 */

export default function HeroMeta() {
  const time = useLocalTime();

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 24,
        filter: "blur(8px)",
      }}
      animate={{
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
      }}
      transition={{
        delay: 1.05,
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        mt-10
        lg:mt-14

        flex
        flex-col
        gap-3

        sm:flex-row
        sm:items-end

        sm:gap-x-[14vw]

        text-[11px]
        sm:text-[12px]
        uppercase
        tracking-[0.22em]
        text-neutral-700
      "
    >
      <p>John Karlo Talagtag</p>

      <p className="text-neutral-500">
        Current Time: {time} PHT
      </p>
    </motion.div>
  );
}
