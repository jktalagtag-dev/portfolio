export default function MetadataCard({
  label,
  value,
}) {
  const values = Array.isArray(value)
    ? value
    : [value];

  return (
    <div
      className="
        flex
        flex-col
        gap-4
      "
    >
      {/* Label */}
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

      {/* Value */}
      <div
        className="
          flex
          flex-col
          gap-2
        "
      >
        {values.map((item) => (
          <p
            key={item}
            className="
              text-lg
              leading-relaxed
              text-neutral-900
            "
          >
            {item}
          </p>
        ))}
      </div>
    </div>
  );
}