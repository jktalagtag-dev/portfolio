import { motion } from "framer-motion";

import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";

import ContactSection from "../sections/Contact/Contact";

export default function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="overflow-x-hidden"
    >
      <Navbar />

      <main className="pt-32 lg:pt-40">
        <section className="px-8 lg:px-16 pb-20">
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
              CONTACT
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
              Let's build
              <br />
              something
              <br />
              meaningful.
            </h1>
          </div>
        </section>

        <ContactSection />
      </main>

      <Footer />
    </motion.div>
  );
}