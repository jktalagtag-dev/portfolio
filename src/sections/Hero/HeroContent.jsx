import HeroHeadline from "./HeroHeadline";
import HeroMeta from "./HeroMeta";

/*
 * Bottom-anchored hero composition: the upper viewport is
 * deliberately empty, the oversized headline and its
 * metadata cluster sit low, so scrolling in from the top
 * lands on quiet space before the statement.
 */

export default function HeroContent() {
  return (
    <div
      className="
        flex
        flex-col
        justify-end

        min-h-[85svh]
        sm:min-h-[88svh]
        lg:min-h-svh

        pt-20
        sm:pt-24
        lg:pt-32

        pb-10
        lg:pb-10
      "
    >
      <HeroHeadline />

      <HeroMeta />
    </div>
  );
}
