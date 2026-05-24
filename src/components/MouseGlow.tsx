"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function MouseGlow() {
  // Menggunakan Motion Value dari Framer Motion agar animasi perpindahan glow super smooth (60+ FPS)
  const mouseX = useMotionValue(-300);
  const mouseY = useMotionValue(-300);

  // Menambahkan efek pegas (spring) biar glownya ada efek trailing/mengikuti dengan halus
  const glowX = useSpring(mouseX, { stiffness: 120, damping: 25, mass: 0.5 });
  const glowY = useSpring(mouseY, { stiffness: 120, damping: 25, mass: 0.5 });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Dipasang langsung ke window body global
    const handleMouseMove = (e: MouseEvent) => {
      // Mengurangi 150 agar titik tengah glow (lebar 300px / 2) tepat berada di ujung kursor
      mouseX.set(e.clientX - 150);
      mouseY.set(e.clientY - 150);
      
      if (!isVisible) setIsVisible(true);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY, isVisible]);

  if (!isVisible) return null;

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-[999] w-[300px] h-[300px] rounded-full bg-cyan-500/15 blur-[100px] will-change-transform"
      style={{
        x: glowX,
        y: glowY,
      }}
    />
  );
}