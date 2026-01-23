// import React from 'react';
// import { motion } from 'framer-motion';
// import { Award, Users, Zap, ShieldCheck } from 'lucide-react';
// const FeatureItem = ({
//   icon: Icon,
//   title,
//   description,
//   color,
//   delay
// }: any) => <motion.div initial={{
//   opacity: 0,
//   x: -50
// }} whileInView={{
//   opacity: 1,
//   x: 0
// }} viewport={{
//   once: true
// }} transition={{
//   duration: 0.6,
//   delay
// }} className="flex items-start space-x-4 mb-8">
//     <div className={`flex-shrink-0 w-12 h-12 rounded-xl ${color} flex items-center justify-center text-white shadow-lg`}>
//       <Icon size={24} />
//     </div>
//     <div>
//       <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
//       <p className="text-gray-600 leading-relaxed">{description}</p>
//     </div>
//   </motion.div>;
// export function WhyChooseUs() {
//   return <section id="why-us" className="py-24 bg-white overflow-hidden">
//       <div  className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex flex-col lg:flex-row items-center gap-16">
//           {/* Left Content */}
//           <div data-aos="fade-right" className="lg:w-1/2 ">
//             <motion.div initial={{
//             opacity: 0,
//             y: 20
//           }} whileInView={{
//             opacity: 1,
//             y: 0
//           }} viewport={{
//             once: true
//           }}>
//               <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
//                 Why Choose <br />
//                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">
//                   Xlligent Software
//                 </span>
//               </h2>
//               <p className="text-xl text-gray-600 mb-12">
//                 We don't just write code; we build digital legacies. Our team
//                 combines creative flair with technical excellence.
//               </p>
//             </motion.div>

//             <div className="space-y-2">
//               <FeatureItem icon={Award} title="Award-Winning Design" description="Recognized for excellence in user interface and user experience design." color="bg-gradient-to-br from-yellow-400 to-orange-500" delay={0.2} />
//               <FeatureItem icon={Users} title="Client-Centric Approach" description="We work as an extension of your team, prioritizing your goals above all." color="bg-gradient-to-br from-pink-500 to-rose-500" delay={0.4} />
//               <FeatureItem icon={Zap} title="Lightning Fast Performance" description="Optimized code and infrastructure for speed and reliability." color="bg-gradient-to-br from-purple-500 to-indigo-500" delay={0.6} />
//               <FeatureItem icon={ShieldCheck} title="Enterprise-Grade Security" description="Top-tier security measures to keep your data safe and compliant." color="bg-gradient-to-br from-green-400 to-emerald-600" delay={0.8} />
//             </div>
//           </div>

//           {/* Right Image/Graphic */}
//           <div data-aos="fade-left" className="lg:w-1/2 relative">
//             <motion.div initial={{
//             opacity: 0,
//             scale: 0.8,
//             rotate: -5
//           }} whileInView={{
//             opacity: 1,
//             scale: 1,
//             rotate: 0
//           }} viewport={{
//             once: false
//           }} transition={{
//             duration: 0.8
//           }} className="relative z-10">
//               <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl transform rotate-6 scale-105 opacity-20 blur-lg"></div>
//               <img src="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Team working" className="rounded-3xl shadow-2xl relative z-10 w-full object-cover h-[600px]" />

//               {/* Floating Badge */}
//               <motion.div animate={{
//               y: [0, -15, 0]
//             }} transition={{
//               duration: 4,
//               repeat: Infinity,
//               ease: 'easeInOut'
//             }} className="absolute -bottom-10 -left-10 bg-white p-6 rounded-2xl shadow-xl z-20 max-w-xs">
//                 <div className="flex items-center space-x-4">
//                   <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold">
//                     98%
//                   </div>
//                   <div>
//                     <p className="text-sm text-gray-500">Client Satisfaction</p>
//                     <p className="font-bold text-gray-900">
//                       Based on 500+ reviews
//                     </p>
//                   </div>
//                 </div>
//               </motion.div>
//             </motion.div>
//           </div>
//         </div>
//       </div>
//     </section>;
// }
import React from "react";
import { motion } from "framer-motion";
import { Award, Users, Zap, ShieldCheck } from "lucide-react";

/* ===== STATIC REVIEWS (15 ITEMS) ===== */
const staticReviews = [
  {
    name: "Rahul",
    text: "Good service and excellent work",
    stars: 5,
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Neha",
    text: "Very professional and reliable team",
    stars: 5,
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Amit",
    text: "Great experience, highly recommended",
    stars: 5,
    avatar: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    name: "Pooja",
    text: "Excellent support and fast delivery",
    stars: 5,
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    name: "Rohit",
    text: "Clean work and smooth communication",
    stars: 5,
    avatar: "https://randomuser.me/api/portraits/men/76.jpg",
  },
  {
    name: "Sneha",
    text: "Loved the quality and design",
    stars: 5,
    avatar: "https://randomuser.me/api/portraits/women/12.jpg",
  },
  {
    name: "Arjun",
    text: "Professional approach and timely delivery",
    stars: 5,
    avatar: "https://randomuser.me/api/portraits/men/22.jpg",
  },
  {
    name: "Kavita",
    text: "Amazing experience overall",
    stars: 5,
    avatar: "https://randomuser.me/api/portraits/women/30.jpg",
  },
  {
    name: "Deepak",
    text: "Highly satisfied with the service",
    stars: 5,
    avatar: "https://randomuser.me/api/portraits/men/60.jpg",
  },
  {
    name: "Riya",
    text: "Excellent work and friendly team",
    stars: 5,
    avatar: "https://randomuser.me/api/portraits/women/52.jpg",
  },
];

const FeatureItem = ({ icon: Icon, title, description, color, delay }: any) => (
  <motion.div
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
    className="flex items-start space-x-4 mb-8"
  >
    <div
      className={`flex-shrink-0 w-12 h-12 rounded-xl ${color} flex items-center justify-center text-white shadow-lg`}
    >
      <Icon size={24} />
    </div>
    <div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  </motion.div>
);

export function WhyChooseUs() {
  return (
    <>
      {/* ===== ORIGINAL SECTION (UNCHANGED) ===== */}
      <section id="why-us" className="py-24 bg-white overflow-hidden relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div  className="flex flex-col lg:flex-row items-center gap-16">
            {/* Left */}
            <div data-aos="fade-right" className="lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
                  Why Choose <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">
                    Xlligent Software
                  </span>
                </h2>
                <p className="text-xl capitalize text-gray-600 mb-12">
                  We don't just write code we build digital legacies. Our team
                  combines creative flair with technical excellence.
                </p>
              </motion.div>

              <FeatureItem
                icon={Award}
                title="Award-Winning Design"
                description="Recognized for excellence in UI/UX design."
                color="bg-gradient-to-br from-yellow-400 to-orange-500"
                delay={0.2}
              />
              <FeatureItem
                icon={Users}
                title="Client-Centric Approach"
                description="We work as an extension of your team."
                color="bg-gradient-to-br from-pink-500 to-rose-500"
                delay={0.4}
              />
              <FeatureItem
                icon={Zap}
                title="Lightning Fast Performance"
                description="Optimized code and infrastructure."
                color="bg-gradient-to-br from-purple-500 to-indigo-500"
                delay={0.6}
              />
              <FeatureItem
                icon={ShieldCheck}
                title="Enterprise-Grade Security"
                description="Top-tier security and compliance."
                color="bg-gradient-to-br from-green-400 to-emerald-600"
                delay={0.8}
              />
            </div>

            {/* Right Image */}
            <div data-aos="fade-left" className="lg:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984"
                alt="Team"
                className="rounded-3xl shadow-2xl w-full h-[600px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== STATIC REVIEWS MOVING ROW (NEW, SIMPLE) ===== */}
    {/* ===== REVIEWS MOVING LINE ===== */}
<div className="overflow-hidden border-t border-gray-200 bg-white relative  z-10">
  <div className="flex items-center gap-12 py-4 animate-reviews whitespace-nowrap">
    {[...staticReviews, ...staticReviews].map((r, i) => (
      <div
        key={i}
        className="flex items-center gap-3 bg-white px-4 py-2 rounded-full shadow-sm"
      >
        {/* Avatar */}
        <img
          src={r.avatar}
          alt={r.name}
          className="w-8 h-8 rounded-full object-cover"
        />

        {/* Text */}
        <span className="text-gray-700 capitalize text-sm">
          “{r.text}”
        </span>

        {/* Stars */}
        <span className="text-yellow-400 text-sm">
          {"★".repeat(r.stars)}
        </span>
      </div>
    ))}
  </div>
</div>

    </>
  );
}
