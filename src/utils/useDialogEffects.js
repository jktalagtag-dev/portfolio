import { useEffect, useRef } from "react";

import { getLenis } from "./useSmoothScroll";

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';

/*
 * Shared behavior for any full-screen/modal overlay: locks page
 * scroll while open (both the CSS overflow lock AND Lenis itself —
 * Lenis keeps its own rAF/wheel loop running otherwise, which can
 * rubber-band the page under the open dialog), closes on Escape, and
 * (when a containerRef is given) traps Tab focus inside the dialog
 * and restores it to whatever triggered the dialog on close — a real
 * focus trap, not just visual containment. Used by the Navbar's
 * full-screen menu and ProjectModal so both dialogs behave
 * identically instead of duplicating the same effect twice.
 * `containerRef`'s element should carry `tabIndex={-1}` so it can
 * receive the initial focus itself.
 */
export default function useDialogEffects(isOpen, onClose, containerRef) {
  const previousFocusRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    const lenis = getLenis();
    if (isOpen) {
      lenis?.stop();
    } else {
      lenis?.start();
    }

    if (!isOpen) return () => {
      document.body.style.overflow = "";
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
      document.body.style.overflow = "";
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
