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

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-5 inset-x-4 mx-auto z-50 w-auto max-w-5xl"
      >
        {/* Diperhalus dengan bg-white/[0.02] dan border tipis border-white/[0.05] */}
        <div className="flex items-center justify-between px-6 py-3.5 rounded-full border border-white/[0.05] bg-[#03050c]/40 backdrop-blur-md shadow-[0_10px_40px_rgba(0,0,0,0.3)]">
          
          {/* BRAND LOGO */}
          <a href="#" className="flex items-center gap-2 group">
            <span className="text-white font-bold text-sm tracking-[0.2em] transition-colors duration-300 group-hover:text-cyan-400">
              AVVATAR
            </span>
          </a>

          {/* DESKTOP LINKS */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-medium tracking-widest text-zinc-400 hover:text-white transition-colors duration-300 uppercase"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* DESKTOP CALL TO ACTION */}
          <div className="hidden md:block">
            <a href="#contact">
              <button className="text-xs font-bold tracking-widest uppercase text-cyan-400 hover:text-white transition-colors duration-300 cursor-pointer">
                Let's Talk &rarr;
              </button>
            </a>
          </div>

          {/* MOBILE TRIGGER */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-zinc-400 hover:text-white transition-colors cursor-pointer"
            >
              {isOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>

        </div>
      </motion.nav>

      {/* MOBILE DRAWER */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-4 top-20 z-40 md:hidden rounded-2xl border border-white/[0.05] bg-[#03050c]/95 backdrop-blur-xl p-6 shadow-2xl flex flex-col gap-4"
          >
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-xs font-semibold tracking-widest uppercase text-zinc-400 hover:text-cyan-400 py-2 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}