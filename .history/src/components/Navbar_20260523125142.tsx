"use client";

import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50"
    >
      <div className="flex items-center gap-8 px-8 py-4 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_0_30px_rgba(0,0,0,.3)]">

        <h1 className="text-white font-bold text-lg">
          AVVATAR
        </h1>

        <div className="hidden md:flex items-center gap-6 text-sm text-zinc-400">

          <a href="#about" className="hover:text-cyan-400 transition">
            About
          </a>

          <a href="#projects" className="hover:text-cyan-400 transition">
            Projects
          </a>

          <a href="#contact" className="hover:text-cyan-400 transition">
            Contact
          </a>

        </div>

      </div>
    </motion.nav>
  );
}