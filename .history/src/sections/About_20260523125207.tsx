"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-40 px-6 bg-[#070B1A]"
    >
      <div className="max-w-7xl mx-auto">

        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <p className="text-cyan-400 mb-3">
            ABOUT ME
          </p>

          <h2 className="text-5xl font-black text-white">
            Building Digital <br />
            Experiences
          </h2>
        </motion.div>

        {/* GRID */}
        <div className="grid lg:grid-cols-3 gap-6">

          {/* CARD */}
          <motion.div
            whileHover={{ y: -10 }}
            className="rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl p-8"
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              Frontend
            </h3>

            <p className="text-zinc-400 leading-relaxed">
              Creating premium modern interfaces
              with animation and interactive experiences.
            </p>
          </motion.div>

          {/* CARD */}
          <motion.div
            whileHover={{ y: -10 }}
            className="rounded-[32px] border border-white/10 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 p-8"
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              Backend
            </h3>

            <p className="text-zinc-400 leading-relaxed">
              Building scalable backend systems
              with clean architecture and APIs.
            </p>
          </motion.div>

          {/* CARD */}
          <motion.div
            whileHover={{ y: -10 }}
            className="rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl p-8"
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              UI/UX
            </h3>

            <p className="text-zinc-400 leading-relaxed">
              Designing futuristic interfaces
              focused on experience and aesthetics.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}