"use client";

import { motion } from "framer-motion";

export default function Terminal() {
  return (
    <section className="py-40 px-6 bg-[#050816]">

      <div className="max-w-5xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
          className="rounded-[32px] overflow-hidden border border-white/10 bg-black shadow-[0_0_60px_rgba(34,211,238,.15)]"
        >

          {/* TOP BAR */}
          <div className="flex items-center gap-3 px-6 py-4 border-b border-white/10 bg-white/5">

            <div className="w-3 h-3 rounded-full bg-red-400" />

            <div className="w-3 h-3 rounded-full bg-yellow-400" />

            <div className="w-3 h-3 rounded-full bg-green-400" />

          </div>

          {/* CONTENT */}
          <div className="p-8 font-mono text-sm md:text-base leading-8">

            <p className="text-cyan-400">
              $ initializing portfolio...
            </p>

            <p className="text-zinc-400">
              loading futuristic interface...
            </p>

            <p className="text-zinc-400">
              connecting AI modules...
            </p>

            <p className="text-green-400 mt-6">
              ✔ system online
            </p>

            <p className="text-white mt-10">
              Hi, I build premium modern web experiences.
            </p>

            <p className="text-white">
              Specialized in frontend engineering,
              animations, and futuristic UI systems.
            </p>

            <div className="mt-10 flex items-center gap-2">

              <span className="text-cyan-400">
                $
              </span>

              <div className="w-3 h-6 bg-cyan-400 animate-pulse" />

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}