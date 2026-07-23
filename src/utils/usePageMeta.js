import { useEffect } from "react";

const NAME = "John Karlo Talagtag";
const BASE_TITLE = `${NAME} — Frontend Developer & UI Implementer`;
const BASE_DESCRIPTION =
  "Portfolio of John Karlo Talagtag, a frontend developer and UI " +
  "implementer crafting thoughtful digital experiences with React.";
const DEFAULT_IMAGE = "/projects/2.webp";

// Matches index.html's canonical/og:url origin — every meta tag this
// hook writes has to agree with that static baseline, or a shared
// link falls back to whichever page happened to render last.
const SITE_ORIGIN = "https://portfolio-juankt08.vercel.app";

const setMeta = (selector, attr, value) => {
  document.querySelector(selector)?.setAttribute(attr, value);
};

/*
 * Per-route document title + meta description + Open Graph/Twitter
 * tags + canonical URL. An SPA shares one index.html, so without this
 * every tab, bookmark, history entry, and shared link reads
 * identically — a link to /work/some-project would preview as the
 * homepage. Pass a short page name ("Work", "About", a project
 * title) — it's suffixed with the owner's name; pass nothing for the
 * Home base title. `image` is an absolute-from-root path (e.g. a
 * project's hero image) — defaults to the site's standing OG image.
 */
export default function usePageMeta(title, description, image) {
  useEffect(() => {
    const fullTitle = title ? `${title} — ${NAME}` : BASE_TITLE;
    const fullDescription = description || BASE_DESCRIPTION;
    const url = `${SITE_ORIGIN}${window.location.pathname}`;
    const imageUrl = `${SITE_ORIGIN}${image || DEFAULT_IMAGE}`;

    document.title = fullTitle;

    setMeta('meta[name="description"]', "content", fullDescription);
    setMeta('link[rel="canonical"]', "href", url);

    setMeta('meta[property="og:url"]', "content", url);
    setMeta('meta[property="og:title"]', "content", fullTitle);
    setMeta(
      'meta[property="og:description"]',
      "content",
      fullDescription
    );
    setMeta('meta[property="og:image"]', "content", imageUrl);

    setMeta('meta[name="twitter:title"]', "content", fullTitle);
    setMeta(
      'meta[name="twitter:description"]',
      "content",
      fullDescription
    );
    setMeta('meta[name="twitter:image"]', "content", imageUrl);
  }, [title, description, image]);
}
