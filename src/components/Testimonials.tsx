import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
const TestimonialCard = ({
  name,
  role,
  image,
  content,
  delay
}: any) => <motion.div initial={{
  opacity: 0,
  x: 50
}} whileInView={{
  opacity: 1,
  x: 0
}} viewport={{
  once: true
}} transition={{
  duration: 0.6,
  delay
}} className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 relative group">
    <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-sm" />

    <div className="flex items-center space-x-1 mb-6">
      {[...Array(5)].map((_, i) => <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />)}
    </div>

    <p className="text-gray-600 mb-8 text-lg italic leading-relaxed">
      "{content}"
    </p>

    <div className="flex items-center space-x-4">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-tr from-purple-500 to-pink-500 rounded-full blur-sm opacity-70" />
        <img src={image} alt={name} className="w-14 h-14 rounded-full object-cover relative z-10 border-2 border-white" />
      </div>
      <div>
        <h4 className="font-bold text-gray-900">{name}</h4>
        <p className="text-sm text-purple-600 font-medium">{role}</p>
      </div>
    </div>
  </motion.div>;
export function Testimonials() {
  const testimonials = [{
    name: 'Sarah Johnson',
    role: 'CEO, TechStart',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    content: 'The team at VibrantTech completely transformed our digital presence. Their attention to detail and creative solutions are unmatched.'
  }, {
    name: 'Michael Chen',
    role: 'Founder, GrowthLabs',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    content: 'Incredible energy and technical expertise. They delivered our complex platform ahead of schedule and it looks absolutely stunning.'
  }, {
    name: 'Emily Davis',
    role: 'Marketing Director, FutureCorp',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    content: 'Working with them was a breeze. They understood our vision immediately and executed it with precision and flair.'
  }];
  return <section id="testimonials" className="py-24 bg-white">
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
            Client{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500">
              Stories
            </span>
          </motion.h2>
          <p className="text-xl text-gray-600">
            Don't just take our word for it.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => <TestimonialCard key={index} {...testimonial} delay={index * 0.2} />)}
        </div>
      </div>
    </section>;
}