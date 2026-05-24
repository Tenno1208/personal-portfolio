"use client";

import { motion } from "framer-motion";

export default function Footer() {
  const menuLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="relative border-t border-white/5 py-12 md:py-16 px-6 bg-[#050816] overflow-hidden select-none">
      {/* Efek Gradasi Lembut di Sudut Latar Belakang */}
      <div className="absolute bottom-0 right-0 w-[300px] h-[150px] bg-cyan-500/[0.02] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* BARIS UTAMA (ATAS) */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10 pb-10 border-b border-white/[0.04]">
          
          {/* Info Brand & Arsitektur */}
          <div className="space-y-3 max-w-xs text-left">
            <h2 className="text-white font-black text-2xl tracking-widest">
              AVVATAR<span className="text-cyan-400">.</span>
            </h2>
            <p className="text-zinc-500 font-sans text-xs md:text-sm font-light leading-relaxed">
              Crafting premium digital expansions with clean layouts and futuristic UI systems.
            </p>
          </div>

          {/* Kolom Navigasi Cepat */}
          <div className="flex flex-wrap gap-x-8 gap-y-3">
            {menuLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                className="text-zinc-400 font-sans text-sm font-medium hover:text-white transition-colors relative group/link py-1"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-cyan-400 transition-all duration-300 group-hover/link:w-full" />
              </a>
            ))}
          </div>

        </div>

        {/* BARIS SUB-INFO (BAWAH) */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-5 pt-8 font-sans text-xs text-zinc-500">
          
          {/* Copyright */}
          <div className="text-center sm:text-left order-2 sm:order-1 font-light tracking-wide">
            © 2026 <span className="text-zinc-300 font-medium">Avvatar</span>. Seluruh Hak Cipta Dilindungi.
          </div>

          {/* Indikator Status Operasional (Mewah & Estetik) */}
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/10 bg-emerald-500/[0.02] order-1 sm:order-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-emerald-400/90 text-[10px] font-bold tracking-wider uppercase">
              All Systems Operational
            </span>
          </div>

        </div>

      </div>
    </footer>
  );
}