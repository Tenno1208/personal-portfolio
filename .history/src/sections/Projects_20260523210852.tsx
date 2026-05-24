"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Globe } from "lucide-react";
import React, { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { 
  SiNextdotjs, 
  SiReact, 
  SiTailwindcss, 
  SiLaravel, 
  SiFramer 
} from "@icons-pack/react-simple-icons";

// Struktur data proyek dengan komponen ikon logo asli
const projects = [
  {
    title: "ToolHub Ecosystem",
    desc: "Sebuah platform ekosistem digital serbaguna yang menyediakan 44 alat utilitas mulai dari Portfolio Generator, TikTok Downloader, AI Assistant, hingga instrumen enkripsi developer & security.",
    image: "/projects/project1.png",
    url: "https://toolhub-9wh5.vercel.app/",
    github: "https://github.com/Tenno1208/toolhub",
    tech: [
      { name: "Next.js", icon: SiNextdotjs, color: "group-hover/tag:text-white" },
      { name: "Tailwind", icon: SiTailwindcss, color: "group-hover/tag:text-[#38BDF8]" },
      { name: "Laravel API", icon: SiLaravel, color: "group-hover/tag:text-[#FF2D20]" },
    ],
  },
  {
    title: "Web Perpisahan Kelas",
    desc: "Portal kenangan kelulusan sekolah interaktif yang dirancang khusus untuk mengabadikan momen bersama, dilengkapi dengan pemutar musik lokal, galeri foto, dan animasi modern.",
    image: "/projects/project2.png",
    url: "https://graduation-web-two.vercel.app/",
    github: "https://github.com/Tenno1208/web-kelas",
    tech: [
      { name: "React", icon: SiReact, color: "group-hover/tag:text-[#61DAFB]" },
      { name: "Framer Motion", icon: SiFramer, color: "group-hover/tag:text-[#0055FF]" },
      { name: "Tailwind", icon: SiTailwindcss, color: "group-hover/tag:text-[#38BDF8]" },
    ],
  },
];

export default function Projects() {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#03050c] py-32 px-4 sm:px-6"
    >
      {/* BACKGROUND LUMINANCE SYSTEM */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,.02),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,.02),transparent_30%)] pointer-events-none" />
      <div className="absolute top-1/4 left-0 h-[500px] w-[500px] rounded-full bg-cyan-500/[0.015] blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 h-[500px] w-[500px] rounded-full bg-purple-500/[0.015] blur-[130px] pointer-events-none" />

      {/* BACKGROUND MATRIX GRID */}
      <div className="absolute inset-0 opacity-[0.012] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:45px_45px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-5xl">
        
        {/* HEADER SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="mb-20 text-center lg:text-left"
        >
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-cyan-400">
            Karya Pilihan
          </p>

          <h2 className="text-[clamp(2rem,4.5vw,3.5rem)] font-black leading-tight text-white tracking-tight">
            Eksplorasi <br className="hidden lg:block" />
            <span className="bg-gradient-to-r from-zinc-100 via-zinc-300 to-zinc-500 bg-clip-text text-transparent">
              Proyek Digital
            </span>
          </h2>

          <p className="mt-5 max-w-xl text-sm sm:text-base leading-relaxed text-zinc-400 font-medium mx-auto lg:mx-0">
            Kumpulan platform web yang dirancang dengan fokus pada performa tinggi, antarmuka yang bersih, dan arsitektur kode modern.
          </p>
        </motion.div>

        {/* PROJECT GRID STRUCTURE */}
        <div className="grid gap-8 md:grid-cols-2 w-full">
          {projects.map((project, i) => (
            <motion.a
              key={i}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={isMobile ? {} : { y: -6 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="group relative flex flex-col overflow-hidden rounded-[32px] border border-white/[0.04] bg-white/[0.01] backdrop-blur-2xl transition-all duration-300 cursor-pointer shadow-xl"
            >
              {/* IMAGE WRAPPER MOCKUP */}
              <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-white/[0.03] bg-[#070b1e]/30">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition duration-700 ease-out filter brightness-[0.93] group-hover:brightness-105 group-hover:scale-[1.02]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#03050c] via-transparent to-transparent opacity-40" />

                {/* FLOATING ARROW INDICATOR */}
                <div className="absolute top-4 right-4 rounded-xl border border-white/[0.06] bg-[#03050c]/60 p-2.5 backdrop-blur-md opacity-80 group-hover:opacity-100 transition duration-300">
                  <ArrowUpRight className="text-zinc-400 group-hover:text-white transition-colors" size={15} />
                </div>
              </div>

              {/* CONTENT AREA */}
              <div className="p-6 sm:p-8 flex flex-col flex-grow justify-between text-left">
                <div>
                  {/* LENCANA TEKNOLOGI PREMIUM (DENGAN LOGO ICON) */}
                  <div className="mb-5 flex flex-wrap gap-2">
                    {project.tech.map((t, idx) => {
                      const IconComponent = t.icon;
                      return (
                        <div
                          key={idx}
                          className="group/tag flex items-center gap-1.5 rounded-full border border-white/[0.04] bg-white/[0.01] px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-zinc-500 transition-colors duration-300 hover:border-white/[0.1] hover:bg-white/[0.03]"
                        >
                          <IconComponent size={11} color="currentColor" className={`transition-colors duration-300 ${t.color}`} />
                          <span className="transition-colors duration-300 group-hover/tag:text-zinc-200">{t.name}</span>
                        </div>
                      );
                    })}
                  </div>

                  {/* PROJECT TITLE */}
                  <h3 className="mb-3 text-xl font-bold tracking-tight text-white transition duration-300 group-hover:text-cyan-400">
                    {project.title}
                  </h3>

                  {/* PROJECT DESCRIPTION */}
                  <p className="text-xs sm:text-sm leading-relaxed text-zinc-400 font-normal">
                    {project.desc}
                  </p>
                </div>

                {/* PREMIUM CARD FOOTER */}
                <div className="mt-8 flex items-center justify-between border-t border-white/[0.03] pt-4">
                  <div className="flex items-center gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()} // Mencegah bentrok trigger klik
                      className="rounded-xl border border-white/[0.06] bg-white/[0.01] p-2.5 text-zinc-400 transition hover:border-white/20 hover:text-white hover:bg-white/[0.03]"
                    >
                      <FaGithub size={15} />
                    </a>

                    <div className="rounded-xl border border-white/[0.04] bg-white/[0.01] p-2.5 text-zinc-600">
                      <Globe size={15} />
                    </div>
                  </div>

                  <span className="text-[11px] font-bold tracking-widest uppercase text-zinc-500 group-hover:text-white transition-colors duration-300">
                    Buka Platform &rarr;
                  </span>
                </div>
              </div>

              {/* OUTLINE AMBIENT HOVER EFFECT */}
              <div className="absolute inset-0 rounded-[32px] border border-transparent group-hover:border-white/[0.04] transition duration-500 pointer-events-none" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}