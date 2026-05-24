"use client";

import { motion } from "framer-motion";
import { Code2, Server, Layout, Sparkles } from "lucide-react";
import Reveal from "@/components/Reveal";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-32 px-4 sm:px-6 bg-[#03050c] overflow-hidden"
    >
      {/* BACKGROUND EFFECTS (Dibuat sangat halus agar tetap minimalis) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-purple-500/[0.02] rounded-full blur-[130px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto">
        
        {/* ================= HEADER SECTION ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="mb-20 text-center lg:text-left"
        >
          <p className="text-cyan-400 uppercase tracking-[0.3em] mb-4 text-[10px] sm:text-xs font-bold">
            Introduction
          </p>
          <h2 className="text-[clamp(2rem,4.5vw,3.5rem)] font-black text-white leading-[1.15] tracking-tight">
            Crafting Digital <br className="hidden lg:block" />
            <span className="bg-gradient-to-r from-zinc-100 via-zinc-300 to-zinc-500 bg-clip-text text-transparent">
              Experiences
            </span>
          </h2>
        </motion.div>

        {/* ================= ASYMMETRIC BENTO GRID ================= */}
        <Reveal>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[220px] md:auto-rows-[180px]">
            
            {/* BOX 1: BIG STATEMENT (Makan 7 kolom di desktop) */}
            <div className="md:col-span-7 md:row-span-2 rounded-3xl border border-white/[0.04] bg-white/[0.01] backdrop-blur-md p-8 flex flex-col justify-between shadow-sm">
              <div className="w-10 h-10 rounded-full bg-white/[0.02] border border-white/[0.05] flex items-center justify-center text-cyan-400">
                <Sparkles size={16} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white tracking-tight mb-2">My Philosophy</h3>
                <p className="text-zinc-400 text-sm leading-relaxed font-normal">
                  I believe code is not just about instructions; it is an art of building structural spaces where aesthetics meet premium functionality. Focused on performance, high-end layouts, and clean interactive motions.
                </p>
              </div>
            </div>

            {/* BOX 2: FRONTEND (Makan 5 kolom di desktop) */}
            <div className="md:col-span-5 md:row-span-1 rounded-3xl border border-white/[0.04] bg-white/[0.01] backdrop-blur-md p-6 flex items-center gap-5 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/[0.03] border border-cyan-500/10 flex items-center justify-center text-cyan-400 shrink-0">
                <Code2 size={20} />
              </div>
              <div className="text-left">
                <h3 className="text-base font-bold text-white tracking-tight">Frontend Architecture</h3>
                <p className="text-zinc-400 text-xs mt-1 leading-relaxed">
                  Premium dynamic UIs built with Next.js, TypeScript, and micro-interactions.
                </p>
              </div>
            </div>

            {/* BOX 3: BACKEND */}
            <div className="md:col-span-5 md:row-span-1 rounded-3xl border border-white/[0.04] bg-white/[0.01] backdrop-blur-md p-6 flex items-center gap-5 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-purple-500/[0.03] border border-purple-500/10 flex items-center justify-center text-purple-400 shrink-0">
                <Server size={20} />
              </div>
              <div className="text-left">
                <h3 className="text-base font-bold text-white tracking-tight">Robust Backend</h3>
                <p className="text-zinc-400 text-xs mt-1 leading-relaxed">
                  Scalable core systems and secured rest APIs written using modern clean frameworks.
                </p>
              </div>
            </div>

            {/* BOX 4: FULL DESIGN UI/UX (Makan penuh 12 kolom sebagai penutup bento) */}
            <div className="md:col-span-12 md:row-span-1 rounded-3xl border border-white/[0.04] bg-white/[0.01] backdrop-blur-md p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-sm">
              <div className="flex items-center gap-5 text-left">
                <div className="w-12 h-12 rounded-2xl bg-zinc-100 text-black flex items-center justify-center shrink-0">
                  <Layout size={20} />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white tracking-tight">Aesthetics & Product Experience</h3>
                  <p className="text-zinc-400 text-xs mt-0.5 max-w-xl leading-relaxed">
                    Every pixel matters. Designing high-end, futuristic minimal layouts with deep focus on human interaction guidelines and device accessibility.
                  </p>
                </div>
              </div>
              <div className="text-left sm:text-right shrink-0">
                <span className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase">AESTHETIC LEVEL // 100%</span>
              </div>
            </div>

          </div>
        </Reveal>

      </div>
    </section>
  );
}