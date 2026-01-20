import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Menu, X } from 'lucide-react';
export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const {
    scrollY
  } = useScroll();
  // Transform background opacity based on scroll
  const bgOpacity = useTransform(scrollY, [0, 100], [0, 0.95]);
  const backdropBlur = useTransform(scrollY, [0, 100], ['0px', '12px']);
  const shadow = useTransform(scrollY, [0, 100], ['none', '0 4px 6px -1px rgba(0, 0, 0, 0.1)']);
  return <motion.nav style={{
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    backdropFilter: backdropBlur,
    boxShadow: shadow
  }} className="fixed top-0 left-0 right-0 z-50 transition-colors duration-300">
      {/* Gradient Overlay that fades in */}
      <motion.div style={{
      opacity: bgOpacity
    }} className="absolute inset-0 bg-gradient-to-r from-purple-600/90 via-blue-600/90 to-pink-600/90 -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div initial={{
          opacity: 0,
          x: -20
        }} animate={{
          opacity: 1,
          x: 0
        }} className="flex-shrink-0 cursor-pointer">
            {/* <span className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 dark:from-white dark:to-white">
              xlligent<span className="text-black dark:text-white">software</span>
            </span> */}
            <img src="https://www.xlligent-softwares.com/storage/pages/SdjwVkIOjx6Ic72iq1ah7eI3cXviEQ0JTBNnTchZ.jpg" alt="xlligentsoftware Logo" className="h-12 w-auto" />
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {['Services', 'Why Us', 'Process', 'Testimonials'].map((item, index) => <motion.a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} initial={{
              opacity: 0,
              y: -10
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              delay: 0.1 * index
            }} className="text-gray-800 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-bold transition-colors relative group">
                    {item}
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                  </motion.a>)}
              <motion.button whileHover={{
              scale: 1.05
            }} whileTap={{
              scale: 0.95
            }} className="bg-gradient-to-r  from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full font-bold shadow-lg hover:shadow-purple-500/30 transition-shadow">
                Get Started
              </motion.button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800 hover:text-purple-600 focus:outline-none">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && <motion.div initial={{
      opacity: 0,
      height: 0
    }} animate={{
      opacity: 1,
      height: 'auto'
    }} exit={{
      opacity: 0,
      height: 0
    }} className="md:hidden bg-white border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {['Services', 'Why Us', 'Process', 'Testimonials'].map(item => <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-gray-800 hover:text-purple-600 block px-3 py-2 rounded-md text-base font-medium" onClick={() => setIsOpen(false)}>
                {item}
              </a>)}
            <button className="w-full mt-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full font-bold">
              Get Started
            </button>
          </div>
        </motion.div>}
    </motion.nav>;
}