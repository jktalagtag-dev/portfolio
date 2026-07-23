import { useEffect, useRef } from "react";

import { getLenis } from "./useSmoothScroll";

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';

/*
 * Shared behavior for any full-screen/modal overlay: locks page
 * scroll while open, closes on Escape, and (when a containerRef is
 * given) traps Tab focus inside the dialog and restores it to
 * whatever triggered the dialog on close — a real focus trap, not
 * just visual containment. Used by the Navbar's full-screen menu and
 * ProjectModal so both dialogs behave identically instead of
 * duplicating the same effect twice. `containerRef`'s element should
 * carry `tabIndex={-1}` so it can receive the initial focus itself.
 *
 * The scroll lock pins the body via `position: fixed` (restoring the
 * scroll offset on close) rather than plain `overflow: hidden` — on
 * iOS Safari, `overflow: hidden` alone does not reliably stop the
 * page from scrolling and can also break touch-scrolling on a nested
 * `overflow-y: auto` panel inside the fixed-position dialog (the
 * classic "modal won't scroll on my phone" bug). Lenis is also
 * stopped, since it keeps its own rAF/wheel loop running otherwise,
 * which can rubber-band the page under the open dialog.
 */
export default function useDialogEffects(isOpen, onClose, containerRef) {
  const previousFocusRef = useRef(null);
  const scrollYRef = useRef(0);

  useEffect(() => {
    const lenis = getLenis();

    if (isOpen) {
      scrollYRef.current = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollYRef.current}px`;
      document.body.style.left = "0";
      document.body.style.right = "0";
      lenis?.stop();
    } else {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      window.scrollTo(0, scrollYRef.current);
      lenis?.start();
    }

    if (!isOpen) return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
    };

    const onKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }

      if (e.key !== "Tab" || !containerRef?.current) return;

      const focusable = Array.from(
        containerRef.current.querySelectorAll(FOCUSABLE_SELECTOR)
      ).filter((el) => el.offsetParent !== null);

      if (!focusable.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const active = document.activeElement;

      if (e.shiftKey) {
        if (active === first || !containerRef.current.contains(active)) {
          e.preventDefault();
          last.focus();
        }
      } else if (active === last) {
        e.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      window.scrollTo(0, scrollYRef.current);
      // Covers the edge case of unmounting while still open (e.g. a
      // route change with the modal up) — Lenis must not stay
      // stopped just because the dialog never called onClose.
      getLenis()?.start();
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, onClose, containerRef]);

  // Initial focus into the dialog + restore to the trigger on close —
  // only when a container is provided (both current callers pass one).
  useEffect(() => {
    if (!containerRef) return;

    if (isOpen) {
      previousFocusRef.current = document.activeElement;
      containerRef.current?.focus();
    } else {
      previousFocusRef.current?.focus?.();
    }
  }, [isOpen, containerRef]);
}
