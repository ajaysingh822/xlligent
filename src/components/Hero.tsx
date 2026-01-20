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