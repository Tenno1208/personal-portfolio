"use client";

import { motion } from "framer-motion";
import {
  GitHub,
  Linkedin,
  Instagram,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#050816]">

      {/* BACKGROUND */}
      <div className="absolute inset-0">
        <div className="absolute w-[500px] h-[500px] bg-cyan-500/20 blur-[120px] rounded-full top-[-100px] left-[-100px]" />

        <div className="absolute w-[500px] h-[500px] bg-purple-500/20 blur-[120px] rounded-full bottom-[-100px] right-[-100px]" />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-sm mb-6">
            FULLSTACK DEVELOPER
          </div>

          <h1 className="text-5xl lg:text-7xl font-black leading-tight text-white">
            Hi, I’m <br />

            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Avvatar
            </span>
          </h1>

          <p className="text-zinc-400 text-lg mt-6 max-w-xl leading-relaxed">
            Building futuristic web experiences with
            smooth interactions, modern UI, and
            high-performance frontend systems.
          </p>

          {/* BUTTON */}
          <div className="flex flex-wrap gap-4 mt-10">

            <button className="px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold hover:scale-105 transition-all shadow-[0_0_30px_rgba(34,211,238,.4)]">
              View Projects
            </button>

            <button className="px-8 py-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md hover:border-cyan-400 transition-all">
              Download CV
            </button>

          </div>

          {/* SOCIAL */}
          <div className="flex gap-5 mt-10">

            <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-cyan-500/20 transition">
              <GitHub />
            </div>

            <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-cyan-500/20 transition">
              <Linkedin />
            </div>

            <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-cyan-500/20 transition">
              <Instagram />
            </div>

          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: [0, -15, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
          className="relative"
        >

          {/* GLOW */}
          <div className="absolute inset-0 bg-purple-500/30 blur-[100px]" />

          {/* CARD */}
          <div className="relative rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-2xl p-5 shadow-[0_0_60px_rgba(168,85,247,.2)]">

            <img
              src="/profile.jpg"
              alt="profile"
              className="w-full h-[600px] object-cover rounded-[30px]"
            />

          </div>

        </motion.div>

      </div>
    </section>
  );
}