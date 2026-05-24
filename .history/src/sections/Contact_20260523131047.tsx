"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-40 px-6 bg-[#070B1A]"
    >

      <div className="max-w-5xl mx-auto text-center">

        <motion.div
          initial={{
            opacity: 0,
            y: 80,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: .8,
          }}
          viewport={{
            once: true,
          }}
        >

          <p className="text-cyan-400 mb-4">
            CONTACT
          </p>

          <h2 className="text-5xl md:text-7xl font-black text-white leading-tight">
            Let’s Build <br />
            Something Amazing
          </h2>

          <p className="text-zinc-400 mt-8 text-lg max-w-2xl mx-auto leading-relaxed">
            Available for freelance projects,
            collaborations, and premium digital experiences.
          </p>

          <button className="mt-12 px-10 py-5 rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold shadow-[0_0_40px_rgba(34,211,238,.4)] hover:scale-105 transition duration-300">
            Contact Me
          </button>

        </motion.div>

      </div>
    </section>
  );
}