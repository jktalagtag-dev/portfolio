import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import HeroContainer from "../ui/HeroContainer";

import { fadeUp, staggerContainer } from "../../utils/animations";

export default function NextProject({ project }) {
  return (
    <section
      className="
        border-t
        border-neutral-200
      "
    >
      <HeroContainer>
        <Link
          to={`/work/${project.slug}`}
          className="group block py-20 lg:py-32"
        >
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{
              once: true,
              amount: 0.3,
            }}
          >
            <motion.p
              variants={fadeUp}
              className="
                text-[11px]
                uppercase
                tracking-[0.3em]
                text-neutral-400
              "
            >
              Next Project
            </motion.p>

            <motion.h2
              variants={fadeUp}
              className="
                mt-6

                text-[2.75rem]
                sm:text-[4rem]
                lg:text-[6rem]

                font-extralight
                leading-[0.95]
                tracking-[-0.06em]

                transition-colors
                duration-500

                group-hover:text-neutral-500
              "
            >
              {project.title}
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="
                mt-8

                inline-flex
                items-center
                gap-3

                text-sm
                uppercase
                tracking-[0.18em]
                text-neutral-500

                transition-colors
                duration-300

                group-hover:text-black
              "
            >
              View Case Study
              <span
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-2
                "
              >
                →
              </span>
            </motion.p>
          </motion.div>
        </Link>
      </HeroContainer>
    </section>
  );
}
