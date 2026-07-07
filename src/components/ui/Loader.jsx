import { motion } from "framer-motion";

export default function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        scale: 1.02,
      }}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
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
        {/* JK */}
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
          JK
        </motion.span>

        {/* Divider */}
        <motion.div
          initial={{
            width: 0,
            opacity: 0,
          }}
          animate={{
            width: 140,
            opacity: 1,
          }}
          transition={{
            delay: 0.25,
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            mt-7
            h-px
            bg-neutral-300
          "
        />

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
          Frontend Developer & UI Engineer
        </motion.p>
      </div>
    </motion.div>
  );
}