import { motion } from "framer-motion";

import { easeOutExpo } from "../../utils/animations";

/*
 * Masked character reveal — each character rises out of an
 * overflow-hidden line, staggered left to right. The wrapper
 * keeps a little vertical padding so descenders (g, y, j)
 * are not clipped by the mask.
 */

const line = {
  hidden: {},
  show: (delay = 0) => ({
    transition: {
      staggerChildren: 0.032,
      delayChildren: delay,
    },
  }),
};

const char = {
  hidden: {
    y: "115%",
    rotate: 4,
  },
  show: {
    y: "0%",
    rotate: 0,
    transition: {
      duration: 0.9,
      ease: easeOutExpo,
    },
  },
};

export default function AnimatedHeading({
  lines,
  delay = 0,
  className = "",
  style,
}) {
  return (
    <h1 className={className} style={style} aria-label={lines.join(" ")}>
      {lines.map((text, lineIndex) => (
        <motion.span
          key={text}
          variants={line}
          initial="hidden"
          animate="show"
          custom={delay + lineIndex * 0.18}
          aria-hidden="true"
          className="block"
        >
          {text.split(" ").map((word, wordIndex) => (
            <span
              key={`${word}-${wordIndex}`}
              className="
                inline-block
                overflow-hidden
                align-top

                pb-[0.12em]
                -mb-[0.12em]
              "
            >
              {word.split("").map((letter, letterIndex) => (
                <motion.span
                  key={letterIndex}
                  variants={char}
                  className="
                    inline-block
                    will-change-transform
                  "
                >
                  {letter}
                </motion.span>
              ))}
              {wordIndex !== text.split(" ").length - 1 && (
                <span className="inline-block">&nbsp;</span>
              )}
            </span>
          ))}
        </motion.span>
      ))}
    </h1>
  );
}
