"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import { ReactTyped } from "react-typed";
import Threads from "./Threads";

export function Hero() {
  return (
    <section
      className="relative sticky top-0 h-[70vh]  w-full overflow-hidden bg-cover bg-center"
      // style={{ backgroundImage: "url(herobg.png)" }}
    >
      {/* ================= BACKGROUND EFFECTS ================= */}
      
      {/* React Bits / Threads BG */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* <Threads /> */}
        
      </div>

      {/* Water Waves */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Back Wave */}
        <svg
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          className="absolute bottom-0 w-[200%] h-[140px] wave-slow opacity-30"
        >
          <path
            fill="#ffffff"
            fillOpacity="0.6"
            d="M0,160 C80,150 160,170 240,175 C320,180 400,160 480,155
               C560,150 640,160 720,165 C800,170 880,185 960,180
               C1040,175 1120,160 1200,155 C1280,150 1360,165 1440,170
               L1440,320 L0,320 Z"
          />
        </svg>

        {/* Front Wave */}
        <svg
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          className="absolute bottom-0 w-[200%] h-[120px] wave-fast opacity-20"
        >
          <path
            fill="#ffffff"
            fillOpacity="0.4"
            d="M0,180 C100,170 200,150 300,155 C400,160 500,180 600,185
               C700,190 800,170 900,165 C1000,160 1100,150 1200,155
               C1300,160 1400,180 1440,185 L1440,320 L0,320 Z"
          />
        </svg>
      </div>

      {/* ================= HERO CONTENT ================= */}
      <div className="relative z-10 max-w-7xl mx-auto text-center py-40 px-4">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-400">
            Growing Businesses
          </span>
        {/* </h1> */}

        <p className="text-xl text-black capitalize max-w-3xl mx-auto mb-10 drop-shadow-[0_6px_25px_rgba(0,0,0,0.5)]">
          Redefining Intelligent Innovations. Unleash your potential with
          innovative solutions that transform your vision into reality.
        </p>

        <ReactTyped
          className="text-black font-bold text-3xl md:text-4xl rounded-full border mt-5 px-8 py-4 hover:bg-[#5aa9ff] hover:text-black border-[#5aa9ff] inline-block drop-shadow-[0_6px_25px_rgba(0,0,0,0.5)]"
          strings={[
            "Industrial ERP Solutions",
            "Hospital Management Systems",
            "School Management Systems",
            "Custom Software Development",
          ]}
          typeSpeed={60}
          backSpeed={30}
          loop
        />

        <div className="flex justify-center mt-14 gap-4">
          <button className="px-8 py-4 border-4 text-purple-600 rounded-full font-bold flex items-center gap-2 hover:scale-105 transition">
            Get Started <ArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
}
