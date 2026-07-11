import { useState, useCallback } from "react";
import { Link, NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import HeroContainer from "../components/ui/HeroContainer";
import useDialogEffects from "../utils/useDialogEffects";

import logo from "../assets/img/JKT.png";

const navItems = [
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const easeOutExpo = [0.22, 1, 0.36, 1];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const close = useCallback(() => setIsOpen(false), []);

  useDialogEffects(isOpen, close);

  return (
    <>
      {/* mix-blend-mode lives on this element, not on the logo/
          hamburger individually: a blend-mode descendant only
          blends against other content painted within the SAME
          stacking context, and position:fixed + z-index already
          makes this header its own stacking context. Put the blend
          any deeper and it has nothing behind it to diff against
          (header has no background) and just renders flat white.
          Blending here diffs the header's whole (mostly transparent)
          layer against the real page — only the opaque logo/
          hamburger pixels are affected, everything else passes
          through untouched. */}
      <header
        className="
          fixed
          inset-x-0
          top-0

          z-50

          pointer-events-none

          mix-blend-difference
        "
      >
        <HeroContainer>
          <nav
            className="
              pointer-events-auto

              flex
              items-center
              justify-between

              h-20
              lg:h-24
            "
          >
            {/* Logo */}
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              aria-label="Home"
              className="
                shrink-0

                transition-opacity
                duration-300

                hover:opacity-60
              "
            >
              <img
                src={logo}
                alt="JKT logo"
                width="64"
                height="64"
                draggable={false}
                className="
                  h-8
                  lg:h-9
                  w-auto

                  brightness-0
                  invert
                "
              />
            </Link>

            {/* Hamburger */}
            <button
              type="button"
              onClick={() => setIsOpen((v) => !v)}
              aria-expanded={isOpen}
              aria-controls="menu-overlay"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              className="
                relative

                flex
                h-10
                w-10

                items-center
                justify-center

                -mr-2
              "
            >
              <span className="relative block h-3 w-7">
                <motion.span
                  animate={
                    isOpen
                      ? { rotate: 45, y: 5 }
                      : { rotate: 0, y: 0 }
                  }
                  transition={{ duration: 0.4, ease: easeOutExpo }}
                  className="
                    absolute
                    left-0
                    top-0

                    block
                    h-px
                    w-7

                    bg-white
                  "
                />
                <motion.span
                  animate={
                    isOpen
                      ? { rotate: -45, y: -5 }
                      : { rotate: 0, y: 0 }
                  }
                  transition={{ duration: 0.4, ease: easeOutExpo }}
                  className="
                    absolute
                    bottom-0
                    left-0

                    block
                    h-px
                    w-7

                    bg-white
                  "
                />
              </span>
            </button>
          </nav>
        </HeroContainer>
      </header>

      {/* Full-screen overlay menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="menu-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: easeOutExpo }}
            className="
              fixed
              inset-0

              z-40

              bg-[#F8F8F8]
            "
          >
            <HeroContainer className="h-full">
              <div
                className="
                  flex
                  h-full
                  flex-col
                  justify-end

                  pb-16
                  pt-28
                "
              >
                <nav
                  className="
                    flex
                    flex-col

                    gap-2
                    sm:gap-3
                  "
                >
                  {navItems.map((item, i) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, y: 40 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{
                        opacity: 0,
                        y: 20,
                        transition: { duration: 0.2 },
                      }}
                      transition={{
                        duration: 0.7,
                        delay: 0.12 + i * 0.07,
                        ease: easeOutExpo,
                      }}
                    >
                      <NavLink
                        to={item.href}
                        onClick={() => setIsOpen(false)}
                        className={({ isActive }) => `
                          group

                          inline-flex
                          items-baseline
                          gap-4

                          text-[clamp(2.75rem,9vw,7rem)]

                          font-extralight
                          leading-[1]
                          tracking-[-0.05em]

                          transition-colors
                          duration-300

                          ${
                            isActive
                              ? "text-neutral-900"
                              : "text-neutral-400 hover:text-neutral-900"
                          }
                        `}
                      >
                        <span
                          className="
                            text-[11px]
                            font-normal
                            uppercase
                            tracking-[0.25em]
                            text-neutral-400

                            self-start
                            pt-3
                          "
                        >
                          0{i + 1}
                        </span>
                        {item.label}
                      </NavLink>
                    </motion.div>
                  ))}
                </nav>

                {/* Footer row of the overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, transition: { duration: 0.2 } }}
                  transition={{
                    duration: 0.7,
                    delay: 0.4,
                    ease: easeOutExpo,
                  }}
                  className="
                    mt-16
                    lg:mt-20

                    flex
                    flex-wrap
                    items-center
                    justify-between

                    gap-6

                    border-t
                    border-neutral-200

                    pt-8

                    text-[11px]
                    uppercase
                    tracking-[0.22em]
                    text-neutral-500
                  "
                >
                  <a
                    href="mailto:talagtagjohnkarlo4@gmail.com"
                    className="
                      transition-colors
                      duration-300
                      hover:text-neutral-900
                    "
                  >
                    talagtagjohnkarlo4@gmail.com
                  </a>

                  <a
                    href="#"
                    className="
                      transition-colors
                      duration-300
                      hover:text-neutral-900
                    "
                  >
                    Resume ↗
                  </a>
                </motion.div>
              </div>
            </HeroContainer>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
