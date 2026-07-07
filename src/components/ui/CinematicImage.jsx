import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  easeOut,
} from "framer-motion";

/*
 * Scroll-driven cinematic image (siena.film behavior):
 * starts inset with rounded corners, expands to full-bleed
 * as it scrolls toward the viewport center, while the image
 * drifts in parallax inside its frame. Transform/radius only —
 * no layout is invalidated during scroll.
 */

export default function CinematicImage({
  src,
  alt,
  heightClassName = "h-[60svh]",
  radius = 28,
  inset = 0.9,
  children,
}) {
  const ref = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  // Expansion: from entering the viewport until centered.
  const { scrollYProgress: reveal } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  // Parallax: across the full viewport pass.
  const { scrollYProgress: pass } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // easeOut front-loads the expansion — most of it happens
  // while the image is still low in the viewport, so it
  // arrives at center already settled. The frame also rises
  // into place as it expands.
  const scale = useTransform(reveal, [0, 1], [inset, 1], {
    ease: easeOut,
  });
  const borderRadius = useTransform(
    reveal,
    [0, 1],
    [radius, 0],
    { ease: easeOut }
  );
  const frameY = useTransform(reveal, [0, 1], [70, 0], {
    ease: easeOut,
  });
  const innerScale = useTransform(reveal, [0, 1], [1.18, 1.08]);
  const y = useTransform(pass, [0, 1], ["-6%", "6%"]);

  return (
    <div
      ref={ref}
      className={`
        relative
        w-full
        overflow-hidden

        ${heightClassName}
      `}
    >
      <motion.div
        style={
          shouldReduceMotion
            ? undefined
            : { scale, borderRadius, y: frameY }
        }
        className="
          absolute
          inset-0

          overflow-hidden

          bg-neutral-100

          will-change-transform
        "
      >
        <motion.img
          src={src}
          alt={alt}
          loading="lazy"
          style={
            shouldReduceMotion
              ? undefined
              : { y, scale: innerScale }
          }
          className="
            h-full
            w-full

            object-cover

            will-change-transform
          "
        />

        {children}
      </motion.div>
    </div>
  );
}
