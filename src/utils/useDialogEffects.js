import { useEffect } from "react";

/*
 * Shared behavior for any full-screen/modal overlay: locks page
 * scroll while open, closes on Escape. Used by the Navbar's
 * full-screen menu and ProjectModal so both dialogs behave
 * identically instead of duplicating the same effect twice.
 */
export default function useDialogEffects(isOpen, onClose) {
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, onClose]);
}
