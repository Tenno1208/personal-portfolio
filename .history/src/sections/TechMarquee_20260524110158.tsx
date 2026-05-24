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

// Daftar teknologi yang sudah disesuaikan agar lebih relate dan bervariasi
const items = [
  { name: "NEXT.JS", icon: SiNextdotjs, color: "hover:text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]" },
  { name: "LARAVEL", icon: SiLaravel, color: "hover:text-[#FF2D20] drop-shadow-[0_0_15px_rgba(255,45,32,0.4)]" },
  { name: "REACT", icon: SiReact, color: "hover:text-[#61DAFB] drop-shadow-[0_0_15px_rgba(97,218,251,0.4)]" },
  { name: "TAILWIND", icon: SiTailwindcss, color: "hover:text-[#06B6D4] drop-shadow-[0_0_15px_rgba(6,182,212,0.4)]" },
  { name: "TYPESCRIPT", icon: SiTypescript, color: "hover:text-[#3178C6] drop-shadow-[0_0_15px_rgba(49,120,198,0.4)]" },
  { name: "FRAMER MOTION", icon: SiFramer, color: "hover:text-[#F107A3] drop-shadow-[0_0_15px_rgba(241,7,163,0.4)]" },
  { name: "PYTHON", icon: SiPython, color: "hover:text-[#3776AB] drop-shadow-[0_0_15px_rgba(55,118,171,0.4)]" },
];

export default function TechMarquee() {
  return (
    <section className="py-12 overflow-hidden bg-[#050816] border-y border-white/5 select-none relative group">
      
      {/* Efek Masking Gradasi: Membuat sisi kiri & kanan memudar halus (Mewah) */}
      <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-r from-[#050816] via-transparent to-[#050816]" />

      {/* Wrapper Marquee dengan sedikit kemiringan sinematik (skew) */}
      <div className="flex w-max relative skew-y-[-1.5deg] md:skew-y-[-1deg] transition-transform duration-500 group-hover:skew-y-0">
        
        {/* Loop Track 2 kali agar seamless tanpa putus */}
        {[...Array(2)].map((_, trackIdx) => (
          <div
            key={trackIdx}
            className="flex items-center whitespace-nowrap animate-[marquee_30s_linear_infinite] will-change-transform gap-16 pr-16"
          >
            {items.map((item, i) => {
              const IconComponent = item.icon;

              return (
                <div key={i} className="flex items-center gap-12">
                  {/* Item Konten */}
                  <div
                    className={`flex items-center gap-5 text-white/15 transition-all duration-500 ease-out cursor-pointer ${item.color} transform hover:scale-105`}
                  >
                    {/* Icon Brand */}
                    <IconComponent size={40} color="currentColor" className="shrink-0 transition-transform duration-300" />
                    
                    {/* Nama Brand */}
                    <span className="text-2xl md:text-4xl font-black tracking-widest font-sans">
                      {item.name}
                    </span>
                  </div>

                  {/* Variasi Pembatas Dekoratif (Bintang Siber) di antara item */}
                  <span className="text-cyan-500/20 text-xl md:text-2xl select-none font-light animate-pulse">
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