"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { SiNextdotjs, SiReact, SiTypescript, SiTailwindcss } from "@icons-pack/react-simple-icons";
import React, { useEffect, useState } from "react";
import Magnetic from "@/components/Magnetic";

export default function Hero() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-300, 300], [7, -7]);
  const rotateY = useTransform(x, [-300, 300], [-7, 7]);

  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    if (isMobile) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const mouseX = event.clientX - rect.left - rect.width / 2;
    const mouseY = event.clientY - rect.top - rect.height / 2;
    x.set(mouseX);
    y.set(mouseY);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#03050d] px-4 sm:px-6 py-28 lg:py-0">
      
      {/* ================= BACKGROUND SYSTEM ================= */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10px] left-[-50px] w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[130px]" />
        <div className="absolute bottom-[-50px] right-[-50px] w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[150px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.01)_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-8 items-center w-full">
        
        {/* ================= LEFT COLUMN (6/12 Grid) ================= */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-6 text-center lg:text-left flex flex-col items-center lg:items-start"
        >
          {/* BADGE */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-semibold tracking-wider mb-6 backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399] animate-pulse" />
            FULLSTACK DEVELOPER
          </div>

          {/* SUBTITLE */}
          <p className="text-zinc-500 uppercase tracking-[4px] sm:tracking-[6px] mb-3 text-[11px] sm:text-xs font-bold">
            FUTURISTIC DIGITAL ENGINEER
          </p>

          {/* HEADING */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black leading-[1.1] text-white tracking-tight">
            Hi, I’m <br />
            <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-500 bg-clip-text text-transparent px-1">
              Avvatar
            </span>
          </h1>

          {/* DESCRIPTION */}
          <p className="text-zinc-400 text-sm sm:text-base md:text-lg mt-6 max-w-md sm:max-w-lg leading-relaxed font-medium">
            I build exceptional digital experiences that are <span className="text-cyan-400">fast</span>, <span className="text-emerald-400">accessible</span>, and <span className="text-purple-400">visually stunning</span>.
          </p>

          {/* TERMINAL LOG STEP (MIRIP DI KODE REFERENSI) */}
          <div className="mt-6 bg-[#090d22]/60 border border-white/5 rounded-xl px-4 py-2 text-left font-mono text-xs text-emerald-500 max-w-sm w-full hidden sm:block backdrop-blur-sm">
            <p className="text-zinc-500">&gt; initializing developer_portfolio.exe</p>
            <p>&gt; success! welcome 👑</p>
          </div>

          {/* ACTION BUTTONS */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mt-8 w-full sm:w-auto">
            <Magnetic>
              <button className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold hover:scale-105 hover:shadow-[0_0_40px_rgba(34,211,238,0.4)] transition-all cursor-pointer text-sm">
                View My Work &rarr;
              </button>
            </Magnetic>

            <button className="w-full sm:w-auto px-8 py-3.5 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md hover:border-cyan-400 hover:bg-white/10 transition-all text-white font-medium cursor-pointer text-sm">
              Download CV ↓
            </button>
          </div>

          {/* SOCIAL MEDIA ICONS */}
          <div className="flex gap-4 mt-8">
            {[FaGithub, FaLinkedin, FaInstagram].map((Icon, index) => (
              <div key={index} className="w-10 h-10 rounded-xl border border-white/5 bg-white/[0.03] flex items-center justify-center hover:bg-cyan-500/10 hover:border-cyan-500/30 hover:scale-110 transition duration-300 cursor-pointer text-zinc-400 hover:text-white">
                <Icon className="text-lg" />
              </div>
            ))}
          </div>
        </motion.div>

        {/* ================= RIGHT COLUMN (6/12 Grid) ================= */}
        <div className="lg:col-span-6 flex items-center justify-center w-full relative px-2">
          
          {/* FAKE BACKGROUND CODE SYNTACKS (EFEK HOVER CYBERPUNK KANAN) */}
          <div className="absolute right-4 top-10 font-mono text-[10px] text-purple-500/20 select-none hidden xl:block leading-relaxed text-left pointer-events-none">
            <p>{"const developer = {"}</p>
            <p className="pl-4">{"name: 'Avvatar',"}</p>
            <p className="pl-4">{"role: 'Fullstack Developer',"}</p>
            <p className="pl-4">{"skills: ['Next.js', 'React'],"}</p>
            <p>{"};"}</p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
            style={isMobile ? { transformStyle: "flat" } : { rotateX, rotateY, transformStyle: "preserve-3d" }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative w-full max-w-[450px] aspect-[1/1.1] flex items-center justify-center"
          >
            {/* NEON PORTRAIT PORTAL CIRCLE (Efek lingkaran menyala melingkari kepala di referensi) */}
            <div className="absolute w-[280px] sm:w-[380px] h-[280px] sm:h-[380px] rounded-full border-2 border-purple-500/30 shadow-[0_0_60px_rgba(168,85,247,0.3)] bg-gradient-to-tr from-purple-500/5 to-cyan-500/5 animate-[pulse_4s_infinite_alternate]" />

            {/* FOTO PROFIL PNG TRANSPARENT */}
            <div className="relative w-full h-full flex items-end justify-center z-10 overflow-hidden">
              <img
                src="/profile.png" // PASTIKAN SUDAH DI-REMOVE BACKGROUND JADI PNG
                alt="Avvatar PNG"
                className="h-[85%] sm:h-[95%] object-contain select-none drop-shadow-[0_0_35px_rgba(6,182,212,0.15)] filter brightness-105"
              />
              {/* VIGNETTE GRADIENT OVERLAY (Agar badan bawah menyatu transparan gelap) */}
              <div className="absolute bottom-0 inset-x-0 h-1/4 bg-gradient-to-t from-[#03050d] via-[#03050d]/40 to-transparent z-20 pointer-events-none" />
            </div>

            {/* ================= DASHBOARD PANEL (KANAN & KIRI) ================= */}
            
            {/* PANEL KIRI: PROJECTS COMPLETED */}
            <motion.div
              style={isMobile ? { y: 0 } : { translateZ: 50 }}
              className="absolute left-0 sm:-left-4 bottom-14 rounded-2xl border border-white/5 bg-[#070b1e]/80 backdrop-blur-xl p-4 shadow-2xl z-20 min-w-[130px] text-left border-l-cyan-500/50 border-l-2"
            >
              <p className="text-zinc-500 text-[10px] uppercase font-bold tracking-wider">Projects</p>
              <h3 className="text-2xl font-black text-white mt-1">24+</h3>
            </motion.div>

            {/* PANEL KANAN ATAS: AVAILABILITY DASHBOARD */}
            <motion.div
              style={isMobile ? { y: 0 } : { translateZ: 70 }}
              className="absolute right-0 sm:-right-4 top-14 rounded-2xl border border-white/5 bg-[#070b1e]/80 backdrop-blur-xl p-4 shadow-2xl z-20 min-w-[170px] text-left border-r-purple-500/50 border-r-2"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_10px_#34d399] animate-pulse" />
                <span className="text-emerald-400 text-[11px] font-bold uppercase tracking-wider">Available for work</span>
              </div>
              <p className="text-zinc-500 text-[10px]">Location</p>
              <p className="text-white text-xs font-semibold mb-3">Indonesia, Earth 🌏</p>
              
              {/* MINI TECH STACK ICON ROW (Persis seperti di panel kanan atas Kezia) */}
              <div className="flex gap-2 border-t border-white/5 pt-2 text-zinc-400">
                <SiNextdotjs size={14} className="hover:text-white transition-colors" />
                <SiReact size={14} className="hover:text-[#61DAFB] transition-colors" />
                <SiTypescript size={14} className="hover:text-[#3178C6] transition-colors" />
                <SiTailwindcss size={14} className="hover:text-[#38BDF8] transition-colors" />
              </div>
            </motion.div>

          </motion.div>
        </div>

      </div>
    </section>
  );
}