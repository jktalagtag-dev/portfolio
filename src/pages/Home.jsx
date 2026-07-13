import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";

import PageTransition from "../components/motion/PageTransition";
import usePageMeta from "../utils/usePageMeta";

import Hero from "../sections/Hero/Hero";
import ProjectShowcase from "../sections/Projects/ProjectShowcase";
import AboutTeaser from "../sections/Home/AboutTeaser";
import ContactCTA from "../sections/Home/ContactCTA";

export default function Home() {
  usePageMeta();

  return (
    <PageTransition>
      <Navbar />

      <main id="main-content">
        <Hero />

        {/*
          Opaque layer above the hero — as it scrolls up it
          covers the hero's fade/recede exit.
        */}
        <div
          className="
            relative
            z-10

            bg-[#F8F8F8]
          "
        >
          <ProjectShowcase />

          <AboutTeaser />

          <ContactCTA />

          <Footer />
        </div>
      </main>
    </PageTransition>
  );
}
