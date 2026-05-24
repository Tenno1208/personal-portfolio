"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, Building2 } from "lucide-react";
import React, { useEffect, useState } from "react";

// Perbarui data array experiences menjadi seperti ini:
const experiences = [
  {
    year: "2026 - Sekarang",
    title: "Lead Fullstack Developer",
    company: "ToolHub & Montera Finance",
    desc: "Memimpin perancangan ekosistem utilitas digital ToolHub berbasis privasi klien dan Google Gemini AI, serta mengarsiteki sistem keuangan premium Montera Finance dengan arsitektur decoupled Next.js 15 dan Laravel.",
  },
  {
    year: "2025 - 2026",
    title: "Frontend Developer",
    company: "Sistem Manajemen SPK (PDAM Kota Semarang)",
    desc: "Membangun antarmuka sistem manajemen Surat Perintah Kerja (SPK) menggunakan Next.js. Berfokus pada implementasi UI/UX yang bersih, efisien, integrasi penanganan file aman, serta performa aplikasi yang optimal.",
  },
  {
    year: "2024 - 2025",
    title: "Independent Web Developer",
    company: "Proyek Platform & Aplikasi Jastip",
    desc: "Mengembangkan aplikasi layanan pembelian (Jastip) dengan backend Laravel API yang teruji penuh serta membangun berbagai antarmuka interaktif responsif menggunakan Tailwind CSS.",
  },
];

export default function Experience() {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section 
      id="experience" 
      className="relative py-32 px-4 sm:px-6 bg-[#03050c] overflow-hidden"
    >
      {/* ================= BACKGROUND SYSTEM ================= */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-purple-500/[0.015] rounded-full blur-[140px]" />
        <div className="absolute bottom-1/3 left-1/4 w-[500px] h-[500px] bg-cyan-500/[0.015] rounded-full blur-[140px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        
        {/* ================= HEADER SECTION ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="mb-24 text-center lg:text-left"
        >
          <p className="text-cyan-400 uppercase tracking-[0.3em] mb-4 text-[10px] sm:text-xs font-bold">
            Rekam Jejak
          </p>
          <h2 className="text-[clamp(2rem,4.5vw,3.5rem)] font-black text-white leading-[1.15] tracking-tight">
            Pengalaman <br className="hidden lg:block" />
            <span className="bg-gradient-to-r from-zinc-100 via-zinc-300 to-zinc-500 bg-clip-text text-transparent">
              & Pengalaman Project
            </span>
          </h2>
        </motion.div>

        {/* ================= REFINED TIMELINE STRUCTURE ================= */}
        <div className="relative border-l border-white/[0.06] ml-2 sm:ml-6 space-y-12">
          
          {experiences.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: isMobile ? -20 : -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: i * 0.05 }}
              className="relative pl-8 sm:pl-12 group"
            >
              
              {/* INTERACTIVE TIMELINE DOT */}
              <div className="absolute left-[-6px] top-1.5 w-3 h-3 rounded-full bg-[#03050c] border border-white/20 transition-all duration-500 group-hover:border-cyan-400 group-hover:bg-cyan-400 group-hover:shadow-[0_0_15px_#22d3ee] z-10" />

              {/* CARD CONTAINER WITH SUBTLE GLASSMORPHISM */}
              <div className="rounded-[24px] border border-white/[0.03] bg-white/[0.01] backdrop-blur-xl p-6 sm:p-8 transition-all duration-500 group-hover:border-white/[0.06] group-hover:bg-white/[0.02] shadow-xl text-left">
                
                {/* META INFO ROW (YEAR & COMPANY) */}
                <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-[11px] font-bold tracking-wider uppercase text-zinc-500 mb-4">
                  <div className="flex items-center gap-1.5 text-cyan-400 bg-cyan-500/5 border border-cyan-500/10 px-2.5 py-1 rounded-full">
                    <Calendar size={11} />
                    <span>{item.year}</span>
                  </div>
                  <div className="flex items-center gap-1.5 border border-white/[0.05] bg-white/[0.01] px-2.5 py-1 rounded-full text-zinc-400">
                    <Building2 size={11} />
                    <span>{item.company}</span>
                  </div>
                </div>

                {/* ROLE TITLE */}
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-white/[0.02] border border-white/[0.05] hidden sm:flex items-center justify-center text-zinc-400 group-hover:text-white transition-colors duration-300">
                    <Briefcase size={14} />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-cyan-400 transition-colors duration-300">
                    {item.title}
                  </h3>
                </div>

                {/* DESCRIPTION */}
                <p className="text-xs sm:text-sm md:text-base text-zinc-400 mt-4 leading-relaxed font-normal">
                  {item.desc}
                </p>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}