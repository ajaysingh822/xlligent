"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import { ReactTyped } from "react-typed";
import FloatingLines from "./FloatingLines";

export function Hero() {
  return (
    <section className="relative sticky top-0 h-[70vh] w-full overflow-hidden bg-cover bg-center">
      
      {/* ================= BACKGROUND EFFECTS ================= */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <FloatingLines />
      </div>

      {/* ================= WATER WAVES ================= */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <svg
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          className="absolute bottom-0 w-[200%] h-[140px] opacity-30 animate-wave-slow"
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

        <svg
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          className="absolute bottom-0 w-[200%] h-[120px] opacity-20 animate-wave-fast"
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
      
      <div className="relative z-10 max-w-7xl mx-auto text-center py-40 px-4"><h1 className="text-7xl text-white font-extrabold">Smart Software Solution For&nbsp;</h1>
        <span className="text-transparent  bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-400 mt-5  text-4xl font-semibold">
         Your Growing Businesses
        </span>

        <p className="text-xl text-white max-w-3xl mx-auto mt-6 mb-10">
          Redefining Intelligent Innovations. Unleash your potential with
          innovative solutions that transform your vision into reality.
        </p>

        <ReactTyped
          className="text-white font-bold text-3xl md:text-4xl border mt-5 px-8 py-4 rounded-full inline-block"
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

        <div className="flex justify-center mt-14">
          <button className="px-8 py-4 border-4 text-purple-600 rounded-full font-bold flex items-center gap-2 hover:scale-105 transition">
            Get Started <ArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
}
