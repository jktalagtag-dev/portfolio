import { Link } from "react-router-dom";

import SectionContainer from "../components/ui/SectionContainer";

const links = [
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

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200">
      <SectionContainer>
        <div className="py-16 lg:py-20">
          <div
            className="
              flex
              flex-col
              lg:flex-row
              lg:items-end
              lg:justify-between
              gap-12
            "
          >
            {/* Left */}
            <div>
              <p
                className="
                  text-[11px]
                  uppercase
                  tracking-[0.25em]
                  text-neutral-400
                "
              >
                John Karlo Talagtag
              </p>

              <h2
                className="
                  mt-4

                  text-3xl
                  sm:text-5xl

                  font-light
                  leading-[0.95]
                  tracking-[-0.06em]
                "
              >
                Frontend Developer
                <br />
                & UI Implementer
              </h2>
            </div>

            {/* Right */}
            <div
              className="
                flex
                flex-col
                gap-4
              "
            >
              {links.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className="
                    text-sm
                    uppercase
                    tracking-[0.15em]

                    text-neutral-500

                    transition-colors
                    duration-300

                    hover:text-black
                  "
                >
                  {link.label}
                </Link>
              ))}

              <a
                href="#"
                className="
                  text-sm
                  uppercase
                  tracking-[0.15em]

                  text-neutral-500

                  transition-colors
                  duration-300

                  hover:text-black
                "
              >
                Resume ↗
              </a>
            </div>
          </div>

          <div
            className="
              mt-16
              pt-6

              border-t
              border-neutral-200

              flex
              flex-col
              md:flex-row
              md:items-center
              md:justify-between

              gap-4
            "
          >
            <p
              className="
                text-sm
                text-neutral-400
              "
            >
              © 2026 John Karlo Talagtag
            </p>

            <p
              className="
                text-sm
                text-neutral-400
              "
            >
              Built with React, Tailwind CSS & Framer Motion.
            </p>
          </div>
        </div>
      </SectionContainer>
    </footer>
  );
}