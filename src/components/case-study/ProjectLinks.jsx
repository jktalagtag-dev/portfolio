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
            text-neutral-500

            transition-colors
            duration-300

            hover:text-neutral-900
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
            text-neutral-500

            transition-colors
            duration-300

            hover:text-neutral-900
          "
        >
          GitHub ↗
        </a>
      )}
    </div>
  );
}
