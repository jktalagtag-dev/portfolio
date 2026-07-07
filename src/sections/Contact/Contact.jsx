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
    value: "Let's Talk",
    href: "mailto:talagtagjohnkarlo4@gmail.com",
  },
  {
    label: "LinkedIn",
    value: "Connect",
    href: "#",
  },
  {
    label: "GitHub",
    value: "View Work",
    href: "#",
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
      className="py-24 lg:py-40"
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

          <div className="col-span-12 lg:col-span-10">
            <motion.div
              variants={fadeUp}
              className="max-w-5xl"
            >
              <h2
                className="
                  text-[3rem]
                  sm:text-6xl
                  xl:text-[7rem]

                  font-light
                  leading-[0.9]
                  tracking-[-0.08em]
                "
              >
                Currently
                <br />
                available.
              </h2>

              <p
                className="
                  mt-8
                  max-w-xl

                  text-base
                  sm:text-lg

                  leading-relaxed
                  text-neutral-500
                "
              >
                Frontend development roles,
                freelance projects,
                and collaborations.
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              className="
                mt-20
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

                    py-8

                    border-b
                    border-neutral-200
                  "
                >
                  <div>
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

                        text-xl
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