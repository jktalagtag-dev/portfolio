import { motion } from "framer-motion";

/*
 * First-visit brand moment (session-gated in App.jsx). Dismissal is
 * tied to real readiness there (document.fonts.ready + a minimum
 * display time), so the hairline below is an honest progress rule:
 * it tweens most of the way while waiting, then its exit completes
 * it to 100% in the beat before the wipe. The exit is an upward
 * wipe — the same curtain grammar every route transition uses
 * (PageTransition), so first load and navigation share one motion
 * identity.
 */

export default function Loader() {
  return (
    <motion.div
      initial={{ y: 0 }}
      exit={{ y: "-100%" }}
      transition={{
        duration: 0.8,
        ease: [0.65, 0, 0.35, 1],
        delay: 0.2,
      }}
      className="
        fixed
        inset-0
        z-[9999]

        flex
        items-center
        justify-center

        bg-[#F8F8F8]
      "
    >
      <div
        className="
          flex
          flex-col
          items-center
          text-center
        "
      >
        {/* Monogram */}
        <motion.span
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            text-7xl
            sm:text-8xl

            font-extralight
            leading-none
            tracking-[-0.15em]
          "
        >
          JKT
        </motion.span>

        {/* Progress rule — track + fill */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25, duration: 0.5 }}
          className="
            mt-7

            h-px
            w-[140px]

            bg-neutral-200
          "
        >
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 0.72 }}
            exit={{
              scaleX: 1,
              transition: { duration: 0.2, ease: "easeOut" },
            }}
            transition={{
              delay: 0.25,
              duration: 1.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            style={{ transformOrigin: "left center" }}
            className="
              h-px
              bg-neutral-900
            "
          />
        </motion.div>

        {/* Name */}
        <motion.p
          initial={{
            opacity: 0,
            y: 10,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.5,
            duration: 0.7,
          }}
          className="
            mt-7

            text-[11px]
            uppercase
            tracking-[0.35em]

            text-neutral-700
          "
        >
          John Karlo Talagtag
        </motion.p>

        {/* Role */}
        <motion.p
          initial={{
            opacity: 0,
            y: 10,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.8,
            duration: 0.7,
          }}
          className="
            mt-3

            text-[11px]
            uppercase
            tracking-[0.25em]

            text-neutral-400
          "
        >
          Frontend Developer & UI Implementer
        </motion.p>
      </div>
    </motion.div>
  );
}
