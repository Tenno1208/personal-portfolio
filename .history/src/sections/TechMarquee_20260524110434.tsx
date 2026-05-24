"use client";

import { motion } from "framer-motion";
import {
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiFramer,
  SiLaravel,
  SiTypescript,
  SiPython,
} from "@icons-pack/react-simple-icons";

// Data teknologi dengan warna hover premium
const techItems = [
  { name: "Next.js", icon: SiNextdotjs, color: "hover:text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]" },
  { name: "Laravel", icon: SiLaravel, color: "hover:text-[#FF2D20] drop-shadow-[0_0_10px_rgba(255,45,32,0.5)]" },
  { name: "React", icon: SiReact, color: "hover:text-[#61DAFB] drop-shadow-[0_0_10px_rgba(97,218,251,0.5)]" },
  { name: "Tailwind", icon: SiTailwindcss, color: "hover:text-[#06B6D4] drop-shadow-[0_0_10px_rgba(6,182,212,0.5)]" },
  { name: "TypeScript", icon: SiTypescript, color: "hover:text-[#3178C6] drop-shadow-[0_0_10px_rgba(49,120,198,0.5)]" },
  { name: "Framer", icon: SiFramer, color: "hover:text-[#F107A3] drop-shadow-[0_0_10px_rgba(241,7,163,0.5)]" },
  { name: "Python", icon: SiPython, color: "hover:text-[#3776AB] drop-shadow-[0_0_10px_rgba(55,118,171,0.5)]" },
];

export default function Terminal() {
  const wadahAnimasi = {
    sembunyi: { opacity: 0 },
    tampil: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.1 },
    },
  };

  const barisAnimasi = {
    sembunyi: { opacity: 0, x: -10 },
    tampil: { opacity: 1, x: 0, transition: { duration: 0.4 } },
  };

  return (
    <section className="py-12 md:py-20 px-4 md:px-6 bg-[#050816] relative overflow-hidden flex items-center justify-center">
      {/* Ambient Glow Latar Belakang */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="w-full max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="rounded-2xl md:rounded-[24px] overflow-hidden border border-white/10 bg-black/60 backdrop-blur-md shadow-[0_0_50px_rgba(34,211,238,0.12),inset_0_1px_1px_rgba(255,255,255,0.1)]"
        >
          {/* BAR ATAS HEADER */}
          <div className="flex items-center justify-between px-4 md:px-6 py-3 border-b border-white/5 bg-white/[0.03]">
            <div className="flex items-center gap-2 group/tombol">
              <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
            </div>
            <div className="text-[11px] md:text-xs font-mono text-zinc-500 select-none tracking-wide">
              bash — tech-intelligence
            </div>
            <div className="w-12" />
          </div>

          {/* KONTEN UTAMA TERMINAL */}
          <motion.div 
            variants={wadahAnimasi}
            initial="sembunyi"
            whileInView="tampil"
            viewport={{ once: true }}
            className="p-5 md:p-10 font-mono text-[11px] sm:text-sm md:text-base leading-6 md:leading-8"
          >
            <motion.p variants={barisAnimasi} className="text-cyan-400">
              <span className="text-zinc-600 select-none">&gt;</span> $ fetch system --skills
            </motion.p>

            <motion.p variants={barisAnimasi} className="text-zinc-400/80 pl-4 mt-0.5">
              indexing Core Tech-Stack...
            </motion.p>

            <motion.p variants={barisAnimasi} className="text-emerald-400 font-semibold mt-3 flex items-center gap-2">
              <span>✔</span> 7 Technologies successfully loaded:
            </motion.p>

            {/* Garis Pembatas */}
            <motion.div variants={barisAnimasi} className="h-[1px] bg-gradient-to-r from-white/10 via-transparent to-transparent my-4" />

            {/* SEKSI DAFTAR TEKNOLOGI (Gaya Grid Interaktif & Responsif HP) */}
            <motion.div 
              variants={barisAnimasi}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-4 my-6"
            >
              {techItems.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={idx}
                    className={`flex items-center gap-3 p-3 rounded-xl border border-white/[0.05] bg-white/[0.02] text-zinc-400 transition-all duration-300 cursor-pointer ${item.color} hover:border-white/20 hover:bg-white/[0.05] transform hover:-translate-y-0.5`}
                  >
                    <IconComponent size={20} color="currentColor" className="shrink-0" />
                    <span className="font-sans text-xs md:text-sm font-medium tracking-wide">
                      {item.name}
                    </span>
                  </div>
                );
              })}
            </motion.div>

            {/* Garis Pembatas Bawah */}
            <motion.div variants={barisAnimasi} className="h-[1px] bg-gradient-to-r from-white/10 via-transparent to-transparent my-4" />

            {/* Kalimat Penutup Sistem */}
            <motion.p variants={barisAnimasi} className="text-zinc-100 font-sans tracking-wide text-xs sm:text-base md:text-lg font-light leading-relaxed">
              Ready to deploy robust <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 font-medium">Full-Stack Architectures</span>.
            </motion.p>

            {/* Kursor Ketik Aktif */}
            <motion.div variants={barisAnimasi} className="mt-6 flex items-center gap-2">
              <span className="text-cyan-400 select-none">$</span>
              <div className="w-2 h-4 md:w-2.5 md:h-5 bg-cyan-400 shadow-[0_0_10px_#22d3ee] animate-[pulse_1s_infinite]" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}