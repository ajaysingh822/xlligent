import React from 'react';
import { motion } from 'framer-motion';


import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';
import { Code, Smartphone, Cloud, Bot, Shield, Terminal } from 'lucide-react';
import { use } from 'framer-motion/client';
const ServiceCard = ({
  icon: Icon,
  title,
  description,
  gradient,
  delay
}: any) => {
  return <motion.div initial={{
    opacity: 0,
    scale: 0.8
  }} whileInView={{
    opacity: 1,
    scale: 1
  }} viewport={{
    once: true
  }} transition={{
    duration: 0.5,
    delay
  }} whileHover={{
    scale: 1.05,
    rotate: 2
  }} className={`p-8 rounded-3xl ${gradient} text-white shadow-lg cursor-pointer group`}>
      <div className="bg-white/20 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-sm group-hover:bg-white/30 transition-colors">
        <Icon className="w-8 h-8 text-white" />
      </div>
      <h3 className="text-2xl font-bold mb-3">{title}</h3>
      <p className="text-white/80 leading-relaxed">{description}</p>
    </motion.div>;
};

export function Services() {
  const services = [{
    icon: Code,
    title: 'Web Development',
    description: 'Custom websites built with modern frameworks that convert visitors into customers.',
    gradient: 'bg-gradient-to-br from-purple-500 to-pink-500'
  }, {
    icon: Smartphone,
    title: 'Mobile Apps',
    description: 'Native and cross-platform mobile applications for iOS and Android devices.',
    gradient: 'bg-gradient-to-br from-blue-500 to-cyan-500'
  }, {
    icon: Cloud,
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure design, migration, and management services.',
    gradient: 'bg-gradient-to-br from-orange-400 to-red-500'
  }, {
    icon: Bot,
    title: 'AI Integration',
    description: 'Smart artificial intelligence solutions to automate and optimize your workflows.',
    gradient: 'bg-gradient-to-br from-green-400 to-teal-500'
  }, {
    icon: Shield,
    title: 'Cybersecurity',
    description: 'Robust security protocols to protect your digital assets and user data.',
    gradient: 'bg-gradient-to-br from-pink-500 to-purple-600'
  }, {
    icon: Terminal,
    title: 'DevOps',
    description: 'Streamlined development pipelines for faster and more reliable deployments.',
    gradient: 'bg-gradient-to-br from-yellow-400 to-orange-500'
  }];

  useEffect(() => {
    AOS.init({
       duration: 800,
      once: false
    });
  }, []);
  return <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Our{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
              Services
            </span>
          </motion.h2>
          <motion.p initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          delay: 0.2
        }} className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive digital solutions tailored to your unique business
            needs.
          </motion.p>
        </div>

        <div data-aos="zoom-in" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => <ServiceCard key={index} {...service} delay={index * 0.1} />)}
        </div>
      </div>
    </section>;
}