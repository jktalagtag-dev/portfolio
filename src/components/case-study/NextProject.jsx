import { Link } from "react-router-dom";

import HeroContainer from "../ui/HeroContainer";
import MaskText from "../motion/MaskText";

/*
 * Next project — the case study's closing beat, centered to match
 * the page's new mid-page statement rhythm: the title wipes up as
 * one last big typographic moment before the visitor moves on.
 */

export default function NextProject({ project }) {
  return (
    <section
      className="
        border-t
        border-neutral-200
      "
    >
      <HeroContainer>
        <Link
          to={`/work/${project.slug}`}
          className="group block py-24 sm:py-32 lg:py-44 text-center"
        >
          <p
            className="
              text-[11px]
              uppercase
              tracking-[0.3em]
              text-neutral-400
            "
          >
            Next Project
          </p>

          <MaskText
            as="h2"
            start="top 88%"
            className="
              mx-auto
              mt-6

              text-[2.75rem]
              sm:text-[4rem]
              lg:text-[6rem]

              font-extralight
              leading-[0.95]
              tracking-[-0.06em]
            "
            innerClassName="
              transition-colors
              duration-500

              group-hover:text-neutral-500
            "
          >
            {project.title}
          </MaskText>

          <p
            className="
              mt-8

              inline-flex
              items-center
              justify-center
              gap-3

              text-sm
              uppercase
              tracking-[0.18em]
              text-neutral-500

              transition-colors
              duration-300

              group-hover:text-black
            "
          >
            View Case Study
            <span
              className="
                transition-transform
                duration-300
                group-hover:translate-x-2
              "
            >
              →
            </span>
          </p>
        </Link>
      </HeroContainer>
    </section>
  );
}
