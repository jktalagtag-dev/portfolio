import HeroContainer from "../ui/HeroContainer";
import Reveal from "../motion/Reveal";

/*
 * Spec strip — the Apple-style facts band: one quiet horizontal
 * run of Role / Timeline / Year / Stack between two hairlines,
 * centered values, no boxes. Replaces the old MetadataCard grid
 * on both case-study tiers.
 */

export default function SpecStrip({ project }) {
  const specs = [
    { label: "Role", value: project.role },
    { label: "Timeline", value: project.timeline },
    { label: "Year", value: project.year },
    { label: "Stack", value: project.tech.join(" · ") },
  ];

  return (
    <section className="border-y border-neutral-200">
      <HeroContainer>
        <Reveal
          variant="rise"
          stagger={0.08}
          className="
            grid
            grid-cols-2
            lg:grid-cols-4

            gap-x-8
            gap-y-10

            py-10
            lg:py-14
          "
        >
          {specs.map((spec) => (
            <div key={spec.label} data-reveal className="text-center">
              <p
                className="
                  text-[11px]
                  uppercase
                  tracking-[0.25em]
                  text-neutral-400
                "
              >
                {spec.label}
              </p>

              <p className="mt-3 text-base sm:text-lg text-neutral-900">
                {spec.value}
              </p>
            </div>
          ))}
        </Reveal>
      </HeroContainer>
    </section>
  );
}
