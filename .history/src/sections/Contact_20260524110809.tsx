"use client";

import { motion } from "framer-motion";
import {
  Mail,
  ArrowUpRight,
  Sparkles,
  MessageCircleMore,
} from "lucide-react";
import React, { useEffect, useState } from "react";
import {
  SiInstagram,
  SiGithub,
  SiWhatsapp,
} from "@icons-pack/react-simple-icons";

const whatsappMessage = encodeURIComponent(
  `Halo Avvatar 👋

Saya tertarik untuk bekerja sama membuat website / project digital.

Boleh ngobrol lebih lanjut?`
);

const contactMethods = [
  {
    name: "Email Resmi",
    value: "tenoavatar@gmail.com",
    href: "mailto:tenoavatar@gmail.com",
    icon: Mail,
    isSimpleIcon: false,
    gridClass: "md:col-span-7 md:row-span-1",
    color:
      "hover:border-white/20 hover:bg-white/[0.03] text-white",
  },

  {
    name: "WhatsApp Direct",
    value: "Mulai Chat",
    href: `https://wa.me/6281334891651?text=${whatsappMessage}`,
    icon: SiWhatsapp,
    isSimpleIcon: true,
    gridClass: "md:col-span-5 md:row-span-2",
    color:
      "hover:border-emerald-500/30 hover:bg-emerald-500/[0.05] text-[#25D366]",
    featured: true,
  },

  {
    name: "GitHub",
    value: "Tenno1208",
    href: "https://github.com/Tenno1208",
    icon: SiGithub,
    isSimpleIcon: true,
    gridClass: "md:col-span-5",
    color:
      "hover:border-zinc-400/20 hover:bg-zinc-500/[0.03] text-zinc-200",
  },

  {
    name: "Instagram",
    value: "@tennoaja_",
    href: "https://www.instagram.com/tennoaja_?igsh=MWx1dWRhcnpyaHV1bw==",
    icon: SiInstagram,
    isSimpleIcon: true,
    gridClass: "md:col-span-7",
    color:
      "hover:border-pink-500/20 hover:bg-pink-500/[0.03] text-[#E4405F]",
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
      className="relative overflow-hidden bg-[#03050c] py-32 px-4 sm:px-6"
    >
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-cyan-500/[0.04] blur-[180px] rounded-full" />

        <div className="absolute bottom-[-200px] right-[-100px] w-[500px] h-[500px] bg-emerald-500/[0.03] blur-[150px] rounded-full" />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.07) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto grid lg:grid-cols-12 gap-16 items-center">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="lg:col-span-5"
        >
          <div className="inline-flex items-center gap-2 border border-cyan-500/10 bg-cyan-500/[0.03] px-4 py-2 rounded-full mb-6">
            <Sparkles size={14} className="text-cyan-400" />

            <span className="text-[11px] uppercase tracking-[0.25em] text-cyan-300 font-bold">
              Contact Portal
            </span>
          </div>

          <h2 className="text-[clamp(2.6rem,5vw,5rem)] leading-[1.05] font-black tracking-tight text-white">
            Let’s Build
            <br />

            <span className="bg-gradient-to-r from-cyan-300 via-white to-zinc-500 bg-clip-text text-transparent">
              Something Sick.
            </span>
          </h2>

          <p className="mt-7 text-zinc-400 leading-relaxed max-w-md text-sm sm:text-base">
            Punya project, startup, website bisnis, atau cuma ingin ngobrol soal
            teknologi? Gas aja. Jangan cuma jadi penonton hidup orang lain.
          </p>

          {/* Quick WA CTA */}
          <motion.a
            href={`https://wa.me/6281334891651?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={isMobile ? {} : { scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="group mt-10 inline-flex items-center gap-3 rounded-2xl border border-emerald-500/20 bg-emerald-500/[0.06] px-6 py-4 text-white transition-all duration-300 hover:border-emerald-400/40 hover:bg-emerald-500/[0.12]"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500/10 border border-emerald-400/10">
              <MessageCircleMore
                size={20}
                className="text-emerald-400"
              />
            </div>

            <div className="text-left">
              <p className="text-[11px] uppercase tracking-widest text-zinc-400 font-bold">
                Fast Response
              </p>

              <p className="font-semibold text-sm sm:text-base">
                Chat via WhatsApp
              </p>
            </div>

            <ArrowUpRight
              size={18}
              className="ml-2 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </motion.a>
        </motion.div>

        {/* RIGHT */}
        <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-12 gap-4">

          {contactMethods.map((method, i) => {
            const IconComponent = method.icon;

            return (
              <motion.a
                key={i}
                href={method.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={isMobile ? {} : { y: -5, scale: 1.015 }}
                transition={{
                  duration: 0.45,
                  delay: i * 0.05,
                }}
                className={`
                  group relative overflow-hidden rounded-3xl
                  border border-white/[0.06]
                  bg-white/[0.03]
                  backdrop-blur-2xl
                  p-6
                  transition-all duration-500
                  shadow-[0_10px_40px_rgba(0,0,0,0.25)]
                  ${method.gridClass}
                  ${method.color}
                `}
              >
                {/* Glow */}
                <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-gradient-to-br from-white/[0.04] via-transparent to-transparent" />

                <div className="relative z-10 flex h-full flex-col justify-between">

                  {/* Top */}
                  <div className="flex items-start justify-between">

                    <div className="flex items-center gap-4">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/[0.06] bg-[#0d1530]/40">
                        <IconComponent
                          size={method.isSimpleIcon ? 20 : 22}
                          color="currentColor"
                        />
                      </div>

                      <div>
                        <p className="text-[11px] uppercase tracking-[0.25em] text-zinc-500 font-bold">
                          {method.name}
                        </p>

                        <h3 className="mt-1 text-sm sm:text-lg font-bold text-white">
                          {method.value}
                        </h3>
                      </div>
                    </div>

                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.05] text-zinc-500 transition-all duration-300 group-hover:text-white group-hover:border-white/[0.12]">
                      <ArrowUpRight
                        size={16}
                        className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                      />
                    </div>
                  </div>

                  {/* Bottom */}
                  {method.featured && (
                    <div className="mt-10 rounded-2xl border border-emerald-400/10 bg-emerald-500/[0.04] p-4">
                      <p className="text-xs leading-relaxed text-zinc-300">
                        Template pesan otomatis sudah disiapkan.
                        Tinggal klik lalu kirim. Manusia memang suka dipermudah.
                      </p>
                    </div>
                  )}
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}