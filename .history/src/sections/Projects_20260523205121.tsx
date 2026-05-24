"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

// Menggunakan data proyek asli milikmu sendiri
const projects = [
  {
    title: "Montera Finance Premium",
    desc: "A high-end personal finance management platform built with Next.js and Laravel, featuring integrated AI financial components.",
    tags: ["Next.js", "Laravel", "AI Integration", "Tailwind"],
    image: "/projects/montera.jpg", // Ganti dengan path mockup screenshot web Montera kamu
    link: "https://montera.finance", // Ganti dengan domain asli web Montera kamu
  },
  {
    title: "SPK Management System",
    desc: "A professional Digital Work Order (SPK) application tailored for local utility services (PDAM Kota Semarang), integrating secure digital signatures.",
    tags: ["Laravel", "Tailwind CSS", "Digital Signature", "MySQL"],
    image: "/projects/spk-pdam.jpg", // Ganti dengan path mockup screenshot web SPK kamu
    link: "https://spk.pdamsemarang.co.id", // Ganti dengan domain asli web SPK kamu
  },
  {
    title: "Jastip Purchase Platform",
    desc: "A production-ready procurement and purchasing service application built with a decoupled Laravel backend architecture and optimized REST API.",
    tags: ["Laravel API", "Next.js", "Decoupled Architecture", "Postman Verified"],
    image: "/projects/jastip.jpg", // Ganti dengan path mockup screenshot web Jastip kamu
    link: "https://jastip-app.com", // Ganti dengan domain asli web Jastip kamu
  },
  {
    title: "Class of 2026 Farewell Web",
    desc: "An immersive digital school memory book featuring dynamic local music players, smooth motion galleries, and interactive memory walls.",
    tags: ["React", "Framer Motion", "Tailwind", "Web Audio API"],
    image: "/projects/perpisahan2026.jpg", // Ganti dengan path mockup screenshot web perpisahan kamu
    link: "https://perpisahan2026.com", // Ganti dengan domain asli web perpisahan kamu
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative py-32 px-4 sm:px-6 bg-[#03050c] overflow-hidden"
    >
      {/* Background Glow Ringan */}
      <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-cyan-500/[0.02] rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto">
        
        {/* ================= HEADER SECTION ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="mb-24 text-center lg:text-left"
        >
          <p className="text-cyan-400 uppercase tracking-[0.3em] mb-4 text-[10px] sm:text-xs font-bold">
            Selected Works
          </p>
          <h2 className="text-[clamp(2rem,4.5vw,3.5rem)] font-black text-white leading-[1.15] tracking-tight">
            Featured <br className="hidden lg:block" />
            <span className="bg-gradient-to-r from-zinc-100 via-zinc-300 to-zinc-500 bg-clip-text text-transparent">
              Case Studies
            </span>
          </h2>
        </motion.div>

        {/* ================= PROJECT LIST (ELEGANT LAYOUT) ================= */}
        <div className="flex flex-col gap-16 md:gap-24 w-full">
          {projects.map((project, i) => (
            <motion.a
              key={i}
              href={project.link}
              target="_blank" // Otomatis membuka domain web proyek di tab baru saat di-klik
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="group grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center cursor-pointer pb-12 border-b border-white/[0.05] last:border-none"
            >
              
              {/* SISI MOCKUP GAMBAR (6/12 Kolom) */}
              <div className="lg:col-span-6 relative aspect-[16/10] w-full rounded-2xl border border-white/[0.06] bg-white/[0.01] overflow-hidden shadow-2xl">
                {/* Efek Inner Glow pada Image Frame */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.02] to-transparent z-10 pointer-events-none" />
                
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover select-none filter brightness-[0.95] group-hover:brightness-105 group-hover:scale-[1.03] transition-all duration-700 ease-out"
                />
              </div>

              {/* SISI DETAIL KONTEN TEXT (6/12 Kolom) */}
              <div className="lg:col-span-6 flex flex-col items-start text-left">
                {/* Lencana/Tags Teknologi */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span 
                      key={idx}
                      className="text-[10px] font-bold tracking-wider uppercase text-zinc-500 border border-white/[0.05] px-2.5 py-1 rounded-full bg-white/[0.01]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Judul Proyek dengan Indikator Tautan */}
                <div className="flex items-center gap-3 group/title">
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-cyan-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <ArrowUpRight size={18} className="text-zinc-500 group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 shrink-0" />
                </div>

                {/* Deskripsi Proyek */}
                <p className="text-zinc-400 text-sm sm:text-base mt-4 leading-relaxed font-normal">
                  {project.desc}
                </p>

                {/* Tombol Tautan Simpel Premium */}
                <span className="text-xs font-bold tracking-widest uppercase text-zinc-500 group-hover:text-white transition-colors duration-300 mt-6 border-b border-zinc-700 pb-1">
                  Explore Platform
                </span>
              </div>

            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
}