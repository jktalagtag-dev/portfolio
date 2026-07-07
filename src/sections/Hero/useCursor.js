import { createContext, useContext } from "react";
import { useTransform } from "framer-motion";

/*
 * Shared spring-smoothed cursor position (-1..1), provided
 * by <CursorEffect>. Motion values bypass React re-renders —
 * mousemove never triggers a render.
 */

export const CursorContext = createContext(null);

export function useCursor() {
  return useContext(CursorContext);
}

/*
 * Maps the shared cursor position to a translate offset.
 * Positive depth follows the cursor (foreground),
 * negative depth moves against it (background).
 */
export function useParallax(depth = 12) {
  const { x, y } = useCursor();

  const px = useTransform(x, [-1, 1], [-depth, depth]);
  const py = useTransform(y, [-1, 1], [-depth, depth]);

  return { x: px, y: py };
}
