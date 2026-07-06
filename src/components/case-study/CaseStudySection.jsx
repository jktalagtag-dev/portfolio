import { motion } from "framer-motion";

import { fadeUp } from "../../utils/animations";

import SectionLabel from "./SectionLabel";

export default function CaseStudySection({
  label,
  children,
  className = "",
}) {
  return (
    <motion.section
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{
        once: true,
        amount: 0.2,
      }}
      className={`
        border-t
        border-neutral-200

        py-24
        lg:py-32

        ${className}
      `}
    >
      <div
        className="
          grid
          grid-cols-1
          lg:grid-cols-12
          gap-10
        "
      >
        {/* Section Label */}
        <div className="lg:col-span-3">
          <SectionLabel label={label} />
        </div>

        {/* Section Content */}
        <div className="lg:col-span-9">
          {children}
        </div>
      </div>
    </motion.section>
  );
}