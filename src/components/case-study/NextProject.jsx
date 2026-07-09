import { Link } from "react-router-dom";

import HeroContainer from "../ui/HeroContainer";
import MaskText from "../motion/MaskText";

/*
 * Next project — the title wipes up as the closing beat of the
 * case study, matching the "All Projects" / page-CTA treatment
 * used elsewhere so the site's big links share one gesture.
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
          className="group block py-20 lg:py-32"
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
