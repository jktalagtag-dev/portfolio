import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import SectionContainer from "../components/ui/SectionContainer";

import { getLenis } from "../utils/useSmoothScroll";
import { fadeUp, staggerContainer } from "../utils/animations";

const menuLinks = [
  {
    label: "Work",
    href: "/work",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

const connectLinks = [
  {
    label: "GitHub",
    href: "https://github.com/jktalagtag-dev",
    external: true,
  },
  {
    label: "LinkedIn",
    href: "#",
    external: false,
  },
  {
    label: "Resume",
    href: "#",
    external: false,
  },
];

const formatManilaTime = () =>
  new Intl.DateTimeFormat("en-PH", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
    timeZone: "Asia/Manila",
  }).format(new Date());

function LocalTime() {
  const [time, setTime] = useState(formatManilaTime);

  useEffect(() => {
    const id = setInterval(
      () => setTime(formatManilaTime()),
      30000
    );

    return () => clearInterval(id);
  }, []);

  return <>{time}</>;
}

export default function Footer() {
  const scrollToTop = () => {
    const lenis = getLenis();

    if (lenis) {
      lenis.scrollTo(0, { duration: 1.2 });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="border-t border-neutral-200">
      <SectionContainer>

        {/* Upper — CTA and link columns */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            amount: 0.3,
          }}
          className="
            grid
            grid-cols-1
            md:grid-cols-12

            gap-12

            pt-16
            lg:pt-24

            pb-16
            lg:pb-24
          "
        >
          {/* CTA */}
          <motion.div
            variants={fadeUp}
            className="md:col-span-7"
          >
            <p
              className="
                text-2xl
                sm:text-3xl
                lg:text-4xl

                font-light
                leading-[1.15]
                tracking-[-0.03em]

                text-neutral-900
              "
            >
              Have a project in mind?
            </p>

            <a
              href="mailto:talagtagjohnkarlo4@gmail.com"
              className="
                mt-4

                inline-block

                break-words

                text-base
                sm:text-lg

                text-neutral-500

                transition-colors
                duration-300

                hover:text-black
              "
            >
              talagtagjohnkarlo4@gmail.com
            </a>
          </motion.div>

          {/* Link columns */}
          <motion.div
            variants={fadeUp}
            className="
              md:col-span-5

              flex
              gap-16
              sm:gap-24

              md:justify-end
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
                Menu
              </p>

              <ul className="mt-5 space-y-3">
                {menuLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="
                        text-sm
                        text-neutral-500

                        transition-colors
                        duration-300

                        hover:text-black
                      "
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p
                className="
                  text-[11px]
                  uppercase
                  tracking-[0.25em]
                  text-neutral-400
                "
              >
                Connect
              </p>

              <ul className="mt-5 space-y-3">
                {connectLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={
                        link.external ? "_blank" : undefined
                      }
                      rel={
                        link.external
                          ? "noreferrer"
                          : undefined
                      }
                      className="
                        text-sm
                        text-neutral-500

                        transition-colors
                        duration-300

                        hover:text-black
                      "
                    >
                      {link.label}&ensp;↗
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </motion.div>

        {/* Baseline */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="
            border-t
            border-neutral-200

            py-6

            flex
            flex-col
            sm:flex-row
            sm:items-center
            sm:justify-between

            gap-3
          "
        >
          <p
            className="
              text-xs
              text-neutral-400
            "
          >
            © 2026 John Karlo Talagtag
          </p>

          <p
            className="
              text-xs
              text-neutral-400
            "
          >
            Philippines&ensp;·&ensp;
            <LocalTime />
            &ensp;PHT
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="
              self-start
              sm:self-auto

              text-xs
              uppercase
              tracking-[0.2em]
              text-neutral-500

              transition-colors
              duration-300

              hover:text-black
            "
          >
            Back to Top ↑
          </button>
        </motion.div>

      </SectionContainer>
    </footer>
  );
}
