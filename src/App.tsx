import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Statistics } from './components/Statistics';
import { Services } from './components/Services';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Process } from './components/Process';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';
export function App() {
  return <div className="font-sans text-gray-900 bg-white">
      <Navbar />
      <main>
        <Hero />
      
        <Services />
       
        <WhyChooseUs />
        <Statistics />
        <Process />
           
        <Testimonials />
      </main>
      <Footer /><a
  href="tel:+91934318529h4"
 className="animate-bounce fixed bottom-20 right-5 bg-green-500 hover:bg-green-600
          text-white p-4 my-10 rounded-full shadow-lg
          flex items-center justify-center z-50"
>
  📞
</a>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/919343185294?text=Hello%20I%20want%20Connect%20regarding%20Mirchi%20Masala%20products"
        target="_blank"
        className="animate-bounce fixed bottom-0 right-5 bg-green-500 hover:bg-green-600
          text-white p-4 my-10 rounded-full shadow-lg
          flex items-center justify-center z-50"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-7 h-7 fill-white">
          <path d="M16 .3C7.3.3.3 7.3.3 16c0 2.8.7 5.5 2.1 7.9L.1 31.7l7.9-2.1
          c2.3 1.3 5 2.1 7.9 2.1 8.7 0 15.7-7 15.7-15.7S24.7.3 16 .3z"/>
        </svg>
      </a>

    </div>;
}