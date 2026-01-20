import React from 'react';
import { motion } from 'framer-motion';
import { Search, PenTool, Code2, Rocket } from 'lucide-react';

const StepCard = ({
  number,
  icon: Icon,
  title,
  description,
  color,
  delay
}: any) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ type: 'spring', bounce: 0.5, delay }}
    className="relative flex flex-col items-center text-center"
  >
    <motion.div
      whileHover={{
        scale: 1.25,
        rotate: 8,
        boxShadow: "0px 15px 30px rgba(0,0,0,0.3)"
      }}
      className={`w-20 h-20 rounded-full ${color} flex items-center justify-center text-white shadow-lg mb-6 relative z-10 cursor-pointer`}
    >
      <Icon size={32} />
      <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center text-sm font-bold text-gray-900 shadow-md border-2 border-gray-100">
        {number}
      </div>
    </motion.div>

    <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
    <p className="text-gray-600 max-w-xs">{description}</p>
  </motion.div>
);

export function Process() {
  const steps = [
    {
      number: 1,
      icon: Search,
      title: 'Discover',
      description: 'We dive deep into your business goals and user needs.',
      color: 'bg-gradient-to-br from-purple-500 to-indigo-600'
    },
    {
      number: 2,
      icon: PenTool,
      title: 'Design',
      description: 'Crafting intuitive and beautiful user interfaces.',
      color: 'bg-gradient-to-br from-pink-500 to-rose-600'
    },
    {
      number: 3,
      icon: Code2,
      title: 'Develop',
      description: 'Building robust, scalable solutions with clean code.',
      color: 'bg-gradient-to-br from-orange-400 to-red-500'
    },
    {
      number: 4,
      icon: Rocket,
      title: 'Deploy',
      description: 'Launching your product and ensuring smooth operation.',
      color: 'bg-gradient-to-br from-green-400 to-teal-500'
    }
  ];

  return (
    <section id="process" className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4"
          >
            How We{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
              Work
            </span>
          </motion.h2>
          <p className="text-xl text-gray-600">
            A simple, transparent process to bring your vision to life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {steps.map((step, index) => (
            <StepCard key={index} {...step} delay={index * 0.2} />
          ))}
        </div>
      </div>
    </section>
  );
}
