"use client";

import { motion } from "framer-motion";
import {
  FaCode,
  FaServer,
  FaPalette,
} from "react-icons/fa";
import {
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

import Reveal from "@/components/Reveal";

export default function About() {
  const cards = [
    {
      icon: <FaCode />,
      title: "Frontend",
      desc: "Creating premium modern interfaces with smooth animation, interactive experiences, and clean responsive layouts.",
      glow: "hover:shadow-cyan-500/20",
      iconColor: "text-cyan-400",
      gradient: "from-cyan-500/20 to-blue-500/10",
    },
    {
      icon: <FaServer />,
      title: "Backend",
      desc: "Building scalable systems, optimized APIs, and secure architectures for modern digital platforms.",
      glow: "hover:shadow-purple-500/20",
      iconColor: "text-purple-400",
      gradient: "from-purple-500/20 to-pink-500/10",
    },
    {
      icon: <FaPalette />,
      title: "UI / UX",
      desc: "Designing futuristic interfaces focused on aesthetics, usability, and immersive user interaction.",
      glow: "hover:shadow-pink-500/20",
      iconColor: "text-pink-400",
      gradient: "from-pink-500/20 to-rose-500/10",
    },
  ];

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#050816] py-32 px-6"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,.15),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,.12),transparent_30%)]" />

      <div className="absolute top-0 left-0 h-[450px] w-[450px] rounded-full bg-cyan-500/10 blur-[140px]" />

      <div className="absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-purple-500/10 blur-[140px]" />

      {/* GRID PATTERN */}
      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:70px_70px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-24 max-w-4xl"
        >
          <div className="mb-6 flex items-center gap-3">
            <span className="h-[1px] w-16 bg-cyan-400" />

            <p className="flex items-center gap-2 text-sm tracking-[0.3em] text-cyan-400 uppercase">
              <Sparkles size={16} />
              About Me
            </p>
          </div>

          <h2 className="text-5xl font-black leading-tight text-white md:text-7xl">
            Crafting Digital
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
              {" "}
              Experiences
            </span>
          </h2>

          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-zinc-400 md:text-xl">
            I build modern websites and interactive digital products
            with clean code, premium visuals, smooth animations,
            and performance-focused architecture.
          </p>
        </motion.div>

        {/* MAIN CONTENT */}
        <div className="grid items-center gap-10 lg:grid-cols-2">
          {/* LEFT */}
          <Reveal>
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/5 p-8 backdrop-blur-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />

              <div className="relative z-10">
                <div className="mb-10 flex items-center justify-between">
                  <div>
                    <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
                      Developer
                    </p>

                    <h3 className="mt-2 text-3xl font-bold text-white">
                      Building Future Interfaces
                    </h3>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <ArrowUpRight className="text-cyan-400" />
                  </div>
                </div>

                <p className="leading-relaxed text-zinc-400">
                  Focused on creating immersive and high-end digital
                  experiences using modern frontend technologies,
                  smooth interactions, and scalable backend systems.
                  Humans keep demanding “simple but futuristic”.
                  Tiny little contradiction there. Very inspiring.
                </p>

                {/* STATS */}
                <div className="mt-12 grid grid-cols-3 gap-4">
                  {[
                    ["2+", "Years"],
                    ["20+", "Projects"],
                    ["100%", "Passion"],
                  ].map(([num, label]) => (
                    <div
                      key={label}
                      className="rounded-2xl border border-white/10 bg-black/20 p-5 text-center"
                    >
                      <h4 className="text-3xl font-black text-white">
                        {num}
                      </h4>

                      <p className="mt-2 text-sm text-zinc-500">
                        {label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </Reveal>

          {/* RIGHT */}
          <Reveal>
            <div className="grid gap-6">
              {cards.map((card, index) => (
                <motion.div
                  key={index}
                  whileHover={{
                    y: -8,
                    scale: 1.02,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                  }}
                  className={`group relative overflow-hidden rounded-[30px] border border-white/10 bg-gradient-to-br ${card.gradient} p-7 backdrop-blur-xl shadow-2xl transition duration-300 ${card.glow}`}
                >
                  <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,.15),transparent_35%)]" />

                  <div className="relative z-10 flex items-start gap-5">
                    <div
                      className={`rounded-2xl border border-white/10 bg-black/30 p-4 text-3xl ${card.iconColor}`}
                    >
                      {card.icon}
                    </div>

                    <div>
                      <h3 className="mb-3 text-2xl font-bold text-white">
                        {card.title}
                      </h3>

                      <p className="leading-relaxed text-zinc-300">
                        {card.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}