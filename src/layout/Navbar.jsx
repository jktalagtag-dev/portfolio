import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

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

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    onScroll();

    window.addEventListener("scroll", onScroll);

    return () =>
      window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{
          y: -30,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.8,
        }}
        className={`
          fixed
          inset-x-0
          top-0

          z-50

          transition-all
          duration-500

          ${
            scrolled
              ? "bg-[#F8F8F8]/80 backdrop-blur-xl border-b border-neutral-200/70"
              : "bg-transparent"
          }
        `}
      >
        <HeroContainer>

          <nav
            className="
              flex
              items-center
              justify-between

              py-5
              lg:py-7
            "
          >

            {/* Logo */}

            <Link
              to="/"
              className="
                shrink-0

                transition-opacity
                duration-300

                hover:opacity-60
              "
            >
              <img
                src={logo}
                alt="John Karlo"
                draggable={false}
                className="
                  h-11
                  lg:h-12

                  w-auto
                "
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
                  <Magnetic strength={0.18}>
                    <Link
                      to={item.href}
                      className="
                        relative

                        text-[12px]

                        uppercase

                        tracking-[0.24em]

                        text-neutral-500

                        transition-all
                        duration-300

                        hover:text-neutral-900
                        hover:tracking-[0.28em]
                      "
                    >
                      {item.label}
                    </Link>
                  </Magnetic>
                </li>
              ))}
            </ul>

            {/* Resume */}

            <Magnetic strength={0.18}>
              <a
                href="#"
                className="
                  hidden
                  md:block

                  text-[12px]

                  uppercase

                  tracking-[0.24em]

                  text-neutral-500

                  transition-all
                  duration-300

                  hover:text-neutral-900
                  hover:tracking-[0.28em]
                "
              >
                Resume ↗
              </a>
            </Magnetic>

            {/* Mobile Button */}

            <button
              onClick={() => setIsOpen((v) => !v)}
              className="
                md:hidden

                text-[12px]

                uppercase

                tracking-[0.24em]

                text-neutral-900
              "
            >
              {isOpen ? "Close" : "Menu"}
            </button>

          </nav>
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{
                  opacity: 0,
                  height: 0,
                }}
                animate={{
                  opacity: 1,
                  height: "auto",
                }}
                exit={{
                  opacity: 0,
                  height: 0,
                }}
                transition={{
                  duration: 0.4,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  md:hidden

                  overflow-hidden

                  border-t
                  border-neutral-200/70
                "
              >
                <div
                  className="
                    flex
                    flex-col

                    gap-8

                    py-10
                  "
                >
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.label}
                      initial={{
                        opacity: 0,
                        x: -20,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      transition={{
                        delay: index * 0.08,
                        duration: 0.45,
                      }}
                    >
                      <Link
                        to={item.href}
                        onClick={() => setIsOpen(false)}
                        className="
                          block

                          text-4xl

                          font-light

                          tracking-[-0.05em]

                          text-neutral-900

                          transition-opacity
                          duration-300

                          hover:opacity-60
                        "
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  ))}

                  <motion.a
                    href="#"
                    onClick={() => setIsOpen(false)}
                    initial={{
                      opacity: 0,
                      y: 10,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      delay: 0.35,
                    }}
                    className="
                      pt-8

                      text-sm

                      uppercase

                      tracking-[0.24em]

                      text-neutral-500

                      transition-colors
                      duration-300

                      hover:text-neutral-900
                    "
                  >
                    Resume ↗
                  </motion.a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </HeroContainer>
      </motion.header>
    </>
  );
}