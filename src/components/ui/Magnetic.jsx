import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";

/*
 * Magnetic wrapper — the child leans toward the cursor
 * with a spring, then snaps home on leave. Transform-only,
 * driven by motion values (no re-renders).
 */

export default function Magnetic({
  children,
  strength = 0.35,
  className = "",
}) {
  const ref = useRef(null);

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);

  const x = useSpring(rawX, {
    stiffness: 180,
    damping: 14,
    mass: 0.2,
  });

  const y = useSpring(rawY, {
    stiffness: 180,
    damping: 14,
    mass: 0.2,
  });

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();

    rawX.set(
      (e.clientX - (rect.left + rect.width / 2)) * strength
    );
    rawY.set(
      (e.clientY - (rect.top + rect.height / 2)) * strength
    );
  };

  const handleMouseLeave = () => {
    rawX.set(0);
    rawY.set(0);
  };

  return (
    <motion.div
      ref={ref}
      style={{ x, y }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`will-change-transform ${className}`}
    >
      {children}
    </motion.div>
  );
}
