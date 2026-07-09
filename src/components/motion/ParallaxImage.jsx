import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/*
 * Layered parallax image — the frame is fixed and clips, while
 * the oversized image inside drifts vertically as the frame
 * passes through the viewport (scrubbed to scroll). The frame
 * reads as the foreground plane, the image as a slower plane
 * behind it: depth without the image ever revealing an edge.
 */

export default function ParallaxImage({
  src,
  alt,
  className = "",
  intensity = 6,
  objectPosition = "center",
  priority = false,
}) {
  const frameRef = useRef(null);
  const imgRef = useRef(null);

  useLayoutEffect(() => {
    const frame = frameRef.current;
    const img = imgRef.current;
    if (!frame || !img) return undefined;

    const ctx = gsap.context(() => {
      // Uniform zoom gives vertical travel room without ever
      // revealing an edge or exposing a lopsided crop; only the
      // vertical pan is scrubbed to scroll.
      gsap.set(img, { scale: 1.16 });
      gsap.fromTo(
        img,
        { yPercent: -intensity },
        {
          yPercent: intensity,
          ease: "none",
          scrollTrigger: {
            trigger: frame,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    });

    return () => ctx.revert();
  }, [intensity]);

  return (
    <div
      ref={frameRef}
      className={`relative overflow-hidden ${className}`}
    >
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        style={{ objectPosition }}
        className="
          absolute
          inset-0

          h-full
          w-full

          object-cover

          will-change-transform
        "
      />
    </div>
  );
}
