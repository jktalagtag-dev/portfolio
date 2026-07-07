import { useMotionValue, useSpring } from "framer-motion";

import { CursorContext } from "./useCursor";

/*
 * Tracks the cursor across the hero and shares a normalized,
 * spring-smoothed position with every layer via context.
 */

export default function CursorEffect({
  children,
  className = "",
}) {
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);

  const x = useSpring(rawX, {
    stiffness: 45,
    damping: 20,
    mass: 0.6,
  });

  const y = useSpring(rawY, {
    stiffness: 45,
    damping: 20,
    mass: 0.6,
  });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    rawX.set(((e.clientX - rect.left) / rect.width) * 2 - 1);
    rawY.set(((e.clientY - rect.top) / rect.height) * 2 - 1);
  };

  const handleMouseLeave = () => {
    rawX.set(0);
    rawY.set(0);
  };

  return (
    <CursorContext.Provider value={{ x, y }}>
      <div
        className={className}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </div>
    </CursorContext.Provider>
  );
}
