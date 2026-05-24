"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { SiNextdotjs, SiReact, SiTypescript, SiTailwindcss } from "@icons-pack/react-simple-icons";
import React, { useEffect, useState } from "react";
import Magnetic from "@/components/Magnetic";

export default function Hero() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-300, 300], [6, -6]);
  const rotateY = useTransform(x, [-300, 300], [-6, 6]);

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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#03050c] px-4 sm:px-6 py-24 lg:py-0">
      
      {/* ================= BACKGROUND SYSTEM ================= */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
        <div className="absolute top-[-50px] left-[-50px] w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-cyan-500/[0.06] rounded-full blur-[100px] sm:blur-[140px]" />
        <div className="absolute bottom-[-50px] right-[-50px] w-[350px] sm:w-[700px] h-[350px] sm:h-[700px] bg-purple-500/[0.06] rounded-full blur-[110px] sm:blur-[160px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.01)_1px,transparent_1px)] bg-[size:35px_35px] sm:bg-[size:45px_45px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-12 gap-16 lg:gap-8 items-center w-full">
        
        {/* ================= LEFT COLUMN (Teks & Tombol) ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-6 text-center lg:text-left flex flex-col items-center lg:items-start order-2 lg:order-1"
        >
          {/* BADGE PENGEMBANG */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-400 text-xs font-bold tracking-wider mb-5 backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_#34d399] animate-pulse" />
            FULLSTACK DEVELOPER
          </div>

          {/* SUBTITLE */}
          <p className="text-zinc-500 uppercase tracking-[4px] sm:tracking-[7px] mb-4 text-[10px] sm:text-xs font-bold">
            FUTURISTIC DIGITAL ENGINEER
          </p>

          {/* HEADING UTAMA - Menggunakan clamp agar teks fleksibel otomatis */}
          <h1 className="text-[clamp(2.5rem,6vw,4.5rem)] font-black leading-[1.1] text-white tracking-tight">
            Hi, I’m <br />
            <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-400 bg-clip-text text-transparent">
              M.Tenno Haika Avvatar
            </span>
          </h1>

          {/* DESKRIPSI SINGKAT */}
          <p className="text-zinc-400 text-sm sm:text-base md:text-lg mt-6 max-w-md sm:max-w-lg leading-relaxed font-medium">
            I build exceptional digital experiences that are <span className="text-cyan-400">fast</span>, <span className="text-emerald-400">accessible</span>, and <span className="text-purple-400">visually stunning</span>.
          </p>

          {/* TERMINAL MINI LOG */}
          <div className="mt-6 bg-[#080c20]/40 border border-white/[0.03] rounded-xl px-4 py-2.5 text-left font-mono text-xs text-emerald-400/90 max-w-sm w-full hidden sm:block backdrop-blur-md shadow-inner">
            <p className="text-zinc-500">&gt; initializing avvatar_portfolio.exe</p>
            <p>&gt; success! welcome 👑</p>
          </div>

          {/* TOMBOL AKSI */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mt-8 w-full sm:w-auto">
            <Magnetic>
              <button className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold hover:scale-105 hover:shadow-[0_0_40px_rgba(34,211,238,0.3)] transition-all cursor-pointer text-sm tracking-wide">
                View My Work &rarr;
              </button>
            </Magnetic>

            <button className="w-full sm:w-auto px-8 py-3.5 rounded-xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-md hover:border-cyan-500/40 hover:bg-white/[0.06] transition-all text-white font-medium cursor-pointer text-sm tracking-wide">
              Download CV ↓
            </button>
          </div>

          {/* IKON JEJARING SOSIAL */}
          <div className="flex gap-4 mt-8">
            {[FaGithub, FaLinkedin, FaInstagram].map((Icon, index) => (
              <div key={index} className="w-10 h-10 rounded-xl border border-white/[0.05] bg-white/[0.02] flex items-center justify-center hover:bg-cyan-500/10 hover:border-cyan-500/30 hover:scale-110 transition duration-300 cursor-pointer text-zinc-400 hover:text-white">
                <Icon className="text-lg" />
              </div>
            ))}
          </div>
        </motion.div>

        {/* ================= RIGHT COLUMN (Frame Bulat Potret) ================= */}
        <div className="lg:col-span-6 flex items-center justify-center w-full relative px-2 order-1 lg:order-2">
          
          {/* BACKGROUND SYNTAX DEKORASI */}
          <div className="absolute right-0 top-6 font-mono text-[10px] text-purple-500/[0.12] select-none hidden xl:block leading-relaxed text-left pointer-events-none">
            <p>{"const developer = {"}</p>
            <p className="pl-4">{"name: 'Avvatar',"}</p>
            <p className="pl-4">{"role: 'Fullstack Developer',"}</p>
            <p className="pl-4">{"skills: ['Next.js', 'React'],"}</p>
            <p>{"};"}</p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            style={isMobile ? { transformStyle: "flat" } : { rotateX, rotateY, transformStyle: "preserve-3d" }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative w-full max-w-[340px] sm:max-w-[440px] aspect-square flex items-center justify-center"
          >
            
            {/* FRAME BULAT CYBERPUNK PORTAL */}
            <div className="absolute w-[260px] sm:w-[360px] h-[260px] sm:h-[360px] rounded-full border border-purple-500/30 bg-[#070b1e]/40 backdrop-blur-md p-1 shadow-[0_0_50px_rgba(168,85,247,0.2)] flex items-center justify-center overflow-hidden z-10">
              
              {/* Efek pendaran cahaya di dalam lingkaran */}
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 via-transparent to-cyan-500/10 rounded-full" />
              
              <img
                src="/profile.png"
                alt="Avvatar Profile"
                className="w-full h-full object-cover object-top select-none filter brightness-[1.03] contrast-[1.01] scale-105"
              />
              
              {/* Gradasi halus dasar lingkaran agar membaur rapi */}
              <div className="absolute bottom-0 inset-x-0 h-1/4 bg-gradient-to-t from-[#03050c] via-transparent to-transparent z-25 pointer-events-none" />
            </div>

            {/* ORBIT GLOW RING (Garis putus-putus luar lingkaran yang berputar pelan) */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute w-[285px] sm:w-[385px] h-[285px] sm:h-[385px] rounded-full border border-dashed border-cyan-500/20 pointer-events-none z-0"
            />

            {/* ================= PREMIUM WIDGETS (RESPONSIVE POSITIONING) ================= */}
            
            {/* WIDGET KIRI: PROJECTS COMPLETED */}
            <motion.div
              style={isMobile ? { y: 0 } : { translateZ: 40 }}
              className="absolute left-[-10px] sm:left-[-4px] bottom-4 sm:bottom-8 rounded-2xl border border-white/[0.06] bg-[#060a1c]/90 backdrop-blur-xl p-3 sm:p-4 shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-20 min-w-[115px] sm:min-w-[125px] text-left border-l-cyan-500/40 border-l-2"
            >
              <p className="text-zinc-500 text-[9px] sm:text-[10px] uppercase font-bold tracking-wider">Projects</p>
              <h3 className="text-xl sm:text-2xl font-black text-white mt-0.5 tracking-tight">5+</h3>
            </motion.div>

            {/* WIDGET KANAN: STATUS KETERSEDIAAN KERJA */}
            <motion.div
              style={isMobile ? { y: 0 } : { translateZ: 60 }}
              className="absolute right-[-10px] sm:right-[-4px] top-4 sm:top-12 rounded-2xl border border-white/[0.06] bg-[#060a1c]/90 backdrop-blur-xl p-3 sm:p-4 shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-20 min-w-[155px] sm:min-w-[175px] text-left border-r-purple-500/40 border-r-2"
            >
              <div className="flex items-center gap-1.5 sm:gap-2 mb-2">
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-400 shadow-[0_0_10px_#34d399] animate-pulse" />
                <span className="text-emerald-400 text-[9px] sm:text-[10px] font-bold uppercase tracking-wider">Available for work</span>
              </div>
              <p className="text-zinc-500 text-[8px] sm:text-[9px] uppercase font-bold tracking-wide">Location</p>
              <p className="text-zinc-200 text-xs font-semibold mb-2">Indonesia, Earth 🌏</p>
              
              {/* BARIS MINI LOGO STACK */}
              <div className="flex gap-2.5 border-t border-white/[0.05] pt-2.5 text-zinc-500">
                <SiNextdotjs size={12} className="hover:text-white transition-colors duration-200" />
                <SiReact size={12} className="hover:text-[#61DAFB] transition-colors duration-200" />
                <SiTypescript size={12} className="hover:text-[#3178C6] transition-colors duration-200" />
                <SiTailwindcss size={12} className="hover:text-[#38BDF8] transition-colors duration-200" />
              </div>
            </motion.div>

          </motion.div>
        </div>

      </div>
    </section>
  );
}