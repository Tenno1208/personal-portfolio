"use client";

import { motion } from "framer-motion";
import { Mail, ArrowUpRight } from "lucide-react";
import React, { useEffect, useState } from "react";
import { SiInstagram, SiGithub, SiWhatsapp } from "@icons-pack/react-simple-icons";

// Template teks untuk pesan WhatsApp otomatis agar rapi & profesional
const waMessage = encodeURIComponent(
  "Halo Tenno, saya mengunjungi website portfolio Anda dan tertarik untuk berdiskusi mengenai kolaborasi atau proyek pengembangan web."
);

const contactMethods = [
  {
    name: "Email Resmi",
    value: "tenoavatar@gmail.com",
    href: "mailto:tenoavatar@gmail.com",
    icon: Mail,
    isSimpleIcon: false,
    gridClass: "md:col-span-7",
    color: "hover:border-white/20 hover:bg-white/[0.02] text-white hover:shadow-[0_0_30px_rgba(255,255,255,0.05)]",
  },
  {
    name: "WhatsApp Direct",
    value: "Kirim Pesan Instan",
    href: `https://wa.me/6281334891651?text=${waMessage}`, // Integrasi template pesan otomatis
    icon: SiWhatsapp, 
    isSimpleIcon: true,
    gridClass: "md:col-span-5",
    color: "hover:border-emerald-500/30 hover:bg-emerald-500/[0.02] text-[#25D366] hover:shadow-[0_0_30px_rgba(37,211,102,0.15)]",
  },
  {
    name: "GitHub Profile",
    value: "Tenno1208",
    href: "https://github.com/Tenno1208",
    icon: SiGithub,
    isSimpleIcon: true,
    gridClass: "md:col-span-5",
    color: "hover:border-zinc-500/30 hover:bg-zinc-500/[0.02] text-zinc-100 hover:shadow-[0_0_30px_rgba(255,255,255,0.05)]",
  },
  {
    name: "Instagram",
    value: "@tennoaja_",
    href: "https://www.instagram.com/tennoaja_?igsh=MWx1dWRhcnpyaHV1bw==",
    icon: SiInstagram,
    isSimpleIcon: true,
    gridClass: "md:col-span-7",
    color: "hover:border-pink-500/30 hover:bg-pink-500/[0.02] text-[#E4405F] hover:shadow-[0_0_30px_rgba(228,64,95,0.12)]",
  },
];

export default function Contact() {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      id="contact"
      className="relative py-28 md:py-36 px-4 sm:px-6 bg-[#050816] overflow-hidden"
    >
      {/* BACKGROUND GLOW PREMIUM (Radial Gradients) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[800px] h-[400px] md:h-[800px] bg-[radial-gradient(circle,rgba(34,211,238,0.03)_0%,transparent_70%)]" />
        <div className="absolute bottom-[-150px] right-10 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-purple-500/[0.02] rounded-full blur-[130px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-16 items-center w-full">
        
        {/* SISI KIRI: TEXT TITLES */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="lg:col-span-5 text-center lg:text-left flex flex-col items-center lg:items-start"
        >
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-cyan-500/10 bg-cyan-500/[0.03] mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            <p className="text-cyan-400 uppercase tracking-[0.25em] text-[10px] font-bold">
              GET IN TOUCH
            </p>
          </div>
          
          <h2 className="text-[clamp(2.2rem,4.5vw,3.5rem)] font-extrabold leading-[1.15] text-white tracking-tight">
            Mari Bangun <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-300 to-zinc-500 font-black">
              Ide Bersama
            </span>
          </h2>
          
          <p className="text-zinc-400/90 font-sans text-sm sm:text-base mt-5 leading-relaxed font-light max-w-sm mx-auto lg:mx-0">
            Terbuka untuk proyek lepas, kolaborasi sistem digital, atau sekadar berdiskusi mengenai optimasi performa modern arsitektur web.
          </p>
        </motion.div>

        {/* SISI KANAN: BENTO GRID CONTACT */}
        <div className="lg:col-span-7 w-full grid grid-cols-1 md:grid-cols-12 gap-4">
          {contactMethods.map((method, i) => {
            const IconComponent = method.icon;
            
            return (
              <motion.a
                key={i}
                href={method.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={isMobile ? {} : { scale: 1.015, y: -2 }}
                transition={{ duration: 0.4, ease: "easeOut", delay: i * 0.05 }}
                className={`group flex items-center justify-between p-6 rounded-2xl border border-white/[0.06] bg-black/40 backdrop-blur-md transition-all duration-300 cursor-pointer ${method.gridClass} ${method.color}`}
              >
                {/* Info & Konten Kiri */}
                <div className="flex items-center gap-5 text-left">
                  <div className="w-12 h-12 rounded-xl border border-white/[0.07] bg-white/[0.02] flex items-center justify-center transition-all duration-300 group-hover:scale-105 group-hover:bg-white/[0.05]">
                    <IconComponent size={method.isSimpleIcon ? 18 : 18} color="currentColor" />
                  </div>
                  <div>
                    <p className="text-zinc-500 font-sans text-[10px] uppercase font-bold tracking-wider">
                      {method.name}
                    </p>
                    <p className="text-zinc-200 font-sans text-sm sm:text-base font-medium mt-0.5 group-hover:text-white transition-colors">
                      {method.value}
                    </p>
                  </div>
                </div>

                {/* Indikator Panah Kanan */}
                <div className="w-8 h-8 rounded-lg border border-transparent flex items-center justify-center text-zinc-600 group-hover:text-white group-hover:border-white/10 transition-all duration-300 bg-white/[0.01] group-hover:bg-white/[0.03]">
                  <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                </div>
              </motion.a>
            );
          })}
        </div>

      </div>
    </section>
  );
}