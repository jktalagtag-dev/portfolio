import SectionContainer from "../components/ui/SectionContainer";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200">
      <SectionContainer>

        <div
          className="
            py-8
            flex
            flex-col
            md:flex-row
            md:items-center
            md:justify-between
            gap-4
          "
        >

          <p
            className="
              text-sm
              text-neutral-400
            "
          >
            © 2026 John Karlo Talagtag
          </p>

          <p
            className="
              text-sm
              text-neutral-400
            "
          >
            Designed & Developed with React,
            Tailwind CSS, and Framer Motion.
          </p>

        </div>

      </SectionContainer>
    </footer>
  );
}