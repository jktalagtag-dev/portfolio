import { useEffect, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  easeOut,
} from "framer-motion";

import HeroContainer from "../../components/ui/HeroContainer";

import CursorEffect from "./CursorEffect";
import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";

export default function Hero() {
  const sectionRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  /*
   * Parallax exit — as the pinned Intro rises to cover the
   * hero, the lockup drifts down slower than the scroll
   * (classic depth lag) and fades, so the handoff reads as
   * layered rather than a flat scroll-away.
   */
  const [exitDistance, setExitDistance] = useState(700);

  useEffect(() => {
    const measure = () => {
      if (sectionRef.current) {
        setExitDistance(sectionRef.current.offsetHeight);
      }
    };

    measure();
    window.addEventListener("resize", measure);

    return () => window.removeEventListener("resize", measure);
  }, []);

  const { scrollY } = useScroll();

  const contentY = useTransform(
    scrollY,
    [0, exitDistance],
    [0, 120],
    { ease: easeOut }
  );

  const contentOpacity = useTransform(
    scrollY,
    [exitDistance * 0.25, exitDistance * 0.85],
    [1, 0]
  );

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative"
    >
      <CursorEffect className="relative overflow-hidden">
        <HeroBackground />

        <motion.div
          style={
            shouldReduceMotion
              ? undefined
              : {
                  y: contentY,
                  opacity: contentOpacity,
                }
          }
          className="
            relative
            z-10

            will-change-transform
          "
        >
          <HeroContainer>
            <div
              className="
                flex
                flex-col
                justify-center

                min-h-[90svh]

                pt-28
                md:pt-32

                pb-16
              "
            >
              <HeroContent />
            </div>
          </HeroContainer>
        </motion.div>
      </CursorEffect>
    </section>
  );
}
