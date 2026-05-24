"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import React, { useEffect, useState } from "react";
import Magnetic from "@/components/Magnetic";

export default function Hero() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Mengubah posisi koordinat menjadi derajat kemiringan 3D
  const rotateX = useTransform(y, [-300, 300], [10, -10]);
  const rotateY = useTransform(x, [-300, 300], [-10, 10]);

  // State untuk mendeteksi apakah user menggunakan perangkat mobile
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024); // Breakpoint LG Tailwind
    };
    handleResize(); // Jalankan saat pertama kali mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    if (isMobile) return; // Matikan kalkulasi di mobile untuk menghemat performa & baterai HP
    const rect = event.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = event.clientX - rect.left - width / 2;
    const mouseY = event.clientY - rect.top - height / 2;
    x.set(mouseX);
    y.set(mouseY);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#050816] px-4 sm:px-6 py-28 lg:py-0">

      {/* ================= BACKGROUND SYSTEM ================= */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* GLOW AMBIENT */}
        <div className="absolute top-[-100px] left-[-100px] w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] bg-cyan-500/15 rounded-full blur-[80px] sm:blur-[130px]" />
        <div className="absolute bottom-[-100px] right-[-100px] w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] bg-purple-500/15 rounded-full blur-[80px] sm:blur-[130px]" />

        {/* ANIMATED ORB RING */}
        <motion.div
          animate={{
            scale: [1, 1.05, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/2 left-1/2 w-[450px] sm:w-[850px] h-[450px] sm:h-[850px] border border-cyan-500/10 rounded-full -translate-x-1/2 -translate-y-1/2"
        />

        {/* BACKGROUND MATRIX GRID */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.015)_1px,transparent_1px)] bg-[size:30px_30px] sm:bg-[size:50px_50px]" />
      </div>

      {/* ================= CONTENT SYSTEM ================= */}
      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-20 items-center w-full">

        {/* LEFT COLUMN: BRANDING AND TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center lg:text-left flex flex-col items-center lg:items-start"
        >
          {/* BADGE */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-semibold tracking-wider mb-6 backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee] animate-pulse" />
            FULLSTACK DEVELOPER
          </div>

          {/* SUBTITLE */}
          <p className="text-zinc-500 uppercase tracking-[4px] sm:tracking-[6px] mb-4 text-[11px] sm:text-xs font-bold">
            FUTURISTIC DIGITAL ENGINEER
          </p>

          {/* HEADING */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[1.1] text-white tracking-tight">
            Hi, I’m <br className="hidden lg:block" />
            <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-purple-500 bg-clip-text text-transparent px-1">
              Avvatar
            </span>
          </h1>

          {/* DESCRIPTION */}
          <p className="bg-gradient-to-r from-zinc-200 to-zinc-400 bg-clip-text text-transparent text-sm sm:text-base md:text-lg mt-6 max-w-md sm:max-w-xl leading-relaxed">
            Building futuristic web experiences with smooth interactions, premium UI design, and modern frontend technologies.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mt-10 w-full sm:w-auto">
            <Magnetic>
              <button className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold hover:scale-105 hover:shadow-[0_0_50px_rgba(34,211,238,0.5)] transition-all cursor-pointer shadow-[0_0_30px_rgba(34,211,238,0.2)] text-sm sm:text-base">
                View Projects
              </button>
            </Magnetic>

            <button className="w-full sm:w-auto px-8 py-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md hover:border-cyan-400 hover:bg-white/10 transition-all text-white font-medium cursor-pointer text-sm sm:text-base">
              Download CV
            </button>
          </div>

          {/* SOCIAL MEDIA ICONS */}
          <div className="flex gap-4 mt-10">
            {[FaGithub, FaLinkedin, FaInstagram].map((Icon, index) => (
              <div key={index} className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center hover:bg-cyan-500/15 hover:border-cyan-500/40 hover:scale-110 hover:-translate-y-1 transition duration-300 cursor-pointer text-zinc-400 hover:text-white">
                <Icon className="text-lg sm:text-xl" />
              </div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT COLUMN: HIGH-END PORTRAIT CONTAINER */}
        <div className="flex items-center justify-center w-full relative px-4 sm:px-8 lg:px-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            // Nilai style 3D rotasi otomatis diubah kembali menjadi statis jika diakses lewat HP
            style={isMobile ? { transformStyle: "flat" } : { rotateX, rotateY, transformStyle: "preserve-3d" }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative w-full max-w-[380px] sm:max-w-[420px] aspect-[4/5] rounded-[36px] sm:rounded-[48px] border border-white/10 bg-gradient-to-b from-white/10 to-transparent p-3 sm:p-4 shadow-[0_0_60px_rgba(168,85,247,0.12)] lg:cursor-grab lg:active:cursor-grabbing group transition-shadow duration-500 hover:shadow-[0_0_80px_rgba(6,182,212,0.2)]"
          >
            {/* AMBIENT INNER GLOW EFFECT */}
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 via-transparent to-cyan-500/10 rounded-[36px] sm:rounded-[48px] pointer-events-none" />

            {/* MAIN IMAGE BOX */}
            <div className="w-full h-full rounded-[28px] sm:rounded-[36px] overflow-hidden bg-[#0d1127] relative border border-white/5 shadow-2xl">
              <img
                src="/profile.jpg"
                alt="Profile Avvatar"
                className="w-full h-full object-cover rounded-[28px] sm:rounded-[36px] scale-105 group-hover:scale-100 transition-transform duration-700 ease-out object-top"
              />
              
              {/* VIGNETTE GRADIENT OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-[#050816]/20 to-transparent opacity-90" />
            </div>

            {/* FLOATING ITEM 1: PROJECTS COMPLETED */}
            <motion.div
              style={isMobile ? { y: 0 } : { translateZ: 50 }}
              animate={isMobile ? {} : { y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              // Responsive positioning: Masuk ke dalam card (`left-4`) saat mobile, menjorok keluar (`-left-8`) saat desktop
              className="absolute left-4 lg:-left-8 bottom-6 sm:bottom-12 rounded-xl sm:rounded-2xl border border-white/10 bg-[#0a0f26]/85 backdrop-blur-xl p-3 sm:p-4 shadow-2xl border-l-cyan-500/50 border-l-2 select-none"
            >
              <p className="text-zinc-400 text-[10px] sm:text-xs tracking-wide">Projects Completed</p>
              <h3 className="text-xl sm:text-2xl font-black text-white mt-0.5">24+</h3>
            </motion.div>

            {/* FLOATING ITEM 2: SYSTEM ONLINE */}
            <motion.div
              style={isMobile ? { y: 0 } : { translateZ: 70 }}
              animate={isMobile ? {} : { y: [0, 6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              // Responsive positioning: Masuk ke dalam card (`right-4`) saat mobile, menjorok keluar (`-right-6`) saat desktop
              className="absolute right-4 lg:-right-6 top-6 sm:top-12 rounded-xl sm:rounded-2xl border border-white/10 bg-black/75 backdrop-blur-xl px-4 py-2 sm:py-3 shadow-2xl border-r-purple-500/50 border-r-2 select-none"
            >
              <p className="text-[9px] font-bold text-purple-400 tracking-widest mb-0.5 sm:mb-1">SYSTEM</p>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />
                <span className="text-white text-[11px] sm:text-xs font-medium">Online</span>
              </div>
            </motion.div>

          </motion.div>
        </div>

      </div>
    </section>
  );
}