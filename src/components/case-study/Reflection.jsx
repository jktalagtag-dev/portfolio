import MaskText from "../motion/MaskText";
import Reveal from "../motion/Reveal";

/*
 * Reflection — the closing statement wipes up (mask), then the
 * learnings rise beneath it.
 */

export default function Reflection({
  headline,
  learnings,
  note,
}) {
  return (
    <div className="max-w-4xl">
      <MaskText
        as="h2"
        start="top 85%"
        className="
          text-3xl
          sm:text-4xl
          lg:text-5xl

          font-light
          leading-[1.05]
          tracking-[-0.05em]
        "
      >
        {headline}
      </MaskText>

      <Reveal variant="rise" stagger={0.1}>
        <p
          data-reveal
          className="
            mt-10

            text-lg
            sm:text-xl

            leading-relaxed
            text-neutral-600
          "
        >
          {learnings}
        </p>

        {note && (
          <p
            data-reveal
            className="
              mt-8

              text-base
              sm:text-lg

              leading-relaxed
              text-neutral-500
            "
          >
            {note}
          </p>
        )}
      </Reveal>
    </div>
  );
}
