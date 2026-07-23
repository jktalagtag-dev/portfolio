import HeroContainer from "../ui/HeroContainer";
import ScrubText from "../motion/ScrubText";

/*
 * The case study's black chapter break — one big statement that
 * brightens word-by-word at the reader's own scroll pace (same
 * ScrubText primitive as About's Approach chapter), giving the
 * page the site's light → dark → light contrast rhythm. Renders
 * nothing when the project has no pullQuote.
 */

export default function PullQuote({ label = "In Short", children }) {
  if (!children) return null;

  return (
    <section className="bg-black">
      <HeroContainer>
        <div
          className="
            py-24
            sm:py-32
            lg:py-44
          "
        >
          <p
            className="
              text-[11px]
              uppercase
              tracking-[0.3em]
              text-neutral-500
            "
          >
            {label}
          </p>

          <ScrubText
            as="p"
            start="top 70%"
            end="top 25%"
            className="
              mt-8

              max-w-5xl

              text-[1.75rem]
              sm:text-[2.5rem]
              lg:text-[3.25rem]

              font-light
              leading-[1.15]
              tracking-[-0.03em]

              text-white
            "
          >
            {children}
          </ScrubText>
        </div>
      </HeroContainer>
    </section>
  );
}
