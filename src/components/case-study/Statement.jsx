import HeroContainer from "../ui/HeroContainer";
import Reveal from "../motion/Reveal";

import SectionHeader from "./SectionHeader";

/*
 * A standalone centered statement beat — eyebrow, big headline,
 * optional supporting paragraph, optional extra content below
 * (chips, link rows). These carry the case study's narrative
 * moments (Overview, Role, Outcome, Reflection) as full-width
 * pauses with generous, deliberately uneven air around them —
 * a paced product story, not a uniform spec sheet.
 */

export default function Statement({
  label,
  headline,
  body,
  children,
  className = "",
}) {
  return (
    <section className={`py-24 sm:py-32 lg:py-44 ${className}`}>
      <HeroContainer>
        <SectionHeader label={label} headline={headline} />

        {body && (
          <Reveal variant="rise">
            <p
              className="
                mx-auto
                mt-8

                max-w-2xl

                text-center
                text-lg
                leading-relaxed
                text-neutral-600
              "
            >
              {body}
            </p>
          </Reveal>
        )}

        {children}
      </HeroContainer>
    </section>
  );
}
