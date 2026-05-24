// ABOUT.tsx

"use client";

import { motion } from "framer-motion";

import {
  FaCode,
  FaServer,
  FaPalette,
} from "react-icons/fa";

import Reveal from "@/components/Reveal";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-40 px-6 bg-[#070B1A] overflow-hidden"
    >

      {/* BG GLOW */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-cyan-500/10 blur-[120px] rounded-full" />

      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-500/10 blur-[120px] rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto">

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

          <h2 className="text-5xl md:text-6xl font-black text-white leading-tight">
            Building Digital <br />
            Experiences
          </h2>

          <p className="text-zinc-400 mt-6 max-w-2xl leading-relaxed text-lg">
            Passionate about crafting immersive digital experiences
            with modern technologies, interactive animations,
            and futuristic user interfaces.
          </p>

        </motion.div>

        {/* GRID */}
        <Reveal>

          <div className="grid lg:grid-cols-3 gap-6">

            {/* CARD */}
            <motion.div
              whileHover={{ y: -10 }}
              className="rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl p-8 hover:shadow-[0_0_40px_rgba(34,211,238,.15)] transition duration-300"
            >

              <FaCode className="text-cyan-400 text-3xl mb-6" />

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
              className="rounded-[32px] border border-white/10 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 p-8 hover:shadow-[0_0_40px_rgba(168,85,247,.15)] transition duration-300"
            >

              <FaServer className="text-purple-400 text-3xl mb-6" />

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
              className="rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl p-8 hover:shadow-[0_0_40px_rgba(236,72,153,.15)] transition duration-300"
            >

              <FaPalette className="text-pink-400 text-3xl mb-6" />

              <h3 className="text-2xl font-bold text-white mb-4">
                UI / UX
              </h3>

              <p className="text-zinc-400 leading-relaxed">
                Designing futuristic interfaces
                focused on experience and aesthetics.
              </p>

            </motion.div>

          </div>

        </Reveal>

      </div>
    </section>
  );
}