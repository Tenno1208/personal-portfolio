"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiLaravel,
  SiFramer,
  SiVercel,
} from "@icons-pack/react-simple-icons";

// Kustom SVG Path untuk Google Gemini AI agar terlihat sangat presisi dan premium
const GeminiIcon = (props: any) => (
  <svg viewBox="0 0 24 24" width={props.size || 36} height={props.size || 36} fill="currentColor" {...props}>
    <path d="M12 24a1.72 1.72 0 0 1-1.42-.74L7.1 18.1a1.72 1.72 0 0 0-1.2-.64l-5.16-.62A1.72 1.72 0 0 1-.68 15a1.72 1.72 0 0 1 .74-1.42l5.16-3.48a1.72 1.72 0 0 0 .64-1.2l.62-5.16A1.72 1.72 0 0 1 8.1-.68 1.72 1.72 0 0 1 9.52.06l3.48 5.16a1.72 1.72 0 0 0 1.2.64l5.16.62a1.72 1.72 0 0 1 1.42 1.42 1.72 1.72 0 0 1-.74 1.42l-5.16 3.48a1.72 1.72 0 0 0-.64 1.2l-.62 5.16a1.72 1.72 0 0 1-1.42 1.42Z" />
  </svg>
);

// Data stack yang disesuaikan secara nyata dengan ekosistem pilar portofoliomu
const techs = [
  { name: "Next.js 15", icon: SiNextdotjs, color: "hover:border-white/40 hover:shadow-white/5 text-white" },
  { name: "React", icon: SiReact, color: "hover:border-cyan-400/40 hover:shadow-cyan-500/10 text-[#61DAFB]" },
  { name: "TypeScript", icon: SiTypescript, color: "hover:border-blue-500/40 hover:shadow-blue-500/10 text-[#3178C6]" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "hover:border-sky-400/40 hover:shadow-sky-400/10 text-[#38BDF8]" },
  { name: "Laravel API", icon: SiLaravel, color: "hover:border-red-500/40 hover:shadow-red-500/10 text-[#FF2D20]" },
  { name: "Gemini AI", icon: GeminiIcon, color: "hover:border-blue-400/40 hover:shadow-blue-500/10 text-[#79c0ff]" },
  { name: "Framer Motion", icon: SiFramer, color: "hover:border-pink-500/40 hover:shadow-pink-500/10 text-[#0055FF]" },
  { name: "Vercel Edge", icon: SiVercel, color: "hover:border-zinc-400/40 hover:shadow-zinc-500/5 text-white" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 }
  }
};

const cardVariants = {
  hidden: { y: 25, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  }
};

export default function TechShowcase() {
  const [isMobile, setIsMobile] = useState(true);

  // Mencegah glitch scaling hover di perangkat touch screen
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#03050c] px-4 sm:px-6 py-24">
      
      {/* ================= BACKGROUND SYSTEM ================= */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-cyan-500/[0.02] rounded-full blur-[140px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-500/[0.02] rounded-full blur-[140px]" />
        <div className="absolute inset-0 opacity-[0.012] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:45px_45px]" />
      </div>

      {/* ================= CONTENT SYSTEM ================= */}
      <div className="relative z-10 max-w-5xl mx-auto w-full flex flex-col items-center">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-cyan-400 uppercase tracking-[0.3em] mb-4 text-[10px] sm:text-xs font-bold">
            Arsitektur Utama
          </p>
          <h2 className="text-[clamp(2rem,4.5vw,3.5rem)] font-black leading-tight text-white tracking-tight">
            Eksositem <span className="bg-gradient-to-r from-zinc-100 via-zinc-300 to-zinc-500 bg-clip-text text-transparent">Teknologi</span>
          </h2>
        </motion.div>

        {/* Grid Container (Responsive 2 Kolom Mobile, 4 Kolom Desktop) */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 relative z-10 p-1 w-full"
        >
          {techs.map((tech, i) => {
            const IconComponent = tech.icon;
            
            return (
              <motion.div
                key={i}
                variants={cardVariants}
                whileHover={isMobile ? {} : { 
                  scale: 1.04,
                  y: -6,
                }}
                className={`flex flex-col items-center justify-center p-6 sm:p-8 rounded-[28px] sm:rounded-[32px] border border-white/[0.04] bg-white/[0.01] backdrop-blur-2xl transition-all duration-300 cursor-pointer shadow-xl ${tech.color}`}
              >
                {/* Circle Icon Container */}
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#0d1530]/40 border border-white/5 flex items-center justify-center mb-5 sm:mb-6 shadow-inner ring-1 ring-white/5">
                  <IconComponent size={isMobile ? 28 : 34} color="currentColor" />
                </div>
                
                {/* Brand Name */}
                <span className="text-sm sm:text-base font-bold tracking-tight text-zinc-300">
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