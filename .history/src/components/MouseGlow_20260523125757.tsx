"use client";

import { useMouse } from "react-use";

export default function MouseGlow() {

  const ref = typeof window !== "undefined"
    ? document.body
    : null;

  const { docX, docY } = useMouse(ref);

  return (
    <div
      className="pointer-events-none fixed z-[999] w-[300px] h-[300px] rounded-full bg-cyan-500/10 blur-[120px]"
      style={{
        left: docX - 150,
        top: docY - 150,
      }}
    />
  );
}