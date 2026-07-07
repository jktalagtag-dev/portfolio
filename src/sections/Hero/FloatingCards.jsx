import { motion, useReducedMotion } from "framer-motion";

import { useParallax } from "./useCursor";

/*
 * Immersive right-side composition — abstract UI panels
 * floating at different depths. Each card is wrapped in
 * three layers that compose cleanly:
 *
 *   position (static) → parallax (cursor) → entrance + idle float
 */

function Layer({
  depth,
  delay,
  float = 10,
  className = "",
  children,
}) {
  const parallax = useParallax(depth);
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className={`absolute ${className}`}>
      <motion.div
        style={parallax}
        className="will-change-transform"
      >
        <motion.div
          initial={{
            opacity: 0,
            y: 70,
            scale: 0.94,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          transition={{
            type: "spring",
            stiffness: 55,
            damping: 15,
            delay,
          }}
        >
          <motion.div
            animate={
              shouldReduceMotion
                ? undefined
                : { y: [0, -float, 0] }
            }
            transition={{
              duration: 7 + delay * 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: delay + 1.5,
            }}
            className="will-change-transform"
          >
            {children}
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}

function GlassCard({ className = "", children }) {
  return (
    <div
      className={`
        rounded-2xl

        border
        border-neutral-200/80

        bg-white/70
        backdrop-blur-xl

        shadow-[0_32px_64px_-32px_rgba(34,34,34,0.28)]

        ${className}
      `}
    >
      {children}
    </div>
  );
}

function SkeletonLine({ className = "" }) {
  return (
    <div
      className={`
        h-2
        rounded-full
        bg-neutral-200/90
        ${className}
      `}
    />
  );
}

export default function FloatingCards() {
  return (
    <div className="relative h-[600px]">

      {/* Monogram — deepest layer, moves against the cursor */}
      <Layer
        depth={-26}
        delay={0.2}
        float={0}
        className="right-0 top-1/2 -mt-56"
      >
        <span
          className="
            select-none

            text-[24rem]
            leading-none
            tracking-[-0.1em]

            text-transparent

            [-webkit-text-stroke:1px_rgba(34,34,34,0.07)]
          "
          style={{
            fontVariationSettings: '"wght" 320',
          }}
        >
          JK
        </span>
      </Layer>

      {/* Main abstract UI panel */}
      <Layer
        depth={16}
        delay={0.9}
        float={8}
        className="right-0 top-[130px] w-[380px] xl:w-[420px]"
      >
        <GlassCard className="overflow-hidden">
          {/* Window chrome */}
          <div
            className="
              flex
              items-center
              gap-3

              border-b
              border-neutral-200/70

              px-5
              py-3.5
            "
          >
            <div className="flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-neutral-300" />
              <span className="h-2.5 w-2.5 rounded-full bg-neutral-300" />
              <span className="h-2.5 w-2.5 rounded-full bg-neutral-300" />
            </div>

            <div
              className="
                flex-1

                rounded-full
                bg-neutral-100

                px-4
                py-1.5

                text-[10px]
                uppercase
                tracking-[0.2em]
                text-neutral-400
              "
            >
              johnkarlo.dev
            </div>
          </div>

          {/* Body */}
          <div className="p-6">
            <SkeletonLine className="w-2/3" />
            <SkeletonLine className="mt-3 w-1/3" />

            {/* Animated line chart */}
            <svg
              viewBox="0 0 340 110"
              fill="none"
              className="mt-6 w-full"
            >
              <motion.path
                d="M0 92 C 40 88, 58 60, 92 62 C 126 64, 140 80, 176 70 C 212 60, 224 28, 262 26 C 296 24, 318 14, 340 8"
                stroke="rgba(34,34,34,0.45)"
                strokeWidth="1.5"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{
                  duration: 1.8,
                  ease: [0.16, 1, 0.3, 1],
                  delay: 1.7,
                }}
              />

              <motion.path
                d="M0 92 C 40 88, 58 60, 92 62 C 126 64, 140 80, 176 70 C 212 60, 224 28, 262 26 C 296 24, 318 14, 340 8 L 340 110 L 0 110 Z"
                fill="url(#hero-chart-fill)"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2, delay: 2.4 }}
              />

              <defs>
                <linearGradient
                  id="hero-chart-fill"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop
                    offset="0%"
                    stopColor="rgba(34,34,34,0.09)"
                  />
                  <stop
                    offset="100%"
                    stopColor="rgba(34,34,34,0)"
                  />
                </linearGradient>
              </defs>
            </svg>

            {/* Footer chips */}
            <div className="mt-5 flex gap-2">
              {["Design", "Motion", "Performance"].map(
                (chip) => (
                  <span
                    key={chip}
                    className="
                      rounded-full

                      border
                      border-neutral-200

                      px-3
                      py-1

                      text-[10px]
                      uppercase
                      tracking-[0.15em]
                      text-neutral-500
                    "
                  >
                    {chip}
                  </span>
                )
              )}
            </div>
          </div>
        </GlassCard>
      </Layer>

      {/* Stats */}
      <Layer
        depth={28}
        delay={1.15}
        float={12}
        className="left-0 top-[70px]"
      >
        <GlassCard className="flex divide-x divide-neutral-200/70">
          <div className="px-6 py-5">
            <p
              className="
                text-3xl
                font-light
                leading-none
                tracking-[-0.04em]
              "
            >
              02+
            </p>
            <p
              className="
                mt-2

                text-[10px]
                uppercase
                tracking-[0.18em]
                text-neutral-400
              "
            >
              Years Building
            </p>
          </div>

          <div className="px-6 py-5">
            <p
              className="
                text-3xl
                font-light
                leading-none
                tracking-[-0.04em]
              "
            >
              10+
            </p>
            <p
              className="
                mt-2

                text-[10px]
                uppercase
                tracking-[0.18em]
                text-neutral-400
              "
            >
              Projects
            </p>
          </div>
        </GlassCard>
      </Layer>

      {/* Stack */}
      <Layer
        depth={36}
        delay={1.3}
        float={10}
        className="right-6 top-[8px]"
      >
        <GlassCard className="flex items-center gap-2 px-4 py-3">
          {["React", "Tailwind", "Motion"].map((tech) => (
            <span
              key={tech}
              className="
                rounded-full

                bg-neutral-900/[0.04]

                px-3
                py-1.5

                text-[10px]
                uppercase
                tracking-[0.15em]
                text-neutral-600
              "
            >
              {tech}
            </span>
          ))}
        </GlassCard>
      </Layer>

      {/* Availability */}
      <Layer
        depth={42}
        delay={1.45}
        float={14}
        className="left-8 bottom-[96px]"
      >
        <GlassCard className="flex items-center gap-3 px-5 py-4">
          <span className="relative flex h-2 w-2">
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

                h-2
                w-2

                rounded-full
                bg-emerald-500
              "
            />
          </span>

          <span
            className="
              text-[11px]
              uppercase
              tracking-[0.2em]
              text-neutral-600
            "
          >
            Available for work
          </span>
        </GlassCard>
      </Layer>
    </div>
  );
}
