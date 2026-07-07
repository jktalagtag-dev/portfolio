import { useEffect, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  easeIn,
  easeOut,
} from "framer-motion";

import HeroContainer from "../../components/ui/HeroContainer";

import CursorEffect from "./CursorEffect";
import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";
import FloatingCards from "./FloatingCards";

export default function Hero() {
  const sectionRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  /*
   * Curtain exit — the hero is pinned (sticky) while the
   * showcase scrolls up and covers it. While being covered,
   * the hero recedes: scales down, drifts up, and fades.
   * The content and the floating cards exit at different
   * speeds for depth. The cover distance equals the hero's
   * own height.
   */
  const [coverDistance, setCoverDistance] = useState(800);

  useEffect(() => {
    const measure = () => {
      if (sectionRef.current) {
        setCoverDistance(sectionRef.current.offsetHeight);
      }
    };

    measure();
    window.addEventListener("resize", measure);

    return () => window.removeEventListener("resize", measure);
  }, []);

  const { scrollY } = useScroll();

  // Starts gently, commits as the curtain closes.
  const scale = useTransform(
    scrollY,
    [0, coverDistance],
    [1, 0.94],
    { ease: easeIn }
  );

  const y = useTransform(
    scrollY,
    [0, coverDistance],
    [0, -50],
    { ease: easeIn }
  );

  const opacity = useTransform(
    scrollY,
    [coverDistance * 0.35, coverDistance],
    [1, 0]
  );

  // Depth: the foreground cards leave faster than the copy.
  const contentY = useTransform(
    scrollY,
    [0, coverDistance],
    [0, -50],
    { ease: easeOut }
  );

  const cardsY = useTransform(
    scrollY,
    [0, coverDistance],
    [0, -140],
    { ease: easeOut }
  );

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="
        sticky
        top-0
        z-0
      "
    >
      <CursorEffect className="relative overflow-hidden">
        <motion.div
          style={
            shouldReduceMotion
              ? undefined
              : { scale, y, opacity }
          }
          className="
            origin-top

            will-change-transform
          "
        >

          <HeroBackground />

          <HeroContainer className="relative z-10">
            <div
              className="
                grid
                grid-cols-1
                lg:grid-cols-12

                items-center

                gap-12
                lg:gap-8

                min-h-[88svh]

                pt-32
                pb-16
                lg:pt-24
                lg:pb-8
              "
            >
              {/* Left — content */}
              <motion.div
                style={
                  shouldReduceMotion
                    ? undefined
                    : { y: contentY }
                }
                className="lg:col-span-7 will-change-transform"
              >
                <HeroContent />
              </motion.div>

              {/* Right — floating composition */}
              <motion.div
                style={
                  shouldReduceMotion
                    ? undefined
                    : { y: cardsY }
                }
                className="
                  hidden
                  lg:block
                  lg:col-span-5

                  will-change-transform
                "
              >
                <FloatingCards />
              </motion.div>
            </div>
          </HeroContainer>

        </motion.div>
      </CursorEffect>
    </section>
  );
}
