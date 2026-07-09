import Reveal from "../motion/Reveal";

import SectionLabel from "./SectionLabel";

/*
 * Case-study section shell: a drawn label column + a content
 * column. The whole-section fade was removed so each section can
 * carry its own distinct motion — text-only sections pass a
 * `reveal` variant (rise / clip / slide …); sections whose child
 * is a self-animating component (grids, timeline, architecture)
 * leave `reveal` as "none" and let that component own the motion,
 * so nothing double-animates.
 */

export default function CaseStudySection({
  label,
  children,
  reveal = "none",
  className = "",
}) {
  return (
    <section
      className={`
        border-t
        border-neutral-200

        py-20
        lg:py-32

        ${className}
      `}
    >
      <div
        className="
          grid
          grid-cols-1
          lg:grid-cols-12
          gap-10
        "
      >
        {/* Section Label */}
        <div className="lg:col-span-3">
          <SectionLabel label={label} />
        </div>

        {/* Section Content */}
        <div className="lg:col-span-9">
          {reveal === "none" ? (
            children
          ) : (
            <Reveal variant={reveal}>{children}</Reveal>
          )}
        </div>
      </div>
    </section>
  );
}
