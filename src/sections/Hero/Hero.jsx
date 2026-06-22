import { useState } from "react";
import { motion } from "framer-motion";

import HeroContainer from "../../components/ui/HeroContainer";

export default function Hero() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  return (
    <section
      id="hero"
      className="overflow-hidden"
      onMouseMove={(e) => {
        const { innerWidth, innerHeight } = window;

        const x = (e.clientX - innerWidth / 2) * 0.01;
        const y = (e.clientY - innerHeight / 2) * 0.01;

        setPosition({ x, y });
      }}
    >
      <HeroContainer>
        <div
          className="
            relative
            grid
            grid-cols-1
            lg:grid-cols-12

            min-h-[85svh]

            items-center

            pt-28
            lg:pt-20
          "
        >
          {/* Mobile Background JK */}
          {/* <div
            className="
              lg:hidden
              absolute
              inset-0
              overflow-hidden
              pointer-events-none
              select-none
            "
          >
            <span
              className="
                absolute
                left-1/2
                top-[52%]

                -translate-x-1/2
                -translate-y-1/2

                text-[28rem]

                font-extralight
                leading-none
                tracking-[-0.32em]

                text-transparent
                opacity-80

                [-webkit-text-stroke:1px_rgb(225_225_225)]
              "
            >
              JK
            </span>
          </div> */}

          {/* Vertical Label */}
          <div
            className="
              hidden
              lg:flex
              col-span-1
              h-full
              flex-col
              items-center
              justify-between
              pr-6
              pt-20
              pb-4
              gap-6
            "
          >
            <span
              className="
                text-[11px]
                uppercase
                tracking-[0.25em]
                text-neutral-400
                [writing-mode:vertical-rl]
                rotate-180
              "
            >
              Full Stack Developer
            </span>

            <div className="h-[320px] w-px bg-neutral-200" />

            <span
              className="
                text-[11px]
                text-neutral-400
                [writing-mode:vertical-rl]
                rotate-180
              "
            >
              2026
            </span>
          </div>

          {/* Content */}
          <div
            className="
              col-span-12
              lg:col-span-4
              lg:pl-8

              relative
              z-10

              max-w-xl

              flex
              flex-col
              justify-center
            "
          >
            {/* Stats */}
            <div
              className="
                flex
                gap-10
                sm:gap-14
                mb-10
              "
            >
              <div>
                <p
                  className="
                    text-[2.5rem]
                    sm:text-[3rem]
                    leading-none
                    font-light
                    tracking-[-0.05em]
                  "
                >
                  02+
                </p>

                <p className="text-sm text-neutral-500">
                  Years Learning
                </p>
              </div>

              <div>
                <p
                  className="
                    text-[2.5rem]
                    sm:text-[3rem]
                    leading-none
                    font-light
                    tracking-[-0.05em]
                  "
                >
                  10+
                </p>

                <p className="text-sm text-neutral-500">
                  Projects Built
                </p>
              </div>
            </div>

            {/* Hero Title */}
            <h1
              className="
                text-[4.5rem]
                sm:text-[6rem]
                md:text-[7rem]
                xl:text-[9rem]

                leading-[0.85]
                tracking-[-0.09em]
                font-extralight

                -ml-1
              "
            >
              Hello.
            </h1>

            {/* Subtitle */}
            <p
              className="
                mt-4
                max-w-[320px]

                text-base
                sm:text-lg

                leading-relaxed
                text-neutral-500
              "
            >
              — I am John Karlo · React & Laravel Full-Stack Developer
            </p>

            {/* Scroll */}
            <div
              className="
                mt-14
                lg:mt-24

                text-sm
                text-neutral-500
              "
            >
              <span className="lg:hidden">
                Explore ↓
              </span>

              <span className="hidden lg:inline">
                Scroll down ↓
              </span>
            </div>
          </div>

          {/* Desktop Hero Visual */}
          <div
            className="
              hidden
              lg:block
              col-span-7
              relative
              h-full
            "
          >
            <motion.div
              animate={{
                x: position.x,
                y: position.y,
              }}
              transition={{
                type: "spring",
                stiffness: 30,
                damping: 25,
              }}
              className="
                absolute
                right-[-18%]
                top-1/2
                -translate-y-1/2
                pointer-events-none
                select-none
              "
            >
              <span
                className="
                  font-extralight
                  leading-none
                  tracking-[-0.15em]

                  text-[42rem]
                  xl:text-[52rem]

                  text-transparent
                  opacity-40

                  [-webkit-text-stroke:1px_rgb(225_225_225)]
                "
              >
                JK
              </span>
            </motion.div>
          </div>
        </div>
      </HeroContainer>
    </section>
  );
}