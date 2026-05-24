"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    year: "2025",
    title: "Frontend Developer",
    company: "Freelance",
    desc: "Building modern interactive interfaces and premium web experiences.",
  },
  {
    year: "2024",
    title: "UI/UX Designer",
    company: "Creative Studio",
    desc: "Designed futuristic interfaces focused on user interaction.",
  },
  {
    year: "2023",
    title: "Backend Developer",
    company: "Startup Project",
    desc: "Created scalable backend systems and API architecture.",
  },
];

export default function Experience() {
  return (
    <section className="relative py-40 px-6 bg-[#050816] overflow-hidden">

      <div className="max-w-5xl mx-auto">

        {/* TITLE */}
        <div className="mb-24">

          <p className="text-cyan-400 mb-3">
            EXPERIENCE
          </p>

          <h2 className="text-5xl md:text-6xl font-black text-white">
            Career Journey
          </h2>

        </div>

        {/* TIMELINE */}
        <div className="relative border-l border-white/10 ml-4 space-y-20">

          {experiences.map((item, i) => (

            <motion.div
              key={i}
              initial={{
                opacity: 0,
                x: -80,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: .7,
              }}
              viewport={{
                once: true,
              }}
              className="relative pl-12"
            >

              {/* DOT */}
              <div className="absolute left-[-10px] top-2 w-5 h-5 rounded-full bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,.8)]" />

              <p className="text-cyan-400 mb-2">
                {item.year}
              </p>

              <h3 className="text-3xl font-bold text-white">
                {item.title}
              </h3>

              <p className="text-purple-400 mt-2">
                {item.company}
              </p>

              <p className="text-zinc-400 mt-4 leading-relaxed">
                {item.desc}
              </p>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}