"use client";

import { motion } from "framer-motion";
import { 
  Code2, 
  Layers, 
  FileJson, 
  Wind, 
  Server, 
  Cpu, 
  Sparkles, 
  Database 
} from "lucide-react";

// Struktur data dibuat lebih kaya dengan icon dan deskripsi singkat
const techs = [
  { name: "Next.js", category: "Framework", icon: Layers, color: "hover:border-white" },
  { name: "React", category: "Library", icon: Code2, color: "hover:border-cyan-400" },
  { name: "TypeScript", category: "Language", icon: FileJson, color: "hover:border-blue-500" },
  { name: "Tailwind", category: "Styling", icon: Wind, color: "hover:border-sky-400" },
  { name: "Node.js", category: "Backend", icon: Server, color: "hover:border-green-500" },
  { name: "Laravel", category: "Backend", icon: Cpu, color: "hover:border-red-500" },
  { name: "Framer Motion", category: "Animation", icon: Sparkles, color: "hover:border-purple-400" },
  { name: "MongoDB", category: "Database", icon: Database, color: "hover:border-emerald-500" },
];

// Varian animasi untuk efek memunculkan card satu per satu
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

export default function TechStack() {
  return (
    <section className="py-32 px-6 bg-[#070B1A] overflow-hidden relative">
      {/* Efek cahaya latar belakang dekoratif */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <motion.p 
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm font-semibold tracking-widest text-cyan-400 uppercase mb-4"
        >
          Tech Stack
        </motion.p>

        <motion.h2 
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl font-black text-white mb-16 tracking-tight"
        >
          Technologies I Use
        </motion.h2>

        {/* Grid layout agar lebih rapi dan konsisten ukurannya di berbagai screen */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {techs.map((tech, i) => {
            const IconComponent = tech.icon;
            
            return (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05, 
                  y: -5,
                  boxShadow: "0 20px 40px -15px rgba(6, 182, 212, 0.15)"
                }}
                className={`flex flex-col items-start p-6 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-xl text-white transition-colors duration-300 ${tech.color}`}
              >
                {/* Wrapper Icon */}
                <div className="p-3 rounded-xl bg-white/[0.05] border border-white/10 mb-4 text-cyan-400">
                  <IconComponent size={24} strokeWidth={1.5} />
                </div>
                
                {/* Detail Teks */}
                <h3 className="text-lg font-bold tracking-wide">{tech.name}</h3>
                <p className="text-xs text-slate-400 mt-1 font-medium tracking-wider uppercase">
                  {tech.category}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}