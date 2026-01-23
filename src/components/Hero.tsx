"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import { ReactTyped } from "react-typed";
import Threads from "./Threads";
import FloatingLines from './FloatingLines';

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
        <FloatingLines />

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
<<<<<<< HEAD
    </section>;
}
// import React, { useRef, useMemo, Suspense } from 'react';
// import { Canvas, useFrame } from '@react-three/fiber';
// import { PerspectiveCamera, Environment, Sky, OrbitControls } from '@react-three/drei';
// import * as THREE from 'three';
// import { motion } from 'framer-motion';
// import { ArrowRight, Play } from 'lucide-react';

// // --- PHYSICAL CONSTANTS ---
// const WATER_PARAMS = {
//   depthColor: '#001e36',
//   surfaceColor: '#2ad1ff',
//   colorOffset: 0.08,
//   colorMultiplier: 2.5,
// };

// // --- GERSTNER WAVE SHADER ---
// const WaterShaderMaterial = {
//   uniforms: {
//     uTime: { value: 0 },
//     uDeepColor: { value: new THREE.Color(WATER_PARAMS.depthColor) },
//     uSurfaceColor: { value: new THREE.Color(WATER_PARAMS.surfaceColor) },
//     uColorOffset: { value: WATER_PARAMS.colorOffset },
//     uColorMultiplier: { value: WATER_PARAMS.colorMultiplier },
//   },
//   vertexShader: `
//     uniform float uTime;
//     varying float vElevation;
//     varying vec3 vNormal;
//     varying vec3 vViewPosition;

//     // Gerstner Wave function for physical displacement
//     vec3 gerstnerWave(vec4 wave, vec3 p, inout vec3 tangent, inout vec3 binormal) {
//       float steepness = wave.z;
//       float wavelength = wave.w;
//       float k = 2.0 * 3.14159 / wavelength;
//       float c = sqrt(9.8 / k);
//       vec2 d = normalize(wave.xy);
//       float f = k * (dot(d, p.xz) - c * uTime);
//       float a = steepness / k;

//       tangent += vec3(-d.x * d.x * (steepness * sin(f)), d.x * (steepness * cos(f)), -d.x * d.y * (steepness * sin(f)));
//       binormal += vec3(-d.x * d.y * (steepness * sin(f)), d.y * (steepness * cos(f)), -d.y * d.y * (steepness * sin(f)));
//       return vec3(d.x * (a * cos(f)), a * sin(f), d.y * (a * cos(f)));
//     }

//     void main() {
//       vec3 p = position;
//       vec3 tangent = vec3(1, 0, 0);
//       vec3 binormal = vec3(0, 0, 1);
      
//       // Layered waves: Direction(x,y), Steepness, Wavelength
//       p += gerstnerWave(vec4(1.0, 1.0, 0.25, 12.0), position, tangent, binormal);
//       p += gerstnerWave(vec4(1.0, 0.6, 0.18, 7.0), position, tangent, binormal);
//       p += gerstnerWave(vec4(-1.0, 0.8, 0.12, 4.0), position, tangent, binormal);

//       vNormal = normalize(cross(binormal, tangent));
//       vec4 modelPosition = modelMatrix * vec4(p, 1.0);
//       vElevation = p.y;
      
//       vec4 viewPosition = viewMatrix * modelPosition;
//       vViewPosition = -viewPosition.xyz;
//       gl_Position = projectionMatrix * viewPosition;
//     }
//   `,
//   fragmentShader: `
//     uniform vec3 uDeepColor;
//     uniform vec3 uSurfaceColor;
//     uniform float uColorOffset;
//     uniform float uColorMultiplier;
//     varying float vElevation;
//     varying vec3 vNormal;
//     varying vec3 vViewPosition;

//     void main() {
//       // 1. Fresnel Effect (Physics of reflection vs refraction)
//       vec3 viewDirection = normalize(vViewPosition);
//       float fresnel = dot(viewDirection, vNormal);
//       fresnel = clamp(1.0 - fresnel, 0.0, 1.0);
//       fresnel = pow(fresnel, 3.5);

//       // 2. Color Gradient based on Wave Height (Subsurface scattering look)
//       float mixStrength = (vElevation + uColorOffset) * uColorMultiplier;
//       vec3 color = mix(uDeepColor, uSurfaceColor, clamp(mixStrength, 0.0, 1.0));

//       // 3. Specular (Sunlight Glints)
//       vec3 lightDir = normalize(vec3(5.0, 8.0, 2.0));
//       float spec = pow(max(0.0, dot(vNormal, lightDir)), 128.0);
      
//       // 4. Foam Logic (Simple edge detection)
//       float foam = smoothstep(0.2, 0.5, vElevation);
//       color = mix(color, vec3(1.0), foam * 0.15);

//       // Composition
//       vec3 finalColor = color + (fresnel * 0.4) + (spec * 0.8);
      
//       gl_FragColor = vec4(finalColor, 1.0);
//     }
//   `
// };

// function Ocean() {
//   const mesh = useRef();
  
//   useFrame((state) => {
//     mesh.current.material.uniforms.uTime.value = state.clock.getElapsedTime();
//   });

//   return (
//     <mesh ref={mesh} rotation={[-Math.PI / 2, 0, 0]}>
//       {/* 512x512 segments for 4K smoothness */}
//       <planeGeometry args={[120, 120, 512, 512]} />
//       <shaderMaterial 
//         args={[WaterShaderMaterial]} 
//         side={THREE.DoubleSide}
//       />
//     </mesh>
//   );
// }

// export function Hero() {
//   return (
//     <div className="fixed inset-0 bg-black cursor-none">
//       <Canvas 
//         shadows 
//         dpr={[1, 2]} 
//         gl={{ 
//           antialias: true, 
//           toneMapping: THREE.ACESFilmicToneMapping,
//           exposure: 1.2
//         }}
//       >
//         <PerspectiveCamera makeDefault position={[0, 12, 25]} fov={30} />
        
//         {/* Realistic Sky & Environment Lighting */}
//         <Sky 
//           sunPosition={[100, 10, 100]} 
//           turbidity={0.05} 
//           rayleigh={0.2} 
//           mieCoefficient={0.005} 
//           mieDirectionalG={0.8} 
//         />
//         <Environment preset="night" />
        
//         <ambientLight intensity={0.1} />
//         <directionalLight 
//           position={[50, 100, 50]} 
//           intensity={2.5} 
//           color="#ffffff" 
//         />

//         <Suspense fallback={null}>
//           <Ocean />
//         </Suspense>

//         {/* Optional: Add to manually inspect the 4K quality */}
//         <OrbitControls 
//           enableZoom={false} 
//           enablePan={false} 
//           maxPolarAngle={Math.PI / 2.2} 
//         />
//       </Canvas>
      
//       {/* Overlay Content */}
//       <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 pointer-events-none">
//         <motion.div 
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//           className="pointer-events-auto"
//         >
//           <h1 className="text-white text-7xl font-bold tracking-tighter drop-shadow-2xl mb-6">
//             DEPTH OF <br />
//             <span className="text-cyan-400">INNOVATION</span>
//           </h1>
//           <p className="text-cyan-100/60 mt-4 max-w-lg font-medium mb-10">
//             Experience fluid design with physics-based interactions and cinematic rendering.
//           </p>
//           <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
//             <motion.button 
//               whileHover={{ scale: 1.05 }} 
//               whileTap={{ scale: 0.95 }} 
//               className="px-10 py-4 bg-white text-blue-900 rounded-full font-bold text-lg shadow-2xl hover:bg-blue-50 transition-colors flex items-center gap-2"
//             >
//               Start Project <ArrowRight size={20} />
//             </motion.button>
//             <motion.button 
//               whileHover={{ scale: 1.05 }} 
//               whileTap={{ scale: 0.95 }} 
//               className="px-10 py-4 border-2 border-white/30 text-white rounded-full font-bold text-lg backdrop-blur-sm hover:bg-white/10 transition-all flex items-center gap-2"
//             >
//               <Play size={20} fill="currentColor" /> Watch Story
//             </motion.button>
//           </div>
//         </motion.div>
//       </div>
      
//       {/* Vignette for cinematic focus */}
//       <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(0,0,0,0.5)_100%)]" />
//     </div>
//   );
// }
=======

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
>>>>>>> 1c386fc (animation)
