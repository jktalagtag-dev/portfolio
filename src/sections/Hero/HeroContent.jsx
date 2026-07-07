import { motion } from "framer-motion";

import { easeOutExpo } from "../../utils/animations";

import AnimatedHeading from "./AnimatedHeading";
import RevealText from "./RevealText";
import CTAButtons from "./CTAButtons";

export default function HeroContent() {
  return (
    <div className="max-w-2xl">

      {/* Availability — mobile only, the glass card covers desktop */}
      <RevealText
        delay={0.1}
        className="mb-8 lg:hidden"
      >
        <span
          className="
            inline-flex
            items-center
            gap-2.5

            rounded-full

            border
            border-neutral-200

            bg-white/60
            backdrop-blur

            px-4
            py-2

            text-[10px]
            uppercase
            tracking-[0.2em]
            text-neutral-600
          "
        >
          <span className="relative flex h-1.5 w-1.5">
            <span
              className="
                absolute
                inline-flex

                h-full
                w-full

                animate-ping
                rounded-full

                bg-emerald-400
                opacity-60
              "
            />
            <span
              className="
                relative
                inline-flex

                h-1.5
                w-1.5

                rounded-full
                bg-emerald-500
              "
            />
          </span>
          Available for work
        </span>
      </RevealText>

      {/* Greeting */}
      <RevealText
        delay={0.15}
        y={16}
        className="
          flex
          items-center
          gap-4
        "
      >
        <span className="h-px w-10 bg-neutral-300" />
        <span
          className="
            text-[11px]
            uppercase
            tracking-[0.3em]
            text-neutral-400
          "
        >
          Hello, I&rsquo;m
        </span>
      </RevealText>

      {/* Name */}
      <AnimatedHeading
        lines={["John Karlo", "Talagtag."]}
        delay={0.25}
        className="
          mt-6

          text-[3.4rem]
          sm:text-[5rem]
          md:text-[6rem]
          lg:text-[5.25rem]
          xl:text-[6.5rem]
          2xl:text-[7.5rem]

          leading-[0.92]
          tracking-[-0.06em]

          text-neutral-900
        "
        style={{
          fontVariationSettings: '"wght" 380',
        }}
      />

      {/* Role */}
      <RevealText
        delay={0.85}
        className="
          mt-8

          text-xl
          sm:text-2xl

          font-light
          tracking-[-0.02em]
          text-neutral-500
        "
      >
        Frontend Developer&ensp;·&ensp;UI Engineer&ensp;·&ensp;React
      </RevealText>

      {/* Description */}
      <RevealText
        delay={1}
        className="
          mt-6

          max-w-[460px]

          text-base
          sm:text-lg

          leading-relaxed
          text-neutral-600
        "
      >
        I build modern, high-performance web experiences
        with a strong focus on design, motion, and
        usability.
      </RevealText>

      {/* CTAs */}
      <div className="mt-12">
        <CTAButtons delay={1.15} />
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1,
          ease: easeOutExpo,
          delay: 1.8,
        }}
        className="
          mt-16
          lg:mt-24

          flex
          items-center
          gap-3

          text-[11px]
          uppercase
          tracking-[0.25em]
          text-neutral-400
        "
      >
        Scroll to explore
        <motion.span
          animate={{ y: [0, 5, 0] }}
          transition={{
            duration: 2.2,
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
