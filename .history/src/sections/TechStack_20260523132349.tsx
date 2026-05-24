"use client";

import { motion } from "framer-motion";
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

// Data stack dengan warna glow asli dari masing-masing brand
const techs = [
  { name: "Next.js", icon: SiNextdotjs, color: "hover:border-white/40 hover:shadow-white/5 text-white" },
  { name: "React", icon: SiReact, color: "hover:border-cyan-400/40 hover:shadow-cyan-500/10 text-[#61DAFB]" },
  { name: "TypeScript", icon: SiTypescript, color: "hover:border-blue-500/40 hover:shadow-blue-500/10 text-[#3178C6]" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "hover:border-sky-400/40 hover:shadow-sky-400/10 text-[#38BDF8]" },
  { name: "Node.js", icon: SiNodedotjs, color: "hover:border-green-500/40 hover:shadow-green-500/10 text-[#339933]" },
  { name: "Laravel", icon: SiLaravel, color: "hover:border-red-500/40 hover:shadow-red-500/10 text-[#FF2D20]" },
  { name: "Framer Motion", icon: SiFramer, color: "hover:border-pink-500/40 hover:shadow-pink-500/10 text-[#0055FF]" },
  { name: "MongoDB", icon: SiMongodb, color: "hover:border-emerald-500/40 hover:shadow-emerald-500/10 text-[#47A248]" },
];

// Animasi staggered untuk grid icon
const gridVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

const cardVariants = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } // Custom easeOutExpo
  }
};

export default function TechShowcase() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#050816] px-6 py-24">
      
      {/* ================= BACKGROUND SYSTEM ================= */}
      {/* Dipertahankan dari kode Hero untuk konsistensi tema */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* AMBIENT GLOW */}
        <div className="absolute top-[-100px] left-[-100px] w-[600px] h-[600px] bg-cyan-500/15 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-100px] right-[-100px] w-[600px] h-[600px] bg-purple-500/15 rounded-full blur-[120px]" />

        {/* ANIMATED ORB DECORATION */}
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
          className="absolute top-1/2 left-1/2 w-[900px] h-[900px] border border-cyan-500/10 rounded-full -translate-x-1/2 -translate-y-1/2"
        />

        {/* TECH GRID MATRIX PATTERN */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      {/* ================= CONTENT SYSTEM ================= */}
      {/* Layout difokuskan di tengah untuk grid visual saja */}
      <div className="relative z-10 max-w-6xl mx-auto w-full flex flex-col items-center">
        
        {/* Header Section (Minimalis) */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-zinc-500 uppercase tracking-[8px] mb-3 text-xs font-bold">
            Core Technologies
          </p>
          <h2 className="text-5xl md:text-6xl font-black leading-tight text-white tracking-tighter">
            My <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Tech Stack</span>
          </h2>
        </motion.div>

        {/* Grid Container */}
        <motion.div 
          variants={gridVariants}
          initial="hidden"
          whileInView="visible" // Animasi terpicu saat scroll
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 relative z-10 p-2 w-full"
        >
          {techs.map((tech, i) => {
            const IconComponent = tech.icon;
            
            return (
              <motion.div
                key={i}
                variants={cardVariants}
                whileHover={{ 
                  scale: 1.05,
                  y: -8,
                  transition: { duration: 0.3 }
                }}
                className={`flex flex-col items-center justify-center p-8 rounded-[32px] border border-white/5 bg-white/[0.01] backdrop-blur-2xl transition-all duration-300 cursor-pointer shadow-2xl ${tech.color}`}
              >
                {/* Circle Icon Container - Diambil dari layout visual asli */}
                <div className="w-20 h-20 rounded-full bg-[#0d1530] border border-white/5 flex items-center justify-center mb-6 shadow-inner ring-1 ring-white/5">
                  <IconComponent size={36} color="currentColor" />
                </div>
                
                {/* Brand Name */}
                <span className="text-lg font-bold tracking-tight text-zinc-200">
                  {tech.name}
                </span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}