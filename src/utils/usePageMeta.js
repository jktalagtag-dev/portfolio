import { useEffect } from "react";

const NAME = "John Karlo Talagtag";
const BASE_TITLE = `${NAME} — Frontend Developer & UI Implementer`;
const BASE_DESCRIPTION =
  "Portfolio of John Karlo Talagtag, a frontend developer and UI " +
  "implementer crafting thoughtful digital experiences with React.";

/*
 * Per-route document title + meta description. An SPA shares one
 * index.html, so without this every tab, bookmark, and history entry
 * reads identically. Pass a short page name ("Work", "About", a
 * project title) — it's suffixed with the owner's name; pass nothing
 * for the Home base title.
 */
export default function usePageMeta(title, description) {
  useEffect(() => {
    document.title = title ? `${title} — ${NAME}` : BASE_TITLE;

    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute("content", description || BASE_DESCRIPTION);
    }
  }, [title, description]);
}
