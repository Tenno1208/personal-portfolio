"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <>
      {/* ================= DESKTOP & TABLET NAVBAR ================= */}
      <motion.nav
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-4xl"
      >
        <div className="flex items-center justify-between px-6 md:px-8 py-3 md:py-4 rounded-full border border-white/[0.08] bg-[#070b1e]/60 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.4)] ring-1 ring-white/[0.05]">
          
          {/* LOGO */}
          <a href="#" className="flex items-center gap-2 group">
            <h1 className="text-white font-black text-base md:text-lg tracking-wider group-hover:text-cyan-400 transition-colors duration-300">
              AVVATAR
            </h1>
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]" />
          </a>

          {/* MENU UTAMA (DESKTOP) */}
          <div className="hidden md:flex items-center gap-1 relative">
            {navLinks.map((link, idx) => (
              <a
                key={link.name}
                href={link.href}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="relative px-4 py-2 text-sm font-medium text-zinc-400 hover:text-white transition-colors duration-300 z-10"
              >
                {link.name}
                
                {/* EFEK PILL MELAYANG SAAT DI-HOVER */}
                <AnimatePresence>
                  {hoveredIndex === idx && (
                    <motion.span
                      layoutId="navHoverBg"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute inset-0 bg-white/[0.04] border border-white/[0.05] rounded-full -z-10"
                    />
                  )}
                </AnimatePresence>
              </a>
            ))}
          </div>

          {/* TOMBOL AKSI KANAN (DESKTOP) */}
          <div className="hidden md:block">
            <a href="#contact">
              <button className="px-5 py-2 rounded-full text-xs font-bold border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 hover:bg-cyan-500 hover:text-white hover:shadow-[0_0_25px_rgba(34,211,238,0.4)] transition-all duration-300 cursor-pointer">
                Let's Talk &rarr;
              </button>
            </a>
          </div>

          {/* HAMBURGER TRIGGER (MOBILE ONLY) */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-zinc-400 hover:text-white transition-colors p-1 cursor-pointer"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

        </div>
      </motion.nav>

      {/* ================= MOBILE EXPANDED DRAWER ================= */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed inset-x-4 top-20 z-40 md:hidden rounded-3xl border border-white/[0.08] bg-[#070b1e]/95 backdrop-blur-2xl p-6 shadow-2xl flex flex-col gap-6 ring-1 ring-white/[0.05]"
          >
            {/* LINK MENU MOBILE */}
            <div className="flex flex-col gap-4 text-left">
              {navLinks.map((link, idx) => (
                <motion.a
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-base font-bold text-zinc-400 hover:text-cyan-400 border-b border-white/[0.03] pb-3 transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>

            {/* TOMBOL AKSI MOBILE */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="w-full"
            >
              <a href="#contact" onClick={() => setIsOpen(false)}>
                <button className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-sm shadow-[0_0_30px_rgba(34,211,238,0.2)]">
                  Let's Talk &rarr;
                </button>
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}