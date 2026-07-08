export default function ProjectLinks({ live, github }) {
  return (
    <div
      className="
        flex
        flex-wrap
        gap-8
      "
    >
      {live !== "#" && (
        <a
          href={live}
          target="_blank"
          rel="noreferrer"
          className="
            text-sm
            uppercase
            tracking-[0.2em]

            transition-colors
            hover:text-neutral-500
          "
        >
          Live Demo ↗
        </a>
      )}

      {github !== "#" && (
        <a
          href={github}
          target="_blank"
          rel="noreferrer"
          className="
            text-sm
            uppercase
            tracking-[0.2em]

            transition-colors
            hover:text-neutral-500
          "
        >
          GitHub ↗
        </a>
      )}
    </div>
  );
}
