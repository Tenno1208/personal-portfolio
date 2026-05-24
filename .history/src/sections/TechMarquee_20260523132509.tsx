"use client";

import {
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiFramer,
  SiLaravel,
  SiNodedotjs,
  SiMongodb,
  SiTypescript,
} from "@icons-pack/react-simple-icons";

const items = [
  { name: "NEXT.JS", icon: SiNextdotjs },
  { name: "REACT", icon: SiReact },
  { name: "TAILWIND", icon: SiTailwindcss },
  { name: "FRAMER MOTION", icon: SiFramer },
  { name: "LARAVEL", icon: SiLaravel },
  { name: "NODE JS", icon: SiNodedotjs },
  { name: "MONGODB", icon: SiMongodb },
  { name: "TYPESCRIPT", icon: SiTypescript },
];

export default function TechMarquee() {
  return (
    <section className="py-8 overflow-hidden bg-black border-y border-white/5 select-none pointer-events-none">
      {/* Wrapper flex untuk memastikan marquee looping tanpa patah */}
      <div className="flex w-max relative">
        
        {/* Track Pertama dan Kedua digabung agar looping seamless */}
        {[...Array(2)].map((_, trackIdx) => (
          <div
            key={trackIdx}
            className="flex items-center whitespace-nowrap animate-[marquee_25s_linear_infinite] will-change-transform"
          >
            {items.map((item, i) => {
              const IconComponent = item.icon;

              return (
                <div
                  key={i}
                  className="flex items-center gap-4 mx-12 text-white/[0.07] transition-colors duration-300"
                >
                  {/* Logo Brand Asli dengan skala yang proporsional */}
                  <IconComponent size={44} color="currentColor" className="shrink-0" />
                  
                  {/* Nama Brand Tradisional */}
                  <span className="text-3xl md:text-5xl font-black tracking-wider">
                    {item.name}
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