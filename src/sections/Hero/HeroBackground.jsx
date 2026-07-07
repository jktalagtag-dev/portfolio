import { motion, useReducedMotion } from "framer-motion";

import { useParallax } from "./useCursor";

const NOISE =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='240' height='240'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";

export default function HeroBackground() {
  const shouldReduceMotion = useReducedMotion();

  const parallax = useParallax(-8);

  return (
    <motion.div
      aria-hidden
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 1.4,
        ease: "easeOut",
      }}
      className="absolute inset-0 overflow-hidden pointer-events-none"
    >
      {/* Editorial Grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(34,34,34,0.04) 1px, transparent 1px),linear-gradient(to bottom, rgba(34,34,34,0.04) 1px, transparent 1px)",
          backgroundSize: "92px 92px",

          maskImage:
            "radial-gradient(circle at center, black 35%, transparent 82%)",

          WebkitMaskImage:
            "radial-gradient(circle at center, black 35%, transparent 82%)",

          opacity: 0.65,
        }}
      />

      {/* Single Large Light */}
      <motion.div
        style={parallax}
        className="absolute inset-0"
      >
        <motion.div
          animate={
            shouldReduceMotion
              ? undefined
              : {
                  x: [0, 35, 0],
                  y: [0, -30, 0],
                }
          }
          transition={{
            duration: 32,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute

            left-1/2
            top-1/2

            h-[70rem]
            w-[70rem]

            -translate-x-1/2
            -translate-y-1/2

            rounded-full

            blur-[140px]
          "
          style={{
            background:
              "radial-gradient(circle, rgba(255,255,255,0.9) 0%, rgba(235,235,235,0.45) 45%, transparent 75%)",
          }}
        />
      </motion.div>

      {/* Top Light Wash */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% -10%, rgba(255,255,255,.95), transparent 60%)",
        }}
      />

      {/* Bottom Glow */}
      <div
        className="absolute inset-x-0 bottom-0 h-64"
        style={{
          background:
            "linear-gradient(to bottom, transparent, rgba(248,248,248,.92))",
        }}
      />

      {/* Film Grain */}
      <div
        className="absolute inset-0 mix-blend-multiply opacity-[0.045]"
        style={{
          backgroundImage: NOISE,
        }}
      />
    </motion.div>
  );
}