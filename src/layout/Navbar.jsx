import { useState } from "react";
import HeroContainer from "../components/ui/HeroContainer";
import logo from "../assets/img/JKT.png";

const navItems = [
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Work",
    href: "#projects",
  },
  {
    label: "Experience",
    href: "#experience",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      className="
        fixed
        top-0
        left-0
        w-full
        z-50
        backdrop-blur-md
        bg-white/40
      "
    >
      <HeroContainer>
        <nav
          className="
            relative
            flex
            items-center
            justify-between
            py-4
            md:py-8
          "
        >
          {/* Logo */}
          <a
            href="#hero"
            className="
              select-none
              transition-opacity
              duration-300
              hover:opacity-70
            "
          >
            <img
              src={logo}
              alt="John Karlo Logo"
              className="
                h-12
                md:h-16
                w-auto
                object-contain
              "
              draggable="false"
            />
          </a>

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
                <a
                  href={item.href}
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
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop Resume */}
          <a
            href="#"
            className="
              hidden
              md:block
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

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="
              md:hidden
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
          className={`
            md:hidden
            overflow-hidden
            transition-all
            duration-500

            ${
              isOpen
                ? "max-h-[500px] py-8"
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
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="
                  text-2xl
                  font-light
                  tracking-[-0.04em]
                  text-neutral-900
                "
              >
                {item.label}
              </a>
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