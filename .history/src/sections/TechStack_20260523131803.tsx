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

// Data stack dengan icon asli dan warna glow masing-masing brand
const techs = [
  { name: "Next.js", icon: SiNextdotjs, color: "hover:border-white/40 hover:shadow-white/5 text-white" },
  { name: "React", icon: SiReact, color: "hover:border-cyan-400/40 hover:shadow-cyan-500/10 text-[#61DAFB]" },
  { name: "TypeScript", icon: SiTypescript, color: "hover:border-blue-500/40 hover:shadow-blue-500/10 text-[#3178C6]" },
  { name: "Tailwind", icon: SiTailwindcss, color: "hover:border-sky-400/40 hover:shadow-sky-400/10 text-[#38BDF8]" },
  { name: "Node.js", icon: SiNodedotjs, color: "hover:border-green-500/40 hover:shadow-green-500/10 text-[#339933]" },
  { name: "Laravel", icon: SiLaravel, color: "hover:border-red-500/40 hover:shadow-red-500/10 text-[#FF2D20]" },
  { name: "Framer Motion", icon: SiFramer, color: "hover:border-pink-500/40 hover:shadow-pink-500/10 text-[#0055FF]" },
  { name: "MongoDB", icon: SiMongodb, color: "hover:border-emerald-500/40 hover:shadow-emerald-500/10 text-[#47A248]" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.4, ease: "easeOut" }
  }
};

export default function TechStack() {
  return (
    <section className="py-32 px-6 bg-[#070B1A] relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header aligned left-center sesuai referensi UI */}
        <div className="mb-16 text-left md:text-center">
          <p className="text-sm font-bold tracking-widest text-cyan-400 uppercase mb-3">
            Tech Stack
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">
            Technologies I Use
          </h2>
        </div>

        {/* Grid System */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {techs.map((tech, i) => {
            const IconComponent = tech.icon;
            
            return (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.03,
                  y: -2,
                }}
                className={`flex flex-col items-center justify-center p-8 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-md transition-all duration-300 cursor-pointer ${tech.color}`}
              >
                {/* Icon Wrapper dengan background lingkaran gelap maskulin */}
                <div className="w-20 h-20 rounded-full bg-[#0d1530] border border-white/5 flex items-center justify-center mb-5 shadow-inner">
                  <IconComponent size={38} color="currentColor" />
                </div>
                
                {/* Nama Teknologi */}
                <span className="text-lg font-bold tracking-wide text-slate-200">
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