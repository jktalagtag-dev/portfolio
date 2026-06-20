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
    value: "johnkarlo@example.com",
    href: "mailto:johnkarlo@example.com",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/johnkarlo",
    href: "#",
  },
  {
    label: "GitHub",
    value: "github.com/jktalagtag-dev",
    href: "#",
  },
  {
    label: "Resume",
    value: "Download CV",
    href: "#",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen py-40"
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
          className="grid grid-cols-12 gap-8"
        >
          {/* Vertical Label */}
          <div
            className="
              hidden
              lg:flex
              col-span-2
              items-start
              pt-8
              gap-6
            "
          >
            <motion.div
              variants={lineGrow}
              className="w-px h-[360px] bg-neutral-200"
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

          {/* Content */}
          <div className="col-span-12 lg:col-span-10">

            {/* Heading */}
            <motion.div
              variants={fadeUp}
              className="max-w-5xl"
            >
              <h2
                className="
                  text-5xl
                  xl:text-[7rem]
                  font-light
                  leading-[0.9]
                  tracking-[-0.08em]
                "
              >
                Let's build
                <br />
                something
                <br />
                meaningful.
              </h2>

              <p
                className="
                  mt-10
                  max-w-xl
                  text-lg
                  leading-relaxed
                  text-neutral-500
                "
              >
                Currently open to full-time opportunities,
                freelance projects, and collaborations.
              </p>
            </motion.div>

            {/* Contact Links */}
            <motion.div
              variants={staggerContainer}
              className="mt-32 border-t border-neutral-200"
            >
              {links.map((link) => (
                <motion.a
                  key={link.label}
                  variants={fadeUp}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    group
                    flex
                    items-center
                    justify-between
                    py-10
                    border-b
                    border-neutral-200
                  "
                >
                  <div>
                    <p
                      className="
                        text-xs
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
                        text-2xl
                        xl:text-3xl
                        font-light
                        transition-all
                        duration-300
                        group-hover:translate-x-4
                      "
                    >
                      {link.value}
                    </p>
                  </div>

                  <span
                    className="
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