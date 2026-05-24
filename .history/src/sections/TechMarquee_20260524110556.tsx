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
    color:
      "hover:text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]",
  },
  {
    name: "LARAVEL",
    icon: SiLaravel,
    color:
      "hover:text-[#FF2D20] drop-shadow-[0_0_15px_rgba(255,45,32,0.4)]",
  },
  {
    name: "REACT",
    icon: SiReact,
    color:
      "hover:text-[#61DAFB] drop-shadow-[0_0_15px_rgba(97,218,251,0.4)]",
  },
  {
    name: "TAILWIND",
    icon: SiTailwindcss,
    color:
      "hover:text-[#06B6D4] drop-shadow-[0_0_15px_rgba(6,182,212,0.4)]",
  },
  {
    name: "TYPESCRIPT",
    icon: SiTypescript,
    color:
      "hover:text-[#3178C6] drop-shadow-[0_0_15px_rgba(49,120,198,0.4)]",
  },
  {
    name: "FRAMER MOTION",
    icon: SiFramer,
    color:
      "hover:text-[#F107A3] drop-shadow-[0_0_15px_rgba(241,7,163,0.4)]",
  },
  {
    name: "PYTHON",
    icon: SiPython,
    color:
      "hover:text-[#3776AB] drop-shadow-[0_0_15px_rgba(55,118,171,0.4)]",
  },
];

export default function TechMarquee() {
  return (
    <section className="relative overflow-hidden border-y border-white/5 bg-[#050816] py-12 select-none flex justify-center items-center">
      
      {/* Blur Glow Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.08),transparent_70%)]" />

      {/* Fade kiri kanan */}
      <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-r from-[#050816] via-transparent to-[#050816]" />

      {/* Wrapper */}
      <div className="relative w-full overflow-hidden">
        
        {/* Track */}
        <div className="flex w-max animate-[marquee_30s_linear_infinite] items-center gap-16 px-8">
          
          {[...items, ...items].map((item, i) => {
            const IconComponent = item.icon;

            return (
              <div
                key={i}
                className="flex items-center gap-12"
              >
                
                {/* Item */}
                <div
                  className={`group/item flex items-center gap-5 text-white/15 transition-all duration-500 ease-out cursor-pointer ${item.color} hover:scale-105`}
                >
                  
                  {/* Icon */}
                  <div className="relative">
                    <div className="absolute inset-0 rounded-full blur-xl opacity-0 transition-opacity duration-500 group-hover/item:opacity-100 bg-current" />

                    <IconComponent
                      size={42}
                      color="currentColor"
                      className="relative shrink-0 transition-all duration-300 group-hover/item:rotate-6"
                    />
                  </div>

                  {/* Text */}
                  <span className="text-2xl md:text-4xl font-black tracking-[0.2em]">
                    {item.name}
                  </span>
                </div>

                {/* Separator */}
                <span className="animate-pulse text-xl md:text-2xl font-light text-cyan-400/30">
                  ✦
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}