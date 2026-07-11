import { Link } from "react-router-dom";

import HeroContainer from "../../components/ui/HeroContainer";
import MaskText from "../../components/motion/MaskText";

/*
 * Home's closing invitation — mirrors the big eyebrow + MaskText
 * headline treatment already used at the bottom of the About page
 * (a deliberate, reused signature move, not a default). Distinct
 * job from the Footer's "Have a project in mind?" mailto shortcut
 * right below it: this is a narrative nudge toward the full
 * Contact page, not a quick email link.
 */

export default function ContactCTA() {
  return (
    <section className="border-t border-neutral-200">
      <HeroContainer>
        <Link to="/contact" className="group block py-20 lg:py-32">
          <p
            className="
              text-[11px]
              uppercase
              tracking-[0.3em]
              text-neutral-400
            "
          >
            Get In Touch
          </p>

          <MaskText
            as="span"
            start="top 88%"
            className="
              mt-6
              block

              text-[2.25rem]
              sm:text-[3.5rem]
              lg:text-[5rem]

              font-light
              leading-[0.95]
              tracking-[-0.05em]
            "
            innerClassName="
              transition-colors
              duration-500

              group-hover:text-neutral-500
            "
          >
            Let&rsquo;s start a conversation.
            <span
              className="
                inline-block

                transition-transform
                duration-500

                group-hover:translate-x-3
              "
            >
              &nbsp;→
            </span>
          </MaskText>
        </Link>
      </HeroContainer>
    </section>
  );
}
