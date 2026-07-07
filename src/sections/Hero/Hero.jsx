import HeroContainer from "../../components/ui/HeroContainer";

import CursorEffect from "./CursorEffect";
import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative"
    >
      <CursorEffect className="relative overflow-hidden">
        <HeroBackground />

        <HeroContainer className="relative z-10">
          <div
            className="
              relative

              min-h-[90svh]

              pt-32
              md:pt-36
              lg:pt-40

              pb-20
            "
          >
            <HeroContent />
          </div>
        </HeroContainer>
      </CursorEffect>
    </section>
  );
}