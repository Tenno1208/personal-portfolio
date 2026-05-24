"use client";

import { motion } from "framer-motion";

const techs = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind",
  "Node.js",
  "Laravel",
  "Framer Motion",
  "MongoDB",
];

export default function TechStack() {
  return (
    <section className="py-32 px-6 bg-[#070B1A]">

      <div className="max-w-7xl mx-auto text-center">

        <p className="text-cyan-400 mb-4">
          TECH STACK
        </p>

        <h2 className="text-5xl font-black text-white mb-16">
          Technologies I Use
        </h2>

        <div className="flex flex-wrap justify-center gap-6">

          {techs.map((tech, i) => (

            <motion.div
              key={i}
              whileHover={{
                scale: 1.1,
              }}
              className="px-8 py-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl text-white hover:border-cyan-400 transition"
            >
              {tech}
            </motion.div>

          ))}

        </div>
      </div>
    </section>
  );
}