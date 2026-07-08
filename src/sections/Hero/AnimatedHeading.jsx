import { motion } from "framer-motion";

import { easeOutExpo } from "../../utils/animations";

/*
 * Masked character reveal — each character rises out of an
 * overflow-hidden line, staggered left to right. The wrapper
 * keeps a little vertical padding so descenders (g, y, j)
 * are not clipped by the mask.
 *
 * `inView` defers the reveal until the heading scrolls into
 * view (for below-the-fold uses like the footer wordmark).
 * The word wrappers carry data-fit-ink and the root carries
 * data-fit-sized so useFitText can measure the real glyph
 * width.
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
  as: Tag = "h1",
  inView = false,
}) {
  const reveal = inView
    ? {
        initial: "hidden",
        whileInView: "show",
        viewport: { once: true, amount: 0.5 },
      }
    : {
        initial: "hidden",
        animate: "show",
      };

  return (
    <Tag
      className={className}
      style={style}
      aria-label={lines.join(" ")}
      data-fit-sized
    >
      {lines.map((text, lineIndex) => (
        <motion.span
          key={text}
          variants={line}
          {...reveal}
          custom={delay + lineIndex * 0.18}
          aria-hidden="true"
          className="block"
        >
          {text.split(" ").map((word, wordIndex) => (
            <span
              key={`${word}-${wordIndex}`}
              data-fit-ink
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
    </Tag>
  );
}
