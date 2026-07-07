import { motion } from "framer-motion";

import { fadeUp, staggerContainer } from "../../utils/animations";

export default function DesignShowcase({ images }) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{
        once: true,
        amount: 0.1,
      }}
      className="
        grid
        md:grid-cols-2

        gap-6
        lg:gap-10
      "
    >
      {images.map((image, index) => (
        <motion.figure
          key={image.src}
          variants={fadeUp}
          className={
            index % 3 === 0
              ? "md:col-span-2"
              : ""
          }
        >
          <div
            className="
              overflow-hidden
              border
              border-neutral-200
            "
          >
            <img
              src={image.src}
              alt={image.caption}
              loading="lazy"
              className="
                w-full
                object-cover
              "
            />
          </div>

          {image.caption && (
            <figcaption
              className="
                mt-4

                text-[11px]
                uppercase
                tracking-[0.25em]
                text-neutral-400
              "
            >
              {image.caption}
            </figcaption>
          )}
        </motion.figure>
      ))}
    </motion.div>
  );
}
