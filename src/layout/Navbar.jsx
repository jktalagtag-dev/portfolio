import { useState, useCallback } from "react";
import { Link, NavLink } from "react-router-dom";

import HeroContainer from "../components/ui/HeroContainer";
import useDialogEffects from "../utils/useDialogEffects";

import logo from "../assets/img/JKT.png";

const navItems = [
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

/*
 * No entrance/exit motion here — the overlay and hamburger just
 * toggle instantly. The animated version was unreliable on first
 * load, so this trades that polish for something that always works.
 */

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const close = useCallback(() => setIsOpen(false), []);

  useDialogEffects(isOpen, close);

  return (
    <>
      <header
        className="
          fixed
          inset-x-0
          top-0

          z-50

          pointer-events-none
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
                className="h-8 lg:h-9 w-auto"
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
                <span
                  className={`
                    absolute
                    left-0
                    top-0

                    block
                    h-px
                    w-7

                    bg-neutral-900

                    ${isOpen ? "rotate-45 translate-y-[5px]" : ""}
                  `}
                />
                <span
                  className={`
                    absolute
                    bottom-0
                    left-0

                    block
                    h-px
                    w-7

                    bg-neutral-900

                    ${isOpen ? "-rotate-45 -translate-y-[5px]" : ""}
                  `}
                />
              </span>
            </button>
          </nav>
        </HeroContainer>
      </header>

      {/* Full-screen overlay menu */}
      {isOpen && (
        <div
          id="menu-overlay"
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
                  <NavLink
                    key={item.label}
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
                ))}
              </nav>

              {/* Footer row of the overlay */}
              <div
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
              </div>
            </div>
          </HeroContainer>
        </div>
      )}
    </>
  );
}
