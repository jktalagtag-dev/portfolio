import { Link } from "react-router-dom";

import SectionContainer from "../components/ui/SectionContainer";

import { getLenis } from "../utils/useSmoothScroll";
import useLocalTime from "../utils/useLocalTime";

const menuLinks = [
  {
    label: "Work",
    href: "/work",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

const connectLinks = [
  {
    label: "GitHub",
    href: "https://github.com/jktalagtag-dev",
    external: true,
  },
  {
    label: "LinkedIn",
    href: "#",
    external: false,
  },
  {
    label: "Resume",
    href: "#",
    external: false,
  },
];

/*
 * The page's final "full stop" — black, matching the Project
 * Showcase's chapter-break treatment above, so the homepage closes
 * on the same deliberate contrast moment it opened one with.
 *
 * Rendered plainly, with no scroll-triggered reveal: footer content
 * (nav, contact info) must always be visible the instant it's
 * scrolled to, and a scroll-position-threshold animation can miss
 * that when a page jumps straight to the bottom before its trigger
 * position has settled — not a risk worth taking for utility content.
 */

export default function Footer() {
  const time = useLocalTime();

  const scrollToTop = () => {
    const lenis = getLenis();

    if (lenis) {
      lenis.scrollTo(0, { duration: 1.2 });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="border-t border-white/15 bg-black">
      <SectionContainer>

        {/* Upper — CTA and link columns */}
        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-12

            gap-12

            pt-12
            sm:pt-14
            lg:pt-24

            pb-12
            sm:pb-14
            lg:pb-24
          "
        >
          {/* CTA */}
          <div className="md:col-span-7">
            <p
              className="
                text-2xl
                sm:text-3xl
                lg:text-4xl

                font-light
                leading-[1.15]
                tracking-[-0.03em]

                text-white
              "
            >
              Have a project in mind?
            </p>

            <a
              href="mailto:talagtagjohnkarlo4@gmail.com"
              className="
                mt-4

                inline-block

                break-words

                text-base
                sm:text-lg

                text-neutral-400

                transition-colors
                duration-300

                hover:text-white
              "
            >
              talagtagjohnkarlo4@gmail.com
            </a>
          </div>

          {/* Link columns */}
          <div
            className="
              md:col-span-5

              flex
              gap-16
              sm:gap-24

              md:justify-end
            "
          >
            <div>
              <p
                className="
                  text-[11px]
                  uppercase
                  tracking-[0.25em]
                  text-neutral-500
                "
              >
                Menu
              </p>

              <ul className="mt-5 space-y-3">
                {menuLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="
                        text-sm
                        text-neutral-400

                        transition-colors
                        duration-300

                        hover:text-white
                      "
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p
                className="
                  text-[11px]
                  uppercase
                  tracking-[0.25em]
                  text-neutral-500
                "
              >
                Connect
              </p>

              <ul className="mt-5 space-y-3">
                {connectLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={
                        link.external ? "_blank" : undefined
                      }
                      rel={
                        link.external
                          ? "noreferrer"
                          : undefined
                      }
                      className="
                        text-sm
                        text-neutral-400

                        transition-colors
                        duration-300

                        hover:text-white
                      "
                    >
                      {link.label}&ensp;↗
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Closing mark — the brand's secondary monogram (JKT/),
            not a name marquee: a mark only this site owns, with a
            colophon opposite. Static like the rest of the footer. */}
        <div
          className="
            flex
            flex-col
            sm:flex-row
            sm:items-end
            sm:justify-between

            gap-10

            pb-10
            sm:pb-12
            lg:pb-16
          "
        >
          <p
            className="
              text-[5rem]
              sm:text-[7rem]
              lg:text-[9rem]

              font-extralight
              leading-[0.8]
              tracking-[-0.08em]

              text-white
            "
          >
            JKT/
          </p>

          {/* Colophon */}
          <div
            className="
              sm:text-right

              text-[11px]
              uppercase
              tracking-[0.22em]

              leading-loose
              text-neutral-500
            "
          >
            <p>Designed &amp; built by John Karlo Talagtag</p>
            <p>Philippines&ensp;·&ensp;{time}&ensp;PHT</p>
          </div>
        </div>

        {/* Baseline */}
        <div
          className="
            border-t
            border-white/15

            py-6

            flex
            flex-col
            sm:flex-row
            sm:items-center
            sm:justify-between

            gap-3
          "
        >
          <p
            className="
              text-xs
              text-neutral-500
            "
          >
            © 2026 John Karlo Talagtag
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="
              self-start
              sm:self-auto

              text-xs
              uppercase
              tracking-[0.2em]
              text-neutral-400

              transition-colors
              duration-300

              hover:text-white
            "
          >
            Back to Top ↑
          </button>
        </div>

      </SectionContainer>
    </footer>
  );
}
