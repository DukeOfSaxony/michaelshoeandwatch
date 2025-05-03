import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1c1c1c] text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About Column */}
          <div>
            <div className="flex items-center mb-6">
              <div className="h-12 mr-3">
                <img src="/assets/michaels-logo.png" alt="Michael's Shoe Repair" className="h-full" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-lg text-white">SHOE REPAIR</h3>
              </div>
            </div>
            <p className="font-body text-gray-300 mb-6">
              Brooklyn's premier shoe repair service for over 30 years. Specializing in traditional craftsmanship and modern techniques to extend the life of your favorite footwear.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-[#ffb340] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-[#ffb340] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.066 9.645c.183 4.04-2.83 8.544-8.164 8.544-1.622 0-3.131-.476-4.402-1.291 1.524.18 3.045-.244 4.252-1.189-1.256-.023-2.317-.854-2.684-1.995.451.086.895.061 1.298-.049-1.381-.278-2.335-1.522-2.304-2.853.388.215.83.344 1.301.359-1.279-.855-1.641-2.544-.889-3.835 1.416 1.738 3.533 2.881 5.92 3.001-.419-1.796.944-3.527 2.799-3.527.825 0 1.572.349 2.096.907.654-.128 1.27-.368 1.824-.697-.215.671-.67 1.233-1.263 1.589.581-.07 1.135-.224 1.649-.453-.384.578-.87 1.084-1.433 1.489z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-[#ffb340] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-[#ffb340] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.441 16.892c-2.102.144-6.784.144-8.883 0-2.276-.156-2.541-1.27-2.558-4.892.017-3.629.285-4.736 2.558-4.892 2.099-.144 6.782-.144 8.883 0 2.277.156 2.541 1.27 2.559 4.892-.018 3.629-.285 4.736-2.559 4.892zm-6.441-7.234l4.917 2.338-4.917 2.346v-4.684z"/>
                </svg>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-lg text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#about" className="font-body text-gray-300 hover:text-[#ffb340] transition-colors">About Us</a></li>
              <li><a href="#services" className="font-body text-gray-300 hover:text-[#ffb340] transition-colors">Services</a></li>
              <li><a href="#prices" className="font-body text-gray-300 hover:text-[#ffb340] transition-colors">Price List</a></li>
              <li><a href="#gallery" className="font-body text-gray-300 hover:text-[#ffb340] transition-colors">Gallery</a></li>
              <li><a href="#testimonials" className="font-body text-gray-300 hover:text-[#ffb340] transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="font-body text-gray-300 hover:text-[#ffb340] transition-colors">Contact Us</a></li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="font-heading font-semibold text-lg text-white mb-6">Our Services</h3>
            <ul className="space-y-3">
              <li><a href="#services" className="font-body text-gray-300 hover:text-[#ffb340] transition-colors">Sole Replacement</a></li>
              <li><a href="#services" className="font-body text-gray-300 hover:text-[#ffb340] transition-colors">Heel Repair</a></li>
              <li><a href="#services" className="font-body text-gray-300 hover:text-[#ffb340] transition-colors">Leather Restoration</a></li>
              <li><a href="#services" className="font-body text-gray-300 hover:text-[#ffb340] transition-colors">Shoe Stretching</a></li>
              <li><a href="#services" className="font-body text-gray-300 hover:text-[#ffb340] transition-colors">Orthopedic Modifications</a></li>
              <li><a href="#services" className="font-body text-gray-300 hover:text-[#ffb340] transition-colors">Sneaker Cleaning</a></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="font-heading font-semibold text-lg text-white mb-6">Contact Information</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 mt-1 text-[#ffb340]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="font-body text-gray-300">
                  319 Smith Street<br/>Carroll Gardens, Brooklyn<br/>NY 11231
                </span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 mt-1 text-[#ffb340]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="font-body text-gray-300">(718) 555-1234</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 mt-1 text-[#ffb340]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="font-body text-gray-300">info@michaelsshoerepair.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="font-body text-sm text-gray-400 mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Michael's Shoe Repair. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="font-body text-sm text-gray-400 hover:text-[#ffb340] transition-colors">Privacy Policy</a>
              <a href="#" className="font-body text-sm text-gray-400 hover:text-[#ffb340] transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
