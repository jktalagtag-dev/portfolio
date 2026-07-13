import { Link } from "react-router-dom";

import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";

import PageTransition from "../components/motion/PageTransition";
import usePageMeta from "../utils/usePageMeta";
import HeroContainer from "../components/ui/HeroContainer";
import MaskText from "../components/motion/MaskText";
import WorkCarousel from "../sections/Projects/WorkCarousel";

import { projects } from "../data/projects";

export default function Work() {
  usePageMeta(
    "Work",
    "Selected work and case studies — every project by John Karlo Talagtag, from flagship builds to work in progress."
  );

  return (
    <PageTransition>
      <Navbar />

      <main id="main-content" className="pt-32 lg:pt-40">
        <HeroContainer className="pb-20">
          <div className="max-w-5xl">
            <p
              className="
                text-[11px]
                uppercase
                tracking-[0.25em]
                text-neutral-400
                mb-8
              "
            >
              Work
            </p>

            <h1
              className="
                text-[3.5rem]
                sm:text-[5rem]
                xl:text-[7rem]

                font-light
                leading-[0.9]
                tracking-[-0.08em]
              "
            >
              <MaskText as="span" className="block" delay={0}>
                Where all
              </MaskText>
              <MaskText as="span" className="block" delay={0.12}>
                my work
              </MaskText>
              <MaskText as="span" className="block" delay={0.24}>
                lives.
              </MaskText>
            </h1>
          </div>
        </HeroContainer>

        {/* Archive — every project, tier-aware, in a horizontal
            drag carousel: Work's own identity, not a repeat of
            Home's vertical pinned scrub */}
        <section className="pt-14 sm:pt-16 lg:pt-24 pb-8 sm:pb-10 lg:pb-16">
          <HeroContainer>
            <div
              className="
                flex
                items-baseline
                justify-between

                gap-6

                border-b
                border-neutral-200

                pb-5
              "
            >
              <p
                className="
                  text-[11px]
                  uppercase
                  tracking-[0.3em]
                  text-neutral-500
                "
              >
                Archive
              </p>

              <p
                className="
                  text-[11px]
                  uppercase
                  tracking-[0.3em]
                  text-neutral-500
                "
              >
                ({String(projects.length).padStart(2, "0")})
              </p>
            </div>
          </HeroContainer>

          <div className="mt-8 lg:mt-10">
            <WorkCarousel projects={projects} />
          </div>

          <HeroContainer>
            <div
              className="
                mt-14
                sm:mt-16
                lg:mt-20

                border-t
                border-neutral-200

                pt-8
                sm:pt-10
              "
            >
              <p
                className="
                  max-w-xl

                  text-base
                  sm:text-lg

                  leading-relaxed
                  text-neutral-500
                "
              >
                More projects are currently in development. This
                collection will continue to grow as I take on new
                challenges and explore new ideas.
              </p>
            </div>
          </HeroContainer>
        </section>

        {/* Transition — Contact */}
        <section className="border-t border-neutral-200">
          <HeroContainer>
            <Link to="/contact" className="group block py-20 lg:py-28">
              <p
                className="
                  text-[11px]
                  uppercase
                  tracking-[0.3em]
                  text-neutral-400
                "
              >
                Next
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
                Let&rsquo;s start a conversation
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
      </main>

      <Footer />
    </PageTransition>
  );
}