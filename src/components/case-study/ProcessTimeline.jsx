import { motion } from "framer-motion";

import { fadeUp, staggerContainer, drawLine } from "../../utils/animations";

export default function ProcessTimeline({ steps }) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{
        once: true,
        amount: 0.2,
      }}
      className="relative"
    >
      {/* Line */}
      <motion.div
        variants={drawLine}
        style={{ transformOrigin: "top" }}
        className="
          absolute
          left-0
          top-0
          bottom-0

          w-px
          bg-neutral-200
        "
      />

      {/* Steps */}
      <div className="space-y-10">
        {steps.map((step, index) => (
          <motion.div
            key={step.title}
            variants={fadeUp}
            className="
              flex
              gap-8

              pl-8
            "
          >
            <span
              className="
                text-sm
                text-neutral-400
                min-w-[40px]
              "
            >
              0{index + 1}
            </span>

            <div>
              <h3
                className="
                  text-2xl
                  font-light
                "
              >
                {step.title}
              </h3>

              <p
                className="
                  mt-3

                  text-neutral-600
                  leading-relaxed
                "
              >
                {step.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
