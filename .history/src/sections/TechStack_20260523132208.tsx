"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiLaravel,
  SiFramer,
  SiMongodb,
} from "@icons-pack/react-simple-icons";

import Magnetic from "@/components/Magnetic";

// Data stack dengan warna glow asli dari masing-masing brand
const techs = [
  { name: "Next.js", icon: SiNextdotjs, color: "hover:border-white/40 hover:shadow-white/5 text-white" },
  { name: "React", icon: SiReact, color: "hover:border-cyan-400/40 hover:shadow-cyan-500/10 text-[#61DAFB]" },
  { name: "TypeScript", icon: SiTypescript, color: "hover:border-blue-500/40 hover:shadow-blue-500/10 text-[#3178C6]" },
  { name: "Tailwind", icon: SiTailwindcss, color: "hover:border-sky-400/40 hover:shadow-sky-400/10 text-[#38BDF8]" },
  { name: "Node.js", icon: SiNodedotjs, color: "hover:border-green-500/40 hover:shadow-green-500/10 text-[#339933]" },
  { name: "Laravel", icon: SiLaravel, color: "hover:border-red-500/40 hover:shadow-red-500/10 text-[#FF2D20]" },
  { name: "Framer", icon: SiFramer, color: "hover:border-pink-500/40 hover:shadow-pink-500/10 text-[#0055FF]" },
  { name: "MongoDB", icon: SiMongodb, color: "hover:border-emerald-500/40 hover:shadow-emerald-500/10 text-[#47A248]" },
];

// Animasi staggered untuk grid icon
const gridVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05, delayChildren: 0.2 }
  }
};

const cardVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#050816] px-6 py-20 lg:py-0">
      
      {/* ================= BACKGROUND SYSTEM ================= */}
      <div className="absolute inset-0 overflow-hidden">
        {/* AMBIENT GLOW */}
        <div className="absolute top-[-100px] left-[-100px] w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-100px] right-[-100px] w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[120px]" />

        {/* ANIMATED ORB */}
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
          className="absolute top-1/2 left-1/2 w-[800px] h-[800px] border border-cyan-500/10 rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        />

        {/* FLOATING DOTS */}
        <div className="absolute top-20 left-1/3 w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
        <div className="absolute bottom-32 right-1/4 w-3 h-3 bg-purple-400 rounded-full animate-pulse" />

        {/* TECH GRID MATRIX */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      {/* ================= CONTENT SYSTEM ================= */}
      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-8 items-center w-full">
        
        {/* LEFT TEXT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* BADGE */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-sm mb-6 backdrop-blur-md font-semibold tracking-wider">
            FULLSTACK DEVELOPER
          </div>

          {/* SUBTITLE */}
          <p className="text-zinc-500 uppercase tracking-[6px] mb-4 text-xs font-bold">
            Futuristic Digital Engineer
          </p>

          {/* HEADING */}
          <h1 className="text-5xl md:text-7xl font-black leading-tight text-white tracking-tight">
            Hi, I’m <br />
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Avvatar
            </span>
          </h1>

          {/* DESCRIPTION */}
          <p className="bg-gradient-to-r from-zinc-300 to-zinc-500 bg-clip-text text-transparent text-base md:text-lg mt-6 max-w-xl leading-relaxed">
            Building futuristic web experiences with smooth interactions, premium UI design, and robust modern architectures.
          </p>

          {/* ACTION BUTTONS */}
          <div className="flex flex-wrap gap-4 mt-10">
            <Magnetic>
              <button className="px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold hover:scale-105 hover:shadow-[0_0_60px_rgba(34,211,238,.6)] transition-all shadow-[0_0_40px_rgba(34,211,238,.35)] cursor-pointer">
                View Projects
              </button>
            </Magnetic>

            <button className="px-8 py-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md hover:border-cyan-400 transition-all text-white font-medium cursor-pointer">
              Download CV
            </button>
          </div>

          {/* SOCIAL MEDIA */}
          <div className="flex gap-4 mt-10">
            { [FaGithub, FaLinkedin, FaInstagram].map((SocialIcon, idx) => (
              <div key={idx} className="w-12 h-12 rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center hover:bg-cyan-500/15 hover:border-cyan-500/40 hover:scale-110 hover:-translate-y-1 transition duration-300 cursor-pointer text-zinc-400 hover:text-white">
                <SocialIcon className="text-xl" />
              </div>
            )) }
          </div>
        </motion.div>

        {/* RIGHT INTERACTIVE TECH STACK */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative w-full"
        >
          {/* Background Ambient Glow Khusus Area Grid */}
          <div className="absolute inset-0 bg-cyan-500/5 blur-[100px] pointer-events-none" />

          {/* Grid Container */}
          <motion.div 
            variants={gridVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 relative z-10 p-2"
          >
            {techs.map((tech, i) => {
              const IconComponent = tech.icon;
              
              return (
                <Magnetic key={i}>
                  <motion.div
                    variants={cardVariants}
                    whileHover={{ 
                      scale: 1.05,
                      y: -5,
                    }}
                    className={`flex flex-col items-center justify-center p-6 rounded-3xl border border-white/5 bg-white/[0.02] backdrop-blur-xl transition-all duration-300 cursor-pointer shadow-xl ${tech.color}`}
                  >
                    {/* Circle Icon Container */}
                    <div className="w-16 h-16 rounded-full bg-[#0d1530] border border-white/5 flex items-center justify-center mb-4 shadow-inner">
                      <IconComponent size={28} color="currentColor" />
                    </div>
                    
                    {/* Brand Name */}
                    <span className="text-sm font-bold tracking-wide text-zinc-300">
                      {tech.name}
                    </span>
                  </motion.div>
                </Magnetic>
              );
            })}
          </motion.div>

          {/* Floating Aesthetic Deco Item */}
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -right-4 -bottom-6 rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl px-4 py-3 shadow-2xl hidden sm:block pointer-events-none"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <p className="text-zinc-400 text-xs font-medium tracking-wider">STACK ACTIVE</p>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}