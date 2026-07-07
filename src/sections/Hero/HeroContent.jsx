import { motion } from "framer-motion";

import { easeOutExpo } from "../../utils/animations";
import RevealText from "./RevealText";

export default function HeroContent() {
  return (
    <div className="w-full">
      {/* Hero Title */}
      <RevealText delay={0.15}>
        <motion.h1
          initial={{
            opacity: 0,
            y: 50,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
            ease: easeOutExpo,
          }}
          className="
            select-none

            text-[clamp(2.75rem,18vw,17.7rem)]

            leading-[0.82]
            tracking-[-0.09em]

            text-neutral-900

            pt-10
            md:pt-12
            lg:pt-16
          "
          style={{
            fontVariationSettings: '"wght" 490',
          }}
        >
          PORTFOLIO.
        </motion.h1>
      </RevealText>

      {/* Metadata */}
      <motion.div
        initial={{
          opacity: 0,
          y: 25,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.45,
          duration: 0.8,
          ease: easeOutExpo,
        }}
        className="
          mt-4

          flex
          flex-col
          gap-8

          md:flex-row
          md:items-end
          md:justify-between
        "
      >
        <div>
          <h2
            className="
              text-[clamp(1.6rem,4vw,2.6rem)]

              font-normal

              tracking-[-0.04em]

              text-neutral-900
            "
          >
            John Karlo Talagtag
          </h2>

          <p
            className="
              mt-2

              text-sm
              md:text-base

              tracking-[-0.02em]

              text-neutral-500
            "
          >
            Frontend Developer · UI Engineer · React
          </p>
        </div>

        <div
          className="
            self-start
            md:self-auto

            md:text-right

            shrink-0
          "
        >
          <p
            className="
              text-[clamp(1.6rem,4vw,2.6rem)]
              sm:text-[2.75rem]
              lg:text-[4rem]

              font-normal

              tracking-[-0.05em]

              text-neutral-900
            "
          >
            2026
          </p>
        </div>
      </motion.div>

      {/* Scroll */}
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 1.1,
          duration: 0.8,
        }}
        className="
          mt-14
          md:mt-16

          flex
          items-center
          justify-center
          md:justify-start

          gap-3

          text-[11px]

          uppercase

          tracking-[0.28em]

          text-neutral-400
        "
      >
        Scroll to Explore

        <motion.span
          animate={{
            y: [0, 5, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          ↓
        </motion.span>
      </motion.div>
    </div>
  );
}