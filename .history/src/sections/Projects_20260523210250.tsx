"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Globe,
} from "lucide-react";

import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Avvatar Store",
    desc: "Modern ecommerce platform with premium UI, smooth animations, responsive layouts, and fast shopping experience.",
    image:
      "/projects/project1.png",
    tech: ["Next.js", "Tailwind", "Laravel"],
    url: "https://yourdomain.com",
    github: "https://github.com/yourgithub/store",
  },

  {
    title: "AI Battle Arena",
    desc: "Interactive TikTok live battle game powered by realtime gifts, effects, score systems, and multiplayer mechanics.",
    image:
      "/projects/project2.png",
    tech: ["Socket.io", "Phaser", "Node.js"],
    url: "https://yourdomain.com",
    github: "https://github.com/yourgithub/ai-battle",
  },

  {
    title: "Finance Dashboard",
    desc: "Futuristic analytics dashboard with realtime charts, reports, dark UI, and advanced filtering system.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop",
    tech: ["Nuxt", "Chart.js", "Laravel"],
    url: "https://yourdomain.com",
    github: "https://github.com/yourgithub/dashboard",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#050816] py-32 px-6"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,.10),transparent_25%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,.10),transparent_25%)]" />

      <div className="absolute top-0 left-0 h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-purple-500/10 blur-[120px]" />

      {/* GRID */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:80px_80px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-cyan-400">
            FEATURED PROJECTS
          </p>

          <h2 className="text-5xl font-black leading-tight text-white md:text-7xl">
            Crafted With
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              {" "}
              Passion
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400">
            Collection of selected projects focused on modern UI,
            realtime systems, immersive interactions, and premium
            frontend experiences. Humans call this “portfolio”.
            Basically digital flexing with extra CSS.
          </p>
        </motion.div>

        {/* PROJECT GRID */}
        <div className="grid gap-8 lg:grid-cols-3">
          {projects.map((project, i) => (
            <motion.a
              key={i}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{
                y: -12,
                rotateX: 4,
                rotateY: 4,
              }}
              transition={{
                duration: 0.4,
                delay: i * 0.1,
              }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-2xl"
            >
              {/* IMAGE */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-[280px] w-full object-cover transition duration-700 group-hover:scale-110"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-transparent to-transparent opacity-90" />

                {/* FLOATING ICON */}
                <div className="absolute top-5 right-5 rounded-2xl border border-white/10 bg-black/30 p-3 backdrop-blur-xl">
                  <ArrowUpRight className="text-white" size={20} />
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-8">
                {/* TECH */}
                <div className="mb-5 flex flex-wrap gap-2">
                  {project.tech.map((item, idx) => (
                    <span
                      key={idx}
                      className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-zinc-300 backdrop-blur-xl"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {/* TITLE */}
                <h3 className="mb-4 text-3xl font-black text-white transition group-hover:text-cyan-300">
                  {project.title}
                </h3>

                {/* DESC */}
                <p className="leading-relaxed text-zinc-400">
                  {project.desc}
                </p>

                {/* FOOTER */}
                <div className="mt-8 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      onClick={(e) => e.stopPropagation()}
                      className="rounded-xl border border-white/10 bg-white/5 p-3 text-zinc-300 transition hover:border-cyan-400 hover:text-cyan-400"
                    >
                      <FaGithub size={18} />
                    </a>

                    <div className="rounded-xl border border-white/10 bg-white/5 p-3 text-zinc-300">
                      <Globe size={18} />
                    </div>
                  </div>

                  <span className="text-sm font-medium text-cyan-400">
                    Live Preview
                  </span>
                </div>
              </div>

              {/* GLOW */}
              <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_top,rgba(34,211,238,.15),transparent_45%)]" />

              {/* BORDER LIGHT */}
              <div className="absolute inset-0 rounded-[32px] border border-white/5 group-hover:border-cyan-400/30 transition duration-500" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}