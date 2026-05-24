"use client";

import React from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaArrowRight,
} from "react-icons/fa";

export default function Hero() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-200, 200], [12, -12]);
  const rotateY = useTransform(x, [-200, 200], [-12, 12]);

  function handleMouseMove(
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) {
    const rect = event.currentTarget.getBoundingClientRect();

    const mouseX = event.clientX - rect.left - rect.width / 2;
    const mouseY = event.clientY - rect.top - rect.height / 2;

    x.set(mouseX);
    y.set(mouseY);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#030712] text-white">
      {/* ================= BACKGROUND ================= */}

      <div className="absolute inset-0 overflow-hidden">
        {/* GRID */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:70px_70px]" />

        {/* GLOW */}
        <div className="absolute top-[-200px] left-[-150px] w-[500px] h-[500px] rounded-full bg-cyan-500/20 blur-[140px]" />
        <div className="absolute bottom-[-250px] right-[-150px] w-[500px] h-[500px] rounded-full bg-purple-500/20 blur-[140px]" />

        {/* ANIMATED CIRCLE */}
        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute w-[900px] h-[900px] border border-cyan-500/10 rounded-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        />
      </div>

      {/* ================= CONTENT ================= */}

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-16 items-center w-full">
          {/* ================= LEFT ================= */}

          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="text-center lg:text-left"
          >
            {/* BADGE */}

            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 backdrop-blur-xl mb-8">
              <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />

              <span className="text-xs tracking-[4px] text-cyan-300 font-semibold">
                AVAILABLE FOR WORK
              </span>
            </div>

            {/* TITLE */}

            <h1 className="text-5xl sm:text-6xl md:text-7xl xl:text-[92px] font-black leading-[0.95] tracking-[-4px]">
              BUILDING
              <br />

              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 text-transparent bg-clip-text">
                FUTURISTIC
              </span>

              <br />
              DIGITAL
              <br />
              EXPERIENCE
            </h1>

            {/* DESC */}

            <p className="mt-8 text-zinc-400 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
              I create premium websites with modern animation, smooth
              interactions, and powerful frontend experiences using Next.js,
              TailwindCSS, and creative UI systems. Biar user lu kagum dulu
              sebelum baca isi websitenya. Manusia emang gampang kena efek glow.
            </p>

            {/* BUTTONS */}

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="group px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500 font-semibold text-white shadow-[0_0_50px_rgba(6,182,212,0.35)] hover:scale-105 transition-all duration-300">
                <span className="flex items-center justify-center gap-3">
                  View Projects
                  <FaArrowRight className="group-hover:translate-x-1 transition-all" />
                </span>
              </button>

              <button className="px-8 py-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10 hover:border-cyan-400/40 transition-all duration-300">
                Download CV
              </button>
            </div>

            {/* SOCIAL */}

            <div className="flex items-center gap-4 mt-10 justify-center lg:justify-start">
              {[FaGithub, FaLinkedinIn, FaInstagram].map(
                (Icon, index) => (
                  <motion.a
                    whileHover={{
                      y: -6,
                      scale: 1.08,
                    }}
                    whileTap={{
                      scale: 0.95,
                    }}
                    href="#"
                    key={index}
                    className="w-14 h-14 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl flex items-center justify-center text-zinc-400 hover:text-white hover:border-cyan-400/40 hover:bg-cyan-500/10 transition-all duration-300"
                  >
                    <Icon className="text-xl" />
                  </motion.a>
                )
              )}
            </div>
          </motion.div>

          {/* ================= RIGHT ================= */}

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative flex justify-center"
          >
            {/* FLOATING BLUR */}

            <div className="absolute w-[350px] h-[350px] bg-cyan-500/20 rounded-full blur-[120px]" />

            {/* CARD */}

            <motion.div
              style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
              }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="relative w-full max-w-[420px] sm:max-w-[480px] aspect-[4/5] rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-2xl p-4 shadow-[0_0_80px_rgba(0,0,0,0.45)]"
            >
              {/* BORDER LIGHT */}

              <div className="absolute inset-0 rounded-[40px] bg-gradient-to-br from-cyan-400/20 via-transparent to-purple-500/20 pointer-events-none" />

              {/* IMAGE */}

              <div className="relative w-full h-full rounded-[32px] overflow-hidden border border-white/10">
                <img
                  src="/profile.jpg"
                  alt="profile"
                  className="w-full h-full object-cover object-top scale-110 hover:scale-100 transition-transform duration-700"
                />

                {/* OVERLAY */}

                <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent" />
              </div>

              {/* FLOATING CARD 1 */}

              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
                className="absolute -left-6 bottom-10 bg-black/60 backdrop-blur-xl border border-white/10 rounded-2xl px-5 py-4"
              >
                <p className="text-zinc-400 text-xs mb-1">
                  Experience
                </p>

                <h3 className="text-2xl font-black">
                  3+ Years
                </h3>
              </motion.div>

              {/* FLOATING CARD 2 */}

              <motion.div
                animate={{
                  y: [0, 10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
                className="absolute -right-6 top-10 bg-black/60 backdrop-blur-xl border border-white/10 rounded-2xl px-5 py-4"
              >
                <p className="text-zinc-400 text-xs mb-2">
                  Status
                </p>

                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_12px_#4ade80]" />

                  <span className="font-semibold text-sm">
                    Online
                  </span>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}