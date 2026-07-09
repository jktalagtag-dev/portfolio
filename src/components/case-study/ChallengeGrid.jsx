import Reveal from "../motion/Reveal";

/*
 * The Challenge — cards wipe open (clip) in sequence.
 */

export default function ChallengeGrid({ challenges }) {
  return (
    <Reveal
      variant="clip"
      stagger={0.1}
      className="
        grid
        md:grid-cols-2
        gap-6
      "
    >
      {challenges.map((item) => (
        <div
          key={item}
          data-reveal
          className="
            border
            border-neutral-200

            p-8

            min-h-[180px]

            flex
            items-end
          "
        >
          <h3
            className="
              text-2xl
              font-light
              tracking-[-0.03em]
            "
          >
            {item}
          </h3>
        </div>
      ))}
    </Reveal>
  );
}
