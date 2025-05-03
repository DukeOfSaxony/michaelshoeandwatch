import React, { useRef } from 'react';
import useAnimationObserver from '@/hooks/useAnimationObserver';

const PriceItem: React.FC<{ service: string; price: string }> = ({ service, price }) => (
  <div className="flex justify-between items-center border-b border-gray-200 pb-3">
    <span className="font-body">{service}</span>
    <span className="font-heading font-semibold text-[#aa1e1e]">{price}</span>
  </div>
);

const Prices: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  useAnimationObserver(sectionRef);

  const mensPrices = [
    { service: "Full Sole & Heel", price: "$85 - $120" },
    { service: "Half Sole", price: "$45 - $65" },
    { service: "Rubber Heel", price: "$25 - $35" },
    { service: "Leather Heel", price: "$30 - $45" },
    { service: "Shoe Shine", price: "$10 - $15" },
    { service: "Stretching (per shoe)", price: "$15 - $25" }
  ];

  const womensPrices = [
    { service: "Heel Caps", price: "$15 - $25" },
    { service: "Heel Replacement", price: "$30 - $45" },
    { service: "Sole Protectors", price: "$25 - $35" },
    { service: "Elastic Repair", price: "$20 - $30" },
    { service: "Strap Replacement", price: "$25 - $40" },
    { service: "Color Change", price: "$45 - $85" }
  ];

  const specialtyPrices = [
    { service: "Orthopedic Build-up", price: "$55 - $85" },
    { service: "Custom Insoles", price: "$75 - $120" },
    { service: "Complete Restoration", price: "$120 - $250" },
    { service: "Boot Zipper Replacement", price: "$45 - $60" },
    { service: "Waterproofing", price: "$15 - $30" },
    { service: "Sneaker Restoration", price: "$40 - $90" }
  ];

  return (
    <section id="prices" ref={sectionRef} className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-[#1c1c1c] mb-4 fade-in">Price List</h2>
          <p className="font-body text-gray-700 max-w-2xl mx-auto fade-in stagger-delay-1">
            Our transparent pricing ensures you know exactly what to expect. All prices may vary depending on the condition and material of your shoes.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Men's Repairs */}
          <div className="bg-[#f5f5f5] rounded-lg shadow-md p-6 scale-in">
            <h3 className="font-heading font-semibold text-2xl text-[#1c1c1c] mb-6 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-[#aa1e1e]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              Men's Repairs
            </h3>
            
            <div className="space-y-4">
              {mensPrices.map((item, index) => (
                <PriceItem key={index} service={item.service} price={item.price} />
              ))}
            </div>
          </div>
          
          {/* Women's Repairs */}
          <div className="bg-[#f5f5f5] rounded-lg shadow-md p-6 scale-in stagger-delay-1">
            <h3 className="font-heading font-semibold text-2xl text-[#1c1c1c] mb-6 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-[#aa1e1e]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Women's Repairs
            </h3>
            
            <div className="space-y-4">
              {womensPrices.map((item, index) => (
                <PriceItem key={index} service={item.service} price={item.price} />
              ))}
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Specialty Services */}
          <div className="bg-[#f5f5f5] rounded-lg shadow-md p-6 scale-in stagger-delay-2">
            <h3 className="font-heading font-semibold text-2xl text-[#1c1c1c] mb-6 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-[#aa1e1e]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Specialty Services
            </h3>
            
            <div className="space-y-4">
              {specialtyPrices.map((item, index) => (
                <PriceItem key={index} service={item.service} price={item.price} />
              ))}
            </div>
          </div>
          
          {/* Estimates */}
          <div className="bg-[#aa1e1e] bg-opacity-10 rounded-lg shadow-md p-6 scale-in stagger-delay-3">
            <h3 className="font-heading font-semibold text-2xl text-[#1c1c1c] mb-6 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-[#aa1e1e]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Free Estimates
            </h3>
            
            <p className="font-body text-gray-700 mb-6">
              We provide free evaluations and price quotes for all repair services. Bring your shoes in for an expert assessment with no obligation.
            </p>
            
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h4 className="font-heading font-semibold text-xl text-[#aa1e1e] mb-3">Our Promise</h4>
              <p className="font-body text-gray-700 mb-4">
                All repairs are guaranteed for 30 days. If you're not satisfied with our work, bring your shoes back and we'll make it right.
              </p>
              <a 
                href="#contact" 
                className="inline-block bg-[#aa1e1e] text-white font-heading font-semibold px-6 py-2 rounded hover:bg-opacity-90 transition-colors"
              >
                Get Your Free Estimate
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Prices;
