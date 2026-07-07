import { motion } from "framer-motion";

import { easeOutExpo } from "../../utils/animations";

/*
 * Soft upward reveal for supporting copy —
 * slower and quieter than the heading so the
 * eye lands on the name first.
 */

export default function RevealText({
  children,
  delay = 0,
  y = 28,
  className = "",
  as: Tag = motion.div,
}) {
  return (
    <Tag
      initial={{
        opacity: 0,
        y,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.9,
        ease: easeOutExpo,
        delay,
      }}
      className={className}
    >
      {children}
    </Tag>
  );
}
