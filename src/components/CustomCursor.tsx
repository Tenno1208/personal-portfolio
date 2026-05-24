"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function CustomCursor() {

  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {

    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };

  }, []);

  return (
    <motion.div
      animate={{
        x: mousePosition.x - 12,
        y: mousePosition.y - 12,
      }}
      transition={{
        type: "spring",
        damping: 20,
        stiffness: 300,
        mass: 0.5,
      }}
      className="fixed top-0 left-0 z-[9999] w-6 h-6 rounded-full bg-cyan-400 pointer-events-none mix-blend-screen"
    />
  );
}