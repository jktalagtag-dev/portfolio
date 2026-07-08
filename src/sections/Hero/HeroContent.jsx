import { motion } from "framer-motion";

import Magnetic from "../../components/ui/Magnetic";

import { easeOutExpo } from "../../utils/animations";
import { getLenis } from "../../utils/useSmoothScroll";
import useFitText from "../../utils/useFitText";

import { useParallax } from "./useCursor";

import AnimatedHeading from "./AnimatedHeading";
import RevealText from "./RevealText";

export default function HeroContent() {
  // The wordmark drifts faintly with the cursor — depth
  // without breaking the lockup.
  const parallax = useParallax(7);

  // Edge-to-edge "PORTFOLIO." at every viewport.
  const { containerRef: measureRef, fontSize } =
    useFitText();

  const scrollToIntro = () => {
    const target =
      document.querySelector("#intro") ||
      document.querySelector("#projects");

    if (!target) return;

    const lenis = getLenis();

    if (lenis) {
      lenis.scrollTo(target, { duration: 1.4 });
    } else {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-full">

      {/* Masthead */}
      <RevealText
        delay={0.1}
        y={-14}
        className="
          flex
          items-center
          justify-between

          gap-4
        "
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
          Available for Work
        </span>

        <span
          className="
            hidden
            sm:block

            text-[11px]
            uppercase
            tracking-[0.25em]
            text-neutral-400
          "
        >
          Based in the Philippines
        </span>
      </RevealText>

      {/* Wordmark — spans the container edge to edge */}
      <div
        ref={measureRef}
        className="
          mt-12
          sm:mt-16
          lg:mt-20
        "
      >
        <motion.div style={parallax}>
          <AnimatedHeading
            lines={["PORTFOLIO."]}
            delay={0.3}
            className="
              whitespace-nowrap

              leading-[0.82]
              tracking-[-0.09em]

              text-neutral-900

              select-none
            "
            style={{
              fontSize: fontSize
                ? `${fontSize}px`
                : "17vw",
              fontVariationSettings: '"wght" 490',
            }}
          />
        </motion.div>
      </div>

      {/* Ruler */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{
          delay: 0.95,
          duration: 1.1,
          ease: easeOutExpo,
        }}
        style={{ transformOrigin: "left" }}
        className="
          mt-8
          sm:mt-10

          h-px
          w-full

          bg-neutral-200
        "
      />

      {/* Baseline row */}
      <RevealText
        delay={1.05}
        y={20}
        className="
          mt-6
          sm:mt-8

          flex
          items-start
          justify-between

          gap-6
        "
      >
        <div>
          <h2
            className="
              text-[clamp(1.25rem,2.6vw,2.4rem)]

              font-normal
              leading-none
              tracking-[-0.04em]

              text-neutral-900
            "
          >
            John Karlo Talagtag
          </h2>

          <p
            className="
              mt-2.5

              text-xs
              sm:text-sm
              lg:text-base

              tracking-[-0.01em]
              text-neutral-500
            "
          >
            Frontend Developer&ensp;·&ensp;UI
            Engineer&ensp;·&ensp;React
          </p>
        </div>

        <p
          className="
            shrink-0

            text-[clamp(1.25rem,2.6vw,2.4rem)]

            font-normal
            leading-none
            tracking-[-0.05em]

            text-neutral-900
          "
        >
          2026
        </p>
      </RevealText>

      {/* Scroll affordance */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 1.5,
          duration: 0.9,
          ease: easeOutExpo,
        }}
        className="
          mt-16
          lg:mt-20

          flex
          justify-center
        "
      >
        <Magnetic strength={0.3}>
          <button
            type="button"
            onClick={scrollToIntro}
            aria-label="Scroll to next section"
            className="
              group

              flex
              h-12
              w-12
              sm:h-14
              sm:w-14

              items-center
              justify-center

              rounded-full

              border
              border-neutral-300

              text-neutral-600

              transition-colors
              duration-500

              hover:border-neutral-900
              hover:bg-neutral-900
              hover:text-[#F8F8F8]
            "
          >
            <motion.span
              animate={{ y: [0, 4, 0] }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              ↓
            </motion.span>
          </button>
        </Magnetic>
      </motion.div>
    </div>
  );
}
