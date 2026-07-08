import { motion } from "framer-motion";
import SectionContainer from "../../components/ui/SectionContainer";

import {
  fadeUp,
  staggerContainer,
  lineGrow,
} from "../../utils/animations";

const links = [
  {
    label: "Email",
    value: "talagtagjohnkarlo4@gmail.com",
    href: "mailto:talagtagjohnkarlo4@gmail.com",
  },
  {
    label: "LinkedIn",
    value: "Connect",
    href: "#",
  },
  {
    label: "GitHub",
    value: "github.com/jktalagtag-dev",
    href: "https://github.com/jktalagtag-dev",
  },
  {
    label: "Resume",
    value: "Download Resume",
    href: "#",
  },
];

// Only real external URLs should open a new tab —
// mailto and placeholder links behave badly with _blank.
const isExternal = (href) => href.startsWith("http");

export default function Contact() {
  return (
    <section
      id="contact"
      className="pb-24 pt-4 lg:pb-40 lg:pt-8"
    >
      <SectionContainer>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          className="
            grid
            grid-cols-1
            lg:grid-cols-12
            gap-8
          "
        >
          <div
            className="
              hidden
              lg:flex
              col-span-2
              items-start
              gap-6
            "
          >
            <motion.div
              variants={lineGrow}
              className="w-px h-[300px] bg-neutral-200"
            />

            <motion.span
              variants={fadeUp}
              className="
                text-[11px]
                uppercase
                tracking-[0.25em]
                text-neutral-400
                [writing-mode:vertical-rl]
                rotate-180
              "
            >
              CONTACT · 2026
            </motion.span>
          </div>

          <div className="lg:col-span-10">
            <motion.div
              variants={fadeUp}
              className="max-w-3xl"
            >
              {/* Availability badge */}
              <span
                className="
                  inline-flex
                  items-center
                  gap-2.5

                  rounded-full

                  border
                  border-neutral-200

                  bg-white/60

                  px-4
                  py-2

                  text-[10px]
                  uppercase
                  tracking-[0.2em]
                  text-neutral-600
                "
              >
                <span className="relative flex h-1.5 w-1.5">
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

                      h-1.5
                      w-1.5

                      rounded-full
                      bg-emerald-500
                    "
                  />
                </span>
                Available for Work
              </span>

              <p
                className="
                  mt-8

                  text-2xl
                  sm:text-3xl
                  xl:text-4xl

                  font-light
                  leading-[1.2]
                  tracking-[-0.03em]

                  text-neutral-900
                "
              >
                Open to frontend development roles,
                freelance projects, and collaborations.
              </p>

              <p
                className="
                  mt-6

                  text-base
                  sm:text-lg

                  leading-relaxed
                  text-neutral-500
                "
              >
                Based in the Philippines · Available for
                remote work
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              className="
                mt-16
                lg:mt-20

                border-t
                border-neutral-200
              "
            >
              {links.map((link) => (
                <motion.a
                  key={link.label}
                  variants={fadeUp}
                  href={link.href}
                  target={
                    isExternal(link.href)
                      ? "_blank"
                      : undefined
                  }
                  rel={
                    isExternal(link.href)
                      ? "noreferrer"
                      : undefined
                  }
                  className="
                    group

                    flex
                    items-center
                    justify-between

                    gap-6

                    py-8

                    border-b
                    border-neutral-200
                  "
                >
                  <div className="min-w-0">
                    <p
                      className="
                        text-[11px]
                        uppercase
                        tracking-[0.25em]
                        text-neutral-400
                      "
                    >
                      {link.label}
                    </p>

                    <p
                      className="
                        mt-2

                        break-words

                        text-lg
                        sm:text-2xl
                        xl:text-3xl

                        font-light

                        transition-all
                        duration-300

                        group-hover:translate-x-3
                      "
                    >
                      {link.value}
                    </p>
                  </div>

                  <span
                    className="
                      shrink-0

                      text-neutral-400
                      text-2xl

                      transition-all
                      duration-300

                      group-hover:translate-x-2
                      group-hover:text-black
                    "
                  >
                    ↗
                  </span>
                </motion.a>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </SectionContainer>
    </section>
  );
}
