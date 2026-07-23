import Reveal from "../motion/Reveal";

/*
 * Engineering notes — narrative "field note" blocks for the story
 * content that doesn't fit any other section shape (a debugging
 * investigation, a design decision with real trade-offs). Visually
 * distinct from ProcessPinned (no pinned numeral) and
 * DevelopmentArchitecture (no alternating sides): a hairline-divided
 * stack of prose, same rhythm as ChallengeGrid's numbered rows.
 */

export default function EngineeringNotes({ notes }) {
  return (
    <Reveal
      variant="rise"
      stagger={0.1}
      className="
        mx-auto
        max-w-3xl

        divide-y
        divide-neutral-200

        border-t
        border-neutral-200
      "
    >
      {notes.map((note, index) => (
        <div key={note.title} data-reveal className="py-10 lg:py-14">
          <p
            className="
              text-[11px]
              uppercase
              tracking-[0.25em]
              text-neutral-400
            "
          >
            Field Note 0{index + 1}
          </p>

          <h3
            className="
              mt-4

              text-2xl
              sm:text-3xl

              font-light
              leading-snug
              tracking-[-0.02em]
            "
          >
            {note.title}
          </h3>

          <p
            className="
              mt-5

              break-words

              text-lg
              leading-relaxed
              text-neutral-600
            "
          >
            {note.description}
          </p>
        </div>
      ))}
    </Reveal>
  );
}
