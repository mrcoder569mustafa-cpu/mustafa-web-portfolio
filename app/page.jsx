"use client";

import Hero from "./component/Hero";
import About from "./component/About";


export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Particle Background */}
     
      {/* Content on top */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen">
        <Hero />
        <About />
      </div>
    </div>
  );
}
