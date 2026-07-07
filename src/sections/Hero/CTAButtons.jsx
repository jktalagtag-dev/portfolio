import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { easeOutExpo } from "../../utils/animations";

import Magnetic from "../../components/ui/Magnetic";

export default function CTAButtons({ delay = 0 }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 24,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.9,
        ease: easeOutExpo,
        delay,
      }}
      className="
        flex
        flex-wrap
        items-center

        gap-4
        sm:gap-5
      "
    >
      {/* Primary */}
      <Magnetic>
        <motion.div
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 18,
          }}
        >
          <Link
            to="/work"
            className="
              group
              relative

              inline-flex
              items-center
              gap-3

              overflow-hidden
              rounded-full

              bg-neutral-900
              text-[#F8F8F8]

              px-8
              py-4

              text-[13px]
              uppercase
              tracking-[0.18em]

              shadow-[0_16px_40px_-16px_rgba(34,34,34,0.5)]

              transition-shadow
              duration-500

              hover:shadow-[0_20px_50px_-14px_rgba(34,34,34,0.6)]
            "
          >
            {/* Sheen sweep on hover */}
            <span
              aria-hidden="true"
              className="
                absolute
                inset-0

                -translate-x-full

                bg-gradient-to-r
                from-transparent
                via-white/15
                to-transparent

                transition-transform
                duration-700
                ease-out

                group-hover:translate-x-full
              "
            />

            View Projects
            <span
              className="
                transition-transform
                duration-300
                ease-out

                group-hover:translate-x-1
              "
            >
              →
            </span>
          </Link>
        </motion.div>
      </Magnetic>

      {/* Secondary */}
      <Magnetic strength={0.25}>
        <motion.div
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 18,
          }}
        >
          <Link
            to="/contact"
            className="
              group
              relative

              inline-flex
              items-center
              gap-3

              overflow-hidden
              rounded-full

              border
              border-neutral-300

              px-8
              py-4

              text-[13px]
              uppercase
              tracking-[0.18em]
              text-neutral-700

              transition-colors
              duration-500

              hover:border-neutral-900
              hover:text-[#F8F8F8]
            "
          >
            {/* Fill rises from the bottom on hover */}
            <span
              aria-hidden="true"
              className="
                absolute
                inset-0

                origin-bottom
                scale-y-0

                bg-neutral-900

                transition-transform
                duration-500
                ease-[cubic-bezier(0.16,1,0.3,1)]

                group-hover:scale-y-100
              "
            />

            <span className="relative z-10">
              Contact Me
            </span>
          </Link>
        </motion.div>
      </Magnetic>
    </motion.div>
  );
}
