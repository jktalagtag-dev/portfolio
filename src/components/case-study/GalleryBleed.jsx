import HeroContainer from "../ui/HeroContainer";
import Reveal from "../motion/Reveal";
import ParallaxImage from "../motion/ParallaxImage";

/*
 * Media gallery, product-page style: rows alternate between one
 * FULL-BLEED cinematic shot (edge to edge, parallax, no frame)
 * and a contained two-up pair — media-forward and borderless,
 * replacing the old bordered 16/10 grid. Captions sit small and
 * centered beneath their image. Renders nothing without images.
 *
 * Items with no `src` yet render a neutral placeholder frame instead
 * of a real image — same size/position, so a real screenshot can be
 * dropped in later (`src: "/projects/..."`) with no component change.
 */

function Media({ src, alt, intensity, className }) {
  if (src) {
    return (
      <ParallaxImage
        src={src}
        alt={alt}
        intensity={intensity}
        className={className}
      />
    );
  }

  return (
    <div
      className={`
        flex
        items-center
        justify-center

        border
        border-dashed
        border-neutral-300

        bg-neutral-100

        ${className}
      `}
    >
      <p
        className="
          text-[11px]
          uppercase
          tracking-[0.25em]
          text-neutral-400
        "
      >
        Screenshot coming soon
      </p>
    </div>
  );
}

export default function GalleryBleed({ images }) {
  if (!images?.length) return null;

  // Chunk into alternating rows: [bleed], [pair], [bleed], ...
  const rows = [];
  let i = 0;
  while (i < images.length) {
    if (rows.length % 2 === 0) {
      rows.push(images.slice(i, i + 1));
      i += 1;
    } else {
      rows.push(images.slice(i, i + 2));
      i += 2;
    }
  }

  const caption = (text) =>
    text ? (
      <figcaption
        className="
          mt-4

          text-center
          text-[11px]
          uppercase
          tracking-[0.25em]
          text-neutral-400
        "
      >
        {text}
      </figcaption>
    ) : null;

  return (
    <div className="space-y-16 lg:space-y-24">
      {rows.map((row, rowIndex) =>
        row.length === 1 ? (
          // Full-bleed row — outside every container.
          <figure key={row[0].caption || rowIndex}>
            <Media
              src={row[0].src}
              alt={row[0].caption || "Project screenshot"}
              intensity={8}
              className="
                w-full

                aspect-[4/3]
                sm:aspect-[16/9]
                lg:aspect-[21/10]
              "
            />
            {caption(row[0].caption)}
          </figure>
        ) : (
          // Contained two-up pair.
          <HeroContainer key={row[0].caption || rowIndex}>
            <Reveal
              variant="rise"
              stagger={0.12}
              className="
                grid
                grid-cols-1
                lg:grid-cols-2

                gap-10
                lg:gap-12
              "
            >
              {row.map((image) => (
                <figure key={image.caption || image.src} data-reveal>
                  <Media
                    src={image.src}
                    alt={image.caption || "Project screenshot"}
                    intensity={6}
                    className="aspect-[4/3] w-full"
                  />
                  {caption(image.caption)}
                </figure>
              ))}
            </Reveal>
          </HeroContainer>
        )
      )}
    </div>
  );
}
