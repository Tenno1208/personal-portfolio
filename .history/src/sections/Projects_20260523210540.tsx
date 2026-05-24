"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Globe } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Toolhub Procurement",
    desc: "A production-ready logistics and purchasing platform designed with a decoupled architecture, high-performance Laravel backend, and a smooth user experience.",
    image: "/projects/project1.png",
    tech: ["Next.js", "Tailwind", "Laravel API"],
    url: "https://toolhub-9wh5.vercel.app/",
    github: "https://github.com/Tenno1208/toolhub",
  },
  {
    title: "Class of 2026 Farewell Web",
    desc: "An immersive, interactive graduation portal built to preserve school memories featuring dynamic music players, elegant photo galleries, and fluid animations.",
    image: "/projects/project2.png",
    tech: ["React", "Framer Motion", "Tailwind"],
    url: "https://graduation-web-two.vercel.app/",
    github: "https://github.com/Tenno1208/web-kelas",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#03050c] py-32 px-4 sm:px-6"
    >
      {/* BACKGROUND SYSTEM */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,.03),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,.03),transparent_30%)] pointer-events-none" />
      <div className="absolute top-1/4 left-0 h-[500px] w-[500px] rounded-full bg-cyan-500/[0.02] blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 h-[500px] w-[500px] rounded-full bg-purple-500/[0.02] blur-[130px] pointer-events-none" />

      {/* MATRIX BACKGROUND GRID (Diperhalus) */}
      <div className="absolute inset-0 opacity-[0.015] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none" />

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
            Selected Works
          </p>

          <h2 className="text-[clamp(2rem,4.5vw,3.5rem)] font-black leading-tight text-white tracking-tight">
            Featured <br className="hidden lg:block" />
            <span className="bg-gradient-to-r from-zinc-100 via-zinc-300 to-zinc-500 bg-clip-text text-transparent">
              Case Studies
            </span>
          </h2>

          <p className="mt-5 max-w-xl text-sm sm:text-base leading-relaxed text-zinc-400 font-medium mx-auto lg:mx-0">
            A curated showcase of applications built with high performance, clean interfaces, and scalable structures in mind.
          </p>
        </motion.div>

        {/* PROJECT STRUCTURE (2-Column Responsive Grid) */}
        <div className="grid gap-8 md:grid-cols-2 w-full">
          {projects.map((project, i) => (
            <motion.a
              key={i}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={isMobile ? {} : { y: -8 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="group relative flex flex-col overflow-hidden rounded-[32px] border border-white/[0.04] bg-white/[0.01] backdrop-blur-2xl transition-all duration-300 cursor-pointer shadow-xl"
            >
              {/* IMAGE WRAPPER */}
              <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-white/[0.03]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition duration-700 ease-out filter brightness-[0.95] group-hover:brightness-105 group-hover:scale-[1.03]"
                />

                {/* VISUAL OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#03050c] via-transparent to-transparent opacity-40" />

                {/* FLOATING PREVIEW ICON */}
                <div className="absolute top-4 right-4 rounded-xl border border-white/[0.08] bg-[#03050c]/50 p-2.5 backdrop-blur-md opacity-80 group-hover:opacity-100 transition duration-300">
                  <ArrowUpRight className="text-zinc-400 group-hover:text-white transition-colors" size={16} />
                </div>
              </div>

              {/* CONTENT INFO BLOCK */}
              <div className="p-6 sm:p-8 flex flex-col flex-grow justify-between text-left">
                <div>
                  {/* TECH LABELS */}
                  <div className="mb-4 flex flex-wrap gap-1.5">
                    {project.tech.map((item, idx) => (
                      <span
                        key={idx}
                        className="rounded-full border border-white/[0.04] bg-white/[0.02] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-zinc-500"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  {/* TITLE */}
                  <h3 className="mb-3 text-xl font-bold tracking-tight text-white transition duration-300 group-hover:text-cyan-400">
                    {project.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p className="text-xs sm:text-sm leading-relaxed text-zinc-400 font-normal">
                    {project.desc}
                  </p>
                </div>

                {/* EXTENDED INTERACTIVE FOOTER */}
                <div className="mt-8 flex items-center justify-between border-t border-white/[0.03] pt-4">
                  <div className="flex items-center gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()} // Mencegah bentrok click trigger dengan link utama
                      className="rounded-xl border border-white/[0.06] bg-white/[0.01] p-2.5 text-zinc-400 transition hover:border-white/20 hover:text-white hover:bg-white/[0.03]"
                    >
                      <FaGithub size={15} />
                    </a>

                    <div className="rounded-xl border border-white/[0.04] bg-white/[0.01] p-2.5 text-zinc-600">
                      <Globe size={15} />
                    </div>
                  </div>

                  <span className="text-[11px] font-bold tracking-widest uppercase text-zinc-500 group-hover:text-white transition-colors duration-300">
                    Live Preview &rarr;
                  </span>
                </div>
              </div>

              {/* AMBIENT HOVER BORDER EFFECT */}
              <div className="absolute inset-0 rounded-[32px] border border-transparent group-hover:border-white/[0.05] transition duration-500 pointer-events-none" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}