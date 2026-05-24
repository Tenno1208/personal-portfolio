"use client";

import { motion } from "framer-motion";

export default function Terminal() {
  // Pengaturan animasi agar teks muncul satu per satu (efek mengetik)
  const wadahAnimasi = {
    sembunyi: { opacity: 0 },
    tampil: {
      opacity: 1,
      transition: { staggerChildren: 0.4, delayChildren: 0.2 },
    },
  };

  const barisAnimasi = {
    sembunyi: { opacity: 0, x: -10 },
    tampil: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    // Mengubah padding agar pas di tengah layar dan tidak terlalu ke bawah
    <section className="py-12 md:py-20 px-4 md:px-6 bg-[#050816] relative overflow-hidden flex items-center justify-center">
      {/* Efek Cahaya Dekoratif di Latar Belakang */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[200px] h-[200px] bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Lebar maksimal disesuaikan agar stabil di tengah */}
      <div className="w-full max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="rounded-2xl md:rounded-[24px] overflow-hidden border border-white/10 bg-black/60 backdrop-blur-md shadow-[0_0_50px_rgba(34,211,238,0.12),inset_0_1px_1px_rgba(255,255,255,0.1)]"
        >
          {/* BAR ATAS (Gaya Mac) */}
          <div className="flex items-center justify-between px-4 md:px-6 py-3 border-b border-white/5 bg-white/[0.03]">
            {/* Tombol Window */}
            <div className="flex items-center gap-2 group/tombol">
              <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#FF5F56] relative flex items-center justify-center cursor-pointer">
                <span className="absolute text-[8px] text-black/60 font-bold opacity-0 group-hover/tombol:opacity-100 transition-opacity">×</span>
              </div>
              <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#FFBD2E] relative flex items-center justify-center cursor-pointer">
                <span className="absolute text-[8px] text-black/60 font-bold opacity-0 group-hover/tombol:opacity-100 transition-opacity">-</span>
              </div>
              <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#27C93F] relative flex items-center justify-center cursor-pointer">
                <span className="absolute text-[7px] text-black/60 font-bold opacity-0 group-hover/tombol:opacity-100 transition-opacity">+</span>
              </div>
            </div>

            {/* Judul Terminal */}
            <div className="text-[11px] md:text-xs font-mono text-zinc-500 select-none tracking-wide">
              bash — portfolio
            </div>

            {/* Elemen kosong untuk penyeimbang posisi */}
            <div className="w-12 md:w-14" />
          </div>

          {/* KONTEN UTAMA TERMINAL */}
          <motion.div 
            variants={wadahAnimasi}
            initial="sembunyi"
            whileInView="tampil"
            viewport={{ once: true }}
            className="p-5 md:p-10 font-mono text-[11px] sm:text-sm md:text-base leading-6 md:leading-8 selection:bg-cyan-500/30 selection:text-cyan-200"
          >
            <motion.p variants={barisAnimasi} className="text-cyan-400 flex items-center gap-2">
              <span className="text-zinc-600 select-none">&gt;</span> $ initializing portfolio...
            </motion.p>

            <motion.p variants={barisAnimasi} className="text-zinc-400/80 pl-4 mt-0.5">
              loading futuristic interface...
            </motion.p>

            <motion.p variants={barisAnimasi} className="text-zinc-400/80 pl-4">
              connecting AI modules...
            </motion.p>

            <motion.p variants={barisAnimasi} className="text-emerald-400 font-semibold mt-3 flex items-center gap-2">
              <span>✔</span> system online & secure
            </motion.p>

            {/* Garis pembatas tipis yang elegan */}
            <motion.div variants={barisAnimasi} className="h-[1px] bg-gradient-to-r from-white/10 via-transparent to-transparent my-5" />

            {/* Kalimat Utama */}
            <motion.p variants={barisAnimasi} className="text-zinc-100 font-sans tracking-wide text-xs sm:text-base md:text-lg font-light leading-relaxed">
              Hi, I build <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 font-medium">premium modern web experiences</span>.
            </motion.p>

            <motion.p variants={barisAnimasi} className="text-zinc-400 font-sans tracking-wide text-xs sm:text-base md:text-lg font-light mt-1.5 leading-relaxed">
              Specialized in frontend engineering, interactive animations, and futuristic UI systems.
            </motion.p>

            {/* Kursor Ketik yang Berkedip */}
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