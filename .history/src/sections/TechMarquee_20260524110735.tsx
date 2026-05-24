"use client";

import {
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiFramer,
  SiLaravel,
  SiTypescript,
  SiPython,
} from "@icons-pack/react-simple-icons";

const items = [
  {
    name: "NEXT.JS",
    icon: SiNextdotjs,
    color: "hover:text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.35)]",
  },
  {
    name: "LARAVEL",
    icon: SiLaravel,
    color: "hover:text-[#FF2D20] drop-shadow-[0_0_15px_rgba(255,45,32,0.45)]",
  },
  {
    name: "REACT",
    icon: SiReact,
    color: "hover:text-[#61DAFB] drop-shadow-[0_0_15px_rgba(97,218,251,0.45)]",
  },
  {
    name: "TAILWIND",
    icon: SiTailwindcss,
    color: "hover:text-[#06B6D4] drop-shadow-[0_0_15px_rgba(6,182,212,0.45)]",
  },
  {
    name: "TYPESCRIPT",
    icon: SiTypescript,
    color: "hover:text-[#3178C6] drop-shadow-[0_0_15px_rgba(49,120,198,0.45)]",
  },
  {
    name: "FRAMER MOTION",
    icon: SiFramer,
    color: "hover:text-[#F107A3] drop-shadow-[0_0_15px_rgba(241,7,163,0.45)]",
  },
  {
    name: "PYTHON",
    icon: SiPython,
    color: "hover:text-[#3776AB] drop-shadow-[0_0_15px_rgba(55,118,171,0.45)]",
  },
];

export default function TechMarquee() {
  return (
    <section className="relative overflow-hidden border-y border-white/5 bg-[#050816] py-14 select-none flex justify-center items-center w-full group">
      
      {/* Premium Blur Glow Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.06),transparent_65%)] pointer-events-none" />

      {/* Efek Gradasi Fade Kiri & Kanan (Sangat Halus) */}
      <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-r from-[#050816] via-transparent to-[#050816]" />

      {/* Container Track Utama */}
      <div className="flex w-max relative overflow-hidden">
        
        {/* Render 2 Track identik agar animasi loop menyambung 100% tanpa celah kosong */}
        {[...Array(2)].map((_, trackIdx) => (
          <div
            key={trackIdx}
            className="flex items-center gap-16 px-8 animate-[marquee_30s_linear_infinite] will-change-transform group-hover:[animation-play-state:paused]"
          >
            {items.map((item, i) => {
              const IconComponent = item.icon;

              return (
                <div
                  key={i}
                  className="flex items-center gap-16 shrink-0"
                >
                  {/* Item Interaktif */}
                  <div
                    className={`group/item flex items-center gap-5 text-white/10 transition-all duration-500 ease-out cursor-pointer ${item.color} hover:scale-105`}
                  >
                    {/* Pembungkus Ikon dengan Ambient Glow Mikro */}
                    <div className="relative flex items-center justify-center">
                      <div className="absolute inset-0 rounded-full blur-2xl opacity-0 transition-opacity duration-500 group-hover/item:opacity-30 bg-current w-full h-full" />

                      <IconComponent
                        size={38}
                        color="currentColor"
                        className="relative shrink-0 transition-all duration-500 ease-out group-hover/item:rotate-12"
                      />
                    </div>

                    {/* Teks Brand Tradisional */}
                    <span className="text-2xl md:text-3xl font-extrabold tracking-[0.25em] font-sans transition-all duration-300">
                      {item.name}
                    </span>
                  </div>

                  {/* Separator / Pembatas Antar Elemen */}
                  <span className="text-xl md:text-2xl font-light text-cyan-400/20 select-none pointer-events-none animate-[pulse_2s_infinite]">
                    ✦
                  </span>
                </div>
              );
            })}
          </div>
        ))}

      </div>
    </section>
  );
}