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
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 1.5,
        ease: "easeOut",
      }}
      className="absolute inset-0 overflow-hidden pointer-events-none"
    >
      {/* Base */}
      <div className="absolute inset-0 bg-[#f8f8f6]" />

      {/* Extremely subtle grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,.012) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,.012) 1px, transparent 1px)
          `,
          backgroundSize: "120px 120px",
          opacity: 0.3,
          maskImage:
            "radial-gradient(circle at center, black 35%, transparent 90%)",
          WebkitMaskImage:
            "radial-gradient(circle at center, black 35%, transparent 90%)",
        }}
      />

      {/* Editorial guide lines */}
      <div className="absolute left-[8%] top-0 bottom-0 w-px bg-black/4" />
      <div className="absolute right-[8%] top-0 bottom-0 w-px bg-black/4" />

      {/* Soft spotlight */}
      <motion.div
        style={parallax}
        className="absolute inset-0"
      >
        <motion.div
          animate={
            reduceMotion
              ? undefined
              : {
                  x: [0, 15, 0],
                  y: [0, -15, 0],
                }
          }
          transition={{
            duration: 20,
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
              "radial-gradient(circle, rgba(255,255,255,.9) 0%, rgba(245,245,245,.55) 55%, transparent 80%)",
          }}
        />
      </motion.div>

      {/* Top light */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% -10%, rgba(255,255,255,.75), transparent 60%)",
        }}
      />

      {/* Bottom fade */}
      <div
        className="absolute inset-x-0 bottom-0 h-80"
        style={{
          background:
            "linear-gradient(to bottom, transparent, rgba(248,248,246,.96))",
        }}
      />

      {/* Grain */}
      <div
        className="absolute inset-0 opacity-[0.025] mix-blend-multiply"
        style={{
          backgroundImage: NOISE,
        }}
      />
    </motion.div>
  );
}