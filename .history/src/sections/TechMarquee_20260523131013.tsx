"use client";

export default function TechMarquee() {

  const items = [
    "NEXT JS",
    "REACT",
    "TAILWIND",
    "FRAMER MOTION",
    "LARAVEL",
    "NODE JS",
    "MONGODB",
    "TYPESCRIPT",
  ];

  return (
    <section className="py-10 overflow-hidden bg-black border-y border-white/10">

      <div className="flex whitespace-nowrap animate-[marquee_20s_linear_infinite]">

        {[...items, ...items].map((item, i) => (

          <div
            key={i}
            className="text-4xl md:text-6xl font-black text-white/10 mx-10"
          >
            {item}
          </div>

        ))}

      </div>
    </section>
  );
}