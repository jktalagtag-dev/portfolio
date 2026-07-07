import { motion, useReducedMotion } from "framer-motion";

import { useParallax } from "./useCursor";

/*
 * Layered background: faint grid → drifting soft-light orbs →
 * top light wash → film grain → bottom fade into the page.
 * Everything is transform/opacity only and pointer-events-none.
 */

const NOISE =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='240' height='240'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";

export default function HeroBackground() {
  const shouldReduceMotion = useReducedMotion();

  // Background layers drift against the cursor — depth.
  const parallax = useParallax(-14);

  return (
    <motion.div
      aria-hidden="true"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.6, ease: "easeOut" }}
      className="
        pointer-events-none
        absolute
        inset-0

        overflow-hidden
      "
    >
      {/* Grid — fades toward the edges */}
      <div
        className="absolute inset-0 opacity-70"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(34,34,34,0.045) 1px, transparent 1px), linear-gradient(to bottom, rgba(34,34,34,0.045) 1px, transparent 1px)",
          backgroundSize: "88px 88px",
          maskImage:
            "radial-gradient(ellipse 90% 80% at 50% 40%, black 30%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 90% 80% at 50% 40%, black 30%, transparent 75%)",
        }}
      />

      {/* Drifting light orbs */}
      <motion.div style={parallax} className="absolute inset-0">
        <motion.div
          animate={
            shouldReduceMotion
              ? undefined
              : {
                  x: [0, 50, 0],
                  y: [0, -35, 0],
                }
          }
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            -top-48
            -left-40

            h-[46rem]
            w-[46rem]

            rounded-full

            bg-[radial-gradient(circle_at_35%_35%,rgba(255,255,255,1),rgba(235,235,235,0.4)_60%,transparent_75%)]

            blur-3xl

            will-change-transform
          "
        />

        <motion.div
          animate={
            shouldReduceMotion
              ? undefined
              : {
                  x: [0, -60, 0],
                  y: [0, 40, 0],
                }
          }
          transition={{
            duration: 28,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="
            absolute
            top-1/3
            -right-56

            h-[42rem]
            w-[42rem]

            rounded-full

            bg-[radial-gradient(circle_at_60%_40%,rgba(212,212,212,0.55),rgba(229,229,229,0.25)_55%,transparent_75%)]

            blur-3xl

            will-change-transform
          "
        />

        <motion.div
          animate={
            shouldReduceMotion
              ? undefined
              : {
                  x: [0, 35, 0],
                  y: [0, 25, 0],
                }
          }
          transition={{
            duration: 26,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 5,
          }}
          className="
            absolute
            -bottom-64
            left-1/4

            h-[38rem]
            w-[38rem]

            rounded-full

            bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.9),rgba(224,224,224,0.3)_60%,transparent_78%)]

            blur-3xl

            will-change-transform
          "
        />
      </motion.div>

      {/* Top light wash */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(255,255,255,0.85), transparent 65%)",
        }}
      />

      {/* Film grain */}
      <div
        className="
          absolute
          inset-0

          opacity-[0.05]
          mix-blend-multiply
        "
        style={{ backgroundImage: NOISE }}
      />

      {/* Fade into the next section */}
      <div
        className="
          absolute
          inset-x-0
          bottom-0

          h-40

          bg-gradient-to-b
          from-transparent
          to-[#F8F8F8]
        "
      />
    </motion.div>
  );
}
