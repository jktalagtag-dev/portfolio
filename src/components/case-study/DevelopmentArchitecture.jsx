import { motion } from "framer-motion";

import { fadeUp, staggerContainer, drawLine } from "../../utils/animations";

export default function DevelopmentArchitecture({ layers }) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{
        once: true,
        amount: 0.2,
      }}
      className="max-w-3xl"
    >
      {layers.map((layer, index) => (
        <div key={layer.title}>
          <motion.div
            variants={fadeUp}
            className="
              border
              border-neutral-200

              p-6
              sm:p-10

              grid
              sm:grid-cols-12

              gap-4
              sm:gap-8

              items-baseline
            "
          >
            <p
              className="
                sm:col-span-4

                text-[11px]
                uppercase
                tracking-[0.25em]
                text-neutral-400
              "
            >
              {layer.label}
            </p>

            <div className="sm:col-span-8">
              <h3
                className="
                  text-2xl
                  sm:text-3xl

                  font-light
                  tracking-[-0.03em]
                "
              >
                {layer.title}
              </h3>

              <p
                className="
                  mt-3

                  text-neutral-600
                  leading-relaxed
                "
              >
                {layer.description}
              </p>
            </div>
          </motion.div>

          {index !== layers.length - 1 && (
            <div className="flex justify-center">
              <motion.div
                variants={drawLine}
                style={{ transformOrigin: "top" }}
                className="
                  h-10
                  w-px
                  bg-neutral-300
                "
              />
            </div>
          )}
        </div>
      ))}
    </motion.div>
  );
}
