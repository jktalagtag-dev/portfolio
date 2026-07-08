import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

import HeroContainer from "../components/ui/HeroContainer";
import Magnetic from "../components/ui/Magnetic";
import logo from "../assets/img/JKT.png";

const navItems = [
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

// Underline slides in on hover and stays put on the
// active page.
const desktopLink = ({ isActive }) => `
  relative
  text-sm

  transition-colors
  duration-300

  hover:text-neutral-900

  after:absolute
  after:left-0
  after:-bottom-1
  after:h-px
  after:bg-neutral-900
  after:transition-all
  after:duration-300

  hover:after:w-full

  ${
    isActive
      ? "text-neutral-900 after:w-full"
      : "text-neutral-500 after:w-0"
  }
`;

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Lock page scroll behind the open menu; close on Escape.
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    const onKeyDown = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen]);

  return (
    <header
      className={`
        fixed
        top-0
        left-0
        w-full
        z-50

        transition-colors
        duration-300

        ${
          isOpen
            ? "bg-[#F8F8F8]"
            : "backdrop-blur-md bg-white/40"
        }
      `}
    >
      <HeroContainer>
        <nav
          className="
            relative
            flex
            items-center
            justify-between
            py-4
            md:py-6
          "
        >
          {/* Logo */}
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            aria-label="Home"
            className="
              select-none
              transition-opacity
              duration-300
              hover:opacity-70
            "
          >
            <img
              src={logo}
              alt="JKT logo"
              width="64"
              height="64"
              className="
                h-12
                md:h-16
                w-auto
                object-contain
              "
              draggable="false"
            />
          </Link>

          {/* Desktop Navigation */}
          <ul
            className="
              hidden
              md:flex
              items-center
              gap-12
            "
          >
            {navItems.map((item) => (
              <li key={item.label}>
                <Magnetic
                  strength={0.25}
                  className="p-2 -m-2"
                >
                  <NavLink
                    to={item.href}
                    className={desktopLink}
                  >
                    {item.label}
                  </NavLink>
                </Magnetic>
              </li>
            ))}
          </ul>

          {/* Resume */}
          <Magnetic
            strength={0.25}
            className="hidden md:block p-2 -m-2"
          >
            <a
              href="#"
              className="
                relative

                text-sm
                text-neutral-500

                transition-colors
                duration-300

                hover:text-neutral-900

                after:absolute
                after:left-0
                after:-bottom-1
                after:h-px
                after:w-0
                after:bg-neutral-900
                after:transition-all
                after:duration-300

                hover:after:w-full
              "
            >
              Resume ↗
            </a>
          </Magnetic>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            className="
              md:hidden

              -m-3
              p-3

              text-sm
              uppercase
              tracking-[0.2em]
              text-neutral-900
              transition-opacity
              duration-300
              hover:opacity-60
            "
          >
            {isOpen ? "Close" : "Menu"}
          </button>

          {/* Divider */}
          <div
            className="
              absolute
              bottom-0
              left-0
              w-full
              h-px
              bg-gradient-to-r
              from-transparent
              via-neutral-200
              to-transparent
            "
          />
        </nav>

        {/* Mobile Dropdown */}
        <div
          id="mobile-menu"
          className={`
            md:hidden
            overflow-hidden
            transition-all
            duration-500

            ${
              isOpen
                ? "max-h-[500px] py-8 border-b border-neutral-200"
                : "max-h-0"
            }
          `}
        >
          <div
            className="
              flex
              flex-col
              gap-6

              border-t
              border-neutral-200

              pt-8
            "
          >
            {navItems.map((item) => (
              <NavLink
                key={item.label}
                to={item.href}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) => `
                  text-2xl
                  font-light
                  tracking-[-0.04em]

                  ${
                    isActive
                      ? "text-neutral-900"
                      : "text-neutral-500"
                  }
                `}
              >
                {item.label}
              </NavLink>
            ))}

            <a
              href="#"
              onClick={() => setIsOpen(false)}
              className="
                pt-4
                text-neutral-500
              "
            >
              Resume ↗
            </a>
          </div>
        </div>
      </HeroContainer>
    </header>
  );
}
