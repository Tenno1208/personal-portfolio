import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="overflow-hidden bg-[#050816]">

      <Navbar />

      <Hero />

      <About />

    </main>
  );
}