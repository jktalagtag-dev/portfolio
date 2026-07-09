import DrawLine from "../motion/DrawLine";

/*
 * The editorial section marker used down the About family
 * (About / Skills / Experience / Currently / Contact). Previously
 * duplicated in every section as a `hidden lg:flex` rotated label
 * with no mobile presence. Now one component:
 *   - desktop: a tall rule that draws in on scroll + rotated label
 *   - mobile:  a short horizontal rule + inline label (so narrow
 *     screens aren't left without the marker)
 * Meant to sit as the first child of the section's 12-col grid.
 */

export default function VerticalLabel({ label }) {
  return (
    <>
      {/* Desktop — vertical drawn rule */}
      <div className="hidden lg:flex lg:col-span-2 items-start gap-6">
        <DrawLine
          axis="y"
          scrub
          className="h-[320px] w-px bg-neutral-200"
        />

        <span
          className="
            text-[11px]
            uppercase
            tracking-[0.25em]
            text-neutral-400

            [writing-mode:vertical-rl]
            rotate-180
          "
        >
          {label}
        </span>
      </div>

      {/* Mobile — short horizontal drawn rule */}
      <div className="lg:hidden flex items-center gap-4">
        <DrawLine
          axis="x"
          className="h-px w-10 bg-neutral-300"
        />

        <span
          className="
            text-[11px]
            uppercase
            tracking-[0.25em]
            text-neutral-400
          "
        >
          {label}
        </span>
      </div>
    </>
  );
}
