import DrawLine from "../motion/DrawLine";

/*
 * Case-study section marker: a short rule that draws itself in
 * beside the label. Sticks alongside the content column on lg+.
 */

export default function SectionLabel({ label }) {
  return (
    <div
      className="
        lg:sticky
        lg:top-28

        flex
        items-center
        gap-4

        pb-6
        lg:pb-0
      "
    >
      <DrawLine axis="x" className="h-px w-10 bg-neutral-300" />

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
  );
}
