import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, Linkedin, Heart } from 'lucide-react';
export function Footer() {
  return <footer className="bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <h2 className="text-2xl font-extrabold mb-6">
          <img src="https://www.xlligent-softwares.com/storage/pages/SdjwVkIOjx6Ic72iq1ah7eI3cXviEQ0JTBNnTchZ.jpg" alt="xlligentsoftware Logo" className="h-12" />

            </h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Creating digital experiences that inspire, engage, and convert.
              Let's build something amazing together.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => <motion.a key={i} href="#" whileHover={{
              scale: 1.2,
              color: '#a855f7'
            }} className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors">
                  <Icon size={20} />
                </motion.a>)}
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-purple-300">Company</h3>
            <ul className="space-y-4">
              {['About Us', 'Careers', 'Blog', 'Contact'].map(item => <li key={item}>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors hover:translate-x-1 inline-block transform duration-200">
                    {item}
                  </a>
                </li>)}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 text-pink-300">Services</h3>
            <ul className="space-y-4">
              {['Web Development', 'Mobile Apps', 'Cloud Solutions', 'Consulting'].map(item => <li key={item}>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors hover:translate-x-1 inline-block transform duration-200">
                    {item}
                  </a>
                </li>)}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-blue-300">
              Stay Updated
            </h3>
            <p className="text-gray-300 mb-4">
              Subscribe to our newsletter for the latest tech trends.
            </p>
            <form className="flex flex-col space-y-3">
              <input type="email" placeholder="Enter your email" className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500" />
              <motion.button whileHover={{
              scale: 1.02
            }} whileTap={{
              scale: 0.98
            }} className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-3 px-4 rounded-lg shadow-lg hover:shadow-purple-500/30 transition-shadow">
                Subscribe
              </motion.button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Xlligent Software. All rights reserved.
          </p>
          <div className="flex items-center space-x-2 text-sm text-gray-400">
            <span>Made with Xlligent</span>
            <Heart size={16} className="text-red-500 fill-red-500 animate-pulse" />
            <span></span>
          </div>
        </div>
      </div>
    </footer>;
}