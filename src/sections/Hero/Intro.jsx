import { useEffect, useRef, useState } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  easeIn,
  easeOut,
} from "framer-motion";

import HeroContainer from "../../components/ui/HeroContainer";

export default function Intro() {
  const sectionRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  const [coverDistance, setCoverDistance] = useState(700);

  useEffect(() => {
    const measure = () => {
      if (sectionRef.current) {
        setCoverDistance(sectionRef.current.offsetHeight);
      }
    };

    measure();

    window.addEventListener("resize", measure);

    return () =>
      window.removeEventListener("resize", measure);
  }, []);

  const { scrollY } = useScroll();

  const scale = useTransform(
    scrollY,
    [0, coverDistance],
    [1, 0.98],
    {
      ease: easeIn,
    }
  );

  const y = useTransform(
    scrollY,
    [0, coverDistance],
    [0, -30],
    {
      ease: easeOut,
    }
  );

  const opacity = useTransform(
    scrollY,
    [coverDistance * 0.35, coverDistance],
    [1, 0]
  );

  return (
    <section
      ref={sectionRef}
      id="intro"
      className="sticky top-0 z-10 bg-[#F8F8F8]"
    >
      <motion.div
        style={
          shouldReduceMotion
            ? undefined
            : {
                scale,
                y,
                opacity,
              }
        }
        className="origin-top will-change-transform"
      >
        <HeroContainer>
          <div
            className="
              flex
              min-h-screen
              items-center
            "
          >
            <div
              className="
                mx-auto
                max-w-5xl
              "
            >
              <p
                className="
                  text-center

                  text-[2rem]
                  leading-[1.2]

                  sm:text-[2.5rem]

                  md:text-[3rem]

                  lg:text-[3.75rem]

                  xl:text-[4rem]

                  font-light

                  tracking-[-0.05em]

                  text-neutral-900
                "
              >
                I build modern, high-performance web
                experiences that combine clean design,
                thoughtful motion, and intuitive user
                experiences.
              </p>

              <p
                className="
                  mx-auto
                  mt-10

                  max-w-2xl

                  text-center

                  text-base
                  md:text-lg

                  leading-relaxed

                  text-neutral-500
                "
              >
                Specializing in React, Laravel, UI
                engineering, and creating digital
                experiences that feel as polished as
                they look.
              </p>
            </div>
          </div>
        </HeroContainer>
      </motion.div>
    </section>
  );
}