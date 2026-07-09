import { useEffect, useRef, useState } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  easeOut,
} from "framer-motion";

import HeroContainer from "../../components/ui/HeroContainer";

import CursorEffect from "./CursorEffect";
import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";

export default function Hero() {
  const sectionRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();

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
    [0, 140],
    {
      ease: easeOut,
    }
  );

  const contentOpacity = useTransform(
    scrollY,
    [exitDistance * 0.2, exitDistance * 0.82],
    [1, 0]
  );

  const contentScale = useTransform(
    scrollY,
    [0, exitDistance],
    [1, 0.96]
  );

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative isolate"
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
                  scale: contentScale,
                }
          }
          className="
            relative
            z-10

            origin-top

            will-change-transform
          "
        >
          <HeroContainer>
            <HeroContent />
          </HeroContainer>
        </motion.div>
      </CursorEffect>
    </section>
  );
}