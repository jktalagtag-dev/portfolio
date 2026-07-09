import { Link } from "react-router-dom";

import SectionContainer from "../../components/ui/SectionContainer";
import VerticalLabel from "../../components/ui/VerticalLabel";
import Reveal from "../../components/motion/Reveal";

/*
 * About preview. Motion character: a calm "rise" — heading and
 * paragraphs lift into place in sequence. (Skills scales,
 * Experience slides, Currently wipes — each section reads
 * distinctly so the page never feels like one repeated reveal.)
 */

export default function About() {
  return (
    <section id="about-preview" className="overflow-hidden">
      <SectionContainer>
        <div className="py-20 lg:py-40">
          <Reveal
            variant="rise"
            stagger={0.12}
            className="
              grid
              grid-cols-1
              lg:grid-cols-12
              gap-10
            "
          >
            <VerticalLabel label="ABOUT · PREVIEW" />

            {/* Heading */}
            <div data-reveal className="lg:col-span-5">
              <h2
                className="
                  max-w-[300px]
                  sm:max-w-none

                  text-[2.5rem]
                  sm:text-5xl
                  xl:text-[5rem]

                  font-light
                  leading-[0.92]
                  tracking-[-0.07em]
                "
              >
                A little
                <br />
                about me.
              </h2>
            </div>

            {/* Content */}
            <div className="lg:col-span-5 lg:pt-6">
              <div className="max-w-xl">
                <div
                  className="
                    space-y-6

                    text-base
                    sm:text-lg

                    leading-relaxed
                    text-neutral-600
                  "
                >
                  <p data-reveal>
                    I&rsquo;m John Karlo, a Frontend Developer who
                    enjoys turning ideas into clean and intuitive
                    digital experiences.
                  </p>

                  <p data-reveal>
                    My focus is building responsive interfaces with
                    React while bringing a full-stack understanding
                    from working with Laravel, PHP, and databases.
                  </p>

                  <p data-reveal>
                    I enjoy the intersection of design and
                    development—where thoughtful user experiences
                    meet solid implementation.
                  </p>
                </div>

                <div
                  data-reveal
                  className="
                    mt-12

                    pt-8

                    border-t
                    border-neutral-200
                  "
                >
                  <Link
                    to="/work"
                    className="
                      inline-flex
                      items-center
                      gap-3

                      text-sm
                      uppercase
                      tracking-[0.18em]

                      text-neutral-500

                      transition-colors
                      duration-300

                      hover:text-black
                    "
                  >
                    View My Work →
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </SectionContainer>
    </section>
  );
}
