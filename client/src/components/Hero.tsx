import React, { useRef } from 'react';
import useAnimationObserver from '@/hooks/useAnimationObserver';
import hikeImage from '@assets/hike.jpg';

const Hero: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  useAnimationObserver(sectionRef);

  return (
    <section 
      id="hero" 
      ref={sectionRef}
      className="pt-24 md:pt-32 pb-16 md:pb-24 bg-cover bg-center min-h-screen flex items-center" 
      style={{
        backgroundImage: `url(${hikeImage})`,
        backgroundColor: 'rgba(0,0,0,0.65)',
        backgroundBlendMode: 'overlay'
      }}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
          <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-6 fade-in">
            Craftsmanship in Every Repair
          </h1>
          <p className="font-body text-lg md:text-xl text-gray-200 mb-8 max-w-2xl fade-in stagger-delay-1">
            Brooklyn's finest shoe repair service since 1985. Traditional techniques meet modern standards at Michael's Shoe Repair in Carroll Gardens.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 fade-in stagger-delay-2">
            <a 
              href="#prices" 
              className="bg-[#aa1e1e] text-white font-heading font-semibold px-8 py-3 rounded text-center hover:bg-opacity-90 transition-colors"
            >
              Price List
            </a>
            <a 
              href="#contact" 
              className="bg-transparent border-2 border-white text-white font-heading font-semibold px-8 py-3 rounded text-center hover:bg-white hover:text-[#1c1c1c] transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
