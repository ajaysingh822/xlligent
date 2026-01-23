import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const StatCard = ({
  label,
  value,
  suffix,
  color,
  delay
}: {
  label: string;
  value: number;
  color: string;
  suffix: string;
  delay: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false,
    margin: '-100px'
  });
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (isInView) {
      const duration = 2000; // 2 seconds
      const steps = 60;
      const stepTime = duration / steps;
      let current = 0;
      const timer = setInterval(() => {
        current += value / steps;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, stepTime);
      return () => clearInterval(timer);
    }
  }, [isInView, value]);
  return <motion.div ref={ref} initial={{
    opacity: 0,
    y: 50
  }} animate={isInView ? {
    opacity: 1,
    y: 0
  } : {}} transition={{
    duration: 0.6,
    delay
  }} className={`relative overflow-hidden rounded-3xl p-20 ${color} text-white border-lg border-black shadow-xl`} whileHover={{
    y: -10,
    scale: 1.02
  }}>
      <div className="absolute top-0 right-0  -mt-4 -mr-4 w-24 h-24 bg-white opacity-10 rounded-full blur-2xl" />
      <div className="absolute bottom-0 left-0 -mb-4  -ml-4 w-20 h-20 bg-black opacity-10 rounded-full blur-xl" />

      <div className="relative z-10">
        <h3 className="text-5xl font-extrabold mb-2">
          {count}
          {suffix}
          {label.includes('Rate') ? '%' : '+'}
           {/* {label.includes('k') ? '' : ''} */}


        </h3>
        <p className="text-lg font-medium opacity-90">{label}</p>
      </div>
    </motion.div>;
};
export function Statistics() {
  const stats = [{
    label: 'Satisfied Clients Globally ',
    value: 40,
    suffix: 'k',
    color: 'bg-gradient-to-br from-purple-500 to-indigo-600'
  }, {
    label: 'Years of driving Innovation in the Software Industry',
    value: 10,
    color: 'bg-gradient-to-br from-pink-500 to-rose-600'
  }, {
    label: 'Successful Implementations Members',
    value: 45,
    suffix: 'k',
    color: 'bg-gradient-to-br from-orange-400 to-red-500'
  },
  //  {
  //   label: 'Success Rate',
  //   value: 90,
  //   color: 'bg-gradient-to-br from-blue-400 to-cyan-500'
  // }
];
  return <section className="py-2  shadow-lg bg-white relative ">
      <div className="max-w-7xl border-2 rounded-2xl py-20 border-purple-400 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-8">
          {stats.map((stat, index) => <StatCard key={index} {...stat} delay={index * 0.1} />)}
        </div>
      </div>
    </section>;
}