import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";

import PageTransition from "../components/motion/PageTransition";
import usePageMeta from "../utils/usePageMeta";
import HeroContainer from "../components/ui/HeroContainer";
import MaskText from "../components/motion/MaskText";
import ContactSection from "../sections/Contact/Contact";

export default function Contact() {
  usePageMeta(
    "Contact",
    "Open to frontend development roles, freelance projects, and collaborations — let's build something meaningful."
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
              Contact
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
                Let&rsquo;s build
              </MaskText>
              <MaskText as="span" className="block" delay={0.12}>
                something
              </MaskText>
              <MaskText as="span" className="block" delay={0.24}>
                meaningful.
              </MaskText>
            </h1>
          </div>
        </HeroContainer>

        <ContactSection />
      </main>

      <Footer />
    </PageTransition>
  );
}