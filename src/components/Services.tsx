import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "aos/dist/aos.css";
import AOS from "aos";
import { Code, Smartphone, Cloud, Bot, Shield, Terminal } from "lucide-react";

const ServiceCard = ({
  icon: Icon,
  title,
  description,
  gradient,
  delay,
  bgImage,
}: any) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.05, rotate: 2 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className={`relative p-8 rounded-3xl ${gradient} text-white shadow-lg cursor-pointer bg-slate-50 group overflow-hidden`}
    >
      {/* 🔥 Card Background Image */}
      <div
        className={`absolute inset-0 bg-cover bg-center transition-opacity duration-500 ${
          hovered ? "opacity-30" : "opacity-0"
        }`}
        style={{ backgroundImage: `url(${bgImage})` }}
      />

      {/* Overlay (for readability) */}
      <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Content */}
      <div className="relative z-10">
        <div className="bg-white/20 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-sm group-hover:bg-white/30 transition-colors">
          <Icon className="w-8 h-8 text-white" />
        </div>

        <h3 className="text-2xl font-bold mb-3">{title}</h3>

        {/* Description – hover expand */}
        <p
          className={`text-white/80 leading-relaxed transition-all duration-500 ${
            hovered ? "max-h-40 opacity-100" : "max-h-12 opacity-80"
          } overflow-hidden`}
        >
          {description}
        </p>

        {/* Hint */}
        <span
          className={`mt-4 inline-block text-sm font-semibold transition-opacity duration-300 ${
            hovered ? "opacity-0" : "opacity-80"
          }`}
        >
          Hover to read more
        </span>
      </div>
    </motion.div>
  );
};

export function Services() {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description:
        "Custom websites built with modern frameworks that convert visitors into customers. Performance, scalability, and clean UI are our focus.",
      gradient: "bg-gradient-to-br from-purple-500 to-pink-500",
      bgImage:
        "https://images.unsplash.com/photo-1526378722484-bd91ca387e72",
    },
    {
      icon: Smartphone,
      title: "Mobile Apps",
      description:
        "Native and cross-platform mobile applications for iOS and Android with smooth UX and high performance.",
      gradient: "bg-gradient-to-br from-blue-500 to-cyan-500",
      bgImage:
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description:
        "Scalable cloud infrastructure, migration, and management services for modern businesses.",
      gradient: "bg-gradient-to-br from-orange-400 to-red-500",
      bgImage:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
    },
    {
      icon: Bot,
      title: "AI Integration",
      description:
        "AI-powered automation and intelligent systems to optimize workflows and decision-making.",
      gradient: "bg-gradient-to-br from-green-400 to-teal-500",
      bgImage:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995",
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description:
        "Advanced security strategies to protect your applications, servers, and user data.",
      gradient: "bg-gradient-to-br from-pink-500 to-purple-600",
      bgImage:
        "https://images.unsplash.com/photo-1510511459019-5dda7724fd87",
    },
    {
      icon: Terminal,
      title: "DevOps",
      description:
        "CI/CD pipelines, automation, and monitoring for faster and reliable deployments.",
      gradient: "bg-gradient-to-br from-yellow-400 to-orange-500",
      bgImage:
        "https://images.unsplash.com/photo-1555949963-aa79dcee981c",
    },
  ];

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);

  return (
    <section id="services" className="py-24 bg-slate-100 z-10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4"
          >
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
              Services
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-2xl capitalize mx-auto"
          >
            Comprehensive digital solutions tailored to your unique business
            needs.
          </motion.p>
        </div>

        <div
          data-aos="slide-up"
          className="grid capitalize grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} delay={index * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}
