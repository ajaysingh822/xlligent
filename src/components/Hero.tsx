import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
export function Hero() {
  // Floating shapes configuration
  const shapes = [{
    type: 'circle',
    size: 60,
    color: 'bg-yellow-400',
    top: '20%',
    left: '10%',
    delay: 0
  }, {
    type: 'square',
    size: 40,
    color: 'bg-blue-400',
    top: '60%',
    left: '5%',
    delay: 1
  }, {
    type: 'circle',
    size: 80,
    color: 'bg-pink-400',
    top: '15%',
    right: '15%',
    delay: 2
  }, {
    type: 'square',
    size: 50,
    color: 'bg-purple-400',
    top: '70%',
    right: '10%',
    delay: 0.5
  }, {
    type: 'circle',
    size: 30,
    color: 'bg-green-400',
    bottom: '20%',
    left: '40%',
    delay: 1.5
  }];
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-700 via-blue-600 to-pink-500 pt-20">
      {/* Animated Background Shapes */}
      {shapes.map((shape, index) => <motion.div key={index} className={`absolute ${shape.color} opacity-20 blur-xl`} style={{
      width: shape.size,
      height: shape.size,
      top: shape.top,
      left: shape.left,
      right: shape.right,
      bottom: shape.bottom,
      borderRadius: shape.type === 'circle' ? '50%' : '12px'
    }} animate={{
      y: [0, -30, 0],
      x: [0, 15, 0],
      rotate: [0, 10, 0],
      scale: [1, 1.1, 1]
    }} transition={{
      duration: 5 + index,
      repeat: Infinity,
      ease: 'easeInOut',
      delay: shape.delay
    }} />)}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8
      }}>
          <motion.span className="inline-block py-1 px-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-bold mb-6" whileHover={{
          scale: 1.05
        }}>
            🚀 Launching ideas into orbit
          </motion.span>

          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6 leading-tight">
            Smart Software Solutions for <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-400">
              Growing Businesses
            </span>
          </h1>

          <p className="mt-4 text-xl text-blue-100 max-w-3xl mx-auto mb-10 font-medium">
            We transform complex challenges into elegant digital experiences.
            Elevate your brand with our vibrant, cutting-edge technology stack.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.button whileHover={{
            scale: 1.05
          }} whileTap={{
            scale: 0.95
          }} className="px-8 py-4 bg-white text-purple-600 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all flex items-center gap-2 group">
              Get Started
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>

            <motion.button whileHover={{
            scale: 1.05
          }} whileTap={{
            scale: 0.95
          }} className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white/10 transition-colors flex items-center gap-2">
              <Play className="w-5 h-5 fill-current" />
              Watch Demo
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Bottom Wave Decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
          <path fill="#ffffff" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
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