import Hero from "@/sections/Hero";
import Terminal from "@/sections/Terminal"; 
import About from "@/sections/About";
import Projects from "@/sections/Projects";
import TechStack from "@/sections/TechStack";
import Experience from "@/sections/Experience";
import TechMarquee from "@/sections/TechMarquee";
import Contact from "@/sections/Contact";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
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

      <TechMarquee />

      <Terminal />

      <About />

      <Projects />

      <TechStack />

      <Experience />

      <Contact />

      <Footer />

    </main>
  );
}