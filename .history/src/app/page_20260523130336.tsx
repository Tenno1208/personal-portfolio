import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Navbar from "@/components/Navbar";
import SmoothScroll from "@/components/SmoothScroll";
import Projects from "@/sections/Projects";
import TechStack from "@/sections/TechStack";
import Terminal from "@/sections/Terminal";
import MouseGlow from "@/components/MouseGlow";
import CustomCursor from "@/components/CustomCursor";

export default function Home() {
  return (
    <main className="overflow-hidden bg-[#050816]">

      <CustomCursor />

      <MouseGlow />

      <SmoothScroll />

      <Navbar />

      <Hero />

      <About />

      <Projects />

      <TechStack />

      <Terminal />

    </main>
  );
}