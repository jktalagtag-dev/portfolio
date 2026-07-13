import { Link } from "react-router-dom";

import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";

import PageTransition from "../components/motion/PageTransition";
import usePageMeta from "../utils/usePageMeta";

export default function NotFound() {
  usePageMeta("Page not found");

  return (
    <PageTransition>
      <Navbar />

      <main
        id="main-content"
        className="
          flex
          min-h-svh

          flex-col
          items-center
          justify-center

          px-5
          text-center
        "
      >
        <p
          className="
            text-[11px]
            uppercase
            tracking-[0.3em]
            text-neutral-400
          "
        >
          404
        </p>

        <h1
          className="
            mt-6

            text-[3rem]
            sm:text-[5rem]
            lg:text-[6rem]

            font-light
            leading-[0.95]
            tracking-[-0.06em]
          "
        >
          Page not found.
        </h1>

        <p
          className="
            mt-8

            max-w-md

            text-base
            sm:text-lg

            leading-relaxed
            text-neutral-500
          "
        >
          The page you're looking for doesn't exist or
          has been moved.
        </p>

        <Link
          to="/"
          className="
            mt-12

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
          ← Back to Home
        </Link>
      </main>

      <Footer />
    </PageTransition>
  );
}
