"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "AI Dashboard",
    desc: "Modern AI analytics dashboard with futuristic interface.",
    image:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c",
  },
  {
    title: "Cyber Commerce",
    desc: "Next generation ecommerce experience with animations.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
  },
  {
    title: "Neural App",
    desc: "Interactive mobile-first AI application interface.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative py-40 px-6 bg-[#050816]"
    >
      <div className="max-w-7xl mx-auto">

        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <p className="text-cyan-400 mb-3">
            FEATURED PROJECTS
          </p>

          <h2 className="text-5xl font-black text-white">
            Selected Works
          </h2>
        </motion.div>

        {/* PROJECT GRID */}
        <div className="grid lg:grid-cols-3 gap-8">

          {projects.map((project, i) => (

            <motion.div
              key={i}
              whileHover={{
                y: -10,
                rotateX: 5,
                rotateY: 5,
              }}
              transition={{ duration: .3 }}
              className="group relative rounded-[32px] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl"
            >

              {/* IMAGE */}
              <div className="overflow-hidden">

                <img
                  src={project.image}
                  alt=""
                  className="w-full h-[260px] object-cover group-hover:scale-110 transition duration-700"
                />

              </div>

              {/* CONTENT */}
              <div className="p-8">

                <h3 className="text-2xl font-bold text-white mb-3">
                  {project.title}
                </h3>

                <p className="text-zinc-400 leading-relaxed">
                  {project.desc}
                </p>

                <button className="mt-6 text-cyan-400 hover:text-cyan-300 transition">
                  View Project →
                </button>

              </div>

              {/* GLOW */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition pointer-events-none bg-cyan-500/10" />

            </motion.div>

          ))}

        </div>
      </div>
    </section>
  );
}