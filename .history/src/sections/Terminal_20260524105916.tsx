"use client";

import { motion } from "framer-motion";

export default function Terminal() {
  // Variasi animasi untuk efek mengetik per baris teks
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.4, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="py-24 md:py-40 px-4 md:px-6 bg-[#050816] relative overflow-hidden">
      {/* Efek Ambience Glow Tambahan di Latar Belakang */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[200px] h-[200px] bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="rounded-2xl md:rounded-[24px] overflow-hidden border border-white/10 bg-black/60 backdrop-blur-md shadow-[0_0_50px_rgba(34,211,238,0.12),inset_0_1px_1px_rgba(255,255,255,0.1)]"
        >
          {/* TOP BAR / HEADER */}
          <div className="flex items-center justify-between px-4 md:px-6 py-3.5 border-b border-white/5 bg-white/[0.03]">
            {/* Window Controls (Mac Style) */}
            <div className="flex items-center gap-2 group/controls">
              <div className="w-3 h-3 rounded-full bg-[#FF5F56] relative flex items-center justify-center cursor-pointer">
                <span className="absolute text-[8px] text-black/60 font-bold opacity-0 group-hover/controls:opacity-100 transition-opacity">×</span>
              </div>
              <div className="w-3 h-3 rounded-full bg-[#FFBD2E] relative flex items-center justify-center cursor-pointer">
                <span className="absolute text-[8px] text-black/60 font-bold opacity-0 group-hover/controls:opacity-100 transition-opacity">-</span>
              </div>
              <div className="w-3 h-3 rounded-full bg-[#27C93F] relative flex items-center justify-center cursor-pointer">
                <span className="absolute text-[7px] text-black/60 font-bold opacity-0 group-hover/controls:opacity-100 transition-opacity">+</span>
              </div>
            </div>

            {/* Terminal Title */}
            <div className="text-xs font-mono text-zinc-500 select-none tracking-wide pr-8 md:pr-0">
              bash — portfolio
            </div>

            {/* Dummy element for flex centering balance on desktop */}
            <div className="hidden md:block w-14" />
          </div>

          {/* TERMINAL CONTENT */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="p-5 md:p-10 font-mono text-xs sm:text-sm md:text-base leading-7 md:leading-8 selection:bg-cyan-500/30 selection:text-cyan-200"
          >
            <motion.p variants={itemVariants} className="text-cyan-400 flex items-center gap-2">
              <span className="text-zinc-600 select-none">&gt;</span> $ initializing portfolio...
            </motion.p>

            <motion.p variants={itemVariants} className="text-zinc-400/80 pl-4 mt-1">
              loading futuristic interface...
            </motion.p>

            <motion.p variants={itemVariants} className="text-zinc-400/80 pl-4">
              connecting AI modules...
            </motion.p>

            <motion.p variants={itemVariants} className="text-emerald-400 font-semibold mt-4 flex items-center gap-2">
              <span>✔</span> system online & secure
            </motion.p>

            {/* Divider dekoratif tipis di dalam terminal */}
            <motion.div variants={itemVariants} className="h-[1px] bg-gradient-to-r from-white/10 via-transparent to-transparent my-6" />

            <motion.p variants={itemVariants} className="text-zinc-100 font-sans tracking-wide text-sm sm:text-base md:text-lg font-light leading-relaxed">
              Hi, I build <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 font-medium">premium modern web experiences</span>.
            </motion.p>

            <motion.p variants={itemVariants} className="text-zinc-400 font-sans tracking-wide text-sm sm:text-base md:text-lg font-light mt-2 leading-relaxed">
              Specialized in frontend engineering, interactive animations, and futuristic UI systems.
            </motion.p>

            {/* Kursor Aktif yang Berkedip */}
            <motion.div variants={itemVariants} className="mt-8 flex items-center gap-2">
              <span className="text-cyan-400 select-none">$</span>
              <div className="w-2.5 h-5 bg-cyan-400 shadow-[0_0_10px_#22d3ee] animate-[pulse_1s_infinite]" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}