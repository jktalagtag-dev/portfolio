import { motion, useReducedMotion } from "framer-motion";

/*
 * Bottom-anchored editorial headline — a long first line
 * spanning the full width, a shorter second line indented to
 * the right, both oversized/light/uppercase. The stagger
 * (line 1 flush-left, line 2 pushed in) is the composition;
 * the words are John Karlo's own positioning.
 */

const lines = [
  { text: "CRAFTING DIGITAL", indent: "" },
  {
    text: "EXPERIENCES",
    indent: "pl-[12vw] sm:pl-[14vw]",
  },
];

const variants = {
  hidden: {
    opacity: 0,
    y: 80,
    filter: "blur(16px)",
  },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 1,
      delay: 0.35 + i * 0.16,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export default function HeroHeadline() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <h1 className="w-full select-none" aria-label="Crafting digital experiences">
      {lines.map((line, index) => (
        <motion.span
          key={line.text}
          custom={index}
          variants={variants}
          initial={shouldReduceMotion ? false : "hidden"}
          animate="visible"
          aria-hidden="true"
          className={`
            block
            overflow-hidden

            whitespace-nowrap
            uppercase
            font-extralight

            leading-[0.86]
            tracking-[-0.06em]

            text-neutral-900

            text-[clamp(2rem,11.5vw,12rem)]

            ${line.indent}
          `}
        >
          {line.text}
        </motion.span>
      ))}
    </h1>
  );
}
