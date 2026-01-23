import React, { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Menu, X, Search, Globe } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();

  const bgOpacity = useTransform(scrollY, [0, 80], [0.85, 1]);
  const shadow = useTransform(
    scrollY,
    [0, 80],
    ["none", "0 2px 6px rgba(0,0,0,0.4)"]
  );

  return (
    <motion.nav
      style={{
        backgroundColor: "#1e2222",
        opacity: bgOpacity,
        boxShadow: shadow,
      }}
      className="fixed top-0 left-0 right-0 z-50 border-b p-3 border-white/10"
    >
      <div className="w-full  px-6">
        <div className="flex justify-evenly gap-20 ">
          
          {/* LOGO */}
          <div className="flex items-center cursor-pointer">
            <img
              src="https://www.xlligent-softwares.com/storage/pages/SdjwVkIOjx6Ic72iq1ah7eI3cXviEQ0JTBNnTchZ.jpg"
              alt="Logo"
              className="h-20 w-auto"
            />
          </div>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-8">
            {[
              "What we do",
              "Who we are",
              "Insights",
              "Careers",
              "Newsroom",
              "Investors",
            ].map((item, index) => (
              <motion.a
                key={item}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                href="#"
                className="text-white/80 hover:text-white text-lg font-medium flex items-center gap-1"
              >
                {item}
                <span className="text-xs">▾</span>
              </motion.a>
            ))}
          </div>

          {/* RIGHT ACTIONS */}
          <div className="hidden md:flex items-center gap-6 text-white/80">
            <button className="hover:text-white">
              <Search size={18} />
            </button>

            {/* <button className="hover:text-white flex items-center gap-1">
              <Globe size={18} />
              Global (En)
            </button> */}

            <button className="hover:text-white border border-white/80  bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full font-bold shadow-lg hover:shadow-purple-500/30 transition-shadow">
              Contact Us
            </button>
          </div>

          {/* MOBILE MENU BUTTON */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white"
            >
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-[#1e2222] border-t border-white/10"
        >
          <div className="px-6 py-4 text-4xl space-y-3">
            {[
              "What we do",
              "Who we are",
              "Insights",
              "Careers",
              "Newsroom",
              "Portfolio",
            ].map((item) => (
              <a
                key={item}
                href="#"
                onClick={() => setIsOpen(false)}
                className="block text-white/80 hover:text-white text-lg"
              >
                {item}
              </a>
            ))}
</div>
            <div className="pt-4 border-t border-white/10 space-y-3">
              <button className="flex items-center gap-2 text-white/80 hover:text-white">
                <Search size={18} /> Search
              </button>
              <button className="flex items-center gap-2 text-white/80 hover:text-white">
                <Globe size={18} /> Global (En)
              </button>
              <button className="text-white hover:text-white">
                Contact Us
              </button>
            </div>
          
        </motion.div>
      )}
    </motion.nav>
  );
}
