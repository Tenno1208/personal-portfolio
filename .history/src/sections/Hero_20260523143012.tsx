"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import React from "react";
import Magnetic from "@/components/Magnetic";

export default function Hero() {
  // Setup nilai koordinat untuk efek interaksi 3D Card saat di-hover mouse
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Mengubah posisi koordinat piksel menjadi derajat rotasi kemiringan
  const rotateX = useTransform(y, [-300, 300], [10, -10]);
  const rotateY = useTransform(x, [-300, 300], [-10, 10]);

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#050816] px-6 py-20 lg:py-0">

      {/* ================= BACKGROUND SYSTEM ================= */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* GLOW AMBIENT */}
        <div className="absolute top-[-100px] left-[-100px] w-[600px] h-[600px] bg-cyan-500/15 rounded-full blur-[130px]" />
        <div className="absolute bottom-[-100px] right-[-100px] w-[600px] h-[600px] bg-purple-500/15 rounded-full blur-[130px]" />

        {/* ANIMATED ORB RING */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/2 left-1/2 w-[850px] h-[850px] border border-cyan-500/10 rounded-full -translate-x-1/2 -translate-y-1/2"
        />

        {/* BACKGROUND MATRIX GRID */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      {/* ================= CONTENT SYSTEM ================= */}
      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center w-full">

        {/* LEFT COLUMN: BRANDING AND TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* BADGE */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-semibold tracking-wider mb-6 backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
            FULLSTACK DEVELOPER
          </div>

          {/* SUBTITLE */}
          <p className="text-zinc-500 uppercase tracking-[6px] mb-4 text-xs font-bold">
            FUTURISTIC DIGITAL ENGINEER
          </p>

          {/* HEADING */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight text-white tracking-tight">
            Hi, I’m <br />
            <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-purple-500 bg-clip-text text-transparent">
              Avvatar
            </span>
          </h1>

          {/* DESCRIPTION */}
          <p className="bg-gradient-to-r from-zinc-200 to-zinc-400 bg-clip-text text-transparent text-base md:text-lg mt-6 max-w-xl leading-relaxed">
            Building futuristic web experiences with smooth interactions, premium UI design, and modern frontend technologies.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-wrap gap-4 mt-10">
            <Magnetic>
              <button className="px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold hover:scale-105 hover:shadow-[0_0_50px_rgba(34,211,238,0.5)] transition-all cursor-pointer">
                View Projects
              </button>
            </Magnetic>

            <button className="px-8 py-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md hover:border-cyan-400 hover:bg-white/10 transition-all text-white font-medium cursor-pointer">
              Download CV
            </button>
          </div>

          {/* SOCIAL MEDIA ICONS */}
          <div className="flex gap-4 mt-10">
            {[FaGithub, FaLinkedin, FaInstagram].map((Icon, index) => (
              <div key={index} className="w-12 h-12 rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center hover:bg-cyan-500/15 hover:border-cyan-500/40 hover:scale-110 hover:-translate-y-1 transition duration-300 cursor-pointer text-zinc-400 hover:text-white">
                <Icon className="text-xl" />
              </div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT COLUMN: HIGH-END PORTRAIT CONTAINER */}
        <div className="flex items-center justify-center w-full relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative w-full max-w-[440px] aspect-[4/5] rounded-[48px] border border-white/10 bg-gradient-to-b from-white/10 to-transparent p-4 shadow-[0_0_80px_rgba(168,85,247,0.15)] cursor-grab active:cursor-grabbing group transition-shadow duration-500 hover:shadow-[0_0_80px_rgba(6,182,212,0.25)]"
          >
            {/* AMBIENT INNER GLOW EFFEK */}
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 via-transparent to-cyan-500/10 rounded-[48px] pointer-events-none" />

            {/* BOX GAMBAR DENGAN BORDER DOUBLE GLASS */}
            <div className="w-full h-full rounded-[36px] overflow-hidden bg-[#0d1127] relative border border-white/5 shadow-2xl">
              <img
                src="/profile.jpg"
                alt="Profile Avvatar"
                className="w-full h-full object-cover rounded-[36px] scale-105 group-hover:scale-100 transition-transform duration-700 ease-out object-top"
              />
              
              {/* GRADIENT OVERLAY AGAR BAWAH FOTO MENYATU GELAP */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-transparent to-transparent opacity-80" />
              <div className="absolute inset-0 bg-black/10 mix-blend-overlay" />
            </div>

            {/* FLOATING ITEM 1: JUMLAH PROYEK */}
            <motion.div
              style={{ translateZ: 60 }} // Membuat elemen terlihat lebih maju secara 3D
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-8 bottom-12 rounded-2xl border border-white/10 bg-[#0a0f26]/80 backdrop-blur-xl p-4 shadow-[0_20px_40px_rgba(0,0,0,0.5)] border-l-cyan-500/50 border-l-2"
            >
              <p className="text-zinc-400 text-xs tracking-wide">Projects Completed</p>
              <h3 className="text-2xl font-black text-white mt-1">24+</h3>
            </motion.div>

            {/* FLOATING ITEM 2: AI ONLINE STATUS */}
            <motion.div
              style={{ translateZ: 80 }}
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -right-6 top-12 rounded-2xl border border-white/10 bg-black/60 backdrop-blur-xl px-5 py-3 shadow-[0_20px_40px_rgba(0,0,0,0.5)] border-r-purple-500/50 border-r-2"
            >
              <p className="text-[10px] font-bold text-purple-400 tracking-widest mb-1">SYSTEM</p>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_10px_#34d399] animate-pulse" />
                <span className="text-white text-xs font-medium">Online</span>
              </div>
            </motion.div>

          </motion.div>
        </div>

      </div>
    </section>
  );
}