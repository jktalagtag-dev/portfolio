import { motion, useReducedMotion } from "framer-motion";
import { useParallax } from "./useCursor";

const NOISE =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='240' height='240'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";

export default function HeroBackground() {
  const reduceMotion = useReducedMotion();
  const parallax = useParallax(-4);

  return (
    <motion.div
      aria-hidden
      initial={
        reduceMotion
          ? false
          : {
              opacity: 0,
              scale: 1.04,
              filter: "blur(10px)",
            }
      }
      animate={{
        opacity: 1,
        scale: 1,
        filter: "blur(0px)",
      }}
      transition={{
        duration: 1.8,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="absolute inset-0 overflow-hidden pointer-events-none"
    >
      {/* Base */}
      <div className="absolute inset-0 bg-[#f8f8f6]" />

      {/* Grid */}
      <motion.div
        initial={reduceMotion ? false : { opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{
          delay: 0.2,
          duration: 1.2,
        }}
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,.012) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,.012) 1px, transparent 1px)
          `,
          backgroundSize: "120px 120px",
          maskImage:
            "radial-gradient(circle at center, black 35%, transparent 90%)",
          WebkitMaskImage:
            "radial-gradient(circle at center, black 35%, transparent 90%)",
        }}
      />

      {/* Editorial Guides */}
      <motion.div
        initial={reduceMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 0.35,
          duration: 1,
        }}
      >
        <div className="absolute left-[8%] top-0 bottom-0 w-px bg-black/4" />
        <div className="absolute right-[8%] top-0 bottom-0 w-px bg-black/4" />
      </motion.div>

      {/* Spotlight */}
      <motion.div
        style={parallax}
        className="absolute inset-0"
      >
        <motion.div
          animate={
            reduceMotion
              ? undefined
              : {
                  x: [0, 18, 0],
                  y: [0, -18, 0],
                  scale: [1, 1.05, 1],
                }
          }
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            left-1/2
            top-[42%]

            h-[48rem]
            w-[48rem]

            -translate-x-1/2
            -translate-y-1/2

            rounded-full
            blur-[110px]
          "
          style={{
            background:
              "radial-gradient(circle, rgba(255,255,255,.92) 0%, rgba(245,245,245,.55) 55%, transparent 80%)",
          }}
        />
      </motion.div>

      {/* Top Light */}
      <motion.div
        initial={reduceMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 0.1,
          duration: 1.4,
        }}
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% -10%, rgba(255,255,255,.75), transparent 60%)",
        }}
      />

      {/* Bottom Fade */}
      <div
        className="absolute inset-x-0 bottom-0 h-80"
        style={{
          background:
            "linear-gradient(to bottom, transparent, rgba(248,248,246,.96))",
        }}
      />

      {/* Grain */}
      <motion.div
        initial={reduceMotion ? false : { opacity: 0 }}
        animate={{ opacity: 0.025 }}
        transition={{
          delay: 0.55,
          duration: 1.5,
        }}
        className="absolute inset-0 mix-blend-multiply"
        style={{
          backgroundImage: NOISE,
        }}
      />
    </motion.div>
  );
}