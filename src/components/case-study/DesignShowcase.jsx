import Reveal from "../motion/Reveal";

/*
 * Design gallery — figures rise in sequence. (Renders only when a
 * project has gallery images; kept image-natural so real
 * screenshots aren't cropped to a forced ratio.)
 */

export default function DesignShowcase({ images }) {
  return (
    <Reveal
      variant="rise"
      stagger={0.12}
      className="
        grid
        md:grid-cols-2

        gap-6
        lg:gap-10
      "
    >
      {images.map((image, index) => (
        <figure
          key={image.src}
          data-reveal
          className={`group ${index % 3 === 0 ? "md:col-span-2" : ""}`}
        >
          {/* Fixed frame ratio so the grid reserves space before the
              image arrives (no layout shift on lazy load). */}
          <div
            className="
              overflow-hidden
              border
              border-neutral-200

              aspect-[16/10]
            "
          >
            <img
              src={image.src}
              alt={image.caption}
              loading="lazy"
              decoding="async"
              className="
                h-full
                w-full
                object-cover

                transition-transform
                duration-700
                ease-[cubic-bezier(0.16,1,0.3,1)]

                will-change-transform

                group-hover:scale-[1.02]
              "
            />
          </div>

          {image.caption && (
            <figcaption
              className="
                mt-4

                text-[11px]
                uppercase
                tracking-[0.25em]
                text-neutral-400
              "
            >
              {image.caption}
            </figcaption>
          )}
        </figure>
      ))}
    </Reveal>
  );
}
