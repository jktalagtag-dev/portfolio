import { Link } from "react-router-dom";

import SectionContainer from "../../components/ui/SectionContainer";
import Reveal from "../../components/motion/Reveal";

/*
 * About preview. Two-column sticky layout: the title pins left while
 * the prose scrolls past on the right — the same rhythm as Skills and
 * Experience, so the page reads as one system. Motion character "rise"
 * (heading and paragraphs lift into place). overflow-x-clip so the
 * sticky column works.
 */

export default function About() {
  return (
    <section id="about-preview" className="overflow-x-clip">
      <SectionContainer>
        <div className="py-20 lg:py-40">
          <Reveal
            variant="rise"
            stagger={0.12}
            className="
              grid
              grid-cols-1
              lg:grid-cols-12
              gap-12
              lg:gap-10
            "
          >
            {/* Sticky title */}
            <div
              className="
                lg:col-span-4

                lg:sticky
                lg:top-32
                lg:self-start
              "
            >
              <p
                data-reveal
                className="
                  text-[11px]
                  uppercase
                  tracking-[0.3em]
                  text-neutral-400
                "
              >
                01 &mdash; Profile
              </p>

              <h2
                data-reveal
                className="
                  mt-6

                  text-3xl
                  sm:text-4xl
                  xl:text-5xl

                  font-light
                  leading-[0.95]
                  tracking-[-0.04em]
                "
              >
                A little
                <br />
                about me.
              </h2>
            </div>

            {/* Prose */}
            <div className="lg:col-span-8">
              <div className="max-w-2xl">
                <div
                  className="
                    space-y-6

                    text-lg
                    sm:text-xl

                    leading-relaxed
                    text-neutral-700
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
                    development&mdash;where thoughtful user experiences
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
                    View My Work &rarr;
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
