import MaskText from "../motion/MaskText";
import Reveal from "../motion/Reveal";

/*
 * Centered section opener — the Apple-presentation grammar: a quiet
 * eyebrow over a large single-thought headline, both centered, no
 * frame. Replaces the old sticky left-label CaseStudySection shell;
 * each section now announces itself as a beat instead of filing
 * itself in a document margin.
 */

export default function SectionHeader({ label, headline }) {
  return (
    <div className="mx-auto max-w-4xl text-center">
      {label && (
        <Reveal variant="rise">
          <p
            className="
              text-[11px]
              uppercase
              tracking-[0.3em]
              text-neutral-400
            "
          >
            {label}
          </p>
        </Reveal>
      )}

      {headline && (
        <MaskText
          as="h2"
          className="
            mt-6

            text-3xl
            sm:text-4xl
            lg:text-5xl

            font-light
            leading-[1.05]
            tracking-[-0.04em]
          "
        >
          {headline}
        </MaskText>
      )}
    </div>
  );
}
