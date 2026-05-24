"use client";

import { motion } from "framer-motion";
import { Mail, MessageSquare, ArrowUpRight } from "lucide-react";
import React, { useEffect, useState } from "react";
import { SiInstagram, SiGithub } from "@icons-pack/react-simple-icons"; // Menggunakan Simple Icons resmi

const contactMethods = [
  {
    name: "Email Resmi",
    value: "tennoavvatar@gmail.com",
    href: "mailto:tennoavvatar@gmail.com",
    icon: Mail,
    isSimpleIcon: false,
    color: "hover:border-white/20 hover:bg-white/[0.02] text-white",
  },
  {
    name: "WhatsApp Direct",
    value: "Kirim Pesan Instan",
    href: "https://wa.me/6281234567890", // Ganti dengan nomor WhatsApp aslimu
    icon: MessageSquare,
    isSimpleIcon: false,
    color: "hover:border-emerald-500/20 hover:bg-emerald-500/[0.01] text-[#25D366]",
  },
  {
    name: "Instagram",
    value: "@tenno.avvatar",
    href: "https://instagram.com/", // Masukkan link profil Instagram mu
    icon: SiInstagram,
    isSimpleIcon: true,
    color: "hover:border-pink-500/20 hover:bg-pink-500/[0.01] text-[#E4405F]",
  },
  {
    name: "GitHub Repository",
    value: "Tenno1208",
    href: "https://github.com/Tenno1208",
    icon: SiGithub, // FIX: Menggunakan ekspor resmi SiGithub dari simple-icons
    isSimpleIcon: true,
    color: "hover:border-zinc-400/20 hover:bg-zinc-500/[0.01] text-zinc-200",
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
      className="relative py-32 px-4 sm:px-6 bg-[#03050c] overflow-hidden"
    >
      {/* ================= BACKGROUND SYSTEM ================= */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
        <div className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyan-500/[0.015] rounded-full blur-[150px]" />
      </div>

      {/* ================= CONTENT SYSTEM ================= */}
      <div className="relative z-10 max-w-5xl mx-auto grid lg:grid-cols-12 gap-16 lg:gap-12 items-center w-full">
        
        {/* SISI KIRI: TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="lg:col-span-5 text-center lg:text-left flex flex-col items-center lg:items-start"
        >
          <p className="text-cyan-400 uppercase tracking-[0.3em] mb-4 text-[10px] sm:text-xs font-bold">
            Hubungi Saya
          </p>
          
          <h2 className="text-[clamp(2.2rem,5vw,3.8rem)] font-black leading-[1.15] text-white tracking-tight">
            Mari Bangun <br />
            <span className="bg-gradient-to-r from-zinc-100 via-zinc-300 to-zinc-500 bg-clip-text text-transparent">
              Ide Bersama
            </span>
          </h2>
          
          <p className="text-zinc-400 text-sm sm:text-base mt-6 leading-relaxed font-normal max-w-md">
            Terbuka untuk proyek lepas, kolaborasi arsitektur web modern, atau sekadar berdiskusi mengenai optimasi performa digital.
          </p>
        </motion.div>

        {/* SISI KANAN: LIST KONTAK */}
        <div className="lg:col-span-7 w-full flex flex-col gap-4">
          {contactMethods.map((method, i) => {
            const IconComponent = method.icon;
            
            return (
              <motion.a
                key={i}
                href={method.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: isMobile ? 0 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                whileHover={isMobile ? {} : { x: -6 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: i * 0.05 }}
                className={`group flex items-center justify-between p-5 rounded-2xl border border-white/[0.04] bg-white/[0.01] backdrop-blur-xl transition-all duration-300 cursor-pointer shadow-lg ${method.color}`}
              >
                <div className="flex items-center gap-4 text-left">
                  <div className="w-11 h-11 rounded-xl bg-[#0d1530]/30 border border-white/[0.04] flex items-center justify-center shadow-inner">
                    {/* Render dinamis berdasarkan tipe library icon */}
                    <IconComponent size={method.isSimpleIcon ? 14 : 16} color="currentColor" />
                  </div>
                  <div>
                    <p className="text-zinc-500 text-[10px] uppercase font-bold tracking-wider">
                      {method.name}
                    </p>
                    <p className="text-zinc-200 text-sm sm:text-base font-semibold mt-0.5 group-hover:text-white transition-colors">
                      {method.value}
                    </p>
                  </div>
                </div>

                <div className="w-8 h-8 rounded-lg border border-transparent flex items-center justify-center text-zinc-600 group-hover:text-white group-hover:border-white/[0.05] transition-all duration-300">
                  <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </motion.a>
            );
          })}
        </div>

      </div>
    </section>
  );
}