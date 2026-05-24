"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen grid-bg flex items-center justify-center px-6">
      <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-10 items-center">

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
        >
          <p className="text-cyan-400 mb-4">
            FULLSTACK DEVELOPER
          </p>

          <h1 className="text-6xl lg:text-8xl font-bold leading-tight">
            Hi, I’m <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
              Avvatar
            </span>
          </h1>

          <p className="text-zinc-400 mt-6 max-w-xl text-lg">
            Building modern digital experiences with futuristic UI and smooth interaction.
          </p>

          <div className="flex gap-4 mt-8">
            <button className="px-7 py-4 rounded-2xl bg-cyan-500 hover:bg-cyan-400 transition glow">
              View Project
            </button>

            <button className="px-7 py-4 rounded-2xl border border-zinc-700 hover:border-cyan-400 transition">
              Contact Me
            </button>
          </div>
        </motion.div>

        <motion.div
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
          className="relative"
        >
          <div className="absolute inset-0 bg-purple-500 blur-[120px] opacity-30"></div>

          <div className="relative border border-white/10 bg-white/5 backdrop-blur-xl rounded-[32px] p-8 glow">
            <img
              src="/profile.png"
              alt=""
              className="rounded-3xl w-full object-cover"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}