import SectionContainer from "../../components/ui/SectionContainer";
import VerticalLabel from "../../components/ui/VerticalLabel";
import Reveal from "../../components/motion/Reveal";

const links = [
  {
    label: "Email",
    value: "talagtagjohnkarlo4@gmail.com",
    href: "mailto:talagtagjohnkarlo4@gmail.com",
  },
  {
    label: "LinkedIn",
    value: "Connect",
    href: "#",
  },
  {
    label: "GitHub",
    value: "github.com/jktalagtag-dev",
    href: "https://github.com/jktalagtag-dev",
  },
  {
    label: "Resume",
    value: "Download Resume",
    href: "#",
  },
];

// Only real external URLs should open a new tab —
// mailto and placeholder links behave badly with _blank.
const isExternal = (href) => href.startsWith("http");

/*
 * Contact. The intro rises in; the contact rows then slide in
 * from the left, echoing their own "→" hover motion — a reveal
 * that matches what the element does, not a uniform fade.
 */

export default function Contact() {
  return (
    <section
      id="contact"
      className="pb-24 pt-4 lg:pb-40 lg:pt-8"
    >
      <SectionContainer>
        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-12
            gap-8
          "
        >
          <VerticalLabel label="CONTACT · 2026" />

          <div className="lg:col-span-10">
            {/* Intro */}
            <Reveal variant="rise" stagger={0.1} className="max-w-3xl">
              {/* Availability — a plain tracked label like every
                  other small caption on the site, not a status
                  chip; the pulsing dot is the only accent. */}
              <span
                data-reveal
                className="
                  inline-flex
                  items-center
                  gap-2.5

                  text-[11px]
                  uppercase
                  tracking-[0.25em]
                  text-neutral-500
                "
              >
                <span className="relative flex h-1.5 w-1.5">
                  <span
                    className="
                      absolute
                      inline-flex

                      h-full
                      w-full

                      animate-ping
                      rounded-full

                      bg-emerald-400
                      opacity-60
                    "
                  />
                  <span
                    className="
                      relative
                      inline-flex

                      h-1.5
                      w-1.5

                      rounded-full
                      bg-emerald-500
                    "
                  />
                </span>
                Available for Work
              </span>

              <p
                data-reveal
                className="
                  mt-8

                  text-2xl
                  sm:text-3xl
                  xl:text-4xl

                  font-light
                  leading-[1.2]
                  tracking-[-0.03em]

                  text-neutral-900
                "
              >
                Open to frontend development roles, freelance
                projects, and collaborations.
              </p>

              <p
                data-reveal
                className="
                  mt-6

                  text-base
                  sm:text-lg

                  leading-relaxed
                  text-neutral-500
                "
              >
                Based in the Philippines · Available for remote
                work
              </p>
            </Reveal>

            {/* Links */}
            <Reveal
              variant="slide"
              stagger={0.1}
              className="
                mt-16
                lg:mt-20

                border-t
                border-neutral-200
              "
            >
              {links.map((link) => (
                <a
                  key={link.label}
                  data-reveal
                  href={link.href}
                  target={
                    isExternal(link.href) ? "_blank" : undefined
                  }
                  rel={
                    isExternal(link.href) ? "noreferrer" : undefined
                  }
                  className="
                    group

                    flex
                    items-center
                    justify-between

                    gap-6

                    py-8

                    border-b
                    border-neutral-200
                  "
                >
                  <div className="min-w-0">
                    <p
                      className="
                        text-[11px]
                        uppercase
                        tracking-[0.25em]
                        text-neutral-400
                      "
                    >
                      {link.label}
                    </p>

                    <p
                      className="
                        mt-2

                        break-words

                        text-lg
                        sm:text-2xl
                        xl:text-3xl

                        font-light

                        transition-all
                        duration-300

                        group-hover:translate-x-3
                      "
                    >
                      {link.value}
                    </p>
                  </div>

                  <span
                    className="
                      shrink-0

                      text-neutral-400
                      text-2xl

                      transition-all
                      duration-300

                      group-hover:translate-x-2
                      group-hover:text-black
                    "
                  >
                    ↗
                  </span>
                </a>
              ))}
            </Reveal>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}
