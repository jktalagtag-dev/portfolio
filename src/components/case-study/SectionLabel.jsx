export default function SectionLabel({ label }) {
  return (
    <div
      className="
        sticky
        top-28

        flex
        items-center
        gap-4

        pb-6
        lg:pb-0
      "
    >
      <div className="h-px w-10 bg-neutral-300" />

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